const dotenv = require("dotenv");
const http = require("http");
const {
  NOT_FOUND,
  NOT_FOUND_CODE,
  INTERNAL_ERROR_CODE,
  INTERNAL_ERROR,
  PORT,
} = require("./src/common/constants");
const { HttpError } = require("./src/common/errors");
const { isRouteEqualToUrl } = require("./src/common/url-util");
const personRoutes = require("./src/person/person.routes");
const params = require("./src/common/params");

dotenv.config();

const app = http.createServer((req, res) => {
  let body = "";

  req.on("readable", function () {
    let data;
    while ((data = this.read())) {
      body += data;
    }
  });

  req.on("end", () => {
    try {
      const route = personRoutes.find((r) => isRouteEqualToUrl(r, req.url));

      if (!route) {
        throw new HttpError(NOT_FOUND_CODE, NOT_FOUND, "");
      }

      req.params = params.parse(route, req.url);
      req.body = body;

      const routeWithMethod = route.findByMethod(req.method);

      if (!routeWithMethod) {
        throw new HttpError(NOT_FOUND_CODE, NOT_FOUND, "");
      }

      routeWithMethod(req, res);
    } catch (error) {
      if (!(error instanceof HttpError)) {
        error = new HttpError(
          INTERNAL_ERROR_CODE,
          INTERNAL_ERROR,
          "Ups... Something happened in server. Please, retry later..."
        );
      }

      res.writeHead(error.statusCode, {
        "Content-Type": "application/json",
      });
      res.write(JSON.stringify(error));
      res.end();
    }
  });
});

app.listen(process.env.PORT || PORT);

module.exports = app;
