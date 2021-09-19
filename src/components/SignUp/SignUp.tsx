import React, { useState, Fragment } from 'react'
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
import { DASHBOARD_PAGE_PATH } from '../../config/paths'
import { useAuth } from '../../providers/AuthProvider'
import { passwordValidation } from '../../utils/passwordValidation'

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
    <Fragment>
      <Grid
        sx={{
          ...sx,
          alignItems: 'center',
          justifyItems: 'center',
          border: '1px solid',
          borderRadius: 8,
          borderColor: 'rgb(240, 243, 247)',
          backgroundColor: '#ffff',
          boxShadow: 'rgb(0 0 0 / 5%) 0px 1px 2px 0px',
          maxWidth: '500px',
          width: 'auto',
          margin: '0 auto',
          mt: 7,
          pb: 4,
        }}
      >
        <Text
          as="div"
          sx={{
            justifySelf: 'flex-start',
            color: '#3F88F5',
            fontSize: 3,
            fontWeight: 'bold',
            mt: 3,
            ml: 3,
          }}
        >
          Commentto
        </Text>
        <Text
          sx={{
            mb: 4,
            mt: 4,
            fontSize: 4,
            color: '#4B4A4A',
            fontWeight: 'bold',
          }}
        >
          Create account
        </Text>
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
                  sx={{ width: '300px', borderColor: 'rgb(209, 218, 230)' }}
                  {...getFieldProps('email')}
                  id="email"
                />
              </FormGroup>
              <FormGroup label="Password" name="password">
                <Input
                  sx={{
                    maxWidth: '300px',
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
                    maxWidth: '300px',

                    borderColor: 'rgb(209, 218, 230)',
                  }}
                  {...getFieldProps('repeatPassword')}
                  type="password"
                  id="repeatPassword"
                />
              </FormGroup>
              <FormActions sx={{ mb: 3 }}>
                <Button
                  type="submit"
                  sx={{ mt: 1, bg: '#3F88F5', margin: '0 auto' }}
                >
                  Sign up
                </Button>
              </FormActions>
              <Text sx={{ color: '#3F88F5' }}>
                Do you already have an account? Please login in here.
              </Text>
              {formError && (
                <Alert variant="theme.alerts.error">{formError}</Alert>
              )}
            </Form>
          )}
        </Formik>
      </Grid>
    </Fragment>
  )
}
