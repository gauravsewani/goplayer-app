import axios from "axios";
import {
  newGamesUrl,
  popularGamesUrl,
  searchGameUrl,
  upcomingGamesUrl,
} from "../api";

export const loadGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
