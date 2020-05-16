import { createTransform } from 'redux-persist';

const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  inboundState => {
    return inboundState;
  },
  // transform state being rehydrated
  outboundState => {
    return {
      ...outboundState,
      apiRequestStatus: {
        login: { isFetching: false, error: false },
        logout: { isFetching: false, error: false }
      }
    };
  },
  // define which reducers this transform gets called for.
  { whitelist: ['authStore'] }
);

export default SetTransform;
