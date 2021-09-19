import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'

export interface FooterProps {
  sx?: ThemeUIStyleObject
}
export const Footer = ({ sx }: FooterProps): JSX.Element => {
  return (
    <Box sx={{ ...sx, textAlign: 'center', color: '#4B4A4A', mt: 6 }}>
      Powered with ❤️ by Vicky Vasilopoulou
    </Box>
  )
}
