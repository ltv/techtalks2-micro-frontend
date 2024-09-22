import Dashboard from "../components/DashBoard.vue";
import { defineAsyncComponentWithOptions } from "../utils";
const ApplePhones = defineAsyncComponentWithOptions(
  () => import("apple/Phones.vue")
);
const SamsungPhones = defineAsyncComponentWithOptions(
  () => import("samsung/Phones.vue")
);
const Cart = defineAsyncComponentWithOptions(() => import("cart/Cart.vue"));

let nokiaRouterModule;

try {
  nokiaRouterModule = await import("nokia/routes");
} catch (error) {
  console.error("Nokia module not found");
}

const nokiaRouterPromise = nokiaRouterModule
  ? nokiaRouterModule.default ?? []
  : [];

const routes = [
  {
    path: "/",
    alias: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/apple",
    name: "Apple",
    component: ApplePhones,
  },
  {
    path: "/samsung",
    name: "Samsung",
    component: SamsungPhones,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  ...nokiaRouterPromise,
];

export default routes;
