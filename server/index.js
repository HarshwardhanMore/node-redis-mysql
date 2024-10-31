import express from 'express'

const app = express();

app.get('/health-check', (req, res) => {
    res.send('Server Running...');
})

app.listen(process.env.NODE_CONTAINER_PORT, () => {
    console.log(`Server started on container port ${process.env.NODE_CONTAINER_PORT}.`);
})