import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
max-width: 400px;
padding: 8px;
border: 2px solid black;
display: flex;
flex-direction: column;
gap: 10px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const StyledField = styled(Field)`
padding: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
font-size: 12px;
color: red;
`;