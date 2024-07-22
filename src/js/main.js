// main.js

// Define projects array
const projects = [
  {
      id: 1,
      name: 'Portfolio',
      link: 'https://github.com/PinkyCodeMaster/Protfoilo',
      img: 'src/media/Portfolio.png',
      description: 'A showcase of my work and skills, featuring my latest projects and accomplishments.',
  },
];

// Get the project list container from the DOM
const projectList = document.getElementById('project-list');

// Map through projects array and create HTML elements
projects.forEach((project) => {
  // Create a div element for each project card
  const projectCard = document.createElement('div');
  projectCard.className = 'bg-primary p-4 rounded-lg shadow-lg';

  // Generate HTML for the project card
  projectCard.innerHTML = `
    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
      <img src="${project.img}" alt="${project.name} screenshot" class="w-full h-48 object-cover rounded-lg mb-4" />
    </a>
    <h3 class="text-xl font-semibold mb-2">${project.name}</h3>
    <p class="mb-2">${project.description}</p>
    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
      View Code
    </a>
    <a href="project.html?id=${project.id}" class="text-blue-500 hover:underline ml-4">
      Read More
    </a>
  `;

  // Append the project card to the project list container
  projectList.appendChild(projectCard);
});
