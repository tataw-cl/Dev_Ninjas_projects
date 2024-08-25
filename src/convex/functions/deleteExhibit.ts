// import { v } from "convex/values";
// import { mutation } from "../_generated/server";

// export const deleteById = mutation({
//   args: {
//     storageId: v.id("_id"),
//   },
//   handler: async (ctx, args) => {
//     return await ctx.db.delete(exhibits);
//   },
// });

import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const deleteExhibit = mutation({
  args: { exhibitId: v.id("exhibits") },
  handler: async (ctx, args) => {
    // Fetch the exhibit to check if it exists
    const exhibit = await ctx.db.get(args.exhibitId);

    if (!exhibit) {
      throw new Error("Exhibit not found");
    }

    // Delete the exhibit
    await ctx.db.delete(args.exhibitId);

    return { success: true, message: "Exhibit deleted successfully" };
  },
});
