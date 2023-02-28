import {Routes,Route} from 'react-router-dom';
// import {Navbar,Home,CreatePost,PostDetails} from "./";
import Navbar from "./Navbar";
import Home from "./Home";
import CreatePost from "./CreatePost";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="container">
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/post/:postId" element={<PostDetails/>} />
        <Route exact path="/create-post" element={<CreatePost/>} />
     </Routes>
    </div>
  );
}

export default App;
