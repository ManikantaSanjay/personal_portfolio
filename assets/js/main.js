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















function toggleContactForm() {
  var form = document.getElementById('contact-form');
  form.style.display = (form.style.display === 'none' ? 'block' : 'none');
}



function sendEmail() {
  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!fullName.trim()) {
      alert('Please enter your full name.');
      return false;
  }
  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }
  if (!message.trim() || message.toLowerCase().includes('spam')) {
      alert('Please enter a valid message. Make sure it is not spam.');
      return false;
  }

  // Assuming you are using EmailJS or a similar service
  emailjs.send("service_d9km80g", "template_vifr2m4", {
      to_name: "Manikanta Sanjay",
      from_name: fullName,
      message: message,
      reply_to: email,
  })
  .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      toggleContactForm(); // Close the form on success
      alert('Message sent successfully!');
  }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message.');
  });
}

function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

const publications = [
    {
        id: 1,
        title: "Time Series AutoML: Hierarchical Factor Based Forecasting",
        subtitle: "Talks about hybrid forecasting model that combines deep learning and traditional time series methods to predict high-dimensional datasets, managing uncertainty effectively.",
        imageUrl: "assets/img/time_series.png",
        link: "https://doi.org/10.1007/978-981-99-1414-2_17"
    },
    {
        id: 2,
        title: "Data Scientist Job Change Prediction",
        subtitle: "Explores the use of deep learning methods, logistic regression, random forest, KNN, and SVM, to predict job changes among data science professionals.",
        imageUrl: "assets/img/data_scientist.png",
        link: "https://doi.org/10.1007/978-981-19-2541-2_17"
    },
    {
        id: 3,
        title: "Anxiety Prediction during Stressful Scenarios",
        subtitle: "Talks about machine learning model to identify levels of anxiety based on individuals' responses to specific mental health questions, aiming to facilitate appropriate psychiatric interventions to prevent severe outcomes.",
        imageUrl: "assets/img/anxiety_prediction.png",
        link: "https://doi.org/10.1109/ICICCS53718.2022.9788151"
    },
    {
        id: 4,
        title: " Mental Health At Work Prediction",
        subtitle: "Evaluates various neural network techniques, including ANN and CNN, to predict workplace-related mental health issues, highlighting the effectiveness of these models to enhance overall health outcomes.",
        imageUrl: "assets/img/mental_health.png",
        link: "https://ieeexplore.ieee.org/abstract/document/9785283"
    },
    {
        id: 5,
        title: "Comparative Analysis of Skin cancer Prediction",
        subtitle: "Explores deep learning and transfer learning techniques, Naive Bayes, logistic regression, random forests, decision trees, ANNs, and CNNs, to predict skin cancer from UV exposure, for accurate diagnosis.",
        imageUrl: "assets/img/skin_cancer.png",
        link: "https://ieeexplore.ieee.org/abstract/document/9785079"
    },
    {
        id: 6,
        title: "Lethargy Detection during Work",
        subtitle: "Explores the use of deep learning methods and Keras to detect lethargy in employees in the work-from-home environment, comparing the effectiveness of these techniques to contribute to better workplace well-being.",
        imageUrl: "assets/img/lethargy.png",
        link: "https://ieeexplore.ieee.org/abstract/document/9785330"
    },
    {
        id: 7,
        title: "Novel Approach to Classification of Ayurvedic Medicinal Plants",
        subtitle: "Describes an automated classification system for medicinal plants in India, utilizing image processing and CNNs to classify plant species from leaf images, supporting medicinal, botanical, and taxonomical research.",
        imageUrl: "assets/img/ayurveda.png",
        link: "https://www.ijert.org/a-novel-approach-to-classification-of-ayurvedic-medicinal-plants-using-neural-networks"
    },
    {
        id: 8,
        title: "Deep Learning Approach for COVID-19 Detection and Diagnosis",
        subtitle: "Presents Convolutional Neural Network (CNN) model analyzing chest X-rays to detect COVID-19 infections, offering a quicker alternative to the extensive testing processes required during the pandemic.",
        imageUrl: "assets/img/covid19.png",
        link: "https://www.ijert.org/a-deep-learning-approach-for-covid-19-detection-and-diagnosis-using-resnet-architecture"
    },

    // Add more publication objects here
];







document.querySelectorAll('.publication__entry').forEach(entry => {
    entry.addEventListener('mouseenter', function() {
        const pubId = this.getAttribute('data-id');
        const pubData = publications.find(pub => pub.id.toString() === pubId);

        if (!pubData) return;

        let previewDiv = this.querySelector('.preview');
        if (!previewDiv) {
            previewDiv = document.createElement('div');
            previewDiv.className = 'preview';
            previewDiv.innerHTML = `
    <div class="preview__details">
        <span class="preview__title">
            ${pubData.title}
            <i class="fa-solid fa-copy copy-icon"></i>
            <span class="tooltip-text">Copy link</span>
        </span>
        <div class="preview__image-container" style="position: relative;">
            <img src="${pubData.imageUrl}" alt="Publication Image" class="preview__image">
            <button class="preview__button" style="display: none;"><i class="fa-solid fa-eye"></i>Open preview</button>
        </div>
        <span class="preview__subtitle"><i class="fa-solid fa-circle-info"></i>${pubData.subtitle}</span>
    </div>
`;
            this.appendChild(previewDiv);
            setupPreview(previewDiv, pubData);
        }
    });

    entry.addEventListener('mouseleave', function() {
        const previewDiv = this.querySelector('.preview');
        if (previewDiv) {
            this.removeChild(previewDiv);
        }
    });
});

function setupPreview(previewDiv, pubData) {
    const imgContainer = previewDiv.querySelector('.preview__image-container');
    const button = previewDiv.querySelector('.preview__button');

    imgContainer.addEventListener('mouseenter', () => {
        button.style.display = 'block';
    });
    imgContainer.addEventListener('mouseleave', () => {
        button.style.display = 'none';
    });

    const copyIcon = previewDiv.querySelector('.fa-copy');
    if (copyIcon) {
        copyIcon.addEventListener('click', function(e) {
            e.stopPropagation();  // Prevent the link from being triggered
            navigator.clipboard.writeText(pubData.link).then(() => {
                showToast('Link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy link:', err);
                showToast('Failed to copy link', true);
            });
        });
    }

    button.addEventListener('click', () => {
        window.open(pubData.link, '_blank');
    });
}

function showToast(message, error = false) {
    const toastContainer = document.getElementById('toast-container');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toastMessage.style.backgroundColor = error ? 'red' : '#f0f0f0';
    toastContainer.style.display = 'block';

    setTimeout(() => {
        toastContainer.style.display = 'none';
    }, 3000);
}











  

  
  








