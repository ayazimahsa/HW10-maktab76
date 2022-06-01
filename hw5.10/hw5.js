// Are these code fragments equal? In other words, do they behave the same way in
// any circumstances, for any handler functions?

promise.then(f1).catch(f2);
Versus:
promise.then(f1, f2);


// The short answer is: no, they are not equal:
// The difference is that if an error happens in f1, then it is handled by .catch here:
// That’s because an error is passed down the chain, and in the second code piece there’s no chain below f1.
// In other words, .then passes results / errors to the next.then /catch.So in the first example, there’s a catch below, 
// and in the second one there isn’t, so the error is unhandled.

/*
نه برابر نیستند چون در مورد اول اگر خظایی پیدا شه مدیریت میشه 
اما در مورد دوم اگر خطایی وارد زنجیره شه کنترل و مدیریت نمیشه و به بعدی منتقل میشه
*/
