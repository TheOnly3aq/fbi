import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Results from './results';
import { Typography, Stack, Box } from '@mui/material/';
import { Textarea, Card, CardContent } from '@mui/joy/';
import { grey } from '@mui/material/colors';


const white = grey[50];
const darkgrey = grey[300];



const styles = {

  wantedTitle: {
    marginTop: '1rem',
    textAlign: 'center',
    color: white,
    fontWeight: 700,
  },
  wantedBody: {
    marginTop: '3rem',
    justifyContent: 'center',
    display: 'flex',      
    flexDirection: 'column', 
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 500,
    width: '1200px',
    color: white,
    marginBottom: '3rem',

  },
  resultBody: {
    marginTop: '3rem',
    justifyContent: 'center',
    textAlign: 'left',
    backgroundColor: darkgrey,
    fontWeight: 500,
    borderRadius: '20px',
    width: '1200px',

  },
  inputField: {
    marginBottom: '3rem',
    maxWidth: '400px',
    width: '25rem',
    borderRadius: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
}


function NoResultsMessage() {
  return (
    <Typography sx={styles.noResults} variant="h6">
      No results found.
    </Typography>
  );
}

function WantedList() {
  const [wantedList, setWantedList] = useState([]);
  const [targetName, setTargetName] = useState('');
  const [rawTargetName, setRawTargetName] = useState('');


  const handleUserInputChange = (e) => {
    setRawTargetName(e.target.value);
    setTargetName(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (targetName !== '') {
      axios
        .get('https://api.fbi.gov/wanted/v1/list')
        .then((response) => {
          const filteredList = response.data.items.filter((person) =>
            person.title.toLowerCase().includes(targetName)
          );
          setWantedList(filteredList);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      setWantedList([]);
    }
  }, [targetName]);

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: './background.jpg', backgroundSize: 'fixed', minHeight: '100vh', padding: '16px'}}>
      <Header styles={styles} rawTargetName={rawTargetName} />
      <Stack sx={styles.wantedBody}>
        <Textarea
            name="Solid"
            placeholder="Type the a name here..."
            onChange={handleUserInputChange}
            sx={styles.inputField}
            fullWidth
            variant="solid"
        />
        {wantedList.length === 0 ? (
          <NoResultsMessage />
        ) : (
          wantedList.map((person) => (
              <Card variant="solid" color="white" invertedColors key={person.id} elevation={3} sx={styles.resultBody} >
                <CardContent>
                  <Results person={person}/>
                </CardContent>
              </Card>
          ))
        )}
      </Stack>
    </Box>
  );
}

export default WantedList;
