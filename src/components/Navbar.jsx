import React from 'react'
import { AppBar,Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
 background:black;
`

const Tabs = styled(NavLink)`
font-size:20px;
margin-right:12px;
text-decoration: none;
color:inherit;
`

const Navbar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/">CRUD App</Tabs>
            <Tabs to="/all">All Users</Tabs>
            <Tabs to="/add">Add User</Tabs>
        </Toolbar>
    </Header>
  )
}

export default Navbar