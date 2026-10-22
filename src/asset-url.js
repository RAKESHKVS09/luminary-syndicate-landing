// Keep public assets within the current repository's GitHub Pages address.
export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
