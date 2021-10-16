import { Snowflake } from "discord.js";
import { NodeOptions } from "shoukaku/types/Constants";

export interface configType {
    bot: {
        clientToken: string | undefined;
    };
    lavalink: NodeOptions[];
    botOwners: Snowflake[];
    maxDatabaseCacheLifetime: number;
    redisHost: string;
    redisPort: number;
    redisPassword: string;
    redisUsername: string;
    redisUrl: string;
    mongoDatabaseURL: string | undefined;
}
