import { query } from "../_generated/server";
import { v } from "convex/values";

export const getSingleContent = query({
  args: { _Id: v.id("exhibits") },
  handler: async (ctx, args) => {
    const singleContent = await ctx.db.get(args.exhibitId);

    return singleContent;
  },
});