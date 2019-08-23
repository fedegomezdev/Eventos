import React, { Component } from 'react';       
import {CategoriasConsumer} from '../context/CategoriasContext';
import {EventosConsumer} from '../context/EventosContext';


class Formulario extends Component {
    state = { 
        categoria: '',
        nombre: ''
     }


     obtenerDatosEvento = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    render() { 
        return ( 
            <EventosConsumer>
                {(value) => {
                    
                    return ( 
            <form
            onSubmit = {
                (e) => {
                    e.preventDefault();
                    value.obtenerEventos(this.state);
                }
            }
            >
                <fieldset className='uk-fieldset uk-margin'>
                    <legend className='uk-legend uk-text-center'>
                        Busca tu Evento por nombre o categoria
                    </legend>
                </fieldset>
                <div className='uk-column-1-3@m uk-margin'>
                    <div className='uk-margin' uk-margin='true'>
                        <input 
                            name = 'nombre'
                            className='uk-input'
                            type='text'
                            placeholder='Nombre de Evento o Ciudad'
                            onChange={this.obtenerDatosEvento}
                        />
                    </div>
                    <div className='uk-margin' uk-margin='true'>
                        <select 
                            className='uk-select'
                            name='categoria'
                            onChange={this.obtenerDatosEvento}
                        >
                            <option value=''>--Seleccione Categoria--</option>
                            <CategoriasConsumer>
                                { (value) => {
                                    return (
                                        value.categorias.map( categoria => (
                                            <option key={categoria.id} value={categoria.id}
                                            data-uk-select>
                                                {categoria.name_localized}
                                            </option>
                                        ))
                                    )
                                }

                                }
                            </CategoriasConsumer>
                        </select>
                    </div>

                    <div>
                        <input 
                            type='submit'
                            className='uk-button uk-button-danger'
                            value = 'Buscar Eventos '
                        />  
                    </div>
                </div>

            </form>
            )
        }}
            </EventosConsumer>
         );
    }
}
 
export default Formulario;