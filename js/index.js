let userForm = document.querySelector('form');

let myModal = new bootstrap.Modal(document.getElementById('myModal'))

let dayOfWeek = document.getElementById('dayOfWeek');
let akanName = document.getElementById('akanName')
//function to reset input fields
function resetForm() {
  document.querySelector("form").reset();
}

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

  dateValue = document.getElementById('date').value
  gender = document.querySelector('input[name="genderRadio"]:checked').value;


  // ? will output month


let selectedDate = (new Date(dateValue)).getDay()  
let currentDay = (new Date()).getDate(); 
let selectedDay = (new Date(dateValue)).getDate();
let selectedMonth = (new Date(dateValue)).getMonth() + 1;
let currentMonth = (new Date()).getMonth() + 1;

let currentYear = (new Date()).getFullYear();
let selectedYear = (new Date(dateValue)).getFullYear();

// console.log(currentYear,selectedYear);
// console.log(currentMonth,selectedMonth);

// Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame
let maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// Female Sunday: Akosua Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama
let femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let weekDay = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday"]


if(selectedYear >= currentYear && selectedMonth >= currentMonth && selectedDay > currentDay){
  console.log('problema');
  return
}else{
  console.log('we are okay');

  console.log(selectedDate);
  if(selectedDate >=0 && gender === "male"){
    console.log('get male names');
    console.log(gender);
    dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= maleAkanNames[selectedDate]
  }else if(selectedDate >=0 && gender === "female"){
    console.log("get female names");
    console.log(gender);
    dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= femaleAkanNames[selectedDate]
  }
}
// // Sunday: Kwasi Monday: Kwadwo Tuesday: Kwabena Wednesday: Kwaku Thursday:  Yaw Friday: Kofi Saturday: Kwame
// let maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

// // Female Sunday: Akosua Monday: Adwoa Tuesday: Abenaa Wednesday: Akua Thursday:  Yaa Friday: Afua Saturday: Ama
// let femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

// let weekDay = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday"]



// console.log(dayToday,selectedDay);

// console.log(selectedMonth , currentMonth);
// if(selectedDay > dayToday && selectedMonth > currentMonth){
// console.log("Please select valid date,you can not be born before today");
// }else if (selectedDay > dayToday && selectedMonth <= currentMonth)




myModal.show()

resetForm()

})







