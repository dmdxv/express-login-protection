# Express Login Protection
A small module that redirects users away from protected routes to a different route/link

Original made to redirect spambots/unwanted visitors away from /login /wp-login to Rick Astley's Never Gonna Give You Up
See it in action [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Install
```
npm install express-login-protection
```
## Usage
```
var login = require('./middleware/login-protection');

//Pass an array of URLs to protect and an url to redirect to.
app.use(login({
    urls: ["/login", "/wp-login.php", "/wp-login"],
    redirectURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}));
```
## Inspiration
![Tweet by @LiamHammett](https://pbs.twimg.com/media/EX_qw2vWsAE_1z7?format=jpg&name=large)

Tweet by [@LiamHammett](https://twitter.com/LiamHammett/status/1260984553570570240)
