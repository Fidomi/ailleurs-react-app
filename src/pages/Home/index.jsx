import styled from "styled-components";
import BackgroundImage from "../../assets/damien-dufour-unsplash.jpg";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  margin: 0 0;
`;

const HeroText = styled.div`
  width: 50vw;
  height: 50vh;
  max-width: 960px;
  padding: 8rem 3rem;
  margin: 0 auto;
`;

function Home() {
  return (
    <HomeContainer>
      <HeroText>
        <h1>
          Envie de partir vivre ailleurs?
          <br />
          On vous aide à trouver la destination qui vous convient.
        </h1>
        <Link to="/mydestination">
          <Button
            type="button"
            buttonStyle="secondarySolid"
            buttonSize="medium"
          >
            Trouver ma destination
          </Button>
        </Link>
      </HeroText>
    </HomeContainer>
  );
}

export default Home;
