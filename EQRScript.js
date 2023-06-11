function generateQRCode() {
    // Retrieve user input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var bloodType = document.getElementById("bloodType").value;
    var allergies = document.getElementById("allergies").value;
    var medConditions = document.getElementById("medConditions").value;
    var emergencyContact1 = document.getElementById("emergencyContact1").value;
    var emergencyContact2 = document.getElementById("emergencyContact2").value;

  
    // Create user object with the input values
    var userInfo = {
      name: name,
      age: age,
      bloodType: bloodType,
      allergies: allergies,
      medConditions: medConditions,
      emergencyContact1: emergencyContact1,
      emergencyContact2: emergencyContact2,

    };
  
    // Convert user object to JSON string
    var userInfoJSON = JSON.stringify(userInfo);
  
    // Generate the QR code using a QR code library
    var qrCode = new QRCode(document.getElementById("qrcode"), {
      text: userInfoJSON,
      width: 128,
      height: 128
    });
  
    // Create a download link for the QR code
    var downloadLink = document.createElement("a");
    downloadLink.href = document.getElementById("qrcode").getElementsByTagName("canvas")[0].toDataURL("image/jpeg");
    downloadLink.download = "qrcode.jpg";
    downloadLink.innerHTML = "Download QR Code";
    document.getElementById("qrcode-container").appendChild(downloadLink);
  }
  
