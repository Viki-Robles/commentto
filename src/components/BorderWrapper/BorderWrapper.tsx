import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Grid, Text } from 'theme-ui'

export interface BorderWrapperProps {
  sx?: ThemeUIStyleObject
  logo: string
  formHeading: string
  children: ReactNode
}
export const BorderWrapper = ({
  sx,
  logo,
  formHeading,
  children,
}: BorderWrapperProps): JSX.Element => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        justifyItems: 'center',
        border: '1px solid',
        borderRadius: 8,
        borderColor: 'rgb(240, 243, 247)',
        backgroundColor: '#ffff',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
        maxWidth: '500px',
        width: 'auto',
        margin: '0 auto',
        mt: 7,
        pb: 4,
        ...sx,
      }}
    >
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
        {logo}
      </Text>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
          color: '#4B4A4A',
          mb: 4,
          mt: 4,
        }}
      >
        {formHeading}
      </Text>
      {children}
    </Grid>
  )
}
