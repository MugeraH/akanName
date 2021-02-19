let userForm = document.querySelector('form');

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  date = document.getElementById('date').value



  gender = document.querySelector('input[name="genderRadio"]:checked').value;
  myModal.show()
  
  console.log(date,gender);
})