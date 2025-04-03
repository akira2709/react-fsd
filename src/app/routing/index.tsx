import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router"

import { Root } from "@/pages/root"
const rootRoute = createRootRoute({
  component: Root
})

import { MainPage } from "@/pages/main"
const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
})

const routeTree = rootRoute.addChildren([
  mainRoute,
])
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
})
export { router }