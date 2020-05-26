import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Lista() {
    const [cliente, setCliente] = useState([]);
    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/cliente');

            setCliente(response.data);
        }

        loadDevs();
    }, []);
    return (
        <div className="body-listagem">
            <main>
                <div class="caixa_entrada container">
                    <table class="table-box">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Telefone</th>
                                <th>Nome do carro</th>
                                <th>Número da placa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cliente.map(cliente => (
                                <tr key={cliente.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.idade}</td>
                                    <td>{cliente.telefone}</td>
                                    <td>{cliente.nomeCarro}</td>
                                    <td>{cliente.numeroPlaca}</td>
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