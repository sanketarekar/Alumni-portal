// import logo from './logo.svg';
import './App.css';

import ImageScroller from './MyComponents/ImageScroller';
import Navbar from './MyComponents/Navbar';
import Atsvideos from './MyComponents/Atsvideos';


function App() {
  return (
    <div className="OutContainer">
      <Navbar/>
      <ImageScroller />
      
      <Atsvideos/>
     
    </div>
  );
}

export default App;
