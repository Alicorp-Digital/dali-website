import Team from "src/components/organisms/team";
import "./styles.scss";
import Banner from "src/components/organisms/banner";
import Intro from "src/components/organisms/intro";

const Home = () => {
  return (
    <>
      <div className="mb-5">
        <Banner />
        <Intro />
        <Team />
      </div>
    </>
  );
};

export default Home;
