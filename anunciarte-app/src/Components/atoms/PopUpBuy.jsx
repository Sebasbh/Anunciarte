import { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from '../../assets/test.png'
const CustomButton = styled(Button)`
  background-color: #FBB936;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 1em;
  font-weight: 400;
  width: 7em;
  cursor: pointer;
  text-transform: none;
  color: white;
  margin: 1em 0 0 1em;
  &:hover{
    background-color: #FBB936;
    transform: translate(1px, 1px);
  }
`;

const CustomTypography = styled(Typography)`
  color: white;
  margin: 0 0 1em 0;
  text-align: left;
`;
const CustomButtonMain = styled(Button)`
  cursor: pointer;
  color: white;
  font-size: 1em;
  margin: 0;
`;
const CartModal = ({ title, author, category, price }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const cartData = {
      id: JSON.parse(localStorage.getItem('cartData'))?.length || 0,
      title: title,
      author: author,
      category: category,
      price: price
    };

    const existingData = JSON.parse(localStorage.getItem('cartData')) || [];

    localStorage.setItem('cartData', JSON.stringify([...existingData, cartData]));

    handleClose();
  };

  return (
    <div>
      <CustomButton onClick={handleOpen}>Comprar</CustomButton>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            backgroundColor: '#FBB936',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            padding: '1em 2em 2em 2em',
            textAlign: 'center',
            borderRadius: '1em',
          }}
        >
          <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
            <CustomButtonMain onClick={handleClose} style={{padding: '0'}}>X</CustomButtonMain>
          </div>
          <CustomTypography variant="h6" component="h2" gutterBottom style={{textAlign: 'center'}}>
            Añadir al carrito
          </CustomTypography>
          <div style={{display: 'flex', textAlign: 'left'}}>
            <div style={{
            width: '300px', 
            height: '20em', 
            overflow: 'hidden',
            marginRight: '2em'
          }}>
            <img src={Image} alt="Arte" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <CustomTypography variant="body1" style={{fontSize: '1.4em' }}>{title}</CustomTypography>
          <CustomTypography variant="body1">{category}</CustomTypography>
          <CustomTypography variant="body1">By: {author}</CustomTypography>
          <CustomTypography variant="body1" style={{fontSize: '1.4em' }}>${price}</CustomTypography>
          <CustomButton onClick={handleSave} style={{
            backgroundColor: '#1D5AD5', marginLeft: '0'
          }}>Añadir</CustomButton>
          </div>
          </div>
          
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
