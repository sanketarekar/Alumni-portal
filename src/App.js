// import logo from './logo.svg';
import './App.css';

import ImageScroller from './MyComponents/ImageScroller';
import Navbar from './MyComponents/Navbar';
import Atsvideos from './MyComponents/Atsvideos';
import LoginPage from './MyComponents/LoginPage';
import RegisterPage from './MyComponents/RegisterPage';
import Message from "./MyComponents/Message";
import News from "./MyComponents/News";
import PortalInfo from "./MyComponents/Portal-info";
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
        <Navbar />
        <Routes>
          <Route exact path="/SignUp" element={<RegisterPage />} />
          <Route exact path="/SignIn" element={<LoginPage />} />
          <Route exact path="/" element={[<ImageScroller />,<PortalInfo />,<Message />,<News />, <Atsvideos />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
