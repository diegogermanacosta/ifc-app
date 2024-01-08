import React from 'react'

import Box from '@mui/material/Box'
import Panel from './Panel'
import IfcContainer from './IfcContainer'
import Properties from './Properties'
import ButtonsBar from './ButtonsBar'

const LeftFlexLayout = (): JSX.Element => {
  return <Panel
                title="Properties"
                sx={{
                  flex: '0 0 20%'
                }}
            >
                <Properties />
            </Panel>
}

const RightFlexLayout = (): JSX.Element => {
  return (
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '1'
            }}
        >
            <Panel
                title="Viewer"
                sx={{
                  flex: '1'
                }}
            >
                <IfcContainer />
            </Panel>
            <Panel
                sx={{
                  flex: '0.15'
                }}
            >
                <ButtonsBar />
            </Panel>
        </Box>
  )
}
const FlexLayout = (): JSX.Element => {
  return (
        <Box
            sx={{
              height: '100vh',
              width: '100vw',
              bgcolor: 'grey',
              boxSizing: 'border-box',
              p: '20px',
              display: 'flex'
            }}
        >
            <LeftFlexLayout />
            <RightFlexLayout />
        </Box>
  )
}

export default FlexLayout
