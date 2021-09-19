import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'
import { useAuth } from '../../providers/AuthProvider'

export interface DashboardProps {
  sx?: ThemeUIStyleObject
}

export const Dashboard = ({ sx }: DashboardProps): JSX.Element => {
  const { user } = useAuth()

  return (
    <Box sx={{ ...sx }}>
      <Box>Hi {user?.email}</Box>
    </Box>
  )
}
