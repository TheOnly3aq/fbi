import React from 'react'; 
import { Typography, List } from '@mui/material/';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Person2Icon from '@mui/icons-material/Person2';
import WorkIcon from '@mui/icons-material/Work';
import ListItem from '@mui/material/ListItem';
import ScaleIcon from '@mui/icons-material/Scale';
import HealingIcon from '@mui/icons-material/Healing';
import ListItemIcon from '@mui/material/ListItemIcon';
import WcIcon from '@mui/icons-material/Wc';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PublicIcon from '@mui/icons-material/Public';
import WarningIcon from '@mui/icons-material/Warning';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


function Results(props) {
    const { person } = props;
    return (
        <List>
        <ListItem>
            <ListItemIcon>
            <PhotoCameraIcon />
            </ListItemIcon>
            <img src={person.images[0].thumb} alt="Person" />
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <Person2Icon />
            </ListItemIcon>
            <Typography>Full Name: {person.title}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <WcIcon />
            </ListItemIcon>
            <Typography>Sex: {person.sex}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <ScaleIcon />
            </ListItemIcon>
            <Typography>Weight: {person.weight}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <PublicIcon />
            </ListItemIcon>
            <Typography>Nationality: {person.nationality}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <PublicIcon />
            </ListItemIcon>
            <Typography>Details: {person.details}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <WarningIcon />
            </ListItemIcon>
            <Typography>Caution: {person.caution}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <QuestionMarkIcon />
            </ListItemIcon>
            <Typography>Additional Remarks: {person.remarks}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <AddReactionIcon />
            </ListItemIcon>
            <Typography>Aliases: {person.aliases}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <HealingIcon />
            </ListItemIcon>
            <Typography>Scars and Marks: {person.scars_and_marks}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <WorkIcon />
            </ListItemIcon>
            <Typography>Occupations: {person.occupations}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <ColorLensIcon />
            </ListItemIcon>
            <Typography>Hair Color: {person.hair}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <ScatterPlotIcon />
            </ListItemIcon>
            <Typography>Skin Complexion: {person.complexion}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <LocationOnIcon />
            </ListItemIcon>
            <Typography>Location: {person.locations}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <FitnessCenterIcon />
            </ListItemIcon>
            <Typography>Build: {person.build}</Typography>
        </ListItem>
        <ListItem>
            <ListItemIcon>
            <AttachMoneyIcon />
            </ListItemIcon>
            <Typography>Reward Info: {person.reward_text}</Typography>
        </ListItem>
        </List>
);
}
export default Results;