export function formatDate(date: string): string {
 return new Date(date).toLocaleDateString("es-ES");
}
  