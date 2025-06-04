import { Grid, ShoppingBag, ShoppingCartFull } from "@element-plus/icons-vue";

export const menuSections = [
  // first section
  {
    title: "General",
    items: [
      { index: "1", icon: Grid, title: "Dashboard", link: "/dashboard" },
      {
        index: "2",
        icon: ShoppingBag,
        title: "Products",
        link: "/admin-products",
      },
    ],
  },

  // second section
  {
    title: "Users",
    items: [
      {
        index: "4",
        icon: ShoppingCartFull,
        title: "Users",
        link: "/admin-users",
      },
      {
        index: "5",
        icon: ShoppingCartFull,
        title: "Orders",
        link: "/admin-orders",
      },
    ],
  },
];
