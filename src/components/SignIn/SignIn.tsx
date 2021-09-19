import React, { useState } from 'react'
import { Alert, Input, Button, Grid, Text } from 'theme-ui'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import {
  DASHBOARD_PAGE_PATH,
  FORGOT_PASSWORD_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
} from '../../config/paths'
import { useAuth } from '../../providers/AuthProvider'
import { FormGroup } from '../../components/FormGroup/FormGroup'
import { BorderWrapper } from '../BorderWrapper/BorderWrapper'

interface LoginFormValues {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8).max(200),
})

export const SignIn = (): JSX.Element => {
  const { signIn } = useAuth()
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')
  const history = useHistory()

  return (
    <BorderWrapper title="Welcome back">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values: LoginFormValues) => {
          setFormSubmitting(true)
          try {
            await signIn(values.email, values.password)
            history.push(DASHBOARD_PAGE_PATH)
          } catch (error) {
            setFormError(formError)
            setFormSubmitting(false)
          }
        }}
        validationSchema={LoginSchema}
      >
        {({ getFieldProps, isValid }) => (
          <Form>
            <FormGroup label="You email address" name="email">
              <Input
                sx={{ borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('email')}
                id="email"
              />
            </FormGroup>
            <FormGroup label="Password" name="password">
              <Input
                sx={{ width: '400px', borderColor: 'rgb(209, 218, 230)' }}
                {...getFieldProps('password')}
                type="password"
                id="password"
              />
            </FormGroup>
            <Grid>
              <Button type="submit" sx={{ mt: 1, bg: '#3F88F5' }}>
                Log in
              </Button>
              <Link to={SIGN_UP_PAGE_PATH}>
                <Text
                  as="div"
                  sx={{
                    fontSize: 1,
                    color: '#3F88F5',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  Dont have an account? Please Sign up here.
                </Text>
              </Link>
            </Grid>
            <br />
            {formError && <Alert variant="error">{formError}</Alert>}
          </Form>
        )}
      </Formik>
    </BorderWrapper>
  )
}
