import { render } from '@testing-library/react';
import Produtos from './produtos';

describe('Teste do componente de produtos', () => {

  it('deve renderizar o componente qunado visivel', () => {

    const {getAllByText} = render(<Produtos visivel={true} adicionarProduto={()=>false} />);
    const botoes =getAllByText(/comprar/i);
    expect(botoes).toBeTruthy();
    
  });

});