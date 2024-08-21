import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageLoder from "../PageLoader/PageLoader";
import MainLayout from "../../pages/Layout";
import ContentLoader, { Facebook } from "react-content-loader";
const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoder />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<PageLoder />}>
              <CoinDetailsPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default Routing;
