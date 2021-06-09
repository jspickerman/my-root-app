import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@bitovi/navbar",
  app: () => System.import("//localhost:4200/main.js"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@bitovi/greeting",
  app: () => System.import("//localhost:4201/main.js"),
  activeWhen: ["/greeting"]
});


start({
  urlRerouteOnly: true,
});
