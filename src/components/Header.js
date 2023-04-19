import React from 'react';
import{Box, styled} from '@mui/material';
import image from '../images/header.jpg';

const Header = () => {
     const StyleHeader = styled(Box)(({theme}) =>({
          dispaly: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          minHeight: '400px',
          backgroundImage:`url(${image})`,
          backgroundSize: "Cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main,
  
     }

     ))
    return (
        <div>
            <StyleHeader ></StyleHeader>
        
        </div>
    )
}

export default Header;