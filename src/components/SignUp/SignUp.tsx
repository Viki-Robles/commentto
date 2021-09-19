import React, { useState } from 'react'
import {
  Input,
  Alert,
  ThemeUIStyleObject,
  Grid,
  Button,
  Text,
  Heading,
} from 'theme-ui'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import { FormGroup } from '../../components/FormGroup/FormGroup'
import { FormActions } from '../../components/FormActions/FormActions'
import { DASHBOARD_PAGE_PATH, SIGN_IN_PAGE_PATH } from '../../config/paths'
import { useAuth } from '../../providers/AuthProvider'
import { passwordValidation } from '../../utils/passwordValidation'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'
import { Link } from 'react-router-dom'

interface FinishSignupFormValues {
  email: string
  password: string
  repeatPassword: string
}

const FinishSignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: passwordValidation,
  repeatPassword: Yup.string().when('password', {
    is: (val: string) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref('password')], 'Both passwords need to be the same')
      .required('Required'),
  }),
})

export interface FinishSignupFormProps {
  sx?: ThemeUIStyleObject
  // children: ReactNode
}

export const SignUp = ({ sx }: FinishSignupFormProps): JSX.Element => {
  const { signUp, auth } = useAuth()
  const [formError, setFormError] = useState<string>('')
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const history = useHistory()

  return (
    <BorderWrapper logo="Commento" formHeading="Create account">
      <Formik
        initialValues={{
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={async (values: FinishSignupFormValues) => {
          setFormSubmitting(true)

          try {
            const result = await signUp(values.email, values.password)
            try {
              history.push(DASHBOARD_PAGE_PATH)
            } catch (error) {
              console.log(`🚀 ~ signup error`, error)
            }
          } catch (error) {
            console.log(error)
            setFormError(formError)
            setFormSubmitting(false)
          }
        }}
        validationSchema={FinishSignupSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FormGroup label="Email address" name="email">
              <Input
                sx={{ borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('email')}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)',
                }}
                {...getFieldProps('password')}
                type="password"
                id="password"
              />
            </FormGroup>
            <FormGroup label="Repeat password" name="repeatPassword">
              <Input
                sx={{
                  borderColor: 'rgb(209, 218, 230)',
                }}
                {...getFieldProps('repeatPassword')}
                type="password"
                id="repeatPassword"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1, bg: '#3F88F5' }}>
                Sign up
              </Button>
              <Link to={{ pathname: SIGN_IN_PAGE_PATH }}>
                <Text
                  sx={{
                    color: '#3F88F5',
                  }}
                >
                  Do you already have an account? Please login in here.
                </Text>
              </Link>
            </Grid>
            {formError && (
              <Alert variant="theme.alerts.error">{formError}</Alert>
            )}
          </Form>
        )}
      </Formik>
    </BorderWrapper>
  )
}
