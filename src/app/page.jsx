
import Future from '@/components/Home/Future';
import Container from '@/components/container/Container';
import Homepage from '@/pages/HomePage/Homepage';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className='min-h-screen'>
        <Homepage></Homepage>
      </div>
      <Future></Future>
    </Container>
  );
};

export default page;