function onInit() {
  console.log("Ready");
  renderRelativePage();
}

var relativePage = "main";

var personalDetails = [
  { item: "Name", value: "Hosam" },
  {
    item: "Tel",
    value: "+972-52-406-9659",
  },
  {
    item: "Email",
    value: "wolfergod23@gmail.com",
  },
  {
    item: "Address",
    value: "Peqiin, Israel",
  },
];
var software = [
  {
    item: "Highly proficient",
    value: "with Web Applications, Vue, Angular and Office",
  },
  {
    item: "Very good",
    value: "control of Firebase",
  },
  {
    item: "Good control",
    value: "of Node.js and MongoDB",
  },
];
var languages = [
  {
    item: "Arabic",
    value: "Mother's tongue",
  },
  {
    item: "Hebrew",
    value: "Full command",
  },
  {
    item: "English",
    value: "Very good command",
  },
];
var workExperience = [
  {
    title: "2020 – Today Disabled at work",
    items: ["Disabled at work"],
  },
  {
    title: "2018 – 2020, tranportation at taher hovalot",
    items: ["Moves and assembles furniture"],
  },
  {
    title: "2016 – 2018, Cellular technician, peqiin cellular",
    items: ["Repairs devices up to level D and sells in the store"],
  },
];
var education = [
  {
    title: "2023 – Full Stack programming course at Pro Code",
    items: ["Frontend: Vue, React, Angular", "Backend: Node.js, MongoDB"],
  },
  {
    title:
      "2023 – Final project, software practical engineer diploma degree, Ort Braude College",
    items: ["Administrative site for a planning and construction company"],
  },
  {
    title: "2017 – Certificate studies, cellular technician up to level D",
    items: ["I studied cellular technician up to level D level repairs"],
  },
];
var social = [
  {
    item: "Development",
    value:
      "and publication of a grammatical analysis method in Arabic helping teachers and students understand the various topics of syntax",
  },
  {
    item: "Volunteering",
    value: "in helping Arabic students reach matriculation",
  },
  {
    item: "Representative",
    value: "of the Student Association at TAU",
  },
  {
    item: "2 years",
    value:
      "participation in a 'Perah' project at an innovative school in Yarka",
  },
];

var myProjects = [
  {
    Image: "https://i.ytimg.com/vi/fpV1LTbavKk/hqdefault.jpg",
    title: "To Be Programmer",
    technologies: ["Vue, Node.js, MongoDB"],
    link: "https://hosamkh1998.github.io/hosamTestCodePro/",
    description:
      "A website for a programming course, where students can register and log in, and the teacher can add and delete students, and the students can see their grades and the teacher can add and delete grades.",
    createdBy: "25/04/2023",
  },
  {
    Image:
      "https://assets.materialup.com/uploads/24de0951-14e6-4f0c-900a-4dc57f522234/26.png",
    title: "Products Gallery",
    technologies: ["Html, CSS, JavaScript"],
    link: "https://hosamkh1998.github.io/galleryProCode/",
    description:
      "A website for a book shop, where the user can register and log in, and the user can add and delete books to the cart, and the user can see the total price of the books in the cart.",
    createdBy: "27/03/2023",
  },
];

function renderPersonalDetails() {
  var ePersonalDetails = document.querySelector(".personalDetails");
  var strHTML = "";
  personalDetails.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (ePersonalDetails) ePersonalDetails.innerHTML = strHTML;
}

function renderSoftware() {
  var eSoftware = document.querySelector(".software");
  var strHTML = "";
  software.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSoftware) eSoftware.innerHTML = strHTML;
}

function renderLanguages() {
  var eLanguages = document.querySelector(".languages");
  var strHTML = "";
  languages.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eLanguages) eLanguages.innerHTML = strHTML;
}

function renderWorkExperience() {
  var eWorkExperience = document.querySelector(".workExperience");
  var strHTML = "";
  workExperience.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eWorkExperience) eWorkExperience.innerHTML = strHTML;
}

function renderEducation() {
  var eEducation = document.querySelector(".education");
  var strHTML = "";
  education.forEach(function (item) {
    strHTML += `<li><span><b>${item.title}</b>:</span><ul>`;
    item.items.forEach(function (item) {
      strHTML += `<li>${item}</li>`;
    });
    strHTML += `</ul></li>`;
  });
  if (eEducation) eEducation.innerHTML = strHTML;
}

function renderSocial() {
  var eSocial = document.querySelector(".social");
  var strHTML = "";
  social.forEach(function (item) {
    strHTML += `<li><span><b>${item.item}</b>:</span> ${item.value}</li>`;
  });
  if (eSocial) eSocial.innerHTML = strHTML;
}

function renderProjects() {
  var eProjects = document.querySelector(".myProjects");
  var strHTML = "";
  myProjects.forEach(function (item) {
    (strHTML += `<div class="card m-1 cardProj" style="width: 18rem">
    <img
      src="${item.Image}"
      class="card-img-top"
      alt="${item.title}"
    />
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">
        <span class="fs-5 fw-bolder">technologies:</span>
        <ul>`),
      item.technologies.forEach(function (item) {
        strHTML += `<li>${item}</li>`;
      }),
      (strHTML += `
        </ul>
      </p>
      <p class="fs-5 text-primary">${item.createdBy}</p>
      <p class="card-text">${item.description}</p>
      <button class="btn btn-success col-12"><a class="text-light" href="${item.link}" target="_blank">Visit site</a></button>
    </div>
  
  </div>`);
  });
  if (eProjects) eProjects.innerHTML = strHTML;
}

