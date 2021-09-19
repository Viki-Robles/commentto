import React from 'react'
import { ThemeUIStyleObject, Box, Text } from 'theme-ui'
import { CommentItem } from '../CommentItem/CommentItem'
import { commentsData } from '../../data/commentsTestData'

export interface CommentContainerProps {
  sx?: ThemeUIStyleObject
}
export const CommentContainer = ({
  sx,
}: CommentContainerProps): JSX.Element => {
  return (
    <Box sx={{ ...sx }}>
      <Text sx={{ fontWeight: '600', fontSize: 4 }}>What customers say</Text>
      {commentsData.map(({ picture, name, comment, id }) => {
        return (
          <CommentItem
            key={id}
            name={name}
            picture={picture}
            comment={comment}
          />
        )
      })}
    </Box>
  )
}
