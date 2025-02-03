// Get reference to the form and display area
var form = document.getElementById('resume.form');
var resumeDisplayElement = document.getElementById('resume.display');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate resume HTMl
    var resumeHTML = '<h2><b> Editable Resume</b><h2>    <h3>Personal Information</h3>   <p><b>Name:</b><span contenteditable="true">${name}</span></p>   <p><b>Email:</b><span contenteditable="true">${email}</span></p>  <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>    <h3>Education</h3> <p contenteditable="true">${education}</p>    <h3>Experience</h3> <p contenteditable="true">${experience}</p>     <h3>Skills</h3> <p contenteditable="true">${skills}</p>';
    //display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
