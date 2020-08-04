import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categories';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '#6e83d2',
  };

  const { values, handleChange, clearForm } = useForm(initialValues);

  const history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();

    categoryRepository.createCategory({
      name: values.name,
      color: values.color,
      link_extra: {
        text: values.description,
        url: '#',
      },
    })
      .then(() => {
        history.push('/');
      });

    clearForm();
  };

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((data) => {
        setCategories([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Adicionar categoria:
        <CategoryName style={{ color: values.color }}>
          {values.name}
        </CategoryName>
      </h1>

      <form onSubmit={handleForm}>
        <FormField
          name="name"
          type="text"
          value={values.name}
          label="Nome da categoria"
          onChange={handleChange}
        />

        <FormField
          name="description"
          type="textarea"
          value={values.description}
          label="Descrição"
          onChange={handleChange}
        />

        <FormField
          name="color"
          type="color"
          value={values.color}
          label="Cor"
          onChange={handleChange}
        />

        <Button style={{ color: '#575757' }}>
          Cadastrar categoria
        </Button>
      </form>

      <h2>Categorias cadastradas:</h2>

      {
        categories.length === 0
        && (
          <div>
            <p>Carregando categorias...</p>
          </div>
        )
      }

      <ul>
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category.name}${index}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

const CategoryName = styled.span`
  font-size: 48px;
  margin-left: 15px;
`;

export default CadastroCategoria;
