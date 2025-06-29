import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Spin } from "antd";
import { ROUTES } from "./const/routes";
import Favorite from "./pages/favorite/favorite-page";
import NotFounPage from "./pages/not-found/not-found-page";
import CartPage from "./pages/cart/cart-page";
const HomePage = lazy(() => import('./pages/home/home-page'));
const MainLayout = lazy(() => import('./layout/main-layout'));

const contentStyle: React.CSSProperties = {
  padding: 100,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const withSuspense = (Component: React.ReactNode) => (
  <Suspense
    fallback={
      <div className="loadRouter">
        <Spin tip="Загрузка..." size="large">{content}</Spin>
      </div>
    }
  >
    {Component}
  </Suspense>
);


export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(<MainLayout />),
    children: [
      {
        index: true,
        element: withSuspense(<HomePage />),
      },
      {
        path: ROUTES.FAVORITES,
        element: withSuspense(<Favorite />),
      },
      {
        path: ROUTES.CART,
        element: withSuspense(<CartPage />),
      },
    ],
  },
  {
    path: '*',
    element: <NotFounPage />
  }
]);
