import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Form.css";
// import swal from 'sweetalert';



export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const initiateState = { name: "", email: "", mobile: "" };
  const [formValue, setFormValues] = useState(initiateState);

  const userDataSave = (event) => {
    const savedDataValue = `
    Name: ${formValue.name}
    Email Address: ${formValue.email}
    Mobile No: ${formValue.mobile}
    `
    console.log("Form Values ->",formValue);
    console.log(savedDataValue);
    alert(savedDataValue);
    event.preventDefault()
  }

  const userInput = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValue, [name]: value })

    console.log(event.target.value);
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className="singup_btn"
      >
        SingUp
      </Button>
      <Dialog open={open}>
        <DialogTitle>Registration Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address and
            other required detail here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Your Name.."
            type="name"
            fullWidth
            variant="standard"
            onChange={userInput}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Enter Your Email Address.."
            type="email"
            fullWidth
            variant="standard"
            onChange={userInput}
          />
          <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Enter Your Mobile No.."
            type="tel"
            fullWidth
            variant="standard"
            onChange={userInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={userDataSave} className="form_btn">
            Submit
          </Button>
          <Button onClick={handleClose} className="form_btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
