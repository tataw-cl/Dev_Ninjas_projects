import { query } from "../_generated/server";

export const getContent = query({
    handler: async (ctx) => {
        const Content = await ctx.db.query("exhibits").collect();
        // do something with `tasks`

        return Content;
      },
});