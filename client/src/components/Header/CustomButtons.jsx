import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import  { useState, useContext } from 'react';

import { DataContext } from '../../context/DataProvider';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';





const Wrapper = styled(Box)(({theme}) => ({
  display : 'flex',
  margin: '7 3% 0 auto',
  '& > *':{
  marginRight: '40px',
  fontsize: '14px',
  alignItems: 'center'
},
[theme.breakpoints.down('md')]: {
  display: 'block'
}

}))


const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const LoginButton = styled(Button)`
 color: #2874f0;
 background: #fff;
 text-transform: none;
 padding: 5px 40px;
 border-radius: 2px;
 box-shadow: none;font-weight: 600;
 height: 32px;
 margin-left: 25px;

`



const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  const { account, setAccount} = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  }




  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/> :
        <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

      }
        

        <Typography style={{ marginTop: 3, width: 135}}> Become a Seller</Typography>
        <Typography style={{ marginTop: 3 }}> More</Typography>
        <Container>
            <ShoppingCart />
            <Typography> Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen} />

    </Wrapper>
  )
}

export default CustomButtons;