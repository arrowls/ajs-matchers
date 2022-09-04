export default function setHealthTable(table) {
  try {
    return table.sort((a, b) => +a.health - +b.health).reverse();
  } catch (e) {
    return null;
  }
}
