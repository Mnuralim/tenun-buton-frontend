'use client'
import React, { useState } from 'react'
import SubmitButton from '../button/submit-buton'
import * as Icons from '@/components/icons'
import { useFormState } from 'react-dom'
import * as actions from '@/actions'

interface Props {
  token: string
}

const ResetPasswordForm = ({ token }: Props) => {
  const [state, action] = useFormState(actions.resetPassword.bind(null, token), {
    success: false,
    error: {},
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <form action={action} className="w-full">
      <div className="self-start w-full">
        <div className="flex items-center justify-between mt-2">
          <p className="mb-1 text-sm">Password baru</p>
          <Icons.EyeIcon
            props={{
              svgProps: {
                onClick: () => setShowPassword((prev) => !prev),
                className: 'w-4 h-4 cursor-pointer',
              },
            }}
          />
        </div>
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="********"
          className="w-full px-3 py-2 bg-transparent border border-black outline-none rounded-xl"
        />
        {state?.error?.password ? <p className="text-xs text-danger-400">{state?.error.password.join(', ')}</p> : null}
        <p className="my-1 text-sm">Konfirmasi password baru</p>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showPassword ? 'text' : 'password'}
          placeholder="********"
          className="w-full px-3 py-2 bg-transparent border border-black outline-none rounded-xl"
        />
        {state?.error?.confirmPassword ? (
          <p className="text-xs text-danger-400">{state?.error.confirmPassword.join(', ')}</p>
        ) : null}
      </div>
      {state?.error?._form ? (
        <div className="p-2 my-4 bg-red-200 border border-red-400 rounded">{state?.error._form.join(', ')}</div>
      ) : null}
      <div className="mt-5">
        <SubmitButton>Reset</SubmitButton>
      </div>
    </form>
  )
}

export default ResetPasswordForm
