import { render } from '@testing-library/react';
import Menu from './menu';

describe('Teste do componente de menu', () => {

  it('deve renderizar o componente sem erros', () => {

    const { getByText } = render(<Menu produtos={[]} handleExibirProdutos={() => false}
      handleExibirCheckout={()=>false} />);

    const texto = getByText(/mini ecommerce/i);
    expect(texto).toBeInTheDocument();
  });

});