import * as React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

export function Rover(): React.JSX.Element {
  return (
    <Grid container spacing={2}>
      {["Card 1", "Card 2", "Card 3"].map((title, index) => (
        <Grid item xs={2} sm={6} key={index}>
          <Card sx={{ p: 20 }}>
            <CardContent>
              <Typography variant="h6">{title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}