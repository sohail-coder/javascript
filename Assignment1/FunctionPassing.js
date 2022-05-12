function foo() {
   alert("hello world");
}
function bar(func) {
   func();
}
bar(function(){ foo("Hello World!") });
