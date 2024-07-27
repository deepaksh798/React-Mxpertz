import React from 'react'

function InProgress({inProgressStatus, updateStatus}) {  

  return (
    <>
        <h1 className="text-2xl font-bold mb-4">In Progress</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {inProgressStatus.map((task,index) => (
          <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
            <a href="#">
              <img className="rounded-t-lg w-full" src="https://img.freepik.com/free-vector/audiobook-concept-illustration_114360-7084.jpg?w=826&t=st=1721734587~exp=1721735187~hmac=722f8807e150a20f5651225e4f84052c11653ecc3ed5565fe003945d3334c321" alt="" />
            </a>
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{task.Title}</h5>
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => updateStatus(task._id,'complete')}
            >
              Status: {task.Status}
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default InProgress