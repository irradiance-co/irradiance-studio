export default function formatConsentedAt(
  date: Date,
  timezoneOffset: number,
): string {
  // Calculate timezone offset
  let offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  let offsetMinutes = Math.abs(timezoneOffset % 60);
  let offsetSign = timezoneOffset < 0 ? '-' : '+';
  let offset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}${offsetMinutes.toString().padStart(2, '0')}`;

  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  let hours = date.getHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');

  // Combine all parts into the final string
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}`;
}
