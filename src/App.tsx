import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme/theme';
import IfcContainer from './components/IfcContainer'
import FlexLayout from './components/FlexLayout'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style.css';

//import FlexLayout from './components/FlexLayout';

function App() {
    return (
        <ThemeProvider theme={theme}>
                <FlexLayout />
        </ThemeProvider>
    );
}

export default App