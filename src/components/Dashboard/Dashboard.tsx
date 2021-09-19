import React, { useState, Fragment } from 'react'
import { ThemeUIStyleObject, Input, Button, Box, Grid } from 'theme-ui'
import { useAuth } from '../../providers/AuthProvider'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { CommentContainer } from '../CommentContainer/CommentContainer'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { CommentItem } from '../CommentItem/CommentItem'
import { Chart } from '../Chart/Chart'
import { StarRating } from '../StarRating/StarRating'

export interface ReviewFormValues {
  email: string
  comment: string
}

export interface DashboardProps {
  onSubmit?: (values: ReviewFormValues) => void
  sx?: ThemeUIStyleObject
}

const INITIAL_REVIEW_VALUES: ReviewFormValues = {
  email: '',
  comment: '',
}

export const Dashboard = ({ onSubmit, sx }: DashboardProps): JSX.Element => {
  const [reviewSubmitting, setReviewSubmitting] = useState<boolean>(false)
  const { user } = useAuth()

  return (
    <BorderWrapper
      title="Review our Product"
      sx={{ maxWidth: '700px', height: '1000px', mt: 5, ...sx }}
    >
      <Grid columns={[1, '1fr 300px']}>
        <Formik
          enableReinitialize
          initialValues={INITIAL_REVIEW_VALUES}
          // validate={(values) => {
          //   values.map((item) => {
          //     return item.email
          //   })
          // }}
          onSubmit={(
            values: ReviewFormValues,
            actions: FormikHelpers<ReviewFormValues>,
          ) => {
            setReviewSubmitting(true)
          }}
        >
          {({
            handleChange,
            values,
            getFieldProps,
            setFieldValue,
            resetForm,
          }) => {
            return (
              <Fragment>
                <Form>
                  <StarRating />
                  <FormGroup label="Name" name="name">
                    <Input {...getFieldProps('name')} id="name" />
                  </FormGroup>
                  <FormGroup label="Email" name="email">
                    <Input {...getFieldProps('email')} id="email" />
                  </FormGroup>
                  <FormGroup label="Comment" name="comment">
                    <Input {...getFieldProps('comment')} id="comment" />
                  </FormGroup>
                  <Box>
                    {Object.values(values.email)}
                    {Object.values(values.comment)}
                  </Box>
                </Form>
              </Fragment>
            )
          }}
        </Formik>
        <Chart />
      </Grid>

      <CommentContainer />
    </BorderWrapper>
  )
}
