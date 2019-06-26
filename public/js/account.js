$("#loginUser").on("click", (event) => {
  console.log("logged in");
  //ajax goes here
})

$("#createUser").on("click", (event) => {
  console.log("user created");
  let newUser = {
    username: $("#usernameSU").val().trim(),
    password: $("#passwordSU").val().trim(),
    zip: $("#zipcodeSU").val().trim(),
    state: $("#stateCodeSU").val().trim()
  };

  $.ajax({
    type: "POST",
    url: "/api/signup",
    data: newUser
  }).then( (data) => {
    console.log(data)
  });
});