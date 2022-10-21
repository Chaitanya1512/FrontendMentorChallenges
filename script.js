import { challenges } from "./challenges.js";
// console.log(challenges[0].lang.length);
challenges.forEach((item, c) => {
  var ele = document.getElementById("grid");
  var lang = item.lang;

  ele.innerHTML =
    ele.innerHTML +
    `
          <li class="card">
            <div class="card-container">
              <div class="card-header">
                  <img class="card-image" src="./${item.name}/design/desktop-preview.jpg" alt="" />
              </div>
              <div class="card-content">
                <h3 class="name"><a href="./${item.name}">${item.title}</a></h3>
                <div class="heading">
                  <div class="lang-wrapper">
                    <ul class="lang" id="lang"></ul>
                  </div>
                </div>
                <button id="btn">Github repo</button>
              </div>
            </div>
          </li>`;
  //   createCard(item);

  document.getElementById("btn").onclick = function () {
    location.href = `https://github.com/Chaitanya1512/FrontendMentorChallenges/tree/main/${item.name}`;
  };

  var ul = document.getElementsByClassName("lang");
  lang.forEach((i) => {
    var li = document.createElement("li");
    // console.log(j);
    ul[c].appendChild(li);
    li.innerHTML = i;
    li.classList.add(i);
  });
});

// function createCard(item) {
//   const ele = document.getElementById("card");
//   const url = item.internalhost === true ? `./${item.name}` : item.url;
//   const image = `./${item.name}/design/desktop.png`;
//   const repo =
//     item.internalhost === true
//       ? `https://github.com/elaineleung/frontendmentor/tree/main/${item.name}`
//       : item.repo;

//   const cardHTML = `
//     <li class="card">
//       <div class="image">
//         <img src=${image} alt=""/>
//       </div>
//       <div class="text">
//         <h2>
//           <a href="${url}">${item.title}</a>
//         </h2>
//         <small>
//           <a href="${repo}">Github repo</a>
//         </small>
//       </div>
//     </li>
//   `;

//   gridEl.insertAdjacentHTML("beforeend", cardHTML);
// }
