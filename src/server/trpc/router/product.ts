import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const productRouter = router({
  create: publicProcedure.input(z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    inventory: z.number(),
    price: z.number()
  }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.products.create({
        data: {
          name: input.name,
          slug: input.slug,
          description: input.description,
          inventory: input.inventory,
          price: input.price
        }
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.products.findMany();
  }),

  getById: publicProcedure.input(z.object({
    id: z.number()
  }))
    .query(({ ctx, input }) => {
      return ctx.prisma.products.findUnique({
        where: {
          id: input.id
        }
      });
    }),

  update: publicProcedure.input(z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    inventory: z.number(),
    price: z.number()
  }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.products.update({
        where: {
          id: input.id
        },
        data: {
          name: input.name,
          slug: input.slug,
          description: input.description,
          inventory: input.inventory,
          price: input.price
        }
      });
    }),

  delete: publicProcedure.input(z.object({
    id: z.number()
  }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.products.delete({
        where: {
          id: input.id
        }
      });
    })
});
