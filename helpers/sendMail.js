const nodemailer = require('nodemailer');


const sendEmail = (options) => {

    const transporter = nodemailer.createTransport({
        service : "hotmail",
        auth : {
            user : "dran.customer96@hotmail.com",
            pass : process.env.EMAIL_PASSWORD
        }
    })
    const mailDetails = {
        from : "dran.customer96@hotmail.com",
        to : options.to,
        cc : options.cc,
        subject : options.subject,
        html : options.text
    }

    transporter.sendMail(mailDetails,function(err,data){
        if(err){
           console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

module.exports = sendEmail