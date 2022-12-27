import styled from "styled-components";
import "./App.css";
import { logoImage } from "./assets/image";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #efefef;
  
`;

const Header = styled.div`
  width: fit-content;
  height: 80px;
  display: flex;
  background-color: azure;
  margin:0 auto;
`;

const LogoArea = styled.div`
  width: 80px;
  height: 100%;
`;

const TopMenuArea = styled.div`
  width: 880px;
  height: 100%;
  display: flex;
align-items: center;
  justify-content: center;
`;

const MainMenu = styled.div`
  width: fit-content;
 
  padding-left: 28px;
  padding-right: 28px;

  
`;

const SideMenuArea = styled.div`
  width: 120px;
  height: 100%;

  display: flex;
  justify-content: flex-end;
   align-items: center;
`;

const SideMenu = styled.div`
  width: 28px;

  height:fit-content;
  margin-left: 20px;
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <LogoArea>
          {/*<image source={logoImage} />*/}
          <img src="/logo.png" style={{ width: "100%" }} />
        </LogoArea>

        <TopMenuArea>
          <MainMenu>안녕</MainMenu>
          <MainMenu>안녕디지몬</MainMenu>
          <MainMenu>잘가라</MainMenu>
          <MainMenu>모두내일봐요하하</MainMenu>
        </TopMenuArea>
        <SideMenuArea>
          <SideMenu>
            <img src="/search.icon.png" style={{ width: "100%" }} />
          </SideMenu>
          <SideMenu>
            <img src="/earth.icon.png" style={{ width: "100%" }} />
          </SideMenu>
          <SideMenu>
            <img src="/puppy.icon.png" style={{ width: "100%" }} />
          </SideMenu>
        </SideMenuArea>
      </Header>
    </Wrapper>
  );
}

export default App;
