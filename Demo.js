import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function BoxSystemProps() {
  return (
    <Box
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Card sx={{ Width: '75%' }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  make your own Will
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Value Added Services
              </Typography>
            </CardContent>
            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h6">
                    Live From Space
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <CardContent sx={{ display: 'flex', maxHeight: 35 }}>
                  <Typography component="div" variant="h6">
                    $999
                  </Typography>
                  <Button variant="outlined">+Add</Button>
                </CardContent>
              </Box>
            </Card>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card sx={{ Width: '25%' }}>
            <Box>
              <Typography gutterBottom variant="h5" component="div">
                My Cart
              </Typography>
              <CardContent sx={{ display: 'flex' }}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
                <Button href="#text-buttons">Link</Button>
              </CardContent>
              <Divider></Divider>
              <CardContent
                sx={{
                  display: 'flex',
                  maxHeight: 35,
                  justifyContent: 'space-between',
                }}
              >
                <Typography component="div" variant="h5">
                  Total
                </Typography>
                <Typography component="div" variant="h5">
                  $9999
                </Typography>
              </CardContent>
              <Button variant={'outlined'} color={'secondary'} fullWidth>
                Proceed
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
