function onSubmit()
{
    // var name = document.getElementById("name").value;
    // var lastname = document.getElementById("lastname").value;
    // var mail = document.getElementById("mail").value;
    // var mobile = document.getElementById("mobile").value;
    // var message = document.getElementById("message").value;
    // var body = 'Name:' +name + '<br /> LastName:' +lastname+ '<br/>Gmail:' +mail+ '<br />MobileNumber:' +mobile+ '<br /> Message:' +message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nishant",
        Password : "umcasginadfouhas",
        To : 'nishantchaudhary842@gmail.com',
        From : "anusha1999or@gmail.com",
        Subject : "This is the subject",
        Body : "this is body"
    }).then(
      message => alert(message)
    );
}
