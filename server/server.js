require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./config/mongoose_config');
const loginRoutes = require('./controllers/login_controller');
const regRoutes = require('./controllers/register_controller');
const userRoutes = require('./controllers/user_controller');

connection();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/register', regRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

