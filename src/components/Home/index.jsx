import { Link } from "react-router-dom";

const Home = ({ item: { id, name }, to }) => {
  return (
    <>
      <h1 key={id}>
        <Link to={to}>{name}</Link>
      </h1>
    </>
  );
};

export default Home;
