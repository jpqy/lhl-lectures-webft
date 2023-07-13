// Require all the libraries that we need for our server
const express = require("express"); // Use the Express framework as our server
const bodyParser = require("body-parser"); // Middleware that makes the body of a POST request accessible using req.body
const cookieSession = require("cookie-session"); // Middleware that parses raw string to a cookie object
const bcrypt = require("bcrypt");
const PORT = 8080;

const app = express(); // Create an express server by calling the express function

// Configure our express server
app.set("view engine", "ejs"); // Set our server to render ejs files

// Add middlewares etc.
app.use(
  cookieSession({
    name: "session",
    keys: ["iamasecretkey"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(bodyParser.urlencoded({ extended: true })); // Tell express to use bodyParser (configured to expect url encoded data)

app.use((req, res, next)=> {
  const protectedRoutes = ["/secrets", "/api/profile"]
  const emailFromCookie = req.session.email;
  const userFromDatabase = userDatabase[emailFromCookie];
  if (!userFromDatabase && protectedRoutes.includes(req.url)) {
    res.redirect("/");
  }

  next(); // Keeps going to the routes functions
})

// Add fake users to our site
const homer = {
  email: "chunkylover@hotmail.com",
  name: "Homer",
  hashedPassword:
    "$2b$12$DCMzn1YLRocNWAB0acDzYOf827/cqZLUb8.mB1.oQJzhC0H7rCUTS",
  secret: "I like to eat out of the Flander's garbage",
};

const bart = {
  email: "elbarto@yahoo.com",
  name: "Bart",
  hashedPassword: bcrypt.hashSync("lilbandit", 10),
  secret: "I still sleep with my childhood stuffed bunny rabbit",
};

const userDatabase = {
  "chunkylover@hotmail.com": homer,
  "elbarto@yahoo.com": bart,
};
// fs.readFile("", (err, data))
// Takes an email and password, and returns a string with the error message if
// login is unsuccessful, and returns the user object if it is successful (BAD)

// Takes an email and password, and returns an object with 2 keys:
// 1. `error`: error message if login is unsuccessful
// 2. `user`: returns the user object if it is successful
const authenticateUser = function (email, password) {
  const userFromDatabase = userDatabase[email];

  if (!userFromDatabase) {
    return { error: "Login failed", user: null };
  }

  if (!bcrypt.compareSync(password, userFromDatabase.hashedPassword)) {
    return { error: "Login failed", user: null };
  }

  return { error: null, user: userFromDatabase };
};

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  // Check the user's email and password against database
  const { email, password } = req.body; // destructuring
  // same as:
  // const email= req.body.email
  // const password= req.body.password

  const { error, user } = authenticateUser(email, password);

  if (error) {
    res.send(error);
  }

  req.session.email = user.email;

  return res.redirect("/secrets");
});

app.get("/secrets", (req, res) => {
  const emailFromCookie = req.session.email;
  const userFromDatabase = userDatabase[emailFromCookie];
  const templateVars = { user: userFromDatabase };
  return res.render("secrets", templateVars);
});

app.get("/api/profile", (req, res) => {
  const emailFromCookie = req.session.email;
  const userFromDatabase = userDatabase[emailFromCookie];

  return res.json(userFromDatabase) // Returns the logged in user as a json
})

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
