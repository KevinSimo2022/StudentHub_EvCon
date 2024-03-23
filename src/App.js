import './App.css';
import LayoutPage from './Components/Main Page/LayoutPage';
import Navbar from './Components/Navbar/Navbar';
import HorizontalLinearStepper from './CreateYourGroup/HorizontalLinearStepper';
import Home from './Pages/HomePage';
import AllRoutes from './Routes/AllRoutes';
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCkm9bUM3crx4_E54IabeHS9h2LEcyChY8",
  authDomain: "fir-auth-2910.firebaseapp.com",
  projectId: "fir-auth-2910",
  storageBucket: "fir-auth-2910.appspot.com",
  messagingSenderId: "446593629319",
  appId: "1:446593629319:web:1c856a22bbac6ded5d0c22",
  measurementId: "G-HEVR6G6HFX"
};

firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
    <AllRoutes/>
    </div>
  );
}

export default App;
