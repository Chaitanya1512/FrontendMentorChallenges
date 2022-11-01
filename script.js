import { challenges } from "./challenges.js";

challenges.forEach((item, c) => {
  var ele = document.getElementById("grid");
  var lang = item.lang;

  ele.innerHTML =
    ele.innerHTML +
    `
          <li class="card">
            <div class="card-container">
              <div class="card-header">
                  <img class="card-image" src="./${item.name}/design/desktop-design.jpg" alt="" />
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

  document.getElementById("btn").onclick = function () {
    location.href = `https://github.com/Chaitanya1512/FrontendMentorChallenges/tree/main/${item.name}`;
  };

  var ul = document.getElementsByClassName("lang");
  lang.forEach((i) => {
    var li = document.createElement("li");
    ul[c].appendChild(li);
    li.innerHTML = i;
    li.classList.add(i);
  });
});
