import React, { useState } from 'react'
import { ThemeUIStyleObject, Box } from 'theme-ui'
import { FaStar } from 'react-icons/fa'

export interface StarRatingProps {
  sx?: ThemeUIStyleObject
}

export const StarRating = ({ ...sx }: StarRatingProps): JSX.Element => {
  const [currentValue, setCurrentValue] = useState<number>(0)
  const stars = Array(5).fill(0)

  const handleClick = (value: number) => {
    setCurrentValue(value)
  }

  return (
    <Box sx={{ ...sx }}>
      {stars.map((_, index) => {
        return (
          <FaStar
            size={40}
            style={{ marginRight: 10 }}
            key={index}
            color={currentValue > index ? '#FFCD58' : '#a9a9a9'}
            onClick={() => handleClick(index + 1)}
          />
        )
      })}
    </Box>
  )
}
