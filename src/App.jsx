import { useState, useEffect } from "react";
import axios from "axios";
import New from "./components/New";
import InProgress from "./components/InProgress";
import Complete from "./components/Complete";
import './App.css'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [allData, setAllData] = useState([])
  const [inProgressStatus, setInProgressStatus] = useState([])
  const [completeStatus, setCompleteStatus] = useState([])
  
  useEffect(() => {
      const callApi = async() => {
        try {
          const response = await axios.get('https://mxpertztestapi.onrender.com/api/adventure');
          setAllData(response.data)
          
        } catch (error) {
          console.log(error);
        }
      }
      callApi()
    }, [])
    // console.log("allData", allData);
    const updateNewStatus = (_id, newStatus) => {
      console.log("updateNewStatus",_id,newStatus);
      const dataIndex =  allData.findIndex(data => data._id === _id);
      const updatedData = {...allData[dataIndex], Status: newStatus};

      const filterData =  allData.filter(data => data._id !== _id);
      setAllData(filterData)
      if(newStatus === "In Progress") {
        setInProgressStatus([...inProgressStatus, updatedData])
      }
    }

    const updateInProgressStatus = (_id, newStatus) => {
      console.log("we are in updateInProgressStatus ->",_id,newStatus);
      const dataIndex =  inProgressStatus.findIndex(data =>  data._id === _id)
      const updatedData = {...inProgressStatus[dataIndex], Status: newStatus};

      const filterData = inProgressStatus.filter(data =>  data._id !== _id);
      setInProgressStatus(filterData)
      if (newStatus ===  "complete")
        setCompleteStatus([...completeStatus,updatedData])
    }

    console.log("app.jsx inprogress",inProgressStatus);

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
          <Route path='/new' element={<New allData={allData} updateStatus={updateNewStatus}/>}/>
          <Route path='/inprogress' element={<InProgress inProgressStatus={inProgressStatus} updateStatus={updateInProgressStatus} />}/>
          <Route path='/complete' element={<Complete completeStatus={completeStatus} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
