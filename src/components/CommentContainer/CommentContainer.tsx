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
      <Text sx={{ fontWeight: '600', fontSize: 3, ml: 2 }}>
        Customer Review:
      </Text>{' '}
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
