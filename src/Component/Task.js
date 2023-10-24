import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddTask from "./AddTask";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function Task() {
  const [open, setOpen] = useState(false);
  const [taskArray, setTaskArray] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let oldArray = localStorage.getItem("taskArray");
    if (oldArray) {
      setTaskArray(JSON.parse(oldArray));
    }
  }, []);
  const CompleteTask = (index) => {
    let array = taskArray;
    array[index].status = true;
    setTaskArray(array);
    localStorage.setItem("taskArray", JSON.stringify(array));
    alert(`Task ${array[index].name} Completed`);
  };

  return (
    <div>
      <h1>Task</h1>{" "}
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Task
      </Button>
      <div style={{ display: "flex", gap: "30px" }}>
        {taskArray.map((data, index) => {
          return (
            <div style={{ border: "1px solid black", borderRadius: "16px" }}>
              <TaskCard key={index} data={data} index={index} />
              {data.status ? (
                <></>
              ) : (
                <Button
                  onClick={() => {
                    CompleteTask(index);
                  }}
                >
                  Complete Task
                </Button>
              )}
            </div>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">New Task</h2>
          <AddTask
            setOpen={setOpen}
            taskArray={taskArray}
            setTaskArray={setTaskArray}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default Task;
