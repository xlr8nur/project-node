const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const hostname = "locahost";
const port = 8080;

const server = http.createServer((req,res) => {
    switch (req.url) {
        case"/":
           serveHTMLFile("index.html", res);
           break;
        case "/about":
            serveHTMLFile("about.html",res);
            break;
        case "contact-me":
            serveHTMLFile("contact-me.html",res);
            break;
        default:
            serveHTMLFile("404.html",res);
            break;
    }
});

function serveHTMLFile(filename, res) {
    fs.readFile(path.join(__dirname, filename), (err, data) => {
        if(err) {
            res.whiteHead(500);
            return res.end(`Error loading ${filename}: ${err}`);
        }
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(data);
    });
};

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});