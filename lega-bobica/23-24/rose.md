

<!DOCTYPE html>
<!--Layout Interno-->
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="it-it"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="it-it"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="it-it"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="it-it">
<!--<![endif]-->
<head>
    <!-- LayoutInterno 2021 -->
    <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script type="text/javascript" async=true>
(function() {
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://cmp.quantcast.com'
    .concat('/choice/', 'Z3sQVQNy9sAbB', '/', host, '/choice.js?tag_version=V2');
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
        if(args[0] === 'init' && typeof args[3] === 'object') {
          args[3] = Object.assign(args[3], { tag_version: 'V2' });
        }
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
      } catch (ignore) {}
      var payload = json.__tcfapiCall;
      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
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
            if (event && event.source && event.source.postMessage) {
              event.source.postMessage(returnMsg, '*');
            }
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
      } catch (ignore) {}
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
  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };
  var checkIfUspIsReady = function() {
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
	<script type="text/javascript" async defer>
	var _qevents = _qevents || [];
	
	(function() {
	var elem = document.createElement('script');
	elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
	elem.async = true;
	elem.type = "text/javascript";
	var scpt = document.getElementsByTagName('script')[0];
	scpt.parentNode.insertBefore(elem, scpt);
	})();
	
	_qevents.push({
	qacct:"p-Z3sQVQNy9sAbB",
	uid:"a.clemente@quadronica.com"
	});
	</script>
	
	<noscript>
	<div style="display:none;">
	<img src="//pixel.quantserve.com/pixel/p-Z3sQVQNy9sAbB.gif" border="0" height="1" width="1" alt="Quantcast"/>
	</div>
	</noscript>
	<!-- End Quantcast tag -->
<!-- CUSTOM STYLE (hide legitimate interests button) -->
<style>
.qc-cmp2-footer-links button:nth-child(2) {
    display: none;
}
</style>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NMKS9FQV');</script>
<!-- End Google Tag Manager -->  
    <script src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>

var GOOGLE_VENDOR_ID = 755;
	var REPROMPT_DELAY = 1000 * 60 * 60 * 24; //24h

    var __count = 0;
    console.log(">>> START TIMING... PROD");
    console.time('TIMING');

    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];


    console.log(++__count + ". SET GOOGLE TAG...");
    googletag.cmd.push(function () {
        googletag.defineSlot('/2913532/Leghe2016_MPU_BTF_ROS_Piemme', [[300, 600], [300, 250]], 'div-gpt-ad-1540304961874-0').addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();
    })

    console.log(++__count + ". LOADING TC DATA...");
    console.timeLog('TIMING');
    __tcfapi('addEventListener', 2, function (tcData, success) {
        if (success && ['tcloaded', 'useractioncomplete'].includes(tcData.eventStatus)) {
            console.log(++__count + ". CMP LOADED: REFRESH GOOGLE TAG...");
            console.timeLog("TIMING");


            googletag.pubads().refresh();

if (tcData && tcData.vendor && tcData.vendor.consents && tcData.vendor.legitimateInterests) {
                console.log("GOOGLE CONSENT: " + tcData.vendor.consents[GOOGLE_VENDOR_ID]);
                console.log("GOOGLE LEG.INTERESTS: " + tcData.vendor.legitimateInterests[GOOGLE_VENDOR_ID]);
                if (!tcData.vendor.consents[GOOGLE_VENDOR_ID] || !tcData.vendor.legitimateInterests[GOOGLE_VENDOR_ID]) {
                    //REQUEST CONSENT

var force = typeof(tcData.vendor.consents[GOOGLE_VENDOR_ID]) == "undefined" 
                				|| typeof(tcData.vendor.legitimateInterests[GOOGLE_VENDOR_ID]) == "undefined"

                    onVendorBlocked(force );
                }
            }

            __tcfapi('removeEventListener', 2, () => { }, tcData.listenerId);

        } else {
            console.log("GOOGLE TAG WAITING... ", tcData)

        }
    });  


function onVendorBlocked() {
        try {
            var lastRequestTimestamp = +localStorage.getItem('lastVendorRequestTimestamp');
            var now = Date.now();
            var force =  /clearRepromptHash=true/.test(location.search);
            var delay = now - lastRequestTimestamp;
            console.log("FORCE REPROMPT: " + force + " | delay: " + delay);
            if (force || (delay > REPROMPT_DELAY)) {
                localStorage.removeItem('_cmpRepromptHash');
                localStorage.setItem('lastVendorRequestTimestamp', now);
                if (lastRequestTimestamp > 0) __tcfapi('displayConsentUi', 2, function() {} )
            } 
        } catch(e) {
            console.warn("onVendorBlocked - ERROR ", e);
        }
		
	}
</script>

<!-- Facebook Pixel Code -->
<script async defer>
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1374640486166510');
    fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1374640486166510&ev=PageView&noscript=1" /></noscript>
<!-- End Facebook Pixel Code --> 
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- Disable Zooming (Chrome and Firefox) Chrome and Firefox on Android will not wait for 300ms if zooming has been disabled using the following viewport setting -->
    <meta name='viewport' content='width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1.0, user-scalable=0' />
    <title>Rose Fantacalcio</title>
    <meta name="apple-itunes-app" content="app-id=977629806">
    <meta name="google-play-app" content="app-id=it.quadronica.leghe">
    <meta name="google-site-verification" content="" />
    <meta property="fb:app_id" content="276105532435709" />
    <meta property="og:site_name" content="Leghe Fantacalcio" />
    <meta property="og:title" content="Rose Fantacalcio">
    <meta property="og:description" content="Lega lega-bobica">
    <meta property="og:image" content="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/no_logo.png">
    <meta property="og:url">
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="Leghe Fantacalcio" />
    <meta name="twitter:title" content="Rose Fantacalcio" />
    <meta name="twitter:description" content="Lega lega-bobica" />
    <meta name="twitter:image" content="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/no_logo.png" />
    <meta name="twitter:creator" content="@fantacalcio" />
    <meta name="description" content="Lega lega-bobica">
    <link rel="shortcut icon" href="https://leghe.fantacalcio.it/favicon.png" />
     <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/swiper.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/ani.css?_v=180820231357" rel="stylesheet">
        <link rel="shortcut icon" href="https://leghe.fantacalcio.it/favicon.png" />
    <link rel="apple-touch-icon" sizes="57x57" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="144x144" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="60x60" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="120x120" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="152x152" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="https://d2lhpso9w1g8dk.cloudfront.net/web/img/apple-touch-icon-180x180.png">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fg-icons.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fg-leghe-icons.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/fc-icons.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap-material-design.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/ripples.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/jquery-ui.min.css" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/main.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/helpers.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/medium-editor.css" rel="stylesheet">

    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/widgets.css?_v=180820231357" rel="stylesheet">
    <link href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/leagues.min.css?_v=180820231357" rel="stylesheet">
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/vanilla.js?_v=180820231357"></script>
    <!-- START COMSCORE SCRIPT -->
    <!-- COMSCORE TAG -->
<script>

	var COMSCORE_VENDOR_ID = 77
	__tcfapi('getTCData', 2, (tcData, success) => {

		if (success) {

			console.log("COMSCORE: ON LOAD CMP...");
            var _COMSCORE_TAGS = { c1: "2", c2: "6034891" };
            if (tcData.eventStatus == "tcloaded") {
                _COMSCORE_TAGS.cs_ucfr = tcData.vendor.consents[COMSCORE_VENDOR_ID] ? "1" : "0"
            }

			(function () {
				var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
				s.src = "https://sb.scorecardresearch.com/cs/6034891/beacon.js";

				s.onload = function () {
					console.log("COMSCORE: SEND TAGS...");
					self.COMSCORE && COMSCORE.beacon(_COMSCORE_TAGS);
				}
				console.log("COMSCORE: INIT...");
				el.parentNode.insertBefore(s, el);
			})();


		} else {
			console.warn("COMSCORE: ON FAIL CMP...");

		}

	}, [COMSCORE_VENDOR_ID]);


</script>
<noscript>
	<img src="http://b.scorecardresearch.com/p?c1=2&c2=6034891&cv=3.6&cj=1" />
</noscript>
<!-- END COMSCORE TAG -->



  
    <!-- END COMSCORE SCRIPT -->
        <script id="serverBridge">
        var data = {
            jsVer: "180820231357",
            webBaseUrl: "https://leghe.fantacalcio.it/",
            authAppKey: "4ab27d6de1e92c810c6d4efc8607065a735b917f",
            fbid: "276105532435709",
            gameType: +"0",
            gameTip: "Lega",            
            lastMatchday: +"38",
            imgBaseUrl: "https://d2lhpso9w1g8dk.cloudfront.net/web/img/",
            shirtsBaseUrl: "https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/",
            crestsBaseUrl: "https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/",
            logosBaseUrl: "https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/",
            playerCardsBaseUrl: "https://content.fantacalcio.it/web/campioncini/card/",
            playerCampioncinoBaseUrl: "https://content.fantacalcio.it/web/campioncini/small/"
        };
        __.s('sd', data);
        __.s('u', __.dp("eyJzdGF0ZSI6MTY5MzQ3NjY4Mjk0MSwic3VjY2VzcyI6dHJ1ZSwiZGF0YSI6eyJ1dGVudGUiOnsic29jaWFsIjpbXSwiaWQiOjM1OTcsInVzZXJuYW1lIjoiYmFkYW5pZWxlIiwiZW1haWwiOiJkLnZhZHJ1Y2Npb0BnbWFpbC5jb20iLCJjb25mZXJtYXRvIjoxLCJtYXJrZXRpbmciOjEsInV0ZW50ZV90b2tlbiI6IkI1RTgwN0U3OUFEN0QzQkU2MURCQzhERkMzQ0FFNjlEMzM3NTNBRDVDRkFDQkFEM0M1NUE4QTNDNEFBNTAzQUE0QjI2MjM5QTk3NDAzNEZGQzQ1QUZDOEE5MUQ5QTRFQTk4NjYzOUREM0I0QUIyNUE4REUxRDg5NTYwMEI0MURDN0Y2NTZDQjkzRDA5QTdDQzgzQTQwOTNCNUUxREEwMUQ5RTE4QUVGQTk5QTVGRTUzMUJGMzdFQkE3MzJGRkQ3MjcyQTIzNjE1QzFDRkE2QzlEMjQwM0NGQzk1MDFCNjhGODM4MUZGNzFFQjg0NzVFQUYzOTNGOTA3REI4RTY1NjE3ODk0OTNGMkE0ODg4MkI2RjdBRTE0N0Q2RjM1RkE0N0VDNkY5NzI0RjE4MjI2NzQ3MDQ4NDQyQUM3MTc3NTRFIiwic3F1YWRyYSI6IiIsInByb3ZpbmNpYSI6IkJBIiwibmFzY2l0YSI6IjE5ODUiLCJkYXRhX2MiOiIyMDA5LTA2LTE3VDEyOjQ0OjM3IiwiZGF0YV9tIjoiMjAxOC0wNy0xMVQxMjoxODoxMyIsInJlZ2FsbyI6MH0sImFjcXVpc3RvIjpudWxsLCJsZWdoZSI6W3siaWQiOjE0Nzk1Mywibm9tZSI6IkxlZ2EgQm9iaWNhIiwiYWxpYXMiOiJsZWdhLWJvYmljYSIsIm9yZGluZSI6MSwib3JkaW5lX2NvbXAiOiIiLCJ2aXNpYmlsZSI6dHJ1ZSwibGluayI6Imh0dHBzOi8vbGVnaGUuZmFudGFjYWxjaW8uaXQvbGVnYS1ib2JpY2EiLCJ0aXBvX2xlZ2EiOjAsImxvZ28iOiJub19sb2dvLnBuZyJ9LHsiaWQiOjI0MjYzMTQsIm5vbWUiOiJGYW50YU1hbnRyYSA0RnVuIiwiYWxpYXMiOiJmYW50YW1hbnRyYS00ZnVuIiwib3JkaW5lIjoyLCJvcmRpbmVfY29tcCI6IiIsInZpc2liaWxlIjp0cnVlLCJsaW5rIjoiaHR0cHM6Ly9sZWdoZS5mYW50YWNhbGNpby5pdC9mYW50YW1hbnRyYS00ZnVuIiwidGlwb19sZWdhIjoxLCJsb2dvIjoibm9fbG9nbzE5LnBuZyJ9XX0sImVycm9yX21zZ3MiOm51bGwsInRva2VuIjoiIiwidXBkYXRlIjp0cnVlfQ=="));
        __.X('serverBridge');
