import _ from "lodash";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Dinesh", "Manoharan"], "-");
  element.classList.add("hello");
  return element;
};

document.body.appendChild(component());
