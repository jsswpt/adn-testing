import React, { Suspense } from "react";
import { Loader } from "shared/ui/loader/loader";
import "./index.scss";

const Catalog = React.lazy(() => import("pages/catalog/catalog"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Catalog />
    </Suspense>
  );
};
