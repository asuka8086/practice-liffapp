(() => {
  const app = document.getElementById('app');
  app.textContent = 'hello,\n';

  liff.init().then((e) => {
    app.textContent += e;
    if (liff.isLoggedIn()) {
      liff.login();
    } else {
      return;
    }

    app.textContent += '\nlanguage:';
    app.textContent += liff.getLanguage();
    app.textContent += '\nversion:';
    app.textContent += liff.getVersion();
    app.textContent += '\nclient:';
    app.textContent += liff.isInClient();
    app.textContent += '\nloggedin:';
    app.textContent += liff.isLoggedIn();
    app.textContent += '\nos:';
    app.textContent += liff.getOS();
  }).catch((e) => {
    app.textContent += e;
  });
})();
