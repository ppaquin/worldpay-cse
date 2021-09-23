#!/usr/bin/env node
"use strict";

const { existsSync, rmSync } = require("fs");
const { resolve } = require("path");

const paths = [
  "build",
  "dist",
  "node_modules",
  "temp",
  "worldpay-js",
  "Gruntfile.js",
];

paths.forEach((path) => {
  if (existsSync(resolve(path))) rmSync(resolve(path), { recursive: true });
});
