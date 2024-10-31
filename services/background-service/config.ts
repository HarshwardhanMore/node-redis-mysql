import dotenv from 'dotenv';

dotenv.config();

const config = {
    REDIS: {
        HOST_PORT: process.env.REDIS_HOST_PORT,
        CONTAINER_PORT: process.env.REDIS_CONTAINER_PORT,
    },
    MYSQLDB: {        
        HOST_PORT: process.env.MYSQLDB_HOST_PORT,
        CONTAINER_PORT: process.env.MYSQLDB_CONTAINER_PORT,
        USER: process.env.MYSQLDB_USER,
        ROOT_PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD,
        DATABASE: process.env.MYSQLDB_DATABASE,
    },
    NODE: {
        MAIN: {
            HOST_PORT: process.env.NODE_MAIN_HOST_PORT,
            CONTAINER_PORT: process.env.NODE_MAIN_CONTAINER_PORT,
        },
        BACKGROUND: {
            HOST_PORT: process.env.NODE_BACKGROUND_HOST_PORT,
            CONTAINER_PORT: process.env.NODE_BACKGROUND_CONTAINER_PORT,
        },
    },
};

export default config;