function renderRelativePage(page = "main") {
  var eContainer = document.querySelector(".container");
  htmlStr = "";
  switch (page) {
    case "main":
      htmlStr = `
      <div class="row">
      <div class="col-12 bg-primary d-flex align-items-center header">
        <span class="fs-2 fw-bolder">Hosam Khier CV</span>

        <span class="fs-3 ms-auto">
          <button
            onclick="renderRelativePage('projects')"
            class="d-flex align-items-center navigateBtn"
          >
            <span class="material-symbols-outlined fs-2">
              integration_instructions
            </span>
            <span>My Projects</span>
          </button></span
        >
      </div>

      <div class="col-xs-12 col-lg-4 bg-primary-subtle pt-2 leftSide">
        <div class="d-flex justify-content-center col-12">
          <img
            class="imgProfile"
            src="https://i.ibb.co/T0Chz7h/avatar-icon.png"
            alt="profile image"
          />
        </div>

        <div class="col-12 fs-5">
          <span class="fs-4 fw-bolder">Personal details</span>
          <ul class="personalDetails">
            <li><b>Name:</b> Hosam</li>
          </ul>
          <span class="fs-4 fw-bolder">Software</span>
          <ul class="software">
            <li><b>Name:</b> Hosam</li>
          </ul>
          <span class="fs-4 fw-bolder">Languages</span>
          <ul class="languages">
            <li><b>Name:</b> Hosam</li>
          </ul>
        </div>
      </div>

      <div class="col-xs-12 col-lg-8 bg-primary-subtle pt-2 rightSide">
        <div class="col-12 fs-5">
          <span class="fs-4 fw-bolder">Work Experience</span>
          <ul class="workExperience">
            <li><b>Name:</b> Hosam</li>
          </ul>
          <span class="fs-4 fw-bolder">Education</span>
          <ul class="education">
            <li><b>Name:</b> Hosam</li>
          </ul>
          <span class="fs-4 fw-bolder"
            >Social activities and volunteering</span
          >
          <ul class="social">
            <li><b>Name:</b> Hosam</li>
          </ul>
        </div>
      </div>
      <div
        class="col-12 bg-dark text-light d-flex align-items-center justify-content-center footer"
      >
        <span
          >Created By Hosam &copy;
          <a href="https://www.facebook.com/index.php" target="_blank"
            ><i class="bi bi-facebook text-primary"></i
          ></a>
          <a href="https://www.instagram.com/" target="_blank"
            ><i class="bi bi-instagram text-danger"></i
          ></a>
          <a
            href="https://api.whatsapp.com/send/?phone=972524069659&text&type=phone_number&app_absent=0"
            target="_blank"
            ><i class="bi bi-whatsapp text-success"></i></a
        ></span>
      </div>
    </div>
      `;
      break;
    case "projects":
      htmlStr = `
      <div class="row">
        <div class="col-12 bg-primary d-flex align-items-center header">
          <span class="fs-2 fw-bolder">My Projects</span>

          <span class="fs-3 ms-auto">
            <button
              onclick="renderRelativePage('main')"
              class="d-flex align-items-center navigateBtn"
            >
              <span class="material-symbols-outlined fs-2"> badge </span>
              <span>Hosam CV</span>
            </button></span
          >
        </div>
        <div class="col-12 bg-primary-subtle pt-2 leftSideP">
          <div class="row myProjects">
            <!-- The cards are here -->
          </div>
        </div>

        <div
          class="col-12 bg-dark text-light d-flex align-items-center justify-content-center footer"
        >
          <span
            >Created By Hosam &copy;
            <a href="https://www.facebook.com/index.php" target="_blank"
              ><i class="bi bi-facebook text-primary"></i
            ></a>
            <a href="https://www.instagram.com/" target="_blank"
              ><i class="bi bi-instagram text-danger"></i
            ></a>
            <a
              href="https://api.whatsapp.com/send/?phone=972524069659&text&type=phone_number&app_absent=0"
              target="_blank"
              ><i class="bi bi-whatsapp text-success"></i></a
          ></span>
        </div>
      </div>
      `;
      break;
    default:
      htmlStr = `
        <div class="row">
        <div class="col-12 header d-flex align-items-center justify-content-center fs-5">
          <span class="fs-2 fw-bolder"> Page Not Found 404</span>
          <img onclick="renderRelevantPage("main")" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="404" />
          
        </div>
        
        </div>
        `;
  }

  if (eContainer && htmlStr) eContainer.innerHTML = htmlStr;
  renderAll();
}

function renderAll() {
  renderPersonalDetails();
  renderSoftware();
  renderLanguages();
  renderWorkExperience();
  renderEducation();
  renderSocial();
  renderProjects();
}
