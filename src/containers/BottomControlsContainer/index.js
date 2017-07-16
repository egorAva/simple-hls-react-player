import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import BottomControls from '../../components/BottomControls'
import { getPause, getVolume, getMuted, getTime, getFullscreen } from '../../selectors'
import { handleChangeVolume } from '../../actions/PlayerActions'
import { togglePause, toggleMute, toggleFullscreen } from '../../actionTypes'

const mapStateToProps = createStructuredSelector({
  isFullscreen: getFullscreen,
  isPause: getPause,
  volume: getVolume,
  muted: getMuted,
  time: getTime
})

const mapDispatchToProps = dispatch => ({
  togglePause: (...rest) => dispatch(togglePause(...rest)),
  toggleMute: (...rest) => dispatch(toggleMute(...rest)),
  toggleFullscreen: (...rest) => dispatch(toggleFullscreen(...rest)),
  handleChangeVolume: (...rest) => dispatch(handleChangeVolume(...rest))
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomControls)
