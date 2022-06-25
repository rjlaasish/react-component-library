import React,{Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components";
import {routes} from "./routes";
import GlobalStyle from "./styles/global"

const App: React.FC = () => {

    return (
        <>
            <GlobalStyle/>
            <Layout/>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {
                        routes.map((route) => (
                            <Route path={route.path} element={<route.component/>} key={route.path}/>
                        ))
                    }

                </Routes>
            </Suspense>
        </>
    );
}

export default App;
