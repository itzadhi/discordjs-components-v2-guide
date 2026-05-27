import { z } from "zod";

const schema = z.object({
  DISCORD_TOKEN: z.string().min(20),
  DISCORD_CLIENT_ID: z.string().min(10),
  DISCORD_GUILD_ID: z.string().optional(),
  DATABASE_URL: z.string().default("file:./data/app.db")
});

export const config = schema.parse(process.env);
