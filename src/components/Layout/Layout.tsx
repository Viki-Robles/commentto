import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'

export interface LayoutProps {
  sx?: ThemeUIStyleObject
  children: ReactNode
}
export const Layout = ({ children, sx }: LayoutProps): JSX.Element => {
  return (
    <Box sx={{ ...sx }}>
      <Box>{children}</Box>
    </Box>
  )
}
