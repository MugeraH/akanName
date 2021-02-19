let userForm = document.querySelector('form');

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  date = document.getElementById('date').value



  gender = document.querySelector('input[name="genderRadio"]:checked').value;

  
  console.log(date,gender);
})