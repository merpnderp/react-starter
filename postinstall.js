const ncp = require('ncp').ncp;

ncp.limit = 16;

const source = "./node_modules/bootstrap/dist";
const destination = "./public/bootstrap";

ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('done!');
});