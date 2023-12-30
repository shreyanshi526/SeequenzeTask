const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/database.js')
const user_routes = require('./routes/user.js')
require('dotenv').config(); 
const Port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(cors());

//routes
// ag8ToOLnwNA0DXms
// msaanvi55
 app.use("/user",user_routes);


app.listen(Port, () => {
    console.log(`Server listening on ${Port}`);
    connectDB();
});






