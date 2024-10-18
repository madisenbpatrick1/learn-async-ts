const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
console.log(fetchPromise1);
// returns a promise 
// This will work on its own thread and then get back to the rest of the function 
// when you run the function is done fetching we get then then handler results 
  
fetchPromise1.then((response: Response) => {
    console.log(`Received response? ${response.ok? 'yes' : 'no'}`);
    console.log(`Response Status: ${response.status}`);
});
// handle by returning a then handle, handle the response and inside of that we will have a function 
  
console.log("Started request…");
for (let i = 0; i < 10; i++) {
  console.log('do other things ...');
}

// main thread
// call to fetech 
// pushed on to a queue and fetch executes there 
// then comes back to the main thread handlers 
// this is better than parallel execution (callback-hell.ts)

  