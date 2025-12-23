/*
Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here

Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here

You can not accidentally redeclare a variable declared with let.let x = "John Doe";
let x = 0; --> this wil give error

With var you can do this:
var x = "John Doe";
var x = 0; --> This will not give error

Using 'var' : Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2

Using 'let' : Redeclaring a variable inside a block will not redeclare the variable outside the block:
let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10


*/