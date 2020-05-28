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
 
    const [data, setData] = useState([]);
    const [problema, setProblema] = useState([]);
  

    async function handleAddRevisao(e) {
        e.preventDefault();
            await api.post(`revisao/${token}`, {
            data,
            problema,
        })
        Toast.fire({
            icon: 'success',
            title: 'Revisão marcada com sucesso!'
        })
        setTimeout(function () {
            history.push(`/revisao/${token}`);
        }, 1500);

    }

    return (
        <div className="body-form">
            <div className="form">
                <strong>Detalhes da Revisão</strong>
                <form action="submit" onSubmit={handleAddRevisao}>
                    <label htmlFor="nomeCarro">Data da Revisão</label>
                    <input
                        type="date"
                        name="data"
                        value={data}
                        required
                        onChange={e => setData(e.target.value)}
                    />
                    <label htmlFor="problema">Qual o problema do carro?</label>
                    <input
                        type="text"
                        name="problema"
                        value={problema}
                        required
                        onChange={e => setProblema(e.target.value)}
                    />
                    <button type="submit" id="next">Marcar</button>
                </form>
            </div>
        </div>

    )
}

export default AddCarro;