'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import SuccessNotification from './success-notification'
import FailedNotification from './failed-notification'

const NotificationContainer = () => {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const failed = searchParams.get('failed')
  const showNotifContainer = success || failed
  if (!showNotifContainer) return null

  let title = ''
  let subtitle = ''
  let loginButton = false
  if (success && success === 'email-reset-password-sent') {
    title = 'Email reset password terkirim'
    subtitle = 'Silahkan cek email anda'
  }

  if (success && success === 'password-reset-success') {
    title = 'Password anda telah direset'
    subtitle = 'Silahkan login kembali'
    loginButton = true
  }

  if (failed && failed === 'email-reset-password-failed') {
    title = 'Email reset password gagal'
    subtitle = 'Silahkan coba lagi'
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-primary2">
      {success ? (
        <SuccessNotification title={title} subtitle={subtitle} loginButton={loginButton} />
      ) : (
        <FailedNotification title={title} subtitle={subtitle} />
      )}
    </div>
  )
}

export default NotificationContainer
