    // JavaScript code for toggling navbar menu on mobile
    document.getElementById('navbarToggle').addEventListener('click', function() {
        var navbarNav = document.getElementById('navbarNav');
        navbarNav.classList.toggle('show');
    });
    function copyText() {
    var text = document.getElementById("text-box").innerText;
    var startIndex = text.indexOf("HTML Code:-");
    var textToCopy = text.substring(startIndex + "HTML Code:-".length).trim();
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
