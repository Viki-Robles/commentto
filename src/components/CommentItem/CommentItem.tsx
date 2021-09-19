import React from 'react'
import { ThemeUIStyleObject, Grid, Box, Flex, Text } from 'theme-ui'

export interface CommentItemProps {
  sx?: ThemeUIStyleObject
  name: string
  comment: string
  picture: string
}
export const CommentItem = ({
  name,
  comment,
  picture,
  sx,
}: CommentItemProps): JSX.Element => {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderRadius: 8,
        borderColor: 'rgb(240, 243, 247)',
        backgroundColor: '#ffff',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
        p: 3,
        m: 2,
        ...sx,
      }}
    >
      <Flex sx={{ mb: 1 }}>
        <Box sx={{ mr: 2 }}>{picture}Picture</Box>
        <Text sx={{ fontWeight: 'bold' }}>{name}</Text>
      </Flex>
      <Text sx={{ fontSize: 2 }}>{comment}</Text>
    </Box>
  )
}
