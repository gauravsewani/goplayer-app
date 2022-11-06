const api_key = "6c0ab43c5dba492fa95e4448cd97233e";

// Base Url
const base_url = "https://api.rawg.io/api/";
//https://api.rawg.io/api/games?key=6c0ab43c5dba492fa95e4448cd97233e/743438&description
//getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
// console.log(getCurrentMonth());

//getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// console.log();

//popular games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
//Game details

export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;
// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${api_key}`;

// Searched Game
export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${api_key}&search=${game_name}&page_size=9`;
