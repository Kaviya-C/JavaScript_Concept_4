function callback()
{
 console.log("callback function");
}

// parameter getting is higher order..
function test(callback)
{
 callback();
}

test(callback);


//----------------------
setTimeout(function()
{
 console.log("hello world");
},3000);

setInterval(function()
{
 console.log("hello world");
},3000);