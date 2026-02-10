export type ContactPayload = {
  full_name: string
  email: string
  mobile_number: string
  message: string
  website?: string
  source?: string
}

export type ContactResponse = {
  status: 'ok'
}

export const submitContactForm = async (payload: ContactPayload) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => null)
    throw new Error(data?.detail || 'Unable to send message')
  }

  return (await response.json()) as ContactResponse
}
