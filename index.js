import getTodos from "./getTodos.js";
import view from "./view.js";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

// 왜 requestAnimationFrame을 기반으로 DOM을 조작할까?
// requestAnimationFrame vs. setInterval
// 이벤트 루프의 동작 방식: https://vimeo.com/254947206
window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});
