import { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)`
  background-color: #FBB936;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
  text-transform: none;
  color: white;
  margin: 1em 0 0 0;
  &:hover{
    background-color: #FBB936;
    transform: translate(1px, 1px);
  }
`;

const CustomTypography = styled(Typography)`
  color: white;
  margin: 1em 0;
`;

const CartModal = ({ image, name, author, category, price }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const cartData = {
      id: JSON.parse(localStorage.getItem('cartData'))?.length || 0,
      image: image,
      name: name,
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
      <CustomButton onClick={handleOpen}>Buy</CustomButton>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: '#FBB936',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            padding: '2em',
            textAlign: 'center',
            borderRadius: '1em',
          }}
        >
          <CustomTypography variant="h6" component="h2" gutterBottom>
            Add to cart
          </CustomTypography>
          <div>
            <img src={image} alt="Content" style={{ width: '100%', height: 'auto' }} />
          </div>
          <CustomTypography variant="body1">{name}</CustomTypography>
          <CustomTypography variant="body1">{author}</CustomTypography>
          <CustomTypography variant="body1">{category}</CustomTypography>
          <CustomTypography variant="body1">${price}</CustomTypography>
          <CustomButton onClick={handleSave} style={{
            backgroundColor: '#1D5AD5',
          }}>Add</CustomButton>
        </div>
      </Modal>
    </div>
  );
};

export default CartModal;
