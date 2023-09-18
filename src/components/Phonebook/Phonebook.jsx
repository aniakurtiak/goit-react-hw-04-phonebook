import { Formik } from 'formik';
import { StyledForm, Label, StyledField, ErrorMsg } from './Phonebook.styled';
import * as Yup from 'yup';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const Phonebook = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
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
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
