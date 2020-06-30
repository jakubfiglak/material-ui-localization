import React from 'react';
import Table from './Table';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Table />
        </ThemeProvider>
    );
}

export default App;
