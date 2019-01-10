import { querycity, removeFakeList, addFakeList, updateFakeList } from '@/services/api';

export default {
  namespace: 'order',

  state: {
    Citylist: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(querycity, payload);
      console.log(2)
      yield put({
        type: 'queryCity',
        payload: Array.isArray(response) ? response : [],
      });
    },
    // *appendFetch({ payload }, { call, put }) {
    //   const response = yield call(queryFakeList, payload);
    //   yield put({
    //     type: 'appendList',
    //     payload: Array.isArray(response) ? response : [],
    //   });
    // },
    // *submit({ payload }, { call, put }) {
    //   let callback;
    //   if (payload.id) {
    //     callback = Object.keys(payload).length === 1 ? removeFakeList : updateFakeList;
    //   } else {
    //     callback = addFakeList;
    //   }
    //   const response = yield call(callback, payload); // post
    //   yield put({
    //     type: 'queryList',
    //     payload: response,
    //   });
    // },
  },

  reducers: {
    queryCity(state, action) {
      return {
        ...state,
        Citylist: action.payload,
      };
    },
    appendList(state, action) {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
  },
};