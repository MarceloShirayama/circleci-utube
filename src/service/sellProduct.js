/**
 * A quantidade vendida pode ser de 1 ou mais unidades.
 *  -> Se estoque ficar negativo uma exception deve ser lançada.
 *  -> O valo de venda não pode ser menop que  o valor de compra.
 *  @param {*} product
 *  @param {*} amount
 */

export default function sellProduct (product, amount) {
  product.stock -= amount;
  return product;
}
