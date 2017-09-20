import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FIELDS } from './formConstants';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = FIELDS.map(({ label, name }) => {
    return (
      <div key={name}>
        <label htmlFor={name}>{label}</label>
        <input id={name} disabled value={formValues[name]} />
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text"
        type="submit"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
