document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchWiki();
    }
});

function searchWiki() {
    var input = document.getElementById('searchInput').value;
    var error = document.getElementById('error');
    if (!input.trim()) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        // Encode the input to handle special characters
        var encodedInput = encodeURIComponent(input);
        // Redirect to the encoded search term
        window.location.href = 'https://infopedia.pythonanywhere.com/wiki/' + encodedInput;
    }
}