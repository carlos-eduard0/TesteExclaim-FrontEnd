import React, { Component } from 'react';
import './styles.css';
class Step4 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.addCliente();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { nomeCarro, anoCarro, marca, numeroPlaca, handleChange } = this.props;
        return (
            <div className="form">
                <strong>Dados do carro</strong>
                <form action="submit" onSubmit={this.continue}>
                    <label htmlFor="nomeCarro">Nome do carro</label>
                    <input
                        type="text"
                        name="nomeCarro"
                        value={nomeCarro}
                        required
                        onChange={handleChange('nomeCarro')}

                    />
                    <label htmlFor="anoCarro">Ano do carro</label>
                    <input
                        type="number"
                        name="anoCarro"
                        value={anoCarro}
                        onChange={handleChange('anoCarro')}
                        required
                    />

                    <label htmlFor="marca">Marca do carro</label>
                    <input
                        type="text"
                        name="marca"
                        value={marca}
                        onChange={handleChange('marca')}
                        required
                    />



                    <label htmlFor="numeroPlaca" id="input-lado">Número da placa</label>
                    <input
                        type="text"
                        name="numeroPlaca"
                        value={numeroPlaca}
                        onChange={handleChange('numeroPlaca')}
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

export default Step4;