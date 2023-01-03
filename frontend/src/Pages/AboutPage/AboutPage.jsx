import React from 'react';
import { Paper } from '@mui/material';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className='aboutPage'>
            <Paper className='paper' elevation={24}>
                <div className="aboutPage__title">
                    Эта страница находится в разработке
                </div>
                <div className="contant">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia porro odio illo sequi ipsam in perferendis quam quibusdam reiciendis facilis. Hic architecto culpa eius magnam tenetur corrupti ad, non dolorum?
                    Molestias sit magnam sapiente repellendus, voluptatem maiores? Praesentium amet mollitia quaerat veniam sint alias autem temporibus impedit nisi, illum saepe voluptas soluta sunt nemo neque dolorem unde voluptatem repudiandae ipsum?
                    Animi neque sed odit incidunt rem ipsam similique officiis nam veritatis unde! Ab aliquid harum quam! Labore corrupti repellat blanditiis reiciendis impedit, facere expedita hic alias pariatur consequatur. Officia, minus.
                    Quis quisquam odit non perspiciatis, velit nulla illo assumenda delectus dicta? Dignissimos quam excepturi nihil harum. Maxime aspernatur ab sit saepe neque adipisci facere expedita, libero totam inventore id iste.
                </div>
            </Paper>
        </div>
    );
};

export default AboutPage;