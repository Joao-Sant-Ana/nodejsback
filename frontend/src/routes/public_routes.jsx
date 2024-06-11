import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '@/components/layout/login/Login';
import SignIn from "@/components/layout/signin/SignIn";

export default function PublicRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signin'} element={<SignIn />} />

            </Routes>
        </BrowserRouter>
    )
}