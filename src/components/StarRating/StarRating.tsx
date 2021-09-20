import React from 'react'
import { ThemeUIStyleObject, Box, Label, Radio } from 'theme-ui'
import { FaStar } from 'react-icons/fa'

export interface StarRatingProps {
  sx?: ThemeUIStyleObject
}

export const StarRating = ({ ...sx }: StarRatingProps): JSX.Element => {
  const stars = Array(5).fill(0)

  return (
    <Box sx={{ ...sx }}>
      <Label>
        <input type="radio" name="rating" />
        {stars.map((_, index) => {
          return <FaStar size={30} key={index} />
        })}
      </Label>
    </Box>
  )
}
