import { TextField, Button, Typography, AppBar, Container, Toolbar, Link, Paper } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import IRestaurante from '../../../interfaces/IRestaurante';
import { Box } from '@mui/system';

import { Link as RouterLink } from 'react-router-dom';


const FormularioRestaurante = () => {

  const parametros = useParams()

  useEffect(() => {
    if (parametros.id) {
      axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
        .then(resposta => setNome(resposta.data.nome))
    }
  }, [parametros])

  const [nome, setNome] = useState('')
  function aoSubmeterForme(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (parametros.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {
        nome: nome
      })
        .then(() => {
          alert("Atualizado com sucesso")
        })
    } else {
      axios.post('http://localhost:8000/api/v2/restaurantes/', {
        nome: nome
      })
        .then(() => {
          alert("tudo ok")
        })
    }
  }

  return (
      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: "flex", flexDirection: "colum", alignItems: "center", flexGrow: 1 }}>
              <Box component="form" sx={{ width:' 100%' }} onSubmit={aoSubmeterForme}>
                <Typography component='h1' variant='h6'> Formilário de restaurantes</Typography>
                <TextField
                  label="Nome do restaurante"
                  variant="standard"
                  value={nome}
                  onChange={evento => setNome(evento.target.value)}
                  fullWidth
                  required
                />
              
                <Button sx={{ marginTop: 1 }} type="submit" variant="outlined">Salvar</Button>
              </Box>

            </Box>
          </Paper>
        </Container>
      </Box>
  )
}

export default FormularioRestaurante;