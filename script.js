document.addEventListener('DOMContentLoaded', function() {
    const projects = [
      {
        title: 'web developement project',
        image: 'tum.png',
        description: 'WatchWonders is a sleek website showcasing exquisite timepieces. The header features a logo and navigation links to Home, Watches, and Contact Us pages. The hero section includes a banner image with "Crafted for Precision" text. The "Featured Watches" section displays select timepieces with images, descriptions, and "Buy Now" buttons. An autoplay video at the bottom adds a dynamic touch. WatchWonders offers an elegant, user-friendly experience to explore its collection. An autoplay video at the bottom adds a dynamic touch, showcasing the watches in action. WatchWonders offers an elegant, user-friendly experience for exploring its collection of meticulously crafted watches. go through the link for website view "https://drive.google.com/drive/folders/1CpMlbc7xA0iHH_IRBMed3eCTIbA3ZjH3?usp=drive_link".'
      },
    //   {
        // title: 'Project 2',
        // image: 'images/project2.png',
        // description: 'Detailed description of Project 2.'
    //   }
    
    ];
  
    const projectList = document.querySelector('.project-list');
  
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project', 'fade-in');
  
      const projectTitle = document.createElement('h3');
      projectTitle.textContent = project.title;
  
      const projectImage = document.createElement('img');
      projectImage.src = project.image;
      projectImage.alt = project.title;
  
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
  
      projectElement.appendChild(projectTitle);
      projectElement.appendChild(projectImage);
      projectElement.appendChild(projectDescription);
  
      projectList.appendChild(projectElement);
    });
  });
  