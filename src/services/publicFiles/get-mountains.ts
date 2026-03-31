import patch from 'path'

function getMountains() {
  const mountains = patch.join(process.cwd(), 'public', 'mountains.avif')
  return mountains
}

export default getMountains
