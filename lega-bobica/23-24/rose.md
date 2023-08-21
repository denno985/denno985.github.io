
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
    
                                <li class="no-current-competition-team">




                                </li>
                            </ul>
                        </div>
                    </div>




                </div>




        <!-- main--><!-- /main-container -->
    </div>
    <div class="fixed-footer"></div>
    <!-- LOGIN MODAL -->
    <div class="modal fade modal-login" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="close"><i
                            class="icon icon-center fg-close"></i></button>
                    <h4 class="modal-title" id="loginModal"><span class="euro">Euro</span>Leghe <span
                            class="brand-title">Fantacalcio</span></h4>
                </div>
                <div class="modal-body">
                    <div class="text-center _side-padding box-login">
                        <h4 class="hidden-leagues"> Accedi alle tue <span class="euro">Euro</span>Leghe</h4>
                        <h4 class="visible-leagues"> Accedi alla tua <span class="euro">Euro</span>Lega</h4>
                        <div class="visible-leagues league-info">
                            <script class="handlebar-league-info" type="text/x-handlebars-template">
                                        <div class="media league-header">
                                            <div class="media-left">
                                                <a class="circle" href="#">
                                                    <img class="media-object img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega/{{logo}}"
                                                         onerror="handleImageError(this, Settings.missingLogoSrc)">
                                                </a>
                                            </div>
                                            <div class="media-body">
                                                <h4 class="media-heading">{{name}}</h4>
                                                <h5>SUPERADMIN: <strong>{{president}}</strong></h5>
                                            </div>
                                        </div>
                                    </script>
                        </div>
                        <div class="login-with-facebook mb-4">
                            <button type="button" class="btn btn-facebook btn-raised btn-sm login-facebook"><i
                                    class="icon icon-left fg-facebook-logo"></i> Login con facebook</button>
                            <script class="handlebar-server-response" type="text/x-handlebars-template">
                                        {{> server-response}}
                                    </script>
                        </div>
                        <div class="hr"><small>oppure</small></div>
                        <br class="hidden-leagues">
                    </div>
                    <div class="box-modal-login box-login loading-box">
                        <form id="formLogin" name="login">
                            <script id="loginFormTemplate1" class="handlebars-login-form-template"
                                type="text/x-handlebars-template">
                                        <div class="form-group form-group-sm label-static raised no-padding">
                                            <Label class="control-label">Nome Utente</Label>
                                            <input name="username" class="form-control" placeholder="" value="{{username}}" required autocomplete="username">
                                        </div>
                                        <div class="form-group form-group-sm label-static raised no-padding">
                                            <Label class="control-label">Password</Label>
                                            <input name="password" type="password" class="form-control" placeholder="" value="{{password}}" required autocomplete="current-password">
                                            <a class="label-link" href="https://leghe.fantacalcio.it/recupera-password">password dimenticata?</a>
                                        </div>
                                        <button id="buttonLogin" type="submit" class="btn btn-sm btn-primary btn-block btn-raised mb-4">Login</button>
                                    </script>
                            <script class="handlebar-server-response" type="text/x-handlebars-template">
                                        {{> server-response}}
                                    </script>
                        </form>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
            <div class="modal-content hidden-leagues">
                <div class="modal-body">
                    <div class="text-center padding">
                        <h5> Vuoi iniziare un nuovo gioco?</h5>
                        <div class="flex-row mb-2 mt-4">
                            <a href="https://leghe.fantacalcio.it/iscrizione?from=0"
                                class="btn btn-raised btn-block btn-sm btn-orange">CREA UNA <b
                                    class="euro"><br />EURO</b>LEGA</a>
                            <div class="spacer"></div>
                            <a href="https://leghe.fantacalcio.it/iscrizione?from=1"
                                class="btn btn-raised btn-block btn-sm btn-blue">UNISCITI AD UNA <b
                                    class="euro"><br />EURO</b>LEGA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- LE TUE LEGHE MODAL -->
    <div class="modal fade" id="yourCompetitionsModal" tabindex="-1" role="dialog"
        aria-labelledby="yourCompetitionsModal">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="yourCompetitionsModal"><span class="euro">Euro</span>Leghe <span
                            class="brand-title">Fantacalcio</span></h4>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <h4> Imposta <em>il tuo menu</em> delle <span class="euro">Euro</span>Leghe</h4>
                    </div>
                    <div class="p-2">
                        <h6 class="info">Nascondi dal menù e/o trascina per ordinare</h6>
                        <span class="list-group-title">Le tue <span class="euro">Euro</span>Leghe</span>
                    </div>

                    <script id="userLeaguesTemplate" class="leagues-template" type="text/x-handlebars-template">
                                <div class="list-group smart-scrollbar competition-list sortable">
                                    {{#each leghe}}
                                    <div class="list-group-item list-group-item-league {{#unless visibile}}ghost{{/unless}}" data-id="{{id}}">
                                        <i class="competition-ghost-icon icon fg-medical hidden-ghost"></i>
                                        <i class="competition-ghost-icon icon fg-multimedia visible-ghost"></i>
                                        <span class="competition-name">{{nome}}</span> <i class="sort-handle icon fg-menu-button-of-three-lines"></i>
                                    </div>
                                    {{/each}}
                                </div>
                            </script>


                </div>
                <div class="modal-footer p-2 mt-2">
                    <button type="button" class="btn btn-sm btn-primary btn-block btn-raised btn-save">Salva
                        Impostazioni</button>
                    <script class="handlebar-server-response" type="text/x-handlebars-template">
                                {{> server-response}}
                            </script>
                </div>
            </div>
        </div>
    </div>
    <!-- MODALE PER L'ORDINAMENTO DELLE COMPETIZIONI -->
    <div class="modal fade" id="competitionSettingsModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title"><span class="euro">Euro</span>Leghe <span
                            class="brand-title">Fantacalcio</span></h4>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        <h4> Imposta l'ordine delle competizioni <em>nel tuo menu</em></h4>
                    </div>
                    <div class="padding">
                        <h6 class="info">Trascina per ordinare</h6>
                        <span class="list-group-title">Le tue competizioni</span>
                        <script id="userCompetitionsTemplate" class="competitions-template"
                            type="text/x-handlebars-template">
                                    <div class="list-group smart-scrollbar competition-list sortable">
                                        {{#each competitions}}
                                        <div class="list-group-item list-group-item-league {{#unless visibile}}ghost{{/unless}}" data-id="{{id}}">
                                            <!--<i class="competition-ghost-icon icon fg-medical hidden-ghost"></i>
                                            <i class="competition-ghost-icon icon fg-multimedia visible-ghost"></i>-->
                                            <span class="competition-name">{{name}}</span> <i class="sort-handle icon fg-menu-button-of-three-lines"></i>
                                        </div>
                                        {{/each}}
                                    </div>
                                </script>
                        <button type="button" class="btn btn-sm btn-primary btn-block btn-raised btn-save">Salva
                            Impostazioni</button>
                        <script class="handlebar-server-response" type="text/x-handlebars-template">
                                    {{> server-response}}
                                </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- HELP MODAL -->
    <div class="modal fade" id="helpModal" tabindex="-1" role="dialog" aria-labelledby="helpModalTitle">
        <div class="modal-dialog modal-transparent" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i
                            class="icon icon-center fg-close"></i></button>
                    <h4 class="modal-title" id="helpModalTitle"><i class="icon icon-left fg-info"></i> Aiuto!</h4>
                </div>
                <div class="modal-body">
                    <script id="userLeaguesTemplate" class="handlebar-user-info" type="text/x-handlebars-template">
                                <div class="padding">
                                    <div class="image-frame">
                                        <img class="img-responsive margin-auto" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png">
                                    </div>
                                    <p><b>Non hai ricevuto l’email  che contiene il link per confermare l’iscrizione?</b> Guarda nella cartella "Spam" o "Posta indesiderata"</p>
                                    <p><b>Non l’hai trovata neppure lì?</b> Allora possiamo reinviartela all’indirizzo {{utente.email}}</p>
                                    <p>(se l’indirizzo e-mail non è corretto, puoi cambiarlo in "<a href="https://leghe.fantacalcio.it/modifica-dati">modifica dati utente</a>")</p>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-raised btn-small btn-primary" onclick="resendConfirmationEmail(this)">REINVIA L’E-MAIL PER CONFERMARE L’ISCRIZIONE</button>
                                </div>
                            </script>
                </div>
            </div>
        </div>
    </div>
    <!-- LOADING MODAL -->
    <div class="modal fade" id="loadingModal" tabindex="-1" role="dialog" aria-labelledby="#loadingModalTitle">
        <script class="handlebars" type="text/x-handlebars-template">
                     <div class="modal-dialog modal-transparent {{customClass}}" role="document">
                         <div class="modal-content">

                             <div class="modal-header">
                                 <h4 class="modal-title" id="loadingModalTitle">{{{title}}}</h4>
                             </div>
                             <div class="modal-body">
                                 <h2 class="text-center">{{{message}}}</h2>
                             </div>

                         </div>
                     </div>
                 </script>
    </div>
    <!-- REMOVE USER MODAL -->
    <div class="modal fade" id="removeUserModal" tabindex="-1" role="dialog" aria-labelledby="removeUserModal">
        <div class="modal-dialog modal-danger" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i
                            class="icon icon-center fg-close"></i></button>
                    <h5 class="modal-title">ATTENZIONE! Vuoi cancellare il tuo utente <span
                            class="brand-title">Fantacalcio</span>?</h5>
                </div>
                <div class="modal-body">
                    <div class="padding">
                        <p> Sei sicuro di voler cancellare DEFINITIVAMENTE il tuo utente <span
                                class="brand-title">FANTACALCIO</span>? Cancellando il tuo account, <b>NON POTRAI PIU'
                                ACCEDERE ALLE TUE <span class="euro">EURO</span>LEGHE</b>, né da web, né da app.</p>
                        <hr>
                        <div class="flex-row">
                            <button data-dismiss="modal" class="btn btn-raised btn-block btn-sm btn-dark-blue"><i
                                    class="icon icon-left ico-remove-small"></i> NO, ci ho ripensato</button>
                            <div class="spacer"></div>
                            <button id="buttonUnsubscribe" class="btn btn-raised btn-block btn-sm btn-red"><i
                                    class="icon icon-left ico-garbage"></i> Sì, voglio cancellarlo</button>
                        </div>
                        <script class="handlebar-server-response" type="text/x-handlebars-template">
                                    {{> server-response}}
                                </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- CONFIRMATION OK MODAL -->
    <div class="modal fade" id="confirmationOkModal" tabindex="-1" role="dialog"
        aria-labelledby="confirmationOkModalTitle">
        <div class="modal-dialog modal-transparent" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmationOkModalTitle">Hai confermato la tua iscrizione!</h5>
                </div>
                <div class="modal-body">
                    <script class="handlebar-confirmation-ok" type="text/x-handlebars-template">
                                <div class="padding">
                                    <div class="image-frame">
                                        <img class="img-responsive margin-auto" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png">
                                    </div>
                                    <p>Adesso, o successivamente andando in "<a href="https://leghe.fantacalcio.it/modifica-dati">modifica dati utente</a>" puoi decidere di collegare il tuo account <span class="brand-title">FANTACALCIO</span> con il tuo account FACEBOOK.</p>
                                    <p>Collegando le due cose, potrai effettuare il login con un solo click.</p>
                                </div>
                             </script>
                    <script class="handlebar-facebook-info" type="text/x-handlebars-template">
                                <div class="facebook-box {{#if facebook.id}}facebook-connected{{/if}}">
                                    <div class="flex-row hidden-facebook-connected">
                                        <button data-dismiss="modal" class="btn btn-raised btn-block btn-sm btn-dark-blue flex"><i class="icon icon-left ico-remove-small"></i> NON ORA, GRAZIE</button>
                                        <div class="spacer"></div>
                                        <button onclick="modalFacebookConnect()" class="btn btn-raised btn-block btn-sm btn-facebook flex"><i class="icon icon-left fg-facebook-logo"></i> CONNETTITI CON FACEBOOK</button>
                                    </div>
                                    <div class="visible-facebook-connected">
                                        <div class="text-center">
                                            <img class="img-circle fb-avatar" src="{{facebook.avatar}}">
                                            <p>Sei connesso a Facebook come <b>{{facebook.name}}</b></p>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="btn btn-facebook btn-raised btn-sm icon-center-left" onclick="modalFacebookDisconnect()"><i class="icon fg-facebook-logo"></i> Disconnetti account da facebook</button>
                                        </div>
                                    </div>
                                </div>
                            </script>
                    <script id="server-response-partial" class="handlebar-server-response"
                        type="text/x-handlebars-template">
    <div class="server-messages server-response auto-clear" data-wrap-remove-delay="600">
        {{#each messages}}
            {{#if body}}
            <div class="server-message alert alert-{{type}} fade in" data-id="{{key}}">
                <button type="button" class="close" data-dismisser=".alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {{{body}}}
            </div>
            {{/if}}
        {{/each}}
    </div>
</script>
                    <script id="pagination-partial" class="handlebar-pagination" type="text/x-handlebars-template">
    <ul Class="pagination pull-right">
    {{#compare pagination.totals '>' 1}}
        <li {{#compare pagination.current '==' 1}} class="disabled" {{/compare}}>
            <a data-paginator="prev" href="javascript:void(0)"><i class="icon fg-left-chevron"></i></a></li>
        {{#each pagination.pages}}
        <li {{#if current}} class="active" {{/if}}><a href="javascript:void(0)" data-paginator="page" data-page="{{index}}">{{label}}</a></li>
        {{/each}}
        <li {{#compare pagination.current '==' pagination.totals}} class="disabled" {{/compare}}>
            <a data-paginator="next" href="javascript:void(0)"><i class="icon fg-right-chevron"></i></a></li>
    {{/compare}}
    </ul>
</script>

                </div>
            </div>
        </div>
    </div>
    <!-- ERROR MODAL -->
    <div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="errorModalTitle">
        <div class="modal-dialog modal-transparent" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="errorModalTitle">Attivazione non riuscita!</h5>
                </div>
                <div class="modal-body">
                    <script class="handlebar-error-modal" type="text/x-handlebars-template">
                                <div class="padding">
                                    <div class="image-frame">
                                        <img class="img-responsive margin-auto" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png">
                                    </div>
                                    <p class="text-danger">Il sistema ha rilevato un problema nell'attivazione.<p>
                                    <p class="text-danger">{{error}}</p>
                                </div>
                            </script>
                </div>
            </div>
        </div>
    </div>
    <!-- EDIT MODAL -->
    <div Class="modal fade edit-modal form-scrollable" id="editModal" tabindex="-1" role="dialog"
        aria-labelledby="editModalTitle">
        <div Class="modal-dialog" role="document">
            <div Class="modal-content loading-box">
                <script id="editModalContent" class="handlebar-edit-modal-content" type="text/x-handlebars-template">
                            <div class="modal-header {{modalHeader.customClass}}" {{#if offsetY}}style="margin-top:{{offsetY}}px"{{/if}}>
                                <button type="button" class="close" data-dismiss="modal" aria-label="close"><i class="icon icon-center fg-close"></i></button>
                                <h4 class="modal-title" id="editModalTitle">
                                    {{#if modalHeader}}
                                        <img class="{{modalHeader.customImageClass}}" src="{{modalHeader.image}}"
                                             {{#if modalHeader.imageErrorSrc}}onerror="handleImageError(this, '{{modalHeader.imageErrorSrc}}')"{{/if}}>

                                        <span class="{{modalHeader.customTitleClass}}">{{modalHeader.title}}
                                            {{#if modalHeader.subtitile}}<small>{{modalHeader.subtitile}}</small>{{/if}}
                                        </span>
                                    {{/if}}
                                </h4>
                            </div>
                            <div class="modal-body modal-{{type}}" data-panel="{{_panelIndex}}" data-field="{{_fieldIndex}}">
                                <div class="text-center">
                                    <h4> {{{title}}} </h4>
                                </div>
                                <form class="{{formType}} smart-scrollbar">
                                    <!-- START FORM -->
                                    {{#if header}}
                                    <div class="edit-modal-row">
                                        <div class="header {{header.customClass}}">{{header.label}} {{#if header.help}}<a href="" class="btn btn-help"><i class="icon fg-question"></i></a>{{/if}}</div>
                                    </div>
                                    {{/if}}
                                    {{#each rows}}
                                <div class="edit-modal-row row-{{template}} {{#if accordion}}row-accordion{{/if}} {{rowClass}} separator-{{or separator 'solid'}} {{#if scrollable}}scrollable smart-scrollbar{{/if}} {{#if _hidden}}hidden{{/if}}">
                                    {{#if nb}}<h4 class="row-header">{{nb}}</h4>{{/if}}
                                    <label name="{{key}}" class="hidden"></label>
                                    {{#switch template}}
                                    {{#case 'grid'}}
                                    <div class="header-group {{customClass}}">
                                        {{#each colsHeader}}
                                        <div class="header-group-item"><span data-key="{{.}}">{{.}}</span></div>
                                        {{/each}}
                                    </div>
                                    <label data-key="{{rowKey}}" for="{{../key}}.{{rowKey}}" class="control-label {{customClass}}">
                                        <span class="{{../labelClass}}">{{keyToLabel rowKey}}</span>
                                    </label>
                                    <div class="input-group grid-header-line {{customClass}}" data-val="{{rowValues}}">
                                        {{#each rowValues}}
                                        <input id="{{../../key}}.{{rowKey}}.{{@index}}"
                                               name="{{../../key}}[{{rowKey}}][]"
                                               type="text"
                                               value="{{.}}" autocomplete="off">

                                        {{/each}}
                                    </div>
                                    {{#each value as |rowValues rowKey|}}
                                    <div class="form-group {{../customClass}}" data-row-key="{{rowKey}}" data-values-count="{{or rowValues.length 1}}">
                                        <label data-key="{{rowKey}}" for="{{../key}}.{{rowKey}}"
                                               class="control-label {{#if ../removeSameForAll}}same-for-all-removed{{/if}}">
                                            <span class="{{../labelClass}}">{{keyToLabel rowKey}}</span>
                                        </label>

                                        {{#unless (or ../readonly ../removeSameForAll)}}
                                        {{#compare rowValues.length '>' '1'}}
                                        <span class="same-for-all checkbox">
                                            <label>
                                                <input class="form-ignore"
                                                       type="checkbox" name="{{../key}}.{{rowKey}}_same"
                                                       checked data-same-for-all="{{../key}}.{{rowKey}}">Uguale per tutti
                                            </label>
                                        </span>
                                        {{/compare}}
                                        {{/unless}}
                                        <div class="input-group grid-values-line" data-row-values="{{rowValues}}">
                                            {{#if rowValues.length}}
                                            {{#each rowValues as |rowItem rowItemIndex|}}
                                            <input id="{{or ../key ../../key}}.{{rowKey}}.{{rowItemIndex}}"
                                                   name="{{or ../key ../../key}}[{{rowKey}}][]"
                                                   {{#if ../../readonly}} readonly{{/if}}
                                                   class="form-control {{../../inputClass}}"
                                                   {{#if ../../keyRestrict}} data-restrict="{{../../keyRestrict}}" {{/if}}
                                                   value="{{rowItem}}" autocomplete="off">
                                            {{/each}}
                                            {{else}}
                                            <input id="{{or key ../key}}.{{rowKey}}"
                                                   name="{{or key ../key}}[{{rowKey}}]"
                                                   {{#if ../readonly}} readonly{{/if}}
                                                   class="form-control"
                                                   value="{{rowValues}}" autocomplete="off">
                                            {{/if}}
                                        </div>
                                    </div>
                                    {{/each}}
                                    {{/case}}
                                    {{#case 'ranges'}}
                                    <div class="form-group no-padding {{customClass}}">
                                        <label class="range-info" for="{{key}}">{{label}}</label>
                                        <div id="{{key}}" name="{{key}}" class="range" data-row-control>
                                            {{#each data}}
                                            <div class="range-col range-col-type-{{#if editable}}input{{else}}labels{{/if}}" data-key="{{key}}">
                                                <div class="range-col-header {{headerClass}}" data-header="{{before}}"><span>{{header}}</span></div>
                                                {{#if subheader}}
                                                <div class="range-col-subheader">
                                                    <span class="range-col-subheader-label">{{subheader}}</span>
                                                    {{#each tupleLabels}}
                                                    <span class="range-tuple-name">{{.}}</span>
                                                    {{/each}}
                                                </div>
                                                {{/if}}
                                                {{#if tuple}}
                                                {{#each (getProp values '0') as |valData vertIndex|}}
                                                <div data-index="{{vertIndex}}" class="range-cell range-cell-tuple">
                                                    {{#each ../values as |rowData horIndex|}}
                                                    {{#if ../../editable}}
                                                    <input id="{{lookup ../../tupleKeys horIndex}}_{{vertIndex}}"
                                                           name="{{lookup ../../tupleKeys horIndex}}[]"
                                                           class="range-input {{../../inputClass}}"
                                                           data-vert-index="{{vertIndex}}"
                                                           data-hor-index="{{horIndex}}"
                                                           data-col-values="{{lookup ../../values horIndex}}"
                                                           value="{{lookup (lookup ../../values horIndex) vertIndex}}"
                                                           autocomplete="off" />
                                                    {{else}}
                                                    <span class="range-label range-tuple-val">{{valData}}</span>
                                                    {{/if}}
                                                    {{/each}}
                                                </div>
                                                {{/each}}
                                                {{else}}
                                                {{#if  @root/_newOne}}
                                                <div class="range-cell new-one">
                                                    {{#if editable}}
                                                    {{#if key}}
                                                    <input class="range-input {{inputClass}}" value="{{@root/_newOne}}" autocomplete="off" {{#if readonly}} readonly {{/if}} disabled />
                                                    {{else}}
                                                    <input class="range-input {{inputClass}}" value="{{@root/_newOne}}" autocomplete="off" {{#if readonly}} readonly {{/if}} disabled />
                                                    {{/if}}
                                                    {{else}}
                                                    <span class="range-label">
                                                        {{{@root/_newOne}}}
                                                    </span>
                                                    {{/if}}
                                                </div>
                                                {{/if}}
                                                {{#each (or values (getProp @root/_values ../key))}}
                                                {{#if (lookup ../../dividers @index)}}
                                                <span class="range-cell-divider">{{lookup ../../dividers @index}}</span>
                                                {{/if}}
                                                <div class="range-cell" data-index="{{@index}}">
                                                    {{#if ../editable}}
                                                    {{#if ../key}}
                                                    <input id="{{../../key}}_{{@index}}_{{../key}}" data-key="{{../key}}"
                                                           name="{{../../key}}[{{@index}}][{{../key}}]" class="range-input {{../inputClass}}" value="{{getProp . ../key}}" autocomplete="off"
                                                           {{#if ../readonly}} readonly {{/if}}
                                                           {{#if ../hidden}} type="hidden" {{/if}} />
                                                    {{#if ../hidden}}
                                                    <span class="range-label range-label-linked">
                                                        {{#ifexist ../valueFormatter}}
                                                        {{{func ../valueFormatter . @index}}}
                                                        {{else}}
                                                        {{{getProp . ../key}}}
                                                        {{/ifexist}}
                                                    </span>
                                                    {{/if}}
                                                    {{else}}
                                                    <input id="{{../../key}}_{{@index}}" name="{{../../key}}[]"
                                                           class="range-input {{../inputClass}}{{#if  (lookup ../disableds @index)}}locked{{/if}}" value="{{.}}"
                                                           {{#ifexist ../min}} min="{{../min}}" {{/ifexist}}
                                                           {{#ifexist ../max}} max="{{../max}}" {{/ifexist}}
                                                           {{#if ../picker}} data-picker="{{../picker}}" readonly{{/if}}
                                                           autocomplete="off" {{#if (or ../readonly (lookup ../disableds @index))}} readonly {{/if}} />
                                                    {{/if}}
                                                    {{else}}
                                                    <span class="range-label">
                                                        {{#if ../valueFormatter}}
                                                        {{{func ../valueFormatter . @index}}}
                                                        {{else}}
                                                        {{{or (getProp . ../key) .}}}
                                                        {{/if}}
                                                    </span>
                                                    {{/if}}
                                                </div>
                                                {{/each}}
                                                {{/if}}
                                                {{#if caption}}<span class="range-caption">{{caption}}</span>{{/if}}
                                            </div>
                                            {{/each}}
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'spacer'}}
                                    <div class="spacer {{customClass}}"></div>
                                    {{/case}}
                                    {{#case 'member'}}
                                    {{#each data}}
                                    {{> member-card}}
                                    {{/each}}
                                    {{/case}}
                                    {{#case 'select'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{label}}</label>
                                        <select id="{{key}}"
                                                name="{{key}}"
                                                class="form-control {{#if readonly}}disabled {{/if}}"
                                                onchange="{{onchange}}"
                                                {{#if readonly}} disabled {{/if}}
                                                placeholder="{{placeholder}}">
                                            {{#each items}}
                                            <option value="{{value}}" {{#if selected}} selected="selected" {{/if}} {{#if disabled}} disabled {{/if}}>{{label}}</option>
                                            {{/each}}
                                        </select>
                                        {{#if info}}<p class="text-info"><em>{{info}}</em></p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'selectgrid'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" name="{{key}}" class="control-label">{{label}}</label>
                                        <div id="{{key}}" class="form-control select-grid {{#if readonly}}readonly{{/if}}"
                                             {{#ifexist max}} data-max="{{./max}}" {{/ifexist}}
                                             {{#ifexist min}} data-min="{{./min}}" {{/ifexist}}
                                             >
                                            {{#each items}}
                                            <label class="checkbox-inline" for="{{../key}}_{{@index}}">
                                                <input type="checkbox"
                                                       class="native"
                                                       id="{{../key}}_{{@index}}"
                                                       name="{{../key}}[]"
                                                       value="{{or value.id value}}"
                                                       {{#if selected}} checked{{/if}}
                                                       {{#if disabled}} disabled{{/if}}>
                                                <span class="checkbox-label">{{label}}</span>
                                            </label>
                                            {{/each}}

                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'multiselect'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" name="{{key}}" class="control-label">{{label}}</label>
                                        <div id="{{key}}" class="form-control check-list unselectable {{#if readonly}}readonly{{/if}}"
                                             {{#ifexist lock}} data-lock="{{./lock}}" {{/ifexist}}
                                             {{#ifexist max}} data-max="{{./max}}" {{/ifexist}}
                                             {{#ifexist min}} data-min="{{./min}}" {{/ifexist}}
                                             {{#ifexist range}} data-range="{{range}}" {{/ifexist}}>
                                            {{#each items}}
                                            <label class="checkbox-inline" for="{{../key}}_{{@index}}"
                                                   {{#ifexist tooltip}} data-toggle="tooltip" title="{{tooltip}}" {{/ifexist}}>
                                                <input type="checkbox" class="native" id="{{../key}}_{{@index}}" name="{{../key}}[]" value="{{or value.id value}}" {{#if selected}} checked{{/if}} {{#if disabled}} disabled{{/if}}>
                                                <span class="checkbox-label">{{label}}</span>
                                                {{#ifexist src}}<img class="checkbox-img" src="{{src}}" />{{/ifexist}}
                                                {{#ifexist bgSrc}}<img class="checkbox-bg" src="{{bgSrc}}" />{{/ifexist}}
                                            </label>
                                            {{/each}}

                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'groups'}}
                                    <div class="form-group {{customClass}} groups-list" data-id="{{key}}">
                                        <label for="{{key}}" name="{{key}}" class="control-label">
                                            {{label}}
                                            <a class="pull-right shuffle" href="javascript:UI.autoSelectChosen('{{key}}')">sorteggia</a>
                                        </label>
                                        {{#each data as |group groupIndex|}}
                                        <div class="form-control groups-item">
                                            <label for="{{../key}}_{{@index}}" class="control-label">{{lookup ../groupNames @index}}</label>
                                            <select id="{{../key}}_{{@index}}" name="{{../key}}[{{@index}}][]"
                                                    data-max="{{../max}}" data-min="{{../min}}"
                                                    data-group="{{../key}}" data-placeholder="{{or ../placeholder 'Seleziona...' }}" class="chosen-select" multiple>
                                                {{#each ../items}}
                                                <option value="{{value}}" {{#if (thereis value (lookup ../.././data groupIndex))}} selected="selected" {{/if}}>{{label}}</option>
                                                {{/each}}
                                            </select>
                                            <span class="groups-error-message" data-error-min="{{../errorMin}}"></span>
                                        </div>
                                        {{/each}}
                                        <div class="filler"><p class="text-info"><em>{{info}}</em></p></div>
                                    </div>
                                    {{/case}}
                                    {{#case 'sortable'}}
                                    <div class="form-group {{customClass}} sortable-list-group">
                                        <label for="{{key}}" class="control-label">
                                            {{label}}
                                            <small>{{info}}</small>
                                        </label>
                                        <div class="form-control sortable-list" name="{{key}}" data-title="{{title}}">
                                            {{#each items}}
                                            <label class="sortable-item {{#if locked}}locked{{/if}}" for="{{../key}}_{{@index}}" data-index="{{@index}}">
                                                <input type="hidden" id="{{../key}}_{{@index}}" name="{{../key}}[]" value="{{value}}">
                                                <span class="sortable-item-label">{{label}}</span>
                                            </label>
                                            {{/each}}
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'checklist'}}
                                    <div class="form-group {{customClass}} checklist-group">
                                        <label for="{{key}}"
                                               class="control-label"
                                               data-selecteds="{{numSelecteds}}" data-selecteds-label="{{selectedsLabel}}"
                                               data-unselecteds="{{numUnselecteds}}" data-unselecteds-label="{{unselectedsLabel}}">
                                            {{label}}
                                        </label>
                                        {{#if ./filters}}
                                        <div class="checklist-group-filters">

                                            <div class="checkbox checkbox-sm pull-left">
                                                <label class="width-auto nowrap" for="checkListSelectAll">
                                                    <input id="checkListSelectAll" type="checkbox" class="checklist-select-all">
                                                    <span class="checkbox-label">Tutti</span>
                                                </label>
                                            </div>


                                            <div class="input-group pull-right mw-240">
                                                <span class="input-group-addon"></span>
                                                <input type="search" class="form-control checklist-search" value="" placeholder="Filtra..." />
                                            </div>
                                        </div>

                                        {{/if}}
                                        <div class="form-control checkbox checkbox-sm checkbox-list"
                                             data-lazy-load=".check-list-item" data-lazy-load-viewport="#editModal"
                                             name="{{key}}"
                                             {{#if max}} data-max="{{./max}}" {{/if}}
                                             {{#if min}} data-min="{{./min}}" {{/if}}>

                                            {{#each items}}
                                            <div class="check-list-item">
                                                <label class="check-list-item-label" for="{{../key}}_{{@index}}"
                                                       {{#ifexist tooltip}} data-toggle="tooltip" title="{{tooltip}}" {{/ifexist}}
                                                       >
                                                    <input type="checkbox" id="{{../key}}_{{@index}}" name="{{../key}}[]" value="{{value}}" {{#if selected}} checked{{/if}} {{#if disabled}} disabled{{/if}}>
                                                    <span class="checkbox-label" title="{{tip}}">{{label}}</span>
                                                    {{#if info}}
                                                    <span class="checkbox-info">
                                                        <i class="icon ico-alert smart-tooltip smart-tooltip-left" data-smart-tooltip="{{info}}"></i>
                                                    </span>
                                                    {{/if}}
                                                </label>

                                                {{#ifexist ../initialValues}}
                                                <div class="input-group check-list-item-value">
                                                    <input id="{{../key}}_{{@index}}_val" name="{{../key}}Val[]" value="{{../initialValues}}" data-control="input" type="text" class="form-control ignore-row-action" disabled>
                                                    <div class="input-group-addon addon-punti">pt</div>
                                                </div>
                                                {{/ifexist}}
                                            </div>
                                            {{else}}
                                            <div class="empty-list">{{{or ./emptyListLabel 'Non ci sono elementi da selezionare'}}}</div>
                                            {{/each}}
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'label'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="input-group">
                                            <span>{{{data}}}</span>
                                        </div>
                                        {{#if info}}<p>{{{info}}}</p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'input' 'counter'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="input-group">
                                            <input id="{{key}}"
                                                   autotrim
                                                   data-control="{{template}}"
                                                   {{#ifexist hiddenValue}} data-hidden-value="{{hiddenValue}}" {{/ifexist}}
                                                   {{#if required}} required{{/if}}
                                                   {{#if regex}} regex="{{regex}}" {{/if}}
                                                   name="{{key}}"
                                                   type="{{or inputType 'text'}}"
                                                   data-step="{{step}}"
                                                   class="form-control {{inputClass}} {{#if disableInput}}input-disabled{{/if}}"
                                                   {{#if restrict}} data-restrict="{{restrict}}" {{/if}}
                                                   placeholder="{{placeholder}}"
                                                   {{#if (or readonly disableInput)}} readonly {{/if}}
                                                   value="{{or data (getProp ../_values key)}}" autocomplete="off">
                                            {{#if addon}}<div class="input-group-addon addon-{{addon}}">{{addon}}</div>{{/if}}
                                            {{#if suffix}}<span class="input-group-suffix">{{suffix}}</span>{{/if}}
                                        </div>
                                        {{#if info}}<p>{{{info}}}</p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'textarea'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="input-group">
                                            <textarea id="{{key}}"
                                                      autotrim
                                                      data-control="{{template}}"
                                                      {{#ifexist hiddenValue}} data-hidden-value="{{hiddenValue}}" {{/ifexist}}
                                                      name="{{key}}"
                                                      class="form-control {{#if disableInput}}input-disabled{{/if}}"
                                                      {{#if restrict}} data-restrict="{{restrict}}" {{/if}}
                                                      placeholder="{{placeholder}}"
                                                      {{#if readonly}} readonly {{/if}}
                                                      value="{{or data (getProp ../_values key)}}"
                                                      cols="20" rows="{{or rows 5}}"
                                                      maxlength="{{or maxlength 1024}}"
                                                      autocomplete="off">{{or data (getProp ../_values key)}}</textarea>
                                        </div>
                                        {{#if info}}<p>{{{info}}}</p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'minmax'}}
                                    <div class="form-group {{customClass}}" name="{{key}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="input-group">
                                            <span class="min-label"> {{or minLabel "da"}}</span>
                                            <input id="{{key}}_min"
                                                   data-control="{{template}}"
                                                   name="{{key}}_min"
                                                   type="{{or inputType 'text'}}"
                                                   class="form-control {{#if disableInput}}input-disabled{{/if}}"
                                                   placeholder="{{placeholder}}"
                                                   {{#if (or readonly disableInput)}} readonly {{/if}}
                                                   data-step="{{step}}"
                                                   min="{{./min}}"
                                                   max="#{{key}}_max"
                                                   value="{{lookup (or data (getProp ../_values key)) 0}}" autocomplete="off">
                                            <span class="max-label"> {{or maxLabel "a"}}</span>
                                            <input id="{{key}}_max"
                                                   data-control="{{template}}"
                                                   name="{{key}}_max"
                                                   type="{{or inputType 'text'}}"
                                                   class="form-control {{#if disableInput}}input-disabled{{/if}}"
                                                   placeholder="{{placeholder}}"
                                                   {{#if (or readonly disableInput)}} readonly {{/if}}
                                                   data-step="{{step}}"
                                                   min="#{{key}}_min"
                                                   max="{{./max}}"
                                                   value="{{lookup (or data (getProp ../_values key)) 1}}" autocomplete="off">
                                        </div>
                                        {{#if info}}<p>{{{info}}}</p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'combo'}}
                                    <div class="form-group form-group-combo {{customClass}}">
                                        <p>{{{label}}}</p>
                                        <label for="{{key}}" class="control-label">{{{info}}}</label>
                                        <div class="input-group">
                                            <select id="{{key}}_type"
                                                    name="{{key}}[type]"
                                                    class="form-control {{#if readonly}}disabled {{/if}}"
                                                    onchange="{{onchange}}"
                                                    {{#if readonly}} disabled {{/if}}
                                                    placeholder="{{placeholder}}">
                                                {{#each items}}
                                                <option value="{{value}}" {{#if selected}} selected="selected" {{/if}}>{{{label}}}</option>
                                                {{/each}}
                                            </select>
                                            <input id="{{key}}_value"
                                                   data-control="{{template}}"
                                                   name="{{key}}[value]"
                                                   type="{{or inputType 'text'}}"
                                                   class="form-control {{#if disableInput}}input-disabled{{/if}}"
                                                   {{#if restrict}} data-restrict="{{restrict}}" {{/if}}
                                                   placeholder="{{placeholder}}"
                                                   {{#if (or readonly disableInput)}} readonly {{/if}}
                                                   value="{{lookup data 'value'}}" autocomplete="off">
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'toggle'}}
                                    <div class="form-group {{customClass}} {{#if collapser}}collapser{{/if}}">
                                        <label for="{{key}}{{accordion}}" class="control-label">{{{label}}}</label>
                                        {{#if collapser}}
                                        <label>
                                            <input id="{{key}}{{accordion}}" name="{{key}}" value="{{or accordion 'true'}}" type="{{#if accordion}}radio{{else}}checkbox{{/if}}" {{#if (or data (getProp ../_values key))}} checked {{/if}}>
                                            <span class="collapser-toggle"></span>
                                        </label>
                                        {{else}}
                                        <div class="input-group">
                                            <span class="togglebutton toggle-status pull-right {{#if readonly}}readonly{{/if}}" data-on="{{or labelOn 'sì'}}" data-off="{{or labelOff 'no'}}">
                                                <label>
                                                    <input id="{{key}}" name="{{key}}" value="true"
                                                           {{#if readonly}} onclick="return false;" readonly{{/if}}
                                                           type="checkbox" {{#ifexist data}} {{#if data}} checked {{/if}}
                                                           {{else}} {{#if (getProp ../_values key)}} checked {{/if}}
                                                           {{/ifexist}}>
                                                </label>
                                            </span>
                                        </div>
                                        {{/if}}
                                        {{#if info}}
                                        <p>{{{info}}}</p>
                                        {{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'file'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <p class="control-info">{{info}}</p>
                                        <div class="fileinput" data-provides="fileinput">
                                            <span class="btn btn-block btn-dark-blue btn-raised btn-file">
                                                <span>{{buttonLabel}}</span>
                                                <input id="{{key}}" name="{{key}}" type="file" accept="{{accept}}" />
                                            </span>
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'tuple'}}
                                    <div class="form-group form-group-touple {{customClass}}" id="{{key}}" name="{{key}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="form-group-touple-container">
                                            {{#each value as |itemValue itemKey| }}
                                            <div class="input-group">
                                                <input id="{{../key}}_{{itemKey}}"
                                                       name="{{../key}}[{{itemKey}}]"
                                                       type="{{or inputType ../inputType 'text'}}"
                                                       class="form-control"
                                                       {{#ifexist ../itemMax}} max="{{../itemMax}}" {{/ifexist}}
                                                       {{#ifexist ../itemMin}} min="{{../itemMin}}" {{/ifexist}}
                                                       value="{{itemValue}}"
                                                       autocomplete="off">
                                                <div class="input-group-addon addon-{{itemKey}}">{{itemKey}}</div>
                                            </div>
                                            {{/each}}
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'datetime'}}
                                    <input type="hidden" disabled class="form-control form-ignore catch-first-field-focus" />
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" class="control-label">{{{label}}}</label>
                                        <div class="input-group input-group-default">
                                            
                                            <input id="{{key}}" name="{{key}}" type="text" class="form-control"
                                                    placeholder="Data e ora"
                                                    {{#if ./min}} data-min="{{./min}}" {{/if}}
                                                    data-field="datetime"
                                                    value="{{or data (getProp ../_values key)}}"
                                                    readonly {{#if disabled}} disabled {{/if}}>

                                            
                                            <span class="input-group-btn">
                                                <label class="btn btn-default" type="button" for="{{key}}">
                                                    <i class="icon {{or icon 'fg-calendar'}}"></i>
                                                </label>
                                            </span>
                                        </div>
                                        {{#if info}}<p>{{{info}}}</p>{{/if}}
                                    </div>
                                    {{/case}}
                                    {{#case 'time-range'}}
                                    <input type="hidden" disabled class="form-control form-ignore catch-first-field-focus" />
                                    <div class="form-group {{customClass}}" id="{{key}}" name="{{key}}">
                                        <label class="control-label">{{{label}}}</label>
                                        <div class="row flex-row">
                                            <div class="col-sm-2 visible-repeat-item">
                                                <button type="button" class="btn btn-info btn-remove" data-toggle="repeat-remove"><i class="icon ico-garbage"></i></button>
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="control-label">INIZIO</label>
                                                <div class="input-group input-group-default">
                                                    <input data-id id="{{key}}_id" name="{{key}}_id" type="hidden" value="{{or (lookup value 3) 0}}" />
                                                    <input id="{{key}}_start" name="{{key}}_start" type="text" class="form-control" placeholder="{{#compare type '==' 'time'}}Orario inizio{{else}}Data e ora inizio{{/compare}}"
                                                           {{#if ./min}} data-min="{{./min}}" {{/if}}
                                                           data-field="{{or type 'datetime'}}"
                                                           {{#unless freeRange}} data-startend="start" data-startendelem="[name='{{key}}_end']" {{/unless}}
                                                           value="{{lookup value 0}}" readonly {{#if (or disabled disableStart)}} disabled {{/if}}>
                                                    <span class="input-group-btn">
                                                        <label class="btn btn-default" type="button" for="{{key}}_start">
                                                            <i class="icon {{or (lookup icons 0) 'fg-calendar'}}"></i>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <label class="control-label">FINE</label>
                                                <div class="input-group input-group-default">
                                                    <input id="{{key}}_end" name="{{key}}_end" type="text" class="form-control" placeholder="{{#compare type '==' 'time'}}Orario fine{{else}}Data e ora fine{{/compare}}"
                                                           data-field="{{or type 'datetime'}}" {{#unless freeRange}} data-startend="end" data-startendelem="[name='{{key}}_start']" {{/unless}} value="{{lookup value 1}}" readonly {{#if (or disabled disableEnd)}} disabled {{/if}}>
                                                    <span class="input-group-btn">
                                                        <label class="btn btn-default" type="button" for="{{key}}_end">
                                                            <i class="icon {{or (lookup icons 1) 'fg-calendar'}}"></i>
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'html'}}
                                    <div class="{{customClass}}" id="{{key}}" name="{{key}}">{{{data}}}</div>
                                    {{/case}}
                                    {{#case 'partial'}}
                                    <div class="partial-container no-padding {{customClass}}" id="{{key}}">
                                        <!-- START PARTIAL -->
                                        {{> (lookup . 'data') (lookup . 'scope')}}
                                        <!-- END PARTIAL -->
                                    </div>
                                    {{/case}}
                                    {{/switch}}
                                    {{#if notes}}
                                    <div class="notes">
                                        <p class="text-info">{{{notes}}}</p>
                                    </div>
                                    {{/if}}
                                </div>
                                    {{/each}}
                                    {{#if actions}}
                                    <!-- START ACTIONS -->
                                    <footer class="{{or actionsClass 'flex-row'}} actions">
                                        {{#each actions}}
                                        <div class="spacer"></div>
                                        <button {{#if dismiss}} data-dismiss="modal" {{/if}}
                                                {{#if disabled}} disabled{{/if}}
                                                type="{{or type 'button'}}"
                                                {{#if onclick}} onclick="{{onclick}}" {{/if}}
                                                class="btn btn-raised btn-sm {{style}} {{or buttonClass 'btn-block'}}">
                                            <i class="icon icon-left {{icon}}"></i> {{label}}
                                        </button>
                                        {{/each}}
                                    </footer>
                                    <!-- END ACTIONS -->
                                    {{/if}}
                                    <!-- END FORM -->
                                </form>
                                <div data-toggle='date-time-picker'></div>
                            </div>
                        </script>
                <footer class="modal-footer">
                    <script class="handlebar-server-response" type="text/x-handlebars-template">
                                {{> server-response}}
                            </script>
                </footer>
            </div>
        </div>
    </div>
    <!-- PROGRESS MODAL -->
    <div class="modal fade" id="progressModal" tabindex="-1" role="dialog" aria-labelledby="#progressModalTitle">
        <script class="handlebars-progress-modal" type="text/x-handlebars-template">
                    <div class="modal-dialog {{customClass}}" role="document">
                        <div class="modal-content">
                            <div class="modal-header"><h4 class="modal-title" id="progressModalTitle">{{{title}}}</h4></div>
                            <div class="modal-body">
                                <div class="padding">
                                    <h5 class="message">{{{message}}}</h5>
                                    <div class="progress progress-striped">
                                        <div class="progress-bar" style="width: 0%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer padding"></div>
                        </div>
                    </div>
                </script>
    </div>

    <div class="modal fade" id="globalMenuModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg modal-transparent" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i
                            class="icon icon-center fg-close"></i></button>
                </div>
                <div class="modal-body">
                    <div class="global-menu">
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs global-menu-tabs" role="tablist">
                            <li role="presentation" class="global-menu-admin">
                                <a href="#admin" aria-controls="admin" role="tab" data-toggle="tab"><img class="icon"
                                        src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_admin.svg" />Area Admin
                                    <small>LEGA, SQUADRE, MERCATI E COMUNICAZIONI</small></a>
                            </li>

                        </ul>
                        <div class="swiper-container">
                            <!-- Tab panes -->
                            <div class="tab-content swiper-wrapper">

                                <!--AREA LEGA-->
                                <div id="_admin" role="tabpanel" class="tab-pane global-menu-admin swiper-slide">
                                    <header class="col-sx-12">
                                        <div class="media league-header">
                                            <div class="media-left">
                                                <a href="#" class="league-crest circle-link">
                                                    <img class="media-object img-rounded crest"
                                                        src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega/147953_06139095.png"
                                                        onerror="handleImageError(this, Settings.missingCrestSrc)">
                                                </a>
                                            </div>
                                            <div class="media-body full-width">
                                                <h6 class="media-info">
                                                    <span class="league-fondation-year"><b>ANNO DI FONDAZIONE:</b>
                                                        2005</span>
                                                    <span class="league-superadmin"><b>SUPERADMIN:</b> </span>
                                                </h6>
                                                <h4 class="media-heading">Lega Bobica</h4>
                                                <h5 class="visible-main-admin"><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/info-lega">Modifica
                                                        info, reset ed elimina lega</a></h5>
                                            </div>
                                        </div>
                                    </header>

                                    <!-- ADMIN -->
                                    <div Class="global-menu-body col-xs-12 visible-admin">
                                        <div Class="col-sm-4">
                                            <ul class="list-unstyled well min-h-220">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Partecipanti
                                                        <small>Invita, sostituisci, rimuovi</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Amministratori
                                                        <small>Promuovi, rimuovi</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">Regolamento
                                                        e Opzioni <small>Imposta rose, formazioni, sostituzioni,
                                                            calcolo</small></a></li>
                                            </ul>
                                            <ul class="list-unstyled well">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-crediti">Crediti
                                                        <small>Assegna, modifica</small></a></li>
                                            </ul>
                                        </div>
                                        <div Class="col-sm-4">
                                            <ul class="list-unstyled well min-h-220">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/lista-competizioni">Gestione
                                                        Competizioni <small>Crea, modifica, elimina</small></a></li>
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-mercati">Gestione
                                                        Mercati <small>Crea, modifica, elimina sessioni</small></a></li>
                                                <!--<li><a href="#">Calciatori <small>Personalizza ruoli</small></a></li>-->
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-rose">Gestione
                                                        Rose <small>Crea, modifica</small></a></li>
                                            </ul>
                                            <ul class="list-unstyled well">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-punti">Penalità
                                                        e Punti Extra <small>Assegna, modifica</small></a></li>
                                            </ul>
                                        </div>
                                        <div Class="col-sm-4">
                                            <ul class="list-unstyled well min-h-220 well-flat">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/registro-attivita-admin">Registro
                                                        attività <small>Visualizza</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/lista-comunicazioni">Comunicazioni
                                                        <small>Crea, modifica, elimina</small></a></li>
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-documenti">Documenti
                                                        di <b class="euro">Euro</b>Lega <small>Crea, carica,
                                                            elimina</small></a></li>
                                            </ul>
                                            <ul class="list-unstyled well well-flat">
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/albo-oro">Albo
                                                        D'Oro <small>Crea, modifica</small></a></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <!-- NOT ADMIN -->
                                    <div Class="global-menu-body col-xs-12 hidden-admin">
                                        <div Class="col-sm-6">
                                            <ul class="list-unstyled well min-h-220">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Partecipanti
                                                        <small>Visualizza tutti</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">Regolamento
                                                        e Opzioni <small>Visualizza impostazioni rose, formazioni,
                                                            calcolo</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/lista-competizioni">Competizioni
                                                        <small>Visualizza in corso, in programma, terminate</small></a>
                                                </li>
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-mercati">Mercati
                                                        <small>Visualizza in corso, in programma, terminate</small></a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div Class="col-sm-6">
                                            <ul class="list-unstyled well min-h-220 well-flat">
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/registro-attivita-admin">Registro
                                                        attività <small>Visualizza</small></a></li>
                                                <li><a
                                                        href="https://leghe.fantacalcio.it/lega-bobica/lista-comunicazioni">Comunicazioni
                                                        <small>Leggi</small></a></li>
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-documenti">Documenti
                                                        di <b class="euro">Euro</b>Lega <small>Leggi</small></a></li>
                                                <li><a href="https://leghe.fantacalcio.it/lega-bobica/albo-oro">Albo
                                                        D'Oro <small>Consulta</small></a></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <footer class="col-xs-12 visible-admin">
                                        <div class="col-sm-6 text-center">
                                            <div class="well well-flat">
                                                <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-formazioni"
                                                    class="btn btn-sm btn-light-orange btn-raised">Gestione
                                                    Formazioni</a>
                                                <h6>Schiera, modifica tutte le formazioni</h6>
                                            </div>
                                        </div>
                                        <div class="spacer hidden-sm hidden-md hidden-lg"></div>
                                        <div class="col-sm-6 text-center">
                                            <div class="well well-flat">
                                                <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/calcolo-fantagiornata"
                                                    class="btn btn-sm btn-orange btn-raised">Calcola Giornata</a>
                                                <h6>Calcola, annulla, ripeti calcolo</h6>
                                            </div>
                                        </div>
                                    </footer>





                                </div>

                                <!-- USER PANE -->

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script id="server-response-partial" class="handlebar-server-response" type="text/x-handlebars-template">
    <div class="server-messages server-response auto-clear" data-wrap-remove-delay="600">
        {{#each messages}}
            {{#if body}}
            <div class="server-message alert alert-{{type}} fade in" data-id="{{key}}">
                <button type="button" class="close" data-dismisser=".alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {{{body}}}
            </div>
            {{/if}}
        {{/each}}
    </div>
</script>
    <script id="pagination-partial" class="handlebar-pagination" type="text/x-handlebars-template">
    <ul Class="pagination pull-right">
    {{#compare pagination.totals '>' 1}}
        <li {{#compare pagination.current '==' 1}} class="disabled" {{/compare}}>
            <a data-paginator="prev" href="javascript:void(0)"><i class="icon fg-left-chevron"></i></a></li>
        {{#each pagination.pages}}
        <li {{#if current}} class="active" {{/if}}><a href="javascript:void(0)" data-paginator="page" data-page="{{index}}">{{label}}</a></li>
        {{/each}}
        <li {{#compare pagination.current '==' pagination.totals}} class="disabled" {{/compare}}>
            <a data-paginator="next" href="javascript:void(0)"><i class="icon fg-right-chevron"></i></a></li>
    {{/compare}}
    </ul>
</script>

    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/polyfill.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/lib/_lib_bundle.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/_utils_bundle.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/services/_services_bundle.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/ui.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/layout.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/auth.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/main.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/services/notifications.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/team_slider.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/real_calendar.js?_v=191020201000"></script>


    <link rel="stylesheet" href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/public.min.css?_v=191020201000">
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/lib/bootstrap-select.min.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/league/league_rosters.js?_v=191020201000"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/word_searcher.js?_v=191020201000"></script>

    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/fixes.js?_v=191020201000"></script>
    <!-- START ANALYTICS -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-104929929-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-104929929-2', { 'anonymize_ip': true });
    </script>

    <!-- END ANALYTICS -->
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit&amp;hl=it"></script>
    <!-- START Nielsen Online SiteCensus V6.0 -->
    <!-- COPYRIGHT 2012 Nielsen Online -->
    <script type="text/javascript" src="//secure-it.imrworldwide.com/v60.js">
    </script>
    <script type="text/javascript">
        var pvar = { cid: "sky-it", content: "0", server: "secure-it" };
        var feat = { check_cookie: 0 };
        var trac = nol_t(pvar, feat);
        trac.record().post();
    </script>
    <noscript>
        <div>
            <img src="//secure-it.imrworldwide.com/cgi-bin/m?ci=sky-it&amp;cg=0&amp;cc=0&amp;ts=noscript" width="1"
                height="1" alt="" />
        </div>
    </noscript>
    <!-- END Nielsen Online SiteCensus V6.0 -->
<!--/body-->

<!--/html-->
