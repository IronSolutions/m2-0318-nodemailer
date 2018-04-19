const mjmlUtils = require("mjml-utils");
const transporter = require("./transporterGmail");
const path = require("path");
const pathToHtmlEmailTemplate = path.join(
  __dirname,
  "./mail_templates/welcome_mail.html"
);

const sendAwesomeMail = (to, variables, from = "myawesome@project.com") => {
  return mjmlUtils
    .inject(pathToHtmlEmailTemplate, variables)
    .then(finalTemplate => {
      console.log("FINAL TEMPLATE");
      console.log(finalTemplate);

      return transporter
        .sendMail({
          from: `"My Awesome Project 👻" <${from}>`,
          to,
          subject: "Awesome Subject", // Asunto
          html: finalTemplate
        })
        .then(info => console.log(info));
    });
};
module.exports = sendAwesomeMail;
