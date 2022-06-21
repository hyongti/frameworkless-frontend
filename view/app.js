import todosView from "./todos.js";
import counterView from "./counter.js";
import filtersView from "./filters.js";

// 타겟 DOM을 받아서 복제하고 state를 사용해 업데이트
export default (targetElement, state) => {
  // cloneNode를 통해 DOM을 복제하고, 분리된 요소를 수정함
  const element = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(todosView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  // 반환된 DOM 요소는 index.js에서 실제 DOM을 대체함.
  return element;
};
