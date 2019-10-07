fs = require('fs')
var FILE_PATH = "./src/data/medium_posts.json"
var data = fs.readFileSync(FILE_PATH)
var posts = JSON.parse(data).payload.references.Post
posts = Object.values(posts)
var output = {
    values: posts
}
fs.writeFileSync(FILE_PATH, JSON.stringify(output))
console.log("DONE")