import React from 'react'
import Button from "@mui/material/Button";

function TaskCard({data , index}) {
  return (
      <div > 
          
          <h1> {index+1} - Name : {data?.name} </h1>
          <h2> Due Date : {data?.dueDate}</h2>
          <h2>Completion Status : {data?.status ? "Completed" : "Uncomplete"}</h2>
    </div>
  )
}

export default TaskCard