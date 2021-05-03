import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;