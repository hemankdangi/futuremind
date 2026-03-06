import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type AgentsGetMany = inferRouterOutputs<AppRouter>["meetings"]["getMany"];
export type AgentGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"];
