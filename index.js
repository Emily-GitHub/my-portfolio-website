const about = document.getElementById("aboutReveal");
const projects = document.getElementById("projectsReveal");
const connect = document.getElementById("connectReveal");

//Toggle buttons to hide/show div elements are set to hide by default on page loading
function defaultDisplay () {
    about.style.display = "none";
    projects.style.display = "none";
    connect.style.display = "none";
}

defaultDisplay ();

// Display About Me section upon button click event
function displayAbout() {
    if (about.style.display == "none") {
        about.style.display = 'block';}
    else {
        about.style.display = "none";}
    }

// Display Projects section upon button click event
function displayProjects() {
    const projects = document.getElementById("projectsReveal");
    if (projects.style.display == "none") {
        projects.style.display = "block";}
    else {
        projects.style.display = "none";}
    }

// Display Connect With Me section upon button click event
function displayConnect() {
    if (connect.style.display == "none") {
        connect.style.display = "block";}
    else {
        connect.style.display = "none";}
    }

const projectsArray = [
    "[Insert URL #1]",
    "[Insert URL #2]",
    "[Insert URL #3]",
]

function generateProjectsList (arg) {
    let items = "";
    for (let i=0; i<arg.length; i++) {
        items += `<li>${arg[i]}</li>`;
    }
    return items;
}

// Display list generated from looping through projectsArray
document.querySelector("#projectsList").innerHTML = `
<ol>
${generateProjectsList(projectsArray)}
</ol>
`;