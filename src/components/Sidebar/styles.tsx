import styled from "styled-components";

interface INav {
  isActive: boolean;
}

interface IDropDownChildNav {
  isDropDownVisible: boolean;
}

export const Nav = styled.div<INav>`
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: #27496d;
  color: #fff;
  margin-left: ${(props) => (props.isActive ? "-250px" : "")};
`;

export const NavWrapper = styled.ul`
  list-style-type: none;
  padding: 20px 0;
`;

export const NavHeader = styled.div`
  color: #ffffff;
  padding: 40px 20px 20px 20px;
  background: #142850;
  user-select: none;

  h3 {
    font-size: 27px;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

export const DropDownNav = styled.li`
  color: #ffffff;
  width: 100%;
  padding: 3px 20px;
  user-select: none;

  &:hover {
    background-color: #142850;
    cursor: pointer;
  }

  div {
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

export const NavItem = styled.li`
  color: #ffffff;
  width: 100%;
  padding: 8px 20px;

  &:hover {
    cursor: pointer;
    background-color: #142850;
  }

  a {
    user-select: none;
    padding: 5px 10px;
    text-decoration: none;
    color: #ffffff;
  }
`;

export const DropDownChildNav = styled.ul<IDropDownChildNav>`
  list-style-type: none;
  margin-left: 20px;
  display: ${(props) => (props.isDropDownVisible ? "block" : "none")};

  li {
    padding: 5px 8px;
    border-left: 1px solid #ffffff;

    &:hover {
      background-color: #27496d;
    }

    a {
      user-select: none;
      text-decoration: none;
      color: #ffffff;
    }
  }
`;
