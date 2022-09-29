// https://stackoverflow.com/a/57318604
;(function() {
    const b = typeof browser !== 'undefined' ? browser : chrome

    const script = document.createElement('script')
    script.src = b.runtime.getURL('script.js')
    document.documentElement.appendChild(script)
})();
