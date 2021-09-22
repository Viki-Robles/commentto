import React, { useState, Fragment } from 'react'
import {
  ThemeUIStyleObject,
  Input,
  Button,
  Box,
  Grid,
  Text,
  Image,
} from 'theme-ui'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { CommentContainer } from '../CommentContainer/CommentContainer'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { Chart } from '../Chart/Chart'
import { StarRating } from '../StarRating/StarRating'
import productPicture from '../../media/images/product.jpeg'

export interface ReviewFormValues {
  email: string
  comment: string
  name: string
}

export interface DashboardProps {
  onSubmit?: (values: ReviewFormValues) => void
  sx?: ThemeUIStyleObject
}

const INITIAL_REVIEW_VALUES: ReviewFormValues = {
  email: '',
  comment: '',
  name: '',
}

export const Dashboard = ({ sx }: DashboardProps): JSX.Element => {
  const [reviewSubmitting, setReviewSubmitting] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <BorderWrapper sx={{ maxWidth: '80%', mt: 5, ...sx }}>
      <Grid columns={[1, null, null, '1fr 1fr']}>
        <Formik
          validateOnChange={false}
          enableReinitialize
          initialValues={INITIAL_REVIEW_VALUES}
          onSubmit={(
            values: ReviewFormValues,
            actions: FormikHelpers<ReviewFormValues>,
          ) => {
            setReviewSubmitting(true)
            actions.resetForm()
            console.table(values)
          }}
        >
          {({ values, getFieldProps, handleSubmit }) => {
            return (
              <Fragment>
                <Box>
                  <Image src={productPicture} sx={{ maxWidth: '80%' }} />
                </Box>
                <Box>
                  <Text
                    sx={{
                      fontSize: 5,
                      fontWeight: 'bold',
                      color: '#4B4A4A',
                      mt: 2,
                    }}
                  >
                    Write a review
                  </Text>
                  <StarRating />
                  <Form autoComplete="off" onSubmit={handleSubmit}>
                    <FormGroup label="Name" name="name" sx={{ mt: 4 }}>
                      <Input
                        {...getFieldProps('name')}
                        sx={{ borderColor: 'rgb(209, 218, 230)' }}
                        id="name"
                      />
                    </FormGroup>
                    <FormGroup label="Email" name="email">
                      <Input
                        {...getFieldProps('email')}
                        sx={{ borderColor: 'rgb(209, 218, 230)' }}
                        id="email"
                      />
                    </FormGroup>
                    <FormGroup label="Comment" name="comment">
                      <Input
                        {...getFieldProps('comment')}
                        sx={{ borderColor: 'rgb(209, 218, 230)' }}
                        id="comment"
                      />
                    </FormGroup>
                    <Button
                      type="submit"
                      sx={{ mt: 1, bg: '#3F88F5' }}
                      onClick={() => setVisible(!visible)}
                    >
                      Sumbit Review
                    </Button>
                  </Form>
                </Box>
              </Fragment>
            )
          }}
        </Formik>
      </Grid>
      <Grid columns={[1, null, null, '1fr 1fr']}>
        <Chart />
        <CommentContainer />
      </Grid>
    </BorderWrapper>
  )
}
