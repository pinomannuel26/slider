import styled from "styled-components";
import { Form, Field} from 'formik';


export const StyledForm = styled(Form)`
    background-color:white;
    height:100vh;
    padding: 5% 8%;
`;

export const TitlePassagerDetails = styled.div`
  display: flex;  
`;
export const ImgPassagerDetails = styled.img`
  width: 24px;
  height: 24px;  
`;
export const H3PassagerDetails = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@600&display=swap');
    color: #6C6CFE;
    font-size: 20px;
    font-family:'Sarabun', sans-serif;
    font-weight: 600;
    line-height: 30px;
    word-wrap: break-word;
`;
export const ParrafoPassagerDetails = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    color: #565E6C;
    font-size: 14px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
    margin-bottom:2%;
`;

export const DivFormulario= styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const LabelsPassagerDetails = styled.label`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@700&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: #424955;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;

`;

export const ErrorsPassagerDetails = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@700&display=swap');
    font-family: 'Sarabun', sans-serif;
    color: red;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
`;
export const DivField =styled.div`
    display: flex;
    flex-direction: column;
    width:47%;
    margin-right: 3%;
    margin-bottom: 2%;

`;
export const DivFieldSelect =styled.div`
    display: flex;
    flex-direction: column;
    width:31%;
    margin-right: 2%;
`;
export const StyledField= styled(Field)`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
    background-color:#F2F3F5;
    font-size: 14px;
    font-family: 'Sarabun', sans-serif;
    font-weight: 400;
    line-height: 22px;
    word-wrap: break-word;
    border-radius:10px;
    padding-left: 2%;
    height:30px;
    border:none;
`;