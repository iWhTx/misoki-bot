const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



let prefix = process.env.PREFIX;


//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT




client.on("ready", () => {
  console.log(`✨ Connected in ${client.guilds.size} server(s) and ${client.users.size} users.`);
  client.user.setPresence({
    status: "online",
    game: {
        name: "New bot! 💕",
        url: "https://www.twitch.tv/mlg",
        type: "STREAMING"
    }
 });

});



client.on("message", (message) => {
    if (message.channel.type === "dm") return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
  
  
  
  if(message.content.startsWith(prefix+ "ping")){
    if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
    let ping = Math.floor(message.client.ping);
    message.channel.send("Pong!, "+ ping + "ms");

}
  
  
  
  
if(message.content.startsWith(prefix+ "prefix")){
if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
let ping = Math.floor(message.client.ping);
message.channel.send("Mi prefijo es: **?**");

}
  
let texto = args.join(" ");
if(command === 'decir'){
    if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send(texto);
    
}






});

client.login(process.env.BOT_TOKEN);
