"use server"

export async function submitNook(formData: FormData) {
  const spaceName = formData.get("spaceName") as string
  const message = formData.get("message") as string

  // Simulate email sending (in a real app, you'd use a service like Resend, SendGrid, etc.)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Log the submission (in a real app, this would be sent via email)
  console.log("New Nook Submission:", {
    spaceName,
    message,
    submittedAt: new Date().toISOString(),
  })

  return {
    success: true,
    message: "Thank you for your submission! We'll review your nook suggestion and get back to you soon.",
  }
}
