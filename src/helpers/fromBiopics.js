import compose from 'ramda/src/compose'
import evolve from 'ramda/src/evolve'
import path from 'ramda/src/path'
import renameKeys from './renameKeys'

const fromBiopics = compose(
  evolve({ totalCount: compose(Number, path(['x-total-count'])) }),
  renameKeys({ data: 'biopics', headers: 'totalCount' })
)

export default fromBiopics
