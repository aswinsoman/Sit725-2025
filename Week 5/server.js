const express = require('express');
const app = express();
const PORT = 3000;
// Import route file
const routes = require('./routes/index');
// Mount the route at /api/hello
app.use('/api/food', routes.foodRoute);
// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});
app.listen(PORT, () => {
    console.log(`Server is running at
http://localhost:${PORT}`);
});