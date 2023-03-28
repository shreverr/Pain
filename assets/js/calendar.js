// import "static/css/calendar.css";
// import moment from "moment";

// const earth = document.getElementById("earth");
// const date = document.getElementById("date");

// const orbitWidth = 300;
// const orbitHeight = 150;

// let xPos = 0;
// let yPos = 150;

// let dragging = false;

// moveEarth(0, 0);

// earth.addEventListener("mousedown", () => {
//   dragging = true;
// });

// window.addEventListener("mouseup", () => {
//   dragging = false;
// });

// window.addEventListener("mousemove", (e) => {
//   if (dragging) {
//     moveEarth(e.clientX, e.clientY);
//   }
// });

// function moveEarth(mouseX, mouseY) {
//   let ySign = mouseY - orbitHeight > 0 ? 1 : -1;

//   xPos = Math.min(Math.max(mouseX - 300 - 30, -orbitWidth), orbitWidth);
//   yPos =
//     ySign * Math.pow(orbitHeight ** 2 * (1 - xPos ** 2 / orbitWidth ** 2), 0.5);

//   let angle = Math.atan2(yPos, xPos) / (Math.PI * 2);

//   let dateStr = moment()
//     .dayOfYear(angle * 365)
//     .format("MMM Do, YYYY");

//   date.innerText = dateStr;

//   earth.style = `left: ${xPos + orbitWidth - 30}px; 
//                 top: ${yPos + orbitHeight - 30}px;`;
//   }