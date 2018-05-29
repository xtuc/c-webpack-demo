const {init} = require("holycjs");

import("./add.c").then(({add, test, memory}) => {
  init(memory);

  document.body.innerHTML = "1+1=" + add(1, 1);

  test();
});
