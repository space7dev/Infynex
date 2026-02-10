import { Suspense } from 'react'
import ResetPasswordForm from './components/ResetPasswordForm'

type ResetPasswordPageProps = {
  searchParams?: { token?: string }
}

export default function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const token = searchParams?.token ?? ''

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Choose a new password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Create a fresh password for the admin account.
        </p>
        <Suspense>
          <ResetPasswordForm token={token} />
        </Suspense>
      </div>
    </main>
  )
}
