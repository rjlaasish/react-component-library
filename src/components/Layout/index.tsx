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
          If you find this useful please support by giving a ⭐{" "}
          <a
            style={{ textDecoration: "none", color: "yellow" }}
            href="https://github.com/rjlaasish/react-component-library"
            target="_"
          >
            star on github
          </a>
        </div>
        <ContentWrapper>{children}</ContentWrapper>
      </ChildrenWrapper>
    </LayoutWrapper>
  );
}

export default Layout;
