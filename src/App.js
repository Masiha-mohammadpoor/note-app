import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import FavoritesList from "./components/FavoriteList/FavoriteList";
import NoteList from "./components/NoteList/NoteList";
import Layout from "./Layout/Layout";
import {Routes , Route} from "react-router-dom";

const App = () => {
    return ( 
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Layout><NoteList/></Layout>}/>
        <Route path="/write" element={<Layout><Write/></Layout>}/>
        <Route path="/favorites" element={<Layout><FavoritesList/></Layout>}/>
        </Routes>
        </>
    );
}

export default App;

//http://localhost:3001/notes