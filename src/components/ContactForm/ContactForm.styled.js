import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
max-width: 500px;
padding: 8px;
border: 2px solid black;
display: flex;
flex-direction: column;
gap: 10px;
background: #FEAC5E;  
background: -webkit-linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const StyledField = styled(Field)`
padding: 4px;
border-radius: 2px;
border: 1px solid black;
box-shadow: -7px 9px 20px -9px rgba(0,0,0,0.5);
`;

export const ErrorMsg = styled(ErrorMessage)`
font-size: 12px;
color: red;
`;

export const Button = styled.button`
width: fit-content;
border-radius: 3px;
border: 1px solid black;
background-color: rgb(232, 250, 255);
`;