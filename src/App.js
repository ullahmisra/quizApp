import "./App.css";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";
import QuizQuestions from "./Pages/QuizQuestions";
import {Routes, Route} from "react-router-dom"
import Result from "./Pages/Result";


function App() {
  return (
    <>
      {/* welcome screen start */}
      <div className="appContainer">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/registration" element={<RegisterPage/>}/>
        <Route path="/question/:id" element={<QuizQuestions/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
      </div>
      
      {/* welcome screen end */}
      {/* userRegistration page start */}
      
      {/* userRegistration page end */}
    </>
  );
}

export default App;
