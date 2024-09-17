var form1 = document.getElementById("resume-form");
var display1 = document.getElementById("generated-resume");
// form Submission
form1.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input  values
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("Phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate resume dynamically
    var resumedisplay = "\n    <h2><b> Editable Resume</b></h2>\n    <h3><b>Personl Information</b></h3>\n    <p><b> Name</b><span contenteditable =\"true\">".concat(username, "</span> </p>\n    <p><b> Name</b> <span contenteditable =\"true\">").concat(email, " </span> </p>\n    <p><b> Name</b> <span contenteditable =\"true\">").concat(phone, " </span></p>\n\n    <h3> Education</h3>\n    <p contenteditable =\"true\">").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p contenteditable =\"true\">").concat(experience, "</p>\n\n    <h3> Skills</h3>\n    <p contenteditable =\"true\">").concat(skills, "</p>\n    ");
    // display resume
    if (display1) {
        display1.innerHTML = resumedisplay;
    }
    else {
        console.error("The Resume Display element is require");
    }
});
