
import "./App.css";
import Article from "./Pages/Article";
import Home from "./Pages/Home";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  
  
  
  return (
    <>
     <nav className="navbar">
        <div className="nav-logo">Learn Link</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          
        </div>
      </nav>
     
     {/* routes*/}
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Article/>}/>
     </Routes>
    </>
  )
}

export default App
