// const http = require('http');
// const app = require('./app');

// app.set('port', process.env.PORT || 3000);
// const server = http.createServer(app);

// server.listen(process.env.PORT || 3000);

router.delete('/delete/:id', function (req, res) {
  let id = req.params.id;
  const account = db[id]
 if (!account){
   return res.status(400).json({error:"user not found!"});
 }
 delete db[id]
return res.status(204)
});
// ////////////
// const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-handlebars');
// const log = console.log;

// // Step 1
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL || 'wiem.kouki@esen.tn', // TODO: your gmail account
//         pass: process.env.PASSWORD || '07481019' // TODO: your gmail password
//     }
// });

// // Step 2
// transporter.use('compile', hbs({
//     viewEngine: 'express-handlebars',
//     viewPath: './templates/'
// }));


// // Step 3
// let mailOptions = {
//     from: 'daijara@gmail.com', // TODO: email sender
//     to: 'kwiem08@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer - Test',
//     text: 'Wooohooo it works!!',
//     template: 'sendmail',
//     context: {
//         name: 'Accime Esterling'
//     } // send extra values to template
// };

// // Step 4
// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs');
//     }
//     return log('Email sent!!!');
// });







