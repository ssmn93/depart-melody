(function () {
  window.addEventListener('message', function (e) {
    // オリジン検証は必須。送信元を限定する
    if (e.origin !== 'https://locate.dkst.net') return;

    var data = e.data;
    if (!data || data.action !== 'scroll') return;

    window.scrollTo({
      top: data.y,
      left: data.x || 0,
      behavior: data.behavior || 'smooth'
    });

    // 完了通知を親に返す（任意）
    window.parent.postMessage({ action: 'scrolled', y: data.y }, 'https://locate.dkst.net');
  });
})();
