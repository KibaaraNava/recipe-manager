import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const Profile = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card sx={{ width: 300, textAlign: 'center' }}>
        <CardContent>
          <Avatar
            sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
            src="https://via.placeholder.com/100"
            alt="User Avatar"
          />
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="body1" color="text.secondary">
            johndoe@example.com
          </Typography>
          <Typography variant="body2" mt={2}>
            Favorite Cuisine: Italian
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
