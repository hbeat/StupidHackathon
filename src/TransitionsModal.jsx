import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '3px solid green',
  boxShadow: 30,
  borderRadius: '20px',
  p: 5,
  outline: 'none',
};



export default function TransitionsModal( props ) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h1">
              {props.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {props.description} 
            </Typography>
            <br></br>
            <Box textAlign='center'>
            <Button onClick={handleClose} variant='contained' color="success">ด่าต่อเลย</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
