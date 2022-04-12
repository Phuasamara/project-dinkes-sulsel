import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Berita1 from '../../Images/berita 1.png';
import Galery1 from '../../Images/galery1.png';

export default function Gallery1() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={3} gap={10}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: require('../../Images/berita 1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/galery1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/berita 1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/galery1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/berita 1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/galery1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/berita 1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/galery1.png'),
    title: 'Judul',
  },
  {
    img: require('../../Images/berita 1.png'),
    title: 'Judul',
  },
];