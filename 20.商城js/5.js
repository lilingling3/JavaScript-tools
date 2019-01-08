var a = {name:1};
function b() {
  console.log('a的值发生改变');
}


function bindData(target, event) {
  for (var key in target) {
    if (target.hasOwnProperty(key)) {
      (function() {
        var v = target[key];
        Object.defineProperty(target, key, {
          get: function() {
            return v;
          },
          set: function(_value) {
            v = _value;
            event.call(this);
          }
        });
      })();
    }
  }
}
bindData(a,b);

a.name = 2;