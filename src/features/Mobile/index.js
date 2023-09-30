import Navigation from "./Navigation";
import { Main } from "../../common/Main";
import ProjectList from "./ProjectList";

const MobileApp = () => (
  <>
    <Navigation />
    <Main>
      <ProjectList />
    </Main>
  </>
);

export default MobileApp;
