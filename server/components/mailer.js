// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com', // Your email address
        pass: 'your_password' // Your password
    }
});

// Function to send reset password email
function sendResetPasswordEmail(email, resetToken) {
    // Define email options
    let mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Password Reset',
        html: `<p>You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
               <p>Please click on the following link, or paste this into your browser to complete the process:</p>
               <p><a href="http://your_domain.com/reset-password?token=${resetToken}">Reset Password Link</a></p>
               <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error occurred while sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
}

module.exports = sendResetPasswordEmail;
