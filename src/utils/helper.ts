export function generateAccountNumber(num = 10) {
  const result = Math.random().toFixed(num).slice(2).toString();
  return result;
}
