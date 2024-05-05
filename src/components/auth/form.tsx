import React, { useState } from 'react'
import * as Icons from '@/components/icons'
import { CreateLoginFormState } from '@/actions/next-auth-signin-credentials'
import SubmitButton from '../button/submit-buton'
import Link from 'next/link'
import { CreateRegisterFormState } from '@/actions/register'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
  googleAction?: any
  credentialAction?: (payload: FormData) => void
  loginFormState?: CreateLoginFormState
  registerFormState?: CreateRegisterFormState
}

const AuthForm = ({ title, googleAction, credentialAction, loginFormState, registerFormState }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const router = useRouter()

  if (loginFormState?.success) {
    router.push('/main')
  }
  return (
    <section className="h-screen items-center justify-center grid grid-cols-1 lg:grid-cols-2">
      <div
        className="bg-auth bg-center bg-cover w-full h-full hidden lg:block"
        style={{
          backgroundImage: "url('/img/hands-sewing.jpg')",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-35"></div>
      </div>
      <div className="h-full flex items-center justify-center flex-col px-5 gap-6 lg:px-32">
        <h1 className="self-start font-bold text-xl">{title}</h1>
        <div className="w-full flex flex-col gap-3">
          <form action={googleAction}>
            <button
              type="submit"
              className="flex items-center justify-center w-full border border-black py-2 gap-3 rounded-xl"
            >
              <Icons.GoogleIcon
                props={{
                  svgProps: {
                    className: 'w-6 h-6',
                  },
                }}
              />
              <span>{title} dengan Google</span>
            </button>
          </form>
          <button className="flex items-center justify-center w-full border border-black py-2 gap-3 rounded-xl">
            <Icons.FacebookIcon
              iconColor="#0866FF"
              props={{
                className: 'w-6 h-6',
              }}
            />
            <span>{title} dengan Facebook</span>
          </button>
        </div>
        <div className="w-full flex items-center gap-3">
          <div className="w-full border border-gray-400/55"></div>
          Atau
          <div className="w-full border border-gray-400/55"></div>
        </div>
        <form action={credentialAction} className="w-full">
          <div className="self-start w-full">
            <p className="mb-1 text-sm">Alamat email</p>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="w-full py-2 outline-none border border-black rounded-xl bg-transparent px-3"
            />
            {loginFormState && loginFormState.error?.email ? (
              <p className="text-danger-400 text-xs">{loginFormState.error.email.join(', ')}</p>
            ) : registerFormState && registerFormState.errors?.email ? (
              <p className="text-danger-400 text-xs">{registerFormState.errors.email.join(', ')}</p>
            ) : null}
            <div className="flex justify-between items-center mt-2">
              <p className="mb-1 text-sm">Password</p>
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
              className="w-full py-2 outline-none border border-black rounded-xl bg-transparent px-3"
            />
            {loginFormState && loginFormState.error?.password ? (
              <p className="text-danger-400 text-xs">{loginFormState.error.password.join(', ')}</p>
            ) : registerFormState && registerFormState.errors?.password ? (
              <p className="text-danger-400 text-xs">{registerFormState.errors.password.join(', ')}</p>
            ) : null}
            {title === 'Masuk' ? (
              <Link
                href={'/auth/forgot-password'}
                className="underline-offset-4 underline text-end w-full mt-1 text-sm inline-block"
              >
                Lupa password
              </Link>
            ) : null}
            {title === 'Registrasi' ? (
              <div className="mb-5">
                <p className="mb-1 text-sm mt-2">Konfirmasi password</p>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  className="w-full py-2 outline-none border border-black rounded-xl bg-transparent px-3"
                />
                {registerFormState && registerFormState.errors?.confirmPassword ? (
                  <p className="text-danger-400 text-xs">{registerFormState.errors.confirmPassword.join(', ')}</p>
                ) : null}
              </div>
            ) : null}
          </div>
          {loginFormState && loginFormState.error?._form ? (
            <div className="my-4 p-2 bg-red-200 border rounded border-red-400">
              {loginFormState.error._form.join(', ')}
            </div>
          ) : registerFormState && registerFormState.errors?._form ? (
            <p className="my-4 p-2 bg-red-200 border rounded border-red-400">
              {registerFormState.errors._form.join(', ')}
            </p>
          ) : null}
          <div className="w-1/2 self-start">
            <SubmitButton>{title}</SubmitButton>
            {title === 'Masuk' ? (
              <p className="text-sm mt-2">
                Belum punya akun?
                <Link href={'/auth/register'} className="font-semibold">
                  Daftar
                </Link>
              </p>
            ) : (
              <p className="text-sm mt-2">
                Sudah punya akun?
                <Link href={'/auth/login'} className="font-semibold">
                  Masuk
                </Link>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default AuthForm
