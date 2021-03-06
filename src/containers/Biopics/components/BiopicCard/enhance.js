import { connect } from 'react-redux'
import compose from 'ramda/src/compose'

import toggleProp from '../../../../helpers/toggleProp'
import { removeBiopic, changeBiopic } from '../../store/thunks'
import { withMotif } from '../../../../hocs'


const stateProps = ({ biopics: { currentPage } }) => ({ currentPage })
const dispatchProps = dispatch => ({
  removeBiopic: compose(dispatch, removeBiopic),
  changeBiopic: compose(dispatch, changeBiopic, toggleProp('active'))
})
const withProps = connect(stateProps, dispatchProps)

const enhance = compose(withProps, withMotif)

export default enhance
