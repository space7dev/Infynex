import { prisma } from '@/lib/prisma'

const formatDate = (value: Date) => value.toLocaleString()

const statusLabels: Record<string, string> = {
  new: 'New',
  read: 'Read',
  archived: 'Archived',
}

export default async function AdminEmailsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  })

  const markStatus = async (formData: FormData) => {
    'use server'
    const id = String(formData.get('id') || '')
    const status = String(formData.get('status') || 'read')
    if (!id) return

    await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    })
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Contact Submissions</h1>
            <p className="mt-2 text-sm text-slate-600">
              Review and manage contact form emails from the site.
            </p>
          </div>
          <form action="/api/auth/logout" method="post">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
              Log out
            </button>
          </form>
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[900px] w-full border-collapse">
            <thead className="bg-slate-100 text-left text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Received</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {submissions.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-center text-slate-500" colSpan={8}>
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                submissions.map((submission: {
                  id: string
                  fullName: string
                  email: string
                  mobileNumber: string | null
                  message: string
                  source: string | null
                  status: string
                  createdAt: Date
                }) => (
                  <tr key={submission.id} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-medium text-slate-800">
                      {submission.fullName}
                    </td>
                    <td className="px-4 py-4">
                      <a href={`mailto:${submission.email}`} className="text-blue-600">
                        {submission.email}
                      </a>
                    </td>
                    <td className="px-4 py-4">{submission.mobileNumber || 'N/A'}</td>
                    <td className="px-4 py-4 max-w-[260px]">
                      <p className="max-h-16 overflow-hidden text-slate-600">
                        {submission.message}
                      </p>
                    </td>
                    <td className="px-4 py-4">{submission.source || 'Website'}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        {statusLabels[submission.status] ?? submission.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-slate-600">
                      {formatDate(submission.createdAt)}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <form action={markStatus}>
                          <input type="hidden" name="id" value={submission.id} />
                          <input type="hidden" name="status" value="read" />
                          <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                            Mark read
                          </button>
                        </form>
                        <form action={markStatus}>
                          <input type="hidden" name="id" value={submission.id} />
                          <input type="hidden" name="status" value="archived" />
                          <button className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                            Archive
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
