import React from 'react'
import { ThemeUIStyleObject, Box, Flex, Text, Image } from 'theme-ui'

export interface CommentItemProps {
  sx?: ThemeUIStyleObject
  name: string
  comment: string
  picture?: string
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
        <Image
          src={picture}
          sx={{ mr: 2, width: '30px', height: '30px', borderRadius: 8 }}
        />
        <Text sx={{ fontWeight: 'bold', alignSelf: 'center' }}>{name}</Text>
      </Flex>
      <Text sx={{ fontSize: 2 }}>{comment}</Text>
    </Box>
  )
}
