 (function(v, i, s, a, t) {
     v[t] = v[t] || function() {
         (v[t].v = v[t].v || []).push(arguments)
     };
     if (!v._visaSettings) { v._visaSettings = {} }
     v._visaSettings[a] = { v: '1.0', s: a, a: '1', t: t };
     var b = i.getElementsByTagName('body')[0];
     var p = i.createElement('script');
     p.defer = 1;
     p.async = 1;
     p.src = s + '?s=' + a;
     b.appendChild(p)
 })(window, document, '//app-worker.visitor-analytics.io/main.js', '2081c5a3-8693-11ec-b589-901b0edac50a', 'va')