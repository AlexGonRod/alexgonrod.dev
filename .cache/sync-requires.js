const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/deepinside/Documents/Projects/alexgonrod.dev/src/templates/post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/deepinside/Documents/Projects/alexgonrod.dev/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/deepinside/Documents/Projects/alexgonrod.dev/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/deepinside/Documents/Projects/alexgonrod.dev/src/pages/index.js")))
}

