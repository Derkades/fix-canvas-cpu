;(function() {
    setTimeout(() => {
        console.warn('Fix Canvas CPU extension is running, you may see error messages from the repeating task crashing');
        const oldFunction = window.postMessage;
        window.postMessage = undefined; // 100% CPU task will now crash
        // Restore function in case it is used by something else
        setTimeout(() => window.postMessage = oldFunction, 2000);
    }, 15000);
})();
