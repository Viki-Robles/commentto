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
        borderColor: '#b9d4e2',
        backgroundColor: '#f2f8fb',
        boxShadow:
          ' 0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)',
        p: 3,
        m: 2,
        ...sx,
      }}
    >
      <Flex sx={{ mb: 1 }}>
        <Image
          src={picture}
          sx={{ mr: 2, width: '50px', height: '50px', borderRadius: 8 }}
        />
        <Box sx={{ display: 'grid' }}>
          <Text sx={{ fontWeight: 'bold', alignSelf: 'center' }}>{name}</Text>
          <Text sx={{ fontSize: 2 }}>{comment}</Text>
        </Box>
      </Flex>
    </Box>
  )
}
