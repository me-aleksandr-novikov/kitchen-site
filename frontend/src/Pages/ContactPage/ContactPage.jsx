import React from 'react';
import { Paper } from '@mui/material';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className='contactPage'>
            <Paper sx={{bgcolor: 'lightyellow'}} className='paper' elevation={24}>
                <div className="contactPage__title">
                    Эта страница находится в разработке
                </div>
                <div className="contant">
                    1111111111111
                </div>
            </Paper>
        </div>
    );
};

export default ContactPage;