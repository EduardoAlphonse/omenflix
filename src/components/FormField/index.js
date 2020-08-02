import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  position: absolute;
  width: 200px;
  height: 57px;
  left: 16px;
  top: 0px;
  color: #E5E5E5;
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  padding: 15px;
  margin-bottom: 35px;
  outline: none;
  background-color: #53585D;
  color: #F5F5F5;
  border: none;
  border-radius: 7px;
  border-bottom: 4px solid transparent;
  resize: none;

  &:focus:not([type='color']) {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => value.length > 0 && css`
      &:not([type='color']) + ${Label.Text} {
        transform: scale(.6) translateY(-10px);
    }
  `};
`;

export default function FormField({
  onChange, name, type, label, value,
}) {
  const fieldId = `id_${name} `;

  const tagConfig = type === 'textarea'
    ? { tag: 'textarea', type: 'text' }
    : { tag: 'input', type };

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tagConfig.tag}
          id={fieldId}
          name={name}
          type={tagConfig.type}
          value={value}
          onChange={onChange}
          className="input"
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
