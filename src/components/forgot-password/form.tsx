'use client'
import React from 'react'
import SubmitButton from '../button/submit-buton'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'

const ForgotPasswordForm = () => {
  const [state, action] = useFormState(actions.forgotPassword, {
    success: false,
    error: {},
  })
  return (
    <form action={action} className="w-full">
      <div className="self-start w-full">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Masukan alamat email anda"
          className="w-full py-2 outline-none border border-black/65 rounded-xl bg-transparent px-3"
        />
      </div>
      {state?.error?._form ? (
        <div className="my-4 p-2 bg-red-200 border rounded border-red-400">{state.error._form.join(', ')}</div>
      ) : null}
      <div className="mt-5">
        <SubmitButton>Kirim</SubmitButton>
      </div>
    </form>
  )
}

export default ForgotPasswordForm
