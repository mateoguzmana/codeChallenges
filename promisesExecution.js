doSomething = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 100)
    });
    
    return promise;
}

doSomethingElse = () => {
    console.log("Here");
}

// This function will return doSomethingElse function
doSomething().then(function () {
  return doSomethingElse();
});

// This function will execute console.log("Here") directly;
doSomething().then(function () {
  doSomethingElse();
});

// This function first execute console.log("Here"); and after launch the promise
doSomething().then(doSomethingElse());

// This function will execute console.log("Here") directly;
doSomething().then(doSomethingElse());