#!/usr/bin/env node
"use strict";

const { existsSync, rmSync } = require("fs");
const { resolve } = require("path");

const { copySync } = require("fs-extra");

const worldpay = ["node_modules", "worldpay"];
const paths = ["worldpay-js", "Gruntfile.js"];

paths.forEach((path) => {
  if (existsSync(resolve(...worldpay, path))) {
    if (existsSync(resolve(path))) rmSync(resolve(path), { recursive: true });
    copySync(resolve(...worldpay, path), resolve(path));
  }
});
