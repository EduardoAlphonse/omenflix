import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Label, Input } from './styled';

export default function FormField({
  onChange, name, type, label, value, suggestions,
}) {
  const fieldId = `id_${name} `;

  const tagConfig = type === 'textarea'
    ? { tag: 'textarea', type: 'text' }
    : { tag: 'input', type };

  const hasSuggestions = Boolean(suggestions.length > 0);

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
          list={`suggestionsFor_${fieldId}`}
          autoComplete={hasSuggestions ? 'off' : 'on'}
        />
        <Label.Text>{label}</Label.Text>

        {
          hasSuggestions && (
            <datalist id={`suggestionsFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option
                    key={`suggestionFor=${fieldId}_option${suggestion}`}
                    value={suggestion}
                  >
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
