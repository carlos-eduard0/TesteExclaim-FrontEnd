import React, { Component } from 'react';
import { formatToPhone} from 'brazilian-values';
import './styles.css';
import Swal from 'sweetalert2';
class Step1 extends Component {
    continue = e => {
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
        e.preventDefault();
        const {idade } = this.props

          if (idade<18) {
            Toast.fire({
                icon: 'error',
                title: 'Você ainda é menor de idade!'
            })
        }
        else if (idade>=18) {
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { nome, idade, email, telefone, handleChange } = this.props;
        return (
            <div className="form"  >
                <strong>Sobre o dono do carro</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        required
                        onChange={handleChange('nome')}
                    />
                    <label htmlFor="nome_empresa">Idade</label>
                    <input
                        type="number"
                        name="idade"
                        value={idade}
                        required
                        onChange={handleChange('idade')}
                    />
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={handleChange('email')}
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
                        name="telefone"
                        value={formatToPhone(telefone)}
                        required
                        onChange={handleChange('telefone')}
                    />
                    <button type="submit" id="next">Próximo</button>
                </form>
            </div>
        );
    }
}

export default Step1;