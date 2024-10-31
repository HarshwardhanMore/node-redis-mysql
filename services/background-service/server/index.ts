import app from "./app";
import config from '../config';

app.get('/health-check', (req, res) => {
    res.send('Background Process Server Running...');
})

app.listen(config.NODE.BACKGROUND.CONTAINER_PORT, () => {
    console.log(`[server] Background Process Server started on container port ${config.NODE.BACKGROUND.CONTAINER_PORT}.`);
})