import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

import Collapse from '@mui/material/Collapse';



export default function InstallPwaSnackbar() {
   const [open, setOpen] = React.useState(false);

   useEffect(() => {
      let promptEvent;

      setTimeout(() => { setOpen(true) }, 3000)

      window.addEventListener('beforeinstallprompt', function (e) {
         e.preventDefault();
         promptEvent = e;
         listenToUserAction();
      });

      function listenToUserAction() {
         const installBtn = document.querySelector(".add-to-home-screen");
         installBtn.addEventListener("click", presentAddToHome);
      }

      function presentAddToHome() {
         promptEvent.prompt();
         promptEvent.userChoice
            .then(choice => {
               if (choice.outcome === 'accepted') {
                  console.log('User accepted');
               } else {
                  console.log('User dismissed');
               }
            })
      }
   }, []);


   return (

      <Collapse in={open} sx={{ position: 'absolute', bottom: '0px' }}>
         <Alert
            action={
               <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  <CloseIcon fontSize="inherit" />
               </IconButton>
            }
            sx={{ mb: 2 }}
         >
            Możesz dodać aplikację do swojego ekranu głównego
               <Button sx={{ p: 0 }} className="add-to-home-screen">DODAJ</Button>
         </Alert>
      </Collapse>

   );
}