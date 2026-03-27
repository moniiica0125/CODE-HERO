const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Load routes
// Example: app.use('/api', require('./routes/exampleRoute'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});