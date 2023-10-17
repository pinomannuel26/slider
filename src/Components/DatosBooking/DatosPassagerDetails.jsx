
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {StyledForm, TitlePassagerDetails, ImgPassagerDetails, H3PassagerDetails, ParrafoPassagerDetails, DivFormulario, LabelsPassagerDetails, ErrorsPassagerDetails, DivField, StyledField, DivFieldSelect } from './StylesDatosBooking'
import Button from "@mui/material/Button";
const DatosPassagerDetails = () => {
  return (
    <Formik
        initialValues={{
            name:'',
            surname: '',
            title:'', 
            birthday:'',
            nationality:''
        }}
        validate={(values)=>{
            let errores ={};
            //validacion nombre
            if(!values.name)
            {
                errores.name = 'Please enter your name';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name))
            {
                errores.name = 'The name can only contain letters and spaces';
            }

            //validacion apellido
            if(!values.surname)
            {
                errores.surname = 'Please enter your surname';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.surname))
            {
                errores.surname = 'The surname can only contain letters and spaces';
                
            }

            //validacion title
            if(!values.title)
            {
                errores.title = 'Please enter your title';
            }
            else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.title))
            {
                errores.title = 'The title can only contain letters and spaces';
                
            }
            return errores;
        }}
        onSubmit={(values, {resetForm})=>{
            resetForm();
            console.log(values);
            
        }}
    >
        {({ errors, values, handleChange})=>(
            <StyledForm>
                <div>
                    <TitlePassagerDetails>
                        <ImgPassagerDetails src='https://res.cloudinary.com/dbktnqag9/image/upload/v1697571091/Sprint2React-Eflight/Frame_vt80ki.png' alt="passager" />
                        <H3PassagerDetails>Passenger details</H3PassagerDetails>
                    </TitlePassagerDetails>
                    <ParrafoPassagerDetails>Name as on ID card/passport without title and punctuation</ParrafoPassagerDetails>
                    <DivFormulario>
                        <DivField>
                            <LabelsPassagerDetails htmlFor="name">Name</LabelsPassagerDetails>
                            <StyledField type="text" id="name" name="name" value={values.name} onChange={handleChange} placeholder="Enter your name" />
                            <ErrorMessage name="name" component={()=>(<ErrorsPassagerDetails> {errors.name}</ErrorsPassagerDetails>)} />
                        </DivField>

                        <DivField>
                            <LabelsPassagerDetails htmlFor="surname">Surname</LabelsPassagerDetails>
                            <StyledField type="text" id="surname" name="surname" value={values.surname} onChange={handleChange} placeholder="Enter your surname" />
                            <ErrorMessage name="surname" component={()=>(<ErrorsPassagerDetails> {errors.surname}</ErrorsPassagerDetails>)} />
                        </DivField>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="title">Title</LabelsPassagerDetails>
                            <StyledField id='title' name="title" as="select" value={values.title} onChange={handleChange}>
                                <option value="title1">Title1</option>
                                <option value="title2">Title1</option>
                                <option value="title3">Title1</option>
                            </StyledField>
                        </DivFieldSelect>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="birthday">Birthday</LabelsPassagerDetails>
                            <StyledField  id='birthday' name="birthday" type="date"  value={values.birthday} onChange={handleChange} />
                            
                        </DivFieldSelect>

                        <DivFieldSelect>
                            <LabelsPassagerDetails htmlFor="nationality">Nationality</LabelsPassagerDetails>
                            <StyledField  id='nationality'  name="nationality" as="select" value={values.nationality} onChange={handleChange}>
                                <option value="colombia">Colombia</option>
                                <option value="peru">Peru</option>
                                <option value="ecuador">Ecuador</option>
                            </StyledField>
                        </DivFieldSelect>
                        
                    </DivFormulario>
                </div>
                <button type='submit'>Enviar</button>
            </StyledForm>
        )}
    </Formik>
  )
}

export default DatosPassagerDetails