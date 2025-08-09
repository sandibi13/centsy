import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    SERVER_NODE_ENV: z
      .enum(["development", "production"])
      .default("development"),
  },
  runtimeEnv: {
    SERVER_NODE_ENV: process.env.SERVER_NODE_ENV,
  },
});
