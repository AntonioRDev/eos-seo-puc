import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotEnv from "dotenv";

import { ChakraProvider } from "@chakra-ui/react";

dotEnv.config();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);