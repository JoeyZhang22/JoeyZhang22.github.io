const projects = [
    {
        name: 'Music Improvisation Unit',
        description: 'A simple music generation application based in Python',
        link: 'https://github.com/markociricilic/MIU',
        date: '2024-09-10'
    },
    {
        name: 'Piano Tiles',
        description: 'A simple Piano Tiles Game based in C and played on DE1-SOC',
        link: 'https://github.com/joeyhikind/Piano-Tiles-Game',
        date: '2024-08-01'
    },
    {
        name: 'Metronerm',
        description: 'A simple command line Metronome built for cool musicians',
        link: 'https://github.com/JoeyZhang22/Metronerm',
        date: '2024-09-17'
    },
    {
        name: 'Latest Project',
        description: 'ExampleExampleExampleExampleExampleExampleExample',
        link: 'https://github.com/JoeyZhang22/Metronerm',
        date: '2024-09-20'
    },
    {
        name: 'Second Latest Project',
        description: 'ExampleExampleExampleExampleExampleExampleExample',
        link: 'https://github.com/JoeyZhang22/Metronerm',
        date: '2024-09-19'
    },
];

//Returns Inner HTML following the general projects section card format
function returnInnerHTML(latestProject) {
    return `
            <div class="card medium">
              <div class="card-content">
                <span class="card-title activator blue-text hoverline">${latestProject.name}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                    ${latestProject.date}
                </p>
                <p>
                  ${latestProject.description}
                </p>
              </div>
              <div class="card-action">
                  <a aria-label="Visit " href=${latestProject.link} target="_blank"
                    data-position="top" data-tooltip="View Online"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-external-link"></i></a>
                  <a aria-label="Visit the GitHub repo for  project"
                    href=href=${latestProject.link} target="_blank" data-position="top"
                    data-tooltip="View Source"
                    class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i
                      class="fa fa-github"></i></a>
                </div>
            </div>
        `;
}



//First Implementation
// index = 0; //Set starting index as 0

// function addProject() {
//     const container = document.getElementById('recent-projects');

//     if (index < projects.length) {

//         sorted_projects = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

//         //create div and use col s12 m6 l4 class
//         const newProjectDiv = document.createElement('div');
//         newProjectDiv.classList.add('col', 's12', 'm6', 'l4');

//         newProjectDiv.innerHTML = returnInnerHTML(sorted_projects[index]); //Select latest project

//         // Append the project to the container
//         container.appendChild(newProjectDiv);

//         // increment the project index
//         index++;
//     }
// }


//More customizable approach
let loadNumProjectPerPress = 1;

let sorted_projects = projects.sort((a, b) => new Date(b.date) - new Date(a.date));

function addProject() {
    const container = document.getElementById('recent-projects');

    //Edge case
    if (sorted_projects.length < loadNumProjectPerPress) {
        loadNumProjectPerPress = sorted_projects.length;
    }

    for (let i = 0; i < loadNumProjectPerPress; i++) {
        //create div and use col s12 m6 l4 class
        newProjectDiv = document.createElement('div');
        newProjectDiv.classList.add('col', 's12', 'm6', 'l4');

        newProjectDiv.innerHTML = returnInnerHTML(sorted_projects[0]); //Select latest project

        sorted_projects.shift(); //pop front project

        // Append the project to the container
        container.appendChild(newProjectDiv);
    }
}

// eventListener for asynchronous presses for load-more
document.getElementById('load-more').addEventListener('click', addProject);
