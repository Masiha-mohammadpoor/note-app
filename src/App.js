import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import {Routes , Route} from "react-router-dom";

const App = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Menu/>}/>
                {/* <Route path="/" element={<Home/>}/> */}
            </Routes>
        </>
    );
}
 
export default App;