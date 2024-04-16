// alert('Hello! I am from contentScript!');

// chrome.runtime.sendMessage({greeting: "Hi Mom!"}, function(response) {
//     // console.log(response.farewell);
//     console.log(response);
// });


chrome.storage.local.set({ name: 'Atharv' }).then(() => {
    console.log("Value is set");
  });
  
  chrome.storage.local.get(["name"]).then((result) => {
    console.log("Value is " + result.name);
  });