// Доступ к приложению — 90 дней с первого входа на этом устройстве.
(function () {
  var KEY = 'pitanie-first-access';
  var MAX_DAYS = 90;
  var now = Date.now();
  var first = null;
  try { first = localStorage.getItem(KEY); } catch (e) {}
  if (!first) {
    try { localStorage.setItem(KEY, String(now)); } catch (e) {}
    return;
  }
  var daysPassed = (now - parseInt(first, 10)) / 86400000;
  if (daysPassed > MAX_DAYS && !/expired\.html$/.test(location.pathname)) {
    location.replace('expired.html');
  }
})();

(function () {
  try {
    var KEY = 'pitanie-first-access';
    var old = parseInt(localStorage.getItem('app_first_access_date') || '0', 10);
    var cur = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (old && (!cur || old < cur)) {
      localStorage.setItem(KEY, String(old));
      if ((Date.now() - old) / 86400000 > 90 && !/expired\.html$/.test(location.pathname)) location.replace('expired.html');
    }
  } catch (e) {}
})();
