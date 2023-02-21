import React, { useEffect, useState } from 'react'
import { deleteUser, getUsers } from '../service/api'
import { Table, TableBody, TableHead, TableRow, TableCell, styled, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const AllUsers = () => {

  const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
  `
  const Thead = styled(TableRow)`
    background: black;
    & > th {
      color:white;
    }
  `

  const [users,setUsers] = useState([]);

  useEffect(()=>{
   getUserDetails();
  },[])

  const getUserDetails =async ()=>{
    let response = await getUsers();
    // console.log(response)
    setUsers(response.data);
  }

  const deleteUserData =(id) =>{
    deleteUser(id);
    getUserDetails()
  }
   return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(item=>(
            <TableRow>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${item.id}`}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() =>{deleteUserData(item.id)}}>Delete</Button>
          </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers