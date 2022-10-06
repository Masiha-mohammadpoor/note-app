import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import FavoritesList from "./components/FavoriteList/FavoriteList";
import EditNotes from "./components/EditNotes/EditNotes";
import PrivateNotes from "./components/PrivateNotes/PrivateNotes";
import ShowNote from "./components/ShowNote/ShowNote";
import Layout from "./Layout/Layout";
import {Routes , Route} from "react-router-dom";
import Pagination from "./components/pagination/Pagination";
import NotFound from "./components/NotFound/NotFound";

const App = () => {

    return ( 
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Pagination/>}/>
        <Route path="/write" element={<Layout><Write/></Layout>}/>
        <Route path="/favorites" element={<Layout><FavoritesList/></Layout>}/>
        <Route path="/private" element={<Layout><PrivateNotes/></Layout>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/edit/:id" element={<Layout><EditNotes/></Layout>}/>
        <Route path="/note/:id" element={<Layout><ShowNote/></Layout>}/>
        </Routes>
        </>
    );
}

export default App;

