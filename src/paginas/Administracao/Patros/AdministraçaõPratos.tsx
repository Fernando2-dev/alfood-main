import { Button, Paper, Table, TableContainer } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IPrato from '../../../interfaces/IPrato';



const AdministracaoPratos = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        axios.get<IPrato[]>('http://localhost:8000/api/v2/pratos/')
            .then(resposta => setPratos(resposta.data)
            )
    }, [])

    const excluir = (pratoAhSerExcluido: IPrato) => {
        axios.delete(`http://localhost:8000/api/v2/prato/${pratoAhSerExcluido.id}/`)
            .then(() => {
                const listaPratos = pratos.filter(prato => prato.id !== pratoAhSerExcluido.id)
                setPratos([...listaPratos])
            })
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                
                        <TableCell>
                            Tag
                        </TableCell>
                        <TableCell>
                            Imagem
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Deletar
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pratos.map(prato =>
                        <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                      
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                {<a href={prato.imagem} rel="noreferrer" target="blank">ver imagem</a>}
                            </TableCell>
                            <TableCell>
                                {<Link to={`/admin/restaurantes/${prato.id}`}>
                                    Editar</Link>}
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={() => excluir(prato)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default AdministracaoPratos;