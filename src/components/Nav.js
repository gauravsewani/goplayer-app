import { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo1.svg";
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadein } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadein} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="" />
        <h1>goplayer</h1>
      </Logo>
      <form className="search">
        <input
          value={textInput}
          type="text"
          onChange={inputHandler}
          name=""
          id=""
        />
        <button type="submit" className="large" onClick={submitSearch}>
          Search
        </button>
        <button className="small">🔍</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  input {
    width: 60%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  .small {
    display: none;
  }
  @media (max-width: 1024px) {
    display: block;
    input {
      width: 60%;
    }
  }
  @media (max-width: 786px) {
    input {
      width: 80%;
    }
    .small {
      display: inline;
      padding: 0.5rem;
    }
    .large {
      display: none;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #fcca46;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  img {
    margin: 10px;
    height: 3rem;
    width: 3rem;
  }
`;

export default Nav;
