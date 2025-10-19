const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


app.get('/me', async (req, res) => {
    try {
        
        const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });

        const data = {
            status: 'success',
            user: {
                email: 'oluwatoniadebajo@gmail.com',
                name: 'Adebajo Oluwatoni',
                stack: 'Node.js/Express'
            },
            timestamp: new Date().toISOString(),
            fact: response.data.fact
        };

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);

    } catch (error) {
        console.error('Error fetching cat fact:', error.message);

        res.status(500).json({
            status: 'error',
            message: 'Could not fetch cat fact right now. Please try again later.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
