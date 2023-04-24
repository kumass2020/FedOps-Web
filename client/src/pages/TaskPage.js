import React from 'react';
import { Typography } from '@mui/material';
import Header from '../components/common/Header';
import ContentWrapper from '../components/common/ContentWrapper';

const TaskPage = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Typography variant="h6">Lorem ipsum</Typography>
      </ContentWrapper>
    </div>
  );
};

export default TaskPage;
