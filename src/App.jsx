import { Login } from "./pages/Login";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Feed from "./layouts/Feed";
import Profile from "./layouts/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainPage />}>
            <Route path="/" element={<Feed />} />
            <Route path="profile" element={<Profile />} />   
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
