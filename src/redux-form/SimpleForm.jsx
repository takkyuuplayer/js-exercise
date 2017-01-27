import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = ({
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <Field name="firstName" component="input" type="text" />
    <Field name="lastName" component="input" type="text" />
    <button type="submit">Submit</button>
  </form>
);
SimpleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
