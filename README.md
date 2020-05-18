# Express Login Protection
A small module that redirects users away from protected routes to a different route/link

## Install
```
npm install express-login-protection
```
## Usage
Passing no options to Login() will result in a default redirect URL of Rick Astley's Never Gonna Give You Up 
You have been warned >_>

```
var login = require('./node_modules/login-protection');

//Pass an array of URLs to protect and an url to redirect to.
app.use(login({
    urls: ["/login", "/wp-login.php", "/wp-login"],
    redirectURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}));
```
## Inspiration
![Tweet by @LiamHammett](https://pbs.twimg.com/media/EX_qw2vWsAE_1z7?format=jpg&name=large)

Tweet by [@LiamHammett](https://twitter.com/LiamHammett/status/1260984553570570240)
