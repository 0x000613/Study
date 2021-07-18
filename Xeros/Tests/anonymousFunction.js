function fn_fakeAsync(callback) {
    console.log("Hello")
    callback();
}

fn_fakeAsync(function(){
console.log("world");
});