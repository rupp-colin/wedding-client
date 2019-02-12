import React from 'react';
import * as Yup from 'yup';
import {BASE_URL} from '../config.js';
import { Field, Form, withFormik } from 'formik';
import '../styles/RSVPForm.css';

const RSVPForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  submitCount,
}) => (
  <Form>
    <div className="form-field">
      <label>Your name</label>
      {touched.guestName && errors.guestName &&
      <p className="form-error">{errors.guestName}</p>}
        <Field
          type="text"
          name="guestName"
          placeholder="Karl Asbell"
          className="text-input"
        />
    </div>
    <div className="form-field">
      <label>Email (so we can contact you if needed)</label>
      {touched.guestEmail && errors.guestEmail &&
      <p className="form-error">{errors.guestEmail}</p>}
        <Field
          type="text"
          name="guestEmail"
          placeholder="wedding.guest@hotmail.edu"
          className="text-input"
        />
    </div>
    <div className="form-field">
      {touched.rsvp && errors.rsvp &&
      <p className="form-error">{errors.rsvp}</p>}
      <label>RSVP
        <Field
          className="drop-down"
          component="select"
          name="rsvp" >
          <option value=""></option>
          <option value="True">Yes</option>
          <option value="False">No</option>
        </Field>
      </label>
    </div>
    <div className="form-field">
      <label>Dietary Restrictions
        <Field
          component="select"
          className="drop-down"
          name="dietaryRestrictions" >
          <option value="none">none</option>
          <option value="vegetarian">vegetarian</option>
          <option value="vegan">vegan</option>
          <option value="glutenFree">gluten-free</option>
          <option value="allergy">food allergy</option>
          <option value="other">other (please reach out)</option>
        </Field>
      </label>
    </div>
    <div className="form-field">
      <label>Anything else?</label>
        <Field
          id="message-box"
          component="textarea"
          name="message"
          placeholder="Please let us know if you have any additional questions, comments, concerns, judgements, wishes, unsolicited advice, distractions, or pictures of cats.  Thanks!"
        />
    </div>
    <button
      type="submit"
      disabled=
      {!touched.guestName || errors.rsvp || errors.guestName
      || !touched.guestEmail || errors.guestEmail || isSubmitting
      }>
      Submit
    </button>
    {values.hasSubmitted && !touched.guestName &&
      <div className="form-is-submitted">
        <p>THANK YOU FOR THE RSVP</p>
        <div className="close-div"></div>
      </div>}
  </Form>
)

export const FormikRSVPForm = withFormik({
  mapPropsToValue: ({
    guestName,
    guestEmail,
    rsvp,
    dietaryRestrictions,
    message,
    hasSubmitted,
  }) => {
    return {
      guestName: guestName || '',
      guestEmail: '',
      rsvp: rsvp || '',
      dietaryRestrictions: dietaryRestrictions || '',
      message: message || '',
      hasSubmitted: hasSubmitted || false,
    }
  },
  validationSchema: Yup.object().shape({
    rsvp: Yup.boolean().required('* Please select "Yes" or "No"'),
    guestName: Yup.string().required('* Please enter your name'),
    guestEmail: Yup.string().email('* Please provide a valid email address').required('* Please provide an email address'),
    dietaryRestrictions: Yup.string(),
    message: Yup.string(),
    hasSubmitted: Yup.boolean(),
  }),
  handleSubmit(values, { setSubmitting, resetForm }) {
    console.log(values);
    fetch(`${BASE_URL}/guests`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(values)
    })
      .then((res) => {
        resetForm({guestEmail: '', guestName: '', rsvp: '', dietaryRestriction: '', message: '', hasSubmitted: true});
        setSubmitting(false);
        return res.json();
      })
      .catch(err => {
        console.log(err)
      })
  }
})(RSVPForm);
