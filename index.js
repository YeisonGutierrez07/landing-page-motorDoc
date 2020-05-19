const myForm = document.getElementById('form-contact-us');

function sendEmail(dataRequest) {
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("api-key", "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");
  myHeaders.append("Accept", "application/json");

  var miInit = {method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(dataRequest)};

  fetch('https://api.sendinblue.com/v3/smtp/email', miInit)
  .then(function() {
    document.getElementById('demo').style.display='block';

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mobilephone').value = "";
    document.getElementById('message').value = "";
  });

  return false
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;

  const email = document.getElementById('email').value;

  const mobilephone = document.getElementById('mobilephone').value;

  const message = document.getElementById('message').value;

  const dataRequest = {
    sender:{  
      name:name,
      email:email
    },
    to:[  
      {  
          email:"motor.doc.bog@gmail.com",
          name:"MotorDoc"
      }
    ],
    subject:"Hola, te deje un comentario en tu pagina:",
    htmlContent:"<html><head></head><body><p>Mensaje,</p>"+message+"</p></body></html>"
  };

  sendEmail(dataRequest);
});


