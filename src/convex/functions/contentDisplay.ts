import { query } from "../_generated/server";
import { v } from "convex/values";

export const getContent = query({
    handler: async (ctx) => {
        const Content = await ctx.db.query("exhibits").collect();
        // do something with `tasks`
      },
});