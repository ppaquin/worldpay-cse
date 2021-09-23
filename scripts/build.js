#!/usr/bin/env node
"use strict";

const { resolve } = require("path");

const spawn = require("cross-spawn");

spawn.sync(
  process.execPath,
  [
    resolve("node_modules/grunt-cli/bin/grunt"),
    "--gruntfile",
    resolve("Gruntfile.js"),
  ],
  {
    stdio: "inherit",
  }
);
