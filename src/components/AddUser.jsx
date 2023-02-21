import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

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
const AddUser = () => {

  const Navigate = useNavigate()

  const [user, setUser] = useState(initialValues)

  const handleChange = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
    // console.log(user)
  }

  const handleClick = async () =>{
     await addUser(user)
     Navigate("/all")

  }
  return (
    <Container>
      <Typography variant="h3">Add User</Typography>
      <FormControl>
        <InputLabel >Name</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel >Username</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="username"/>
      </FormControl>
      <FormControl>
        <InputLabel >Email</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel >Phone</InputLabel>
        <Input onChange={(e)=>handleChange(e)} name="phone"/>
      </FormControl>
      <Button onClick={()=>handleClick()} variant="contained">Submit</Button>
    </Container>
  );
};

export default AddUser;
