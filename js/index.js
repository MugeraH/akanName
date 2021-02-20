let userForm = document.querySelector('form');

var myModal = new bootstrap.Modal(document.getElementById('myModal'))

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  date = document.getElementById('date').value
  gender = document.querySelector('input[name="genderRadio"]:checked').value;
  //? will output month
  // myDate = (new Date(date)).getMonth() +1;
  dateToday = (new Date()).getDate()  
myDate = (new Date(date)).getDate()  

if(myDate > dateToday){
console.log("PLease selcet valid date,you can not be born before today");
}else{
  console.log(myDate,dateToday,gender);
}



  //myModal.show()
  

})