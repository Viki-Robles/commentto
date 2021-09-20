import { SubTitle } from 'chart.js'
import React, { ReactNode } from 'react'
import { ThemeUIStyleObject, Grid, Text, Image } from 'theme-ui'

export interface BorderWrapperProps {
  sx?: ThemeUIStyleObject
  title: string
  subheader?: string
  children: ReactNode
  icon?: string
}
export const BorderWrapper = ({
  sx,
  title,
  subheader,
  icon,
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
        p: [2, 4],
        ...sx,
      }}
    >
      {icon && (
        <Image
          src={icon}
          sx={{ width: '50px', height: '50px', borderRadius: 8 }}
        />
      )}

      <Text
        sx={{
          fontSize: 5,
          fontWeight: 'bold',
          color: '#4B4A4A',
          mt: 2,
        }}
      >
        {title}
      </Text>
      <Text
        sx={{
          fontSize: 2,
          color: '#4B4A4A',
          mb: 4,
        }}
      >
        {subheader}
      </Text>
      {children}
    </Grid>
  )
}
