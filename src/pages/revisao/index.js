import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
function Revisao() {
     async function handleDelete(id_revisao) {
         try {
             await api.delete(`revisao/${id_revisao}`);
             setRevisao(revisao.filter(revisao => revisao.id_revisao !== id_revisao));
         } catch (err) {
            alert('Erro ao deletar carros, tente novamente')
         }
     }
    const [revisao, setRevisao] = useState([]);
    const { token } = useParams();

    useEffect(() => {
        async function loadRevisao() {
            const response = await api.get(`revisao/${token}`);
            setRevisao(response.data)
        }

        loadRevisao();
    }, [token]);


    return (
        <div className="listcars">

            <div className="body-listagem">

                <main>
                    <div className="linkCar">
                        <Link to={`/addRevisao/${token}`}>Nova revisão</Link>
                    </div>
                    <div className="caixa_entrada container">
                        <table className="table-box">
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Problema</th>
                                    <th>Código da Revisão</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {revisao.map((revisao, idx) => (
                                    <tr key={idx}>
                                        <td>{revisao.data}</td>
                                        <td>{revisao.problema}</td>
                                        <td>{revisao.cod}</td>
                                        <td><button onClick={() => handleDelete(revisao.id_revisao)}>Deletar</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Revisao;