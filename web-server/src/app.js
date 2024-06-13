const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fetchWeather = require("../../weather-app/app");
// const { title, } = require("process");
// console.log("title:", title);

//setting path for rendering the html file
const app = express();
const indexPage = path.join(__dirname, "../template/views");
const parsePage = path.join(__dirname, "../template/partials");
// const aboutPage = path.join(__dirname, "../public/about."); // this one has no use
// const showAbout = app.use(express.static(aboutPage)); // this has no use

//setting handle engine and view
app.set("view engine", "hbs");
app.set("views", indexPage);
// app.use(express.static(indexPage)); // need to understand how this express "use" method is used
hbs.registerPartials(parsePage);
app.get("", (request, response) => {
  response.render("index", {
    title: "HBS engine",
    name: "Lobo",
  });
});
app.get("/about", (request, response) => {
  response.render("about", {
    title: "HBS engine",
    name: "Lobo",
  });
});
app.get("/weather", async (request, response) => {
  if (!request.query.address) {
    return response.send({ err: "please provide address" });
  }
  const queryAddress = request.query.address;
  const data = await fetchWeather(queryAddress);
  response.status(200).send(data);
});
app.get("/about/*", (request, response) => {
  response.render("404", {
    err: "about/*",
  });
});
app.get("*", (request, response) => {
  response.render("404", {
    err: "the page you are looking",
  });
});

app.listen(3000, () => {
  console.log("server running in port 3000");
});
