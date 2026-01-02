export const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // everything → -
    .replace(/^-+|-+$/g, '');    // trim - from start/end
};
