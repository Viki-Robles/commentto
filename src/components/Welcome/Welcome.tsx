import React from 'react'
import { ThemeUIStyleObject, Box, Text, Image } from 'theme-ui'
import { SIGN_UP_PAGE_PATH } from '../../config/paths'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { Link } from 'react-router-dom'
import picture from '../../media/images/welcome.svg'

export interface WelcomeProps {
  sx?: ThemeUIStyleObject
}
export const Welcome = ({ sx }: WelcomeProps): JSX.Element => {
  return (
    <BorderWrapper
      title="Welcome to Commentto"
      sx={{ ...sx }}
      subheader="Follow the link to submit your review"
    >
      <Link to={{ pathname: SIGN_UP_PAGE_PATH }}>
        <Text sx={{ color: '#3F88F5', fontWeight: 'bold' }}>Here</Text>
      </Link>
    </BorderWrapper>
  )
}
