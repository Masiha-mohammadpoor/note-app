import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import Layout from "./Layout/Layout";
import {Routes , Route} from "react-router-dom";

const App = () => {
    return ( 
        <>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Layout></Layout>}/>
        <Route path="/write" element={<Layout><Write/></Layout>}/>
        </Routes>
        </>
    );
}

export default App;

//http://localhost:3001/notes