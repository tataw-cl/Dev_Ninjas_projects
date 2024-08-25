import { mutation } from '../_generated/server';
import { v } from 'convex/values';

export const createExhibit = mutation({
  args: {
    userId: v.string(),
    writeup: v.string(),
    contentObjectURL: v.string(),
    isforsale: v.boolean(),
    price: v.optional(v.number()),
    licence: v.optional(v.string())
  },
  handler: async (ctx, { userId, writeup, contentObjectURL, isforsale, price, licence }) => {
    try {
      // Inserting the exhibit into the "exhibits" table
      const exhibitId = await ctx.db.insert("exhibits", {
        aurthorId: userId,
        writeup,
        likes: 0,
        isforsale,
        price,
        licence,
        contentObjectURL,
      });

      return { message: 'Successfully Created', exhibitId };
    } catch (error) {
      console.error('Error creating exhibit:', error);
      throw new Error('Error creating exhibit');
    }
  }
});
