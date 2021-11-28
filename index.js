const dotenv = require("dotenv");
const http = require("http");
const {
  NOT_FOUND,
  NOT_FOUND_CODE,
  INTERNAL_ERROR_CODE,
  INTERNAL_ERROR,
  BAD_REQUEST,
  BAD_REQUEST_CODE,
  PORT,
} = require("./src/common/constants");
const { HttpError } = require("./src/common/errors");
const { isRouteEqualToUrl } = require("./src/common/url-util");
const personRoutes = require("./src/person/person.routes");
const params = require("./src/common/params");

dotenv.config();

http
  .createServer((req, res) => {
    let body = "";

    req.on("readable", function () {
      let data;
      while ((data = this.read())) {
        body += data;
      }
    });

    req.on("end", () => {
      try {
        try {
          req.body = JSON.parse(body);
        } catch (error) {
          throw new HttpError(
            BAD_REQUEST_CODE,
            BAD_REQUEST,
            "Body is not valid. Please, send only JSON format..."
          );
        }

        const route = personRoutes.find((r) => isRouteEqualToUrl(r, req.url));

        if (!route) {
          throw new HttpError(NOT_FOUND_CODE, NOT_FOUND, "");
        }

        req.params = params.parse(route, req.url);

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
  })
  .listen(process.env.PORT || PORT);
