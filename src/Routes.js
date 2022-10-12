import Home from "./components/Home/Home";
import Write from "./components/Write/Write";
import FavoritesList from "./components/FavoriteList/FavoriteList";
import EditNotes from "./components/EditNotes/EditNotes";
import PrivateNotes from "./components/PrivateNotes/PrivateNotes";
import ShowNote from "./components/ShowNote/ShowNote";
import Pagination from "./components/pagination/Pagination";
import NotFound from "./components/NotFound/NotFound";
import CheckList from "./components/CheckList/CheckList";
import About from "./components/About/About";


const Routes = [
    {path : "/" , element : <Home/> , layout : false},
    {path : "/notes" , element : <Pagination /> , layout : true },
    {path : "/write" , element : <Write/> , layout : true},
    {path : "/favorites" , element : <FavoritesList/> , layout : true},
    {path : "/private" , element : <PrivateNotes/> , layout : true},
    {path : "/check-list" , element : <CheckList/> , layout : true},
    {path : "/about" , element : <About/> , layout : true},
    {path : "*" , element : <NotFound/> , layout : false},
    {path : "/edit/:id" , element : <EditNotes/> , layout : true},
    {path : "/note/:id" , element : <ShowNote/> , layout : true},
];

export default Routes;