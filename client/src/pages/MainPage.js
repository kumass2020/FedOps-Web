import React from 'react';
import { Typography } from '@mui/material';

import Header from '../components/common/Header';
import Base from '../components/common/Base';
import ContentWrapper from '../components/common/ContentWrapper';

const MainPage = () => {
    return (
        <Base>
            <Header />
            <ContentWrapper>
                <Typography variant="h4">
                    Main Content
                </Typography>
            </ContentWrapper>
        </Base>
    );
};


export default MainPage;