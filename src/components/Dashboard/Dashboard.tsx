import React from 'react'
import { ThemeUIStyleObject, Box, Text } from 'theme-ui'
import { useAuth } from '../../providers/AuthProvider'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { CommentContainer } from '../CommentContainer/CommentContainer'

export interface DashboardProps {
  sx?: ThemeUIStyleObject
}

export const Dashboard = ({ sx }: DashboardProps): JSX.Element => {
  const { user } = useAuth()

  return (
    <BorderWrapper
      title="Review our Product"
      sx={{ maxWidth: '700px', height: '900px', mt: 5, ...sx }}
    >
      <CommentContainer />
    </BorderWrapper>
  )
}
