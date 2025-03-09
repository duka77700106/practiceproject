const logger = {
    enabled: true, // Можно включать/выключать глобально

    log: (...args) => {
        if (logger.enabled) {
            console.log(...args);
        }
    }
};

export default logger;
