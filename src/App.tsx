import React from "react";
import { globalStyles } from "stitches";
import { Navbar, Container, Center, Button, Footer } from "components";
import { Phases } from "./sections";

const App = () => {
  const [simulation, setSimulation] = React.useState(false);
  const toggleSimulation = () => setSimulation((prev) => !prev);
  return (
    <div>
      {globalStyles()}
      <Navbar />
      <Container css={{ marginTop: 100, padding: 20, minHeight: "60vh" }}>
        {simulation ? (
          <Phases />
        ) : (
          <Center>
            <Button onClick={toggleSimulation} css={{ marginTop: "25%" }}>
              START SIMULATION
            </Button>
          </Center>
        )}
      </Container>
      <Footer />
    </div>
  );
};
export default App;
