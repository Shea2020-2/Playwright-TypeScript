const nodemailer = require("nodemailer");

// Your Gmail credentials
const email = "shanemcclean6@gmail.com";
const password = "qowk gcun lika cpwc";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

// Define the email content
const mailOptions = {
  from: email,
  to: "shanemcclean2022@gmail.com", // Replace with the recipient's email address
  subject: "Test Email",
  text: "This is a test email from Nodemailer.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info);
  }
});
