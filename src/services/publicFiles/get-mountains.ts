import path from 'path'

function getMountains() {
  const mountains = path.join(process.cwd(), 'public', 'mountains.avif')
  return mountains
}

export default getMountains
