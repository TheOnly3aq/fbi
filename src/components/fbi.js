import React from "react";
import WantedList from "./wantedList/wantedList";
import { Stack } from "@mui/material/";
import { grey } from "@mui/material/colors";
import fbilogo from "../FBIlogo.png";

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
function Fbi() {
  return (
      <Stack sx={styles.backgroundContainer}>
        <img src={fbilogo} alt="FBI Logo" style={styles.logo} />
        <WantedList />
      </Stack>
  );
}
export default Fbi;
