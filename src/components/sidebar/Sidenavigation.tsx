import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Sidebardetails from "./Sidebardetails";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import Subnav from "./Subnav";
import styled from 'styled-components';
import { Link } from "react-router-dom";




const Nav = styled.div`
background:blue;
height:80px;
display:flex;
justify-content:flex-start;
align-items-center;
position:fixed;
width:100%;
`;

const NavIcon = styled(Link)`
  margin: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  
`;

const SidebarNav = styled.nav`
  background: blue;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }: any) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div({  width: '100%',
});


const Sidenavigation = () => {

  const [currentpath, setcurrentpath] = useState("");
  const location = useLocation();
  const [sidebar, setsidebar] = useState<boolean>(false);
  const showsidebar = () => setsidebar(!sidebar);



  useEffect(() => {
    setcurrentpath(window.location.pathname);
  }, [location]);




  return (
    <div>
      <Nav>
        <NavIcon to="#">
        <FaIcons.FaBars onClick={showsidebar}/>
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="#">
          <AiIcons.AiOutlineClose onClick={showsidebar} />
          </NavIcon>
          {Sidebardetails.map((item: any) => {
            return <Subnav item={item} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default Sidenavigation;
