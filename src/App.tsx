import React from 'react'
import './App.css'
import { SignUp } from '../src/components/SignUp/SignUp'
import { AuthProvider } from './providers/AuthProvider'

function App(): JSX.Element {
  return (
    <div className="App">
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </div>
  )
}

export default App
