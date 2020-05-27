import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';
function Registro() {
    const { token } = useParams();

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            console.log(token);
            const response = await api.get(`cliente/${token}`);
            setRegistro(response.data);
        }
        loadDevs();
    }, [token]);


    return (
        <div className="aside" >
            <div className="info">
                <div className="titulo" id="titulo">
                    <strong>Dados do Cliente</strong>
                </div>
                <div className="infos">
                    <label htmlFor="">Nome:</label>
                    <p>{registro.nome}</p>
                    <label htmlFor="">Idade:</label>
                    <p>{registro.idade}</p>
                    <label htmlFor="">Email:</label>
                    <p>{registro.email}</p>
                    <label htmlFor="">Telefone:</label>
                    <p>{registro.telefone}</p>
                    <label htmlFor="">CPF:</label>
                    <p>{registro.cpf}</p>
                    <label htmlFor="">RG:</label>
                    <p>{registro.rg}</p>
                    <label htmlFor="">Orgão Emissor:</label>
                    <p>{registro.orgaoEmissor}</p>
                    <label htmlFor="">Nome do Carro:</label>
                    <p>{registro.nomeCarro}</p>
                    <label htmlFor="">Ano do Carro:</label>
                    <p>{registro.anoCarro}</p>
                    <label htmlFor="">Marca:</label>
                    <p>{registro.marca}</p>
                    <label htmlFor="">Número da Placa:</label>
                    <p>{registro.numeroPlaca}</p>
                    <label htmlFor="">Cidade:</label>
                    <p>{registro.cidade}</p>
                    <label htmlFor="">UF:</label>
                    <p>{registro.uf}</p>
                    <label htmlFor="">Bairro:</label>
                    <p>{registro.bairro}</p>
                    <label htmlFor="">Endereço:</label>
                    <p>{registro.end}</p>
                    <label htmlFor="">Número:</label>
                    <p>{registro.numero}</p>
                    <label htmlFor="">CEP:</label>
                    <p>{registro.cep}</p>
                    <label htmlFor="">Complemento:</label>
                    <p>{registro.complemento}</p>
                </div>
                <Link to={`/edit/${registro.id}`}><button className="btn-reg">Editar</button></Link>
            </div>
        </div>
    )


}

export default Registro;