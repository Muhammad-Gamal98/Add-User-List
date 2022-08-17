import React from "react";
import Button from "../UI/Button";
import Card from '../UI/Card'
import styles from './AddUser.module.css'

const AddUser = props => {
  const submitHandler = event => {
    event.preventDefault();
  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="user">User Name</label>
        <input id="user" type="text" />
        <label htmlFor="age">Age (year)</label>
        <input id="age" type="number" />
        <Button type="submit">AddUser</Button>
      </form>
    </Card>
  );
}
export default AddUser