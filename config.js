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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745422213";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_57_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWm9FNmhjL1E4enRlUU1xNHJYL1NCek84dUdpSTJpbWM3Wlg3Tk40NGxiTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSG41ejNMRlJTWm16RFp5UGUwZExGZ1wiLFxuICBcInBob25lSWRcIjogXCI0MzIzNmQwNC1hYmNiLTRmZjctYjZlMy1iZTVjOTE0Nzk3NzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMTQxLFxuICAgICAgMTU3LFxuICAgICAgMjA4LFxuICAgICAgMTQ5LFxuICAgICAgMjU1LFxuICAgICAgMTYyLFxuICAgICAgNixcbiAgICAgIDE3OSxcbiAgICAgIDY5LFxuICAgICAgODEsXG4gICAgICAyMjYsXG4gICAgICAxLFxuICAgICAgNzAsXG4gICAgICA4OSxcbiAgICAgIDIzOCxcbiAgICAgIDk2LFxuICAgICAgMTMyLFxuICAgICAgMTc3LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgOSxcbiAgICAgIDI4LFxuICAgICAgMjIxLFxuICAgICAgMjM1LFxuICAgICAgMTAyLFxuICAgICAgMTUzLFxuICAgICAgMTAzLFxuICAgICAgMTA3LFxuICAgICAgMjMwLFxuICAgICAgNTYsXG4gICAgICAxNDcsXG4gICAgICAzNyxcbiAgICAgIDE0OCxcbiAgICAgIDM3LFxuICAgICAgMjQzLFxuICAgICAgMTY3LFxuICAgICAgMjM1LFxuICAgICAgMjEyLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRktTUU1DWUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NTQyMjIxMzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODU4MzA3ODYyNDg4NTQ6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZU5wSUVDRU9QMG9iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm8xdWllY2FTalRzYzQ5WVQ0NnJHUWNQanQ0ellRVTgzd1ZsamVDTkk2WEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZFJRZzNRdmZadjlIYkpTdkZMTTRUT0dqaXhrUDQ3eW9FRENZN3VwUko0U3lnQmJkUlhxeElnUStOT2d3aW56dUdsODJZZXI0OUVQZmwxYVM0QTBLQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieU9JQWFSZk9zT1JIV3ZvTVB5bzRBL2xyQkRudElsMkNaZlBQNTB4blVHbEdKTGtBOGtHQkQwNHJQV3lRbDJ6UUUrY0FFRVM5UXIwS00xUk9ZMWNralE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ1NDIyMjEzOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMjAyNjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEc25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURzbi5qc29uIjogIntcImtleURhdGFcIjpcIm51bk83dDJ2K0lYMzI4SVdSeEx6WW5rR2hhbFoyS0hHWVBJM1F2dElpT289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM5NTU5NTU0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
