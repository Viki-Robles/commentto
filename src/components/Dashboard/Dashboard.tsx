import React, { useState } from 'react'
import { ThemeUIStyleObject, Input, Button, Box } from 'theme-ui'
import { useAuth } from '../../providers/AuthProvider'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { CommentContainer } from '../CommentContainer/CommentContainer'
import { Form, Formik, FormikHelpers } from 'formik'
import { FormGroup } from '../FormGroup/FormGroup'
import { CommentItem } from '../CommentItem/CommentItem'

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
      sx={{ maxWidth: '700px', height: '900px', mt: 5, ...sx }}
    >
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
            <Form>
              <FormGroup label="Email address" name="email">
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
          )
        }}
      </Formik>
      <CommentContainer />
    </BorderWrapper>
  )
}
