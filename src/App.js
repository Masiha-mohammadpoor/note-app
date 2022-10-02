import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import FavoritesList from "./components/FavoriteList/FavoriteList";
import EditNotes from "./components/EditNotes/EditNotes";
import PrivateNotes from "./components/PrivateNotes/PrivateNotes";
import ShowNote from "./components/ShowNote/ShowNote";
import Layout from "./Layout/Layout";
import {Routes , Route} from "react-router-dom";
import Pagination from "./components/pagination/Pagination";


const App = () => {

    // const [notes, setNotes] = useState([]);
    // const [request , setRequest] = useState("");


    //     useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const { data , statusText} = await getAllData();
    //             const filtered = await data.filter(n => n.type === "public");
    //             setNotes(filtered);
    //             setRequest(statusText);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getData();
    // }, []);

    return ( 
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Layout><Pagination/></Layout>}/>
        <Route path="/write" element={<Layout><Write/></Layout>}/>
        <Route path="/favorites" element={<Layout><FavoritesList/></Layout>}/>
        <Route path="/private" element={<Layout><PrivateNotes/></Layout>}/>
        <Route path="/edit/:id" element={<Layout><EditNotes/></Layout>}/>
        <Route path="/note/:id" element={<Layout><ShowNote/></Layout>}/>
        </Routes>
        </>
    );
}

export default App;

