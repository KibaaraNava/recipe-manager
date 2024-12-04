import React, { useState } from 'react';
import { Box, Typography, Switch, FormControlLabel, Button } from '@mui/material';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        control={<Switch checked={notifications} onChange={handleNotificationChange} />}
        label="Enable Notifications"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
