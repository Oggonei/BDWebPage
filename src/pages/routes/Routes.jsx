import { useRoutes } from "react-router-dom"
import Home from "../home/Home"
import Blog from "../blog/Blog"
import NotFound from "../notFound/NotFound"
import BlogCompleted from "../blogCompleted/BlogCompleted"
import PersonalDataPolicy from "../personalDataPolicy/PersonalDataPolicy"

export default function Routes() {

    let appRoutes = useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/blog/:id",
            element: <BlogCompleted/>
        },
        {
            path: "/personal-data-policy",
            element: <PersonalDataPolicy/>
        },
        {
            path: "/*",
            element: <NotFound/>
        },
    ])
  return (
    appRoutes
  )
}
