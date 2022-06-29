// registry에 등록될 프로퍼티는 index.html의 data-component 속성값과 일치해야 함
const registry = {};

const renderWrapper = (component) => {
  return (targetElement, state, events) => {
    const element = component(targetElement, state, events);
    // data-component 속성을 가진 모든 DOM 요소를 찾음
    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).forEach((target) => {
      // data- 로 시작하는 속성은 dataset에 들어감
      const name = target.dataset.component;

      const child = registry[name];
      if (!child) {
        return;
      }

      target.replaceWith(child(target, state, events));
    });

    return element;
  };
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root, state, events) => {
  const cloneComponent = (root) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state, events);
};

export default { add, renderRoot };
