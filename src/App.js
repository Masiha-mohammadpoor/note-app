import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Layout from "./Layout/Layout";
import {Routes , Route} from "react-router-dom";

const App = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Layout/>}/>
            </Routes>
        </>
    );
}
 
export default App;