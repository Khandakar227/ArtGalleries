import 'react-toastify/dist/ReactToastify.css';
import HeroSection from "./components/HeroSection";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <ToastContainer/>
    </div>
  );
}

export default App;
