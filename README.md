# Trails

## Overview

Simple trail mapping application created using Angular, Leaflet.js, Express and MongoDB. 

## Features

- Easily draw trails on a map and export them to GeoJSON, GPX or KML files.
- Save routes for loading/editing again later.

## Installation

### Requirements

1. Node.js

2. You'll need a Bing Maps API Key from https://www.bingmapsportal.com/

### Clone and Deploy Locally

1. Clone this repository to your local disk

    ```git clone https://github.com/jrmcdonald/trails```

2. Copy `.env-example` to `.env` and customise for your local environment

3. Run:

```
npm install -g yarn

cd trails

yarn install

npm run server:test

npm start
```
