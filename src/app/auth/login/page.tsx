'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'
import AuthForm from '@/components/auth/form'

const Page = () => {
  const [loginFormState, loginAction] = useFormState(actions.signInCredentials, {
    success: false,
    error: {},
  })
  return (
    <AuthForm
      title="Masuk"
      credentialAction={loginAction}
      loginFormState={loginFormState}
      googleAction={actions.signInGoogle}
    />
  )
}

export default Page
