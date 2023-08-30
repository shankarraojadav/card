import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  TextField,
} from '@mui/material';
// import { GoogleLogin } from 'react-google-login';

const SignInModal = ({ open, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSendOTP = () => {
    // Send OTP to the user's mobile number
    setVerificationSent(true);
  };

  const handleVerifyOTP = () => {
    // Verify OTP entered by the user
  };

  const handleGoogleSuccess = (response) => {
    // Handle successful Google Sign-In
  };

  const handleGoogleFailure = (error) => {
    // Handle Google Sign-In failure
  };

  const handleClose = () => {
    setMobileNumber('');
    setOTP('');
    setVerificationSent(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth >
      <DialogTitle> Login to Your Account</DialogTitle>
      <DialogContent >
        <Grid container spacing={2} sx={{display:"flex", flexDirection:"column"}}>
          <Grid item >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleGoogleSuccess}
            >
              Sign In with Google
            </Button>
          </Grid>
          <Grid item sx={{display:"flex", flexDirection:"column",}}>
            {!verificationSent ? (
              <>
                <TextField
                  type="text"
                  placeholder="Enter your mobile number"
                  
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{mt:"2vh"}}
                  onClick={handleSendOTP}
                >
                  Send OTP
                </Button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignInModal;
