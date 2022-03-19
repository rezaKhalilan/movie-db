import { Container } from "../components/styles/Container.styles";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
