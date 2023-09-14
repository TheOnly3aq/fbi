import React from 'react'; 
import { Typography } from '@mui/material/';


function Header(props) {
    const { styles, rawTargetName } = props;
    return (
    <Typography sx={styles.wantedTitle} variant="h4">
        FBI Database Results for {rawTargetName}
    </Typography>

);
}
export default Header;