import React from 'react';
import Layout from './Layout';
import { render } from '@testing-library/react';
const root = document.getElementById('root');

render(
  <>
    <Layout/>
  </>,
  root
);
