import React from 'react';
import Sidebar from "../Sidebar";
import {ChildrenWrapper, ContentWrapper, LayoutWrapper} from "./styles";

interface ILayoutProps {
    children?: any;
}

function Layout({children}: ILayoutProps) {
    return (
        <LayoutWrapper>
            <Sidebar/>
            <ChildrenWrapper>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </ChildrenWrapper>
        </LayoutWrapper>
    );
}

export default Layout;