import redis from "./redis";

export const addToBlacklist = async (token, ttl) => {
    try {
        await redis.set(token, "blacklisted", "EX", ttl);
        console.log(`Token added to blacklist for ${ttl} seconds.`);
    } catch (err) {
        console.error("Failed to add token to blacklist:", err);
    }
};


export const isBlacklisted = async (token) => {
    try {
        const result = await redis.get(token);
        return result !== null;
    } catch (err) {
        console.error("Failed to check blacklist:", err);
        return false;
    }
};