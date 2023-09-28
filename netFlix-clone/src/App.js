import "./App.scss"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home/Home";
import Header from "./Header/Header.jsx";
import Recently from "./recentlt";
import Movies from "./movies";
import MyList from "./mylist";
import TvShows from "./tvshows";

function App() {
  return <Router>
    <Header/>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/mylist" element={<MyList/>}/>
    <Route path="/tvshows" element={<TvShows/>}/>
    <Route path="/recently" element={<Recently/>}/>
    </Routes>
  </Router>
  };

export default App;
