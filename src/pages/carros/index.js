import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
function Carros() {
     async function handleDelete(key) {
         try {
             await api.delete(`carros/${key}`);
            setCarro(carros.filter(carros => carros.key !== key));
         } catch (err) {
             alert('Erro ao deletar carros, tente novamente')
        }
     }
    const [carros, setCarro] = useState([]);
    const { token } = useParams();

    useEffect(() => {
        async function loadCarros() {
            const response = await api.get(`carros/${token}`);
            setCarro(response.data)
        }

        loadCarros();
    }, [token]);


    return (
        <div className="listcars">

            <div className="body-listagem">

                <main>
                    <div className="linkCar">
                        <Link to={`/addcarro/${token}`}>Adicionar novo carro</Link>
                    </div>
                    <div className="caixa_entrada container">
                        <table className="table-box">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Ano</th>
                                    <th>Marca</th>
                                    <th>Número da placa</th>
                                    <th>Revisão</th>
                                    <th><EditIcon/></th>
                                    <th><DeleteForeverIcon/></th>
                                </tr>
                            </thead>
                            <tbody>
                                {carros.map((carros, idx) => (
                                    <tr key={idx}>
                                        <td>{carros.nomeCarro}</td>
                                        <td>{carros.anoCarro}</td>
                                        <td>{carros.marca}</td>
                                        <td>{carros.numeroPlaca}</td>
                                        <td><Link to={`/revisao/${carros.key}`}><button>Marcar</button></Link></td>
                                        <td><Link to={`/editCarro/${carros.key}`}><button>Editar</button></Link></td>
                                        <td><button onClick={() => handleDelete(carros.key)}>Deletar</button></td>
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

export default Carros;