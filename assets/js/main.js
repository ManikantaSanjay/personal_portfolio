/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

document.querySelector('#work1 h5').addEventListener('click', function() {
  window.location.href = "https://github.com/ManikantaSanjay/indian_number_plate_character_recognition";
});

    document.querySelector("#work2 h5").addEventListener('click', function()  {
        location.href = "https://github.com/ManikantaSanjay/web-scraper-rust";
    });

    document.querySelector('#work3 h5').addEventListener('click', function() {
      location.href = "https://github.com/AshishAgarwal2101/cs-286nlp-project";
    });

    document.querySelector('#work4 h5').addEventListener('click', function() {
      location.href = "https://github.com/ManikantaSanjay/Medical_Care_Management_System";
    });

    document.querySelector('#work5 h5').addEventListener('click', function() {
      location.href = "https://drive.google.com/file/d/1CA0DWb6Rk0NKYJ-JETezUpgRrKFu-a68/view";
    });

    document.querySelector('#work6 h5').addEventListener('click', function() {
      location.href = "https://drive.google.com/file/d/1V3MPkaS_W5Dntl6K8w2hoaCWDlsqw99w/view";
    });

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});



function copyToClipboard() {
    const str = document.getElementById('contactno').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

// Existing scroll reveal animations...

function copyToClipboard() {
    const str = document.getElementById('contactno').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

/*===== TIMELINE EXPAND/COLLAPSE FEATURE =====*/
var coll = document.getElementsByClassName("timeline-title");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}

var contactno = document.getElementById('contactno');
var copyBox = contactno.querySelector('.copyBox');
var phoneText = contactno.querySelector('span');

contactno.addEventListener('mouseenter', function() {
  // Show the copy box when mouse enters the element
  copyBox.style.display = 'block';
});

contactno.addEventListener('mouseleave', function() {
  // Hide the copy box when mouse leaves the element
  copyBox.style.display = 'none';
});

copyBox.addEventListener('click', function() {
  // Create a new textarea element
  var textarea = document.createElement('textarea');
  
  // Set the value of the textarea to the text you want to copy
  textarea.value = phoneText.textContent;
  
  // Append the textarea to the HTML document
  document.body.appendChild(textarea);
  
  // Select the text
  textarea.select();
  
  // Copy the text
  document.execCommand('copy');
  
  // Remove the textarea
  document.body.removeChild(textarea);
  
  // Provide feedback if desired
  alert("Copied to clipboard");
});

function showDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Experience dynamic generation

var experienceData = [
    {
      "company": "Cognizant",
      "url": "https://www.cognizant.com/us/en",
      "duration": "July 2021 - July 2022",
      "position": "Programmer Analyst - Full Stack Engineering Team",
      "responsibilities": [
        "Established high-performance order processing services, using React and NodeJS, ensuring a low latency system for clients; handled over 800+ orders per minute.",
        "Architected Docker containerized micro-services using Golang for helping customers track real-time orders; resulted in a 30% decrease in average customer support ticket resolution time.",
        "Orchestrated the deployment of the micro-services on AWS using Kubernetes; enabled the system to handle 5X increase in concurrent user traffic with minimal downtime.",
      ]
    },
    {
        "company": "Cognizant",
        "url": "https://www.cognizant.com/us/en",
        "duration": "March 2021 - July 2021",
        "position": "Programmer Analyst Trainee - Full Stack Engineering Team",
        "responsibilities": [
          "Engineered an internal support tool with customizable dashboards and reports, empowering team leaders to analyze trends, identify areas for improvement; facilitated access to real-time customer support metrics and ticketing data",
          "Streamlined GraphQL integration with the Python backend; led to 15% improvement in data query efficiency."
        ]
      },
      {
        "company": "Agent Technologies Pvt. Ltd",
        "url": "http://www.agenttech.org/",
        "duration": "February 2020 - October 2020",
        "position": "Software Developer Intern",
        "responsibilities": [
          "Created MATLAB scripts and functions to analyze large datasets collected from sensors of home automation systems.",
          "Revamped the user experience by developing interactive MATLAB GUIs for customers, resulting in a 20% increase in overall customer satisfaction ratings and a 35% improvement in user engagement."
        ]
      },
    
  ];
  
// Experience dynamic generation


window.onload = function() {
  var experienceContainer = document.querySelector('#experience .container');

  experienceData.forEach(function(workExperience,index) {
    var row = document.createElement('div');
    row.className = 'row mt-4 mt-md-0';

    var leftCol = document.createElement('div');
    leftCol.className = 'col-lg-6 col-md-12 icon-box';
    leftCol.setAttribute('data-aos', 'fade-up');
    leftCol.setAttribute('data-aos-delay', '100');

    var h4 = document.createElement('h4');
    h4.style.textAlign = 'left';

    var link = document.createElement('a');
    link.href = workExperience.url;
    link.style.color = '#4070F4';
    link.textContent = workExperience.company;

    h4.appendChild(link);
    leftCol.appendChild(h4);

    var h5 = document.createElement('h5');
    h5.style.textAlign = 'left';
    h5.style.color = 'black';
    h5.textContent = workExperience.duration;
    leftCol.appendChild(h5);

    var p = document.createElement('p');
    p.style.textAlign = 'left';
    p.style.color = 'black';
    var em = document.createElement('em');
    em.textContent = workExperience.position;
    p.appendChild(em);
    leftCol.appendChild(p);

    leftCol.addEventListener('click', function() {
      // first hide all other rightCols
      var allRightCols = document.querySelectorAll('.rightCol');
      allRightCols.forEach(function(col) {
        col.style.display = 'none';
      });

      // then display the clicked one
      var rightCol = document.getElementById(`rightCol-${index}`);
      rightCol.style.display = 'block';

      // move the leftCol to the left
      this.className = 'col-lg-3';
    });

    row.appendChild(leftCol);

    var rightCol = document.createElement('div');
    rightCol.className = 'col-lg-6 col-md-12 icon-box';
    rightCol.setAttribute('data-aos', 'fade-up');
    rightCol.setAttribute('data-aos-delay', '100');

    var ul = document.createElement('ul');
    ul.style.textAlign = 'left';
    workExperience.responsibilities.forEach(function(responsibility) {
      var li = document.createElement('li');
      li.textContent = responsibility;
      ul.appendChild(li);
    });

    rightCol.style.display = 'none';
    rightCol.id = `rightCol-${index}`;
    rightCol.className = `rightCol col-lg-9`; 

    rightCol.appendChild(ul);
    row.appendChild(rightCol);
    
    experienceContainer.appendChild(row);
  });
};

document.querySelectorAll('.menu-trigger').forEach(item => {
  item.addEventListener('click', () => {
      // Toggle the visibility of the description bar
      const workImg = item.closest('.work__img');
      workImg.classList.toggle('show-description');
  });
});

function autoScrollDescriptionBar() {
  const descriptionBar = document.querySelector('.description-bar');
  const content = document.querySelector('.scrollable-content');

  let scrollAmount = 0; // Starting scroll position
  const step = 1; // How much to move each interval (in pixels)
  const delay = 30; // Delay between each movement (in milliseconds)
  const resetDelay = 100; // Delay before scrolling resets (in milliseconds)

  function stepScroll() {
      const maxScrollHeight = content.scrollHeight - descriptionBar.clientHeight;

      if (scrollAmount < maxScrollHeight) {
          scrollAmount += step;
          content.style.top = -scrollAmount + 'px';
      } else {
          setTimeout(() => {
              scrollAmount = 0; // Reset scroll amount
              content.style.top = '0px'; // Reset position
          }, resetDelay);
      }
  }

  setInterval(stepScroll, delay);
}

autoScrollDescriptionBar(); // Call the function




  

  
  








