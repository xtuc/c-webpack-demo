#include <webassembly.h>
#include <webassembly/console.h>

export void test() {
  console_log("test");
}

export int add(int l, int r) {
  return l + r;
}
