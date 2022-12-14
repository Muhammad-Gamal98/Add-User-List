import React from "react";
import Card from "../UI/Card";

import styles from './UserList.module.css';

const UserList = props => {
  return <Card className={styles.users}>
    <ul>
      {props.users.map(el => (
        <li key={el.id}>{ el.name } ({el.age} years old)</li>
      ))}
    </ul>

  </Card>
}
export default UserList;