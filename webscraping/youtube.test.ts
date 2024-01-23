// import { test } from "@playwright/test";

// const list = [
//   "https://www.youtube.com/watch?v=1TO48Cnl66w&list=RDEMVDGLrqwfXIYe-S7h2tENuA&start_radio=1",
//   "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD",
// ];
// list.forEach((url) => {
//   test("Calculate YouTube playlist" + Date.now(), async ({ page }) => {
//     await page.goto(url);

//     // Wait for the selector to be present in the DOM
//     await page.waitForSelector(
//       "ytd-thumbnail-overlay-time-status-renderer span"
//     );

//     const videos = await page.$$(
//       "ytd-thumbnail-overlay-time-status-renderer span"
//     );
//     console.log(videos.length);

//     let totalMinutes = 0;
//     await Promise.all(
//       videos.map(async (ele) => {
//         const duration = await ele.innerText();
//         // 15:45:15
//         const timeSlices = duration.trim().split(":");
//         let minutes = 0;
//         let seconds = 0;
//         if (timeSlices.length == 2) {
//           minutes = Number(timeSlices[0]);
//           seconds = Number(timeSlices[1]);
//           minutes += seconds / 60;
//         } else if (timeSlices.length == 3) {
//           let hours = Number(timeSlices[0]);
//           minutes = Number(timeSlices[1]);
//           seconds = Number(timeSlices[2]);
//           minutes += hours * 60 + seconds / 60;
//         }
//         totalMinutes += minutes;
//       })
//     );
//     console.log(totalMinutes);
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = Math.trunc(totalMinutes % 60);
//     const seconds = Math.trunc((totalMinutes - Math.trunc(totalMinutes)) * 60);
//     const title = await page.title();
//     console.log(`${title} -->${hours}h ${minutes}m ${seconds}s`);
//   });
// });

import { test } from "@playwright/test";

const list = [
  "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD",
  "https://www.youtube.com/watch?v=oIYgsqhwXzM&list=RDMM&start_radio=1&rv=1TO48Cnl66w",
];

list.forEach((url, index) => {
  test(`Calculate YouTube playlist ${index + 1}`, async ({ page }) => {
    await page.goto(url);

    // Wait for the selector to be present in the DOM
    await page.waitForSelector(
      "ytd-thumbnail-overlay-time-status-renderer span",
      { timeout: 60000 }
    );

    const videos = await page.$$(
      "ytd-thumbnail-overlay-time-status-renderer span"
    );
    console.log(videos.length);

    let totalMinutes = 0;
    await Promise.all(
      videos.map(async (ele) => {
        const duration = await ele.innerText();
        // 15:45:15
        const timeSlices = duration.trim().split(":");
        let minutes = 0;
        let seconds = 0;
        if (timeSlices.length == 2) {
          minutes = Number(timeSlices[0]);
          seconds = Number(timeSlices[1]);
          minutes += seconds / 60;
        } else if (timeSlices.length == 3) {
          let hours = Number(timeSlices[0]);
          minutes = Number(timeSlices[1]);
          seconds = Number(timeSlices[2]);
          minutes += hours * 60 + seconds / 60;
        }
        totalMinutes += minutes;
      })
    );
    console.log(totalMinutes);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.trunc(totalMinutes % 60);
    const seconds = Math.trunc((totalMinutes - Math.trunc(totalMinutes)) * 60);
    const title = await page.title();
    console.log(`${title} -->${hours}h ${minutes}m ${seconds}s`);
  });
});
