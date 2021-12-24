export function handleIncrement() {
  const healthElement = document.getElementById("health");
  let healthValue = healthElement.innerText;

  healthValue = Number(healthValue) + 1;
  healthElement.innerText = healthValue;
}

export function handleDecrement() {
  const healthElement = document.getElementById("health");
  let healthValue = healthElement.innerText;

  healthValue = Number(healthValue) - 1;
  healthElement.innerText = healthValue;
}
