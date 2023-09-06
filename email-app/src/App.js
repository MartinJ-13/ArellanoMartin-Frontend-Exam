import './App.css';
import EmailButtons from './components/EmailButtons';
import Email from './components/Email';
function App() {
  return (
    <div className="font-poppins mx-10">

    <EmailButtons/>

    <hr className=" my-5 border-0 h-0.5 bg-gray-200"/>

    <div className="font-bold text-gray-300"> Unread </div>
    <Email/>
    </div>
  );
}

export default App;
