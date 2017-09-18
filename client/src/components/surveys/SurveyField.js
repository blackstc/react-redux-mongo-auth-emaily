import React from 'react';

export default ({ input, label, name, meta: { error, touched } }) => {
  const autoFocus = input.name === 'title';
  console.log('autoFocus', autoFocus);

  return (
    <div>
      <label>{label}</label>
      <input
        {...input}
        autoFocus={autoFocus}
        className={touched && error && 'invalid'}
        style={{ marginBottom: '5px' }}
      />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
