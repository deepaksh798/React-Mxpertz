import { useState, useEffect } from "react";
import axios from "axios";
import New from "./components/New";
import InProgress from "./components/InProgress";
import Complete from "./components/Complete";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [result, setResult] = useState([])
    const [fetchData, setFetchData] = useState(true)

  
  useEffect(() => {
     if (fetchData) {
      const callApi = async() => {
        try {
          const response = await axios.get('https://mxpertztestapi.onrender.com/api/adventure');
          setResult(response.data)
          console.log("result", result);
          
        } catch (error) {
          console.log(error);
        }  
      }    
      callApi()
    }
  setFetchData(false)
  }, [])


  return (
    <>
    <Router>
    <Navbar />
      <Routes>
          <Route path='/new' element={<New result={result} />}/>
          <Route path='/inprogress' element={<InProgress result={result} />}/>
          <Route path='/complete' element={<Complete result={result} />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
