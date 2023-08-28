import logo from './logo.svg';
import './App.css';
import NavComp from './portfolio/NavComp';
import DrawerAppBar from './portfolio/NavComp';
import{BrowserRouter,Routes,Route,Redirect} from 'react-router-dom';
import HomeComp from './portfolio/homeComp';
import AboutComp from './portfolio/aboutComp';
import ContactComp from './portfolio/contactComp';
import MyProjectsComp from './portfolio/myProjects';
import CountdownTimer from './portfolio/projects/countdownTimer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DrawerAppBar/>
      <Routes>
        <Route path='/' element={<HomeComp/>}></Route>
        <Route path='/about' element={<AboutComp/>}></Route>
        <Route path='/contact' element={<ContactComp/>}></Route>
        <Route path='/my projects' element={<MyProjectsComp/>}></Route>
        <Route path='https://www.linkedin.com/in/akshat-bari-45531b256'></Route>
        <Route path='https://www.instagram.com/akshat_bari/'></Route>
        <Route path='/timer' element={<CountdownTimer/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
