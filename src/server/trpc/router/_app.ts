import { router } from "../trpc";
import { productRouter } from "./product";
import { shoppingCartRouter } from "./shoppingCart";

export const appRouter = router({
  product: productRouter,
  shoppingCart: shoppingCartRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
