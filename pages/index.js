import React, { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { table, minifyRecords } from "./api/getUserData";
import { ItemsContext } from './api/context';
import Loading from '../components/loading/loading';
import Image from 'next/image';

export default function Index({ initialItems }) {
  console.log(initialItems)
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    setItems(initialItems);
    setTimeout(() => {
      setLoading(true)
    }, 1500)

  }, [initialItems, setItems, setLoading]);
  loading ? (
    items.id == 111111 ? router.push('/404') : null
  ) : null

  return (
    loading ? (items && items.score == null ? (<Box sx={{ mx: "auto", my: 4, textAlign: 'center' }}>
      <Image src="/static/vcclogo.png" alt="gift" width={200} height={200} />
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Witaj {items ? items.name : null}!
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Właśnie zeskanowałeś/aś swój kod i możesz wziąć udział w quizie z gwarantowaną nagrodą.
        </Typography>
      <Button variant="contained" onClick={() => router.push('/introduction')} sx={{ mb: 4 }}>
        Przejdź dalej
        </Button>
    </Box>) : (
        <>
          <Typography variant="h5" component="h3" gutterBottom align="center">
            Już wziąłeś udział w konkursie... Nagroda zostanie dostarczona na wskazany adres mailowy bądź adres Twojego zakładu pracy!
      </Typography>
          <Button variant="contained" onClick={() => router.replace('https://kwalifikacje.vccsystem.eu/?page_id=198')} sx={{ mb: 4 }}>
            Przejdź do strony VCC
      </Button>
        </>
      )) : <Loading />
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const items = await table.select({}).firstPage();
  const minified1 = minifyRecords(items, id)
  const minified2 = { ...minified1 }

  return {
    props: {
      initialItems: minified2[0] ?? {
        id: 111111,
        fields: {
          name: 'Anna Test',
          rodo: true,
          marketing: true,
          score: null,
          email: 'test@test.pl'
        }
      },
    },
  }
}
