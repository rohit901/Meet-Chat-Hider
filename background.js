'use strict';

chrome.runtime.onInstalled.addListener(function() {
        chrome.storage.sync.set({state: false}, function() {
                console.log("The color is Green.");
        });


        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
                chrome.declarativeContent.onPageChanged.addRules([{
                        conditions: [new chrome.declarativeContent.PageStateMatcher({
                                pageUrl: {hostEquals: 'meet.google.com'},
                        })
                ],
                        actions: [new chrome.declarativeContent.ShowPageAction()]
                }]);
        });


});