import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'

export interface CommentItemProps {
  sx?: ThemeUIStyleObject
  picture: string
  name: string
  comment: string
}
export const CommentItem = ({ sx }: CommentItemProps): JSX.Element => {
  return (
    <Box sx={{ ...sx }}>
      <Box>CommentItem</Box>
    </Box>
  )
}
