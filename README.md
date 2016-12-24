# JSON Server in Express proxy middleware

A simple example for build a simple web/webapp with REST API with server-side json file based DB.

## Concept

It can be a started project to build a website with mainly with read-only data, for example, a personal website, or a website for small company. Since DB is stored in a JSON file and the REST API is so fake, it is not recommand to build a large scale website or a high traffic website. Replace the JSON-server with a traditional REST API server instead.

Handlebars.js is used as template engine in this example. It can be replaced other template engine such as reactJS or AngularJS.

## Scripts

Default npm scripts has been set once the project is cloned.

### Install node modules, build and start server

```bash
$ npm run start
```
You may pass port number to main server and json-server it two ways, ENV or node arguments

```bash
$ PORT=6400 PORT_API=6401 npm run start
```

```bash
$ npm run start -- --port 6400 --port_api 6401
```

### Build (webpack) only

You may edit contents without restart server, but you have to webpack after changes.

```bash
$ npm run webpack
```

### Start server only

In case of start server only.

```bash
$ npm run server
```

### Restart Example DB file

In this example, an example DB file is included. You can be reset easily.

```bash
$ npm run reset-db
```

It will reset to a blank 'visitors' table. In case of adding a example record, you may pass a argument as shown below.

```bash
$ npm run reset-db -- --with-example
```

## Node mobule you may interested

| Package | Description |
| ------- | ----------- |
| [express](https://github.com/expressjs/express) | Simple server framework for node. |
| [json-server](https://github.com/typicode/json-server) | Get a full fake REST API server. |
| [webpack](https://github.com/webpack/webpack) | A bundler for website. |
| [Handlebars.js](https://github.com/wycats/handlebars.js) | Handlebars.js is an extension to the Mustache templating language. |

## License

MIT
