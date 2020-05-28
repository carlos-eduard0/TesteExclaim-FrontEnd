import React from 'react';
import './styles.css';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import Swal from 'sweetalert2'
function AddCarro() {
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
    const { token } = useParams();
    const history = useHistory();
 
    const [nomeCarro, setNomeCarro] = useState([]);
    const [anoCarro, setAnoCarro] = useState([]);
    const [marca, setMarca] = useState([]);
    const [numeroPlaca, setNumeroPlaca] = useState([]);

    async function handleAddCar(e) {
        e.preventDefault();
        await api.post(`carros/${token}`, {
            nomeCarro,
            anoCarro,
            marca,
            numeroPlaca
        })
        Toast.fire({
            icon: 'success',
            title: 'Carro cadastrado com sucesso!'
        })
        setTimeout(function () {
            history.push(`/carros/${token}`);
        }, 1500);

    }

    return (
        <div className="formAddCar">
            <div className="form">
                <strong>Detalhes do Carro</strong>
                <form action="submit" onSubmit={handleAddCar}>
                    <label htmlFor="nomeCarro">Nome</label>
                    <input
                        type="text"
                        name="nomeCarro"
                        value={nomeCarro}
                        required
                        onChange={e => setNomeCarro(e.target.value)}
                    />
                    <label htmlFor="anoCarro">Ano</label>
                    <input
                        type="number"
                        name="anoCarro"
                        value={anoCarro}
                        required
                        onChange={e => setAnoCarro(e.target.value)}
                    />
                    <label htmlFor="marca">Marca</label>
                    <input
                        type="marca"
                        name="text"
                        value={marca}
                        required
                        onChange={e => setMarca(e.target.value)}
                    />
                    <label htmlFor="numeroPlaca">Número da placa</label>
                    <input
                        type="text"
                        name="numeroPlaca"
                        value={numeroPlaca}
                        required
                        onChange={e => setNumeroPlaca(e.target.value)}
                    />
                    <button type="submit" id="next">Próximo</button>
                </form>
            </div>
        </div>

    )
}

export default AddCarro;