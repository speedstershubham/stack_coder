import fs from "fs";

const data = (req, res) => {
  fs.readFile("text.txt", "utf8", (err, data) => {
    res.writeHead(200, { "const-type": "text/plain" });
    res.write(data);
    res.end();
  });
};

export { data };
