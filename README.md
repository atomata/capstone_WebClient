# Atomata Web Client [![Azure Static Web Apps CI/CD](https://github.com/atomata/capstone_WebClient/actions/workflows/azure-static-web-apps-black-desert-06819cf0f.yml/badge.svg)](https://github.com/atomata/capstone_WebClient/actions/workflows/azure-static-web-apps-black-desert-06819cf0f.yml)

This repo contains the Atomata web client.

## Quickstart

To run the development server:

```bash
yarn install --dev
yarn dev
```

To build and run a production version of the app (served by NGINX):

```bash
yarn build
yarn export
docker compose up -d

# Kill your container with:
docker-compose down
```

To run unit tests:

```bash
yarn test
```
