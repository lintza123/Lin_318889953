const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const CSVToJSON = require('csvtojson');
const port = 3000;
const sql = require('./db/db');
const CreateDB = require('./db/CreateDB');

//setUps
const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/Views"));
app.use("/Views", express.static(__dirname + "/Views"));
app.use("/Static", express.static(__dirname + "/Static"));
app.use("/css", express.static(__dirname + "/Static/css"));
app.use("/img", express.static(__dirname + "/Static/img"));
app.use("/js", express.static(__dirname + "/Static/js"));

//Roues for pages:

//Home page route
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
});

//Open Vol User
app.get('/opening_vol_user',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/opening_vol_user.html'))
});

//Open Aso User
app.get('/opening_association_user',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/opening_association_user.html'))
});

//Vol Home Screnn
app.get('/volunteers_home_screen', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/volunteers_home_screen.html'))
});

//Aso Portal
app.get('/aso_portal', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/aso_portal.html'))
});

//looking for volunteering
app.get('/looking_for_volunteering', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/looking_for_volunteering.html'))
});

//creating coluntary activity
app.get('/creating_voluntary_activity', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/creating_voluntary_activity.html'))
});

//volunteer_search_results
app.get('/volunteer_search_results', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/volunteer_search_results.html'))
});

//contact us
app.get('/contact_us', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/contact_us.html'))
});

//event status
app.get('/events_status', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/events_status.html'))
});

//vol portal
app.get('/vol_portal', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/vol_portal.html'))
});

//volunteer search results
app.get('/volunteer_search_results', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/volunteer_search_results.html'))
});

app.get('/CreateTables', CreateDB.createTables);
app.get('/InsertData', CreateDB.insertTables);

app.get('/showTableVol', CreateDB.showTableVol);
app.get('/showTableAso', CreateDB.showTableAso);
app.get('/showTableComEvent', CreateDB.showTableComEvent);
app.get('/showTblVolReg', CreateDB.showTblVolReg);

app.post('/signIn', CreateDB.signIn);
app.post('/signUp', CreateDB.signUp);

app.post('/newCommunityEvent', CreateDB.newCommunityEvent);
app.post('/volunteeringRegistration', CreateDB.volunteeringRegistration);
app.delete('/removeEvent/:id', CreateDB.removeEvent);
app.delete('/declineEvent/:id', CreateDB.declineEvent);

app.get('/dropTblVol', CreateDB.dropTblVol);
app.get('/dropTblAso', CreateDB.dropTblAso);
app.get('/dropTblComEvent', CreateDB.dropTblComEvent);
app.get('/dropTblVolReg', CreateDB.dropTblVolReg);

//listen port
app.listen(port, ()=>{
    console.log('server is running on', port)
});

