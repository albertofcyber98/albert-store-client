export function sumPrice(items) {
    return items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
}
export function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2, style: 'currency', currency: 'IDR' }).format(number);
}