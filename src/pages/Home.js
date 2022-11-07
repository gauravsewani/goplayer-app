import { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadein } from "../animations";

const Home = () => {
  // GET THE CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET THAT DATA BACK
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  //   console.log(newGames);
  return (
    <GameList variants={fadein} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media (max-width: 786px) {
    padding: 0 1rem;
    overflow: hidden;
    margin-left: 1rem;
    margin-right: 1rem;
    align-items: center;
    height: auto;
    width: auto;
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
  }

  h2 {
    padding: 5rem 0rem;
    @media (max-width: 786px) {
      padding: 2rem 0;
      font-size: 2rem;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  @media (max-width: 786px) {
    grid-template-columns: repeat(auto-fit);
    grid-column-gap: 0;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fit);
    grid-column-gap: 0;
    grid-row-gap: 1rem;
  }
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
