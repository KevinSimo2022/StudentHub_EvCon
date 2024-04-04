import './App.css';
import LayoutPage from './Components/Main Page/LayoutPage';
import Navbar from './Components/Navbar/Navbar';
import HorizontalLinearStepper from './CreateYourGroup/HorizontalLinearStepper';
import Home from './Pages/HomePage';
import AllRoutes from './Routes/AllRoutes';
import "./App.css";
import { AuthContextProvider } from './redux/auth/context/AuthContext';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
    <AllRoutes/>
    </AuthContextProvider>
    </div>
  );
}

export default App;
