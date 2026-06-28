import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("/products", "routes/products.tsx"),
route("/contact-us", "routes/contact.tsx"),
route("/test", "routes/test.tsx")
] satisfies RouteConfig;
