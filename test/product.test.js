/**
 * A quantidade vendida pode ser de 1 ou mais unidades.
 */

import Product from '../src/model/product';
import sell from '../src/service/sellProduct';

it('deve validar baixa de estoque da venda de uma unidade.', () => {
  const product1 = new Product('Celular', 500.00, 900.00, 10);
  sell(product1, 1);
  expect(product1.stock).toBe(9);
});

it('deve validar baixa de estoque da venda de mais de uma unidade.', () => {
  const product1 = new Product('Celular', 500.00, 900.00, 10);
  sell(product1, 2);
  expect(product1.stock).toBe(8);
});
