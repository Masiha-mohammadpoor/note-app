import NoteList from "../NoteList/NoteList";
import {useState , useEffect} from "react";
import ReactPaginate from "react-paginate";
import getAllData from "../../Services/getAllData";
import editData from "../../Services/editData";
import deleteData from "../../Services/deleteData";

const Pagination = () => {

  const [notes, setNotes] = useState([]);
  const [request , setRequest] = useState("");

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
      const getData = async () => {
          try {
              const { data , statusText} = await getAllData();
              const filtered = await data.filter(n => n.type === "public");
              setNotes(filtered);
              setRequest(statusText);
          } catch (err) {
              console.log(err)
          }
      }
      getData();
  }, []);


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(notes.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(notes.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, notes]);


      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % notes.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };

      const likeHandler = async (noteData) => {
        try{
            const {title , text , type , like , id} = noteData;
            await editData(id , {title , text , type , like : !like});
            const {data} = await getAllData();
            const filtered = await data.filter(n => n.type === "public");
            setNotes(filtered);
        }catch(err){
            console.log(err);
        }
    }   

    const deleteHandler = async (id) => {
      try{
          await deleteData(id);
          const {data} = await getAllData();
          const filtered = await data.filter(n => n.type === "public");
          setNotes(filtered);
      }catch(err){
          console.log(err)
      }
  }


      
    return ( 
        <>
        <NoteList notes={currentItems} request={request} likeHandler={likeHandler} deleteHandler={deleteHandler}/>
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
        </>
    );
}
 
export default Pagination;