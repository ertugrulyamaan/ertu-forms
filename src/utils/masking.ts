// masking.ts

/**
 * Applies a mask to a string value.
 * Supports:
 *   - string-based mask (e.g., "###-##-####")
 *   - function-based mask provided by the user
 * Mask characters:
 *   # - digit
 *   A - letter
 *   * - alphanumeric
 */
export function applyMask(
  value: string,
  mask: string | ((val: string) => string)
): string {
  if (typeof mask === 'function') {
    return mask(value);
  }

  const maskChars = mask.split('');
  // Remove all non-alphanumeric for value, as mask will determine what to keep
  const valueChars = value.replace(/\W/g, '').split('');

  let masked = '';
  let vi = 0;

  for (let mi = 0; mi < maskChars.length && vi < valueChars.length; mi++) {
    const m = maskChars[mi];
    const v = valueChars[vi];

    if (m === '#') {
      if (/\d/.test(v)) {
        masked += v;
        vi++;
      }
    } else if (m === 'A') {
      if (/[a-zA-Z]/.test(v)) {
        masked += v;
        vi++;
      }
    } else if (m === '*') {
      if (/[a-zA-Z0-9]/.test(v)) {
        masked += v;
        vi++;
      }
    } else {
      masked += m;
    }
  }

  return masked;
}