const sendEmail = require('../../helpers/sendMail')
module.exports = Contact = async (req,res,next) => {
    const toemail = req.body.email
    const message = 
        `
        <p>Dear Customer,</p>
        
        <h4> Thanks for showing interest towards us!</h4>

        <p>Our team will reach you soon and assist you based on the needs</p>

        <p>${process.env.EMAIL_OWNER}</p>



        <p>Thanks & Regards,</p>
        <p>InvoiceRocket Team</p>
        `
        /* Send Mail */
        try{
            await sendEmail({
                to : toemail,
                cc : "surendransakthi96@gmail.com",
                subject : "InvoiceRocket - New Customer",
                text : message
            })
            return res.status(200).json({success:true,message : "Mail Sent"})
        }catch(error){
            console.log(error)
            return res.status(500).json({success:false,error : "Email couldn't be sent"})
        }
}