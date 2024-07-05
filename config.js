const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254745422213" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745422213";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "true" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254745422213";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "true,254745422213";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254745422213,254745422213";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_57_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDkzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhCWXNYRkdFWXN1bHg0VjNybTdUS3RjUkRVS3NrdHVZbGdFYlBxRXJvcDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVMR2h0VDZTUndHZXcyUllkRkY1VndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk5Y2E4N2EtOGYxOS00NDcyLWFjOTktYmI0M2ZiOTdmY2Y4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNSxcbiAgICAgIDEyLFxuICAgICAgOTEsXG4gICAgICAxODAsXG4gICAgICAyMDYsXG4gICAgICAxOTEsXG4gICAgICAxODYsXG4gICAgICA0MyxcbiAgICAgIDg1LFxuICAgICAgMTc1LFxuICAgICAgMzksXG4gICAgICAxNDYsXG4gICAgICAxMzQsXG4gICAgICA1NSxcbiAgICAgIDEyMyxcbiAgICAgIDMwLFxuICAgICAgMjE4LFxuICAgICAgMTI3LFxuICAgICAgMTE3LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAyMjMsXG4gICAgICA2NCxcbiAgICAgIDE3MyxcbiAgICAgIDQ3LFxuICAgICAgMTM2LFxuICAgICAgMTYsXG4gICAgICAxNzQsXG4gICAgICA1NixcbiAgICAgIDIzMyxcbiAgICAgIDE4MyxcbiAgICAgIDI1NSxcbiAgICAgIDEyMCxcbiAgICAgIDQzLFxuICAgICAgMTg3LFxuICAgICAgMTQ1LFxuICAgICAgMTcxLFxuICAgICAgMzYsXG4gICAgICAyNDAsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjNDRFRBV0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTQyMjIxMzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODU4MzA3ODYyNDg4NTQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS05wSUVDRUl1RW9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm8xdWllY2FTalRzYzQ5WVQ0NnJHUWNQanQ0ellRVTgzd1ZsamVDTkk2WEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM09ENTRQOEdNU3h6YWU5Ty9Wa1F5Wmh2SkNnMXg4WmxZTUpWUlk5RjhPZTQ0bXdudjYwamlKTCtGOThBOHVzdWN2VXdRRnpMRHZ5R3ZZM1FwSGRiRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicGhEWmt5d291SlZScHBUM3R3NVZmTEhnQmtueW42UWxlMGpVV1l1Mnc5Z3IzSFprQS9rVnBaL3c3d0FrcnIzdEZob2x4R1dCU0IwOHRkUFVBbWkvZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NDIyMjEzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDU4NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEc25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURzbi5qc29uIjogIntcImtleURhdGFcIjpcIm51bk83dDJ2K0lYMzI4SVdSeEx6WW5rR2hhbFoyS0hHWVBJM1F2dElpT289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM5NTU5NTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyMDU4NDc5OTVcIn0iCn0=e"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "saramd", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "classyferret-md",
  ownername:process.env.OWNER_NAME|| "Sara",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
