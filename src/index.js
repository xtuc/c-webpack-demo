import("./add.c").then(({add}) => {
  document.body.innerHTML = "1+1=" + add(1, 1);
});
