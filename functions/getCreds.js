const express = require('express');
const {createProxyMiddleware, responseInterceptor} = require('http-proxy-middleware');

LOG REQUEST&RESPONSE
const miProxy = createProxyMiddleware({
target:'http://www.example.com',
changeOrigin:true, //for vhosted sites
SelfHandleResponse:true, //res.end() will be called internally by responseInterceptor()

On:{
proxyRes:responseInterceptor(async(responseBuffer,
proxyRes, req, res) => {
//Log original request and proxied request info
const exchange = [DEBUG]&{req.method}&{req.path} ->
${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}
[${proxyRes.statusCode}];

console.log(exchange);//[DEBUG] GET /-> http://www.example.com[200]

//log complete response
const response = responseBuffer.toString('utf8');
console.log(response); //log response body
return responseBuffer;

const app = express();
app.use('/build, miProxy');
app.listen(3000);
