import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const roles = ['HR', 'BPO']; // Define your roles here

function AddUser() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Use an HTTP library to make API requests to add user with userData
      // For example, using axios: await axios.post('/api/addUser', userData);
      console.log('User added successfully:', userData);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={3}>
          <div style={{ padding: '24px' }}>
            <Typography variant="h4" gutterBottom>
              Admin Panel
            </Typography>
            <form>
              <TextField
                label="Name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Select
                label="Role"
                name="role"
                value={userData.role}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                variant="outlined"
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                style={{ marginTop: '16px' }}
              >
                Add User
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddUser;
