import React from 'react';

import Box from '@mui/material/Box';
import Panel from './Panel';
import IfcContainer from './IfcContainer';
import Properties from './Properties'
import SpatialTree from './SpatialTree'

function LeftFlexLayout() {
    return <div>
        aca va el spatial Tree
    </div>//<SpatialTree/>;
}

function RightTopFlexLayout() {
    return (
        <Panel
            title="Viewer"
            sx={{
                flexBasis: 'auto',
            }}
        >
            <IfcContainer />
        </Panel>
        
    );
}

function RightBottomFlexLayout() {
    return (
        <Panel
            title="Properties"
            sx={{
                flexBasis: '33%',
            }}
        >
            <Properties />
        </Panel>
    );
}

function RightFlexLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexBasis: '66.67%',
            }}
        >
            <RightTopFlexLayout />
            <RightBottomFlexLayout />
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
