import App from "./App";
import HomePage from "./pages/Homepage";
import UsersListPage from "./pages/UsersListPage";
import PageNotFound from "./pages/PageNotFound";
import AdminsListPage from "./pages/AdminsListPage";

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: "/",
                exact: true,
            },
            { ...UsersListPage, path: "/users" },
            { ...AdminsListPage, path: "/admins" },
            { ...PageNotFound },
        ],
    },
];
