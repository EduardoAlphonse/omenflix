import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

import Game from './Game';

function Page404() {
  return (
		<PageDefault>
      <h2>Oh, não! A página solicitada não foi encontrada!</h2>
			<p>Mas não fique triste, a não ser que você não consiga fazer mais que 1 ponto nesse joguinho muito difícil desenvolvido pelo Mario Souro.</p>

			<Game
				src='https://mariosouto.com/flappy-bird-devsoutinho/'
				scrolling='no'
			/>
			
      <Link to='/'>
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default Page404;