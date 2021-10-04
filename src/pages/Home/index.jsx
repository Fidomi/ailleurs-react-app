import { HomeContainer, HeroText, HeroTextTitle } from "./style";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <HomeContainer>
      <HeroText>
        <HeroTextTitle>
          Envie de partir vivre ailleurs?
          <br />
          On vous aide à trouver la destination qui vous convient.
        </HeroTextTitle>
        <Link to="/mydestination">
          <Button
            type="button"
            buttonStyle="secondarySolid"
            buttonSize="medMobile"
          >
            Trouver ma destination
          </Button>
        </Link>
      </HeroText>
    </HomeContainer>
  );
}

export default Home;
