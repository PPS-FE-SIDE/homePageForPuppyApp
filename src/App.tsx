import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const HeaderArea = styled.div`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid #efefef;
`;

const Header = styled.div`
  width: 1280px;
  height: 80px;
  display: flex;
  margin: 0 auto;
`;

const LogoArea = styled.div`
  width: 80px;
  height: 100%;
`;

const TopMenuArea = styled.div`
  width: 1080px;
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
  background-color: #777;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SideMenu = styled.div`
  width: 28px;
  height: fit-content;
  margin-left: 20px;
`;

const Container = styled.div`
  width: 100vw;

`;
const ContentArea = styled.div`
  width: 100vw;
`;
const LogoContent = styled.div`
  width: 1280px;
  height: 100vh;
  background-color: #f9f9f9;
  margin: 0 auto;
  
`;
const LogoImageBox = styled.div`
  height: 30vh;
  background-color: #747bff;
`;
const LogoTextBox = styled.div`
  height: 70vh;
  background-color: tan;
  padding-top: 10vh;
  padding-left: 250px; padding-right: 250px;

`;
const LogoText = styled.div`
  background-color: #f9f9f9;
  font-weight: bold;
  font-size: 30px; line-height: 40px;
`;

const MainContent = styled.div`
  width: 1280px;
  height: 100vh;
  background-color: #f9f9f9;
  margin: 0 auto;
  display: flex;
  
`;
const ContentImageBox = styled.div`width:50%; height:100vh; background-color: #747bff; display: flex;align-items: center`;
const ContentTextBox = styled.div`width:50%; height:100vh;background-color: aquamarine; display: flex;align-items: center`;
const ContentText = styled.div`
  background-color: #f9f9f9;
  font-weight: bold;
  font-size: 30px; line-height: 40px; padding: 80px;;
`;
function App() {
  return (
    <Wrapper>
      <HeaderArea>
        <Header>
          <LogoArea>
            {/*<image source={logoImage} />*/}
            <img src="/logo.jpeg" style={{ width: "100%" }} />
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
      </HeaderArea>
      <Container>
        <ContentArea>
          <LogoContent>
            <LogoImageBox>
              <img src="/logo.jpeg" style={{ height: "100%" }} />
            </LogoImageBox>

            <LogoTextBox>
              <LogoText>
                퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한 앱입니다퍼피퍼피는
                얼굴이 잘 붓는 강아지들을 위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는
                강아지들을 위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을
                위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다.퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한 앱입니다
              </LogoText>
            </LogoTextBox>
          </LogoContent>
          <MainContent>
            <ContentImageBox>
              <img src="/puppy00.jpeg" style={{ width: "100%" }} />
            </ContentImageBox>

            <ContentTextBox>
              <ContentText>
                퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한 앱입니다퍼피퍼피는
                얼굴이 잘 붓는 강아지들을 위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는
                강아지들을 위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을
                위한 앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다.퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한
                앱입니다퍼피퍼피는 얼굴이 잘 붓는 강아지들을 위한 앱입니다
              </ContentText>
            </ContentTextBox>
          </MainContent>
        </ContentArea>
      </Container>
    </Wrapper>
  );
}

export default App;
