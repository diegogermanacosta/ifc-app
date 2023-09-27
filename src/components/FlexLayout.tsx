import React from 'react';

import Box from '@mui/material/Box';
import Panel from './Panel';
import IfcContainer from './IfcContainer';
import Properties from './Properties'
import SpatialTree from './SpatialTree'

function LeftFlexLayout() {
    return <Panel
                title="Properties"
                sx={{
                    flexBasis: '33%',
                }}
            >
                <Properties />
            </Panel>
    }

function RightFlexLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexBasis: '66%',
            }}
        >
            <Panel
                title="Viewer"
                sx={{
                    flexBasis: 'auto',
                }}
            >
                <IfcContainer />
            </Panel>
        </Box>
    );
}
export default function FlexLayout() {
    return (
        <Box
            sx={{
                height: '100vh',
                bgcolor: 'background.default',
                boxSizing: 'border-box',
                p: '20px',
                display: 'flex',
            }}
        >
            <LeftFlexLayout />
            <RightFlexLayout />
        </Box>
    );
}
