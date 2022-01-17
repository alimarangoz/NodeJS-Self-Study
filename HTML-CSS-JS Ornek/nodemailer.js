let nodemailer = require("nodemailer");

let transfer = nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user: "alistetores1235677@hotmail.com",
        pass:"1907torresali", //enter a pass!
    }

});

let mails = {
    from:"alistetores1235677@hotmail.com",
    to:"ali.marangoz1999@gmail.com",
    subject:"NodeJs Mail gönderme",
    text:"NodeJS ile ilk mailim.",
    html:"<h1><strong>HTML ile Mail!</strong></h1>"
};

transfer.sendMail(mails,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Mail gönderildi");
    }
});