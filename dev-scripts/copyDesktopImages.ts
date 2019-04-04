import  fs = require('fs');
import watch = require('watch');
const DESKTOP_PATH = '/home/pascalwhoop/Pictures/';
let IMAGES_PATH = './images/';

if(process.argv[2] == "-p"){
    IMAGES_PATH = `./images/posts/${process.argv[3]}/`;
    console.log("Using custom provided path for images");
    console.log(IMAGES_PATH);
}



let lastNumber = calculateLastNumber();

watch.watchTree(DESKTOP_PATH, {}, () => copyScreenShots());

// _____ HELPER FUNCTIONS ______

function copyScreenShots() {
    console.log("found new image file");
    let desktop = fs.readdirSync(DESKTOP_PATH);
    lastNumber = calculateLastNumber();
    desktop.forEach(file => {
        if (file.indexOf(".jpg") >= 0) {
            console.log("COPYING SCREEN SHOT");
            fs.renameSync(DESKTOP_PATH + file, IMAGES_PATH + (++lastNumber) + ".jpg")
        }
    })
}

function calculateLastNumber() {
    let imgCounter = [];
    let images = fs.readdirSync(IMAGES_PATH);
    images.map(img => {
        let matches = /(^[^\.]+)/.exec(img);
        if (matches) return imgCounter.push(matches[1]);
    });
    let highest = 0;
    imgCounter.forEach(count => {
        count = Number(count);
        highest = highest < count ? count : highest;
    });
    return highest;
}
