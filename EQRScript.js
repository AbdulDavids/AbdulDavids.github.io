function generateQRCode() {
  // Retrieve user input values
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var bloodType = document.getElementById("bloodType").value;
  var allergies = document.getElementById("allergies").value;
  var medConditions = document.getElementById("medConditions").value;
  var emergencyContact1 = document.getElementById("emergencyContact1").value;

  if (!name){
    name = "Unkown"
  }

if (!age){
  age = "age unknown"
}

  if (!allergies) {
    allergies = "no allergies";
  } else {
    allergies = " has " + allergies.toLowerCase() + " allergy";
  }


  if (!bloodType) {
    bloodType = "unknown bloodtype";
  } else {
    bloodType = "Bloodtype: " + bloodType.toUpperCase();
  }


  if (!medConditions) {
    medConditions = "no underlying medical conditions";
  }


  if(!emergencyContact1) {
    emergencyContact1 = "N/A"
  }
  emergencyContact1 = "contact: " + emergencyContact1;




  // Create user String with the input values
  var userInfo = name + ", " + age + ", " + bloodType + ", " + allergies + ", " + medConditions + ", " + emergencyContact1;


  // Generate the QR code using a QR code library
  var qrCode = new QRCode(document.getElementById("qrcode"), {
    text: userInfo,
    width: 300,
    height: 300,
  });

  // Create a download link for the QR code
  var downloadLink = document.createElement("a");
  downloadLink.href = document.getElementById("qrcode").getElementsByTagName("canvas")[0].toDataURL("image/jpeg");
  downloadLink.download = "qrcode.jpg";
  downloadLink.innerHTML = "Download QR Code";
  document.getElementById("qrcode-container").appendChild(downloadLink);
}
