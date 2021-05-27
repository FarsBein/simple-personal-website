console.log('Data:',data)

const displayProjects = (projects) => {
    let html = ""
    for (let project of projects) {

        //Build the HTML required to display the cards with the projects.
        html+=
        '<a href="' + project.url + '" target="_blank">' +
            '<div class="card">' +
                '<img src="' + project.image + '" alt="project" >' +
                '<div class="container">' +
                    '<h4><b>' + project.name + '</b></h4>' + 
                    '<p>' + project.description + '</p>' +
                '</div>' +
            '</div>' +
        '</a>';
    }
    const projectsBody = document.querySelector('#projects');
    projectsBody.innerHTML = html;
}   

displayProjects(data.projects)