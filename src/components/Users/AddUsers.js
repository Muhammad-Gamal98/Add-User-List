import React, { useState } from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import ErrorModel from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = props => {
  const [input, setInput] = useState({ name: '', age: '' });
  const [showErrorModel, SetShowErrorModel] = useState(false);
  const submitHandler = event => {
    event.preventDefault();
    if (
      (input.name.trim().length === 0 || input.age.trim().length === 0) ||
      +input.age < 1
    ) {
      console.log("enter user and age or valid");
      input.age<1 && SetShowErrorModel(true);
      return;
    }
    props.OnAddUser(input)
    setInput({ name: "", age: "" });
  }
   const useNameHandlerChange = (event) => {
     setInput((previnput) => {
       return { ...previnput, name: event.target.value };
     });
   };
  const ageHandlerChange = event => {
    setInput(previnput => {
      return {...previnput,age:event.target.value}
    })
    // setInput({ ...input, age: event.target.value });
  }
  const ErroModelHandler = () => {
    SetShowErrorModel(false);
  }
  
  return (
    <>
      {showErrorModel && (
        <ErrorModel
          title="An Error Occured!"
          message="Some thing went wrong!"
          onClick={ErroModelHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="user">User Name</label>
          <input
            id="user"
            type="text"
            value={input.name}
            onChange={useNameHandlerChange}
          />
          <label htmlFor="age">Age (year)</label>
          <input
            id="age"
            type="number"
            value={input.age}
            onChange={ageHandlerChange}
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </>
  );
}
export default AddUser