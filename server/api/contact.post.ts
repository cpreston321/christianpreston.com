export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { token, name, email, message } = body
  const verify = await verifyTurnstileToken(token || body['cf-turnstile-response'])

  // 403 Forbidden - Turnstile token is invalid.
  // Most likely the token is invalid or the user is a bot.
  if (!verify.success && !import.meta.dev) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Recaptcha Failed, Please try again.',
      data: {
        body,
        verify,
      },
    })
  }

  const contact = await useDrizzle().insert(tables.contact).values({
    name,
    email,
    message,
    createdAt: new Date(),
  }).returning().get()

  if (!contact) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Message failed to send',
    })
  }

  return {
    ok: true,
    message: 'Message sent successfully',
  }
})
