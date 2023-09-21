import './App.css';
// import Post from "./post.js";
// import Header from "./header.js"
import {Route, Routes} from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { UserContextProvider} from './UserContext';
import CreatePost from './pages/createPost';
import PostPage from "./pages/PostPage";
import EditPost from './pages/EditPost';

  
function App() { 
  return (
    <UserContextProvider>
       <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<IndexPage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/edit/:id" element={<EditPost />} />       
        </Route> 
       </Routes>
    </UserContextProvider>
    
  );
}

export default App;
