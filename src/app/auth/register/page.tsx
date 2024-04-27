'use client'
import React from 'react'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'
import AuthForm from '@/components/auth/form'

const Page = () => {
  const [registerFormState, registerAction] = useFormState(actions.register, {
    errors: {},
  })

  return (
    <AuthForm
      title="Registrasi"
      googleAction={actions.signInGoogle}
      credentialAction={registerAction}
      registerFormState={registerFormState}
    />
  )
}

export default Page
