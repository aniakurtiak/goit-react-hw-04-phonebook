import { Formik } from 'formik';
import {
  StyledForm,
  Label,
  StyledField,
  ErrorMsg,
  Button,
} from './ContactForm.styled';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'At least 5 numbers')
    .max(13, 'Too Long number!')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text"></StyledField>
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <StyledField name="number" type="tel"></StyledField>
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
