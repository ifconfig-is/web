# ifconfig

## Intro

This is a project aimed to providing IP lookup service. Live demo: [https://ifconfig.is](https://ifconfig.is).

A fully worked service consists of 3 components:

1.  Backend API service:

    [Geoip2-gql](https://github.com/i3h/geoip2-gql) is an isolated repository focusing on IP data Graphql API.

2.  Frontend static resources:

    This repository is used to provide static files, like html, css, js.

3.  Dispatcher:

    The web service may be accessed from both browser and headless tools.
    We need distinguish user agent of requests and send back different responses.

    The code of dispatcher is located in the folder named \"dispatcher\".

## Docker

We have pre-built docker images for you to run self-hosted service quickly.

Default running port is 3080. You can revise `docker-compose.yml` or use nginx to setup a reverse proxy.

```
# Run docker-compose to bring services up

wget https://raw.githubusercontent.com/i3h/ifconfig/master/docker-compose.yml

docker-compose up -d
```
