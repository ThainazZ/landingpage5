import { useState } from 'react'
import * as S from './styles'

import Frontend from '../templates/Frontend'


// conteudo main da página
function App() {
  return <Frontend>

<S.Container>
  <div>
    <h1>Design driven development of your web product</h1>
    <h6>We are a full service digital agency that builds immesive user experience.</h6>
  </div>
  <div>Coluna 2</div>
</S.Container>


  </Frontend>;
}

export default App;
