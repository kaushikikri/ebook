import { Route, Routes } from "react-router-dom";

import { Homepage, ProductList, CartPage, Pagenotfound, DashboardPage, OrderPage } from "../pages";
import { ProductDetail, Register, Login } from "../components";
import { ProtectedRoute } from "./ProtectedRoute";

export const Allroutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/:id" element={<ProductDetail />} />

                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />

                <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
                <Route path="dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </>
    )
}
