;(function() {
    setTimeout(() => {
        console.warn('Fix Canvas CPU extension is running, you may see error messages from the repeating task crashing');
        // 100% CPU task will crash without postMessage function
        // Missing function doesn't appear to affect functionality
        window.postMessage = undefined;
    }, 15000);
})();
