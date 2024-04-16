// console.log("Hi, I am background!");
// console.log(this)

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.tabs.create({
//         url: 'https://www.google.com'
//     })
// })

// {
//     const img = document.createElement('img');
//     img.src = chrome.runtime.getURL('images/lmao.png');
//     document.body.append(img);
// }

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    console.log(sender)
    console.log(sendResponse)
    sendResponse({farewell: "goodbye"})
})