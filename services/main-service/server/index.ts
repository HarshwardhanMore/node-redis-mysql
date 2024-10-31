import app from "./app";
import config from '../config';

app.get('/health-check', (req, res) => {
    res.send('Main Process Server Running...');
});

app.listen(config.NODE.MAIN.CONTAINER_PORT, () => {
    console.log(`[server] Main Process Server started on container port ${config.NODE.MAIN.CONTAINER_PORT}.`);
});
