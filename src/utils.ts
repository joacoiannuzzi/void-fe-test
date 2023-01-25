export function millisToMinutesAndSeconds(millis: number) {
  const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, millis));
  // Pull out parts of interest
  const parts = [d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()];
  // Zero-pad
  const formatted = parts.map(s => String(s).padStart(2, '0')).join(':');

  return formatted;
}

export const getPlayerKDA = (
  kills: number,
  deaths: number,
  assists: number,
) => {
  if (deaths === 0) {
    return (kills + assists).toFixed(2);
  }
  return ((kills + assists) / deaths).toFixed(2);
};
