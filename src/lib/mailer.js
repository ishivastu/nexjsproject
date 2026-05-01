import nodemailer from "nodemailer";

export const sendLoginEmail = async (email, username) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: email,

      subject: "Login Successful",

      html: `
        <div style="font-family:sans-serif;">
          <h2>Welcome ${username} 🎉</h2>

          <p>You have successfully logged in to your account.</p>

          <p>If this wasn't you, please change your password immediately.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent");
  } catch (error) {
    console.log(error);
  }
};
