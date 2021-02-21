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


// get the day of week for the date the user selects,(ranges from 0-6)
let selectedDate = (new Date(dateValue)).getDay()  

// get the day today
let currentDay = (new Date()).getDate(); 
// get the day user selects
let selectedDay = (new Date(dateValue)).getDate();

// get current month
let currentMonth = (new Date()).getMonth() + 1;
// get month user selects
let selectedMonth = (new Date(dateValue)).getMonth() + 1;


// get current year
let currentYear = (new Date()).getFullYear();
// get year user selects
let selectedYear = (new Date(dateValue)).getFullYear();


// Akan names array
let maleAkanNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleAkanNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

let weekDay = ["Sunday","Monday","Teusday","Wednesday","Thursday","Friday","Saturday"]


// validate  date selected by user not to be date after current date
if(selectedYear >= currentYear && selectedMonth >= currentMonth && selectedDay > currentDay){
  console.log('problema');
  return
}else{

  if(selectedDate >=0 && gender === "male"){
      dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= maleAkanNames[selectedDate]
  }else if(selectedDate >=0 && gender === "female"){
        dayOfWeek.innerHTML= weekDay[selectedDate]
    akanName.innerHTML= femaleAkanNames[selectedDate]
  }
}

myModal.show()
resetForm()

})







