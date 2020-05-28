import React, { Component } from 'react';
import './styles.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import Swal from 'sweetalert2'
import './main.css';
import api from '../../services/api';

export class Cadastro extends Component {
    state = {
        step: 1,

        // step 1
        nome: '',
        idade: '',
        email: '',
        telefone: '',

        // step 2
        cpf: '',
        cnpj: '',
        rg: '',
        orgaoEmissor: '',

        //step 3
        cep: '',
        cidade: '',
        uf: '',
        bairro: '',
        end: '',
        numero: '',
        complemento: '',
    }

    addCliente = async () => {

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
        const { nome, idade, email, telefone, cpf, rg, orgaoEmissor, cep, cidade, uf, bairro, end, numero, complemento} = this.state;
        const res = await api.post('/cliente', {
            nome,
            idade,
            email,
            telefone,
            cpf,
            rg,
            orgaoEmissor,
            cep,
            cidade,
            uf,
            bairro,
            end,
            numero,
            complemento
        })
        console.log(res.data);
        try {
            if (res.data) {
                Toast.fire({
                    icon: 'success',
                    title: 'Usuário foi cadastrado!'
                })
            }
            if (res.data.message === 'Usuário já cadastrado') {
                Toast.fire({
                    icon: 'error',
                    title: 'Este usuário já existe em nossa base de dados'
                })
            }
        } catch (error) {
            Toast.fire({
                icon: 'error',
                title: 'Erro nosso, tente atualizar a página'
            })
        }
    }
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    showStep = () => {
        const { step, nome, idade, email, telefone, cpf, rg, orgaoEmissor, cep, cidade, uf, bairro, end, numero, complemento } = this.state;

        if (step === 1)
            return (<Step1
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                nome={nome}
                idade={idade}
                email={email}
                telefone={telefone}
            />);

        else if (step === 2)
            return (<Step2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                cpf={cpf}
                rg={rg}
                orgaoEmissor={orgaoEmissor}
            />);

        else if (step === 3)
            return (<Step3
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                cep={cep}
                cidade={cidade}
                uf={uf}
                bairro={bairro}
                end={end}
                numero={numero}
                complemento={complemento}
                addCliente={this.addCliente}
            />);
    }
    render() {
        return (

            <div className="render">
                {this.showStep()}
            </div>

        );
    }
}
export default Cadastro;