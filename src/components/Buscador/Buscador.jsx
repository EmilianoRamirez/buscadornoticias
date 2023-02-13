import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react';

const Buscador = ({onBuscar}) => {
    const [criterioBusqueda, setCriterioBusqueda] = useState('')
    
    const handleKeyDown = (event) => {;
        if (event.key === 'Enter' && criterioBusqueda.length >= 3) {
            onBuscar(criterioBusqueda)
        }};


    return(
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextField
            id="search-bar" 
            type="search"
            variant='standard'
            label='Buscar noticias'
            sx={{
                width: 350,
                m: 0.5,
                mb:3,
                mt: 3,
            }}
            value= {criterioBusqueda}
            onChange={(evento)=>{ 
                setCriterioBusqueda(evento.target.value) 
            }}
            onKeyDown={handleKeyDown}
            > 
            </TextField>
                <Button
                variant='contained'
                size = 'small'
                sx={{mt:'10px', mx:'4px'}}
                onClick={()=>{
                    onBuscar(criterioBusqueda)
                }}
                disabled = { criterioBusqueda.length < 3 }
                >
                    <SearchIcon />
                </Button>
        </Box>
    );
};

export default Buscador