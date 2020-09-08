var chatUI = document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(n) > div.crqnQb > div.NSvDmb.cM3h5d");

chrome.storage.sync.get('state', function(data) {
        if (data.state) {
                chatUI.style.display = "none";
        } else {
                chatUI.style.display = "block";
        }

});
