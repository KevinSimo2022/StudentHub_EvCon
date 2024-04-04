import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./navbar.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { UserAuth } from '../../redux/auth/context/AuthContext';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const style = {
  position: "absolute",
  top: "42%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  overflowY: "scroll",
  height: "450px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "45px",
  boxShadow: 24,
  p: 4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (!email || !password) {
        throw new Error('Email and password are required.');
      }
      await signIn(email, password);
      history.push('/home');
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        Log in
      </Button>
      <Modal
        sx={{ marginTop: "100px" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onSubmit={handleSubmit}
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.logincont}>
              <h2 className={styles.loginh1}>Log in</h2>
              <p className="styles loginp">
                Not a Member yet ? <a href="">Sign Up</a>
              </p>
            </div>
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Email
            </Typography>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "80%", m: 1, marginLeft: "40px" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
            />
            <Typography
              sx={{ marginLeft: "40px", fontWeight: "550", fontSize: "16px" }}
              variant="h6"
            >
              Password
            </Typography>
            <FormControl
              sx={{ m: 1, width: "80%", marginLeft: "40px" }}
              variant="outlined"
            >
              <OutlinedInput
                size="small"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              sx={{
                backgroundColor: "#F65858",
                width: "320px",
                padding: "10px",
                m: 2,
                borderRadius: "5px",
                marginLeft: "40px"
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              Log in
            </Button>
            {error && (
              <Typography sx={{ color: "red", marginLeft: "40px" }}>
                {error}
              </Typography>
            )}
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}
