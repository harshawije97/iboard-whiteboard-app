import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { images } from "@/lib/data";

export const createBoards = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    // get identity
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("User is not authenticated");
    }

    // get a random image from the list
    const randomPlaceholder = images[Math.floor(Math.random() * images.length)];

    // create the board
    const create = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomPlaceholder,
    });

    return create;
  },
});
