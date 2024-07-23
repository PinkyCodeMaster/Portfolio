// project.js

// Define projects array with tech stack and link information
const projects = [
  {
    id: 1,
    name: 'Portfolio',
    link: 'https://github.com/PinkyCodeMaster/Protfoilo',
    website: 'https://pinkycodemaster.github.io/Portfolio/',
    img: 'src/media/Portfolio.png',
    description: 'This portfolio website showcases my skills and projects as a Full Stack Web Developer. Built using HTML, CSS, Tailwind CSS, and JavaScript, the site features a clean and modern design that highlights my technical expertise and work experience. Key features include responsive design, interactive elements, custom styling, project showcase, and an emphasis on user experience. The portfolio not only reflects my technical abilities but also my attention to design and user experience, presenting my projects in a professional and accessible manner.',
    techStack: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
    ],
  },
];

// Function to get query parameter value from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the project ID from the URL
const projectId = parseInt(getQueryParam('id'), 10);

// Find the project with the matching ID
const project = projects.find((proj) => proj.id === projectId);

if (project) {
  // Set the project title
  document.getElementById('project-title').textContent = project.name;

  // Set the project image source
  const projectImage = document.getElementById('project-image');
  projectImage.src = project.img;
  projectImage.alt = `${project.name} image`;

  // Set the project description
  document.getElementById('project-description').textContent = project.description;

  // Set the tech stack
  const techList = document.getElementById('tech-list');
  techList.innerHTML = project.techStack.map(tech => `<li>${tech}</li>`).join('');

  // Set the project code and live website links
  document.getElementById('project-code-link').href = project.link;
  document.getElementById('project-live-link').href = project.website;
} else {
  // If the project is not found, display an error message
  document.getElementById('project-details').innerHTML = '<p class="text-red-500">Project not found.</p>';
}
