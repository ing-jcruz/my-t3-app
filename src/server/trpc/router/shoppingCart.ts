import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const shoppingCartRouter = router({
  create: publicProcedure.input(z.object({
    product_id: z.number(),
    name: z.string(),
    quantity: z.number(),
    subtotal: z.number()
  }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.shoppingCart.create({
        data: {
          product_id: input.product_id,
          name: input.name,
          quantity: input.quantity,
          subtotal: input.subtotal
        }
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.shoppingCart.findMany();
  }),

  delete: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.shoppingCart.deleteMany();
  })
});
