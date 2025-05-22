const eventEmitter = require("events");

const myEmitter = new eventEmitter();

//listeners
myEmitter.on("myEvent", (...args) => {
    console.log("there is a new event !", args);
});

myEmitter.on("myEvent", (...args) => {
    console.log("another listener for the new event !", args);
    console.log("----------");
});

myEmitter.on("broadcast", (sockets, socketWhichBroadcasted) => {
    //emit an event message to all the sockets ececpt socketWhichBroadcasted
})

myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1,2);
myEmitter.emit("myEvent", [1,2]);


