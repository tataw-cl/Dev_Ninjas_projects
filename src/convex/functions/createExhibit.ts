import { api } from "../_generated/api";
import { v } from "convex/values";

export default api(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { userId, writeup, contentObjectURL, isforsale, price, licence } = req.body;

    // You can add validation here for other exhibit data if needed

    const ctx = await api.getServerLessFucntionContext();

    const exhibitId = await ctx.db.insert("exhibits", {
      aurthorId: userId, // Use the userId from the request body
      writeup,
      likes: 0,
      isforsale,
      price,
      licence,
      contentObjectURL,
    });

    res.status(201).json({ message: 'Successfully Created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating exhibit' });
  }
});
