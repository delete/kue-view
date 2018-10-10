# Kue View

![Main screen](/screenshots/main.png)



## Why?

I started this project to be an alternative UI to [Kue library](https://github.com/Automattic/kue), because the main UI is kind of ugly (sorry guys) and doesn't have some features that me and my team needed (like select multiple tasks to restart or remove).

## Project setup

You will need to setup an Redis server. The easier way is run into a Docker container.

The image can be found [here](https://hub.docker.com/_/redis/)


There is a sample project in the **examples** folder. After setup the Redis server, you should edit the `dashboard.js` with the IP and PORT OR use the env variables:

```sh
REDIS_HOST=
REDIS_PORT=
```

### Start development

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```
