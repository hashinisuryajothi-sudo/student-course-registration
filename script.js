// Student Registration Form Validation

document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let department = document.getElementById("department").value.trim();
    let course = document.getElementById("course").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value.trim();

    // Required Field Validation
    if(
        name === "" ||
        email === "" ||
        mobile === "" ||
        department === "" ||
        course === "" ||
        dob === "" ||
        address === ""
    ){
        alert("Please fill all fields!");
        return;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address!");
        return;
    }

    // Mobile Validation
    let mobilePattern = /^[0-9]{10}$/;

    if(!mobilePattern.test(mobile)){
        alert("Mobile number must contain exactly 10 digits!");
        return;
    }

    // Gender Validation
    let genderSelected =
    document.querySelector('input[name="gender"]:checked');

    if(!genderSelected){
        alert("Please select gender!");
        return;
    }

    let gender = genderSelected.value;

    // Age Validation (18+)
    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDiff = today.getMonth() - birthDate.getMonth();

    if(
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ){
        age--;
    }

    if(age < 18){
        alert("Age must be greater than 18 years!");
        return;
    }

    // Skills
    let skills = [];

    document.querySelectorAll('.skills input:checked')
    .forEach(skill => {
        skills.push(skill.value);
    });

    // Insert Data into Table
    let tableBody =
    document.querySelector("#studentTable tbody");

    let row = tableBody.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = mobile;
    row.insertCell(3).innerHTML = department;
    row.insertCell(4).innerHTML = course;
    row.insertCell(5).innerHTML = skills.join(", ");

    // Success Message
    alert("Student Registered Successfully!");

    // Reset Form
    document.getElementById("registrationForm").reset();

});