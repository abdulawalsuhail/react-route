import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/about/About';
import FriendDetail from './component/friendDetail/FriendDetail';
import Friends from './component/friends/Friends';
import Header from './component/header/Header';
import Home from './component/home/Home';
import NotFound from './component/notFound/NotFound';
import Post from './component/post/Post';
import PostDetail from './component/postDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/friend/:friendId' element={<FriendDetail />}></Route>
        <Route path='/posts' element={<Post />}>
          <Route path=':postId' element={<PostDetail />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