</script>
 
        <script>
        var data = {
            
            name: __.ph("Lega Bobica"),       
            logo: "no_logo.png",            
            setup:  {"info_principali":true,"tre_confermati":true,"regolamento":true,"almeno_competizione":true,"mercato_creato":true},          
            //setup: {regolamento:false},
            foundationYear: "2005",
            logoMeta: null,            
            alias: "lega-bobica",          
            type: "2",      
            open: "0", 
            competitionId: "296201",
            currentCompetition: {"id":296201,"id_lega":147953,"nome":"Lega Bobica","tipo":1,"giornata_inizio":3,"giornata_fine":37,"schedina":false,"vincitore":"","eliminata":false,"state":1693474323642,"squadre":[{"id":606740,"g":0,"p":0.0,"s_p":0.00,"pos":1,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_606740"},{"id":611980,"g":0,"p":0.0,"s_p":0.00,"pos":2,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_611980"},{"id":649234,"g":0,"p":0.0,"s_p":0.00,"pos":3,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_649234"},{"id":671529,"g":0,"p":0.0,"s_p":0.00,"pos":4,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_671529"},{"id":699436,"g":0,"p":0.0,"s_p":0.00,"pos":5,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_699436"},{"id":3129894,"g":0,"p":0.0,"s_p":0.00,"pos":6,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_3129894"},{"id":6020064,"g":0,"p":0.0,"s_p":0.00,"pos":7,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_6020064"},{"id":6756036,"g":0,"p":0.0,"s_p":0.00,"pos":8,"pen":0.0,"b":0.0,"v":0,"n":0,"pr":0,"gf":0,"gs":0,"d_r":0,"gr":"A","pk":"296201_6756036"}]},            
            inCompetition: __.pb("True"),
            competitionStartSerieA: "3",   
            competitionEndSerieA: "37",       
            president: "Pippo",                             
            admins: [{"id":3597,"tipo":1,"nome":"Daniele"},{"id":153941,"tipo":0,"nome":"Pippo"},{"id":1079249,"tipo":1,"nome":"ciskurt87"}],    
            live: false,
            countdown: Number("0"),                           
            //countdown: 86405,                                             
            //countdown: 10,
            //countdown: 96405,
            //countdown: 18280000,
            role: "1",                      
            coachType: "0",                    
            mainCoach: "Daniele",        
            assistantCoach: "",   
            currentTurn: "3",       
            section: "rose",
            smallShirt: "606740_06862445.png",
            shirt: "s_606740_06862445.png",
            shirtMeta: {"forma":"38","motivo":"00","simbolo":"00","colori":["#ffffff","#fd0d1b","#fad13c"],"sponsor":"03","sponsor_id":29,"badge":["07"],"ver":1},
            crest: "no_logo13.png",
            crestMeta: {"forma":"06","motivo":"01","simbolo":"17","colori":["#333333","#F79225","#CFD8E6"],"sponsor":"00","sponsor_id":0,"badge":[],"ver":0},
            winner: "",
            progress: "1;1;1",        
            teamName: "USS Torquemada",
            teamId: "606740"                      
        };
        __.s('li', data);
    </script>
 
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/settings.js?_v=180820231357"></script>
</head>
<body Class="fg  leagues guest internal-layout" data-setup="0">
    
    <!-- PAGE SETUP 0 -->
    <!--[if lt IE 8]>
        <p Class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <!-- SKIN -->
<!-- SKIN PROD 2021 -->
<ins data-revive-zoneid="8296" data-revive-id="6609ba8ff88606794e22ff360400bcea"></ins>
<script defer async src="https://adx.4strokemedia.com/www/delivery/asyncjs.php"></script>

<div id="default-skin"></div>        <div id="toastStack" class="toast-stack">
        <!-- TOASTS STACK -->
        <script id="toastTemplate" type="text/x-handlebars-template">
            <div class="toast-stack-item">
                <div class="toast alert alert-{{type}} raised" data-id="{{id}}">
                    <!--HANDLEBARS TEMPLATE-->
                    <button type="button" class="close">×</button>
                    <h4 class="toast-title">{{{title}}}</h4>
                    <p class="toast-body">{{{body}}}</p>
                </div>
            </div>
        </script>
    </div>                                         

                <div id = "wordSearcher" Class="raised-2" style="display:none">
                <div Class="input-group">
                    <input type = "text" Class="form-control" placeholder="Cerca..." spellcheck="false">
                    <span id = "searchMatches" ></span>
                    <div Class="input-group-btn">
                        <Button type = "button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.findNext()"><i Class="icon ico-arrow-down"></i></button>
                        <Button type = "button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.findPrev()"><i Class="icon ico-arrow-up"></i></button>
                        <Button type = "button" Class="btn btn btn-icon btn-xs" onclick="WordSearcher.closeSearch()"><i Class="icon ico-close"></i></button>
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

            <nav id="topNavbar" Class="navbar top-navbar navbar-inverse">
            <!-- TOP-NAVBAR -->        
            <div Class="container">
                <div Class="navbar-header">
                    <a Class="navbar-brand adver-link" href="https://sport.sky.it/" target="_blank" rel="nofollow"><img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/sky_strip.png?v=2020" alt=""></a>
                </div>
            </div>        
        </nav>
    <!-- SETUP 0 -->
    <!-- LEGA 147953 -->
    <!-- onlyTopBar False -->
    <div id="subNavbarStickyDetector"></div>
    <nav id="subNavbar" class="navbar sub-navbar _floating-navbar navbar-card has-subnavbar " role="navigation">
        <!-- SUB-NAVBAR -->
            <div class="container">
                <button type="button" class="navbar-toggle visible-leagues" data-toggle="collapse" data-target="#leagueMenu">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                    <a id="teamInfo" href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/info-squadra" class="navbar-link visible-xs">
                        <img class="shirt img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/s_606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                    </a>                                                <div class="collapse navbar-collapse hidden-league-member visible-user-initialized">
                    <div class="navbar-header affix-slide-out">
                        <div class="navbar-brand">
                            <span Class="badge badge-arrow">Link Utili <span class="visible-euro-leagues">Euro</span></span>
                        </div>
                    </div>
                    <ul Class="nav navbar-nav affix-slide-out">
                            <li class="active"><a href="https://www.fantacalcio.it" target="_blank">News</a></li>
                            <li><a href="https://www.fantacalcio.it/probabili-formazioni-serie-a" target="_blank">Probabili Formazioni</a></li>
                            <li><a href="https://www.fantacalcio.it/voti-serie-a" target="_blank">Voti</a></li>
                            <li><a href="https://www.fantacalcio.it/pagelle" target="_blank">Pagelle</a></li>

                    </ul>
                </div>
                <div id="leaguesMenu" class="nav-menu visible-leagues hidden-guest">
                    <script id="userLeaguesTemplate" class="leagues-template" type="text/x-handlebars-template">
                        <ul class="nav navbar-nav navbar-left navbar-leagues">
                            <li class="dropdown dropdown-leagues slide-down">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <!--<span class="league-logo"><img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/mode_classic.png" /></span>-->
                                    <span class="league-logo"><img class="logo img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/no_logo.png" onerror="handleImageError(this, Settings.missingLogoSrc)" /></span>
                                    <span class="league-name">Lega Bobica</span>
                                    <sup class="league-type label label-classic hidden-mantra">classic</sup>
                                    <sup Then class="league-type label label-mantra visible-mantra">mantra</sup>
                                    <span class="caret"></span>
                                </a>
                               
                                <ul class="dropdown-menu smart-scrollbar">
                                    <li class="dropdown-item">
                                        <a class="no-league btn btn-link btn-ghost" 
                                           href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">Modifica impostazioni <i class="pull-right icon ico-edit"></i></a>
                                    </li>
                                    {{#each  (filter leghe 'visibile' '1')}}
                                    {{#unless (equal id '147953') }}
                                    <li class="dropdown-item">
                                        <a class="league" data-id="{{id}}" data-league-type="{{tipo_lega}}" href="https://leghe.fantacalcio.it/{{alias}}" data-league-section><span class="league-logo-bullet"></span> {{nome}}</a>
                                    </li>
                                    {{/unless}}
                                    {{/each}}
                                    <li class="dropdown-item">
                                        <a class="no-league btn btn-link btn-orange" href="https://leghe.fantacalcio.it/registrazione?from=0">Crea una <b class="euro">Euro</b>Lega <i class="pull-right icon ico-add"></i></a>
                                    </li>
                                    <li class="dropdown-item">
                                        <a class="no-league btn btn-link btn-blue" href="https://leghe.fantacalcio.it/registrazione?from=1">Unisciti ad una <b class="euro">Euro</b>Lega <i class="pull-right icon ico-add"></i></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </script>
                </div>
                <div class="navbar-league hidden-league-member visible-leagues">
                    <span class="league-logo"><img class="logo img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/no_logo.png" onerror="handleImageError(this, Settings.missingLogoSrc)" /></span>
                    <span class="league-name">Lega Bobica</span>
                </div>
                <div class="navbar-toggle navbar-logo"><img class="lettering-header" width="250" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/lettering_header_fc.svg" /></div>
                <!--
                <script class="leagues-template" type="text/x-handlebars-template">
                    {{#if (filter leghe 'visibile' '1') }}
                    <a class="visible-guest btn btn-primary btn-sm btn-raised navbar-btn navbar-right" href="https://leghe.fantacalcio.it/">Vai alle tue <span class="euro">Euro</span>Leghe <i class="icon fg-right-arrow"></i></a>
                    {{/if}}
                </script>
                -->
                <a class="visible-guest-logged btn btn-primary btn-sm btn-raised navbar-btn navbar-right" href="https://leghe.fantacalcio.it/">Vai alle tue <span class="euro">Euro</span>Leghe <i class="icon fg-right-arrow"></i></a>
                <!--<button type="button" class="hidden-logged btn btn-primary btn-sm btn-raised navbar-btn navbar-right mw-auto" data-toggle="modal" data-target="#loginModal">Accedi</button>-->
                <!--<a href="https://leghe.fantacalcio.it/registrazione" class="hidden-logged btn btn-secondary btn-sm btn-raised navbar-btn navbar-right">Registrati</a>-->
                
                <a href="https://leghe.fantacalcio.it/login" class="hidden-logged btn btn-primary btn-sm btn-raised navbar-btn navbar-right mw-auto">Accedi</a>
                <a href="https://leghe.fantacalcio.it/riscatta-voucher" class="hidden-logged btn btn-primary btn-sm navbar-btn navbar-right mw-auto">Riscatta voucher</a>
                <div class="nav-menu">
                    <ul class="nav nav-icon-top navbar-nav navbar-right user-info visible-logged">
                        
                        
                        <li Class="visible-live fab-sm">
                            <a class="label label-success mx-2 " href="https://leghe.fantacalcio.it/lega-bobica/live">LIVE!</a>
                        </li>

                        

                        <!-- MENU SCAMBI e NOTIFICHE DISABILITATI TEMPORANEAMENTE
                        <li class="visible-leagues"><a href="#"><i class="icon ico-change-players"></i>Scambi</a></li>
                        <li class="visible-leagues notice mobile-item"><a href="#"><i class="icon ico-bell"></i>Notifiche</a></li>
                        -->
                        <li id="shop" class="visible-leagues mobile-item"><a href="javascript:goToShop()"><i class="icon fc-ico-cart"></i>Shop</a></li>
                        <li id="notifications" class="visible-leagues _notice mobile-item"><a href="javascript:Notifications.togglePopup(this)"><i class="icon ico-bell"></i>Notifiche</a></li>
                        <script id="userInfoTemplate" class="handlebar-login-info" type="text/x-handlebars-template">
                            {{#with utente}}
                            <li id="user-dropdown" class="dropdown slide-down fab-sm">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span class="user-avatar"><span class="initials">{{initials}}</span></span>
                                    <span class="username">{{username}}</span>
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu right-sidenav">
                                    <li class="dropdown-header">
                                        <span class="right-sidenav-header">
                                            <span class="user-avatar"><span class="initials">{{initials}}</span></span>
                                            <span class="username">{{username}}</span>
                                            <button class="btn btn-link pull-right"><i class="icon ico-close"></i></button>
                                        </span>
                                    </li>
                                    <li class="dropdown-item grey"><span class="user-nick"><b>Nome utente:</b> <span class="user-nick">{{username}}</span></span></li>
                                    <li class="dropdown-item grey"><span class="user-email"><b>E-Mail:</b> <span class="email">{{email}}</span></span></li>
                                    
                                    <li class="dropdown-item"><a href="https://leghe.fantacalcio.it/modifica-dati">Modifica dati utente</a></li>
                                    <li class="dropdown-item"><a href="javascript:Globals.displayPrivacyOptions()">Opzioni privacy</a></li>
                                    <li class="dropdown-item"><a href="https://leghe.fantacalcio.it/riscatta-voucher">Riscatta voucher</a></li>
                                    

                                    <li class="dropdown-item"><a href="javascript:Globals.logout()">Logout</a></li>
                                </ul>
                            </li>
                            {{/with}}
                        </script>
                        
                        <li class="visible-leagues visible-admin hidden-xs">
                            <a data-toggle="modal" href="#globalMenuModal" data-tab="0" class="area-league-text">
                                <img class="icon" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_admin.svg" />Admin
                            </a>
                        </li>
                        <!--<li class="visible-leagues"><a data-toggle="modal" href="#globalMenuModal" data-tab="1" class="play-text"><img class="icon" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_gioca.svg" />Gioca!</a></li>-->
                    </ul>
                </div>
                    <ul id="leagueMenu" Class="visible-leagues nav navbar navbar-nav navbar-card raised navbar-subheader flex navbar-collapse left-sidenav">
                        <li Class="hidden-sm hidden-md hidden-lg menu-header sidenav-icon-item">
                            <h2 class="flex flex-center no-margin">
                                Menu Lega
                                <button class="btn btn-icon btn-sm btn-close pull-right" onclick="Layout.closeLeftSideNav()">
                                    <i class="icon ico-close"></i>
                                </button>
                            </h2>
                        </li>
                        <li Class="visible-leagues visible-admin hidden-sm hidden-md hidden-lg sidenav-icon-item">
                            <a data-toggle="modal" href="#globalMenuModal" data-tab="0" Class="area-league-text">
                                <img Class="icon" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_admin.svg" />Admin
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/squadre">
                                <i class="icon icon-x2 fg-shield"></i> Squadre
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco/rose">
                                <i class="icon icon-x2 ico-s-rose"></i> Rose
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/lista-competizioni">
                                <i class="icon icon-x2 ico-league"></i>  Competizioni
                            </a>
                        </li>
                        <li class="hidden-guest">
                            <a href="https://leghe.fantacalcio.it/lega-bobica/lista-mercati">
                                <i class="icon icon-x2 ico-market"></i> Mercati
                            </a>
                        </li>
                        <li class="hidden-guest">
                            <a href="https://leghe.fantacalcio.it/lega-bobica/statistiche">
                                <i class="icon icon-x2 ico-associazione"></i>  Statistiche
                            </a>
                        </li>
                        <li class="pull-right"></li>
                        <li class="hidden-guest">
                            <a href="https://leghe.fantacalcio.it/lega-bobica/albo-oro">
                                <i class="icon icon-x2 fg-ribbon-medal"></i>  Albo D'Oro
                            </a>
                        </li>
                        <li class="dropdown hidden-guest">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                                <i class="icon icon-x2 ico-archive"></i> Archivio Lega<span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="https://leghe.fantacalcio.it/lega-bobica/lista-comunicazioni">
                                        <i class="icon icon-x2 fg-megaphone"></i>  Comunicazioni
                                    </a>
                                </li>
                                <li>
                                    <a href="https://leghe.fantacalcio.it/lega-bobica/lista-documenti">
                                        <i class="icon icon-x2 fg-file"></i>  Documenti
                                    </a>
                                </li>
                                <li>
                                    <a href="https://leghe.fantacalcio.it/lega-bobica/registro-attivita-admin">
                                        <i class="icon icon-x2 fg-pen"></i>  Registro Admin
                                    </a>
                                </li>
                                <li>
                                    <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">
                                        <i class="icon icon-x2 fg-law-book"></i>  Impostazioni
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>                               </div>
    </nav>

    <div class="viewport _desktop-smart-scrollbar" data-setup="0">
        <main class="main-container">
            <!-- MAIN CONTAINER -->
            <div class="container container-adver">
                <div class="adver">
                    <ins data-revive-zoneid="8302" data-revive-id="6609ba8ff88606794e22ff360400bcea"></ins>
<script async src="//adx.4strokemedia.com/www/delivery/asyncjs.php"></script> 
                </div>
            </div>
            <div class="showcase dashboard" data-setup="0" data-toggle="collapse"
                 data-target="#competitionMenu">
                <div class="container">
                        <div Class="my-team-card">
                            <button class="btn btn-sm btn-raised btn-success my-2 buy-control hide" onclick="buyShirt('showcase')">
                                <i class="icon ico-shirts icon-x2 mr-1"></i> ACQUISTA LA TUA MAGLIA
                            </button>

                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-logo" class="my-team-crest circle-link editable-link">
                                <img class="crest img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png"
                                     onerror="handleImageError(this, Settings.missingCrestSrc)"
                                     onload="handleImageLoad(this)">
                            </a>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-divisa" class="my-team-shirt circle-link editable-link">
                                <img class="shirt img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/s_606740_06862445.png"
                                     onerror="handleImageError(this, Settings.missingShirtSrc)"
                                     onload="handleImageLoad(this)">
                            </a>
                            <a class="my-team-info editable-link" href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/info-squadra">
                                <h5 class="my-division">
                                    Divisione A
                                </h5>
                                <h4 class="my-team-name">
                                    USS Torquemada
                                </h4>
                                <h5 class="my-team-president">
                                    Daniele
                                </h5>
                            </a>
                        </div>
                        <a Class="lettering-box root-link" href="https://leghe.fantacalcio.it/">
                            <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/lettering_fc.svg" class="lettering">
                        </a>
                    <!-- SHORTCUTS -->
                    <ul class="shortcuts shortcuts-circle visible-league-member">
                        <li class="visible-live" data-toggle="tooltip" title="Vai alla pagina del LIVE per visualizzare i voti della tua partita in tempo reale.">
                            <a class="shortcut" href="https://leghe.fantacalcio.it/lega-bobica/live">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_live.svg">
                                <div class="caption">Live</div>
                            </a>
                        </li>
                        <li class="hidden-live visible-is-in-competition"
                            data-toggle="tooltip" title="Visualizza e modifica la formazione per la tua prossima partita.">
                            <a class="shortcut" href="https://leghe.fantacalcio.it/lega-bobica/area-gioco/inserisci-formazione">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_formazione.svg">
                                <div class="caption">Schiera Formazione</div>
                            </a>
                        </li>
                        <li class="break"></li>
                        <li data-toggle="tooltip" title="Vai alla pagina per partecipare al mercato corrente.">
                            <a class="shortcut" href="https://leghe.fantacalcio.it/lega-bobica/mercato">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_search_market.svg">
                                <div class="caption">Mercato</div>
                            </a>
                        </li>
                        <li data-toggle="tooltip" title="Visualizza la lista dei giocatori ancora liberi della tua Lega.">
                            <a class="shortcut" href="https://leghe.fantacalcio.it/lega-bobica/lista-svincolati">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_svincolati.svg">
                                <div class="caption">Lista Svincolati</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container page page-card sub-showcase" data-setup="0" data-id="3597">
    <!-- COMPETITION ID: 296201 -->
    <!-- COMPETITION COUNT: 1 -->
    <!-- GUEST: False -->
        <div class="bubble-menu competition-container competition-header dashboard" data-len="1" tabindex="0">
            <div class="competition-current dropdown slide-down" data-id="296201" id="competitionDropdown">
                <a href="https://leghe.fantacalcio.it/lega-bobica/home" class="competition-icon competition-icon-1">
                    <span class="not-in-competition-alert hidden-is-in-competition" data-toggle="tooltip" title="Non partecipi a questa competizione">!</span>
                </a>
                <div class="dropdown-label" data-toggle="dropdown">
                    <div class="competition-current-name clamp-3">Lega Bobica</div>
                    <span class="caret"></span>

                    <small class="competition-type" data-competition-type="1"></small>
                </div>
                <ul class="dropdown-menu smart-scrollbar competition-list">
                    <li class="dropdown-item visible-admin">
                        <a class="no-competition btn btn-link btn-primary"
                           href="https://leghe.fantacalcio.it/lega-bobica/dettaglio-competizione/296201?id=296201">Impostazioni competizione <i class="pull-right icon ico-edit"></i></a>
                    </li>
                    <li class='dropdown-item'><a href='#' data-isin='true' data-id='296201'><span class='competition-icon competition-icon-1'></span>Lega Bobica</a></li>
                    <li class="dropdown-item visible-admin">
                        <a class="no-competition btn btn-link btn-orange" href="https://leghe.fantacalcio.it/lega-bobica/crea-competizione">Crea Competizione <i class="pull-right icon ico-add-user"></i></a>
                    </li>
                </ul>
            </div>
                            <!-- COMPETITION MENU - B-NAVBAR -->
                <nav id="competitionMenu"
                      role="navigation"
                      class="navbar navbar-primary navbar-card raised main-menu collapsed competition-type-1"
                      data-toggle="collapse"
                      data-target="#competitionMenu">
                    <div class="container">
                        <ul class="nav navbar-nav navbar-primary navbar-responsive">
                            <li class="competition-home-link"><a href="https://leghe.fantacalcio.it/lega-bobica/home"><i class="icon ico-home icon-3x"></i></a></li>
                            <li class="competition-ranking-link"><a href="https://leghe.fantacalcio.it/lega-bobica/classifica">Classifica</a></li>
                                <li Class="competition-formations-link"><a href="https://leghe.fantacalcio.it/lega-bobica/formazioni">Formazioni</a></li>

                            <li class="competition-calendar-link"><a href="https://leghe.fantacalcio.it/lega-bobica/calendario">Calendario</a></li>
                            
                                <li Class="competition-fantastrip-link"><a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco/fantaschedina">Fantaschedina</a></li>
                        </ul>
                        <ul Class="nav navbar-nav navbar-right navbar-responsive">
                                <li> <a href = "https://leghe.fantacalcio.it/lega-bobica/dettaglio-competizione/296201" > Regole</a></li>
                        </ul>
                        <!-- OLD MENU -->
                    </div>
                </nav>
        </div>
                <div class="_row padding flex">
                    <!-- SETUP MENU -->
                    <!-- MAIN CONTENTS -->
                    <div class="main-content col-xs-12 col-sm-12 col-md-8 col-lg-8 flex-col flex-start no-padding wait-css-loading">
                        

<script id="cio87a"> __.s('lt', __.dp('eyJzdGF0ZSI6MCwic3VjY2VzcyI6dHJ1ZSwiZGF0YSI6W3siaWQiOjYwNjc0MCwiaWR1IjozNTk3LCJuIjoiVVNTIFRvcnF1ZW1hZGEiLCJudSI6IkRhbmllbGUiLCJsIjoibm9fbG9nbzEzLnBuZyIsImxtIjp7ImZvcm1hIjoiMDYiLCJtb3Rpdm8iOiIwMSIsInNpbWJvbG8iOiIxNyIsImNvbG9yaSI6WyIjMzMzMzMzIiwiI0Y3OTIyNSIsIiNDRkQ4RTYiXSwic3BvbnNvciI6IjAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOltdLCJ2ZXIiOjB9LCJtIjoiNjA2NzQwXzA2ODYyNDQ1LnBuZyIsIm1zIjoic182MDY3NDBfMDY4NjI0NDUucG5nIiwibW0iOnsiZm9ybWEiOiIzOCIsIm1vdGl2byI6IjAwIiwic2ltYm9sbyI6IjAwIiwiY29sb3JpIjpbIiNmZmZmZmYiLCIjZmQwZDFiIiwiI2ZhZDEzYyJdLCJzcG9uc29yIjoiMDMiLCJzcG9uc29yX2lkIjoyOSwiYmFkZ2UiOlsiMDciXSwidmVyIjoxfSwiY2FsIjoiNDM2MDs1ODc2OzIyMTE7MjgxNSIsImNzIjoiNDsxOzg7NSIsImMiOmZhbHNlLCJyIjp7InAiOjQsImQiOjAsImMiOjAsImEiOjB9LCJzdCI6IjE7MTsxIiwiY3JpIjo1MDAsImNyIjo0ODIsImFsbCI6W3siaWQiOjM1OTcsInQiOjAsIm5sIjp0cnVlLCJuIjoiRGFuaWVsZSJ9XSwiZCI6IkEifSx7ImlkIjo2MTE5ODAsImlkdSI6MTA1ODc3MSwibiI6IkFucyBSZWkgU3BvcnQgVmVyZWluIiwibnUiOiJ0YXNzaXVzMTkwOCIsImwiOiJub19sb2dvOS5wbmciLCJsbSI6eyJmb3JtYSI6IjA2IiwibW90aXZvIjoiMDEiLCJzaW1ib2xvIjoiMTciLCJjb2xvcmkiOlsiIzMzMzMzMyIsIiNGNzkyMjUiLCIjQ0ZEOEU2Il0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbXSwidmVyIjowfSwibSI6IjYxMTk4MF8wODYwMzYyNC5wbmciLCJtcyI6InNfNjExOTgwXzA4NjAzNjI0LnBuZyIsIm1tIjp7ImZvcm1hIjoiMDQiLCJtb3Rpdm8iOiIiLCJzaW1ib2xvIjoiIiwiY29sb3JpIjpbIiM2NjJEOTEiLCIjRkQyOEZDIiwiI0ZBRDEzQyJdLCJzcG9uc29yIjoiMDMiLCJzcG9uc29yX2lkIjozMywiYmFkZ2UiOltdLCJ2ZXIiOjF9LCJjYWwiOiIiLCJjcyI6IiIsImMiOmZhbHNlLCJyIjp7InAiOjAsImQiOjAsImMiOjAsImEiOjB9LCJzdCI6IjE7MTsxIiwiY3JpIjo1MDAsImNyIjo1MDAsImFsbCI6W3siaWQiOjEwNTg3NzEsInQiOjAsIm5sIjp0cnVlLCJuIjoidGFzc2l1czE5MDgifV0sImQiOiJBIn0seyJpZCI6NjQ5MjM0LCJpZHUiOjEwNzkyNDksIm4iOiJDcyBDYW5uYWJpcyBTdHJlZXQiLCJudSI6ImNpc2t1cnQ4NyIsImwiOiJub19sb2dvMTUucG5nIiwibG0iOnsiZm9ybWEiOiIwNiIsIm1vdGl2byI6IjAxIiwic2ltYm9sbyI6IjE3IiwiY29sb3JpIjpbIiMzMzMzMzMiLCIjRjc5MjI1IiwiI0NGRDhFNiJdLCJzcG9uc29yIjoiMDAiLCJzcG9uc29yX2lkIjowLCJiYWRnZSI6W10sInZlciI6MH0sIm0iOiI2NDkyMzRfMDY4NDE3LnBuZyIsIm1zIjoic182NDkyMzRfMDY4NDE3LnBuZyIsIm1tIjp7ImZvcm1hIjoiNDMiLCJtb3Rpdm8iOiIiLCJzaW1ib2xvIjoiIiwiY29sb3JpIjpbIiNGRkZGRkYiLCIjMEEyM0ZCIiwiI0ZGRkUzNyJdLCJzcG9uc29yIjoiMDEiLCJzcG9uc29yX2lkIjoyNywiYmFkZ2UiOlsiMDUiXSwidmVyIjoxfSwiY2FsIjoiIiwiY3MiOiIiLCJjIjpmYWxzZSwiciI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwic3QiOiIxOzE7MSIsImNyaSI6NTAwLCJjciI6NTAwLCJhbGwiOlt7ImlkIjoxMDc5MjQ5LCJ0IjowLCJubCI6dHJ1ZSwibiI6ImNpc2t1cnQ4NyJ9LHsiaWQiOjU5ODg2OTQsInQiOjEsIm5sIjpmYWxzZSwibiI6Im1lbGFyb3NhZ2lhbmx1Y2EifV0sImQiOiJBIn0seyJpZCI6NjcxNTI5LCJpZHUiOjE1Mzk0MSwibiI6IldheXN0YXIgUm95Y28iLCJudSI6IlBpcHBvIiwibCI6IjY3MTUyOV8wOTg0NzY4MS5wbmciLCJsbSI6eyJmb3JtYSI6IjAwIiwibW90aXZvIjoiMDAiLCJzaW1ib2xvIjoiMDAiLCJjb2xvcmkiOlsiI2ZmZmZmZiJdLCJzcG9uc29yIjoiMDAiLCJzcG9uc29yX2lkIjowLCJiYWRnZSI6WyIwMCJdLCJ2ZXIiOjB9LCJtIjoiNjcxNTI5XzA3NjMzNzM5LnBuZyIsIm1zIjoic182NzE1MjlfMDc2MzM3MzkucG5nIiwibW0iOnsiZm9ybWEiOiIzMyIsIm1vdGl2byI6IjAwIiwic2ltYm9sbyI6IjAwIiwiY29sb3JpIjpbIiNmZmZmZmYiLCIjMzMzMzMzIiwiIzMzMzMzMyJdLCJzcG9uc29yIjoiMDIiLCJzcG9uc29yX2lkIjozMywiYmFkZ2UiOltdLCJ2ZXIiOjF9LCJjYWwiOiIiLCJjcyI6IiIsImMiOmZhbHNlLCJyIjp7InAiOjAsImQiOjAsImMiOjAsImEiOjB9LCJzdCI6IjE7MTsxIiwiY3JpIjo1MDAsImNyIjo1MDAsImFsbCI6W3siaWQiOjE1Mzk0MSwidCI6MCwibmwiOnRydWUsIm4iOiJQaXBwbyJ9XSwiZCI6IkEifSx7ImlkIjo2OTk0MzYsImlkdSI6MzMyMjc3LCJuIjoiTGEgRG9tZW5pY2EgZGVsIERpcGVuZGVudGUgUHViYmxpY28iLCJudSI6Im1hdHRpYW04NCIsImwiOiJub19sb2dvMjAucG5nIiwibG0iOnsiZm9ybWEiOiIwNiIsIm1vdGl2byI6IjAxIiwic2ltYm9sbyI6IjE3IiwiY29sb3JpIjpbIiMzMzMzMzMiLCIjRjc5MjI1IiwiI0NGRDhFNiJdLCJzcG9uc29yIjoiMDAiLCJzcG9uc29yX2lkIjowLCJiYWRnZSI6W10sInZlciI6MH0sIm0iOiI2OTk0MzZfMDAzODIxMTcucG5nIiwibXMiOiJzXzY5OTQzNl8wMDM4MjExNy5wbmciLCJtbSI6eyJmb3JtYSI6IjExIiwibW90aXZvIjoiIiwic2ltYm9sbyI6IiIsImNvbG9yaSI6WyIjRkZGRkZGIiwiI0ZEMEQxQiIsIiNGRDBEMUIiXSwic3BvbnNvciI6IjAxIiwic3BvbnNvcl9pZCI6MjcsImJhZGdlIjpbXSwidmVyIjoxfSwiY2FsIjoiIiwiY3MiOiIiLCJjIjpmYWxzZSwiciI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwic3QiOiIxOzA7MSIsImNyaSI6NTAwLCJjciI6NTAwLCJhbGwiOlt7ImlkIjozMzIyNzcsInQiOjAsIm5sIjp0cnVlLCJuIjoibWF0dGlhbTg0In0seyJpZCI6ODkyOTIsInQiOjEsIm5sIjp0cnVlLCJuIjoiUm9iYnkgTWNTYWRvIn1dLCJkIjoiQSJ9LHsiaWQiOjMxMjk4OTQsImlkdSI6Njc2NzkwLCJuIjoiTGVCdXNjZW1pIFJldmVuZ2UiLCJudSI6Ikl2YW4iLCJsIjoibm9fbG9nbzEwLnBuZyIsImxtIjp7ImZvcm1hIjoiMDYiLCJtb3Rpdm8iOiIwMSIsInNpbWJvbG8iOiIxNyIsImNvbG9yaSI6WyIjMzMzMzMzIiwiI0Y3OTIyNSIsIiNDRkQ4RTYiXSwic3BvbnNvciI6IjAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOltdLCJ2ZXIiOjB9LCJtIjoiMzEyOTg5NF8wOTUzODgwOS5wbmciLCJtcyI6InNfMzEyOTg5NF8wOTUzODgwOS5wbmciLCJtbSI6eyJmb3JtYSI6IjUwIiwibW90aXZvIjoiIiwic2ltYm9sbyI6IiIsImNvbG9yaSI6WyIjNjYyRDkxIiwiI0ZEMjhGQyIsIiNGQUQxM0MiXSwic3BvbnNvciI6IjAxIiwic3BvbnNvcl9pZCI6MjksImJhZGdlIjpbXSwidmVyIjoxfSwiY2FsIjoiIiwiY3MiOiIiLCJjIjpmYWxzZSwiciI6eyJwIjowLCJkIjowLCJjIjowLCJhIjowfSwic3QiOiIxOzE7MSIsImNyaSI6NTAwLCJjciI6NTAwLCJhbGwiOlt7ImlkIjo2NzY3OTAsInQiOjAsIm5sIjp0cnVlLCJuIjoiSXZhbiJ9XSwiZCI6IkEifSx7ImlkIjo2MDIwMDY0LCJpZHUiOjMxNTYxMjMsIm4iOiJEb2NrbGFuZHMgVW5pdGVkIEYuQy4iLCJudSI6Im1pc3RlciBKTSIsImwiOiI2MDIwMDY0XzAyMzM1MDUxLnBuZyIsImxtIjp7ImZvcm1hIjoiMDAiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjZmZmZmZmIl0sInNwb25zb3IiOiIwMCIsInNwb25zb3JfaWQiOjAsImJhZGdlIjpbIjAwIl0sInZlciI6MH0sIm0iOiI2MDIwMDY0XzAzNjczNTg3LnBuZyIsIm1zIjoic182MDIwMDY0XzAzNjczNTg3LnBuZyIsIm1tIjp7ImZvcm1hIjoiMzIiLCJtb3Rpdm8iOiIwMCIsInNpbWJvbG8iOiIwMCIsImNvbG9yaSI6WyIjQ0ZEOEU2IiwiIzlFMEI1RCIsIiM5MURFRkUiXSwic3BvbnNvciI6IjAyIiwic3BvbnNvcl9pZCI6MzMsImJhZGdlIjpbIjAxIiwiMDMiLCIwNCJdLCJ2ZXIiOjF9LCJjYWwiOiIiLCJjcyI6IiIsImMiOmZhbHNlLCJyIjp7InAiOjAsImQiOjAsImMiOjAsImEiOjB9LCJzdCI6IjE7MTsxIiwiY3JpIjo1MDAsImNyIjo1MDAsImFsbCI6W3siaWQiOjMxNTYxMjMsInQiOjAsIm5sIjp0cnVlLCJuIjoibWlzdGVyIEpNIn1dLCJkIjoiQSJ9LHsiaWQiOjY3NTYwMzYsImlkdSI6NDE5NTgzNywibiI6IlBpb3ZlIHN1bCBiYWduYXRvIiwibnUiOiJCYXJ0IiwibCI6Im5vX2xvZ28zLnBuZyIsImxtIjp7ImZvcm1hIjoiMDYiLCJtb3Rpdm8iOiIwMSIsInNpbWJvbG8iOiIxNyIsImNvbG9yaSI6WyIjMzMzMzMzIiwiI0Y3OTIyNSIsIiNDRkQ4RTYiXSwic3BvbnNvciI6IjAwIiwic3BvbnNvcl9pZCI6MCwiYmFkZ2UiOltdLCJ2ZXIiOjB9LCJtIjoiNjc1NjAzNl8wNTQyNzIxLnBuZyIsIm1zIjoic182NzU2MDM2XzA1NDI3MjEucG5nIiwibW0iOnsiZm9ybWEiOiI1MCIsIm1vdGl2byI6IjAwIiwic2ltYm9sbyI6IjAwIiwiY29sb3JpIjpbIiM2NjJkOTEiLCIjZmQyOGZjIiwiI2ZhZDEzYyJdLCJzcG9uc29yIjoiMDMiLCJzcG9uc29yX2lkIjoyOSwiYmFkZ2UiOltdLCJ2ZXIiOjF9LCJjYWwiOiIiLCJjcyI6IiIsImMiOmZhbHNlLCJyIjp7InAiOjAsImQiOjAsImMiOjAsImEiOjB9LCJzdCI6IjE7MTsxIiwiY3JpIjo1MDAsImNyIjo1MDAsImFsbCI6W3siaWQiOjQxOTU4MzcsInQiOjAsIm5sIjp0cnVlLCJuIjoiQmFydCJ9XSwiZCI6IkEifV0sImVycm9yX21zZ3MiOm51bGwsInRva2VuIjoiIiwidXBkYXRlIjp0cnVlfQ==')); __.X('cio87a');</script>
<script id="gkiop12"> __.s('tmp', __.d('NjA2NzQwOzYxMTk4MDs2NDkyMzQ7NjcxNTI5OzY5OTQzNjszMTI5ODk0OzYwMjAwNjQ7Njc1NjAzNg==', true) + "|0|1693477904768|False"); __.X('gkiop12'); </script>

<ol class="breadcrumb">
        <li><a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco">Area Gioco</a></li>
        <li><a href="https://leghe.fantacalcio.it/lega-bobica/area-gioco/squadre">Squadre</a></li>
    <li class="active">Rose</li>
</ol>
<hr class="solid light" />
<br />

<nav id="filterNavbar" class="container navbar invite-navbar">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs invite-menu raised" role="tablist">
        <li class="active"> <a href="#" role="tab" data-key="competition">In questa competizione</a></li>
        <li class=""><a href="#" role="tab" data-key="all">Nella lega</a></li>
    </ul>
</nav><div class="visible-admin">
                <div class="alert alert-info alert-instruction alert-dismissible fade in show clearfix" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <b>Hai gia completato il mercato con i tuoi amici?</b><br>Allora aggiorna le rose direttamente dalla sezione <a href='https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-rose'>GESTIONE ROSE</a>.
             </div>

</div>
<div class="tab-content transfers-tab-content no-border">
    <div role="tabpanel" class="tab-pane active tab-rosters visible-filtered-no-competitions">
                    <div class="card super-padding raised-2">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 class="text-primary">Il gioco non è ancora iniziato!</h4>
                        <br>
                        <p>
                                <b class="hidden-webview">In qualità di admin <a href="https://leghe.fantacalcio.it/lega-bobica/crea-competizione">organizza una competizione</a>.</b>
                        </p>
                    </div>
                    <div class="col-sm-4"><img class="img-responsive lazyloaded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png"></div>
                </div>
            </div>
            <!-- ADMIN MENU -->
            <div Class="card raised-2 admin-tools tools private widget visible-admin mt-4 p-0">
                <div Class="widget-body">
                    <h4 Class="widget-title text-lined">PER L'ADMIN</h4>
                    <ul Class="list-icon flex flex-space-around">
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_pagelle.svg">
                                <div Class="caption">Invita Partecipanti</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_opzioni.svg">
                                <div Class="caption">Imposta Regolamento</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/crea-mercato">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_crea_mercato.svg">
                                <div Class="caption">Crea Mercato</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/crea-competizione">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_crea_comp.svg">
                                <div Class="caption">Crea Competizione</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- USER MENU -->
            <div Class="card raised-2 user-tools tools private widget visible-admin p-0">
                <div Class="widget-body">
                    <h4 Class="widget-title text-lined">STRUMENTI SQUADRA</h4>
                    <ul Class="list-icon flex flex-space-around">
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-logo">
                                <img class="img-circle bg-color-1" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_custom_crest.svg">
                                <div Class="caption">Personalizza il tuo scudetto</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-divisa">
                                <img class="img-circle bg-color-2" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_custom_shirt.svg">
                                <div Class="caption">Personalizza la tua maglia</div>
                            </a>
                        </li>
                        <li Class="divider"></li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/lista-mercati">
                                <img class="img-circle bg-color-3" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_search_market.svg">
                                <div Class="caption">Controlla il mercato</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/squadre">
                                <img class="img-circle bg-color-4" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_teams.svg">
                                <div Class="caption">Dai uno sguardo alle altre squadre</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

    </div>
    <div role="tabpanel" class="tab-pane active tab-rosters hidden-filtered-no-competitions visible-initialized">
        <br />
        <h4 Class="has-select clearfix public-heading">
            Rose <small class="visible-filtered">(solo squadre in questa competizione)</small>
            <Script Class="handlebar-team-filter" type="text/x-handlebars-template" data-wrap-unique-uid="team-filter">
                <Span>
                <select id = "teamFilter" Class="selectpicker show-tick pull-right"
                            {{#unless mobile}} multiple {{/unless}}
                            data-mobile="{{mobile}}"
                            title="Tutte le squadre" data-actions-box="true" data-icon-base="icon"
                            data-tick-icon="fg-check" data-show-tick="true"
                            data-select-all-text="TUTTE" data-deselect-all-text="NESSUNA"
                            data-none-results-text="Nessuna corrispondenza per '{0}'"
                            data-count-selected-Text="{0} squadre selezionate"
                            data-selected-text-format="count"
                            data-live-search="{{#if (and (not mobile) (gt options.length 10))}}true{{else}}false{{/if}}"
                            data-size="10"
                            data-container="body">
                        {{#each options}}
                        {{#if divider}}
                        <option data-divider="true"></Option>
                        {{else}}
                        {{#unless disabled}}
                        <option value = "{{id}}" > {{n}}</Option>
                        {{/unless}}
                        {{/if}}
                        {{/each}}
                    </select>
                </span>
            </script>
        </h4>


            <div class="alert alert-action">
                <p> Tutte le rose della <b class="euro">Euro</b>Lega <em>sempre a portata di mano</em></p>
                <a id="toexcel" href="javascript:downloadRosters()" download
                   data-toggle="tooltip" title="Scarica il file in formato .xlsx delle rose"
                   class="btn btn-outline pull-right">XLSX <i class="icon icon-right fg-download"></i></a>
                <a id="tocsv" href="javascript:MyLeague.downloadRosters()"
                   data-toggle="tooltip" title="Esporta il file delle rose che puoi caricare in FantaAsta Desktop"
                   download class="btn btn-outline pull-right mr-1">Fanta-Asta <i class="icon icon-right fg-download"></i></a>
            </div>
            <br />


        <!-- CACHED ROSTERS -->
        <ul Class="list-rosters" data-lazy-load=".list-rosters-item">
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">USS Torquemada</h4>
                                                <h5>Daniele</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>22
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">caprile</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">di gregorio</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">silvestri</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">terracciano</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">alex sandro</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">marchizza</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">gatti</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ismajli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mari'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">smalling</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">19</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">tomori</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">36</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">vojvoda</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zalewski</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zappacosta</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lazovic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">weah</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">29</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cristante</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rovella</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pobega</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rabiot</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">aouar</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">30</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pellegrini lo.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">35</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">soule'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">politano</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">berardi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">75</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">caprari</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kvaratskhelia</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">165</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">giroud</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">72</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lucca</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">okafor</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">4</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"560<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">-30<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">Cs Cannabis Street</h4>
                                                <h5>Marco</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>0
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">christensen o.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">falcone</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lecce</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lecce.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lecce</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">montipo'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">skorupski</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kayode</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dodo'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">posch</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">14</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">caldirola</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kolasinac</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dorgu</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lecce</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lecce.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lecce</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mina</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">perez n.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">thiaw</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lopez m.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">reijnders</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">49</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zambo anguissa</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">16</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bonaventura</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kastanos</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">luis alberto</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">13</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">caso</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">isaksen</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">karlsson</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lookman</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">29</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pedro</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rafael leao</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">159</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">brenner</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">krstovic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lecce</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lecce.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lecce</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">retegui</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">157</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"518<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">30<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">Union Bagnur</h4>
                                                <h5>Tasso</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>32
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">provedel</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rui patricio</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">10</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">sepe</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">marusic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">d'ambrosio</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rodriguez r.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">vasquez</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">de vrij</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">luperto</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">monterisi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">romagnoli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">spinazzola</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">nandez</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Cagliari</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/cagliari.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Cagliari</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kostic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">arthur melo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mandragora</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">walace</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">frattesi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">loftus-cheek</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">musah</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ederson d.s.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zielinski</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">30</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ndoye</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zaccagni</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">78</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">colombo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dia</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">25</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">thuram</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">84</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">vlahovic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">229</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"548<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">34<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">Docklands United F.C.</h4>
                                                <h5>Jacopo</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>5
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">maignan</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">57</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">milinkovic-savic v.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">sportiello</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bellanova</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">di lorenzo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">23</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">biraghi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">16</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mario rui</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">olivera</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">acerbi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">buongiorno</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pirola</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rrahmani</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">14</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">amrabat</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">gagliardini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">fabbian</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">renato sanches</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">folorunsho</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pessina</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">23</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pogba</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">19</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">messias</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">orsolini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">22</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">de ketelaere</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">17</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">baldanzi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pulisic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">62</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">chiesa</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">88</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dybala</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">125</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">beltran l.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">21</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cheddira</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">toure' e.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zapata d.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">48</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"587<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">26<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">Piove sul Bagnato</h4>
                                                <h5>Silvio</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>30
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">audero</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">di gennaro</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">0</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">sommer</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">44</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">baschirotto</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lecce</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lecce.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lecce</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">oyono</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bastoni</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">42</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">casale</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">erlic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mancini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cuadrado</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-m">M</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">frendrup</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ciurria</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">18</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">calhanoglu</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">52</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cataldi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">locatelli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">10</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">barella</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">70</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-w">W</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">elmas</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">15</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">duda</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">baez</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">strefezza</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lecce</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lecce.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lecce</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">14</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-t">T</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">oristanio</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Cagliari</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/cagliari.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Cagliari</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">gudmundsson a.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">25</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cambiaghi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">deulofeu</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">milik</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">22</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">nzola</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">scamacca</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">112</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">simeone</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"503<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">29<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">La Domenica del Dipendente Pubblico</h4>
                                                <h5>Mattia</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>16
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ochoa</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">perin</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">szczesny</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">56</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cambiaso</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">12</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mazzocchi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">13</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zortea</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">calabria</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dragusin</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">danilo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">parisi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bijol</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">13</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">llorente d.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lucumi'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">toloi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">boloca</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">de roon</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">9</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lobotka</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">21</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">strootman</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ilic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">samardzic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">32</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">felipe anderson</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">50</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">saelemaekers</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">malinovskyi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lauriente'</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ngonge</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">thauvin</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">osimhen</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">261</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">petagna</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Cagliari</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/cagliari.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Cagliari</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">sanabria</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">zirkzee</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">8</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"570<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">29<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">Waystar Royco</h4>
                                                <h5>Pippo</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>26
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">carnesecchi</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">16</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">musso</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">12</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">rossi f.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">0</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">birindelli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">faraoni</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">14</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">terracciano f.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dd">Dd</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">darmian</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">juan jesus</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">doig</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">4</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">hernandez t.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">75</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">beukema</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">milenkovic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">19</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">natan</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">wieteska</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Cagliari</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/cagliari.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Cagliari</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dumfries</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">29</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">jankto</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Cagliari</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/cagliari.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Cagliari</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bennacer</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">cajuste</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">harroui</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Frosinone</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/frosinone.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Frosinone</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">5</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-w">W</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">aebischer</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">10</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">fagioli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">koopmeiners</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">27</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mkhitaryan</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">11</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">candreva</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Salernitana</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/salernitana.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Salernitana</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">28</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">infantino</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">gonzalez n.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Fiorentina</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/fiorentina.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Fiorentina</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">20</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">raspadori</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">arnautovic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">19</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">castellanos</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">immobile</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">190</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"518<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">23<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
        <li class="list-rosters-item raised-2" data-id="606740" data-display-none-after-hide="hidden">
            <div class="no-padding flex-row">
                <div class="media team-header team-header-sm flex-item-fill relative">
                    <div class="media-left">
                        <a href="#" class="team-crest">
                            <img class="media-object crest circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/no_logo13.png" onerror="handleImageError(this, Settings.missingLogoSrc)">
                        </a>
                        <a href="#" class="team-shirt">
                            <img class="media-object shirt circle" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/606740_06862445.png" onerror="handleImageError(this, Settings.missingShirtSrc)">
                        </a>
                    </div>
                    <div class="media-body">
                                                <h4 class="media-heading">LeBuscemi Revenge</h4>
                                                <h5>Ivan</h5>
</div>                    
                    <a class="left-heading-link btn btn-clear" href="https://leghe.fantacalcio.it/lega-bobica/movimenti?t=606740">Lista Movimenti</a>
                </div>
                                        <div class="team-main-info"><small>Crediti residui</small>9
                                            <i class="icon fg-fm"></i>
                </div>
            </div>
            <table class="smart-table table-striped fixed table no-margin has-subheader" id="rosterTable">
                <thead>
                    <tr class="subheader">
                        <th data-key="role" class="sortable cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span></span></th>
                        <th data-key="name" class="sortable cell-text cell-primary x6 smart-x4"><span>Calciatore</span></th>
                        <th data-key="nation" class="sortable cell-text cell-primary x0 euro-x1"><span></span></th>
                        <th data-key="team" class="sortable cell-text cell-primary x4 euro-x3 smart-x2"><span>Squadra</span></th>
                        <th data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Quotazione d'acquisto">Q.acq.</span>
                        </th>
                        <th data-key="cost" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
                            <span data-toggle="tooltip" title="Anni residui">Anni</span>
                        </th>
                    </tr>
                </thead>
                                        <tbody>

        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">contini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">0</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">gollini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-por">Por</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">meret</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">35</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-ds">Ds</span><span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">martin</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Genoa</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/genoa.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Genoa</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bremer</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Juventus</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/juventus.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Juventus</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">19</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">hien</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">izzo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">n'dicka</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">scalvini</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">10</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-dc">Dc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">schuurs</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bakker</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">carlos augusto</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">17</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-e">E</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">dimarco</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">21</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">marin</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">6</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-m">M</span><span Class="role role-c">C</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ricci s.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">2</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">colpani</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Monza</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/monza.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Monza</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">18</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">ferguson</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Bologna</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/bologna.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Bologna</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">15</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">kamada</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Lazio</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/lazio.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Lazio</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">23</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-c">C</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lovric</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Udinese</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/udinese.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Udinese</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">chukwueze</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Milan</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/milan.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Milan</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">32</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lindstrom</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Napoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/napoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Napoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">16</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-w">W</span><span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">vlasic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Torino</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/torino.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Torino</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">12</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-t">T</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pasalic</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Atalanta</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/atalanta.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Atalanta</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-a">A</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">bonazzoli</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Verona</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/verona.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Verona</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">1</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">belotti</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">caputo</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Empoli</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/empoli.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Empoli</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">3</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">lukaku</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Roma</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/roma.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Roma</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">127</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">martinez l.</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Inter</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/inter.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Inter</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">189</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">3</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">mulattieri</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">7</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
        <tr data-id="5876" class="">
        <td data-key="role" class="cell-text cell-role cell-primary x1 smart-x2 mantra-x3 free-player-hidden"><span>
                    <span Class="role role-pc">Pc</span>
        </span>
        </td>
        <td data-key="name" class="cell-text cell-primary x6 smart-x4">
            <b class="capitalize">pinamonti</b>
        </td>
        <td data-key="nation" Class="cell-text cell-primary x0 euro-x1 overflow-visible">
            <span class="nation-flag nation-ita">ita</span>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 smart-x2 euro-x3 visible-xs"> 
            <small class="uppercase">Sassuolo</small>
        </td>
        <td data-key="team" class="cell-text cell-primary x4 euro-x3 no-wrap hidden-xs">
            <img class="crest-ico" src="https://d22uzg7kr35tkk.cloudfront.net/web/img/team/ico/sassuolo.png"
                onerror="handleImageError(this, Settings.missingCrestSrc)" />
             <small class="ellipsis">Sassuolo</small>
        </td>
        <td data-key="price" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-dark-blue">2</b>
        </td>
        <td data-key="contract" class="sortable cell-digit cell-middle text-center cell-primary x3 smart-x2 priced-visible">
            <b class="text-blue2">1</b>
        </td>
    </tr>
                    
                        <tr class="no-results">
                            <td class="padding _finalizing-hidden _free-player-visible" colspan="6">
                                <div class="alert alert-info">Nessun giocatore in rosa</div>
                            </td>
                        </tr>
                </tbody>
                <tfoot class="priced-visible flex-footer">
                    <tr>
                        <td class="padding cell-middle text-middle x4" colspan="4">
                            <em>* calciatore non più in <span class="euro">EuroLega</span><span class="no-euro">Serie A</span></em>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width"584<i class="icon fg-fm"></i> <small>Costo totale d'acquisto</small></div>
                        </td>
                        <td class="text-right x4 cell-team-info">
                            <div class="team-main-info full-width">20<i class="icon fg-fm"></i> <small>Valore totale rosa</small></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </li>
    
<li Class="no-current-competition-team">
                            <div class="card super-padding raised-2">
                <div class="row">
                    <div class="col-sm-8">
                        <h4 class="text-primary">Il gioco non è ancora iniziato!</h4>
                        <br>
                        <p>
                                <b class="hidden-webview">In qualità di admin <a href="https://leghe.fantacalcio.it/lega-bobica/crea-competizione">organizza una competizione</a>.</b>
                        </p>
                    </div>
                    <div class="col-sm-4"><img class="img-responsive lazyloaded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/maghetto-dx.png"></div>
                </div>
            </div>
            <!-- ADMIN MENU -->
            <div Class="card raised-2 admin-tools tools private widget visible-admin mt-4 p-0">
                <div Class="widget-body">
                    <h4 Class="widget-title text-lined">PER L'ADMIN</h4>
                    <ul Class="list-icon flex flex-space-around">
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_pagelle.svg">
                                <div Class="caption">Invita Partecipanti</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_opzioni.svg">
                                <div Class="caption">Imposta Regolamento</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/crea-mercato">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_crea_mercato.svg">
                                <div Class="caption">Crea Mercato</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/crea-competizione">
                                <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_crea_comp.svg">
                                <div Class="caption">Crea Competizione</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- USER MENU -->
            <div Class="card raised-2 user-tools tools private widget visible-admin p-0">
                <div Class="widget-body">
                    <h4 Class="widget-title text-lined">STRUMENTI SQUADRA</h4>
                    <ul Class="list-icon flex flex-space-around">
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-logo">
                                <img class="img-circle bg-color-1" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_custom_crest.svg">
                                <div Class="caption">Personalizza il tuo scudetto</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-squadra/crea-divisa">
                                <img class="img-circle bg-color-2" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_custom_shirt.svg">
                                <div Class="caption">Personalizza la tua maglia</div>
                            </a>
                        </li>
                        <li Class="divider"></li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/lista-mercati">
                                <img class="img-circle bg-color-3" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_search_market.svg">
                                <div Class="caption">Controlla il mercato</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://leghe.fantacalcio.it/lega-bobica/squadre">
                                <img class="img-circle bg-color-4" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/svg/ico_teams.svg">
                                <div Class="caption">Dai uno sguardo alle altre squadre</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            </li>
        </ul>
       
    </div>
</div>

                    </div>
                                                                    <!--SIDE CONTENTS Else-->
                                                                    <div class="side-content col-xs-12 col-sm-12 col-md-4 col-lg-4 flex flex-start no-padding">
                                                                            <div Class="col-xs-12 col-sm-4 no-padding full-width">
                                                                                            <div Class="panel panel-grey-light panel-teams flex-item-fill">
                <div Class="no-padding text-center">
                    <a href="https://leghe.fantacalcio.it/lega-bobica/mercato" Class="btn btn-lg btn-link">
                        <img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_crea_mercato.svg">
                        vai al mercato <i class="icon icon-x2 fg-right-arrow"></i>
                    </a>
                </div>
            </div>

                                                                            </div>
                                                                        
                                                                        <div class="col-xs-12 col-sm-4 col-md-12 box-sponsor">
                                                                            <ins data-revive-zoneid="8301" data-revive-id="6609ba8ff88606794e22ff360400bcea"></ins>
<script async src="//adx.4strokemedia.com/www/delivery/asyncjs.php"></script> 
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-12 no-padding flex flex-no-wrap max-height-350">
                                                                            <div class="spacer visible-sm"></div>
                                                                                        <div id="teamSlider" Class="panel raised panel-primary panel-teams flex-item-fill widget-team-slider">
                <script class="handlebar-team-slider" type="text/x-handlebars-template">
                    <div Class="panel-heading">
                        <h3 Class="panel-title">In questa competizione...</h3>
                    </div>
                    <div Class="panel-body no-padding">
                        {{#if teams}}
                        <div id="carouselTeams" class="carousel slide" data-ride="carousel" data-interval="false">
                            <div class="carousel-inner" role="listbox">
                                {{#each teams}}
                                <div class="item item-{{@index}} {{#if @first}}active{{/if}}">
                                    <div class="team-shirt flex flex-center"><img class="shirt circle" data-src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/maglietta_2023/s_{{shirt}}" onerror="handleImageError(this, Settings.missingShirtSrc)" /></div>
                                    <div class="team-crest flex flex-center"><img class="crest circle" data-src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/squadra_2023/{{logo}}" onerror="handleImageError(this, Settings.missingCrestSrc)" /></div>
                                    <div class="team-description">
                                        <p class="division mt-1 mb-0">Divisione {{division}}</p>
                                        <h5 class="mt-0"><a href="https://leghe.fantacalcio.it/lega-bobica/rose/{{id}}">{{teamName}}</a></h5>
                                        <p>{{all}}</p>
                                    </div>
                                </div>
                                {{/each}}
                            </div>
                            <a Class="left carousel-control" href="#carouselTeams" role="button" data-slide="prev">
                                <span Class="icon icon-x2 fg-left-chevron" aria-hidden="true"></span>
                                <span Class="sr-only">Previous</span>
                            </a>
                            <a Class="right carousel-control" href="#carouselTeams" role="button" data-slide="next">
                                <span Class="icon icon-x2 fg-right-chevron" aria-hidden="true"></span>
                                <span Class="sr-only">Next</span>
                            </a>
                        </div>
                        {{else}}
                        <div class="empty-message flex flex-center">Nessuna squadra disponibile al momento</div>
                        {{/if}}
                    </div>
                    {{#if teams}}
                    <div Class="panel-footer no-padding text-center">
                        <a href="https://leghe.fantacalcio.it/lega-bobica/squadre" Class="btn btn-sm btn-link">tutte le squadre <i class="icon icon-right fg-caret-right"></i></a>
                    </div>
                    {{/if}}
                </script>
            </div>
 
                                                                            <div class="spacer visible-sm"></div>
                                                                        </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-12 box-sponsor">
                                                                            <!-- /2913532/Leghe2016_MPU_BTF_ROS_Piemme -->
<div id='div-gpt-ad-1540304961874-0'>
<script>
googletag.cmd.push(function() { googletag.display('div-gpt-ad-1540304961874-0'); });
</script>
</div> 
                                                                        </div>
                                                                            <div Class="col-xs-12 col-sm-4 col-md-12 no-padding">
                                                                                <div Class="spacer visible-sm"></div>
                                                                                            <div id="realCalendar" class="rel widget widget-side widget-bordered widget-real-calendar" data-gcurr="6">
                <script class="handlebar-real-calendar-header" type="text/x-handlebars-template" data-wrap-unique-uid="real-calendar-header">                   
                <div Class="headline-wrapper">
                    <h3>SERIE A - {{matchday}}ª GIORNATA</h3>
                    <button onclick="RealCalendar.gotoMatchday({{subtract matchday 1}})" data-dir="prev" Class="prev nav"><i Class="icon ico-down-chevron icon-x2 rotate-90cw"></i></button>
                    <button onclick="RealCalendar.gotoMatchday({{sum matchday 1}})" data-dir="next" Class="next nav"><i Class="icon ico-down-chevron icon-x2 rotate-90ccw"></i></button>
                </div>
                </script>
                <script class="handlebar-real-calendar" type="text/x-handlebars-template" data-wrap-unique-uid="real-calendar-nav">
                <ul Class="nav nav-tabs bkgblu" id="satabs">
                    <li Class="tb1 active"><a href="#satab1" role="tab" data-toggle="tab">{{#ifequal status 'scheduled'}}In programma{{else}}Risultati{{/ifequal}}</a></li>
                    {{#ifequal status 'current'}}
                    <li Class="tb2"><a href="#satab2" role="tab" data-toggle="tab">Classifica</a></li>
                    {{#if nextMatches}}
                    <li Class="tb3"><a href="#satab3" role="tab" data-toggle="tab">Turno successivo</a></li>
                    {{/if}}
                    {{/ifequal}}
                </ul>
                </script>
                <div Class="tab-content" id="satab" data-gsel="{{matchday}}">
                     <script class="handlebar-real-calendar" type="text/x-handlebars-template" data-wrap-unique-uid="real-calendar">
                         <div Class="tab-pane fade active in" id="satab1">
                             <table Class="table table-striped table-hover tablewidget">
                                 <tbody>
                                     {{#each matches}}
                                     <tr><td>{{squadra_a}} - {{squadra_b}}</td><td Class="point">{{gol_a}} - {{gol_b}}</td></tr>
                                     {{/each}}
                                 </tbody>
                             </table>
                         </div>
                         {{#ifequal status 'current'}}
                         <div Class="tab-pane fade" id="satab3">
                             <table Class="table table-striped table-hover tablewidget">
                                 <tbody>
                                     {{#each nextMatches}}
                                     <tr><td>{{squadra_a}} - {{squadra_b}}</td><td Class="point">{{gol_a}} - {{gol_b}}</td></tr>
                                     {{/each}}
                                 </tbody>
                             </table>
                         </div>
                         {{/ifequal}}
                     </script>
                    <script class="handlebar-real-standings" type="text/x-handlebars-template" data-wrap-unique-uid="real-standings">
                        <div Class="tab-pane fade tab-standings" id="satab2">
                            <table Class="table table-striped tablewidget">
                                <tbody>
                                    <tr>
                                    {{#each teams}}
                                    <td><a href="{{link}}" target="_blank">{{name}}{{#if penality}}<small>(-{{penality}})</small>{{/if}}</a></td><td Class="point">{{pts}}</td>
                                     {{#ifodd @index}}</tr><tr>{{/ifodd}}
                                    {{/each}}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                     </script>
                 </div>
            </div>
 
                                                                            </div>
                                                                        <div class="col-xs-12 col-sm-4 col-md-12 no-padding flex flex-no-wrap max-height-350">
                                                                            <div class="spacer visible-sm"></div>
                                                                                            <div class="panel raised flex-item-fill">
                    <header class="panel-heading accent-primary">Hai bisogno di aiuto?</header>
                    <div class="panel-body">
                        <form action="/guide-leghe-fantacalcio">
                            <div Class="form-group p-0 m-0">
                                
                                <div class="input-group p-0 m-0 has-icon">
                                    <input type="text" name="keywords" id="sideGuidesKeywords" Class="form-control m-0" placeholder="Cerca nella guida...">
                                    <i class="icon fc-ico-search"></i>
                                </div>
                            </div>
                        </form>
                        
                        <div class="hr my-4"><small>oppure</small></div>
                    
                        <a href="https://www.facebook.com/supportoleghe" target="_blank" class="btn btn-blue4 btn-block btn-raised btn-sm">Chiedi al supporto leghe</a>
                    </div>
                </div>
 
                                                                        </div>
                                                                    </div>

                    
                </div>
            </div>
                <footer Class="footer container">
         <div class="row padding">
             <div class="col-lg-2 hidden-md hidden-sm hidden-xs">
                 <div class="fglogo"></div>
             </div>
             <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                 <h3>STRUMENTI</h3>
                 <ul class="link">
                     <li><a href="https://www.fantacalcio.it/consigli-fantacalcio" target="_blank">Consigli sulle formazioni</a></li>
                     <li><a href="https://www.fantacalcio.it/probabili-formazioni-serie-a" target="_blank">Probabili formazioni</a></li>
                     <li><a href="https://www.fantacalcio.it/voti-fantacalcio-serie-a" target="_blank">Voti <span class="brand-title">Fantacalcio</span> Serie A</a></li>
                     <li><a href="https://www.fantacalcio.it/rigoristi-serie-a" target="_blank">Rigoristi serie A</a></li>
                         <li><a href="https://euroleghe.fantacalcio.it/" target="_blank">EuroLeghe <span class="brand-title">Fantacalcio</span></a></li>
                     <li><a href="https://www.fantacalcio.it/app-fantaasta" target="_blank">FantaAsta Desktop</a></li>
                     <li><a href="https://www.fantacalcio.it/app-fantaasta-live" target="_blank">FantaAsta Live</a></li>
                 </ul>
             </div>
             <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                 <div class="row">
                     <h3>LE APP DI <span class="brand-title">FANTACALCIO</span></h3>
                 </div>
                 <div Class="row row-app-link">
                     <span Class="tt">Leghe <span class="brand-title">Fantacalcio</span></span>
                     <p Class="no-margin no-padding">
                        <a href = "https://play.google.com/store/apps/details?id=it.quadronica.leghe" Class="op" target="_blank">
                            <i Class="icon fg-android icon-3x icon-left pull-left"></i></a>
                        <a href = "https://apps.apple.com/it/app/leghe-fantacalcio/id977629806" Class="op" target="_blank">
                            <i Class="icon fg-apple icon-3x icon-left pull-left"></i></a>
                        <a href = "https://appgallery.huawei.com/#/app/C102921789?source=appshare&subsource=C102921789" Class="op" target="_blank">
                            <i Class="icon fc-ico-huawei icon-3x pull-left"></i></a>

                     </p>
                 </div>
                 <div Class="row row-app-link">
                    <span Class="tt clearfix">EuroLeghe <span class="brand-title">Fantacalcio</span></span>
                    <p Class="no-margin no-padding">
                        <a href="https://play.google.com/store/apps/details?id=com.quadronica.euroleghe" Class="op" target="_blank">
                            <i Class="icon fg-android icon-3x icon-left pull-left"></i>
                        </a>
                        <a href="https://apps.apple.com/app/euroleghe-fantacalcio/id1263079465" Class="op" target="_blank">
                            <i Class="icon fg-apple icon-3x icon-left pull-left"></i>
                        </a>
                        <a href = "https://appgallery.huawei.com/#/app/C102921865?source=appshare&subsource=C102921865" Class="op" target="_blank">
                            <i Class="icon fc-ico-huawei icon-3x pull-left"></i></a>
                    </p>
                </div>
                 <div Class="row row-app-link">
                     <span Class="tt clearfix brand-title">Fantacalcio</span>
                     <p Class="no-margin no-padding">
                         <a href="https://play.google.com/store/apps/details?id=com.quadronica.fantacalcio" Class="op" target="_blank">
                             <i Class="icon fg-android icon-3x icon-left pull-left"></i></a>
                         <a href="https://apps.apple.com/app/fantacalcio/id1515890322" Class="op" target="_blank">
                             <i Class="icon fg-apple icon-3x icon-left pull-left"></i></a>
                         <a href="https://appgallery.huawei.com/#/app/C102732355?source=appshare&subsource=C102732355" Class="op" target="_blank">
                             <i Class="icon fc-ico-huawei icon-3x pull-left"></i></a>
                     </p>
                 </div>
                 <div Class="row row-app-link">
                     <span Class="tt clearfix">Guida per l'asta perfetta</span>
                     <p Class="no-margin no-padding">
                         <a href = "https://play.google.com/store/apps/details?id=com.quadronica.guida" Class="op" target="_blank">
                             <i Class="icon fg-android icon-3x icon-left pull-left"></i>
                         </a>
                         <a href = "https://apps.apple.com/app/fantacalcio-guida-per-lasta/id1026669896" Class="op" target="_blank">
                             <i Class="icon fg-apple icon-3x icon-left pull-left"></i>
                         </a>
                         <a href="https://appgallery.huawei.com/#/app/C102787989?source=appshare&subsource=C102787989" Class="op" target="_blank">
                             <i Class="icon fc-ico-huawei icon-3x pull-left"></i></a>
                     </p>
                 </div>
             </div>
             <div Class="col-lg-3 col-md-offset-1 col-md-3 col-sm-4 col-xs-12">
                 <ul Class="addr">
                     <li>
                         <a href="https://goo.gl/maps/rf3fFCJepPk7Sdug6" target="_blank">
                             <i Class="icon fg-pin icon-2x"></i> QUADRONICA s.r.l.<br>
                             Via G. Porzio - CdN, Is. F4<br>
                             80143, Napoli
                         </a>
                     </li>
                 </ul>
                 <h3> PUBBLICITÀ SU <span class="brand-title">FANTACALCIO</span>?</h3>
                 <ul Class="recap">
                     <li><a class="adver-link" href="http://www.sky.it/info/sky-digital.html" target="_blank"><img src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/sky_bottom.png" /></a></li>
                 </ul>
             </div>
         </div>
        <div class="_row copyright padding clearfix">
            <span class="pull-left">© Quadronica s.r.l - P.IVA 06021941213 - Tutti i diritti riservati -
                <a onclick="window.__tcfapi('displayConsentUi', 2, (function() {}))">Impostazioni privacy</a>
            </span>
            <span class="pull-right"><a target="_blank" href="https://content.fantacalcio.it/fantacalcio/app/leghe/privacy.html">Privacy</a> | <a target="_blank" href="https://www.fantacalcio.it/cookie">Cookie</a> | <a target="_blank" href="https://www.fantacalcio.it/termini-e-condizioni">Termini e condizioni</a></span>
        </div>
    </footer>

        </main><!-- /main-container -->
    </div>
    <div class="fixed-footer"></div>
                <!-- LOGIN MODAL -->
            <div class="modal fade modal-login" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="close"><i class="icon icon-center fg-close"></i></button>
                            <h4 class="modal-title" id="loginModal"><span class="euro">Euro</span>Leghe <span class="brand-title">Fantacalcio</span></h4>
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
                                                    <img class="media-object img-rounded" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/{{logo}}"
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
                                    <button type = "button" class="btn btn-facebook btn-raised btn-sm login-facebook"><i class="icon icon-left fg-facebook-logo"></i> Login con facebook</button>
                                    <script class="handlebar-server-response" type="text/x-handlebars-template">
                                        {{> server-response}}
                                    </script>
                                </div>
                                    <div class="hr"><small>oppure</small></div>
                                <br class="hidden-leagues">
                            </div>
                            <div class="box-modal-login box-login loading-box">
                                <form id="formLogin" name="login">
                                    <script id="loginFormTemplate1" class="handlebars-login-form-template" type="text/x-handlebars-template">
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
                                    <a href = "https://leghe.fantacalcio.it/registrazione?from=0" class="btn btn-raised btn-block btn-sm btn-orange">CREA UNA <b class="euro"><br />EURO</b>LEGA</a>
                                    <div class="spacer"></div>
                                    <a href = "https://leghe.fantacalcio.it/registrazione?from=1" class="btn btn-raised btn-block btn-sm btn-blue">UNISCITI AD UNA <b class="euro"><br />EURO</b>LEGA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- LE TUE LEGHE MODAL -->
            <div class="modal fade" id="yourCompetitionsModal" tabindex="-1" role="dialog" aria-labelledby="yourCompetitionsModal">
                <div class="modal-dialog modal-sm" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="yourCompetitionsModal"><span class="euro">Euro</span>Leghe <span class="brand-title">Fantacalcio</span></h4>
                        </div>
                        <div class="modal-body">
                            <div class="text-center">
                                <h4> Imposta <em>il tuo menu</em> delle <span class="euro">Euro</span>Leghe</h4>
                            </div>
                            <div class="p-2">
                                <h6 class="info">Nascondi dal menù e/o trascina per ordinare</h6>
                                <span class="list-group-title">Le tue <span class="euro">Euro</span>Leghe</span>
                            </div>

                            <script id = "userLeaguesTemplate" class="leagues-template" type="text/x-handlebars-template">
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
                            <button type="button" class="btn btn-sm btn-primary btn-block btn-raised btn-save">Salva Impostazioni</button>
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
                            <h4 class="modal-title"><span class="euro">Euro</span>Leghe <span class="brand-title">Fantacalcio</span></h4>
                        </div>
                        <div class="modal-body">
                            <div class="text-center">
                                <h4> Imposta l'ordine delle competizioni <em>nel tuo menu</em></h4>
                            </div>
                            <div class="padding">
                                <h6 class="info">Trascina per ordinare</h6>
                                <span class="list-group-title">Le tue competizioni</span>
                                <script id="userCompetitionsTemplate" class="competitions-template" type="text/x-handlebars-template">
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
                                <button type="button" class="btn btn-sm btn-primary btn-block btn-raised btn-save">Salva Impostazioni</button>
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
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon icon-center fg-close"></i></button>
                            <h4 class="modal-title" id="helpModalTitle"><i class="icon icon-left fg-info"></i>  Aiuto!</h4>
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
				            <button type = "button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon icon-center fg-close"></i></button>
				            <h5 class="modal-title">ATTENZIONE! Vuoi cancellare il tuo utente <span class="brand-title">Fantacalcio</span>?</h5>
			            </div>
			            <div class="modal-body">
				            <div class="padding">
					            <p> Sei sicuro di voler cancellare DEFINITIVAMENTE il tuo utente <span class="brand-title">FANTACALCIO</span>? Cancellando il tuo account, <b>NON POTRAI PIU' ACCEDERE ALLE TUE <span class="euro">EURO</span>LEGHE</b>, né da web, né da app.</p>				
					            <hr>
                                    <div class="flex-row">
							            <button data-dismiss="modal"  class="btn btn-raised btn-block btn-sm btn-dark-blue"><i class="icon icon-left ico-remove-small"></i> NO, ci ho ripensato</button>
							            <div class="spacer"></div>
							            <button id="buttonUnsubscribe" class="btn btn-raised btn-block btn-sm btn-red"><i class="icon icon-left ico-garbage"></i> Sì, voglio cancellarlo</button>
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
            <div class="modal fade" id="confirmationOkModal" tabindex="-1" role="dialog" aria-labelledby="confirmationOkModalTitle">
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
            <div Class="modal fade edit-modal form-scrollable" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalTitle">
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
                                                           {{#ifexist ../deltaMin}} data-delta-min="{{../deltaMin}}" {{/ifexist}}
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
                                        {{#if info}}<p class="text-info"><em>{{{info}}}</em></p>{{/if}}
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
                                                {{#ifexist src}}<img class="checkbox-img" src="{{src}}" />{{/ifexist}}
                                                {{#ifexist bgSrc}}<img class="checkbox-bg" src="{{bgSrc}}" />{{/ifexist}}                                                
                                            </label>
                                            {{/each}}

                                        </div>
                                    </div>
                                    {{/case}}
                                    {{#case 'multiselect'}}
                                    <div class="form-group {{customClass}}">
                                        <label for="{{key}}" name="{{key}}" class="control-label">{{label}}</label>
                                        <div id="{{key}}" class="form-control check-list unselectable {{#if readonly}}readonly{{/if}}"
                                             {{#ifexist autoflow}} data-autoflow="{{./autoflow}}" {{/ifexist}}
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
                                                <input type="search" class="form-control checklist-search" value="" placeholder="Filtra..." />
                                            </div>
                                        </div>
                                        {{/if}}

                    
                                        {{#compare divisions.length '>' 1}}
                                        <div class="checklist-divisions">
                                            <select class="form-control">
                                                <option value="">Tutte le divisioni</option>
                                                {{#each divisions}}
                                                <option value="{{.}}">Divisione {{.}}</option>
                                                {{/each}}
                                            </select>
                                        </div>
                                        {{/compare}}

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
                                                    <span class="checkbox-label" title="{{tip}}">{{{label}}}</span>
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
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="icon icon-center fg-close"></i></button>
            </div>
            <div class="modal-body">
                <div class="global-menu">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs global-menu-tabs" role="tablist">
                        <li role="presentation" class="global-menu-admin">
                            <a href="#admin" aria-controls="admin" role="tab" data-toggle="tab"><img class="icon" src="https://d2lhpso9w1g8dk.cloudfront.net/web/img/ico_admin.svg" />Area Admin <small>LEGA, SQUADRE, MERCATI E COMUNICAZIONI</small></a>
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
                                                <img class="media-object img-rounded crest" src="https://d2lhpso9w1g8dk.cloudfront.net/web/risorse/lega_2023/no_logo.png" onerror="handleImageError(this, Settings.missingCrestSrc)">
                                            </a>
                                        </div>
                                        <div class="media-body full-width">
                                            <h6 class="media-info">
                                                <span class="league-fondation-year"><b>ANNO DI FONDAZIONE:</b> 2005</span>
                                                <span class="league-superadmin"><b>SUPERADMIN:</b> Pippo</span>
                                            </h6>
                                            <h4 class="media-heading">Lega Bobica</h4>
                                            <h5 class="visible-main-admin"><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/info-lega">Modifica info, reset ed elimina lega</a></h5>
                                        </div>
                                    </div>
                                </header>
                                <!-- ADMIN -->
                                <div Class="global-menu-body col-xs-12 visible-admin">
                                    <div Class="col-sm-4">
                                        <ul class="list-unstyled well min-h-220">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Partecipanti <small>Invita, sostituisci, rimuovi</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Amministratori <small>Promuovi, rimuovi</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">Regolamento e Opzioni <small>Imposta rose, formazioni, sostituzioni, calcolo</small></a></li>
                                        </ul>
                                        <ul class="list-unstyled well">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-crediti">Crediti <small>Assegna, modifica</small></a></li>                                            
                                        </ul>
                                    </div>
                                    <div Class="col-sm-4">
                                        <ul class="list-unstyled well min-h-220">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-competizioni">Gestione Competizioni <small>Crea, modifica, elimina</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-divisioni">Gestione Divisioni <small>Crea, modifica, elimina</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-mercati">Gestione Mercati <small>Crea, modifica, elimina sessioni</small></a></li>
                                            <!--<li><a href="#">Calciatori <small>Personalizza ruoli</small></a></li>-->
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-rose">Gestione Rose <small>Crea, modifica</small></a></li>
                                        </ul>
                                        <ul class="list-unstyled well">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-punti">Penalità e Punti Extra <small>Assegna, modifica</small></a></li>
                                        </ul>
                                    </div>
                                    <div Class="col-sm-4">
                                        <ul class="list-unstyled well min-h-220 well-flat">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/registro-attivita-admin">Registro attività <small>Visualizza</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-comunicazioni">Comunicazioni <small>Crea, modifica, elimina</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-documenti">Documenti di <b class="euro">Euro</b>Lega <small>Crea, carica, elimina</small></a></li>
                                        </ul>
                                        <ul class="list-unstyled well well-flat">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/albo-oro">Albo D'Oro <small>Crea, modifica</small></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- NOT ADMIN -->
                                <div Class="global-menu-body col-xs-12 hidden-admin">
                                    <div Class="col-sm-6">
                                        <ul class="list-unstyled well min-h-220">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/partecipanti">Partecipanti <small>Visualizza tutti</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/opzioni-rose">Regolamento e Opzioni <small>Visualizza impostazioni rose, formazioni, calcolo</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-competizioni">Competizioni <small>Visualizza in corso, in programma, terminate</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-mercati">Mercati <small>Visualizza in corso, in programma, terminate</small></a></li>

                                        </ul>          
                                    </div>
                                    <div Class="col-sm-6">
                                        <ul class="list-unstyled well min-h-220 well-flat">
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/registro-attivita-admin">Registro attività <small>Visualizza</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-comunicazioni">Comunicazioni <small>Leggi</small></a></li>
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/lista-documenti">Documenti di <b class="euro">Euro</b>Lega <small>Leggi</small></a></li>                                      
                                            <li><a href="https://leghe.fantacalcio.it/lega-bobica/albo-oro">Albo D'Oro <small>Consulta</small></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <footer class="col-xs-12 visible-admin">
                                    <div class="col-sm-6 text-center">
                                        <div class="well well-flat">
                                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/gestione-formazioni" class="btn btn-sm btn-light-orange btn-raised">Gestione Formazioni</a>
                                            <h6>Schiera, modifica tutte le formazioni</h6>
                                        </div>
                                    </div>
                                    <div class="spacer hidden-sm hidden-md hidden-lg"></div>
                                    <div class="col-sm-6 text-center">
                                        <div class="well well-flat">
                                            <a href="https://leghe.fantacalcio.it/lega-bobica/gestione-lega/calcolo-fantagiornata" class="btn btn-sm btn-orange btn-raised">Calcola Giornata</a>
                                            <h6>Calcola, annulla, ripeti calcolo</h6>
                                        </div>
                                    </div>
                                </footer>
                            </div>
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

        <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/polyfill.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/lib/_lib_bundle.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/lib/jquery.ui.touch-punch.min.js"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/_utils_bundle.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/services/_services_bundle.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/ui.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/layout.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/auth.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/main.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/services/notifications.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/team_slider.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/real_calendar.js?_v=180820231357"></script> 
 
    
    <link rel="stylesheet" href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/libs/bootstrap-select.min.css">
    <link rel="stylesheet" href="https://d2lhpso9w1g8dk.cloudfront.net/web/css/default/public.min.css?_v=180820231357">
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/lib/bootstrap-select.min.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/league/league_rosters.js?_v=180820231357"></script>
    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/widgets/word_searcher.js?_v=180820231357"></script>

    <script src="https://d2lhpso9w1g8dk.cloudfront.net/web/js/utils/fixes.js?_v=180820231357"></script>
    <!-- START ANALYTICS -->
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NMKS9FQV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->  
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
 <img src="//secure-it.imrworldwide.com/cgi-bin/m?ci=sky-it&amp;cg=0&amp;cc=0&amp;ts=noscript"
 width="1" height="1" alt="" />
 </div>
</noscript>
<!-- END Nielsen Online SiteCensus V6.0 --> 
</body>
</html>
