import React from 'react'
import { ThemeUIStyleObject, Text } from 'theme-ui'
export interface LogoProps {
  sx?: ThemeUIStyleObject
}

export const Logo = ({ sx }: LogoProps): JSX.Element => {
  return (
    <Text
      as="div"
      sx={{
        justifySelf: 'flex-start',
        fontSize: 3,
        fontWeight: 'bold',
        color: '#3F88F5',
        mt: 3,
        ml: 3,
      }}
    >
      commentto
    </Text>
  )
}
