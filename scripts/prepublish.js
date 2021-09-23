#!/usr/bin/env node
"use strict";

const { existsSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const { copySync } = require("fs-extra");

const worldpay = ["node_modules", "worldpay"];
const worldpayPaths = ["LICENSE"];

const json = {
  description: "WorldPay Client Side Encryption client library",
  name: "worldpay-cse",
  version: "1.0.2",
  homepage: "https://github.com/ppaquin/worldpay-cse#readme",
  bugs: "https://github.com/ppaquin/worldpay-cse/issues",
  license: "Worldpay",
  author: "Worldpay",
  main: "worldpay-cse-1.0.2.min.js",
  repository: {
    type: "git",
    url: "https://github.com/ppaquin/worldpay-cse.git",
  },
};

worldpayPaths.forEach((path) => {
  if (existsSync(resolve(...worldpay, path)))
    copySync(resolve(...worldpay, path), resolve("dist", path));
});

const localPaths = ["README.md"];

localPaths.forEach((path) => {
  if (existsSync(resolve(path))) copySync(resolve(path), resolve("dist", path));
});

writeFileSync(resolve("dist", "package.json"), JSON.stringify(json));
