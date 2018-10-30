var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/create") {
        fs.readFile("AppPages/MyPage.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');




function isEven(sk){
    if(sk % 2 > 0){
        return false;

    }else return true;
}

//alert(isEven(4));
//console.log(isEven());

function factorial(fak){
    for(var i = fak; i > 0; i--){
        return fak * i;
    }
}

//alert(factorial(5));