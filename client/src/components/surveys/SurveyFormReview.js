import React from 'react';
import { connect } from 'react-redux';
import { FIELDS } from './formConstants';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = FIELDS.map(({ label, name }) => {
    return (
      <div key={name}>
        <label for={name}>{label}</label>
        <input id={name} disabled value={formValues[name]} />
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
