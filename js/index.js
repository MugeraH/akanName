let userForm = document.querySelector('form');
let myModal = new bootstrap.Modal(document.getElementById('myModal'))
let dayOfWeek = document.getElementById('dayOfWeek');
let akanName = document.getElementById('akanName')
let alert = document.getElementById('invalidDateAlert')

//function to reset input fields
let resetForm =() =>{
  document.querySelector("form").reset();
}

//function to show error alert
let showAlert = (message) =>{
  alert.innerHTML = message
}
//function to hide error alert
let closeAlert = ()=>{
  alert.innerHTML = null
  }

userForm.addEventListener("submit", (e)=>{
  e.preventDefault()

let  dateValue = document.getElementById('date').value
let  gender = document.querySelector('input[name="genderRadio"]:checked').value;


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
if(selectedYear >= currentYear && selectedMonth > currentMonth){
  showAlert("Please select valid date,you cant select date before today!")

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
closeAlert()
myModal.show()
resetForm()

})







