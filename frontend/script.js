async function shortenUrl() {
    const url = document.getElementById('urlInput').value;
    const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    });
    const data = await response.json();
    document.getElementById('result').innerHTML = `<a href="\${data.shortened}" target="_blank">\${data.shortened}</a>`;
}
