import React, { Suspense } from "react";
import { Layout } from "./components";
import GlobalStyle from "./styles/global";
import AllRoutes from "./AllRoutes";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AllRoutes />
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
