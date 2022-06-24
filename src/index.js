import getTodos from "./getTodos.js";
import todosView from "./view/todos.js";
import counterView from "./view/counter.js";
import filtersView from "./view/filters.js";
import applyDiff from "./applyDiff.js";

import registry from "./registry.js";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

// 왜 requestAnimationFrame을 기반으로 DOM을 조작할까?
// requestAnimationFrame vs. setInterval
// 이벤트 루프의 동작 방식: https://vimeo.com/254947206
const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

window.setInterval(() => {
  state.todos = getTodos();
  render();
}, 1000);

render();
