// 间接函数引用
var obj1 = {
  name:'obj1',
  foo:function(){
    console.log(this);
  }
}

var obj2 = {
  name:'obj2'
};

// obj2.bar = obj1.foo;
// obj2.bar();

(obj2.bar = obj1.foo)();