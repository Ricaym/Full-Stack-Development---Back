const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

connectDB(process.env.MONGO_URI);

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);