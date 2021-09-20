import React, { useState, Fragment } from 'react'
import {
  ThemeUIStyleObject,
  Input,
  Button,
  Box,
  Grid,
  Card,
  Text,
  Image,
} from 'theme-ui'
import { useAuth } from '../../providers/AuthProvider'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { CommentContainer } from '../CommentContainer/CommentContainer'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { CommentItem } from '../CommentItem/CommentItem'
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

export const Dashboard = ({ onSubmit, sx }: DashboardProps): JSX.Element => {
  const [reviewSubmitting, setReviewSubmitting] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <BorderWrapper
      title="Product Review"
      sx={{ maxWidth: '50vw', height: '100%', mt: 5, ...sx }}
    >
      <Grid columns={[1, '1fr 300px']} sx={{ mb: 4 }}>
        <Formik
          validateOnChange={false}
          enableReinitialize
          initialValues={INITIAL_REVIEW_VALUES}
          onSubmit={(
            values: ReviewFormValues,
            actions: FormikHelpers<ReviewFormValues>,
          ) => {
            setReviewSubmitting(true)
          }}
        >
          {({ handleChange, values, getFieldProps, handleSubmit }) => {
            console.log('values', INITIAL_REVIEW_VALUES)
            return (
              <Fragment>
                <Box>
                  <Image src={productPicture} sx={{ width: '100%' }} />
                  <Text sx={{ fontWeight: '400', fontSize: 1, ml: 2 }}>
                    Alpine High Boot Socks.
                  </Text>
                </Box>
                <Box>
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
                    {visible && (
                      <Grid
                        sx={{
                          border: '1px solid',
                          borderRadius: 8,
                          borderColor: 'rgb(240, 243, 247)',
                          backgroundColor: '#ffff',
                          boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
                          p: 2,
                          mt: 4,
                          ...sx,
                        }}
                      >
                        <Text as="div">{Object.values(values.name)}</Text>
                        <Text as="div">{Object.values(values.email)}</Text>
                        <Text as="div"> {Object.values(values.comment)}</Text>
                      </Grid>
                    )}
                  </Form>
                </Box>
              </Fragment>
            )
          }}
        </Formik>
      </Grid>
      <Grid columns={[1, '300px 1fr']} gap={6}>
        <Chart />
        <CommentContainer />
      </Grid>
    </BorderWrapper>
  )
}
