import Selection from "./apparatusSelection";
import Link from "next/link";
import {Button} from "@material-ui/core";

const Home = (): JSX.Element => (
  <main>
      <Link
          key="selectionPage"
          href={{
              pathname: "/apparatusSelection",
          }}
      >
          <Button> Create New Experience</Button>
      </Link>
      <Link
          key="experiencePage"
          href={{
              pathname: "/experience",
              query: { dataId: "testexp1" , isApparatusId: false, userId: "testuser1" },
          }}
      >
          <Button> Load Test Experience</Button>
      </Link>
  </main>
);

export default Home;
