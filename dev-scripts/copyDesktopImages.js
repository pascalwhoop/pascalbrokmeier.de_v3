"use strict";
exports.__esModule = true;
var fs = require("fs");
var watch = require("watch");
var DESKTOP_PATH = '/home/pascalwhoop/Desktop/';
var IMAGES_PATH = './images/';
if (process.argv[2] == "-p") {
    IMAGES_PATH = "./images/posts/" + process.argv[3] + "/";
    console.log("Using custom provided path for images");
    console.log(IMAGES_PATH);
}
var lastNumber = calculateLastNumber();
watch.watchTree(DESKTOP_PATH, {}, function () { return copyScreenShots(); });
// _____ HELPER FUNCTIONS ______
function copyScreenShots() {
    console.log("found new image file");
    var desktop = fs.readdirSync(DESKTOP_PATH);
    lastNumber = calculateLastNumber();
    desktop.forEach(function (file) {
        if (file.indexOf(".jpg") >= 0) {
            console.log("COPYING SCREEN SHOT");
            fs.renameSync(DESKTOP_PATH + file, IMAGES_PATH + (++lastNumber) + ".jpg");
        }
    });
}
function calculateLastNumber() {
    var imgCounter = [];
    var images = fs.readdirSync(IMAGES_PATH);
    images.map(function (img) {
        var matches = /(^[^\.]+)/.exec(img);
        if (matches)
            return imgCounter.push(matches[1]);
    });
    var highest = 0;
    imgCounter.forEach(function (count) {
        count = Number(count);
        highest = highest < count ? count : highest;
    });
    return highest;
}
