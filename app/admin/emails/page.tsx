import { prisma } from '@/lib/prisma'

export default async function AdminEmailsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-none">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Contact submissions</h1>
            <p className="mt-2 text-sm text-slate-600">
              Latest form entries received from the website.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Message</th>
                  <th className="px-6 py-4">Source</th>
                  <th className="px-6 py-4">Client IP</th>
                  <th className="px-6 py-4">User Agent</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="align-top">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">
                        {submission.fullName}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-slate-700">{submission.email}</td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.mobileNumber}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      <p className="max-w-sm whitespace-pre-wrap text-sm leading-relaxed text-slate-700">
                        {submission.message}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.source || '—'}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.clientIp || '—'}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.userAgent || '—'}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.status}
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      {submission.createdAt.toLocaleString()}
                    </td>
                  </tr>
                ))}
                {submissions.length === 0 && (
                  <tr>
                    <td
                      className="px-6 py-8 text-center text-slate-500"
                      colSpan={9}
                    >
                      No submissions yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
        </div>
      </div>
    </main>
  )
}
