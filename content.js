chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  const text = message.text;
});

// (async () => {
//   // TEMP UNTIL WAIT FUNC FIGURED OUT
//   async function delay(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }

//   document.addEventListener("DOMContentLoaded", () => {
//     console.log("RUN");
//   });

//   await delay(5000);

//   let currentTitles = [...document.getElementsByClassName("fallback-text")];

//   // currentTitles.forEach((title, idx) => {
//   //   console.log(idx + 1, title.innerHTML);
//   // });

//   chrome.runtime.sendMessage({ currentTitles });
// })();
