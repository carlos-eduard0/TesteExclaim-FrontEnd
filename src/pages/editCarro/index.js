import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import Swal from 'sweetalert2';
import './styles.css';
function EditCarro() {
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
    const [nomeCarro, setNomeCarro] = useState('');
    const [anoCarro, setAnoCarro] = useState('');
    const [marca, setMarca] = useState('');
    const [numeroPlaca, setNumeroPlaca] = useState('');



    async function handleEditCar(e) {
        e.preventDefault();
            await api.put(`carros/${token}`, {
                nomeCarro,
                anoCarro,
                marca,
                numeroPlaca,
            })
            Toast.fire({
                icon: 'success',
                title: 'carro foi atualizado com sucesso!'
            })
            setTimeout(function () {
                history.push('/lista');
            }, 1500);
    }
    return (
        <div className="body-form">
            <div className="form">
                <strong>Editar</strong>
                <form onSubmit={handleEditCar}>
                    <label htmlFor="nomeCarro">Nome</label>
                    <input
                        type="text"
                        name="nomeCarro"
                        defaultValue={nomeCarro}
                        required
                        onChange={e => setNomeCarro(e.target.value)}
                    />
                    <label htmlFor="anoCarro">Ano</label>
                    <input
                        type="number"
                        name="anoCarro"
                        defaultValue={anoCarro}
                        required
                        onChange={e => setAnoCarro(e.target.value)}
                    />
                    <label htmlFor="marca">Marca</label>
                    <input
                        type="texta"
                        name="marca"
                        defaultValue={marca}
                        required
                        onChange={e => setMarca(e.target.value)}
                    />
                    <label htmlFor="numeroPlaca">Número da Placa</label>
                    <input
                        type="text"
                        name="numeroPlaca"
                        defaultValue={numeroPlaca}
                        required
                        onChange={e => setNumeroPlaca(e.target.value)}
                    />
                    <button className="btn-edit" type="submit">Salvar</button>
                </form>

            </div>
        </div>


    )
}
export default EditCarro;