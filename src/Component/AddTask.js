import React from "react";
import { useForm } from "react-hook-form";
function AddTask({ setTaskArray, taskArray, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          data.status = false;
          let newArray = [...taskArray, data];
          setTaskArray(newArray);
          console.log(data);
          setOpen(false);
          localStorage.setItem("taskArray", JSON.stringify(newArray));
        })}
      >
        <label>Name :</label>
        <input {...register("name", { required: true })} />
        {errors.name && <p>Name is required.</p>}
        <br />
        <br />
        <label>Due Date : </label>
        <input {...register("dueDate")} type="date" />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddTask;
