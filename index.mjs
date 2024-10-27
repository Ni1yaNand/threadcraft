import { MailtrapClient } from "mailtrap";

/**
 * For this example to work, you need to set up a sending domain,
 * and obtain a token that is authorized to send from the domain.
 */

const TOKEN = "3369f62b4b6f9d93f6a191f03fdb621f";
const SENDER_EMAIL = "hello@demomailtrap.com";
const RECIPIENT_EMAIL = "ns4140620@gmail.com";

if (!TOKEN) {
  throw new Error("MAILTRAP_TOKEN environment variable is not set");
}

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
  .send({
    from: sender,
    to: [{ email: RECIPIENT_EMAIL }],
    subject: "Hello from Mailtrap!",
    text: "Welcome to  ThreadCraft AI!",
  })
  .then(console.log)
  .catch(console.error);