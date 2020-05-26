import React, { Component } from 'react';
import { isCPF, formatToCPF } from 'brazilian-values';
import Swal from 'sweetalert2';
import './styles.css';
class Step2 extends Component {
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
        const {cpf } = this.props

          if (!isCPF(cpf)) {
            Toast.fire({
                icon: 'error',
                title: 'CPF Inválido'
            })
        }
        else if (isCPF(cpf)) {
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { cpf, rg, orgaoEmissor, handleChange } = this.props;
        return (
            <div className="form" >
                <strong>Sobre o dono do carro</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        value={formatToCPF(cpf)}
                        onChange={handleChange('cpf')}
                        required
                    />
    
                    <label htmlFor="rg">RG</label>
                    <input
                        type="number"
                        name="rg"
                        value={rg}
                        onChange={handleChange('rg')}
                        required
                    />
                    <label htmlFor="orgao">Orgão Emissor</label>
                    <input
                        type="text"
                        name="orgao"
                        value={orgaoEmissor}
                        onChange={handleChange('orgaoEmissor')}
                        required
                    />
                    <div className="button-group">
                        <button id="prev" onClick={this.back}>voltar</button>
                        <button type="submit" id="next">próximo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Step2;