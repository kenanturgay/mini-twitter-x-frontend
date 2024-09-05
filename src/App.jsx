import { Login } from "./pages/Login";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Feed from "./layouts/Feed";
import Profile from "./layouts/Profile";
import DummyPage from "./layouts/DummyPage";
import Signup from "./pages/Signup";
import  UserContextProvider  from "./UserContext";
import NotFound from "./pages/NotFound";
import TweetDetails from "./layouts/TweetDetails";


function App() {


  return (
    <UserContextProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainPage />}>
            <Route path="/" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="explore" element={<DummyPage />} />
            <Route path="notifications" element={<DummyPage />} />
            <Route path="messages" element={<DummyPage />} />
            <Route path="bookmarks" element={<DummyPage />} />
            <Route path="lists" element={<DummyPage />} />
            <Route path="more" element={<DummyPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Router>
    </UserContextProvider>
  );
}

export default App;
