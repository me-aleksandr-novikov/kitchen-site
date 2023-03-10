import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './FormCard.css';

const FormCard = ({props, path}) => {
  return (
    <Card sx={{ maxWidth: props.cardMaxWidth}}  className = 'card'>
      <CardActionArea>
        <CardMedia 
          component= {props.image.extension}
          style = {{height: `${props.image.height}px`, objectFit: 'cover'}}//scale-down
          image={`http://localhost:4000/${path}${props.image.url}`}
          alt={props.image.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            {props.descr}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FormCard;