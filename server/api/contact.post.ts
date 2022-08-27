import { EmbedBuilder, WebhookClient, APIMessage } from "discord.js";
import parserUa from "ua-parser-js";

export default defineEventHandler(async (event) => {
  try {
    const headers = getRequestHeaders(event);
    const agent = parserUa(headers["user-agent"]);
    const body = await useBody(event);
    const config = useRuntimeConfig();

    const { discordWebhookUrl } = config;
    const { name, email, message, bot_field } = body;

    if (!discordWebhookUrl) {
      throw new Error("No discord webhook url found");
    } else if (bot_field !== "" || agent.browser.name === "") {
      throw new Error("Invalid contact form submission");
    }

    const webhookClient = new WebhookClient({ url: discordWebhookUrl });
    const embed = new EmbedBuilder()
      .setTitle("Website - Contact Form")
      .setColor(0x00ffff)
      // To Ensure the message is somehow a bot then I will know through user agent.
      .setDescription(
        `--------\n**Browser:** ${agent.browser.name} ${agent.browser.version}\n\n**OS:** ${agent.os.name}\n--------`
      )
      .addFields([
        {
          name: "Name",
          value: name,
        },
        {
          name: "Email",
          value: email,
        },
        {
          name: "Message",
          value: message,
        },
      ]);

    let status = (await webhookClient.send({
      username: "FormBot",
      avatarURL: "https://christianpreston.com/favicon.jpeg",
      embeds: [embed],
    })) as APIMessage;

    if (status?.id) {
      return {
        ok: true,
        message: "Message sent successfully",
      };
    }

    return {
      ok: false,
      message: "Message failed to send",
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
});
