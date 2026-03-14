import { createBrowserRouter } from "react-router";
import App from './src/App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
]);

export default router