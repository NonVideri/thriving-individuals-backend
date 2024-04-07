/// <reference path="../pb_data/types.d.ts" />

// Read the .env file and set the environment variables.
onAfterBootstrap((e) => {
  require(`${__hooks}/lib/env.js`);
});

onRecordAfterCreateRequest((e) => {
  const email = e.record?.get("email");
  const id = e.record?.get("id");

  const message = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name:    $app.settings().meta.senderName,
    },
    to: email,
    subject: "Welcome to Thriving Individuals!",
    text: `Thank you for subscribing to our newsletter. To receive messages from us, confirm your subscription by clicking the link below:\n\n${process.env.FRONTEND_URL}/confirm-subscription?id=${id}\n\n`,
    html: `Thank you for subscribing to our newsletter. To receive messages from us, confirm your subscription by clicking the link below:<br><br><a href="${process.env.FRONTEND_URL}/confirm-subscription?id=${id}">Confirm Subscription</a><br><br>`,
  });

  $app.newMailClient().send(message)
}, "subscriptions");
