import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_CLIENT_NODE_ENV: z
      .enum(["development", "production"])
      .default("development"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLIENT_NODE_ENV: process.env.NEXT_PUBLIC_CLIENT_NODE_ENV,
  },
});
