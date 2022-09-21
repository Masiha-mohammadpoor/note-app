import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Routes , Route} from "react-router-dom";

const App = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Header/>}/>
                {/* <Route path="/" element={<Home/>}/> */}
            </Routes>
        </>
    );
}
 
export default App;