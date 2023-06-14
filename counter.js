export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function testFetch(element) {
  element.addEventListener("click", () => {
    fetch("https://v.api.aa1.cn/api/yiyan/index.php")
      .then((res) => res.text())
      .then((html) => (element.innerHTML = html));
  });
}
