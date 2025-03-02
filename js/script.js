// function getCustomBDDate() {
//   let now = new Date();
//   let bdTime = new Intl.DateTimeFormat("en-GB", {
//     timeZone: "Asia/Dhaka",
//   }).format(now);
//   document.getElementById("bd-date").textContent = bdTime;
// }

// const nowDate = getCustomBDDate();
// const dateAndTimeElement = document.getElementById("dateAndTime");
// dateAndTimeElement.textContent = nowDate;

// const completeButtons = document.getElementsByClassName("btn-primary");
// const cardTitle = document.querySelector(".card-title");

// const createPara = document.createElement("p");
// const addCompletedTasks = document.getElementsByClassName("add-complited-task");
// for (let i = 0; i < completeButtons.length; i++) {
//   const button = completeButtons[i];
//   button.addEventListener("click", function () {
//     const titleText = cardTitle.innerText;
//     createPara.textContent = `You have Complete The Task ${titleText}`;
//     const newItems = (createPara.textContent = titleText);
//     button.setAttribute("disabled", "true");
//     addCompletedTasks.appendChild(newItems);
//   });
// }

const taskCount = document.getElementById("taskCount");
const totalTaskCount = document.getElementById("totalTaskCount");

// complte button fucntionality
const completeButtons = document.getElementsByClassName("btn-primary");

for (let i = 0; i < completeButtons.length; i++) {
  const button = completeButtons[i];

  button.addEventListener("click", function () {
    const card = button.closest(".card");
    const cardTitle = card.querySelector(".card-title");

    if (!cardTitle) return;
    const options = {
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const bdDate = new Date().toLocaleDateString("en-US", options);

    const createPara = document.createElement("p");
    createPara.style.marginTop = "10px";
    createPara.style.padding = "14px";
    createPara.style.borderRadius = "10px";
    createPara.style.background = "#F4F7FF";
    createPara.textContent = `You have completed the task: ${cardTitle.innerText} on ${bdDate}`;

    const addCompletedTasks = document.querySelector(".add-complited-task");
    if (addCompletedTasks) {
      addCompletedTasks.appendChild(createPara);
      taskCount.textContent = parseInt(taskCount.textContent) - 1;
      totalTaskCount.textContent = parseInt(totalTaskCount.textContent) + 1;
    } else {
    }

    button.setAttribute("disabled", "true");
  });
}

// history button functionality
const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener("click", function () {});
