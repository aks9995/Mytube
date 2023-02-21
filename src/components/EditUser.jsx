import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
    Typography,
    Button,
    styled,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import { getUser, editUser } from "../service/api";
  
  const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
      margin-top: 1rem;
    }
  `;
  
  const initialValues = {
    name:"",
    username:"",
    email:"",
    phone:""
  }
  const EditUser = () => {
  
    const Navigate = useNavigate()
    const {id} = useParams()
  
    const [user, setUser] = useState(initialValues)

    useEffect(() =>{
      getUserData();
    },[])

    const getUserData =async () =>{
      let response = await getUser(id)
      setUser(response.data)
    }
  
    const handleChange = (e) =>{
      setUser({...user,[e.target.name]:e.target.value})
      // console.log(user)
    }
  
    const handleClick = async () =>{
       await editUser(user, id)
       Navigate("/all")
  
    }
    return (
      <Container>
        <Typography variant="h3">Edit User</Typography>
        <FormControl>
          <InputLabel >Name</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="name" value={user.name}/>
        </FormControl>
        <FormControl>
          <InputLabel >Username</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="username" value={user.username}/>
        </FormControl>
        <FormControl>
          <InputLabel >Email</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="email" value={user.email}/>
        </FormControl>
        <FormControl>
          <InputLabel >Phone</InputLabel>
          <Input onChange={(e)=>handleChange(e)} name="phone" value={user.phone}/>
        </FormControl>
        <Button onClick={()=>handleClick()} variant="contained">Update</Button>
      </Container>
    );
  };
  
  export default EditUser;
  