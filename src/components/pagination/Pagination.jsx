import NoteList from "../NoteList/NoteList";
import {useState , useEffect} from "react";
import ReactPaginate from "react-paginate";
import getAllData from "../../Services/getAllData";
import editData from "../../Services/editData";
import deleteData from "../../Services/deleteData";
import styles from "./pagination.module.scss";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Col from "react-bootstrap/Col";
import swal from "sweetalert";


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
        setCurrentItems(notes.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(notes.length / itemsPerPage));
      }, [itemOffset, itemsPerPage, notes]);


      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % notes.length;
        setItemOffset(newOffset);
      };

      const likeHandler = async (noteData) => {
        try{
            const {title , text , type , date , like , id} = noteData;
            await editData(id , {title , text , type , date , like : !like});
            const {data} = await getAllData();
            const filtered = await data.filter(n => n.type === "public");
            setNotes(filtered);
        }catch(err){
            console.log(err);
        }
    }   

    const deleteHandler = (id) => {
      const deletNoteData = async () => {
        try {
          await deleteData(id);
          const {data} = await getAllData();
          const filtered = await data.filter(n => n.type === "public");
          setNotes(filtered);            
        }catch(err){
          console.error(err);
        }
      }
        swal({
          title: "Are you sure?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
              if (willDelete) {
                deletNoteData();
                  swal("this note is deleted", {
                      icon: "success",
                  });
              } else {
                  return "";
              }
          });
  }

  const searchHandler = (value) => {
    if(value){
      const endOffset = itemOffset + itemsPerPage;
      const filtered = notes.slice(itemOffset, endOffset).filter(n => {
        return n.title.toLowerCase().includes(value.toLowerCase());
      });

      setCurrentItems(filtered);
    }else {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(notes.slice(itemOffset, endOffset));
    }
  }

      
    return ( 
        <>
        <Col xl={10} xs={12} className="w-100 m-0">
        <main className="w-100 m-0">
        <NoteList notes={currentItems} request={request} likeHandler={likeHandler} deleteHandler={deleteHandler} searchHandler={searchHandler}/>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagContainer}
        pageClassName={styles.pagPage}
        pageLinkClassName={styles.pageLink}
        activeClassName={styles.activePage}
        previousClassName={styles.nextAndPrevious}
        nextClassName={styles.nextAndPrevious}
        previousLinkClassName={styles.previousAndNextLink}
        nextLinkClassName={styles.previousAndNextLink}
      />
      </main>
  </Col>

        </>
    );
}

export default Pagination;