export const formatPrice = (price: number) => {
  return Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
}
