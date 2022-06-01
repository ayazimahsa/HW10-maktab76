// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// .catch(f) is the same as promise.then(null, f)
// shows "Error: Whoops!" after 1 second.
