import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'
import { CommentItem } from '../CommentItem/CommentItem'
import { commentsDataModel } from '../../data/commentsTestData'

export interface CommentContainerProps {
  sx?: ThemeUIStyleObject
}
export const CommentContainer = ({
  sx,
}: CommentContainerProps): JSX.Element => {
  return (
    <Box sx={{ ...sx }}>
      <Box>
        {commentsDataModel.map(({ picture, name, comment, id }) => {
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
    </Box>
  )
}
