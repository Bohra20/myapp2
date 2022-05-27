import './App.css';
import { About } from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
     <Navbar title= "About Text" aboutText="About TextUtils" />,
     
     <div className=' container'>
     <About />
     {/* <TextForm heading="Enter to analyse"/> */}
     </div>
    </>
)}
export default App;
