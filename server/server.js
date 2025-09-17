const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const employeeRoutes = require('../server/src/routes/employeeRoutes')
dotenv.config();


app.use(express.json());
app.use(cors());

app.use('/api', employeeRoutes);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})