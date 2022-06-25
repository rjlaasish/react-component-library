import React from 'react';
import Sidebar from "../Sidebar";
import {LayoutWrapper} from "./styles";

interface ILayoutProps{
    children?:  any;
}

function Layout({children}:ILayoutProps) {
    return (
        <LayoutWrapper>
            <Sidebar/>
            {children}
        </LayoutWrapper>
    );
}

export default Layout;