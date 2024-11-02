export default {
    healthCheck: async (message: string): Promise<string> => {
        return Promise.resolve(message);
    }
}
