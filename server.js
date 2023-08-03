import http from "http";

const server = http.createServer((request,response)=>{
    console.log("Connection Established");

    //GET Request
    response.writeHead(200,{ 'Content-type': "text/html" });
    // response.end("<h1>Welcome to Server Programming</h1>");


//Post Request
if (request.method === "POST") {
    let body = "";
    //upon recieving data from client
    request.on("data", (data)=> {
        //convert it from Buffer to string
        body += data.toString();
        //display the data back to client
        response.end(body);
});
}
});

server.listen(3000, () => {
    console.log("Server has started");
});