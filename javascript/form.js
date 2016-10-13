window.onload=function(){
  document.getElementById("submit").addEventListener("click", function(event){
    //The window will not be automatically refreshed when the button is pressed
    event.preventDefault();
    //The number of text fields that were successfully filled out
    var correct = validateContent();
    if(correct === 3){
      //If the form was valid reset the text fields and output success message
      $("#emailDiv").removeClass("has-success");
      $("#emailText").val("");
      $("#confirmDiv").removeClass("has-success");
      $("#confirmText").val("");
      $("#nameDiv").removeClass("has-success");
      $("#nameText").val("");
      $("<br><p>Success!</p>").appendTo("#confirmDiv");
    }
  });
}

function validateContent(){
  var correct = 0;
  //I wrote my own regex, hopefully this considers all valid emails
  var regEmail= /([a-zA-Z0-9\.!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z0-9\.]+)/;
  var email = document.getElementById("emailText").value;
  if(regEmail.test(email)){
    //If the email is found in the regex equation use bootstrap to show it's success
    //Remove any existing message
    $("#emailDiv").removeClass("has-danger").addClass("has-success");
    $("#emailDiv p").remove();
    ++correct;
  }
  else{
    //email was unvalid, remove any existing messages and write an error message
    $("#emailDiv").removeClass("has-success").addClass("has-danger");
    $("#emailDiv p").remove();
    $("<p>Error! Not a valid email</p>").appendTo("#emailDiv");
  }
  var confirm = document.getElementById("confirmText").value;
  //The confirm must match the previous text field and be a valid email
  if(confirm === email && regEmail.test(confirm)){
    $("#confirmDiv").removeClass("has-danger").addClass("has-success");
    $("#confirmDiv p").remove();
    $("#confirmDiv br").remove();
    ++correct;
  }
  else if (regEmail.test(confirm)===false){
    $("#confirmDiv").removeClass("has-success").addClass("has-danger");
    $("#confirmDiv p").remove();
    $("#confirmDiv br").remove();
    $("<p>Error! Not a valid email</p>").appendTo("#confirmDiv");
  }
  else {
    $("#confirmDiv").removeClass("has-success").addClass("has-danger");
    $("#confirmDiv p").remove();
    $("#confirmDiv br").remove();
    $("<p>Error! Emails do not match</p>").appendTo("#confirmDiv");
  }
  var name = document.getElementById("nameText").value;
  //Just make sure the text field has some content, any content
  if(name){
    $("#nameDiv").removeClass("has-danger").addClass("has-success");
    $("#nameDiv p").remove();
    ++correct;
  }
  else{
    $("#nameDiv").removeClass("has-success").addClass("has-danger");
    $("#nameDiv p").remove();
    $("<p>Error! Please enter your name</p>").appendTo("#nameDiv");
  }
  return correct;
}
