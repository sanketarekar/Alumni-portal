// import logo from './logo.svg';
import './App.css';

import ImageScroller from './MyComponents/Home/ImageScroller';
import Navbar from './MyComponents/Navbar/Navbar';
import Atsvideos from './MyComponents/Home/Atsvideos';
import LoginPage from './MyComponents/Login/LoginPage';
import RegisterPage from './MyComponents/Register/RegisterPage';
// import AboutUs from './MyComponents/AboutUs';
import Message from "./MyComponents/Home/Message";
import News from "./MyComponents/Home/News";
import PortalInfo from "./MyComponents/Home/Portal-info";
import MyProfile from "./MyComponents/ProfilePage/Profile";
// import Protected from './MyComponents/Protected';
// import Message from './MyComponents/Message/Message';
// import News from './MyComponents/News/News';
// import PortalInfo from './MyComponents/PortalInfo/PortalInfo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="OutContainer">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={[<Navbar />, <ImageScroller />, <PortalInfo />, <Message />, <News />, <Atsvideos />]} />
          <Route exact path="/SignUp" element={<RegisterPage />} />
          <Route exact path="/SignIn" element={<LoginPage />} />
          <Route exact path="/MyProfile" element={<MyProfile />} />
          {/* <Route exact path="/AboutUs" element={<AboutUs />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
