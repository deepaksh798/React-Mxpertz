import React from 'react'
import { useEffect, useState } from "react";

function New({result}) {
  const [progressData, setProgressData] = useState([])

  useEffect(() => {
    console.log("useEffect");
    const data = result.filter(item => item.Status === "New")
    setProgressData(data)
  }, [])

  return (
   <>
    <h1>New Component</h1>
    <div className="columns-3">
        {progressData.map(result => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10" key={result.id}>
            <a href="#">
                <img className="rounded-t-lg" src="https://img.freepik.com/free-vector/404-error-web-template-flat-style_23-2147781022.jpg?t=st=1721637360~exp=1721640960~hmac=673d53e167cb5c72b5edb14862bd50e3a61cb88d8219b4450971e3889ef68395&w=826" alt="" />
            </a>
            <div className="p-5" >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{result.Title}</h5>
                    
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {result.Status} 
                </a>
            </div>
        </div>
        ))}
    </div>
   </>
  )
}

export default New