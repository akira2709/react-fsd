import { Toaster } from "sonner"
import { Providers } from "../providers"
import { router } from "../routing"
import { queryClient } from "../query"

export const App = () => {
  return (
    <>
      <Toaster
        position={"top-right"}
        swipeDirections={["top", "right"]}
      />
      <Providers router={router} client={queryClient}/>
    </>
  )
}