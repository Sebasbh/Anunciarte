import { useState } from 'react';
import { Button, Modal, Typography, TextField } from '@mui/material';
import { validate as validateEmail } from 'react-email-validator';
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)`
  background-color: #1D5AD5;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  font-size: 1em;
  font-weight: 400;
   width: 7em;
  cursor: pointer;
  text-transform: none;
  color: white;
  margin: 1em 0 0 0;
  &:hover{
    background-color: #1D5AD5;
    transform: translate(1px, 1px);  }
`;

const CustomTextField = styled(TextField)`
  background-color: white;
`;

const CustomTextarea = styled(TextField)`
  background-color: white;
`;

const ContactModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsEmailValid(true);
    setEmailTouched(false);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (emailTouched) {
      setIsEmailValid(validateEmail(e.target.value));
    }
  };

  const handleBlur = () => {
    setEmailTouched(true);
    setIsEmailValid(validateEmail(email));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setEmailTouched(true);
  if (isEmailValid) {
    const formData = {
      id: JSON.parse(localStorage.getItem('formData'))?.length || 0,
      name: name,
      email: email,
      message: message,
    };

    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    localStorage.setItem('formData', JSON.stringify([...existingData, formData]));

    setName('');
    setEmail('');
    setMessage('');

    handleClose();
  }
};
  return (
    <div>
      <CustomButton onClick={handleOpen}>Contact</CustomButton>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            backgroundColor: '#1D5AD5',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            padding: '2em',
            textAlign: 'center',
            borderRadius: '1em',
            color: 'white',
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              label="Name"
              variant="filled"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <CustomTextField
              label="Email"
              variant="filled"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!isEmailValid && emailTouched}
              required
            />
            <CustomTextarea
              label="Message"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <CustomButton 
            type="submit" variant="contained"
            style={{
            backgroundColor: '#FEBC2A',
                color: 'black',
          }}>
              Send
            </CustomButton>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;





