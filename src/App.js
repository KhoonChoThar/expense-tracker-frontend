import styled from 'styled-components';
import { MainLayout } from './styles/Layouts';
// import Orb from './components/Orb/Orb';
import Nav from './components/Navigation/Nav';
import { useState } from 'react';
import Home from './components/Home/Home';
import Income from './components/Income/Income';
import Expense from './components/Expense/Expense';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();

  const displayData = () => {
    switch (active) {
      case 1:
        return <Home />;
      case 2:
        return <Income />;
      case 3:
        return <Expense />;
      default:
        return <Home />;
    }
  };

  return (
    <AppStyled className="App">
      <MainLayout>
        <Nav active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-color: var(--secondary-color);
  position: relative;
  main {
    flex: 1;
    background-color: var(--quaternary-color);
    border: 2px solid var(--secondary-color);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    overflow-y: auto; /* Allow vertical scrolling if needed */
    &::-webkit-scrollbar {
      display: none; /* Hide scrollbar for WebKit browsers */
    }
  }
`;
export default App;
