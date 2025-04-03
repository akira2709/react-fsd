import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, AnyRouter } from "@tanstack/react-router"

type Props = {
  router: AnyRouter
  client: QueryClient
}

export const Providers = ({ router, client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
