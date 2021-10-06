import React from 'react';
// import Button from './Button';
import Defi101 from '../images/Defi101.PNG';
import colSS from '../images/ColSS.PNG';
import ReadmeGen from '../images/ReadmeGenerator.PNG';
import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AppCards() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3d5a80',
      }
    }
  })
    return (
      
      <Grid container spacing= {2} justifyContent="center">
      <ThemeProvider theme = {theme}>
        <Grid item lg={3}>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {Defi101}
        alt="Homepage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          DeFi101
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Check cryptocurrency prices with multiple currencies as well as see recent news reguarding that currency.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant= "contained" size="small" href= "https://mamii868.github.io/Defi-101/">Website</Button>
        <Button size="small" variant="contained" href="https://github.com/Mamii868/Defi-101">Repository</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={colSS}
        alt="Homepage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Collection Social Share
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Social media website to upload collections of items and show off to the world!
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant= "contained" size="small" href="https://collection-social-share.herokuapp.com/">Website</Button>
        <Button size="small" variant="contained"href="https://github.com/Mamii868/collection_social_share">Repository</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item lg={3}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={ReadmeGen}
        alt="Homepage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Readme Generator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A program that generates a Readme markdown file to be used in Github repositories
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" href="https://github.com/Mamii868/Useful-README-Generator">Repository</Button>
      </CardActions>
    </Card>
        </Grid>
        </ThemeProvider>
      </Grid>


//       <div className="container-fluid">
//         <div className= "row">
//             <div className="card col-lg-4 col-md-4 col-xs-4" style={{width: '18rem'}}>
//   <img src= {Defi101} className="card-img-top" alt="DeFi101 homepage"/>
//   <div className="card-body">
//     <h5 className="card-title">DeFi101</h5>
//     <p className="card-text">Check cryptocurrency prices with multiple currencies as well as see recent news reguarding that currency.</p>
//     <Button>Go Somewhere</Button>
//   </div>
// </div>
// <div className="card  col-lg-4 col-md-4 col-xs-4" style={{width: '18rem'}}>
//   <img src={colSS} className="card-img-top" alt="Collection Social Share homepage"/>
//   <div className="card-body">
//     <h5 className="card-title">Collection Social Share</h5>
//     <p className="card-text">Social media website to upload collections of items and show off to the world!</p>
//    <a href="/">
//     <Button>Go Somewhere</Button>
// </a>
//   </div>
// </div>
// <div className="card  col-lg-4 col-md-4 col-xs-4" style={{width: '18rem'}}>
//   <img src={me} className="card-img-top" alt="placeholder"/>
//   <div className="card-body">
//     <h5 className="card-title">Placeholder</h5>
//     <p className="card-text">Coming Soon</p>
//     <Button>Go Somewhere</Button>
//   </div>
// </div>
//         </div>
//         </div>
    )
}

export default AppCards
