import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const [categories, setCategories] = useState([]);

  const { values, handleChange } = useForm({
    title: 'Última aula da imersão',
    url: 'https://youtu.be/hhQ3RtvmfEg',
    category: '1',
  });
  const history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();

    const chosenCategory = categories.find((category) => category.name === values.category);

    videosRepository.createVideo({
      title: values.title,
      url: values.url,
      categoryId: chosenCategory.id,
    })
      .then(() => {
        history.push('/');
      });
  };

  useEffect(() => {
    categoriesRepository.getAll()
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Rota de cadastro de vídeo.</h1>

      <form onSubmit={handleForm}>
        <FormField
          name="title"
          type="text"
          value={values.title}
          label="Título"
          onChange={handleChange}
        />

        <FormField
          name="url"
          type="text"
          value={values.url}
          label="URL"
          onChange={handleChange}
        />

        <FormField
          name="category"
          type="text"
          value={values.category}
          label="Categoria"
          onChange={handleChange}
        />

        <Button style={{ color: '#575757' }}>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
