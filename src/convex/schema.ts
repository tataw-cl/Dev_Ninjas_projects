import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    isActive: v.boolean(),
    phone: v.number(),
    password: v.string(),
  }),
//   messages: defineTable({
//     senderId: v.id("users"),
//     receiverId: v.id("users"),
//     content: v.string(),
//     isSeen: v.boolean()
//   })
  exhibits: defineTable({
    aurthorId: v.id("users"),
    writeup: v.string(),
    likes: v.number(),
    isforsale: v.boolean(),
    price: v.number(),
    licence: v.string(),
    contentObjectURL: v.string(),
  })
});