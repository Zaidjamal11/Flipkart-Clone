import { Box, Button, Typography , styled } from '@mui/material';

import { addElipsis } from '../../utils/common-utils';

import  GroupedButton  from '../../components/cart/ButtonGrouped';

const Component = styled(Box)`
   border-top: 1px solid #f0f0f0;
   display: flex;
   background: #fff;


`;

const LeftComponent = styled(Box)`
  margin:20px;
  display: flex;
  flex-direction: column;
`;

const smallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`


const CartItem = ({ item }) => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';


  return (
    <Component>
        <LeftComponent>
          <img src={item.url} alt="product" style={{ height: 110}} />
          <GroupedButton />

        </LeftComponent>

        <Box style={{ margin: '20px'}}>
          <Typography>{addElipsis(item.title.longTitle)}</Typography>
          <smallText>Seller : RetailNet
            <Box component="span"><img src={fassured} alt="flikart" style={{ width: 50, marginLeft: 10}}  /></Box>
          </smallText>
          <Typography style={{ margin: '20px 0px'}}>
                   <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                   <Box component="span" style={{ color: '3878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                   <Box component="span" style={{ color: '#388E3C'}}>{item.price.discount}</Box>
               </Typography>
               <Remove>Remove</Remove>
           


        </Box>
    </Component>
  )
}

export default CartItem;