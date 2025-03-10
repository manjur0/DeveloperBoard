const taskCount = document.getElementById("taskCount");
const totalTaskCount = document.getElementById("totalTaskCount");
const blogsPage = document.getElementById("blogs-page");
const backToHome = document.getElementById("backToHome");
const dateAndTime = document.getElementById("dateAndTime");

// complte button fucntionality
const completeButtons = document.getElementsByClassName("btn-primary");
const clearHistory = document.getElementById("clear-history");

// date and time function
const options = {
  timeZone: "Asia/Dhaka",
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

if (dateAndTime) {
  dateAndTime.textContent = new Date().toLocaleDateString("en-US", options);
}

// main functionality
for (let i = 0; i < completeButtons.length; i++) {
  const button = completeButtons[i];

  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const cardTitle = card.querySelector(".card-title");

    if (!cardTitle) return;

    const bdDate = new Date().toLocaleDateString("en-US", options);

    const createPara = document.createElement("p");
    createPara.style.marginTop = "10px";
    createPara.style.padding = "14px";
    createPara.style.borderRadius = "10px";
    createPara.style.background = "#F4F7FF";
    createPara.textContent = `You have completed the task: ${cardTitle.innerText} on ${bdDate}`;

    const addCompletedTasks = document.querySelector(".add-complited-task");
    if (addCompletedTasks) {
      alert("Do you have complete this task? ");

      addCompletedTasks.appendChild(createPara);
      taskCount.textContent = parseInt(taskCount.textContent) - 1;
      totalTaskCount.textContent = parseInt(totalTaskCount.textContent) + 1;
    }

    button.setAttribute("disabled", "true");

    clearHistory.addEventListener("click", function () {
      addCompletedTasks.innerHTML = "";
      if (clearHistory) {
        button.removeAttribute("disabled");
        taskCount.textContent = "06";
        totalTaskCount.textContent = 30;
      }
    });
  });
}

// background change functionality
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const change_Theme = document.getElementById("change-Theme");

const themeBtn = document.getElementById("theme-btn");
if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    change_Theme.style.background = getRandomColor();
  });
}

//blog page
if (blogsPage) {
  blogsPage.addEventListener("click", function () {
    location.href = "blogs.html";
  });
}

// back to home
if (backToHome) {
  backToHome.addEventListener("click", function () {
    location.href = "index.html";
  });
}

console.log("Hello World");
