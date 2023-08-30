import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const LoanEligibilityForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    pan: '',
    address: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and loan eligibility check here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container sx={{mt:"10vh", textAlign:"center"}} maxWidth="sm">
      <Typography variant="h4" sx={{ marginBottom: 2, color:"#1b1dc7", fontWeight:700  }}>
        Check Loan Eligibility
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          margin="normal"
          fullWidth
          type="email"
        />
        <TextField
          label="PAN Card"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          required
          margin="normal"
          fullWidth
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          margin="normal"
          fullWidth
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Check Eligibility
        </Button>
      </form>
    </Container>
  );
};

export default LoanEligibilityForm;
