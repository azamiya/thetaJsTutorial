"use strict";
const express = require('express');
const app = express();
const http = require('http').Server(app);

const server = require("./server");

app.use(express.static(__dirname + '/docs'));
server.start(app, http);