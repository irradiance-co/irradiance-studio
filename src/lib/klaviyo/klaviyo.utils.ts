const formatConsentedAt = (date: Date, timezoneOffset: number): string => {
  // Calculate timezone offset
  const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
  const offsetMinutes = Math.abs(timezoneOffset % 60);
  const offsetSign = timezoneOffset < 0 ? '-' : '+';
  const offset = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  // Combine all parts into the final string
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offset}`;
};

export { formatConsentedAt };
