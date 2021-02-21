let userForm = document.querySelector('form');

var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//function to reset input fields
function resetForm() {
  document.querySelector("form").reset();
}

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  date = document.getElementById('date').value
  gender = document.querySelector('input[name="genderRadio"]:checked').value;
  //? will output month
  // myDate = (new Date(date)).getMonth() +1;
  dateToday = (new Date()).getDate()  
myDate = (new Date(date)).getDate()  



// Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame
var maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// Female Sunday: Akosua Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama
var femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

var dayOfWeek = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday"]



if(myDate > dateToday){
console.log("PLease select valid date,you can not be born before today");
return;
}


console.log(myDate,gender);




myModal.show()



})