import parserUa from 'ua-parser-js'
import type { APIMessage } from 'discord.js'
import { EmbedBuilder, WebhookClient } from 'discord.js'

export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event)
  const agent = parserUa(headers['user-agent'])
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const { discordWebhookUrl } = config
  const { token, name, email, message } = body

  const verify = await verifyTurnstileToken(token || body['cf-turnstile-response'])

  if (!discordWebhookUrl) {
    // 500 Internal Server Error
    throw createError({
      statusCode: 500,
      statusMessage: 'Discord webhook URL is not configured. Please contact the developer.',
    })
  }

  if (!verify.success && !import.meta.dev) {
    // 403 Forbidden
    throw createError({
      statusCode: 403,
      statusMessage: 'Turnstile token is invalid. Please contact the developer.',
    })
  }

  const webhookClient = new WebhookClient({ url: discordWebhookUrl })
  const embed = new EmbedBuilder()
    .setTitle('Personal Inquiry - Contact Form')
    .setColor(0x00FFFF)
    // To Ensure the message is somehow a bot then I will know through user agent.
    .setDescription(
        `--------\n**Browser:** ${agent.browser.name} ${agent.browser.version}\n\n**OS:** ${agent.os.name}\n--------`,
    )
    .addFields([
      {
        name: 'Cloudflare Verified',
        value: verify.success ? '✅' : '❌',
      },
      {
        name: 'Name',
        value: name,
      },
      {
        name: 'Email',
        value: email,
      },
      {
        name: 'Message',
        value: message,
      },
    ])

  const status = (await webhookClient.send({
    username: 'FormBot',
    avatarURL: 'https://christianpreston.com/favicon.jpeg',
    embeds: [embed],
  })) as APIMessage

  if (!status?.id) {
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
