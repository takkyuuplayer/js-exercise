import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = ({
  handleSubmit, // default prop
  handleFormValues,
}) => (
  <form onSubmit={handleSubmit(handleFormValues)}>
    <Field name="firstName" component="input" type="text" />
    <Field name="lastName" component="input" type="text" />
    <button type="submit">Submit</button>
  </form>
);
SimpleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFormValues: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
