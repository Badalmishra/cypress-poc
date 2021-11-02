const nodemailer = require("nodemailer");
const secrets = require("./secrets");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(username,count,message) {


  return new Promise(async(resolve,reject)=>{
    console.log('secrets', secrets)
    console.log('secrets', JSON.stringify(secrets))
    console.log('failed',typeof message)
    console.log('username',username)
      try {

          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: secrets.gmail.email, // generated ethereal user
              pass:secrets.gmail.password, // generated ethereal password
            },
          });
console.log('i am mail')
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: "badalmishr7035@gmail.com", // sender address
            to: username, // list of receivers
            subject: `${count} Test failed `, // Subject line
            text: message, // plain text body
            html: message
          
          });
          console.log('mail sent')
        resolve(true)
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      } catch (error) {
          console.error("error in node mailer",error)
          reject(false)
      }
    })
}
module.exports = {
    sendMail:sendMail
}
