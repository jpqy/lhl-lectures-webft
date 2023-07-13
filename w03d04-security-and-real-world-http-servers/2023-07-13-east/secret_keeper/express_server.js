// Require all the libraries that we need for our server
const express = require("express"); // Use the Express framework as our server
const bodyParser = require("body-parser"); // Middleware that makes the body of a POST request accessible using req.body
const cookieSession = require("cookie-session"); // Middleware that parses raw string to a cookie object
const bcrypt = require("bcrypt")
const PORT = 8080;

const app = express(); // Create an express server by calling the express function

// Configure our express server
app.set("view engine", "ejs"); // Set our server to render ejs files

// Add middlewares etc.
app.use(bodyParser.urlencoded({ extended: true })); // Tell express to use bodyParser (configured to expect url encoded data)
// After this point, we can now access req.body

// app.use(cookieParser()); // Allows us to read and set the cookie using `req.cookies` a res.cookie() respectively
app.use(cookieSession({
  name: 'session',
  keys: ["sosecret"],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Authentication custom middleware
app.use((req, res, next)=> {
  const protectedRoutes = ["/secrets", "/api/profile"]
  const emailFromCookie = req.session.email
  const userFromDatabase = userDatabase[emailFromCookie]
  if (!userFromDatabase && protectedRoutes.includes(req.url)) {
    return res.redirect("/")
  }

  next();
})

// Add dummy users
const homer = {
  email: "chunkylover@hotmail.com",
  name: "Homer",
  hashedPassword: bcrypt.hashSync("iamsosmrt", 10), // iamsosmrt -> hashing -> asdfsadf3243asf2sdfs
  secret: "I like to eat out of the Flander's garbage",
};

const bart = {
  email: "elbarto@yahoo.com",
  name: "Bart",
  hashedPassword: bcrypt.hashSync("lilbandit", 10),
  secret: "I sleep with my childhood stuffed bunny rabbit",
};

const userDatabase = {
  "chunkylover@hotmail.com": homer,
  "elbarto@yahoo.com": bart,
};

// Given an email and password, return a string containing the error message if authentication fails,
// or the user object if it succeeds (BAD)

// Given an email and password, return an object containing 2 keys:
// error: string with the error message if authentication fails, or null if succeeds
// user: The user object if it succeeds
const authenticateUser = function (email, password) {
  userFromDatabase = userDatabase[email];

  if (!userFromDatabase) {
    return { error: "Login failed", user: null };
  }

  if (!bcrypt.compareSync(password, userFromDatabase.hashedPassword)) {
    return { error: "Login failed", user: null };
  }

  return { error: null, user: userFromDatabase };
};

// Add routes
app.get("/", (req, res) => {
  return res.render("index");
});

app.post("/login", (req, res) => {
  const {email, password} = req.body // Pulls req.body.email and req.body.password into two variables with the same name
  // const email = req.body.email
  // const password = req.body.password
  const { error, user } = authenticateUser(email, password);

  if (error) {
    return res.status(400).send(error)
  }

  req.session.email = user.email // Set an encrypted cookie with email key

  return res.redirect("/secrets")
});

app.get("/secrets", (req, res) => {
  const emailFromCookie = req.session.email
  const userFromDatabase = userDatabase[emailFromCookie]
  if (!userFromDatabase) {
    return res.redirect("/")
  }

  const templateVars = {user: userFromDatabase}

  return res.render("secrets", templateVars);
});

// Returns the currently logged in user as a json
app.get("/api/profile", (req, res) => {
  const userFromDatabase = userDatabase[req.session.email]
  return res.json(userFromDatabase)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
