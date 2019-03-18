// const express = require('express');
// const app = express();
//
// // Run the app by serving the static files in the dist directory
// // app.use(express.static(__dirname + '/dist'));
//
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
//
// app.use(express.static('dist'));
// app.get = function(s, f) {
//
// };
// app.get('*', (request, response) => {
//   response.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

const server = app.listen(process.env.PORT || 8080, function() {
  const port = server.address().port;
  console.log("App now running on port", port);
});
