import { db } from "@/db";
import { agents } from "@/db/schema";
import { createTRPCRouter, protectProcedure } from "@/trpc/init";
import { agentInsertSchema } from "../schemas";
import { z } from "zod";
import { eq, sql,getTableColumns } from "drizzle-orm";

export const agentRouter = createTRPCRouter({
  // TODO: change 'getOne' to use 'protectProcedure'
  getOne: protectProcedure.input(z.object({ id: z.string() })).query(async ({input}) => {
    const [existingAgent] = await db
    .select({
      // TODO: Change to actual count
      meetingCount: sql<number>`5`,
      ...getTableColumns(agents),
    })
    .from(agents)
    .where(eq(agents.id , input.id))

    return existingAgent;
  }),
  // TODO: change 'getMany' to use 'protectProcedure'
  getMany: protectProcedure.query(async () => {
    const data = await db
    .select()
    .from(agents);

    return data;
  }),
  create: protectProcedure
    .input(agentInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          ...input,
          userId: ctx.auth.user.id,
        })
        .returning();

      return createdAgent;
    }),
});
