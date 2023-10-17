import React, {useState} from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import styled from "styled-components";

const Input = styled(Field)`
    border-radius:25px !important;

`
const Formulario = () => {
    const [formularioEnviado, cambiarFormulario] = useState(false);
  return (
    <>
        <Formik
            initialValues={{
                name:'',
                surname: ''
            }}
            validate={(valores)=>{
                let errores ={};
                //validaciojn nombre
                if(!valores.name)
                {
                    errores.name = 'Por favor ingresa un nombre';
                }
                else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name))
                {
                    errores.name = 'El nombre solo puede contener letras y espacios';
                }

                //validacion correo
                if(!valores.surname)
                {
                    errores.surname = 'Por favor ingresa un apellido';
                }
                else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname))
                {
                    errores.surname = 'El apellido solo puede contener letras y espacios';
                    
                }


                return errores;
            }}
            onSubmit={(valores, {resetForm})=>{
                resetForm();
                console.log('formulario enviada');
                console.log(valores);
                cambiarFormulario(true);
                setTimeout(()=> cambiarFormulario(false),5000); //cambair el estado despues de 5segundos
            }}
        >
            {({ errors})=>(
                <Form className='formulario' >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Input  type="text" id="name" name="name" placeholder='enter your name' /> 
                        <ErrorMessage name='name' component={()=>(<div className='error'>{errors.name}</div> )}/> {/*si hay un erroe en el name se muestra el div sino no*/}
                    </div>
                    <div>
                        <Field name='pais' as="select"> {/*paar q ese campo se comporte como un selct*/}
                            <option value="mex">mexico</option>
                            <option value="españ">españa</option>
                            <option value="arge">argentina</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="surname">Surname:</label>
                        <Input type="text" id="surname" name="surname" placeholder='enter your surname' />
                        <ErrorMessage surname='surname' component={()=>(<div className='error'>{errors.surname}</div> )}/> {/*si hay un erroe en el surname se muestra el divsino no*/}
                
                    </div>
                    <div>
                        <label > <Field type="radio" name='sexo' value='hombre'/> Hombre </label>
                        <label > <Field type="radio" name='sexo' value='mujer'/> Mujer </label>
                    </div>

                    <div>
                        <Field name="Mensaje" as="textarea" placeholder="mensaje"/>
                    </div>
                    <button type='submit'>Enviar</button>
                    {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
                </Form>
            )} 

            
               {/*({values, errors, touched, handleSubmit, handleChange, handleBlur})=>(
                <form className='formulario' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Input type="text" id="name" name="name" placeholder='enter your name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.name && errors.name && <div className='error'>{errors.name}</div>} {/*si hay un erroe en el name se muestra sino no
                   </div>
                    <div>
                        <label htmlFor="surname">Surname:</label>
                        <input type="text" id="surname" name="surname" placeholder='enter your surname' value={values.surname} onChange={handleChange} onBlur={handleBlur}/>
                        {touched.surname && errors.surname && <div className='error'>{errors.surname}</div>} 
                    </div>
                    <button type='submit'>Enviar</button>
                    {formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
                </form>
               )*/} 
           

        </Formik>
        
    </>
  )
}

export default Formulario