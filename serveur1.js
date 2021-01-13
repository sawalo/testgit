const express=require('express')
const app=express()
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/ttyACM0')
const parser = new Readline()
port.pipe(parser)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port:8081 });

 wss.on('connection', function connection(ws) {

     parser.on('data',function(tmp){
      console.log(tmp)
      ws.send(tmp)
  }) 
  port.write('ROBOT PLEASE RESPOND\n')
    ws.on("close", ()=>console.log('client has disconnected'))
  }); 
  
  
app.get('/',(req,res)=>res.end('hello'))
  app.listen(8080,()=>console.log('connecting'));