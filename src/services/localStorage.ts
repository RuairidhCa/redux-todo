export function loadState() {
  const todoState = localStorage.getItem("todoState");

  if (todoState !== null) {
    return JSON.parse(todoState);
  } else {
    return undefined;
  }
}

export function saveState(state: any) {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("todoState", serialisedState);
}
