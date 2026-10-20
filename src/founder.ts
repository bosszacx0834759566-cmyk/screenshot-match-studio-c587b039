export const FOUNDER_BIRTH_ISO = "2007-01-16";
export const FOUNDER_BIRTH_EN = "16 January 2007";
export const FOUNDER_BIRTH_TH = "16 มกราคม 2007";

export function founderAge(now: Date = new Date()): number {
  const b = new Date(`${FOUNDER_BIRTH_ISO}T00:00:00Z`);
  let age = now.getUTCFullYear() - b.getUTCFullYear();
  const beforeBirthday =
    now.getUTCMonth() < b.getUTCMonth() ||
    (now.getUTCMonth() === b.getUTCMonth() && now.getUTCDate() < b.getUTCDate());
  if (beforeBirthday) age -= 1;
  return age;
}
