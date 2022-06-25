import React, {useState} from 'react';
import {DropDownChildNav, DropDownNav, Nav, NavHeader, NavItem, NavWrapper} from "./styles";
import {routes} from "../../routes";
import {Link, NavLink, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {Scrollbars} from "react-custom-scrollbars";


const Sidebar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>();
    const location = useLocation();
    const getNavLinkClass = (path: string) => {
        return location.pathname === path ? "active" : "";
    };
    const handleClick = (index: number) => {
        setActiveIndex(index);
        setIsDropDownVisible(activeIndex === index ? !isDropDownVisible : true);
    }

    return (
        <Nav isActive={!isNavbarVisible}>
            <NavHeader>
                <h3>
                    <Link to="/">React-component-library</Link>
                </h3>
            </NavHeader>
            <Scrollbars style={{width: "100%", height: "100%"}}>
                <NavWrapper className="list-unstyled components">
                    {routes
                        .filter((route) => route.navbar !== "")
                        .map((route, index) => {
                            //If has child, render sub list
                            return route.child ? (
                                <DropDownNav key={index} >
                                    <div onClick={() => handleClick(index)} >
                                        {route.navbar}
                                        <FontAwesomeIcon icon={faCaretDown}/>
                                    </div>
                                    <DropDownChildNav
                                        id={`pageSubmenu${index}`}
                                        isDropDownVisible={activeIndex === index ? isDropDownVisible : false}
                                    >
                                        {route.child.map((child, idx) => {
                                            return (
                                                <li
                                                    key={idx}
                                                    className={getNavLinkClass(
                                                        child.path
                                                    )}
                                                >
                                                    <NavLink
                                                        to={child.path}
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </DropDownChildNav>
                                </DropDownNav>
                            ) : (
                                <NavItem
                                    key={index}
                                    className={getNavLinkClass(route.path)}
                                >
                                    <Link to={route.path}>{route.navbar}</Link>
                                </NavItem>
                            );
                        })}
                </NavWrapper>
            </Scrollbars>
        </Nav>
    );
};

export default Sidebar;