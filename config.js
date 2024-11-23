const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://files.catbox.moe/xjek9u.mp3" ;  
global.video= "https://files.catbox.moe/oul5i5.mp4" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="arslanchaudary701@gmail.com"
global.location="Bhimber,Azad Kashmir."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| ".https://github.com/MARC701/MARC-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vat4TFC0QeaoLURbP61u" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/qt6581.jpg" || "https://files.catbox.moe/qt6581.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© 𝙰𝚛𝚜𝚕𝚊𝚗 𝙲𝚑𝚊𝚞𝚍𝚊𝚛𝚢" 


global.devs = "923111977378" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/qt6581.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_11_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOW5IVkdpT3J4bkVIV3FQZk1HeW02VjVhdWRGNGpsN09tWE5oMHBtV3gzOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZHd5d05KSG5TZVN5OWNKY2lsc0RhZ1wiLFxuICBcInBob25lSWRcIjogXCIyYzE0Y2IyOS1kN2M2LTQwZjgtYTYwMy1jNTJiYzVmMTBhZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTgzLFxuICAgICAgMjM1LFxuICAgICAgODgsXG4gICAgICA0NyxcbiAgICAgIDE1NyxcbiAgICAgIDI0MSxcbiAgICAgIDE0OCxcbiAgICAgIDE5MyxcbiAgICAgIDIwLFxuICAgICAgMTI2LFxuICAgICAgMjksXG4gICAgICAyMjYsXG4gICAgICA2NyxcbiAgICAgIDEwMyxcbiAgICAgIDEzMixcbiAgICAgIDE3OSxcbiAgICAgIDI0MyxcbiAgICAgIDk0LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgOTMsXG4gICAgICAxNTAsXG4gICAgICAxNTQsXG4gICAgICA0NyxcbiAgICAgIDIxMSxcbiAgICAgIDEzNCxcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgMjQ1LFxuICAgICAgMTIyLFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMTUzLFxuICAgICAgMjMsXG4gICAgICAxNzMsXG4gICAgICAyMzUsXG4gICAgICAyMzcsXG4gICAgICAyNDYsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzREdQU1pUSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTExOTc3Mzc4OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzE2NDE5MjI0Nzk5Nzo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVFVoT3dHRUt1Y2hyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlJKNFIvQlpTSTZLRGtwVlQ3OW1vbVBXTlM3MHVXOFVpbWszeE1SeDhtVEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibXhOSkhvaU9FekZJZWo1Um14ZjNGUlVxSjBIcmhQQ3UrVkYwTU54TFdVYnZpUEo5eW5semVvMkVKbkdSSnNuYzlYblltYVZnM0gwQzkya0dLSmtLQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUG5VdEtVNXRLTkg2QkxNVzBkRUpHT210NjJYWXNIdTlJRHhsVXFwWTViOFlrZ1lZZUhCSjV1ejdoM0NlMUtkQkQzcVhPWndtU2pqeE1ZTDU1L292akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTExOTc3Mzc4OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjM0OTQ4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp3TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSndMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiazdJM24yajFxZ2ZYbmplYk00ZjV3bEZHYTd1SllmOW1Kd1VqY1RrbXlqVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODM3MTgxNDkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzNDcwMDM5NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝚛𝚜𝚕𝚊𝚗 𝙲𝚑𝚊𝚞𝚍𝚊𝚛𝚢 ® 』```", //*『Follow • 𝙰𝚛𝚜𝚕𝚊𝚗 𝙲𝚑𝚊𝚞𝚍𝚊𝚛𝚢』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝙰𝚛𝚜𝚕𝚊𝚗 𝙲𝚑𝚊𝚞𝚍𝚊𝚛𝚢",
  packname: process.env.PACK_NAME || "𝙼𝙰𝚁𝙲",
  botname : process.env.BOT_NAME  || "𝙼𝙰𝚁𝙲",
  ownername:process.env.OWNER_NAME|| "𝐀𝐫𝐬𝐥𝐚𝐧 𝐂𝐡𝐚𝐮𝐝𝐚𝐫𝐲",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-ccfcaba6-0210-4046-9021-88ac25073430",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://files.catbox.moe/qt6581.jpg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
