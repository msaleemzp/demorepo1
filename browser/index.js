function executeUserScript() {
    var userScript = document.getElementById('userScript').value;
    var iframe = document.createElement('iframe');
    iframe.sandbox = 'allow-scripts';
    iframe.style.display = 'none';
    iframe.srcdoc = '<script>' + userScript + '<\/script>';
    document.body.appendChild(iframe);
}
