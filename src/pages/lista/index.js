import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
function Lista() {
    async function handleDelete(id) {
        try {
            await api.delete(`cliente/${id}`);
            setCliente(cliente.filter(cliente => cliente.id !== id));
        } catch (err) {
            alert('Erro ao deletar cliente, tente novamente')
        }
    }
    const [cliente, setCliente] = useState([]);
    useEffect(() => {
        async function loadCliente() {
            const response = await api.get('/cliente');
            setCliente(response.data);
        }

        loadCliente();
    }, []);
    return (
        <div className="body-listagem">
            <main>
                <div className="caixa_entrada container">
                    <table className="table-box">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Telefone</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th><AssignmentIndIcon /></th>
                                <th><DriveEtaIcon /></th>
                                <th><DeleteForeverIcon /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cliente.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.idade}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.cpf}</td>
                                    <td>{cliente.rg}</td>
                                    <td><Link to={`/registro/${cliente.id}`}><button>Detalhes</button></Link></td>
                                    <td><Link to={`/carros/${cliente.id}`}><button>Meus Carros</button></Link></td>
                                    <td><button onClick={() => handleDelete(cliente.id)}>Deletar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Lista;