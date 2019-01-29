import React from 'react';
import * as Yup from 'yup';
import {BASE_URL} from '../config.js';
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
          <option value="True">Yes</option>
          <option value="False">No</option>
        </Field>
      </label>
      {touched.rsvp && errors.rsvp &&
      <p className="form-error">{errors.rsvp}</p>}
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
    <button
      type="submit"
      disabled={!touched.guestName || errors.rsvp || errors.guestName
      }>
      Submit
    </button>
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
    rsvp: Yup.boolean().required('Please select "Yes" or "No"'),
    guestName: Yup.string().required('Enter your name'),
    dietaryRestrictions: Yup.string(),
    message: Yup.string(),
  }),
  handleSubmit(values) {
    fetch(`${BASE_URL}/guests`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(values)
    })
      .then(res => {
        console.log(res)
        return res.json();
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }
})(RSVPForm);
