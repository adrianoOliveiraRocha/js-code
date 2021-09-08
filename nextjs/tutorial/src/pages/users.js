import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState();

  async function fetchUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  function Response() {
    if(users) {
      return (      
        <div>
          <div>Pronto {users.length}</div>
        {
          users.map((user) => {
            console.log(`user: ${user.name}`);
            <p>User: {user.name}</p>
          })
        }
        </div>
      )
    } else {
      return (
        <div>Reading...</div>
      )
    }
  }

  return (
    <Response />
  )
}