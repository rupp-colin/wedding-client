import React from 'react';
import * as Yup from 'yup';
import { Field, Form, withFormik } from 'formik';

const RSVPForm = ({
  values,
  errors,
  touched,
}) => (
  <Form>
    <div className="form-field">
      <label>Your name
        <Field
          type="text"
          name="guestName"
          placeholder="Karl Asbell"
        />
      </label>
      {touched.guestName && errors.guestName &&
      <p className="form-error">{errors.guestName}</p>}
    </div>
    <div className="form-field">
      <label>RSVP
        <Field
          component="select"
          name="rsvp" >
          <option value=""></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Field>
      </label>
    </div>
    <div className="form-field">
      <label>Dietary Restrictions
        <Field
          component="select"
          name="dietaryRestrictions" >
          <option value="none">none</option>
          <option value="vegetarian">vegetarian</option>
          <option value="vegan">vegan</option>
          <option value="glutenFree">gluten-free</option>
          <option value="other">other (please reach out to us)</option>
        </Field>
      </label>
    </div>
    <div className="form-field">
      <label>Additional info?
        <Field
          type="text"
          name="message"
          placeholder="Please let us know if you have any additional questions"
        />
      </label>
    </div>
    <button type="submit">Submit</button>
  </Form>
)

export const FormikRSVPForm = withFormik({
  mapPropsToValue: ({
    guestName,
    rsvp,
    dietaryRestrictions,
    message,
  }) => {
    return {
      guestName: guestName || '',
      rsvp: rsvp || '',
      dietaryRestrictions: dietaryRestrictions || '',
      message: message || '',
    }
  },
  validationSchema: Yup.object().shape({
    rsvp: Yup.string().required('Please select "Yes" or "No"'),
    guestName: Yup.string().required('Enter your name'),
    dietaryRestrictions: Yup.string(),
    message: Yup.string(),
  }),
  handleSubmit(values) {
    console.log(values)
  }
})(RSVPForm);
