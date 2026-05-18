document.getElementById('scan').addEventListener('click', function() {
  var endpoint = document.getElementById('endpoint').value;
  if (!endpoint) return;
  var result = document.getElementById('result');
  result.innerHTML = 'Scanning ' + endpoint + '...<br><a href="https://api-dna.com/?endpoint=' + encodeURIComponent(endpoint) + '" target="_blank">View full report on api-dna.com</a>';
});
