window.onload=function(){
  document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    var correct = validateContent();
    if(correct === 3){
      location.reload();
    }
  });
}

function validateContent(){
  var correct = 0;
  var regEmail= /([a-zA-Z0-1\.!#$%&'*+\-/=?^_`{|}~]+@[a-zA-Z0-1\-\.]+\.[a-zA-Z0-1\.]+)/;
  var email = document.getElementById("emailText").value;
  if(regEmail.test(email)){
    $("#emailDiv").removeClass("has-danger").addClass("has-success");
    ++correct;
  }
  else{
    $("#emailDiv").removeClass("has-success").addClass("has-danger");
  }
  var confirm = document.getElementById("confirmText").value;
  if(confirm === email && regEmail.test(confirm)){
    $("#confirmDiv").removeClass("has-danger").addClass("has-success");
    ++correct;
  }
  else{
    $("#confirmDiv").removeClass("has-success").addClass("has-danger");
  }
  var name = document.getElementById("nameText").value;
  if(name){
    $("#nameDiv").removeClass("has-danger").addClass("has-success");
    ++correct;
  }
  else{
    $("#nameDiv").removeClass("has-success").addClass("has-danger");
  }
  return correct;
}
