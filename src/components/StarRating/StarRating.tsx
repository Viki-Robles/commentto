import React from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'
import { FaStar } from 'react-icons/fa'

export interface StarRatingProps {
  sx?: ThemeUIStyleObject
}

export const StarRating = ({ sx }: StarRatingProps): JSX.Element => {
  const stars = Array(5).fill(0)

  return (
    <Box>
      {stars.map((_, index) => {
        return <FaStar size={40} key={index} />
      })}
    </Box>
  )
}
