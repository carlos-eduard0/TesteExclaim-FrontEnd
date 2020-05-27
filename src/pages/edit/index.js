import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Swal from 'sweetalert2';
import './styles.css';
function Edit() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const history = useHistory();
    const { token } = useParams();

    const [cliente, setCliente] = useState('');
    const [nome, setNome] = useState(cliente.nome);
    const [idade, setIdade] = useState(cliente.idade);
    const [email, setEmail] = useState(cliente.email);
    const [telefone, setTelefone] = useState(cliente.telefone);
    const [cpf, setCpf] = useState(cliente.cpf);
    const [rg, setRg] = useState(cliente.rg);
    const [orgaoEmissor, setOrgaoEmissor] = useState(cliente.orgaoEmissor);
    const [nomeCarro, setNomeCarro] = useState(cliente.nomeCarro);
    const [anoCarro, setAnoCarro] = useState(cliente.anoCarro);
    const [marca, setMarca] = useState(cliente.marca);
    const [numeroPlaca, setNumeroPlaca] = useState(cliente.numeroPlaca);
    const [cidade, setCidade] = useState(cliente.cidade);
    const [uf, setUf] = useState(cliente.uf);
    const [bairro, setBairro] = useState(cliente.bairro);
    const [numero, setNumero] = useState(cliente.numero);
    const [cep, setCep] = useState(cliente.cep);
    const [complemento, setComplemento] = useState(cliente.complemento);
    const [end, setEnd] = useState(cliente.end);

    useEffect(() => {
        async function loadCliente() {
            console.log(token);
            const response = await api.get(`cliente/${token}`);
            setCliente(response.data);

        }
        loadCliente();
    }, [token]);

    async function handleEdit(e) {
        e.preventDefault();
        if (idade < 18) {
            Toast.fire({
                icon: 'error',
                title: 'Você ainda é menor de idade!'
            })
        }
        else{
            const res = await api.put(`cliente/${token}`, {
                nome,
                idade,
                email,
                telefone,
                cpf,
                rg,
                orgaoEmissor,
                nomeCarro,
                anoCarro,
                marca,
                numeroPlaca,
                cidade,
                uf,
                bairro,
                end,
                numero,
                cep,
                complemento
            })
            Toast.fire({
                icon: 'success',
                title: 'cliente foi atualizado com sucesso!'
            })
            setTimeout(function(){ 
                history.push('/lista'); 
            }, 1500);
        }
    }
    return (
        <div className="body-form">
            <div className="form">
                <strong>Editar</strong>
                <form onSubmit={handleEdit}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        defaultValue={cliente.nome}
                        required
                        onChange={e => setNome(e.target.value)}
                    />
                    <label htmlFor="nome_empresa">Idade</label>
                    <input
                        type="number"
                        name="idade"
                        defaultValue={cliente.idade}
                        required
                        onChange={e => setIdade(e.target.value)}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={cliente.email}
                        required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        defaultValue={cliente.telefone}
                        required
                        onChange={e => setTelefone(e.target.value)}
                    />
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        defaultValue={cliente.cpf}
                        onChange={e => setCpf(e.target.value)}
                        required
                    />

                    <label htmlFor="rg">RG</label>
                    <input
                        type="number"
                        name="rg"
                        defaultValue={cliente.rg}
                        onChange={e => setRg(e.target.value)}
                        required
                    />
                    <label htmlFor="orgao">Orgão Emissor</label>
                    <input
                        type="text"
                        name="orgao"
                        defaultValue={cliente.orgaoEmissor}
                        onChange={e => setOrgaoEmissor(e.target.value)}
                        required
                    />
                    <label htmlFor="cep">Cep</label>
                    <input
                        type="text"
                        name="cep"
                        defaultValue={cliente.cep}
                        onChange={e => setCep(e.target.value)}
                        required

                    />
                    <div className="input-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            name="cidade"
                            defaultValue={cliente.cidade}
                            onChange={e => setCidade(e.target.value)}
                            required
                        />

                        <label htmlFor="uf" id="input-lado">UF</label>
                        <input
                            type="text"
                            name="uf"
                            defaultValue={cliente.uf}
                            onChange={e => setUf(e.target.value)}
                            required
                            style={{ width: 58 }}
                        />
                    </div>
                    <label htmlFor="bairro">Bairro</label>
                    <input
                        type="text"
                        name="bairro"
                        defaultValue={cliente.bairro}
                        onChange={e => setBairro(e.target.value)}
                        required
                    />
                    <div className="input-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            name="end"
                            defaultValue={cliente.end}
                            onChange={e => setEnd(e.target.value)}
                            required
                        />
                        <label htmlFor="numero" id="input-lado">Número</label>
                        <input
                            type="number"
                            name="numero"
                            defaultValue={cliente.numero}
                            onChange={e => setNumero(e.target.value)}
                            required
                            style={{ width: 58 }}
                        />
                    </div>
                    <label htmlFor="complemento">Complemento</label>
                    <input
                        type="text"
                        name="complemento"
                        defaultValue={cliente.complemento}
                        onChange={e => setComplemento(e.target.value)}
                        required
                    />
                    <label htmlFor="nomeCarro">Nome do carro</label>
                    <input
                        type="text"
                        name="nomeCarro"
                        defaultValue={cliente.nomeCarro}
                        onChange={e => setNomeCarro(e.target.value)}
                        required

                    />
                    <label htmlFor="anoCarro">Ano do carro</label>
                    <input
                        type="number"
                        name="anoCarro"
                        defaultValue={cliente.anoCarro}
                        onChange={e => setAnoCarro(e.target.value)}
                        required
                    />

                    <label htmlFor="marca">Marca do carro</label>
                    <input
                        type="text"
                        name="marca"
                        defaultValue={cliente.marca}
                        onChange={e => setMarca(e.target.value)}
                        required
                    />
                    <label htmlFor="numeroPlaca" id="input-lado">Número da placa</label>
                    <input
                        type="text"
                        name="numeroPlaca"
                        defaultValue={cliente.numeroPlaca}
                        onChange={e => setNumeroPlaca(e.target.value)}
                        required
                    />
                    <button className="btn-edit" type="submit">Salvar</button>
                </form>

            </div>
        </div>


    )
}
export default Edit;