import React from "react";
import Sidebar from "../Sidebar";
import { ChildrenWrapper, ContentWrapper, LayoutWrapper } from "./styles";

interface ILayoutProps {
  children?: any;
}

function Layout({ children }: ILayoutProps) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ChildrenWrapper>
        <div
          style={{
            backgroundColor: "#075c6e",
            width: "100%",
            height: "40px",
            position: "sticky",
            top: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          If you find this useful please support by giving a ⭐ star on github
        </div>
        <ContentWrapper>{children}</ContentWrapper>
      </ChildrenWrapper>
    </LayoutWrapper>
  );
}

export default Layout;
