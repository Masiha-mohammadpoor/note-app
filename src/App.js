import Layout from "./Layout/Layout";
import RoutesData from "./Routes";
import {Routes , Route} from "react-router-dom";

const App = () => {

    return ( 
        <>
        <Routes>
            {RoutesData.map(r => {
                    if(r.layout){
                        return <Route path={r.path} key={r.path} element={<Layout>{r.element}</Layout>}/>
                    }else {
                        return <Route path={r.path} key={r.path} element={r.element}/>
                    }
                })}
        </Routes>
        </>
    );
}

export default App;

