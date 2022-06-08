import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import cryptoInfo from "./focusInfo.reducers"
import videoReducer from "./video.reducers"
import workInfo from "./work.reducers"
import roadMapInfo from './roadmap.reducers'
import featuresInfo from './features.reducers'
import teamInfo from './team.reducers'
import priceInfo from './price.reducers'
import funfactorInfo from './funfactor.reducers'
import safeInfo from './safe.reducers'
import blogInfo from './blog.reducers'
import partnerInfo from './partner.reducers'
import widgetAboutInfo from './widgetabout.reducers'

export default combineReducers({
  counterReducer,
  cryptoInfo,
  videoReducer,
  workInfo,
  roadMapInfo,
  featuresInfo,
  teamInfo,
  priceInfo,
  funfactorInfo,
  safeInfo,
  blogInfo,
  partnerInfo,
  widgetAboutInfo,
});
