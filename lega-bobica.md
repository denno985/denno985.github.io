
<!--Layout Interno-->
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="it-it"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="it-it"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="it-it"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js skin" lang="it-it">
<!--<![endif]-->

<head>
    <!-- LayoutInterno -->
    <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
    <script type="text/javascript" async=true>
        (function () {
            var host = window.location.hostname;
            var element = document.createElement('script');
            var firstScript = document.getElementsByTagName('script')[0];
            var url = 'https://quantcast.mgr.consensu.org'
                .concat('/choice/', 'Z3sQVQNy9sAbB', '/', host, '/choice.js')
            var uspTries = 0;
            var uspTriesLimit = 3;
            element.async = true;
            element.type = 'text/javascript';
            element.src = url;

            firstScript.parentNode.insertBefore(element, firstScript);

            function makeStub() {
                var TCF_LOCATOR_NAME = '__tcfapiLocator';
                var queue = [];
                var win = window;
                var cmpFrame;

                function addFrame() {
                    var doc = win.document;
                    var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

                    if (!otherCMP) {
                        if (doc.body) {
                            var iframe = doc.createElement('iframe');

                            iframe.style.cssText = 'display:none';
                            iframe.name = TCF_LOCATOR_NAME;
                            doc.body.appendChild(iframe);
                        } else {
                            setTimeout(addFrame, 5);
                        }
                    }
                    return !otherCMP;
                }

                function tcfAPIHandler() {
                    var gdprApplies;
                    var args = arguments;

                    if (!args.length) {
                        return queue;
                    } else if (args[0] === 'setGdprApplies') {
                        if (
                            args.length > 3 &&
                            args[2] === 2 &&
                            typeof args[3] === 'boolean'
                        ) {
                            gdprApplies = args[3];
                            if (typeof args[2] === 'function') {
                                args[2]('set', true);
                            }
                        }
                    } else if (args[0] === 'ping') {
                        var retr = {
                            gdprApplies: gdprApplies,
                            cmpLoaded: false,
                            cmpStatus: 'stub'
                        };

                        if (typeof args[2] === 'function') {
                            args[2](retr);
                        }
                    } else {
                        queue.push(args);
                    }
                }

                function postMessageEventHandler(event) {
                    var msgIsString = typeof event.data === 'string';
                    var json = {};

                    try {
                        if (msgIsString) {
                            json = JSON.parse(event.data);
                        } else {
                            json = event.data;
                        }
                    } catch (ignore) { }

                    var payload = json.__tcfapiCall;

                    if (payload) {
                        window.__tcfapi(
                            payload.command,
                            payload.version,
                            function (retValue, success) {
                                var returnMsg = {
                                    __tcfapiReturn: {
                                        returnValue: retValue,
                                        success: success,
                                        callId: payload.callId
                                    }
                                };
                                if (msgIsString) {
                                    returnMsg = JSON.stringify(returnMsg);
                                }
                                event.source.postMessage(returnMsg, '*');
                            },
                            payload.parameter
                        );
                    }
                }

                while (win) {
                    try {
                        if (win.frames[TCF_LOCATOR_NAME]) {
                            cmpFrame = win;
                            break;
                        }
                    } catch (ignore) { }

                    if (win === window.top) {
                        break;
                    }
                    win = win.parent;
                }
                if (!cmpFrame) {
                    addFrame();
                    win.__tcfapi = tcfAPIHandler;
                    win.addEventListener('message', postMessageEventHandler, false);
                }
            };

            makeStub();

            var uspStubFunction = function () {
                var arg = arguments;
                if (typeof window.__uspapi !== uspStubFunction) {
                    setTimeout(function () {
                        if (typeof window.__uspapi !== 'undefined') {
                            window.__uspapi.apply(window.__uspapi, arg);
                        }
                    }, 500);
                }
            };

            var checkIfUspIsReady = function () {
                uspTries++;
                if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
                    console.warn('USP is not accessible');
                } else {
                    clearInterval(uspInterval);
                }
            };

            if (typeof window.__uspapi === 'undefined') {
                window.__uspapi = uspStubFunction;
                var uspInterval = setInterval(checkIfUspIsReady, 6000);
            }
        })();
    </script>
    <!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->

    <!-- Quantcast Tag -->
    <script type="text/javascript">
        var _qevents = _qevents || [];

        (function () {
            var elem = document.createElement('script');
            elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
            elem.async = true;
            elem.type = "text/javascript";
            var scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
        })();

        _qevents.push({
            qacct: "p-Z3sQVQNy9sAbB",
            uid: "a.clemente@quadronica.com"
        });
    </script>

    <noscript>
        <div style="display:none;">
            <img src="//pixel.quantserve.com/pixel/p-Z3sQVQNy9sAbB.gif" border="0" height="1" width="1"
                alt="Quantcast" />
        </div>
    </noscript>
    <!-- End Quantcast tag -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- Disable Zooming (Chrome and Firefox)
        Chrome and Firefox on Android will not wait for 300ms if zooming has been disabled using the following viewport setting -->
    <meta name='viewport'
        content='width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1.0, user-scalable=0' />
    <title>Rose Fantacalcio</title>
    <link rel="shortcut icon" href="https://leghe.fantacalcio.it/favicon.png" />
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/swiper.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/ani.css?_v=191020201000" rel="stylesheet">
    <link rel="shortcut icon" href="https://leghe.fantacalcio.it/favicon.png" />
    <link rel="apple-touch-icon" sizes="57x57"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180"
        href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-180x180.png">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fg-icons.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fg-leghe-icons.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fc-icons.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap-material-design.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/ripples.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/jquery-ui.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/main.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/helpers.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/medium-editor.css" rel="stylesheet">

    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/widgets.css?_v=191020201000" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/leagues.min.css?_v=191020201000" rel="stylesheet">
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/vanilla.js?_v=191020201000"></script>
    <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
    <script>
        var data = {

            name: __.ph("Lega Bobica"),
            logo: "147953_06139095.png",
            setup: { "info_principali": true, "tre_confermati": true, "regolamento": true, "almeno_competizione": true, "mercato_creato": true },
            //setup: {regolamento:false},
            foundationYear: "2005",
            logoMeta: null,
            alias: "lega-bobica",
            type: "2",
            open: "0",
            competitionId: "197054",
            currentCompetition: { "id": 197054, "id_lega": 147953, "nome": "Lega Bobica", "tipo": 1, "giornata_inizio": 3, "giornata_fine": 37, "schedina": false, "vincitore": "", "eliminata": false, "state": 1603185587569, "squadre": [{ "id": 583620, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 1, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_583620" }, { "id": 606740, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 2, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_606740" }, { "id": 611980, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 3, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_611980" }, { "id": 637650, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 4, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_637650" }, { "id": 649234, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 5, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_649234" }, { "id": 671529, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 6, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_671529" }, { "id": 3129894, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 7, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_3129894" }, { "id": 6020064, "g": 0, "p": 0.0, "s_p": 0.00, "pos": 8, "pen": 0.0, "b": 0.0, "v": 0, "n": 0, "pr": 0, "gf": 0, "gs": 0, "d_r": 0, "gr": "A", "pk": "197054_6020064" }] },
            inCompetition: __.pb("True"),
            competitionStartSerieA: "3",
            competitionEndSerieA: "37",
            president: "",
            admins: [{ "id": 3597, "tipo": 0, "nome": "Daniele Vadruccio" }, { "id": 15718, "tipo": 1, "nome": "Claudio Pasquino" }, { "id": 153941, "tipo": 1, "nome": "Pippo Fuina" }, { "id": 1079249, "tipo": 1, "nome": "Marco Ciscutti" }],
            live: false,
            countdown: Number("0"),
            //countdown: 86405,
            //countdown: 10,
            //countdown: 96405,
            //countdown: 18280000,
            role: "0",
            coachType: "0",
            mainCoach: "Daniele",
            assistantCoach: "",
            currentTurn: "5",
            section: "rose",
            smallShirt: "606740_07737074.png",
            shirt: "s_606740_07737074.png",
            shirtMeta: { "forma": "18", "motivo": "00", "simbolo": "00", "colori": ["#ffffff", "#c63e4b", "#fffe37"], "sponsor": "04", "sponsor_id": 5, "badge": ["07"] },
            crest: "606740_05084942.png",
            crestMeta: { "forma": "00", "motivo": "00", "simbolo": "00", "colori": ["#ffffff"], "sponsor": "00", "sponsor_id": 0, "badge": ["00"] },
            winner: "",
            progress: "1;1;1",
            teamName: "La Decima Crociata",
            teamId: "606740"

        };
        __.s('li', data);

    </script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/settings.js?_v=191020201000"></script>
</head>

<body Class="fg  leagues guest internal-layout" data-setup="0">
    <!-- PAGE SETUP 0 -->
    <ins data-revive-zoneid="8296" data-revive-id="6609ba8ff88606794e22ff360400bcea"></ins>
    <script async src="//adx.4strokemedia.com/www/delivery/asyncjs.php"></script>
    <div id="toastStack" class="toast-stack">
        <!-- TOASTS STACK -->
        <script id="toastTemplate" type="text/x-handlebars-template">
            <div class="toast alert alert-{{type}} raised" data-id="{{id}}">
                <!--HANDLEBARS TEMPLATE-->
                <button type="button" class="close">×</button>
                <h4 class="toast-title">{{{title}}}</h4>
                <p class="toast-body">{{{body}}}</p>
            </div>
        </script>
    </div>
    <div id="wordSearcher" Class="raised-2" style="display:none">
        <div Class="input-group">
            <input type="text" Class="form-control" placeholder="Cerca..." spellcheck="false">
            <span id="searchMatches"></span>
            <div Class="input-group-btn">
                <Button type="button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.findNext()"><i
                        Class="icon ico-arrow-down"></i></button>
                <Button type="button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.findPrev()"><i
                        Class="icon ico-arrow-up"></i></button>
                <Button type="button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.closeSearch()"><i
                        Class="icon ico-close"></i></button>

            </div><!-- /btn-group -->
        </div><!-- /input-group -->
    </div>

    <div id="notificationsPopup" class="notices-popup hidden">

        <script class="handlebar-notices" type="text/x-handlebars-template">
                     {{#if notices}}
                     <div class="notification-popup-header padding clearfix">
                         <a class="pull-right" onclick="Notifications.setAllAsRead()">Segna tutti come letti</a>
                     </div>
                     {{/if}}

                     <div class="list-group list-group-documents no-margin">

                         {{#each notices}}
                         <div class="list-group-item list-group-item-document list-group-item-notice {{#if read}}read{{/if}}" data-id="{{id}}" data-type="{{type}}"
                              onclick="Notifications.noticeAction( '{{id}}' )">
                             <div class="row-picture">
                                 <img class="icon" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/{{icon}}" alt="icon">
                             </div>
                             <div class="row-content">
                                 <h2 class="list-group-item-heading _ellipsis">{{label}}</h2>
                                 <h5 class="list-group-item-text">{{date}}</h5>
                             </div>
                         </div>
                         {{/each}}

                         <div class="on-empty-list hidden-loading">
                                         <div class="alert alert-advice raised alert-squared full-width row-normalized flex flex-center">
                <p class="text-left">Nessun avviso presente.</p>
                <img Class="alert-img" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png" />
            </div>

                         </div>
                     </div>
                 </script>
        <div class="notification-popup-footer padding">
            <a href="https://leghe.fantacalcio.it/lega-bobica/centro-avvisi">Vai al centro avvisi</a>
        </div>
    </div>


    <!-- SETUP 0 -->
    <!-- LEGA 147953 -->


    <div class="viewport _desktop-smart-scrollbar" data-setup="0">
        <main class="main-container">
            <!-- MAIN CONTAINER -->

            <!-- COMPETITION ID: 197054 -->
            <!-- COMPETITION COUNT: 6 -->
            <div class="bubble-menu competition-container competition-header dashboard" data-len="6" tabindex="0">
                <div class="competition-current dropdown slide-down" data-id="197054" id="competitionDropdown">

                    <a href="https://leghe.fantacalcio.it/lega-bobica/home" class="competition-icon competition-icon-1">
                        <span class="not-in-competition-alert hidden-is-in-competition" data-toggle="tooltip"
                            title="Non partecipi a questa competizione">!</span>
                    </a>
                    <div class="dropdown-label" data-toggle="dropdown">
                        <div class="competition-current-name clamp-3">Lega Bobica</div>
                    </div>
                </div>
            </div>
            <div class="_row padding flex">
                <!-- SETUP MENU -->
                <!-- MAIN CONTENTS -->
                <div
                    class="main-content col-xs-12 col-sm-12 col-md-8 col-lg-8 flex-col flex-start no-padding wait-css-loading">



                    <script
                        id="cio87a"> __.s('lt', __.dp('eyJzdGF0ZSI6MTYwMzMxMDQ0MDYwNywic3VjY2VzcyI6dHJ1ZSwiZGF0YSI6W3siaWQiOjU4MzYyMCwibm9tZSI6IkREUCIsImxvZ28iOiI1ODM2MjBfMDgwMjY5NDUucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl19LCJtYWdsaWEiOiI1ODM2MjBfMDU3OTc5ODEucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzU4MzYyMF8wNTc5Nzk4MS5wbmciLCJtYWdsaWFfbWV0YSI6eyJmb3JtYSI6IjUwIiwibW90aXZvIjoiIiwic2ltYm9sbyI6IiIsImNvbG9yaSI6WyIjRkZGRkZGIiwiIzEzOTI0NSIsIiNFRDFDMjMiXSwic3BvbnNvciI6IjAxIiwic3BvbnNvcl9pZCI6OCwiYmFkZ2UiOlsiMDIiLCIwNyJdfSwiY2FsY2lhdG9yaSI6IjE5MzQ7MjE2MDsyNzc1OzIwNzc7NDk1OzMwOTsyMTY3OzMyMjsyMzY7Mjg3OzQwNzs2NDU7NDQxOzY5NTsyMzA5OzIyOTY7Mzg3OzIyODg7MTIzOzMzMjs1NTQ7Mjc0NjsyMTY5OzEzMzs0NDE1OzI3NDE7NDQyMzs2NDM7MjM4OzI2NTsyMTk1IiwiY29zdGkiOiI1MjsyOzE5OzExOzE7NTA7MTI7NDM7MTs4OzI7ODA7MTcwOzE2OzEyOzE1OzE7Nzs1OzE5OzU7MTszOzM7MTszOzY7MTsxOzI7NyIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI4LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjo0NiwiY3JlZGl0aV9wdWJibGljaSI6NDYsImFsbCI6W3siaWQiOjE1NzE4LCJ0aXBvIjowLCJub3RhX2xlZ2FsZSI6dHJ1ZSwibm9tZSI6IkFsYmFubyAgUm9taW5hICBMZWNjaXNvIiwicGsiOiI1ODM2MjBfMTU3MTgifV19LHsiaWQiOjYwNjc0MCwibm9tZSI6IkxhIERlY2ltYSBDcm9jaWF0YSIsImxvZ28iOiI2MDY3NDBfMDUwODQ5NDIucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl19LCJtYWdsaWEiOiI2MDY3NDBfMDc3MzcwNzQucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzYwNjc0MF8wNzczNzA3NC5wbmciLCJtYWdsaWFfbWV0YSI6eyJmb3JtYSI6IjE4IiwibW90aXZvIjoiMDAiLCJzaW1ib2xvIjoiMDAiLCJjb2xvcmkiOlsiI2ZmZmZmZiIsIiNjNjNlNGIiLCIjZmZmZTM3Il0sInNwb25zb3IiOiIwNCIsInNwb25zb3JfaWQiOjUsImJhZGdlIjpbIjA3Il19LCJjYWxjaWF0b3JpIjoiMjg4OzE4NjsyMDYxOzU4MTs0NzQ7NDM3Nzs0ODg0OzIzMzU7MjQ2ODs2NDc7MzEzOzIwMDI7NDA5OzU3Mjs4Mjc7NDY3OzI4Mzk7NTQ4OzIyNjM7Mjg0NTsxODY5OzQ5NDY7MzI3OzI4MjU7Mjc1ODsyMzc5OzQzNzQ7MTg0OzQyNDU7MjM5MTsyNjM5IiwiY29zdGkiOiIxMDsxMTsxOzE0OzExOzg7MTA7OTsxOzE0Njs3Nzs3MDsyNzs1OzIwOzI5OzY7MTE7MTk7MDsxOzE7MTsxOzE7MjsxOzI7MTQ7ODsyMCIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI4LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjoxMiwiY3JlZGl0aV9wdWJibGljaSI6MTIsImFsbCI6W3siaWQiOjM1OTcsInRpcG8iOjAsIm5vdGFfbGVnYWxlIjp0cnVlLCJub21lIjoiRGFuaWVsZSIsInBrIjoiNjA2NzQwXzM1OTcifV19LHsiaWQiOjYxMTk4MCwibm9tZSI6IkFucyBSZWkgU3BvcnQgVmVyZWluIiwibG9nbyI6IjYxMTk4MF8wOTg4NDE5LnBuZyIsImxvZ29fbWV0YSI6eyJmb3JtYSI6IjA3IiwibW90aXZvIjoiMDIiLCJzaW1ib2xvIjoiIiwiY29sb3JpIjpbIiNGRkZGRkYiLCIjQzYzRTRCIiwiIzUzNTk2MiJdLCJzcG9uc29yIjoiMF8wMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbXX0sIm1hZ2xpYSI6IjYxMTk4MF8wMzg2NTk3My5wbmciLCJtYWdsaWFfc3BvbnNvciI6InNfNjExOTgwXzAzODY1OTczLnBuZyIsIm1hZ2xpYV9tZXRhIjp7ImZvcm1hIjoiMDEiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIiwiI2M2M2U0YiIsIiNlZDFjMjMiXSwic3BvbnNvciI6IjAzIiwic3BvbnNvcl9pZCI6MywiYmFkZ2UiOltdfSwiY2FsY2lhdG9yaSI6IjI1MDsyODE2OzIzMTU7Mjc2NDs2MDg7NTMxOzIwODU7NTMwOzIxMzA7MTk5NTs0NDQ5OzIyOzIxOTI7MjYzMzs1MDk7MjE2MzsyODE4OzQ5NTc7MTQyOzQzMzE7MjU0OzQ0MTI7MzU3OzQ1MDE7NDQwNDszMDI7MTkzOTs1MDEyIiwiY29zdGkiOiI2MTsxMTs1OzIyOzE5MDsxMTs4NTszNzs0MDsxNTsxMTsyMjs0OzY7MjsxMDs1OzE7MTsxMjsxOzE7MTsxOzE7MTsxOzIiLCJyb3NhX2NvbXBsZXRhIjp0cnVlLCJydW9saSI6eyJwIjozLCJkIjoyNSwiYyI6MCwiYSI6MH0sImNvbXBsZXRhbWVudG8iOiIxOzE7MSIsImNyZWRpdGlfaW5pemlhbGkiOjUwMCwiY3JlZGl0aSI6NTEsImNyZWRpdGlfcHViYmxpY2kiOjUxLCJhbGwiOlt7ImlkIjoxMDU4NzcxLCJ0aXBvIjowLCJub3RhX2xlZ2FsZSI6dHJ1ZSwibm9tZSI6InRhc3NpdXMxOTA4IiwicGsiOiI2MTE5ODBfMTA1ODc3MSJ9XX0seyJpZCI6NjM3NjUwLCJub21lIjoiMyBNT09OIiwibG9nbyI6IjYzNzY1MF8wMDMwNTQ0ODgucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl19LCJtYWdsaWEiOiI2Mzc2NTBfMDE2MTAyNDIucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzYzNzY1MF8wMTYxMDI0Mi5wbmciLCJtYWdsaWFfbWV0YSI6eyJmb3JtYSI6IjE0IiwibW90aXZvIjoiMDAiLCJzaW1ib2xvIjoiMDAiLCJjb2xvcmkiOlsiIzhjYzYzZiIsIiNGRkZGRkYiLCIjMTM5MjQ1Il0sInNwb25zb3IiOiIwMSIsInNwb25zb3JfaWQiOjYsImJhZGdlIjpbXX0sImNhbGNpYXRvcmkiOiIxODQ3OzQzMzI7NDQ5NTsxODUyOzE1Mjs0NTIyOzI2MjU7Mjc2NjsyNDcyOzUwNzsyNDc7MjUzMTs0MTYwOzYxMDsyMTcyOzI2OTI7NDk1ODs3NjE7NDsyMjExOzM5NDs0OTg3OzQ5NzM7NDcyNTs0OTcwOzI2MTsyMjgwOzQ5MzQ7NDQ2MTs0NTE1OzUyOTMiLCJjb3N0aSI6IjE7MjsxNDs0OzE2OzEwOzI7NDsxOTs1MjsxMzsyNTE7OTY7MTU7ODsxOzU7MTsyOzQ7MTsxOzY7MTsxOzE7MTsxOzE7MTs2Iiwicm9zYV9jb21wbGV0YSI6dHJ1ZSwicnVvbGkiOnsicCI6NCwiZCI6MjcsImMiOjAsImEiOjB9LCJjb21wbGV0YW1lbnRvIjoiMTsxOzEiLCJjcmVkaXRpX2luaXppYWxpIjo1MDAsImNyZWRpdGkiOjQ1LCJjcmVkaXRpX3B1YmJsaWNpIjo0NSwiYWxsIjpbeyJpZCI6NTI0MDgwLCJ0aXBvIjowLCJub3RhX2xlZ2FsZSI6dHJ1ZSwibm9tZSI6IlNBU0FOSUsiLCJwayI6IjYzNzY1MF81MjQwODAifV19LHsiaWQiOjY0OTIzNCwibm9tZSI6IkNzIENhbm5hYmlzIFN0cmVldCIsImxvZ28iOiI2NDkyMzRfMDg0OTUzNjkucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl19LCJtYWdsaWEiOiI2NDkyMzRfMDU4MTg3NjMucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzY0OTIzNF8wNTgxODc2My5wbmciLCJtYWdsaWFfbWV0YSI6eyJmb3JtYSI6IjM5IiwibW90aXZvIjoiMDAiLCJzaW1ib2xvIjoiMDAiLCJjb2xvcmkiOlsiI0ZGRkZGRiIsIiM5MURFRkYiLCIjRURFRkYxIl0sInNwb25zb3IiOiIwMSIsInNwb25zb3JfaWQiOjgsImJhZGdlIjpbIjAzIiwiMDEiLCIwNSJdfSwiY2FsY2lhdG9yaSI6IjE5MTc7NDQxOTs0MjkyOzIxMjA7NDYwOzQ1OTs2NDQ7MzY3OzI0MDk7MTg3NDsyNTMwOzQ0Nzk7MjY7MTc3OzU2ODs0Mjg1OzIyODc7Nzg4OzIyNjs3OTg7MjE3OTs0NTIxOzIyMDk7NDUxOTs3NDs0OTkwOzQ0MDs1NTA7NDkyMyIsImNvc3RpIjoiMTY7Njs1OzEwOzI5OzM2Ozc7MTU7MTk7Mzs3NjsyOzE0MTs0MDsyNDsxNjs1Ozg7MTI7Nzs2Ozg7NDs1OzU7MTs1OzE7MSIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI2LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjo1MCwiY3JlZGl0aV9wdWJibGljaSI6NTAsImFsbCI6W3siaWQiOjEwNzkyNDksInRpcG8iOjAsIm5vdGFfbGVnYWxlIjp0cnVlLCJub21lIjoiY2lza3VydDg3IiwicGsiOiI2NDkyMzRfMTA3OTI0OSJ9XX0seyJpZCI6NjcxNTI5LCJub21lIjoiT3p5bWFuZGlhcyIsImxvZ28iOiI2NzE1MjlfMDgwNzk3ODYucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl19LCJtYWdsaWEiOiI2NzE1MjlfMDMzODUyNDkucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzY3MTUyOV8wMzM4NTI0OS5wbmciLCJtYWdsaWFfbWV0YSI6eyJmb3JtYSI6IjUxIiwibW90aXZvIjoiIiwic2ltYm9sbyI6IiIsImNvbG9yaSI6WyIjRkZFQTgwIiwiIzMzMzMzMyIsIiNGRkZGRkYiXSwic3BvbnNvciI6IjAyIiwic3BvbnNvcl9pZCI6NSwiYmFkZ2UiOlsiMDUiXX0sImNhbGNpYXRvcmkiOiIxNTk7MjUzOzMyOTs0MzA3OzIxODE7MTg1MDsyMTY2OzE4MTs0ODg2OzM3NjsyNzE5OzI2MTA7MzkyOzI0NzU7NDUzOzUwMDE7NDgyNTsyNTU2OzY2MjsxOTg3OzI4Mjs1NDY7MjE4ODs2MzI7NDg3OzkwOzc5MDs1MDU7Nzc5OzIwNzY7NDI0MiIsImNvc3RpIjoiMTs1OzE7NTs4OzE4OzE7MTs3OzM7MTY7MjQwOzM1OzMwOzU5OzEwOzk7NTsxNzsxOzE7MTsyOzc7MTsxOzE7NDs1Ozc7NSIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI4LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjo1NCwiY3JlZGl0aV9wdWJibGljaSI6NTQsImFsbCI6W3siaWQiOjE1Mzk0MSwidGlwbyI6MCwibm90YV9sZWdhbGUiOnRydWUsIm5vbWUiOiJDYWxhdmVyYSIsInBrIjoiNjcxNTI5XzE1Mzk0MSJ9XX0seyJpZCI6NjgzNzYzLCJub21lIjoiSSBsb3ZlIHNhbHZpbmkiLCJsb2dvIjoiNjgzNzYzXzA4MTc4MzQ4LnBuZyIsImxvZ29fbWV0YSI6eyJmb3JtYSI6IjA3IiwibW90aXZvIjoiMDEiLCJzaW1ib2xvIjoiMjEiLCJjb2xvcmkiOlsiI2M2M2U0YiIsIiNmZmZmZmYiLCIjNzcyNjJkIl0sInNwb25zb3IiOiIwXzAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOltdfSwibWFnbGlhIjoibm9fbWFnbGlhMS5wbmciLCJtYWdsaWFfc3BvbnNvciI6IiIsIm1hZ2xpYV9tZXRhIjp7ImZvcm1hIjoiNDYiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjMDAwMDAwIiwiI2M2M2U0YiIsIiNlZGVmZjEiXSwic3BvbnNvciI6IiIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbXX0sImNhbGNpYXRvcmkiOiIiLCJjb3N0aSI6IiIsInJvc2FfY29tcGxldGEiOmZhbHNlLCJydW9saSI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTswIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjowLCJjcmVkaXRpX3B1YmJsaWNpIjowLCJhbGwiOlt7ImlkIjo4OTI5MiwidGlwbyI6MCwibm90YV9sZWdhbGUiOnRydWUsIm5vbWUiOiJzYWRvODQiLCJwayI6IjY4Mzc2M184OTI5MiJ9XX0seyJpZCI6Njk5NDM2LCJub21lIjoiSWwgRGlyaXR0byBEaSBSaXNjYXR0byAiLCJsb2dvIjoibm9fbG9nbzEucG5nIiwibG9nb19tZXRhIjp7ImZvcm1hIjoiMDYiLCJtb3Rpdm8iOiIwMSIsInNpbWJvbG8iOiIxNyIsImNvbG9yaSI6WyIjMDAwMDAwIiwiI2M2M2U0YiIsIiNkODQ0NTIiXSwic3BvbnNvciI6IjAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOltdfSwibWFnbGlhIjoibm9fbWFnbGlhMS5wbmciLCJtYWdsaWFfc3BvbnNvciI6IiIsIm1hZ2xpYV9tZXRhIjp7ImZvcm1hIjoiNDYiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjMDAwMDAwIiwiI2M2M2U0YiIsIiNlZGVmZjEiXSwic3BvbnNvciI6IiIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbXX0sImNhbGNpYXRvcmkiOiIiLCJjb3N0aSI6IiIsInJvc2FfY29tcGxldGEiOmZhbHNlLCJydW9saSI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MDswIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjowLCJjcmVkaXRpX3B1YmJsaWNpIjowLCJhbGwiOlt7ImlkIjozMzIyNzcsInRpcG8iOjAsIm5vdGFfbGVnYWxlIjp0cnVlLCJub21lIjoibWF0dGlhbTg0IiwicGsiOiI2OTk0MzZfMzMyMjc3In1dfSx7ImlkIjozMTI5ODk0LCJub21lIjoiU2NlbWkgZSBCdXNjZW1pIiwibG9nbyI6IjMxMjk4OTRfMDgwODE1Mi5wbmciLCJsb2dvX21ldGEiOnsiZm9ybWEiOiIwMCIsIm1vdGl2byI6IjAwIiwic2ltYm9sbyI6IjAwIiwiY29sb3JpIjpbIiNmZmZmZmYiXSwic3BvbnNvciI6IjAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOlsiMDAiXX0sIm1hZ2xpYSI6IjMxMjk4OTRfMDQxODM2MTMucG5nIiwibWFnbGlhX3Nwb25zb3IiOiJzXzMxMjk4OTRfMDQxODM2MTMucG5nIiwibWFnbGlhX21ldGEiOnsiZm9ybWEiOiIyMiIsIm1vdGl2byI6IjAwIiwic2ltYm9sbyI6IjAwIiwiY29sb3JpIjpbIiMyZDg5ZTUiLCIjZmZmZTM3IiwiI2ZmZmUzNyJdLCJzcG9uc29yIjoiMDMiLCJzcG9uc29yX2lkIjo2LCJiYWRnZSI6W119LCJjYWxjaWF0b3JpIjoiMjE3ODsyNzA3OzQ0MjI7Nzg3OzI4MzM7NDQyNzsyMzQ7MTk3ODsyODE5OzI4MzI7Nzg1OzQ0Mjg7NTEzOzI3NTk7MjIxNTsyNzkyOzQ1MTc7NDg5MDs1MjY7MjE4OzI1MjsyNTI1OzQ4ODg7MTg5NTs1MzAwOzQ5OTQ7NTg7NDk3ODsyMjg0OzIwMDg7MjM1NyIsImNvc3RpIjoiNDsxMjs0OzE7Nzs5OzEwOzExOzc7OTsyNjE7Mzg7MzU7MjE7NDE7MTE7MjE7NDs0OzE7MzsxOzE7MzsyOzE7MTsxOzE7MTsxMCIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI4LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjo0MiwiY3JlZGl0aV9wdWJibGljaSI6NDIsImFsbCI6W3siaWQiOjY3Njc5MCwidGlwbyI6MCwibm90YV9sZWdhbGUiOnRydWUsIm5vbWUiOiJJdmFuIiwicGsiOiIzMTI5ODk0XzY3Njc5MCJ9XX0seyJpZCI6NDYwNjUzMCwibm9tZSI6IklMIERJUklUVE8gREkgUklTQ0FUVE8gIiwibG9nbyI6IjQ2MDY1MzBfMDA4MDU5Mzg4LnBuZyIsImxvZ29fbWV0YSI6eyJmb3JtYSI6IjAxIiwibW90aXZvIjoiMDIiLCJzaW1ib2xvIjoiMTkiLCJjb2xvcmkiOlsiIzZGQzNFMyIsIiMzNUJCOUIiLCIjNEJCNERDIl0sInNwb25zb3IiOiIiLCJzcG9uc29yX2lkIjotMSwiYmFkZ2UiOltdfSwibWFnbGlhIjoibm9fbWFnbGlhMS5wbmciLCJtYWdsaWFfc3BvbnNvciI6IiIsIm1hZ2xpYV9tZXRhIjp7ImZvcm1hIjoiNDYiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjMDAwMDAwIiwiI2M2M2U0YiIsIiNlZGVmZjEiXSwic3BvbnNvciI6IiIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbXX0sImNhbGNpYXRvcmkiOiIiLCJjb3N0aSI6IiIsInJvc2FfY29tcGxldGEiOmZhbHNlLCJydW9saSI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MTswIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjowLCJjcmVkaXRpX3B1YmJsaWNpIjowLCJhbGwiOlt7ImlkIjo0NjAyMzQ2LCJ0aXBvIjowLCJub3RhX2xlZ2FsZSI6dHJ1ZSwibm9tZSI6Ikx1aWdpQ2Fwcml1bG8iLCJwayI6IjQ2MDY1MzBfNDYwMjM0NiJ9XX0seyJpZCI6NjAyMDA2NCwibm9tZSI6IkRvY2tsYW5kcyBVbml0ZWQgRm9vdGJhbGwgQ2x1YiIsImxvZ28iOiJub19sb2dvMS5wbmciLCJsb2dvX21ldGEiOnsiZm9ybWEiOiIwNiIsIm1vdGl2byI6IjAxIiwic2ltYm9sbyI6IjE3IiwiY29sb3JpIjpbIiMwMDAwMDAiLCIjYzYzZTRiIiwiI2Q4NDQ1MiJdLCJzcG9uc29yIjoiMDAiLCJzcG9uc29yX2lkIjowLCJiYWRnZSI6W119LCJtYWdsaWEiOiI2MDIwMDY0XzA1MTQ0ODc4LnBuZyIsIm1hZ2xpYV9zcG9uc29yIjoic182MDIwMDY0XzA1MTQ0ODc4LnBuZyIsIm1hZ2xpYV9tZXRhIjp7ImZvcm1hIjoiMDIiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjOWUwYjVkIiwiIzBhMjNmYiIsIiNGRkZGRkYiXSwic3BvbnNvciI6IjAxIiwic3BvbnNvcl9pZCI6NiwiYmFkZ2UiOlsiMDUiXX0sImNhbGNpYXRvcmkiOiI3MzsyODY7MjAxMTs0NTE0OzIxOTQ7MzUwOzQ2NjE7NDEwOzIxNjQ7MjIxNDsyNDE0OzI1Mjk7MTg3MDsxOTk2OzE2MDsyNzYyOzcwNDsyNDg5OzY5NzsyNTcyOzI3ODQ7NTM2OzQyMzc7NDE7NDUxMDsyODsyMTI0OzgwMTs0NDI2OzQ3MiIsImNvc3RpIjoiMzsyMTszOzc7MTs0Nzs2Njs3MzszMDsyNDs0NTszNzszMDsyMzsxOzIzOzY7MTM7MjM7MTE7Mjs1OzY7Mjs1OzQ7MTsxOzE7MSIsInJvc2FfY29tcGxldGEiOnRydWUsInJ1b2xpIjp7InAiOjMsImQiOjI3LCJjIjowLCJhIjowfSwiY29tcGxldGFtZW50byI6IjE7MDsxIiwiY3JlZGl0aV9pbml6aWFsaSI6NTAwLCJjcmVkaXRpIjo1MCwiY3JlZGl0aV9wdWJibGljaSI6NTAsImFsbCI6W3siaWQiOjMxNTYxMjMsInRpcG8iOjAsIm5vdGFfbGVnYWxlIjp0cnVlLCJub21lIjoibWlzdGVyIEpNIiwicGsiOiI2MDIwMDY0XzMxNTYxMjMifV19XSwiZXJyb3JfbXNncyI6bnVsbCwidG9rZW4iOiIiLCJ1cGRhdGUiOnRydWV9')); __.X('cio87a');</script>
                    <script
                        id="gkiop12"> __.s('tmp', __.d('NTgzNjIwOzYwNjc0MDs2MTE5ODA7NjM3NjUwOzY0OTIzNDs2NzE1Mjk7MzEyOTg5NDs2MDIwMDY0', true) + "|0|1603310440607|False"); __.X('gkiop12');</script>

                    <ol class="breadcrumb">
                        <li><a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco">Area Gioco</a></li>
                        <li><a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco/squadre">Squadre</a></li>
                        <li class="active">Rose</li>
                    </ol>
                    <hr class="solid light" />
                    <br />


                    <div class="tab-content transfers-tab-content no-border">
                        <div role="tabpanel"
                            class="tab-pane active tab-rosters hidden-filtered-no-competitions visible-initialized">
                            <br />
                            <h4 class="has-select clearfix public-heading">
                                Rose <small class="visible-filtered"></small>
                                <script class="handlebar-team-filter" type="text/x-handlebars-template"
                                    data-wrap-unique-uid="team-filter">
                <span>
                    <select id="teamFilter" class="selectpicker show-tick pull-right"
                            {{#unless mobile}} multiple {{/unless}}
                            data-mobile="{{mobile}}"
                            title="Tutte le squadre" data-actions-box="true" data-icon-base="icon"
                            data-tick-icon="fg-check" data-show-tick="true"
                            data-select-all-text="TUTTE" data-deselect-all-text="NESSUNA"
                            data-none-results-text="Nessuna corrispondenza per '{0}'"
                            data-count-selected-Text="{0} squadre selezionate"
                            data-selected-text-format()="count"
                            data-live-search="{{#if (and (not mobile) (gt options.length 10))}}true{{else}}false{{/if}}"
                            data-size="10"
                            data-container="body">
                        {{#each options}}
                        {{#unless disabled}}
                        <option value="{{id}}"> {{nome}}</option>
                        {{/unless}}
                        {{/each}}
                    </select>
                </span>
            </script>
                            </h4>
                            <ul class="list-rosters" data-lazy-load=".list-rosters-item">
    
                                <li class="list-rosters-item raised-2" data-id="583620"
                                    data-display-none-after-hide="hidden">
                                    <div class="no-padding flex-row">
                                        <div class="media team-header team-header-sm flex-item-fill relative">
                                            <div class="media-left">
                                                <a href="#" class="team-crest"><img class="media-object crest circle"
                                                        src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra/583620_08026945.png"
                                                        onerror="handleImageError(this, Settings.missingLogoSrc)">
                                                </a>
                                                <a href="#" class="team-shirt">
                                                    <img class="media-object shirt circle"
                                                        src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta/583620_05797981.png"
                                                        onerror="handleImageError(this, Settings.missingShirtSrc)">
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h4 class="media-heading">La Decima Crociata</h4>
                                                <h5>Daniele</h5>
                                            </div>
                                            <a class="left-heading-link btn btn-clear"
                                                href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=583620">Lista
                                                Movimenti</a>
                                        </div>
                                        <div class="team-main-info"><small>Crediti residui</small>53
                                            <i class="icon fg-fm"></i>
                                        </div>
                                    </div>
                                    <table class="smart-table table-striped fixed table no-margin has-subheader"
                                        id="rosterTable">
                                        <thead>
                                            <tr class="subheader">
                                                <th data-key="role"
                                                    class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden">
                                                    <span></span>
                                                </th>
                                                <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4">
                                                    <span>Calciatore</span>
                                                </th>
                                                <th data-key="nation"
                                                    class="sortable cell-text cell-primary x0 euro-x1">
                                                    <span></span>
                                                </th>
                                                <th data-key="team"
                                                    class="sortable cell-text cell-primary x4 euro-x3 smart-x2">
                                                    <span>Squadra</span>
                                                </th>
                                                <th data-key="price"
                                                    class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                                                    <span data-toggle="tooltip"
                                                        title="Quotazione d'acquisto">Q.acq.</span>
                                                </th>
                                                <th data-key="cost"
                                                    class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                                                    <span data-toggle="tooltip" title="Anni residui">Anni</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
