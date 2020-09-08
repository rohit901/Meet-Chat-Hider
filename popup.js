let hideChat = document.getElementById('hideChat');

consoleText(['Made by Rohit K Bharadwaj'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}




chrome.storage.sync.get('state', function(data) {
        if (data.state) {
                hideChat.innerText = "SHOW CHAT!";
        } else {
                hideChat.innerText = "HIDE CHAT!";
        }

});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
                tabs[0].id,
                {
                          file: "content.js",

                }
        );
});


hideChat.onclick = function() {

                chrome.storage.sync.get('state', function(data) {
                        if (data.state) {
                                chrome.storage.sync.set({state: false}, function() {
                                        hideChat.innerText = "HIDE CHAT!";
                                });
                        } else {
                                chrome.storage.sync.set({state: true}, function() {
                                        hideChat.innerText = "SHOW CHAT!"; //chats have been hidden. click to show again.

                                });
                        }

                });





        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                        tabs[0].id,
                        {
                                  file: "content.js",

                        }
                );
        });
};