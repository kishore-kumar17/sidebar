import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled(Link)`
  display: flex;
  color: yellow;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 18px;
  color: red;
`;

const SidebarLabel = styled.span`
  margin-left: 20px;
  color: white;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:hover {
    background: lightblue;
    border: 2px solid white;
    border-radious: 5px;
    curser: pointer;
    color: pink;
  }
`;
const Subnav = ({ item }: any, path: string) => {
  const [pathnow, setpathnow] = useState("");
  const location = useLocation();

  const [subNav, setsubNav] = useState(false);
  const showsubNav = () => setsubNav(!subNav);

  const [subNavNest, setsubNavNest] = useState(false);
  const showsubNavMenu = () => setsubNavNest(!subNavNest);
  //   console.log("subNav", item);

  useEffect(() => {
    setpathnow(window.location.pathname);
  }, [location]);

  //   console.log("test", pathnow, item.path);

  return (
    <div>
      <Sidebar
        to={item.path}
        style={pathnow === item.path ? { backgroundColor: "lightblue" } : {}}
        onClick={item.subNav && showsubNav}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </Sidebar>
      {subNav &&
        item.subNav?.map((item: any) => {
          return (
            <>
              <DropdownLink
                to={item.path}
                style={
                  pathnow === item.path ? { backgroundColor: "green" } : {}
                }
                onClick={item.subNavNest && showsubNavMenu}
              >
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
              {subNavNest &&
                item.subNavNest?.map((item: any) => {
                  return (
                    <div>
                      <DropdownLink
                        to={item.path}
                        style={
                          pathnow === item.path
                            ? { backgroundColor: "violet" }
                            : {}
                        }
                        onClick={item.subNavMenus && showsubNavMenu}
                      >
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                        {item.iconClosed}
                      </DropdownLink>
                    </div>
                  );
                })}
            </>
          );
        })}
    </div>
  );
};

export default Subnav;
