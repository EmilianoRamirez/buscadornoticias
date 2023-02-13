import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

export const CardNoticias = ({noticia}) => {
    return (
        <Container maxWidth='md' sx={{minWidth: '350px'}}>
            <Card sx={{ width: '100%', mb: 3 }}>
                <CardActionArea href={noticia.url}>
                    <CardMedia
                        component = 'img'
                        sx={{ height: '15em' }}
                        image={noticia.urlToImage}
                        title={noticia.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {noticia.title}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            {noticia.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" mt={'10px'}>
                            Publicado el {noticia.publishedAt.slice(0, -10)} a las {noticia.publishedAt.slice(-9,-4)} hs
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}

export const ListaNoticias = ({ noticias })=>{
    return noticias.map( (noticia)=>{
        return <CardNoticias 
        noticia={noticia}
        key={noticia.url}
        />
    })
}

export default ListaNoticias