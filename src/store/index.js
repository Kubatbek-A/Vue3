import { postModule } from "@/router/postModule";
import { createStore } from "vuex";

export default createStore({
  modules: {
    post: postModule,
  },
});

//   state: {
//     likes: 2,
//     isAuth: false,
//   },
//   getters: {
//     doubleLikes(state) {
//       return state.likes * 2;
//     },
//   },
//   mutations: {
//     incrementLikes(state) {
//       state.likes += 1;
//     },
//     decrementLikes(state) {
//       state.likes -= 1;
//     },
//   },
//   actions: {},
