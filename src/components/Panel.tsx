/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { type SxProps } from '@mui/system'
import Card from '@mui/material/Card'
import theme from '../theme/theme'
import CardHeader from '@mui/material/CardHeader'

interface PanelProps {
  title?: string
  action?: React.ReactNode
  children: React.ReactNode
  sx: SxProps
}
export default function Panel ({ title, children, action, sx = {} }: PanelProps): JSX.Element {
  return (
        <Card
            sx={{
              margin: '10px',
              // @ts-expect-error
              boxShadow: theme.customShadows.card,
              borderRadius: Number(theme.shape.borderRadius) * 2,
              // bgcolor: 'background.neutral',

              ...sx
            }}
            // elevation={24}
        >
            <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} action={action} />

            {children}
        </Card>
  )
}
