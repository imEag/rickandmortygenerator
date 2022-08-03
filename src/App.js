import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import _ from 'lodash';
import { FastAverageColor } from 'fast-average-color';

import { useRandomCharacter } from './custom_hooks/useRandomCharacter';
import { History } from './components/History';
import { Character } from './components/Character';
import { Header } from './components/Header';
import { StyledButton } from "./syled_components/StyledButton";

const StyledApp = styled.div`
    background-color: ${props => props.theme.primary || "white"};
    transition: all 0.3s ease-in-out;
`;

const StyledDataSection = styled.div`
    color: ${props => props.theme.secundary || "white"};
    display: flex;
    max-width: 76rem;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    gap: 4rem;
`;

export default function App() {
  // get character data from use random character hook.
  const { error, loading, data, refetch } = useRandomCharacter();

  // history to store al generated characters
  const [history, setHistory] = useState([]);
  const [disabled, setDisabled] = useState(false);

  //theme for app
  const [theme, setTheme] = useState({
    primary: "rgba(18,0,134, 1)",
    primary_dark: "rgba(9,0,64, 1)",
    secundary: "white",
    border: "2rem",
    light: "rgba(255,255,255, 0.20)",
    hover: "rgba(255,255,255, 0.40)"
  });

  const setAverageColor = () => {
    const fac = new FastAverageColor();

    const img = data.randomCharacter.image;

    fac.getColorAsync(img)
      .then(color => {
        console.log(color)

        const new_theme = { ...theme }
        new_theme.primary = color.rgba
        
        if (color.isLight) {
          new_theme.secundary = "black";
        } else {
          new_theme.secundary = "white";
        }
        setTheme(new_theme);
      })
      .catch(err => console.error(err));
  };

  const generate = () => {
    // Disables generate button
    setDisabled(true);

    // fecthes using query
    refetch();
  };

  useEffect(() => {
    if (data) {
      //store character in history
      setHistory([...history, data.randomCharacter]);

      setAverageColor();

      //enables generate button
      setDisabled(false);
    }
  }, [data]);

  const showCharacter = (character) => {
    //takes the item given to the top of the array to show its information

    //gets a new array without the element given
    const new_history = _.remove(history, (element) => element.id !== character.id);

    //takes the element given to the last place
    new_history.push(character);

    //set new history
    setHistory(new_history);

  };

  if (error) return <div>An error ocurred.</div>

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <StyledDataSection>

          {/* checks if history is empty, if not, displays last item and history */}
          {history.length > 0
            ? <Character data={history.at(-1)} />
            : null
          }

          <StyledButton disabled={disabled} onClick={generate}>{!disabled ? "Generate!" : "..."}</StyledButton>

          {/* checks if history is empty, if not, displays last item and history */}
          {history.length > 0
            ? <History history={history} parent={{ showCharacter: showCharacter.bind(this) }} />
            : null
          }
        </StyledDataSection>
      </StyledApp >
    </ThemeProvider>
  );
}