import React from 'react'; 
import WantedList from './components/wantedList/wantedList';
import { Stack } from '@mui/material/';
import { grey } from '@mui/material/colors'
import fbilogo from './FBIlogo.png';
import { BrowserRouter } from "react-router";

const fbiGrey = grey[800];

const styles = {
  backgroundContainer: {
    backgroundColor: fbiGrey,
    backgroundSize: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "16px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logo: {
    position: "fixed",
    width: "400px",
    height: "auto",
    zIndex: 0,
  },
};
function App() {
  return (
    <BrowserRouter>
      <Stack sx={styles.backgroundContainer}>
        <img src={fbilogo} alt="FBI Logo" style={styles.logo} />
        <WantedList />
      </Stack>{" "}
    </BrowserRouter>
  );
}
export default App;
