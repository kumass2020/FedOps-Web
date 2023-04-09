import React from 'react';
import { Typography } from '@mui/material';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';

const MainPage = () => {
    return (
        <div>
            <Header />
            <ContentWrapper>
                <Typography variant="h4">
                    Main Content
                </Typography>
            </ContentWrapper>
        </div>
    );
};


export default MainPage;