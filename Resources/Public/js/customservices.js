tarteaucitron.services.pardot = {
    "key": "pardot",
    "type": "ads",
    "name": "Pardot",
    "needConsent": true,
    "cookies": [],
    "js": function () {
        "use strict";
        // When user allow cookie
        var piAId = tarteaucitron.user.pardotPiAId;
        var piCId = tarteaucitron.user.pardotPiCId;
        var piHostname = tarteaucitron.user.pardotPiHostname;

        (function() {
            function async_load(){
                var s = document.createElement('script'); s.type = 'text/javascript';
                s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
                var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
            }
            if (document.readyState === "complete") {
                async_load();
            } else {
                if(window.attachEvent) { window.attachEvent('onload', async_load); }
                else { window.addEventListener('load', async_load, false); }
            }
        })();
    },
    "fallback": function () {
        "use strict";
        // when use deny cookie
    }
};