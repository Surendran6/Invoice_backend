const nodemailer = require('nodemailer');


const sendEmail = (options) => {
   
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        tls: {
        ciphers:'SSLv3'
        },
        
        requireTLS:true,
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