module.exports = function (options) {
    return function (req, res, next) {

        if(options == null) {
            options = {
                urls: ["/login"],
                redirectURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        }

        console.log(options)

        //Checks if requested url is in array of protected URLS
        if(options.urls.includes(req.originalUrl)) {

            //Redirects to a different url
            return res.redirect(options.redirectURL)

        } else {

            return next()

        }
    }
}
