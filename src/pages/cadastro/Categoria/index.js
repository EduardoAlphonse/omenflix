import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialCategory = {
    name: '',
    description: '',
    color: '#6e83d2',
  };

  const [categoryData, setCategoryData] = useState(initialCategory);

  const setValue = (key, value) => {
    setCategoryData({
      ...categoryData,
      [key]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setCategories([...categories, categoryData]);
    setCategoryData(initialCategory);
  };

  const handleChange = (e) => {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categories'
      : 'https://omenflix.herokuapp.com/categories';
    fetch(url)
      .then(async (data) => {
        const json = await data.json();
        setCategories([...json]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        <CategoryName style={{ color: categoryData.color }}>
          {categoryData.name}
        </CategoryName>
      </h1>

      <form onSubmit={handleForm}>
        <FormField
          name="name"
          type="text"
          value={categoryData.name}
          label="Nome da categoria"
          onChange={handleChange}
        />

        <FormField
          name="description"
          type="textarea"
          value={categoryData.description}
          label="Descrição"
          onChange={handleChange}
        />

        <FormField
          name="color"
          type="color"
          value={categoryData.color}
          label="Cor"
          onChange={handleChange}
        />

        <Button style={{ color: '#575757' }}>
          Cadastrar
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
