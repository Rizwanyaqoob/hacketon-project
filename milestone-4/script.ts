const form1 = document.getElementById("resume-form") as HTMLFormElement
const display1 = document.getElementById("generated-resume") as HTMLDivElement

// form Submission
form1 .addEventListener("submit", (event : Event) =>{
    event.preventDefault();
    // collect input  values
    const username = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const  phone= (document.getElementById("Phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // generate resume dynamically
    let resumedisplay = `
    <h2><b> Editable Resume</b></h2>
    <h3><b>Personl Information</b></h3>
    <p><b> Name</b><span contenteditable ="true">${username}</span> </p>
    <p><b> Name</b> <span contenteditable ="true">${email} </span> </p>
    <p><b> Name</b> <span contenteditable ="true">${phone} </span></p>

    <h3> Education</h3>
    <p contenteditable ="true">${education}</p>

    <h3> Experience</h3>
    <p contenteditable ="true">${experience}</p>

    <h3> Skills</h3>
    <p contenteditable ="true">${skills}</p>
    `;
    // display resume
if(display1){
    display1.innerHTML = resumedisplay
}
else{
    console.error(`The Resume Display element is require`)
}
})