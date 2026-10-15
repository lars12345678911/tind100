(() => {
  "use strict";

  const config = window.TIND100_SITE || {};
  const page = document.body.dataset.page || "home";
  const supported = ["nb", "en", "fr", "es", "de", "zh-Hans"];
  const localeMap = {
    nb: "nb-NO",
    en: "en-GB",
    fr: "fr-FR",
    es: "es-ES",
    de: "de-DE",
    "zh-Hans": "zh-Hans-CN"
  };

  const common = {
    nb: {
      language: "Språk",
      skip: "Hopp til innholdet",
      primaryNav: "Hovednavigasjon",
      footerNav: "Bunnnavigasjon",
      nav: { home: "Hjem", privacy: "Personvern", support: "Brukerstøtte", safety: "Sikkerhet" },
      footer: "Tind 100 er laget for turinspirasjon og registrering. Appen er ikke et navigasjons-, rednings- eller sikkerhetssystem.",
      allLinks: { privacy: "Personvern", choices: "Personvernvalg", support: "Brukerstøtte", safety: "Sikkerhet", sources: "Datakilder", openData: "Åpne data", notices: "Tredjepartsmerknader", terms: "Vilkår" },
      updated: "Sist oppdatert",
      version: "Gjelder Tind 100 versjon {version} (bygg {build}).",
      releaseStatus: "Versjon 1.18 er under klargjøring og er ikke utgitt. Premium er heller ikke åpnet for salg.",
      external: "Åpnes på et eksternt nettsted",
      contact: "Kontakt",
      country: "Norge",
      email: "E-post",
      issues: "Offentlig feilrapportering",
      draft: "Denne lokale arbeidskopien mangler bekreftet utgiver, kontaktadresse eller GitHub-adresse og skal ikke publiseres ennå."
    },
    en: {
      language: "Language",
      skip: "Skip to content",
      primaryNav: "Primary navigation",
      footerNav: "Footer navigation",
      nav: { home: "Home", privacy: "Privacy", support: "Support", safety: "Safety" },
      footer: "Tind 100 is made for hiking inspiration and logging. It is not a navigation, rescue or safety system.",
      allLinks: { privacy: "Privacy", choices: "Privacy choices", support: "Support", safety: "Safety", sources: "Data sources", openData: "Open data", notices: "Third-party notices", terms: "Terms" },
      updated: "Last updated",
      version: "Applies to Tind 100 version {version} (build {build}).",
      releaseStatus: "Version 1.18 is being prepared and has not been released. Premium is not on sale yet either.",
      external: "Opens an external website",
      contact: "Contact",
      country: "Norway",
      email: "Email",
      issues: "Public issue reporting",
      draft: "This local draft is missing a confirmed publisher, contact address or GitHub address and must not be published yet."
    },
    fr: {
      language: "Langue",
      skip: "Aller au contenu",
      primaryNav: "Navigation principale",
      footerNav: "Navigation du pied de page",
      nav: { home: "Accueil", privacy: "Confidentialité", support: "Assistance", safety: "Sécurité" },
      footer: "Tind 100 sert à trouver des idées de randonnée et à consigner des sorties. Ce n’est pas un système de navigation, de secours ou de sécurité.",
      allLinks: { privacy: "Confidentialité", choices: "Choix de confidentialité", support: "Assistance", safety: "Sécurité", sources: "Sources de données", openData: "Données ouvertes", notices: "Mentions relatives aux tiers", terms: "Conditions" },
      updated: "Dernière mise à jour",
      version: "S’applique à Tind 100 version {version} (compilation {build}).",
      releaseStatus: "La version 1.18 est en cours de préparation et n’est pas encore publiée. Premium n’est pas encore en vente non plus.",
      external: "Ouvre un site web externe",
      contact: "Contact",
      country: "Norvège",
      email: "E-mail",
      issues: "Signalement public de problèmes",
      draft: "Ce brouillon local ne comporte pas encore d’éditeur confirmé, d’adresse de contact ni d’adresse GitHub et ne doit pas encore être publié."
    },
    es: {
      language: "Idioma",
      skip: "Saltar al contenido",
      primaryNav: "Navegación principal",
      footerNav: "Navegación del pie de página",
      nav: { home: "Inicio", privacy: "Privacidad", support: "Soporte", safety: "Seguridad" },
      footer: "Tind 100 está pensado para inspirar excursiones y registrar actividad. No es un sistema de navegación, rescate ni seguridad.",
      allLinks: { privacy: "Privacidad", choices: "Opciones de privacidad", support: "Soporte", safety: "Seguridad", sources: "Fuentes de datos", openData: "Datos abiertos", notices: "Avisos de terceros", terms: "Condiciones" },
      updated: "Última actualización",
      version: "Se aplica a Tind 100 versión {version} (compilación {build}).",
      releaseStatus: "La versión 1.18 está en preparación y aún no se ha publicado. Premium tampoco está a la venta todavía.",
      external: "Abre un sitio web externo",
      contact: "Contacto",
      country: "Noruega",
      email: "Correo electrónico",
      issues: "Informe público de errores",
      draft: "Este borrador local aún no tiene editor, dirección de contacto o dirección de GitHub confirmados y no debe publicarse."
    },
    de: {
      language: "Sprache",
      skip: "Zum Inhalt springen",
      primaryNav: "Hauptnavigation",
      footerNav: "Fußzeilennavigation",
      nav: { home: "Start", privacy: "Datenschutz", support: "Support", safety: "Sicherheit" },
      footer: "Tind 100 dient der Toureninspiration und Aufzeichnung. Die App ist kein Navigations-, Rettungs- oder Sicherheitssystem.",
      allLinks: { privacy: "Datenschutz", choices: "Datenschutzoptionen", support: "Support", safety: "Sicherheit", sources: "Datenquellen", openData: "Offene Daten", notices: "Hinweise zu Drittanbietern", terms: "Bedingungen" },
      updated: "Zuletzt aktualisiert",
      version: "Gilt für Tind 100 Version {version} (Build {build}).",
      releaseStatus: "Version 1.18 wird vorbereitet und ist noch nicht veröffentlicht. Auch Premium steht noch nicht zum Verkauf.",
      external: "Öffnet eine externe Website",
      contact: "Kontakt",
      country: "Norwegen",
      email: "E-Mail",
      issues: "Öffentliche Fehlermeldung",
      draft: "Dieser lokale Entwurf enthält noch keinen bestätigten Herausgeber, keine Kontaktadresse oder GitHub-Adresse und darf noch nicht veröffentlicht werden."
    },
    "zh-Hans": {
      language: "语言",
      skip: "跳到主要内容",
      primaryNav: "主导航",
      footerNav: "页脚导航",
      nav: { home: "首页", privacy: "隐私", support: "支持", safety: "安全" },
      footer: "Tind 100 用于徒步灵感与记录，并非导航、救援或安全系统。",
      allLinks: { privacy: "隐私", choices: "隐私选项", support: "支持", safety: "安全", sources: "数据来源", openData: "开放数据", notices: "第三方声明", terms: "条款" },
      updated: "最后更新",
      version: "适用于 Tind 100 {version} 版（构建 {build}）。",
      releaseStatus: "1.18 版正在准备中，尚未发布。Premium 也尚未开放购买。",
      external: "打开外部网站",
      contact: "联系方式",
      country: "挪威",
      email: "电子邮件",
      issues: "公开报告问题",
      draft: "此本地草稿尚未配置已确认的发布者、联系地址或 GitHub 地址，因此暂不得发布。"
    }
  };

  const content = {
    home: {
      nb: {
        eyebrow: "Toppene. Turene. Fremdriften.",
        title: "Tind 100",
        lead: "Oppdag en kuratert katalog med 100 topper i hvert av Norges 15 fylker, registrer turene dine og bygg fremdrift i ditt eget tempo.",
        actions: [["Les om personvern", "privacy/"], ["Få hjelp", "support/", "secondary"]],
        sections: [
          { title: "1 500 topper", body: ["Appen har 15 forhåndsinstallerte fylkeskataloger med nøyaktig 100 topper i hver. Rangeringen er kuratert katalogrekkefølge; den er ikke nødvendigvis en ensartet liste over de 100 høyeste eller mest prominente toppene."], size: "third", number: "100" },
          { title: "Din fremdrift", body: ["Nye toppbesøk krever GPS-innsjekking; manuell innsjekking er ikke mulig. Målt avstand til den registrerte toppen må være høyst 70 meter. Innsjekking kan fungere uten mobildekning når telefonen får en posisjon som er høyst 30 sekunder gammel og har oppgitt nøyaktighet på 70 meter eller bedre. Fremdrift lagres først på iPhonen. GPS-målinger kan være feil og er ikke et sikkert bevis på fysisk tilstedeværelse."], size: "third", number: "✓" },
          { title: "Valgfri Game Center-synk", body: ["Tind 100 kan brukes uten innlogging eller egen Tind 100-konto. Fremdrift lagres først på iPhonen. Game Center-/iCloud-synk er avslått som standard og starter bare når du slår den på i Profil og nødvendig kontobekreftelse er fullført. Appen har ingen annonser, markedsføringssporing eller analyseverktøy og selger ikke personopplysninger."], size: "third", number: "☁" },
          { title: "Viktig før turen", body: ["Opplysninger, koordinater, kart og ruteforslag kan være feil, ufullstendige eller utdaterte. Kontroller alltid oppdaterte, offisielle kilder og lokale forhold. Ikke bruk appen som eneste kart, navigasjon eller sikkerhetsverktøy."], tone: "warning", links: [["Les hele sikkerhetsinformasjonen", "safety/"]] }
        ]
      },
      en: {
        eyebrow: "Peaks. Hikes. Progress.", title: "Tind 100",
        lead: "Explore a curated catalogue of 100 peaks in each of Norway’s 15 counties, log your hikes and build progress at your own pace.",
        actions: [["Read the privacy policy", "privacy/"], ["Get support", "support/", "secondary"]],
        sections: [
          { title: "1,500 peaks", body: ["The app includes 15 preinstalled county catalogues with exactly 100 peaks in each. The ranking follows a curated catalogue order; it is not necessarily a uniform list of the 100 highest or most prominent peaks."], size: "third", number: "100" },
          { title: "Your progress", body: ["New peak visits require GPS check-in; manual check-in is not available. The measured distance from the recorded summit must be at most 70 metres. Check-in can work without mobile coverage when the phone obtains a position no more than 30 seconds old with reported accuracy of 70 metres or better. Progress is saved on the iPhone first. GPS measurements can be wrong and are not conclusive proof of physical presence."], size: "third", number: "✓" },
          { title: "Optional Game Center sync", body: ["Tind 100 works without signing in or creating a Tind 100 account. Progress is saved on the iPhone first. Game Center/iCloud sync is off by default and starts only after you enable it in Profile and complete the required account confirmation. The app has no advertising, marketing tracking or analytics tools and does not sell personal data."], size: "third", number: "☁" },
          { title: "Important before a hike", body: ["Information, coordinates, maps and route suggestions may be wrong, incomplete or out of date. Always verify current authoritative sources and local conditions. Do not use the app as your only map, navigation or safety tool."], tone: "warning", links: [["Read the full safety notice", "safety/"]] }
        ]
      },
      fr: {
        eyebrow: "Sommets. Randonnées. Progression.", title: "Tind 100",
        lead: "Explorez un catalogue soigneusement sélectionné de 100 sommets dans chacun des 15 comtés de Norvège, consignez vos randonnées et progressez à votre rythme.",
        actions: [["Lire la politique de confidentialité", "privacy/"], ["Obtenir de l’aide", "support/", "secondary"]],
        sections: [
          { title: "1 500 sommets", body: ["L’app comprend 15 catalogues de comté préinstallés contenant exactement 100 sommets chacun. Le classement suit l’ordre d’un catalogue soigneusement sélectionné ; il ne s’agit pas nécessairement d’une liste uniforme des 100 sommets les plus hauts ou les plus proéminents."], size: "third", number: "100" },
          { title: "Votre progression", body: ["Les nouvelles visites de sommets nécessitent une validation GPS ; aucune validation manuelle n’est proposée. La distance mesurée au sommet enregistré doit être de 70 mètres au maximum. La validation peut fonctionner sans réseau mobile si le téléphone obtient une position datant de 30 secondes au plus, avec une précision annoncée de 70 mètres ou mieux. La progression est d’abord enregistrée sur l’iPhone. Les mesures GPS peuvent être erronées et ne prouvent pas avec certitude la présence physique."], size: "third", number: "✓" },
          { title: "Synchronisation Game Center facultative", body: ["Tind 100 fonctionne sans connexion ni compte Tind 100. La progression est d’abord enregistrée sur l’iPhone. La synchronisation Game Center/iCloud est désactivée par défaut et ne commence qu’après son activation dans Profil et la confirmation requise des comptes. L’app ne contient ni publicité, ni suivi marketing, ni outil d’analyse et ne vend pas de données personnelles."], size: "third", number: "☁" },
          { title: "Important avant une randonnée", body: ["Les informations, coordonnées, cartes et suggestions d’itinéraires peuvent être incorrectes, incomplètes ou obsolètes. Vérifiez toujours les sources officielles à jour et les conditions locales. Ne vous servez pas de l’app comme unique carte ni comme unique outil de navigation ou de sécurité."], tone: "warning", links: [["Lire toutes les informations de sécurité", "safety/"]] }
        ]
      },
      es: {
        eyebrow: "Cumbres. Excursiones. Progreso.", title: "Tind 100",
        lead: "Explora un catálogo seleccionado de 100 cumbres en cada una de las 15 provincias de Noruega, registra tus excursiones y progresa a tu ritmo.",
        actions: [["Leer la política de privacidad", "privacy/"], ["Obtener ayuda", "support/", "secondary"]],
        sections: [
          { title: "1.500 cumbres", body: ["La app incluye 15 catálogos provinciales preinstalados con exactamente 100 cumbres cada uno. La clasificación sigue el orden editorial del catálogo; no es necesariamente una lista uniforme de las 100 cumbres más altas o prominentes."], size: "third", number: "100" },
          { title: "Tu progreso", body: ["Las nuevas visitas a cumbres requieren registro GPS; no hay registro manual. La distancia medida a la cumbre registrada debe ser de 70 metros como máximo. Puede funcionar sin cobertura móvil si el teléfono obtiene una posición de no más de 30 segundos de antigüedad con precisión indicada de 70 metros o mejor. El progreso se guarda primero en el iPhone. Las mediciones GPS pueden ser erróneas y no prueban de forma concluyente la presencia física."], size: "third", number: "✓" },
          { title: "Sincronización opcional con Game Center", body: ["Tind 100 funciona sin iniciar sesión ni crear una cuenta de Tind 100. El progreso se guarda primero en el iPhone. La sincronización con Game Center/iCloud está desactivada por defecto y solo comienza tras activarla en Perfil y completar la confirmación de cuentas necesaria. La app no contiene publicidad, seguimiento comercial ni herramientas de análisis y no vende datos personales."], size: "third", number: "☁" },
          { title: "Importante antes de salir", body: ["La información, coordenadas, mapas y rutas sugeridas pueden ser erróneos, incompletos o estar desactualizados. Consulta siempre fuentes oficiales actuales y las condiciones locales. No uses la app como único mapa, sistema de navegación o herramienta de seguridad."], tone: "warning", links: [["Leer toda la información de seguridad", "safety/"]] }
        ]
      },
      de: {
        eyebrow: "Gipfel. Touren. Fortschritt.", title: "Tind 100",
        lead: "Entdecke einen kuratierten Katalog mit 100 Gipfeln in jeder der 15 norwegischen Provinzen, zeichne Touren auf und sammle Fortschritt in deinem Tempo.",
        actions: [["Datenschutzerklärung lesen", "privacy/"], ["Support erhalten", "support/", "secondary"]],
        sections: [
          { title: "1.500 Gipfel", body: ["Die App enthält 15 vorinstallierte Provinzkataloge mit jeweils genau 100 Gipfeln. Der Rang ist eine kuratierte Katalogreihenfolge und nicht zwingend eine einheitliche Liste der 100 höchsten oder prominentesten Gipfel."], size: "third", number: "100" },
          { title: "Dein Fortschritt", body: ["Neue Gipfelbesuche erfordern einen GPS-Check-in; manuelle Check-ins sind nicht möglich. Die gemessene Entfernung zum verzeichneten Gipfel darf höchstens 70 Meter betragen. Ohne Mobilfunkempfang ist ein Check-in möglich, wenn das Telefon eine höchstens 30 Sekunden alte Position mit einer gemeldeten Genauigkeit von 70 Metern oder besser erhält. Fortschritt wird zuerst auf dem iPhone gespeichert. GPS-Messungen können falsch sein und sind kein sicherer Nachweis der tatsächlichen Anwesenheit."], size: "third", number: "✓" },
          { title: "Optionale Game-Center-Synchronisierung", body: ["Tind 100 funktioniert ohne Anmeldung oder eigenes Tind-100-Konto. Fortschritt wird zuerst auf dem iPhone gespeichert. Game-Center-/iCloud-Synchronisierung ist standardmäßig aus und beginnt erst nach dem Einschalten im Profil und der erforderlichen Kontobestätigung. Die App enthält keine Werbung, kein Marketing-Tracking und keine Analysewerkzeuge und verkauft keine personenbezogenen Daten."], size: "third", number: "☁" },
          { title: "Wichtig vor der Tour", body: ["Informationen, Koordinaten, Karten und Routenvorschläge können falsch, unvollständig oder veraltet sein. Prüfe stets aktuelle offizielle Quellen und örtliche Bedingungen. Nutze die App nicht als einzige Karte, Navigation oder Sicherheitsausrüstung."], tone: "warning", links: [["Vollständige Sicherheitshinweise", "safety/"]] }
        ]
      },
      "zh-Hans": {
        eyebrow: "山峰。徒步。进度。", title: "Tind 100",
        lead: "探索挪威 15 个郡各 100 座山峰的精选目录，记录徒步，并按自己的节奏积累进度。",
        actions: [["阅读隐私政策", "privacy/"], ["获取支持", "support/", "secondary"]],
        sections: [
          { title: "1,500 座山峰", body: ["App 预装 15 个郡级目录，每个目录恰好包含 100 座山峰。排名是精选目录顺序，不一定是统一的最高或最突出 100 座山峰列表。"], size: "third", number: "100" },
          { title: "你的进度", body: ["新的登顶记录必须通过 GPS 签到，不能手动签到。测得位置与已登记峰顶的距离必须不超过 70 米。即使没有移动网络，只要手机能获取不早于 30 秒前且报告精度为 70 米或更好的位置，也可能完成签到。进度先保存在 iPhone 上。GPS 测量可能有误，不能作为确实到达现场的可靠证明。"], size: "third", number: "✓" },
          { title: "可选的 Game Center 同步", body: ["Tind 100 无需登录或创建独立账户即可使用。进度先保存在 iPhone 上。Game Center/iCloud 同步默认关闭，只有在“个人资料”中开启并完成所需账户确认后才会开始。App 不含广告、营销跟踪或分析工具，也不出售个人数据。"], size: "third", number: "☁" },
          { title: "出行前的重要提示", body: ["信息、坐标、地图和路线建议可能有误、不完整或已过时。请始终核对最新权威来源和当地状况。不要将本 App 作为唯一的地图、导航或安全工具。"], tone: "warning", links: [["阅读完整安全说明", "safety/"]] }
        ]
      }
    },

    privacy: {
      nb: {
        eyebrow: "Juridisk og åpent", title: "Personvern for Tind 100",
        lead: "Her forklarer vi hvilke opplysninger appen behandler, hvor de lagres, hvilke eksterne tjenester som brukes, og hvilke valg du har.", dated: true,
        sections: [
          { title: "Behandlingsansvarlig", kind: "controller", body: ["Tind 100 utgis av {publisher}, {country}. Bruk den private e-postadressen nedenfor for personvern- og sikkerhetshenvendelser. Ikke legg personopplysninger eller GPS-spor i en offentlig GitHub-feilrapport."] },
          { title: "Kort fortalt", body: ["Tind 100 kan brukes uten innlogging eller egen Tind 100-konto. Fremdrift lagres først på iPhonen. Game Center-/iCloud-synk er avslått som standard og starter bare når du slår den på i Profil og nødvendig kontobekreftelse er fullført. Appen har ingen annonser, markedsføringssporing eller analyseverktøy og selger ikke personopplysninger."] },
          { title: "Opplysninger som lagres lokalt", bullets: ["språk, kartvalg, valgte utfordringer og synkroniseringsstatus", "Game Center-spiller-ID, sist viste alias og synkroniseringsstatus når du velger synk; en bekreftet kontobinding lagres bare på denne enheten i Nøkkelring", "toppbesøk, tidspunkt, bekreftelsesmåte, poeng og innsjekkingsavstand", "aktive GPS-ruter med koordinater, høyde, nøyaktighet og tidspunkt", "fullførte rutesammendrag med startpunkt, et begrenset utvalg rutepunkter, distanse, varighet og stigning; disse totalene er aktivitets- og treningsdata", "ukes- og venneutfordringer", "en begrenset diskbuffer av Kartverket-fliser du har sett, og OSM-kartpakker for områder du selv velger og bekrefter"] },
          { title: "Posisjon og rutesporing", body: ["Når du velger en posisjonsfunksjon, kan appen bruke nøyaktig eller omtrentlig posisjon til GPS-innsjekking, fylkesoppslag, kartvisning, utfordringer og rutesporing. Under aktiv rutesporing kan appen fortsette å bruke posisjon i bakgrunnen, og iOS viser da en indikator.", "Det komplette aktive sporet lagres lokalt. Etter fullføring slettes det komplette aktive sporet, mens et begrenset sammendrag og enkelte utvalgte punkter beholdes lokalt. Den aktive Game Center-lagringen v4 mottar ikke nøyaktig rutegeometri, rutestart, toppkoordinater eller innsjekkingsavstand."] },
          { title: "Game Center og iCloud", body: ["Game Center og iCloud er valgfrie. Slå på synkronisering i Profil og bekreft den aktuelle Game Center-spilleren og iCloud-kontoen før første synk. En aktiv v4-skykopi kan inneholde besøkte topp-ID-er og datoer, verifikasjonsmåte, poeng, rutesammendrag, utfordringer, fylke, toppmetadata, alias og nullstillingstidspunkt. Den inneholder ikke nøyaktig rutegeometri, rutestart, toppkoordinater eller innsjekkingsavstand.", "For å hindre at fremdrift blandes mellom kontoer, lagrer appen en enhetslokal binding av Game Center-spiller-ID og Apples ugjennomsiktige iCloud-kontoidentifikator i Nøkkelring. Dette er ikke et passord. Bindingen synkroniseres ikke til andre enheter, og appens av/på-valg eller nullstilling sletter den ikke.", "Kontobytte, utilgjengelig kontobinding eller eldre v1-/v3-skyfiler setter synkronisering på pause. Eldre filer importeres, overskrives eller slettes ikke automatisk; lokal bruk fortsetter. Apple behandler Game Center-, iCloud- og sikkerhetskopidata etter sine egne vilkår og personvernregler."] },
          { title: "Kart og eksterne tjenester", bullets: ["Apple Maps/MapKit brukes til kart, geokoding og fylkesoppslag.", "Kartverkets turkart vises på nett til zoomnivå 17. Appen mellomlagrer automatisk kvalifiserte fliser som faktisk vises, på disk for zoomnivå 5–16 når kilden tillater det. Bufferen er begrenset til 128 MiB og 4 096 fliser, med levetid høyst sju dager og eventuelt kortere etter svaret fra kilden. Den er ikke et komplett offlinekart. Kartverket mottar flisekoordinater (x/y/z), som viser kartområdet, og vanlige nettverksopplysninger som IP-adresse. Det finnes ingen ny områdenedlasting fra Kartverket. Kartdata © Kartverket. Se kildenes vilkår og lisenser. Kartverket har ikke godkjent eller kvalitetssikret Tind 100.", "OSM-kartområder lastes bare ned etter at du velger og bekrefter ett område. Nedlastingen bruker HTTPS fra GitHub Releases og GitHubs filverter github.com, release-assets.githubusercontent.com eller objects.githubusercontent.com. Filverten mottar IP-adresse, valgt område gjennom filadressen og appens User-Agent; forespørselen sender ikke GPS-posisjon, rutespor eller Game Center-ID. Kartene bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Pakkene har kildedata på zoomnivå 0–14 og kan vises til nivå 16; forstørring over 14 tilfører ikke flere detaljer.", "Denne appversjonen bruker en forhåndsinstallert toppkatalog og sender ingen katalogforespørsler til Overpass API. Valgfrie OSM-kartområder lastes ned separat som beskrevet ovenfor.", "Når du selv åpner Varsom, Fjellvettreglene eller andre eksterne lenker, gjelder nettstedets egen personvernpraksis."], links: [["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "Deling", body: ["Appen deler ikke fremdrift automatisk til personer. Når du selv bruker delingsfunksjonen, kan mottakeren eller den valgte tjenesten motta Game Center-visningsnavn, statistikk, dato, begrensede toppopplysninger og en Tind 100-lenke. Verken toppkoordinat eller rutespor inngår i delingslenken. Den valgte delingstjenestens regler gjelder etter at du sender informasjonen."] },
          { title: "Frivillig TestFlight-pilot", body: ["Pilotmålingen er bare tilgjengelig i et testmiljø og er avslått som standard. Hvis du slår den på, lagres en tilfeldig rapportkode, en lokal revisjon og deltakelsessyklus, samtykke- og oppgavedatoer avrundet til dag, om fire pilotoppgaver er fullført, appversjon, bygg, språk, den lokaliserte Premium-prisen som faktisk ble vist med valuta og kilde, samt valgfrie Premium-svar. Rapporten inneholder ikke koordinater, rutespor, toppnavn, søk, Apple- eller Game Center-konto, enhetsidentifikator eller kontaktopplysninger. Ingenting sendes automatisk: du får se hele JSON-rapporten og velger selv om og hvor den deles.", "Hvis du sender rapporten til utgiveren, brukes den til å vurdere pilotoppgaver, brukervennlighet og interessen for Premium. Rå rapporter slettes eller anonymiseres innen 30 dager etter den endelige pilotoppsummeringen og senest 90 dager etter mottak, med mindre et dokumentert sikkerhets- eller rettskrav krever lengre lagring. Ikke-identifiserende samlede resultater kan beholdes. Du kan stoppe målingen eller starte pilotfremdriften på nytt i appen. En omstart fjerner samtykke, oppgaver og Premium-svar, men beholder den opplyste anonyme rapportkoden og revisjonen for å hindre dobbelttelling; full nullstilling av appen sletter også disse. Du kan be om sletting av en mottatt rapport via e-post ved å oppgi rapportkoden."] },
          { title: "Brukerstøtte og offentlige feilrapporter", body: ["Når du sender e-post, behandler utgiveren avsenderadresse, innhold, vedlegg og tekniske opplysninger du velger å oppgi, for å besvare og dokumentere henvendelsen. E-postleverandøren mottar og lagrer meldingen som tjenesteleverandør og kan ha egne sikkerhetskopier og lagringstider. Kopier utgiveren kontrollerer, slettes eller anonymiseres normalt senest 12 måneder etter at saken er avsluttet, med mindre sikkerhet eller et rettslig krav gjør lengre lagring nødvendig.", "En GitHub-feilrapport er offentlig og kan vise brukernavn, tekst, vedlegg, enhets- og appversjon og tidspunkt. Ikke legg inn sensitive opplysninger, GPS-spor eller andre personopplysninger du ikke vil offentliggjøre."] },
          { title: "Sikkerhetskopi og lagringstid", body: ["Lokal fremdrift beholdes til du nullstiller den eller sletter appen og kan inngå i enhetsbackup. Den begrensede kartbufferen kan utløpe eller tømmes i appen. OSM-områder blir liggende til du sletter dem i appen eller sletter appen. Kartbuffer og OSM-pakker er utelatt fra iOS-/iCloud-enhetsbackup og deles eller eksporteres ikke av appen.", "Nye oppdateringer av aktiv v4-skyfremdrift sendes bare fra synkronisering som er slått på og har bestått konto- og sikkerhetskontrollene. En forespørsel som allerede er sendt til Apple, kan fullføres selv om du slår av synk eller et kontovarsel oppstår. Avslåing sletter ikke eksisterende skyfiler. Eldre v1-/v3-filer beholdes urørt og stopper synk. Oppbevaring hos Apple, Kartverket, GitHub og andre tjenesteleverandører følger også deres egne regler."] },
          { title: "Rettslig grunnlag", body: ["Når personvernforordningen gjelder, brukes artikkel 6 nr. 1 bokstav b for å levere funksjoner du selv starter under appavtalen, og bokstav f for nødvendig brukerstøtte, feilsøking og sikker drift. Dersom en behandling krever samtykke, brukes bokstav a. Samtykket kan trekkes tilbake uten at det påvirker lovligheten av behandling som skjedde før tilbaketrekkingen. iOS-tillatelsen er en teknisk kontroll og er ikke alene et personvernrettslig samtykke. Eksterne leverandører oppgir sine egne behandlingsgrunnlag i sine personvernerklæringer."] },
          { title: "Dine valg og rettigheter", body: ["Du kan trekke tilbake posisjonstilgang, slå Game Center-synk av eller på i Profil, tømme kartbufferen, slette nedlastede OSM-områder og nullstille lokal fremdrift. Avslått synk stopper nye synkforsøk uten å slette lokal fremdrift eller eksisterende skyfiler. Se Personvernvalg for fremgangsmåten.", "Du kan kontakte utgiveren for å be om innsyn, retting, sletting, begrensning, protest eller dataportabilitet der disse rettighetene gjelder. Utgiveren har ikke direkte administrativ tilgang til data i Apples Game Center, iCloud eller sikkerhetskopi av enheten. Slike data må også håndteres gjennom Apples kontroller eller Apple Support. Du kan klage til Datatilsynet."], links: [["Åpne Personvernvalg", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/", "external"]] },
          { title: "Overføring utenfor EØS", body: ["Apple opplyser at personopplysninger fra EØS kontrolleres fra Irland, og at Apples internasjonale overføringer styres av EUs standard personvernbestemmelser. En kopi kan bes om gjennom Apples personvernkontakt. GitHub opplyser at overføringer til land uten tilstrekkelighetsbeslutning vanligvis bygger på EUs standard personvernbestemmelser, og at GitHub også er sertifisert under EU–USA Data Privacy Framework. Kopi av eller informasjon om garantiene finnes gjennom de lenkede personvernerklæringene og kontaktpunktene."], links: [["Apples personvern", "https://www.apple.com/legal/privacy/", "external"], ["GitHubs personvern", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Nettstedet", body: ["Dette nettstedet bruker ingen analyseverktøy, annonsepiksler eller egne informasjonskapsler. Det driftes med GitHub Pages. GitHub kan logge IP-adresse og andre tekniske besøksdata for sikkerhet og drift etter sin personvernerklæring."], links: [["GitHubs personvernerklæring", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Endringer", body: ["Erklæringen oppdateres når appens databruk eller relevante tjenester endres vesentlig. Dato og gjeldende appversjon vises øverst."] }
        ]
      },
      en: {
        eyebrow: "Legal and transparent", title: "Privacy policy for Tind 100",
        lead: "This policy explains what information the app processes, where it is stored, which external services are used and the choices available to you.", dated: true,
        sections: [
          { title: "Data controller", kind: "controller", body: ["Tind 100 is published by {publisher}, {country}. Use the private email address below for privacy and security enquiries. Do not post personal information or GPS tracks in a public GitHub issue."] },
          { title: "In brief", body: ["Tind 100 works without signing in or creating a Tind 100 account. Progress is saved on the iPhone first. Game Center/iCloud sync is off by default and starts only after you enable it in Profile and complete the required account confirmation. The app has no advertising, marketing tracking or analytics tools and does not sell personal data."] },
          { title: "Information stored locally", bullets: ["language, map choices, selected challenges and sync status", "Game Center player ID, last displayed alias and sync status when you choose sync; a confirmed account binding is stored only on this device in Keychain", "peak visits, timestamps, verification method, points and check-in distance", "active GPS routes with coordinates, elevation, accuracy and timestamps", "completed route summaries with start point, a limited sample of route points, distance, duration and ascent; these totals are activity and fitness data", "weekly and friend challenges", "a limited disk cache of Kartverket tiles you have viewed, and OSM map packages for areas you explicitly select and confirm"] },
          { title: "Location and route recording", body: ["When you choose a location feature, the app may use precise or approximate location for GPS check-in, county lookup, maps, challenges and route recording. During an active route it may continue using location in the background, in which case iOS shows an indicator.", "The complete active track is stored locally. After completion the complete active track is removed, while a limited summary and selected sample points remain locally. The active Game Center v4 save does not receive precise route geometry, route start, peak coordinates or check-in distance."] },
          { title: "Game Center and iCloud", body: ["Game Center and iCloud are optional. Enable sync in Profile and confirm the current Game Center player and iCloud account before the first sync. An active v4 cloud save may contain visited peak IDs and dates, verification method, points, route summaries, challenges, county, peak metadata, alias and reset timestamp. It does not contain precise route geometry, route start, peak coordinates or check-in distance.", "To prevent progress being mixed between accounts, the app stores a device-only binding of the Game Center player ID and Apple's opaque iCloud account identifier in Keychain. This is not a password. The binding does not sync to other devices and is not deleted by turning sync off or resetting progress in the app.", "Account changes, an unavailable account binding or older v1/v3 cloud files pause sync. Older files are not automatically imported, overwritten or deleted; local use remains available. Apple processes Game Center, iCloud and backup data under its own terms and privacy rules."] },
          { title: "Maps and external services", bullets: ["Apple Maps/MapKit provides maps, geocoding and county lookup.", "The online Kartverket hiking map is displayed up to zoom 17. The app automatically caches eligible tiles you actually view on disk at zoom levels 5–16 when the source permits it. The cache is limited to 128 MiB and 4,096 tiles, retained for at most seven days and possibly less depending on the source response. It is not a complete offline map. Kartverket receives tile coordinates (x/y/z), revealing the map area, and ordinary network information such as your IP address. No new Kartverket area download is offered. Map data © Kartverket. See the source terms and licences. Kartverket has not endorsed or quality-assured Tind 100.", "OSM map areas download only after you select and confirm one area. Downloads use HTTPS from GitHub Releases and GitHub file hosts github.com, release-assets.githubusercontent.com or objects.githubusercontent.com. The host receives your IP address, the selected area through the file URL and the app's User-Agent; the request does not send GPS position, route tracks or Game Center ID. Maps use © OpenStreetMap contributors under ODbL 1.0. Packages contain source data at zoom levels 0–14 and can be displayed up to level 16; enlarging above 14 adds no new detail.", "This app version uses a preinstalled peak catalogue and sends no catalogue requests to Overpass API. Optional OSM map areas are downloaded separately as described above.", "When you choose to open Varsom, the Norwegian Mountain Code or another external link, that site’s privacy practices apply."], links: [["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "Sharing", body: ["The app does not automatically share progress with people. When you use the share feature, the recipient or selected service may receive a Game Center display name, statistics, date, limited peak details and a Tind 100 link. Neither the summit coordinate nor the route track is included in the shared link. The selected sharing service’s rules apply after you send the information."] },
          { title: "Voluntary TestFlight pilot", body: ["Pilot measurement is available only in a test environment and is off by default. If you turn it on, the app stores a random report code, a local revision and participation cycle, consent and task dates rounded to the day, whether four pilot tasks were completed, app version, build, language, the localised Premium price actually displayed with currency and source, and optional Premium answers. The report contains no coordinates, route track, peak name, search, Apple or Game Center account, device identifier or contact details. Nothing is sent automatically: you can review the full JSON report and choose whether and where to share it.", "If you send the report to the publisher, it is used to assess the pilot tasks, usability and interest in Premium. Raw reports are deleted or anonymised within 30 days after the final pilot summary and no later than 90 days after receipt, unless a documented security or legal requirement needs longer retention. Non-identifying aggregate results may be retained. You can stop measurement or restart pilot progress in the app. Restarting removes consent, tasks and the Premium answer but retains the disclosed anonymous report code and revision to prevent duplicate counting; a full app reset also deletes those. You can request deletion of a received report by email using the report code."] },
          { title: "Support and public issue reports", body: ["When you send email, the publisher processes the sender address, message, attachments and technical details you choose to provide to answer and document the enquiry. The email provider receives and stores the message as a service provider and may maintain its own backups and retention periods. Copies controlled by the publisher are normally deleted or anonymised no later than 12 months after the case is closed, unless security or a legal requirement makes longer retention necessary.", "A GitHub issue is public and may display a username, text, attachments, device and app version and timestamps. Do not include sensitive information, GPS tracks or other personal data you do not want to make public."] },
          { title: "Backups and retention", body: ["Local progress remains until you reset it or delete the app and may be included in device backups. The limited map cache may expire or be cleared in the app. OSM areas remain until you delete them in the app or delete the app. The map cache and OSM packages are excluded from iOS/iCloud device backups and are not shared or exported by the app.", "New updates to active v4 cloud progress are sent only by enabled sync that has passed account and safety checks. A request already sent to Apple may complete even after you turn sync off or an account warning occurs. Turning sync off does not delete existing cloud files. Older v1/v3 files remain untouched and pause sync. Retention by Apple, Kartverket, GitHub and other service providers is also governed by their own rules."] },
          { title: "Legal basis", body: ["Where the GDPR applies, Article 6(1)(b) is used to provide features you initiate under the app agreement, and Article 6(1)(f) for necessary support, troubleshooting and secure operation. Where processing requires consent, Article 6(1)(a) is used. Consent can be withdrawn without affecting the lawfulness of processing before withdrawal. An iOS permission is a technical control and is not by itself GDPR consent. External providers state their own legal bases in their privacy notices."] },
          { title: "Your choices and rights", body: ["You can withdraw location access, turn Game Center sync off or on in Profile, clear the map cache, delete downloaded OSM areas and reset local progress. Turning sync off stops new sync attempts without deleting local progress or existing cloud files. See Privacy choices for instructions.", "You may contact the publisher to request access, correction, deletion, restriction, objection or data portability where those rights apply. The publisher has no direct administrative access to Apple Game Center, iCloud or device-backup data. Those must also be managed through Apple’s controls or Apple Support. You may complain to your data-protection authority."], links: [["Open Privacy choices", "../privacy-choices/"], ["Norwegian Data Protection Authority", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "Transfers outside the EEA", body: ["Apple states that EEA personal data is controlled from Ireland and that Apple’s international transfers are governed by the EU Standard Contractual Clauses. A copy may be requested through Apple’s privacy contact. GitHub states that transfers to countries without an adequacy decision generally rely on the EU Standard Contractual Clauses, and that GitHub is also certified under the EU–US Data Privacy Framework. Copies of or information about the safeguards are available through the linked privacy notices and contact points."], links: [["Apple Privacy", "https://www.apple.com/legal/privacy/", "external"], ["GitHub Privacy Statement", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "This website", body: ["This website uses no analytics, advertising pixels or first-party cookies. It is hosted by GitHub Pages. GitHub may log IP addresses and other technical visit data for security and operation under its privacy statement."], links: [["GitHub Privacy Statement", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Changes", body: ["This policy will be updated if the app’s data use or relevant services change materially. The date and applicable app version appear above."] }
        ]
      },
      fr: {
        eyebrow: "Informations juridiques et transparence", title: "Politique de confidentialité de Tind 100",
        lead: "Cette politique explique quelles informations l’app traite, où elles sont stockées, quels services externes sont utilisés et quels choix s’offrent à vous.", dated: true,
        sections: [
          { title: "Responsable du traitement", kind: "controller", body: ["Tind 100 est publiée par {publisher}, {country}. Utilisez l’adresse e-mail privée indiquée ci-dessous pour toute demande relative à la confidentialité ou à la sécurité. Ne publiez pas d’informations personnelles ni de traces GPS dans un ticket GitHub public."] },
          { title: "En bref", body: ["Tind 100 fonctionne sans connexion ni compte Tind 100. La progression est d’abord enregistrée sur l’iPhone. La synchronisation Game Center/iCloud est désactivée par défaut et ne commence qu’après son activation dans Profil et la confirmation requise des comptes. L’app ne contient ni publicité, ni suivi marketing, ni outil d’analyse et ne vend pas de données personnelles."] },
          { title: "Informations stockées localement", bullets: ["la langue, les choix de cartes, les défis sélectionnés et l’état de la synchronisation", "identifiant du joueur Game Center, dernier pseudonyme affiché et état de synchronisation si vous choisissez cette fonction ; une association de comptes confirmée est conservée uniquement sur cet appareil dans le Trousseau", "les visites de sommets, les horodatages, la méthode de vérification, les points et la distance de validation", "les itinéraires GPS actifs, avec leurs coordonnées, altitude, précision et horodatages", "les résumés d’itinéraires terminés, avec le point de départ, un échantillon limité de points de l’itinéraire, la distance, la durée et le dénivelé positif ; ces totaux constituent des données d’activité et de condition physique", "les défis hebdomadaires et les défis entre amis", "un cache disque limité des tuiles Kartverket consultées et des paquets OSM pour les zones que vous sélectionnez et confirmez explicitement"] },
          { title: "Localisation et enregistrement d’itinéraires", body: ["Lorsque vous choisissez une fonctionnalité de localisation, l’app peut utiliser votre position précise ou approximative pour la validation GPS, l’identification du comté, les cartes, les défis et l’enregistrement d’itinéraires. Pendant un itinéraire actif, elle peut continuer à utiliser votre position en arrière-plan ; iOS affiche alors un indicateur.", "La trace active complète est stockée localement. Une fois l’itinéraire terminé, la trace active complète est supprimée, tandis qu’un résumé limité et certains points échantillonnés restent stockés localement. La sauvegarde active Game Center v4 ne reçoit ni la géométrie précise de l’itinéraire, ni le départ de l’itinéraire, ni les coordonnées du sommet, ni la distance de validation."] },
          { title: "Game Center et iCloud", body: ["Game Center et iCloud sont facultatifs. Activez la synchronisation dans Profil et confirmez le joueur Game Center et le compte iCloud actuels avant la première synchronisation. Une sauvegarde cloud v4 active peut contenir les identifiants et dates des sommets visités, le mode de vérification, les points, les résumés d’itinéraires, les défis, le comté, les métadonnées des sommets, le pseudonyme et la date de réinitialisation. Elle ne contient ni géométrie précise des itinéraires, ni point de départ, ni coordonnées des sommets, ni distance de validation.", "Pour éviter de mélanger la progression de plusieurs comptes, l’app conserve dans le Trousseau une association propre à cet appareil entre l’identifiant du joueur Game Center et l’identifiant opaque du compte iCloud fourni par Apple. Ce n’est pas un mot de passe. Cette association n’est pas synchronisée entre appareils et n’est supprimée ni par la désactivation de la synchronisation ni par la réinitialisation dans l’app.", "Un changement de compte, une association inaccessible ou d’anciens fichiers cloud v1/v3 mettent la synchronisation en pause. Les anciens fichiers ne sont ni importés, ni écrasés, ni supprimés automatiquement ; l’utilisation locale reste possible. Apple traite les données Game Center, iCloud et de sauvegarde selon ses propres conditions et règles de confidentialité."] },
          { title: "Cartes et services externes", bullets: ["Apple Maps/MapKit fournit les cartes, le géocodage et l’identification du comté.", "La carte de randonnée Kartverket en ligne s’affiche jusqu’au zoom 17. L’app conserve automatiquement sur disque les tuiles admissibles réellement consultées aux niveaux 5–16, lorsque la source l’autorise. Le cache est limité à 128 Mio et 4 096 tuiles, pour sept jours au maximum, éventuellement moins selon la réponse de la source. Ce n’est pas une carte hors ligne complète. Kartverket reçoit les coordonnées des tuiles (x/y/z), qui révèlent la zone, et des informations réseau habituelles telles que l’adresse IP. Aucun nouveau téléchargement de zone Kartverket n’est proposé. Données cartographiques © Kartverket. Consultez les conditions et licences des sources. Kartverket n’a ni approuvé Tind 100 ni vérifié sa qualité.", "Les zones OSM ne sont téléchargées qu’après sélection et confirmation d’une zone. Le téléchargement utilise HTTPS depuis GitHub Releases et les hôtes GitHub github.com, release-assets.githubusercontent.com ou objects.githubusercontent.com. L’hôte reçoit l’adresse IP, la zone choisie via l’adresse du fichier et le User-Agent de l’app ; la requête n’envoie ni position GPS, ni traces, ni identifiant Game Center. Les cartes utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. Les paquets contiennent les niveaux source 0–14 et peuvent s’afficher jusqu’au niveau 16 ; au-delà de 14, l’agrandissement n’ajoute aucun détail.", "Cette version utilise un catalogue de sommets préinstallé et n’envoie aucune requête de catalogue à l’API Overpass. Les zones cartographiques OSM facultatives sont téléchargées séparément, comme indiqué ci-dessus.", "Lorsque vous choisissez d’ouvrir Varsom, le Code norvégien de la montagne ou un autre lien externe, les pratiques de confidentialité de ce site s’appliquent."], links: [["Conditions d’utilisation de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "Partage", body: ["L’app ne partage pas automatiquement la progression avec d’autres personnes. Lorsque vous utilisez la fonction de partage, le destinataire ou le service sélectionné peut recevoir un nom d’affichage Game Center, des statistiques, une date, des informations limitées sur le sommet et un lien Tind 100. Ni les coordonnées du sommet ni la trace de l’itinéraire ne figurent dans le lien partagé. Les règles du service de partage sélectionné s’appliquent après l’envoi des informations."] },
          { title: "Pilote TestFlight facultatif", body: ["Le dispositif de mesure pilote n’est disponible que dans un environnement de test et est désactivé par défaut. Si vous l’activez, l’app stocke un code de rapport aléatoire, une révision locale et un cycle de participation, les dates de consentement et d’exécution des tâches arrondies au jour, l’indication de l’accomplissement ou non des quatre tâches pilotes, la version de l’app, le numéro de build, la langue, le prix Premium localisé effectivement affiché avec sa devise et sa source, ainsi que des réponses Premium facultatives. Le rapport ne contient aucune coordonnée, trace d’itinéraire, nom de sommet, recherche, compte Apple ou Game Center, identifiant d’appareil ni coordonnée de contact. Rien n’est envoyé automatiquement : vous pouvez examiner le rapport JSON complet et choisir de le partager ou non, et où.", "Si vous envoyez le rapport à l’éditeur, il sert à évaluer les tâches pilotes, la facilité d’utilisation et l’intérêt pour Premium. Les rapports bruts sont supprimés ou anonymisés dans les 30 jours suivant le résumé final du pilote et au plus tard 90 jours après leur réception, sauf si une exigence de sécurité ou légale dûment documentée nécessite une conservation plus longue. Les résultats agrégés non identifiants peuvent être conservés. Vous pouvez arrêter la mesure ou recommencer la progression du pilote dans l’app. Le redémarrage supprime le consentement, les tâches et la réponse Premium, mais conserve le code de rapport anonyme communiqué et la révision afin d’éviter le double comptage ; une réinitialisation complète de l’app supprime également ces éléments. Vous pouvez demander par e-mail la suppression d’un rapport reçu en indiquant le code du rapport."] },
          { title: "Assistance et rapports publics de problèmes", body: ["Lorsque vous envoyez un e-mail, l’éditeur traite l’adresse de l’expéditeur, le message, les pièces jointes et les informations techniques que vous choisissez de fournir afin de répondre à la demande et de la documenter. Le fournisseur de messagerie reçoit et stocke le message en qualité de prestataire de services et peut conserver ses propres sauvegardes et appliquer ses propres durées de conservation. Les copies contrôlées par l’éditeur sont normalement supprimées ou anonymisées au plus tard 12 mois après la clôture du dossier, sauf si la sécurité ou une exigence légale nécessite une conservation plus longue.", "Un ticket GitHub est public et peut afficher un nom d’utilisateur, du texte, des pièces jointes, l’appareil, la version de l’app et des horodatages. N’y incluez pas d’informations sensibles, de traces GPS ni d’autres données à caractère personnel que vous ne souhaitez pas rendre publiques."] },
          { title: "Sauvegardes et durée de conservation", body: ["La progression locale reste jusqu’à sa réinitialisation ou la suppression de l’app et peut entrer dans une sauvegarde de l’appareil. Le cache limité peut expirer ou être vidé dans l’app. Les zones OSM restent jusqu’à leur suppression dans l’app ou celle de l’app. Le cache et les paquets OSM sont exclus des sauvegardes iOS/iCloud de l’appareil et ne sont ni partagés ni exportés par l’app.", "Les nouvelles mises à jour de la progression cloud v4 active sont envoyées uniquement par une synchronisation activée ayant passé les contrôles de comptes et de sécurité. Une requête déjà envoyée à Apple peut aboutir même après la désactivation ou un avertissement de compte. La désactivation ne supprime pas les fichiers existants. Les anciens fichiers v1/v3 restent intacts et mettent la synchronisation en pause. La conservation par Apple, Kartverket, GitHub et les autres prestataires dépend aussi de leurs règles."] },
          { title: "Base juridique", body: ["Lorsque le RGPD s’applique, l’article 6, paragraphe 1, point b), est utilisé pour fournir les fonctionnalités que vous lancez dans le cadre du contrat relatif à l’app, et le point f) pour l’assistance, le dépannage et l’exploitation sécurisée nécessaires. Lorsqu’un traitement requiert un consentement, le point a) est utilisé. Le consentement peut être retiré sans affecter la licéité du traitement effectué avant ce retrait. Une autorisation iOS est un contrôle technique et ne constitue pas, à elle seule, un consentement au sens du RGPD. Les fournisseurs externes indiquent leurs propres bases juridiques dans leurs politiques de confidentialité."] },
          { title: "Vos choix et vos droits", body: ["Vous pouvez retirer l’accès à la position, activer ou désactiver la synchronisation Game Center dans Profil, vider le cache, supprimer les zones OSM téléchargées et réinitialiser la progression locale. La désactivation arrête les nouvelles tentatives sans supprimer la progression locale ni les fichiers cloud existants. Consultez Choix de confidentialité.", "Vous pouvez contacter l’éditeur pour demander l’accès, la rectification, l’effacement, la limitation du traitement, l’opposition au traitement ou la portabilité des données, lorsque ces droits s’appliquent. L’éditeur ne dispose d’aucun accès administratif direct aux données d’Apple Game Center, d’iCloud ou des sauvegardes de l’appareil. Ces données doivent également être gérées au moyen des contrôles d’Apple ou de l’assistance Apple. Vous pouvez introduire une réclamation auprès de votre autorité de protection des données."], links: [["Ouvrir les choix en matière de confidentialité", "../privacy-choices/"], ["Autorité norvégienne de protection des données", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "Transferts hors de l’EEE", body: ["Apple indique que les données à caractère personnel de l’EEE sont contrôlées depuis l’Irlande et que les transferts internationaux d’Apple sont régis par les clauses contractuelles types de l’UE. Il est possible d’en demander une copie par l’intermédiaire du contact d’Apple chargé de la confidentialité. GitHub indique que les transferts vers des pays ne faisant pas l’objet d’une décision d’adéquation reposent généralement sur les clauses contractuelles types de l’UE, et que GitHub est également certifié au titre du cadre de protection des données UE–États-Unis. Des copies des garanties, ou des informations les concernant, sont disponibles par l’intermédiaire des politiques de confidentialité et des points de contact indiqués dans les liens."], links: [["Confidentialité chez Apple", "https://www.apple.com/legal/privacy/", "external"], ["Déclaration de confidentialité de GitHub", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Ce site web", body: ["Ce site web n’utilise aucun outil d’analyse, pixel publicitaire ni cookie de première partie. Il est hébergé par GitHub Pages. GitHub peut journaliser les adresses IP et d’autres données techniques de visite à des fins de sécurité et d’exploitation, conformément à sa déclaration de confidentialité."], links: [["Déclaration de confidentialité de GitHub", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Modifications", body: ["Cette politique sera mise à jour si l’utilisation des données par l’app ou les services concernés change de manière substantielle. La date et la version applicable de l’app figurent ci-dessus."] }
        ]
      },
      es: {
        eyebrow: "Legal y transparente", title: "Privacidad de Tind 100",
        lead: "Esta política explica qué información trata la app, dónde se guarda, qué servicios externos utiliza y qué opciones tienes.", dated: true,
        sections: [
          { title: "Responsable del tratamiento", kind: "controller", body: ["Tind 100 es publicada por {publisher}, {country}. Usa la dirección privada de correo indicada abajo para consultas de privacidad y seguridad. No publiques información personal ni rutas GPS en una incidencia pública de GitHub."] },
          { title: "Resumen", body: ["Tind 100 funciona sin iniciar sesión ni crear una cuenta de Tind 100. El progreso se guarda primero en el iPhone. La sincronización con Game Center/iCloud está desactivada por defecto y solo comienza tras activarla en Perfil y completar la confirmación de cuentas necesaria. La app no contiene publicidad, seguimiento comercial ni herramientas de análisis y no vende datos personales."] },
          { title: "Información guardada localmente", bullets: ["idioma, opciones de mapa, desafíos seleccionados y estado de sincronización", "ID de jugador de Game Center, último alias mostrado y estado de sincronización si eliges sincronizar; la vinculación de cuentas confirmada se guarda solo en este dispositivo en el Llavero", "visitas a cumbres, fechas, método de verificación, puntos y distancia de registro", "rutas GPS activas con coordenadas, altitud, precisión y fecha", "resúmenes de rutas terminadas con punto de inicio, una muestra limitada de puntos, distancia, duración y ascenso; estos totales son datos de actividad física", "desafíos semanales y de amistades", "una caché limitada en disco de teselas de Kartverket que has visto y paquetes OSM de las zonas que seleccionas y confirmas expresamente"] },
          { title: "Ubicación y grabación de rutas", body: ["Cuando eliges una función de ubicación, la app puede usar la ubicación precisa o aproximada para registros GPS, localizar la provincia, mostrar mapas, gestionar desafíos y grabar rutas. Durante una ruta activa puede seguir usando la ubicación en segundo plano; iOS muestra entonces un indicador.", "El recorrido activo completo se guarda localmente. Al terminar se elimina el recorrido activo completo, pero permanece localmente un resumen limitado y algunos puntos de muestra. La copia activa v4 de Game Center no recibe la geometría precisa de la ruta, su inicio, las coordenadas de la cumbre ni la distancia de registro."] },
          { title: "Game Center e iCloud", body: ["Game Center e iCloud son opcionales. Activa la sincronización en Perfil y confirma el jugador de Game Center y la cuenta de iCloud actuales antes de la primera sincronización. Una copia activa v4 puede contener ID y fechas de cumbres visitadas, método de verificación, puntos, resúmenes de rutas, desafíos, provincia, metadatos de cumbres, alias y fecha de restablecimiento. No contiene geometría precisa de rutas, punto de inicio, coordenadas de cumbres ni distancia de registro.", "Para evitar mezclar el progreso de distintas cuentas, la app guarda en el Llavero una vinculación exclusiva del dispositivo entre el ID de jugador de Game Center y el identificador opaco de la cuenta de iCloud facilitado por Apple. No es una contraseña. La vinculación no se sincroniza con otros dispositivos ni se elimina al desactivar la sincronización o restablecer el progreso en la app.", "Un cambio de cuenta, una vinculación no disponible o archivos antiguos v1/v3 pausan la sincronización. Los archivos antiguos no se importan, sobrescriben ni eliminan automáticamente; el uso local sigue disponible. Apple trata los datos de Game Center, iCloud y copias según sus propias condiciones y normas de privacidad."] },
          { title: "Mapas y servicios externos", bullets: ["Apple Maps/MapKit proporciona mapas, geocodificación y búsqueda de provincia.", "El mapa de senderismo de Kartverket en línea se muestra hasta el zoom 17. La app guarda automáticamente en disco las teselas permitidas que realmente visualizas, de los niveles 5–16, cuando la fuente lo permite. La caché se limita a 128 MiB y 4096 teselas durante un máximo de siete días, o menos según la respuesta de la fuente. No es un mapa sin conexión completo. Kartverket recibe coordenadas de teselas (x/y/z), que revelan la zona, e información de red habitual como la dirección IP. No se ofrece una nueva descarga de zonas de Kartverket. Datos cartográficos © Kartverket. Consulta las condiciones y licencias de las fuentes. Kartverket no ha respaldado Tind 100 ni verificado su calidad.", "Las zonas OSM solo se descargan tras seleccionar y confirmar una zona. La descarga usa HTTPS desde GitHub Releases y los servidores github.com, release-assets.githubusercontent.com u objects.githubusercontent.com. El servidor recibe la dirección IP, la zona elegida mediante la URL del archivo y el User-Agent de la app; la solicitud no envía posición GPS, trazados de rutas ni ID de Game Center. Los mapas usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Los paquetes contienen datos fuente en niveles 0–14 y pueden mostrarse hasta el 16; ampliar por encima de 14 no añade detalle.", "Esta versión utiliza un catálogo de cumbres preinstalado y no envía solicitudes de catálogo a Overpass API. Las zonas OSM opcionales se descargan por separado como se indica arriba.", "Al abrir Varsom, el Código de Montaña noruego u otro enlace externo, se aplica la privacidad de ese sitio."], links: [["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "Compartir", body: ["La app no comparte automáticamente el progreso con otras personas. Cuando utilizas Compartir, el destinatario o servicio elegido puede recibir el nombre visible de Game Center, estadísticas, fecha, datos limitados de la cumbre y un enlace de Tind 100. Ni la coordenada de la cumbre ni el recorrido se incluyen en el enlace compartido. Después se aplican las normas del servicio elegido."] },
          { title: "Piloto voluntario de TestFlight", body: ["La medición del piloto solo está disponible en un entorno de prueba y está desactivada de forma predeterminada. Si la activas, la app guarda un código aleatorio, una revisión y ciclo de participación locales, las fechas de consentimiento y tareas redondeadas al día, si se completaron cuatro tareas, la versión, compilación e idioma de la app, el precio localizado de Premium realmente mostrado con moneda y fuente, y respuestas opcionales sobre Premium. El informe no contiene coordenadas, recorridos, nombres de picos, búsquedas, cuentas de Apple o Game Center, identificadores del dispositivo ni datos de contacto. Nada se envía automáticamente: puedes revisar el informe JSON completo y decidir si lo compartes y con quién.", "Si envías el informe al editor, se usa para evaluar las tareas, la facilidad de uso y el interés en Premium. Los informes sin procesar se eliminan o anonimizan dentro de los 30 días posteriores al resumen final del piloto y, como máximo, 90 días después de su recepción, salvo que una obligación legal o de seguridad documentada exija conservarlos más tiempo. Pueden conservarse resultados agregados no identificativos. Puedes detener la medición o reiniciar el progreso del piloto. El reinicio elimina el consentimiento, las tareas y la respuesta Premium, pero conserva el código anónimo comunicado y la revisión para evitar duplicados; el restablecimiento completo de la app también los elimina. Puedes solicitar por correo la eliminación de un informe recibido indicando su código."] },
          { title: "Soporte e informes públicos de errores", body: ["Cuando envías un correo, el editor trata la dirección del remitente, el mensaje, los archivos adjuntos y los datos técnicos que decidas proporcionar para responder y documentar la consulta. El proveedor de correo recibe y almacena el mensaje como proveedor de servicios y puede conservar sus propias copias de seguridad y aplicar sus propios plazos. Las copias bajo control del editor se eliminan o anonimizan normalmente como máximo 12 meses después de cerrar el caso, salvo que la seguridad o una obligación legal exijan conservarlas más tiempo.", "Una incidencia de GitHub es pública y puede mostrar nombre de usuario, texto, archivos adjuntos, versión del dispositivo y de la app y marcas de tiempo. No incluyas información sensible, rutas GPS ni otros datos personales que no quieras hacer públicos."] },
          { title: "Copias y conservación", body: ["El progreso local permanece hasta restablecerlo o eliminar la app y puede incluirse en copias del dispositivo. La caché limitada puede caducar o vaciarse en la app. Las zonas OSM permanecen hasta borrarlas en la app o eliminar la app. La caché y los paquetes OSM se excluyen de las copias iOS/iCloud del dispositivo y la app no los comparte ni exporta.", "Las nuevas actualizaciones del progreso activo v4 en la nube solo se envían mediante una sincronización activada que haya superado los controles de cuentas y seguridad. Una solicitud ya enviada a Apple puede completarse incluso después de desactivar la sincronización o recibir un aviso de cuenta. Desactivarla no elimina archivos existentes. Los archivos antiguos v1/v3 permanecen intactos y pausan la sincronización. La conservación por Apple, Kartverket, GitHub y otros proveedores también depende de sus normas."] },
          { title: "Base jurídica", body: ["Cuando se aplica el RGPD, se utiliza el artículo 6.1.b para prestar las funciones que inicias en virtud del acuerdo de la app, y el artículo 6.1.f para el soporte, la resolución de errores y el funcionamiento seguro necesarios. Cuando un tratamiento requiera consentimiento, se utiliza el artículo 6.1.a. Puedes retirarlo sin que ello afecte a la licitud del tratamiento anterior a la retirada. El permiso de iOS es un control técnico y no constituye por sí solo consentimiento conforme al RGPD. Los proveedores externos indican sus propias bases en sus avisos."] },
          { title: "Tus opciones y derechos", body: ["Puedes retirar el acceso a la ubicación, activar o desactivar la sincronización de Game Center en Perfil, vaciar la caché, borrar zonas OSM descargadas y restablecer el progreso local. Desactivar la sincronización detiene nuevos intentos sin eliminar progreso local ni archivos existentes en la nube. Consulta Opciones de privacidad.", "Puedes contactar con el editor para solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad cuando correspondan. El editor no tiene acceso administrativo directo a Game Center, iCloud ni copias de dispositivo de Apple; también deben gestionarse con los controles o el soporte de Apple. Puedes reclamar ante tu autoridad de protección de datos."], links: [["Abrir Opciones de privacidad", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "Transferencias fuera del EEE", body: ["Apple indica que los datos personales del EEE se controlan desde Irlanda y que sus transferencias internacionales se rigen por las cláusulas contractuales tipo de la UE. Puede solicitarse una copia mediante el contacto de privacidad de Apple. GitHub indica que las transferencias a países sin decisión de adecuación se basan normalmente en las cláusulas contractuales tipo de la UE y que también está certificado conforme al Marco de Privacidad de Datos UE–EE. UU. Las copias o la información sobre las garantías están disponibles mediante los avisos y puntos de contacto enlazados."], links: [["Privacidad de Apple", "https://www.apple.com/legal/privacy/", "external"], ["Privacidad de GitHub", "https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Este sitio web", body: ["Este sitio no usa análisis, píxeles publicitarios ni cookies propias. Se aloja en GitHub Pages. GitHub puede registrar direcciones IP y otros datos técnicos para seguridad y funcionamiento según su declaración de privacidad."], links: [["Privacidad de GitHub", "https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Cambios", body: ["La política se actualizará si cambia de forma importante el uso de datos o los servicios. La fecha y versión aplicable aparecen arriba."] }
        ]
      },
      de: {
        eyebrow: "Rechtlich und transparent", title: "Datenschutz bei Tind 100",
        lead: "Diese Erklärung beschreibt, welche Informationen die App verarbeitet, wo sie gespeichert werden, welche externen Dienste genutzt werden und welche Optionen du hast.", dated: true,
        sections: [
          { title: "Verantwortlicher", kind: "controller", body: ["Tind 100 wird von {publisher}, {country}, herausgegeben. Nutze die unten angegebene private E-Mail-Adresse für Datenschutz- und Sicherheitsanfragen. Veröffentliche keine personenbezogenen Daten oder GPS-Tracks in einem öffentlichen GitHub-Issue."] },
          { title: "Kurzfassung", body: ["Tind 100 funktioniert ohne Anmeldung oder eigenes Tind-100-Konto. Fortschritt wird zuerst auf dem iPhone gespeichert. Game-Center-/iCloud-Synchronisierung ist standardmäßig aus und beginnt erst nach dem Einschalten im Profil und der erforderlichen Kontobestätigung. Die App enthält keine Werbung, kein Marketing-Tracking und keine Analysewerkzeuge und verkauft keine personenbezogenen Daten."] },
          { title: "Lokal gespeicherte Informationen", bullets: ["Sprache, Kartenauswahl, gewählte Aufgaben und Synchronisierungsstatus", "Game-Center-Spieler-ID, zuletzt angezeigter Alias und Synchronisierungsstatus bei gewählter Synchronisierung; eine bestätigte Kontoverknüpfung wird nur auf diesem Gerät im Schlüsselbund gespeichert", "Gipfelbesuche, Zeitpunkte, Bestätigungsart, Punkte und Check-in-Entfernung", "aktive GPS-Routen mit Koordinaten, Höhe, Genauigkeit und Zeitpunkten", "abgeschlossene Routenzusammenfassungen mit Startpunkt, begrenzter Punktestichprobe, Distanz, Dauer und Anstieg; diese Summen sind Aktivitäts- und Fitnessdaten", "Wochen- und Freundesaufgaben", "ein begrenzter Festplattencache betrachteter Kartverket-Kacheln und OSM-Kartenpakete für ausdrücklich ausgewählte und bestätigte Gebiete"] },
          { title: "Standort und Routenaufzeichnung", body: ["Wenn du eine Standortfunktion auswählst, kann die App den genauen oder ungefähren Standort für GPS-Check-in, Provinzsuche, Karten, Aufgaben und Routenaufzeichnung verwenden. Während einer aktiven Route kann der Standort im Hintergrund genutzt werden; iOS zeigt dann einen Hinweis.", "Der vollständige aktive Track wird lokal gespeichert. Nach Abschluss wird er entfernt; eine begrenzte Zusammenfassung und ausgewählte Stichprobenpunkte bleiben lokal. Der aktive Game-Center-v4-Spielstand erhält keine genaue Routengeometrie, keinen Routenstart, keine Gipfelkoordinaten und keine Check-in-Entfernung."] },
          { title: "Game Center und iCloud", body: ["Game Center und iCloud sind optional. Aktiviere die Synchronisierung im Profil und bestätige vor der ersten Synchronisierung den aktuellen Game-Center-Spieler und iCloud-Account. Ein aktiver v4-Cloud-Spielstand kann besuchte Gipfel-IDs und Daten, Bestätigungsart, Punkte, Routenzusammenfassungen, Aufgaben, Provinz, Gipfelmetadaten, Alias und Rücksetzzeit enthalten. Er enthält keine genaue Routengeometrie, keinen Routenstart, keine Gipfelkoordinaten und keine Check-in-Entfernung.", "Damit Fortschritt verschiedener Konten nicht vermischt wird, speichert die App eine gerätegebundene Verknüpfung von Game-Center-Spieler-ID und Apples undurchsichtiger iCloud-Kontokennung im Schlüsselbund. Das ist kein Passwort. Die Verknüpfung wird nicht auf andere Geräte synchronisiert und weder beim Ausschalten der Synchronisierung noch beim Zurücksetzen in der App gelöscht.", "Ein Kontowechsel, eine nicht verfügbare Kontoverknüpfung oder ältere v1-/v3-Cloud-Dateien pausieren die Synchronisierung. Ältere Dateien werden nicht automatisch importiert, überschrieben oder gelöscht; die lokale Nutzung bleibt möglich. Apple verarbeitet Game-Center-, iCloud- und Sicherungsdaten nach eigenen Bedingungen und Datenschutzregeln."] },
          { title: "Karten und externe Dienste", bullets: ["Apple Maps/MapKit liefert Karten, Geocodierung und Provinzsuche.", "Kartverkets Online-Wanderkarte wird bis Zoomstufe 17 angezeigt. Tatsächlich betrachtete zulässige Kacheln der Stufen 5–16 speichert die App automatisch auf dem Gerät, sofern die Quelle dies erlaubt. Der Cache ist auf 128 MiB und 4.096 Kacheln begrenzt, für höchstens sieben Tage oder kürzer entsprechend der Antwort der Quelle. Er ist keine vollständige Offlinekarte. Kartverket erhält Kachelkoordinaten (x/y/z), die das Kartengebiet erkennen lassen, und übliche Netzwerkinformationen wie die IP-Adresse. Neue Kartverket-Gebietsdownloads werden nicht angeboten. Kartendaten © Kartverket. Beachte die Bedingungen und Lizenzen der Quellen. Kartverket hat Tind 100 weder genehmigt noch qualitätsgeprüft.", "OSM-Gebiete werden erst nach Auswahl und Bestätigung eines Gebiets heruntergeladen. Downloads erfolgen über HTTPS von GitHub Releases und den GitHub-Dateihostern github.com, release-assets.githubusercontent.com oder objects.githubusercontent.com. Der Hoster erhält IP-Adresse, gewähltes Gebiet über die Datei-URL und den User-Agent der App; GPS-Position, Routenspuren oder Game-Center-ID werden nicht mitgesendet. Die Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Pakete enthalten Quelldaten der Zoomstufen 0–14 und können bis Stufe 16 angezeigt werden; Vergrößerung über 14 ergänzt keine Details.", "Diese App-Version verwendet einen vorinstallierten Gipfelkatalog und sendet keine Kataloganfragen an die Overpass API. Optionale OSM-Kartengebiete werden wie oben beschrieben separat heruntergeladen.", "Beim Öffnen von Varsom, dem norwegischen Bergkodex oder anderen externen Links gilt der Datenschutz der jeweiligen Website."], links: [["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "Teilen", body: ["Die App teilt Fortschritt nicht automatisch mit anderen Personen. Beim aktiven Teilen können Empfänger oder Dienst Game-Center-Anzeigenamen, Statistiken, Datum, begrenzte Gipfeldaten und einen Tind-100-Link erhalten. Weder Gipfelkoordinate noch Routentrack sind im geteilten Link enthalten. Anschließend gelten die Regeln des gewählten Dienstes."] },
          { title: "Freiwilliger TestFlight-Pilot", body: ["Die Pilotmessung ist nur in einer Testumgebung verfügbar und standardmäßig ausgeschaltet. Wenn du sie aktivierst, speichert die App einen zufälligen Berichtscode, eine lokale Revision und einen Teilnahmezyklus, auf den Tag gerundete Einwilligungs- und Aufgabendaten, den Abschluss von vier Pilotaufgaben, App-Version, Build, Sprache, den tatsächlich angezeigten lokalisierten Premium-Preis mit Währung und Quelle sowie optionale Premium-Antworten. Der Bericht enthält keine Koordinaten, Routenverläufe, Gipfelnamen, Suchen, Apple- oder Game-Center-Konten, Gerätekennungen oder Kontaktdaten. Nichts wird automatisch gesendet: Du kannst den vollständigen JSON-Bericht prüfen und selbst entscheiden, ob und wohin du ihn teilst.", "Wenn du den Bericht an den Herausgeber sendest, wird er zur Bewertung der Pilotaufgaben, Benutzerfreundlichkeit und des Interesses an Premium genutzt. Rohberichte werden innerhalb von 30 Tagen nach der abschließenden Pilotzusammenfassung und spätestens 90 Tage nach Eingang gelöscht oder anonymisiert, sofern keine dokumentierte Sicherheits- oder Rechtspflicht eine längere Speicherung verlangt. Nicht identifizierende Gesamtergebnisse dürfen aufbewahrt werden. Du kannst die Messung stoppen oder den Pilotfortschritt neu starten. Dabei werden Einwilligung, Aufgaben und Premium-Antwort entfernt, der offengelegte anonyme Berichtscode und die Revision zur Vermeidung von Doppelzählungen jedoch behalten; die vollständige App-Zurücksetzung löscht auch diese. Die Löschung eines empfangenen Berichts kannst du per E-Mail unter Angabe des Berichtscodes verlangen."] },
          { title: "Support und öffentliche Fehlermeldungen", body: ["Bei einer E-Mail verarbeitet der Herausgeber Absenderadresse, Nachricht, Anhänge und freiwillig mitgeteilte technische Angaben, um die Anfrage zu beantworten und zu dokumentieren. Der E-Mail-Anbieter empfängt und speichert die Nachricht als Dienstanbieter und kann eigene Sicherungen und Aufbewahrungsfristen haben. Vom Herausgeber kontrollierte Kopien werden normalerweise spätestens 12 Monate nach Abschluss des Falls gelöscht oder anonymisiert, sofern Sicherheit oder eine rechtliche Pflicht keine längere Speicherung erfordern.", "Ein GitHub-Issue ist öffentlich und kann Nutzername, Text, Anhänge, Geräte- und App-Version sowie Zeitangaben zeigen. Veröffentliche keine sensiblen Informationen, GPS-Tracks oder andere personenbezogene Daten, die nicht öffentlich sein sollen."] },
          { title: "Sicherungen und Speicherdauer", body: ["Lokaler Fortschritt bleibt bis zum Zurücksetzen oder Löschen der App und kann in Gerätesicherungen enthalten sein. Der begrenzte Kartencache kann ablaufen oder in der App geleert werden. OSM-Gebiete bleiben bis zu ihrer Löschung in der App oder dem Löschen der App. Kartencache und OSM-Pakete sind von iOS-/iCloud-Gerätesicherungen ausgeschlossen und werden von der App weder geteilt noch exportiert.", "Neue Aktualisierungen des aktiven v4-Cloud-Fortschritts werden nur bei eingeschalteter Synchronisierung nach bestandenen Konto- und Sicherheitsprüfungen gesendet. Eine bereits an Apple gesendete Anfrage kann auch nach dem Ausschalten oder einer Kontowarnung abgeschlossen werden. Ausschalten löscht keine vorhandenen Cloud-Dateien. Ältere v1-/v3-Dateien bleiben unverändert und pausieren die Synchronisierung. Für die Aufbewahrung durch Apple, Kartverket, GitHub und andere Anbieter gelten auch deren Regeln."] },
          { title: "Rechtsgrundlage", body: ["Soweit die DSGVO gilt, wird Artikel 6 Absatz 1 Buchstabe b für Funktionen genutzt, die du im Rahmen des App-Vertrags selbst startest, und Buchstabe f für notwendigen Support, Fehlerbehebung und sicheren Betrieb. Wenn eine Verarbeitung eine Einwilligung erfordert, gilt Buchstabe a. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung vor dem Widerruf. Eine iOS-Berechtigung ist eine technische Kontrolle und allein keine DSGVO-Einwilligung. Externe Anbieter nennen ihre eigenen Grundlagen in ihren Datenschutzhinweisen."] },
          { title: "Deine Optionen und Rechte", body: ["Du kannst Standortzugriff entziehen, die Game-Center-Synchronisierung im Profil ein- oder ausschalten, den Kartencache leeren, heruntergeladene OSM-Gebiete löschen und lokalen Fortschritt zurücksetzen. Ausschalten stoppt neue Synchronisierungsversuche, ohne lokalen Fortschritt oder bestehende Cloud-Dateien zu löschen. Siehe Datenschutzoptionen.", "Du kannst den Herausgeber um Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Datenübertragbarkeit bitten, soweit diese Rechte gelten. Der Herausgeber hat keinen direkten administrativen Zugriff auf Apple Game Center, iCloud oder Gerätesicherungen; diese müssen auch über Apple verwaltet werden. Beschwerden sind bei der zuständigen Datenschutzbehörde möglich."], links: [["Datenschutzoptionen öffnen", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "Übermittlungen außerhalb des EWR", body: ["Apple erklärt, dass personenbezogene Daten aus dem EWR von Irland aus kontrolliert werden und internationale Übermittlungen von Apple den EU-Standardvertragsklauseln unterliegen. Eine Kopie kann über Apples Datenschutzkontakt angefordert werden. GitHub erklärt, dass Übermittlungen in Länder ohne Angemessenheitsbeschluss normalerweise auf den EU-Standardvertragsklauseln beruhen und GitHub zudem nach dem EU–US Data Privacy Framework zertifiziert ist. Kopien oder Informationen zu den Garantien sind über die verlinkten Erklärungen und Kontaktstellen erhältlich."], links: [["Apple Datenschutz", "https://www.apple.com/legal/privacy/", "external"], ["GitHub-Datenschutz", "https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Diese Website", body: ["Diese Website verwendet keine Analysewerkzeuge, Werbepixel oder eigenen Cookies. Sie wird mit GitHub Pages betrieben. GitHub kann IP-Adressen und technische Besuchsdaten für Sicherheit und Betrieb nach seiner Datenschutzerklärung protokollieren."], links: [["GitHub-Datenschutzerklärung", "https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Änderungen", body: ["Die Erklärung wird bei wesentlichen Änderungen der Datennutzung oder Dienste aktualisiert. Datum und geltende App-Version stehen oben."] }
        ]
      },
      "zh-Hans": {
        eyebrow: "法律与透明", title: "Tind 100 隐私政策",
        lead: "本政策说明 App 会处理哪些信息、信息保存在哪里、使用哪些外部服务，以及你可进行哪些选择。", dated: true,
        sections: [
          { title: "数据控制者", kind: "controller", body: ["Tind 100 由 {publisher}（{country}）发布。隐私或安全咨询请使用下方私人电子邮件。请勿在公开 GitHub Issue 中发布个人信息或 GPS 轨迹。"] },
          { title: "概要", body: ["Tind 100 无需登录或创建独立账户即可使用。进度先保存在 iPhone 上。Game Center/iCloud 同步默认关闭，只有在“个人资料”中开启并完成所需账户确认后才会开始。App 不含广告、营销跟踪或分析工具，也不出售个人数据。"] },
          { title: "本机保存的信息", bullets: ["语言、地图选择、所选挑战和同步状态", "选择同步后保存的 Game Center 玩家 ID、最近显示的昵称和同步状态；已确认的账户绑定仅保存在本设备的钥匙串中", "山峰到访、时间、验证方式、积分和签到距离", "包含坐标、海拔、精度和时间的活动 GPS 路线", "包含起点、有限采样点、距离、时长和累计爬升的已完成路线摘要；这些汇总属于活动与健身数据", "每周挑战和好友挑战", "已查看的 Kartverket 瓦片的有限磁盘缓存，以及你明确选择并确认下载的 OSM 区域地图包"] },
          { title: "位置与路线记录", body: ["选择位置功能后，App 可能使用精确或大致位置进行 GPS 签到、郡级查询、地图显示、挑战和路线记录。活动路线期间可在后台继续使用位置，此时 iOS 会显示指示。", "完整活动轨迹保存在本机。完成后完整活动轨迹会被删除，但有限摘要和选定采样点仍保存在本机。活动 Game Center v4 存档不会收到精确路线几何、路线起点、山峰坐标或签到距离。"] },
          { title: "Game Center 与 iCloud", body: ["Game Center 和 iCloud 均为可选功能。请在“个人资料”中开启同步，并在首次同步前确认当前 Game Center 玩家和 iCloud 账户。活动 v4 云存档可能包含到访山峰 ID 与日期、验证方式、积分、路线摘要、挑战、郡、山峰元数据、昵称和重置时间，不包含精确路线几何、路线起点、山峰坐标或签到距离。", "为避免混合不同账户的进度，App 会在钥匙串中保存仅限本设备的绑定，将 Game Center 玩家 ID 与 Apple 提供的不透明 iCloud 账户标识符关联。该标识符不是密码。绑定不会同步到其他设备，关闭同步或在 App 内重置进度也不会删除该绑定。", "账户变更、绑定不可用或存在旧版 v1/v3 云文件时，同步会暂停。旧文件不会自动导入、覆盖或删除；你仍可在本地使用 App。Apple 根据其自身条款和隐私规则处理 Game Center、iCloud 和备份数据。"] },
          { title: "地图与外部服务", bullets: ["Apple Maps/MapKit 提供地图、地理编码和郡级查询。", "Kartverket 在线徒步地图最高显示至缩放级别 17。在来源允许的情况下，App 会自动将实际查看过且符合条件的 5–16 级瓦片缓存到磁盘。缓存最多为 128 MiB、4096 个瓦片，保留时间最长七天，也可能依据来源响应缩短。它并非完整离线地图。Kartverket 会收到可显示地图区域的瓦片坐标（x/y/z）及 IP 地址等常规网络信息。不提供新的 Kartverket 区域下载。 地图数据 © Kartverket。请参阅来源条款和许可。Kartverket 未批准 Tind 100，也未核验其质量。", "OSM 区域只有在你选择并确认一个区域后才会下载。下载通过 HTTPS 从 GitHub Releases 及 GitHub 文件托管域名 github.com、release-assets.githubusercontent.com 或 objects.githubusercontent.com 获取。托管方会收到 IP 地址、文件网址中表示的所选区域以及 App 的 User-Agent；请求不发送 GPS 位置、路线轨迹或 Game Center ID。地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。地图包包含 0–14 级源数据，最高可显示至 16 级；超过 14 级只会放大已有数据，不增加细节。", "此版本使用预装山峰目录，不会向 Overpass API 发送目录请求。可选的 OSM 地图区域按上文所述单独下载。", "主动打开 Varsom、挪威山区安全守则或其他外部链接后，适用相应网站的隐私政策。"], links: [["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
          { title: "分享", body: ["App 不会自动向他人分享进度。你主动使用分享功能时，接收者或所选服务可能收到 Game Center 显示名称、统计数据、日期、有限的山峰资料和 Tind 100 链接。分享链接不包含山峰坐标或路线轨迹。发送后适用所选服务的规则。"] },
          { title: "自愿 TestFlight 测试", body: ["测试测量仅在测试环境中可用，并且默认关闭。开启后，App 会保存随机报告代码、本地修订号和参与周期、精确到日期的同意与任务日期、四项测试任务是否完成、App 版本、构建号、语言、实际显示的高级版本地化价格及其货币和来源，以及可选的高级版回答。报告不包含坐标、路线轨迹、山峰名称、搜索内容、Apple 或 Game Center 帐户、设备标识符或联系方式。不会自动发送任何内容：你可以先查看完整 JSON 报告，再自行决定是否以及向何处分享。", "如果你将报告发送给发布者，它仅用于评估测试任务、易用性和对高级版的兴趣。原始报告会在最终测试总结后 30 天内删除或匿名化，并且最迟不超过收到报告后的 90 天；如有记录在案的安全或法律要求，可能需要保留更久。可保留无法识别个人身份的汇总结果。你可停止测量或重新开始测试进度；重新开始会清除同意状态、任务和高级版回答，但会保留已告知的匿名报告代码和修订号以免重复计数，完整重置 App 也会删除这些内容。你还可通过电子邮件提供报告代码，请求删除已收到的报告。"] },
          { title: "支持与公开问题报告", body: ["发送电子邮件时，发布者会处理发件地址、邮件内容、附件以及你自愿提供的技术信息，用于答复并记录咨询。电子邮件服务商作为服务提供方接收并存储邮件，并可能保有自己的备份和保留期限。发布者控制的副本通常最迟会在案件结束后 12 个月内删除或匿名化；如安全或法律要求需要，则可能保留更久。", "GitHub Issue 是公开的，可能显示用户名、文字、附件、设备与 App 版本和时间。请勿提交敏感信息、GPS 轨迹或其他你不希望公开的个人数据。"] },
          { title: "备份与保留期限", body: ["本地进度会保留至你重置进度或删除 App，并可能进入设备备份。有限地图缓存可能过期，也可在 App 中清空。OSM 区域会保留至你在 App 中删除该区域或删除 App。地图缓存和 OSM 包均排除在 iOS/iCloud 设备备份之外，App 不会分享或导出这些文件。", "只有开启同步并通过账户和安全检查后，才会发送新的活动 v4 云进度更新。已发送给 Apple 的请求可能在关闭同步或出现账户警告后仍完成。关闭同步不会删除已有云文件。旧版 v1/v3 文件保持不变，并使同步暂停。Apple、Kartverket、GitHub 及其他提供方的数据保留也受各自规则约束。"] },
          { title: "法律依据", body: ["在适用 GDPR 的地区，依据第 6 条第 1 款 b 项处理你根据 App 协议主动启用的功能，依据 f 项处理必要的支持、故障排查和安全运营。处理如需同意，则依据 a 项。撤回同意不会影响撤回前处理活动的合法性。iOS 权限是一项技术控制，本身并不构成 GDPR 同意。外部服务商会在其隐私声明中说明各自的法律依据。"] },
          { title: "你的选择与权利", body: ["你可以撤回位置权限，在“个人资料”中开启或关闭 Game Center 同步，清空地图缓存，删除已下载的 OSM 区域，并重置本地进度。关闭同步会停止新的同步尝试，但不会删除本地进度或已有云文件。操作步骤见“隐私选项”。", "在适用情况下，你可联系发布者行使访问、更正、删除、限制处理、反对处理或数据可携权。发布者无法直接管理 Apple Game Center、iCloud 或设备备份数据；这些数据也需通过 Apple 控件或 Apple 支持处理。你还可以向数据保护主管机构投诉。"], links: [["打开隐私选项", "../privacy-choices/"], ["挪威数据保护局", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "向欧洲经济区以外传输", body: ["Apple 表示，欧洲经济区个人数据由其爱尔兰实体负责，Apple 的国际传输受欧盟标准合同条款约束；可通过 Apple 隐私联系渠道索取副本。GitHub 表示，向没有充分性决定的国家传输时通常依据欧盟标准合同条款，并已通过欧盟—美国数据隐私框架认证。可通过所链接的隐私声明和联系渠道获取保障措施的副本或相关信息。"], links: [["Apple 隐私", "https://www.apple.com/legal/privacy/", "external"], ["GitHub 隐私声明", "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "本网站", body: ["本网站不使用分析工具、广告像素或第一方 Cookie，由 GitHub Pages 托管。GitHub 可能根据其隐私声明，为安全和运营记录 IP 地址及其他技术访问数据。"], links: [["GitHub 隐私声明", "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "变更", body: ["若 App 的数据使用或相关服务发生重大变化，本政策将更新。更新日期和适用 App 版本显示在上方。"] }
        ]
      }
    },

    support: {
      nb: {
        eyebrow: "Hjelp og kontakt", title: "Brukerstøtte",
        lead: "Få hjelp med GPS, valgfri Game Center-synk, onlinekart, kartbuffer, nedlasting og sletting av OSM-områder eller nullstilling i Tind 100.", dated: true,
        sections: [
          { title: "Kontakt oss privat", kind: "controller", body: ["Bruk e-post for spørsmål som kan inneholde personopplysninger, kontoinformasjon, posisjon, GPS-spor eller sikkerhetsdetaljer. Ikke send passord, Apple-ID-passord eller engangskoder."] },
          { title: "Rapporter en vanlig feil", kind: "issues", body: ["Du kan bruke GitHub Issues for en vanlig, offentlig feilrapport eller et funksjonsønske. Ikke legg inn personopplysninger, nøyaktig posisjon, GPS-spor, skjermbilder med kontoopplysninger eller sikkerhetssårbarheter."] },
          { title: "Ta med dette", bullets: ["Tind 100-versjon og byggnummer", "iPhone-modell og iOS-versjon", "hvilket språk som er valgt i appen og i iOS", "hva du gjorde, hva du forventet og hva som faktisk skjedde", "om problemet gjelder lokal fremdrift, Game Center, GPS, online- eller offlinekart, nedlasting eller sletting av lokale kartpakker"], size: "half" },
          { title: "Ikke ta med dette offentlig", bullets: ["Apple-ID, passord eller bekreftelseskoder", "nøyaktig hjemmeadresse eller GPS-spor", "Game Center-ID eller andre private identifikatorer", "helseopplysninger eller annen sensitiv informasjon", "detaljer som gjør en sikkerhetssårbarhet enkel å misbruke"], size: "half", tone: "warning" },
          { title: "Raske kontroller", bullets: ["GPS: kontroller stedstilgang for Tind 100 i iOS-innstillinger og prøv under åpen himmel.", "Bakgrunnssporing: behold posisjonstilgang og ikke tvangsavslutt appen under aktiv rute.", "Game Center: synk er valgfri og avslått som standard. Slå den på i Profil og fullfør kontobekreftelsen hvis du ønsker skysynk. Kontroller samme Game Center-/iCloud-konto og tilgang til iCloud Drive ved problemer. En kontobytte- eller eldre-data-advarsel betyr at synk er satt på pause; lokal fremdrift beholdes.", "Offlinekart: åpne Profil → Kartlagring → nedlastbare OSM-kartområder, velg og bekreft området du trenger. Hold appen åpen under nedlasting. Kontroller det ferdige kartet uten nett før turen. Kartbufferen inneholder bare nylig viste, kvalifiserte Kartverket-fliser og erstatter ikke et nedlastet område.", "Språk: appskjermer følger valget i Profil; Apple-dialoger, Game Center, deling og enkelte kartetiketter følger iOS-/kildespråk."], links: [["Åpne Personvernvalg", "../privacy-choices/"]] },
          { title: "Ingen nødtjeneste", body: ["Tind 100 overvåkes ikke som en nødtjeneste. I Norge ringer du 112 ved akutt behov for hjelp eller redning og 113 ved akutt medisinsk hjelp. Følg alltid nødetatenes råd."], tone: "warning", links: [["Les sikkerhetsinformasjonen", "../safety/"]] }
        ]
      },
      en: {
        eyebrow: "Help and contact", title: "Support",
        lead: "Get help with GPS, optional Game Center sync, online maps, the map cache, OSM area downloads and deletion, or resetting Tind 100.", dated: true,
        sections: [
          { title: "Contact us privately", kind: "controller", body: ["Use email for questions that may contain personal data, account information, location, GPS tracks or security details. Never send passwords, Apple ID passwords or one-time codes."] },
          { title: "Report a general issue", kind: "issues", body: ["Use GitHub Issues for a general public bug report or feature request. Do not include personal data, precise location, GPS tracks, screenshots containing account details or security vulnerabilities."] },
          { title: "Helpful details", bullets: ["Tind 100 version and build number", "iPhone model and iOS version", "language selected in the app and in iOS", "what you did, what you expected and what happened", "whether the issue concerns local progress, Game Center, GPS, online or offline maps, downloads or deletion of local map packages"], size: "half" },
          { title: "Do not post publicly", bullets: ["Apple ID, passwords or verification codes", "precise home address or GPS tracks", "Game Center ID or other private identifiers", "health or other sensitive information", "details that make a security vulnerability easy to exploit"], size: "half", tone: "warning" },
          { title: "Quick checks", bullets: ["GPS: check Tind 100 location permission in iOS Settings and try outdoors with a clear sky view.", "Background recording: retain location permission and do not force-quit the app during an active route.", "Game Center: sync is optional and off by default. Enable it in Profile and complete account confirmation if you want cloud sync. Check the same Game Center/iCloud accounts and iCloud Drive access if problems occur. An account-change or older-data warning means sync is paused; local progress is kept.", "Offline maps: open Profile → Map storage → downloadable OSM map areas, then select and confirm the area you need. Keep the app open during download. Check the installed map without a connection before your hike. The map cache contains only recently viewed eligible Kartverket tiles and does not replace a downloaded area.", "Language: app screens follow the Profile selection; Apple dialogs, Game Center, sharing and some map labels follow the iOS or source language."], links: [["Open Privacy choices", "../privacy-choices/"]] },
          { title: "Not an emergency service", body: ["Tind 100 is not monitored as an emergency service. In Norway call 112 for urgent emergency or rescue assistance and 113 for urgent medical help. Always follow the emergency services’ advice."], tone: "warning", links: [["Read the safety notice", "../safety/"]] }
        ]
      },
      fr: {
        eyebrow: "Aide et contact", title: "Assistance",
        lead: "Obtenez de l’aide pour le GPS, la synchronisation Game Center facultative, les cartes en ligne, le cache, le téléchargement et la suppression de zones OSM ou la réinitialisation de Tind 100.", dated: true,
        sections: [
          { title: "Nous contacter en privé", kind: "controller", body: ["Utilisez l’e-mail pour toute question susceptible de contenir des données personnelles, des informations de compte, des données de localisation, des traces GPS ou des détails de sécurité. N’envoyez jamais de mots de passe, y compris celui de votre identifiant Apple, ni de codes à usage unique."] },
          { title: "Signaler un problème général", kind: "issues", body: ["Utilisez GitHub Issues pour signaler publiquement un bug général ou demander une fonctionnalité. N’incluez pas de données personnelles, de localisation précise, de traces GPS, de captures d’écran contenant des informations de compte ni de vulnérabilités de sécurité."] },
          { title: "Informations utiles", bullets: ["version et numéro de compilation de Tind 100", "modèle d’iPhone et version d’iOS", "langue sélectionnée dans l’app et dans iOS", "ce que vous avez fait, ce que vous attendiez et ce qui s’est produit", "si le problème concerne la progression locale, Game Center, le GPS, les cartes en ligne ou hors ligne, les téléchargements ou la suppression de paquets cartographiques locaux"], size: "half" },
          { title: "Ne publiez pas ces informations", bullets: ["identifiant Apple, mots de passe ou codes de vérification", "adresse personnelle précise ou traces GPS", "identifiant Game Center ou autres identifiants privés", "informations de santé ou autres informations sensibles", "détails facilitant l’exploitation d’une vulnérabilité de sécurité"], size: "half", tone: "warning" },
          { title: "Vérifications rapides", bullets: ["GPS : vérifiez l’autorisation de localisation de Tind 100 dans les réglages iOS et réessayez à l’extérieur avec une vue dégagée du ciel.", "Enregistrement en arrière-plan : conservez l’autorisation de localisation et ne forcez pas la fermeture de l’app pendant un itinéraire actif.", "Game Center : la synchronisation est facultative et désactivée par défaut. Activez-la dans Profil et confirmez les comptes si vous souhaitez l’utiliser. En cas de problème, vérifiez les mêmes comptes Game Center/iCloud et l’accès à iCloud Drive. Un avertissement de changement de compte ou d’anciennes données signifie que la synchronisation est en pause ; la progression locale est conservée.", "Cartes hors ligne : ouvrez Profil → Stockage des cartes → zones OSM téléchargeables, puis sélectionnez et confirmez la zone souhaitée. Gardez l’app ouverte pendant le téléchargement. Vérifiez la carte installée sans connexion avant la randonnée. Le cache ne contient que des tuiles Kartverket admissibles récemment consultées et ne remplace pas une zone téléchargée.", "Langue : les écrans de l’app suivent le choix effectué dans Profil ; les dialogues Apple, Game Center, le partage et certaines étiquettes de carte suivent la langue d’iOS ou de la source."], links: [["Ouvrir les choix en matière de confidentialité", "../privacy-choices/"]] },
          { title: "Il ne s’agit pas d’un service d’urgence", body: ["Tind 100 ne fait l’objet d’aucune surveillance en tant que service d’urgence. En Norvège, appelez le 112 pour une urgence ou une opération de secours. Appelez le 113 pour une urgence médicale. Suivez toujours les conseils des services d’urgence."], tone: "warning", links: [["Lire les informations de sécurité", "../safety/"]] }
        ]
      },
      es: {
        eyebrow: "Ayuda y contacto", title: "Soporte",
        lead: "Obtén ayuda con GPS, sincronización opcional de Game Center, mapas en línea, caché, descarga y eliminación de zonas OSM o restablecimiento de Tind 100.", dated: true,
        sections: [
          { title: "Contacto privado", kind: "controller", body: ["Usa el correo para consultas que puedan contener datos personales, información de cuenta, ubicación, rutas GPS o detalles de seguridad. Nunca envíes contraseñas, la contraseña del Apple ID ni códigos de un solo uso."] },
          { title: "Informar de un error normal", kind: "issues", body: ["Usa GitHub Issues para un error público normal o una sugerencia. No incluyas datos personales, ubicación precisa, rutas GPS, capturas con datos de cuenta ni vulnerabilidades."] },
          { title: "Datos útiles", bullets: ["versión y compilación de Tind 100", "modelo de iPhone y versión de iOS", "idioma elegido en la app y en iOS", "qué hiciste, qué esperabas y qué ocurrió", "si afecta al progreso local, Game Center, GPS, mapas en línea o sin conexión, descargas o eliminación de paquetes locales"], size: "half" },
          { title: "No publiques", bullets: ["Apple ID, contraseñas o códigos", "domicilio preciso o rutas GPS", "ID de Game Center u otros identificadores privados", "información de salud u otra información sensible", "detalles que faciliten explotar una vulnerabilidad"], size: "half", tone: "warning" },
          { title: "Comprobaciones rápidas", bullets: ["GPS: revisa el permiso de ubicación de Tind 100 en Ajustes de iOS y prueba al aire libre.", "Segundo plano: mantén el permiso y no fuerces el cierre durante una ruta activa.", "Game Center: la sincronización es opcional y está desactivada por defecto. Actívala en Perfil y confirma las cuentas si deseas usarla. Si hay problemas, comprueba las mismas cuentas de Game Center/iCloud y el acceso a iCloud Drive. Un aviso de cambio de cuenta o datos antiguos indica que la sincronización está pausada; el progreso local se conserva.", "Mapas sin conexión: abre Perfil → Almacenamiento de mapas → zonas OSM descargables, selecciona y confirma la zona que necesitas. Mantén la app abierta durante la descarga. Comprueba el mapa instalado sin conexión antes de salir. La caché solo contiene teselas permitidas de Kartverket vistas recientemente y no sustituye una zona descargada.", "Idioma: las pantallas siguen el idioma de Perfil; los diálogos de Apple, Game Center, compartir y algunas etiquetas de mapa siguen iOS o la fuente."], links: [["Abrir Opciones de privacidad", "../privacy-choices/"]] },
          { title: "No es un servicio de emergencias", body: ["Tind 100 no se supervisa como servicio de emergencias. En Noruega llama al 112 para emergencia o rescate y al 113 para ayuda médica urgente. Sigue siempre las indicaciones oficiales."], tone: "warning", links: [["Leer la información de seguridad", "../safety/"]] }
        ]
      },
      de: {
        eyebrow: "Hilfe und Kontakt", title: "Support",
        lead: "Hilfe zu GPS, optionaler Game-Center-Synchronisierung, Onlinekarten, Kartencache, Download und Löschen von OSM-Gebieten oder Zurücksetzen von Tind 100.", dated: true,
        sections: [
          { title: "Privater Kontakt", kind: "controller", body: ["Nutze E-Mail für Fragen, die personenbezogene Daten, Kontoinformationen, Standort, GPS-Tracks oder Sicherheitsdetails enthalten können. Sende niemals Passwörter, das Apple-ID-Passwort oder Einmalcodes."] },
          { title: "Gewöhnlichen Fehler melden", kind: "issues", body: ["Nutze GitHub Issues für einen gewöhnlichen öffentlichen Fehlerbericht oder Funktionswunsch. Veröffentliche keine personenbezogenen Daten, genauen Standorte, GPS-Tracks, Screenshots mit Kontodaten oder Sicherheitslücken."] },
          { title: "Hilfreiche Angaben", bullets: ["Tind-100-Version und Build", "iPhone-Modell und iOS-Version", "in App und iOS gewählte Sprache", "Handlung, erwartetes und tatsächliches Ergebnis", "ob lokaler Fortschritt, Game Center, GPS, Online- oder Offlinekarten, Downloads oder das Löschen lokaler Kartenpakete betroffen sind"], size: "half" },
          { title: "Nicht öffentlich posten", bullets: ["Apple-ID, Passwörter oder Bestätigungscodes", "genaue Privatadresse oder GPS-Tracks", "Game-Center-ID oder andere private Kennungen", "Gesundheitsdaten oder andere sensible Informationen", "Details, die eine Sicherheitslücke leicht ausnutzbar machen"], size: "half", tone: "warning" },
          { title: "Schnelle Prüfungen", bullets: ["GPS: Standortberechtigung für Tind 100 in iOS prüfen und im Freien testen.", "Hintergrund: Berechtigung behalten und die App während einer aktiven Route nicht zwangsbeenden.", "Game Center: Die Synchronisierung ist optional und standardmäßig aus. Aktiviere sie im Profil und bestätige die Konten, wenn du sie nutzen möchtest. Prüfe bei Problemen dieselben Game-Center-/iCloud-Konten und den iCloud-Drive-Zugang. Eine Warnung zu Kontowechsel oder älteren Daten bedeutet, dass die Synchronisierung pausiert; lokaler Fortschritt bleibt erhalten.", "Offlinekarten: Öffne Profil → Kartenspeicher → herunterladbare OSM-Gebiete und wähle und bestätige das benötigte Gebiet. Lass die App beim Download geöffnet. Prüfe die installierte Karte vor der Tour ohne Verbindung. Der Cache enthält nur kürzlich betrachtete zulässige Kartverket-Kacheln und ersetzt kein heruntergeladenes Gebiet.", "Sprache: App-Ansichten folgen der Profilwahl; Apple-Dialoge, Game Center, Teilen und einige Kartenbeschriftungen folgen iOS oder der Quelle."], links: [["Datenschutzoptionen öffnen", "../privacy-choices/"]] },
          { title: "Kein Notfalldienst", body: ["Tind 100 wird nicht als Notfalldienst überwacht. In Norwegen gilt 112 für dringende Notfall- oder Rettungshilfe und 113 für dringende medizinische Hilfe. Befolge stets behördliche Anweisungen."], tone: "warning", links: [["Sicherheitshinweise lesen", "../safety/"]] }
        ]
      },
      "zh-Hans": {
        eyebrow: "帮助与联系", title: "支持",
        lead: "获取有关 GPS、可选 Game Center 同步、在线地图、地图缓存、OSM 区域下载与删除，以及 Tind 100 重置的帮助。", dated: true,
        sections: [
          { title: "私人联系", kind: "controller", body: ["可能包含个人数据、帐户信息、位置、GPS 轨迹或安全详情的问题，请使用电子邮件。切勿发送密码、Apple ID 密码或一次性验证码。"] },
          { title: "报告一般问题", kind: "issues", body: ["一般公开错误报告或功能建议可使用 GitHub Issues。请勿包含个人数据、精确位置、GPS 轨迹、含帐户信息的截图或安全漏洞。"] },
          { title: "有用信息", bullets: ["Tind 100 版本和构建号", "iPhone 型号和 iOS 版本", "App 与 iOS 中选择的语言", "你的操作、预期结果和实际结果", "问题是否涉及本机进度、Game Center、GPS、在线或离线地图、下载或删除本地地图包"], size: "half" },
          { title: "请勿公开发布", bullets: ["Apple ID、密码或验证码", "精确住址或 GPS 轨迹", "Game Center ID 或其他私人标识符", "健康或其他敏感信息", "可使安全漏洞易于利用的详情"], size: "half", tone: "warning" },
          { title: "快速检查", bullets: ["GPS：在 iOS 设置中检查 Tind 100 的位置权限，并在室外开阔处测试。", "后台记录：保留位置权限，活动路线期间不要强制退出 App。", "Game Center：同步为可选功能，默认关闭。如需云同步，请在“个人资料”中开启并完成账户确认。遇到问题时，请检查是否使用相同的 Game Center/iCloud 账户以及能否访问 iCloud 云盘。账户变更或旧数据警告表示同步已暂停；本地进度会保留。", "离线地图：打开“个人资料 → 地图存储 → 可下载 OSM 区域”，选择并确认所需区域。下载时保持 App 打开。出发前请断网检查已安装地图。地图缓存只含最近查看过且符合条件的 Kartverket 瓦片，不能替代已下载区域。", "语言：App 页面遵循“个人资料”中的选择；Apple 对话框、Game Center、分享及部分地图标签遵循 iOS 或来源语言。"], links: [["打开隐私选项", "../privacy-choices/"]] },
          { title: "并非紧急服务", body: ["Tind 100 并非有人值守的紧急服务。在挪威，紧急救援请拨 112，紧急医疗救助请拨 113。请始终遵循紧急服务机构的指示。"], tone: "warning", links: [["阅读安全说明", "../safety/"]] }
        ]
      }
    },

    "privacy-choices": {
      nb: { eyebrow: "Du bestemmer", title: "Personvernvalg", lead: "Slik styrer du posisjon, fremdrift, valgfri Game Center-synk, kartbuffer, OSM-områder og deling.", dated: true, sections: [
        { title: "Slå posisjon av eller på", number: "1", body: ["Åpne iOS-innstillinger for Tind 100, eller Innstillinger → Personvern og sikkerhet → Stedstjenester → Tind 100. Du kan endre eller trekke tilbake tillatelsen når som helst. GPS-innsjekking, ruteregistrering og stedsbaserte funksjoner virker ikke uten nødvendig tilgang."] },
        { title: "Bruk appen uten Game Center", number: "2", body: ["Du kan trekke tilbake posisjonstilgang, slå Game Center-synk av eller på i Profil, tømme kartbufferen, slette nedlastede OSM-områder og nullstille lokal fremdrift. Avslått synk stopper nye synkforsøk uten å slette lokal fremdrift eller eksisterende skyfiler."] },
        { title: "Nullstill aktiv fremdrift", number: "3", body: ["I Profil velger du «Nullstill nåværende fremdrift» og bekrefter. Lokal topp-, rute-, utfordrings- og pilotfremdrift nullstilles når lokal lagring lykkes. Nullstillingen kan oppdatere spillerens aktive v4-skyfremdrift gjennom senere gjennomført synk med gyldig kontobinding. Avslått eller blokkert synk starter ingen nye skyoppdateringer; en forespørsel som allerede er sendt, kan fullføres. Eldre v1-/v3-filer slettes eller overskrives ikke og blokkerer synk. Nullstilling sletter ikke Apple-kontoen, kontobindingen i Nøkkelring, enhetsbackup eller kartfilene."] },
        { title: "Slett lokale offlinekart", number: "4", body: ["Åpne Profil → Kartlagring for å tømme kartbufferen. Åpne listen over nedlastbare OSM-kartområder for å slette ett lagret område og bekrefte slettingen. Dette sletter ikke turhistorikken. Området må lastes ned på nytt mens det fortsatt er tilgjengelig for å brukes uten nett. Sletting av appen fjerner også de lokale kartfilene."] },
        { title: "Slett appen og sikkerhetskopier", number: "5", body: ["Sletting av appen fjerner appens aktive lokale data fra iPhonen. Kopier kan fortsatt finnes i iOS-/iCloud-enhetsbackup til du administrerer eller utløper sikkerhetskopien i Apples innstillinger. Game Center- og iCloud-data styres også av Apple."] },
        { title: "Del bare når du vil", number: "6", body: ["Tind 100 starter deling først når du velger det. Kontroller forhåndsvisningen og mottakeren. En delingslenke kan inneholde alias, statistikk, dato og begrensede toppopplysninger. Toppkoordinat og rutespor inngår ikke. Ikke del lenken med personer som ikke skal se innholdet."] },
        { title: "Stopp eller start pilotfremdriften på nytt", number: "7", body: ["Disse pilotkontrollene er bare tilgjengelige i et testmiljø. I Profil → TestFlight-pilot kan du slå av målingen eller starte pilotfremdriften på nytt. Avslåing stopper nye registreringer. Omstart fjerner samtykke, oppgaver og Premium-svar, men beholder den opplyste anonyme rapportkoden og revisjonen for å hindre dobbelttelling; full nullstilling av appen sletter også disse. Ingen pilotrapport sendes uten at du først ser hele JSON-forhåndsvisningen og velger en mottaker. Har du allerede sendt en rapport til utgiveren, kan du be om sletting via e-post og oppgi rapportkoden."] },
        { title: "Be om hjelp eller rettigheter", kind: "controller", body: ["Kontakt utgiveren privat for personvernspørsmål. Utgiveren kan forklare appens behandling, men har ikke direkte administrativ tilgang til Apple-kontoen, Game Center, iCloud eller enhetsbackup."] }
      ]},
      en: { eyebrow: "You are in control", title: "Privacy choices", lead: "Manage location, progress, optional Game Center sync, the map cache, OSM areas and sharing.", dated: true, sections: [
        { title: "Turn location on or off", number: "1", body: ["Open iOS Settings for Tind 100, or Settings → Privacy & Security → Location Services → Tind 100. Change or withdraw permission at any time. GPS check-in, route recording and location-based features need the relevant access."] },
        { title: "Use the app without Game Center", number: "2", body: ["You can withdraw location access, turn Game Center sync off or on in Profile, clear the map cache, delete downloaded OSM areas and reset local progress. Turning sync off stops new sync attempts without deleting local progress or existing cloud files."] },
        { title: "Reset active progress", number: "3", body: ["In Profile, choose Reset current progress and confirm. Local peak, route, challenge and pilot progress is reset when local saving succeeds. The reset can update the player's active v4 cloud progress through a later completed sync with a valid account binding. Disabled or blocked sync starts no new cloud updates; a request already sent may complete. Older v1/v3 files are not deleted or overwritten and block sync. Reset does not delete your Apple account, the Keychain account binding, device backups or map files."] },
        { title: "Delete local offline maps", number: "4", body: ["Open Profile → Map storage to clear the map cache. Open the downloadable OSM map areas list to delete an installed area and confirm its removal. This does not delete your hike history. To use the area offline again, download it again while it remains available. Deleting the app also removes its local map files."] },
        { title: "Delete the app and manage backups", number: "5", body: ["Deleting the app removes its active local data from the iPhone. Copies may remain in an iOS/iCloud device backup until you manage or expire that backup in Apple’s settings. Game Center and iCloud data are also controlled by Apple."] },
        { title: "Share only when you choose", number: "6", body: ["Tind 100 starts sharing only after your action. Check the preview and recipient. A shared link may contain an alias, statistics, date and limited peak details. It does not contain the summit coordinate or route track. Do not share it with anyone who should not see the content."] },
        { title: "Stop or restart pilot progress", number: "7", body: ["These pilot controls are available only in a test environment. In Profile → TestFlight pilot, turn measurement off or restart pilot progress. Turning it off stops new records. Restarting removes consent, tasks and the Premium answer but retains the disclosed anonymous report code and revision to prevent duplicate counting; a full app reset also deletes those. No pilot report is sent until you review the full JSON preview and choose a recipient. If you have already sent a report to the publisher, request deletion by email and include the report code."] },
        { title: "Ask for help or exercise rights", kind: "controller", body: ["Contact the publisher privately for privacy questions. The publisher can explain the app’s processing but has no direct administrative access to your Apple account, Game Center, iCloud or device backup."] }
      ]},
      fr: { eyebrow: "Vous gardez le contrôle", title: "Choix de confidentialité", lead: "Gérez la position, la progression, la synchronisation Game Center facultative, le cache, les zones OSM et le partage.", dated: true, sections: [
        { title: "Activer ou désactiver la localisation", number: "1", body: ["Ouvrez les réglages iOS de Tind 100, ou Réglages → Confidentialité et sécurité → Service de localisation → Tind 100. Modifiez ou retirez l’autorisation à tout moment. La vérification GPS, l’enregistrement d’itinéraires et les fonctionnalités basées sur la localisation nécessitent l’accès correspondant."] },
        { title: "Utiliser l’app sans Game Center", number: "2", body: ["Vous pouvez retirer l’accès à la position, activer ou désactiver la synchronisation Game Center dans Profil, vider le cache, supprimer les zones OSM téléchargées et réinitialiser la progression locale. La désactivation arrête les nouvelles tentatives sans supprimer la progression locale ni les fichiers cloud existants."] },
        { title: "Réinitialiser la progression active", number: "3", body: ["Dans Profil, choisissez Réinitialiser la progression actuelle et confirmez. La progression locale des sommets, itinéraires, défis et du pilote est réinitialisée si l’enregistrement local réussit. Cette réinitialisation peut mettre à jour la progression cloud v4 active du joueur lors d’une synchronisation ultérieure achevée avec une association de comptes valide. Une synchronisation désactivée ou bloquée ne lance aucune nouvelle mise à jour cloud ; une requête déjà envoyée peut aboutir. Les anciens fichiers v1/v3 ne sont ni supprimés ni écrasés et bloquent la synchronisation. Le compte Apple, l’association dans le Trousseau, les sauvegardes de l’appareil et les cartes ne sont pas supprimés."] },
        { title: "Supprimer les cartes hors ligne locales", number: "4", body: ["Ouvrez Profil → Stockage des cartes pour vider le cache. Dans la liste des zones OSM téléchargeables, supprimez une zone installée et confirmez. Cela ne supprime pas votre historique de sorties. Pour réutiliser cette zone hors ligne, téléchargez-la à nouveau tant qu’elle reste disponible. Supprimer l’app retire aussi ses fichiers cartographiques locaux."] },
        { title: "Supprimer l’app et gérer les sauvegardes", number: "5", body: ["La suppression de l’app retire ses données locales actives de l’iPhone. Des copies peuvent rester dans une sauvegarde iOS/iCloud de l’appareil jusqu’à ce que vous gériez cette sauvegarde dans les réglages Apple ou qu’elle expire. Les données de Game Center et d’iCloud sont également gérées par Apple."] },
        { title: "Partager uniquement lorsque vous le choisissez", number: "6", body: ["Tind 100 ne commence à partager qu’à la suite de votre action. Vérifiez l’aperçu et le destinataire. Un lien partagé peut contenir un alias, des statistiques, une date et des informations limitées sur un sommet. Il ne contient ni les coordonnées du sommet ni la trace de l’itinéraire. Ne le partagez avec personne qui ne devrait pas voir son contenu."] },
        { title: "Arrêter ou redémarrer la progression du pilote", number: "7", body: ["Ces commandes du pilote sont disponibles uniquement dans un environnement de test. Dans Profil → Pilote TestFlight, désactivez la mesure ou redémarrez la progression du pilote. La désactivation arrête les nouveaux enregistrements. Le redémarrage supprime le consentement, les tâches et la réponse Premium, mais conserve le code de rapport anonyme communiqué et la révision afin d’éviter les doubles comptages ; une réinitialisation complète de l’app supprime également ces éléments. Aucun rapport pilote n’est envoyé tant que vous n’avez pas examiné l’aperçu JSON complet et choisi un destinataire. Si vous avez déjà envoyé un rapport à l’éditeur, demandez sa suppression par e-mail en indiquant le code du rapport."] },
        { title: "Demander de l’aide ou exercer vos droits", kind: "controller", body: ["Contactez l’éditeur en privé pour toute question de confidentialité. L’éditeur peut expliquer les traitements effectués par l’app, mais ne dispose d’aucun accès administratif direct à votre compte Apple, à Game Center, à iCloud ou à la sauvegarde de votre appareil."] }
      ]},
      es: { eyebrow: "Tú decides", title: "Opciones de privacidad", lead: "Gestiona ubicación, progreso, sincronización opcional de Game Center, caché, zonas OSM y uso compartido.", dated: true, sections: [
        { title: "Activar o desactivar la ubicación", number: "1", body: ["Abre Ajustes de iOS para Tind 100 o Ajustes → Privacidad y seguridad → Localización → Tind 100. Cambia o retira el permiso en cualquier momento. El registro GPS, las rutas y las funciones por ubicación requieren el acceso correspondiente."] },
        { title: "Usar la app sin Game Center", number: "2", body: ["Puedes retirar el acceso a la ubicación, activar o desactivar la sincronización de Game Center en Perfil, vaciar la caché, borrar zonas OSM descargadas y restablecer el progreso local. Desactivar la sincronización detiene nuevos intentos sin eliminar progreso local ni archivos existentes en la nube."] },
        { title: "Restablecer el progreso activo", number: "3", body: ["En Perfil, elige Restablecer el progreso actual y confirma. El progreso local de cumbres, rutas, desafíos y del piloto se restablece si el guardado local termina correctamente. El restablecimiento puede actualizar el progreso activo v4 del jugador en la nube mediante una sincronización posterior completada con una vinculación de cuentas válida. La sincronización desactivada o bloqueada no inicia nuevas actualizaciones; una solicitud ya enviada puede completarse. Los archivos antiguos v1/v3 no se eliminan ni sobrescriben y bloquean la sincronización. No se borran la cuenta Apple, la vinculación en el Llavero, las copias del dispositivo ni los mapas."] },
        { title: "Eliminar mapas locales sin conexión", number: "4", body: ["Abre Perfil → Almacenamiento de mapas para vaciar la caché. Abre la lista de zonas OSM descargables, elimina una zona instalada y confirma. No se borra el historial de excursiones. Para volver a usarla sin conexión, descárgala otra vez mientras siga disponible. Eliminar la app también borra sus archivos de mapa locales."] },
        { title: "Eliminar la app y gestionar copias", number: "5", body: ["Eliminar la app borra sus datos locales activos del iPhone. Puede haber copias en una copia iOS/iCloud hasta gestionarla o dejarla caducar en Apple. Apple también controla Game Center e iCloud."] },
        { title: "Compartir solo cuando quieras", number: "6", body: ["Tind 100 solo inicia el uso compartido tras tu acción. Revisa la vista previa y el destinatario. El enlace puede contener alias, estadísticas, fecha y datos limitados de la cumbre. No contiene la coordenada de la cumbre ni el recorrido. No lo compartas con nadie que no deba ver el contenido."] },
        { title: "Detener o reiniciar el progreso del piloto", number: "7", body: ["Estos controles del piloto solo están disponibles en un entorno de prueba. En Perfil → Piloto de TestFlight, desactiva la medición o reinicia el progreso. Desactivarla detiene nuevos registros. El reinicio elimina el consentimiento, las tareas y la respuesta Premium, pero conserva el código anónimo comunicado y la revisión para evitar duplicados; el restablecimiento completo de la app también los elimina. Ningún informe se envía hasta que revisas la vista previa JSON completa y eliges destinatario. Si ya enviaste un informe al editor, solicita su eliminación por correo e incluye el código."] },
        { title: "Pedir ayuda o ejercer derechos", kind: "controller", body: ["Contacta en privado con el editor para cuestiones de privacidad. El editor puede explicar el tratamiento realizado por la app, pero no tiene acceso administrativo directo a la cuenta Apple, Game Center, iCloud ni las copias del dispositivo."] }
      ]},
      de: { eyebrow: "Du entscheidest", title: "Datenschutzoptionen", lead: "Verwalte Standort, Fortschritt, optionale Game-Center-Synchronisierung, Kartencache, OSM-Gebiete und Teilen.", dated: true, sections: [
        { title: "Standort ein- oder ausschalten", number: "1", body: ["Öffne die iOS-Einstellungen für Tind 100 oder Einstellungen → Datenschutz & Sicherheit → Ortungsdienste → Tind 100. Die Berechtigung kann jederzeit geändert oder entzogen werden. GPS-Check-in, Routenaufzeichnung und Standortfunktionen benötigen den entsprechenden Zugriff."] },
        { title: "App ohne Game Center verwenden", number: "2", body: ["Du kannst Standortzugriff entziehen, die Game-Center-Synchronisierung im Profil ein- oder ausschalten, den Kartencache leeren, heruntergeladene OSM-Gebiete löschen und lokalen Fortschritt zurücksetzen. Ausschalten stoppt neue Synchronisierungsversuche, ohne lokalen Fortschritt oder bestehende Cloud-Dateien zu löschen."] },
        { title: "Aktiven Fortschritt zurücksetzen", number: "3", body: ["Wähle im Profil Aktuellen Fortschritt zurücksetzen und bestätige. Lokaler Gipfel-, Routen-, Aufgaben- und Pilotfortschritt wird bei erfolgreicher lokaler Speicherung zurückgesetzt. Die Rücksetzung kann den aktiven v4-Cloud-Fortschritt des Spielers durch eine spätere abgeschlossene Synchronisierung mit gültiger Kontoverknüpfung aktualisieren. Ausgeschaltete oder blockierte Synchronisierung startet keine neuen Cloud-Aktualisierungen; eine bereits gesendete Anfrage kann abgeschlossen werden. Ältere v1-/v3-Dateien werden weder gelöscht noch überschrieben und blockieren die Synchronisierung. Apple-Konto, Schlüsselbund-Verknüpfung, Gerätesicherungen und Karten bleiben erhalten."] },
        { title: "Lokale Offlinekarten löschen", number: "4", body: ["Öffne Profil → Kartenspeicher, um den Kartencache zu leeren. Öffne die Liste der herunterladbaren OSM-Gebiete, lösche ein installiertes Gebiet und bestätige. Dein Tourenverlauf bleibt erhalten. Für erneute Offline-Nutzung musst du das Gebiet erneut herunterladen, solange es verfügbar ist. Beim Löschen der App werden auch ihre lokalen Kartendateien entfernt."] },
        { title: "App löschen und Sicherungen verwalten", number: "5", body: ["Beim Löschen der App werden aktive lokale Daten vom iPhone entfernt. Kopien können in einer iOS-/iCloud-Gerätesicherung bleiben, bis diese bei Apple verwaltet oder abläuft. Game Center und iCloud werden ebenfalls von Apple gesteuert."] },
        { title: "Nur bewusst teilen", number: "6", body: ["Tind 100 beginnt das Teilen erst nach deiner Aktion. Prüfe Vorschau und Empfänger. Ein Link kann Alias, Statistiken, Datum und begrenzte Gipfeldaten enthalten. Gipfelkoordinate und Routentrack sind nicht enthalten. Teile ihn nicht mit Personen, die den Inhalt nicht sehen sollen."] },
        { title: "Pilotmessung stoppen oder Fortschritt neu starten", number: "7", body: ["Diese Pilotfunktionen sind nur in einer Testumgebung verfügbar. Unter Profil → TestFlight-Pilot kannst du die Messung ausschalten oder den Pilotfortschritt neu starten. Ausschalten stoppt neue Einträge. Beim Neustart werden Einwilligung, Aufgaben und Premium-Antwort entfernt, der offengelegte anonyme Berichtscode und die Revision zur Vermeidung von Doppelzählungen jedoch behalten; die vollständige App-Zurücksetzung löscht auch diese. Ein Pilotbericht wird erst gesendet, nachdem du die vollständige JSON-Vorschau geprüft und einen Empfänger gewählt hast. Für einen bereits empfangenen Bericht kannst du per E-Mail unter Angabe des Berichtscodes die Löschung verlangen."] },
        { title: "Hilfe oder Rechte anfragen", kind: "controller", body: ["Kontaktiere den Herausgeber privat bei Datenschutzfragen. Der Herausgeber kann die Verarbeitung durch die App erläutern, hat aber keinen direkten administrativen Zugriff auf Apple-Konto, Game Center, iCloud oder Gerätesicherungen."] }
      ]},
      "zh-Hans": { eyebrow: "由你掌控", title: "隐私选项", lead: "管理位置、进度、可选 Game Center 同步、地图缓存、OSM 区域和分享。", dated: true, sections: [
        { title: "开启或关闭位置", number: "1", body: ["打开 Tind 100 的 iOS 设置，或“设置 → 隐私与安全性 → 定位服务 → Tind 100”。可随时更改或撤回权限。GPS 签到、路线记录和位置功能需要相应权限。"] },
        { title: "不使用 Game Center", number: "2", body: ["你可以撤回位置权限，在“个人资料”中开启或关闭 Game Center 同步，清空地图缓存，删除已下载的 OSM 区域，并重置本地进度。关闭同步会停止新的同步尝试，但不会删除本地进度或已有云文件。"] },
        { title: "重置活动进度", number: "3", body: ["在“个人资料”中选择“重置当前进度”并确认。本地保存成功后，山峰、路线、挑战和测试进度会重置。此重置可在之后通过有效账户绑定完成同步时更新玩家的活动 v4 云进度。同步关闭或受阻时不会启动新的云更新，但已经发送的请求仍可能完成。旧版 v1/v3 文件不会被删除或覆盖，并会阻止同步。此操作不会删除 Apple 账户、钥匙串中的账户绑定、设备备份或地图文件。"] },
        { title: "删除本机离线地图", number: "4", body: ["打开“个人资料 → 地图存储”可清空地图缓存。进入可下载 OSM 区域列表，删除已安装区域并确认。此操作不会删除行程历史。如需再次离线使用，须在该区域仍可下载时重新下载。删除 App 也会移除其本地地图文件。"] },
        { title: "删除 App 并管理备份", number: "5", body: ["删除 App 会从 iPhone 移除其活动本机数据。副本可能留在 iOS/iCloud 设备备份中，直至你在 Apple 设置中管理或备份到期。Game Center 和 iCloud 数据也由 Apple 控制。"] },
        { title: "仅在你选择时分享", number: "6", body: ["Tind 100 只会在你主动操作后开始分享。请检查预览和接收者。链接可能包含昵称、统计、日期和有限的山峰资料，不包含山峰坐标或路线轨迹。请勿与不应看到这些内容的人分享。"] },
        { title: "停止测量或重新开始测试进度", number: "7", body: ["这些测试控制仅在测试环境中可用。在“个人资料 → TestFlight 测试计划”中，可关闭测量或重新开始测试进度。关闭后不再记录新内容。重新开始会清除同意状态、任务和高级版回答，但会保留已告知的匿名报告代码和修订号以免重复计数；完整重置 App 也会删除这些内容。只有在你查看完整 JSON 预览并选择接收者后，报告才会发送。若已将报告发送给发布者，可通过电子邮件提供报告代码并请求删除。"] },
        { title: "寻求帮助或行使权利", kind: "controller", body: ["隐私问题请私下联系发布者。发布者可以说明 App 的数据处理方式，但无法直接管理你的 Apple 帐户、Game Center、iCloud 或设备备份。"] }
      ]}
    },

    safety: {
      nb: { eyebrow: "Før og under turen", title: "Sikkerhet og ansvar", lead: "Tind 100 inspirerer og registrerer, men kan ikke avgjøre om en tur er riktig eller trygg.", dated: true, sections: [
        { title: "Opplysninger kan inneholde feil", body: ["Navn, høyder, koordinater, rangeringer, adkomst, ruteforslag, distanser, tidsanslag, kart og andre opplysninger kan være feil, unøyaktige, ufullstendige eller utdaterte. «Kvalitetssikret» betyr bare at en avgrenset datakontroll er utført; det er ingen garanti for full nøyaktighet, lovlig adkomst eller sikkerhet."], tone: "warning" },
        { title: "Kontroller alltid", body: ["En oppføring betyr ikke at toppen eller ruten er åpen, lovlig å ferdes på, farbar eller trygg. Sjekk oppdaterte offisielle kart, alternative veivalg, vær, føre, naturfare, stengninger, vernebestemmelser, ferdselsforbud, tillatelser og parkering før og under turen."], links: [["Varsom", "https://www.varsom.no/", "external"], ["Fjellvettreglene", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Teknologi kan svikte", body: ["GPS, onlinekart, kartbuffer og nedlastede OSM-kart kan være unøyaktige, ufullstendige, utdaterte eller utilgjengelige. Bufferen er ikke et komplett offlinekart. Et OSM-område dekker bare sitt oppgitte område og kan mangle stier eller andre data. Visning over kildens zoomnivå 14 forstørrer eksisterende data, uten nye detaljer. Kontroller kartet uten nett før turen og ta med egnet alternativ og nødutstyr. Telefon, batteri, lagring, nett og satellittmottak kan svikte."] },
        { title: "Dine vurderinger", body: ["Tilpass turen etter helse, erfaring, form, utstyr og forhold. Vurder på nytt underveis og snu i tide. Du er ansvarlig for egne vurderinger, rutevalg og handlinger og for å følge gjeldende lover og regler."] },
        { title: "Nødsituasjoner", body: ["I Norge ringer du 112 når du trenger akutt hjelp eller redning. Ring 113 ved akutt medisinsk behov. Følg alltid instruksjoner fra nødetater og myndigheter."], tone: "warning" },
        { title: "Ufravikelige rettigheter", body: ["Denne informasjonen begrenser ikke rettigheter eller ansvar som ikke kan fravikes etter gjeldende lov."] }
      ]},
      en: { eyebrow: "Before and during a hike", title: "Safety and responsibility", lead: "Tind 100 can inspire and record, but it cannot decide whether a hike is suitable or safe.", dated: true, sections: [
        { title: "Information may contain errors", body: ["Names, elevations, coordinates, rankings, access, route suggestions, distances, estimates, maps and other information may be wrong, imprecise, incomplete or out of date. “Quality-assured” only means a limited data check was performed; it does not guarantee full accuracy, legal access or safety."], tone: "warning" },
        { title: "Always verify", body: ["An entry does not mean a peak or route is open, legally accessible, passable or safe. Before and during the hike, check current authoritative maps, alternatives, weather, ground conditions, hazards, closures, protected-area rules, restrictions, permits and parking."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Norwegian Mountain Code", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Technology can fail", body: ["GPS, online maps, the map cache and downloaded OSM maps may be inaccurate, incomplete, outdated or unavailable. The cache is not a complete offline map. An OSM area covers only its stated area and may lack paths or other data. Display above source zoom 14 enlarges existing data without adding detail. Check the map without a connection before your hike and carry a suitable alternative and emergency equipment. The phone, battery, storage, network and satellite reception can fail."] },
        { title: "Your judgement", body: ["Adapt the hike to your health, experience, fitness, equipment and conditions. Reassess as you go and turn back in time. You are responsible for your judgements, route choices and actions and for following applicable laws and rules."] },
        { title: "Emergencies", body: ["In Norway call 112 for urgent emergency or rescue assistance. Call 113 for urgent medical help. Always follow instructions from emergency services and authorities."], tone: "warning" },
        { title: "Non-waivable rights", body: ["This information does not limit any rights or liability that cannot be excluded under applicable law."] }
      ]},
      fr: { eyebrow: "Avant et pendant une randonnée", title: "Sécurité et responsabilité", lead: "Tind 100 peut donner des idées de randonnées et les consigner, mais ne peut pas déterminer si une randonnée est adaptée ou sûre.", dated: true, sections: [
        { title: "Les informations peuvent contenir des erreurs", body: ["Les noms, altitudes, coordonnées, classements, accès, suggestions d’itinéraires, distances, estimations, cartes et autres informations peuvent être incorrects, imprécis, incomplets ou obsolètes. La mention « contrôlé » signifie uniquement qu’une vérification limitée des données a été effectuée ; elle ne garantit ni l’exactitude totale, ni la légalité de l’accès, ni la sécurité."], tone: "warning" },
        { title: "Vérifiez toujours", body: ["Une entrée ne signifie pas qu’un sommet ou un itinéraire est ouvert, légalement accessible, praticable ou sûr. Avant et pendant la randonnée, vérifiez les cartes officielles à jour, les itinéraires alternatifs, la météo, l’état du terrain, les dangers, les fermetures, les règles des espaces protégés, les restrictions, les permis et le stationnement."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Code norvégien de la montagne", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "La technologie peut tomber en panne", body: ["Le GPS, les cartes en ligne, le cache et les cartes OSM téléchargées peuvent être inexacts, incomplets, obsolètes ou indisponibles. Le cache n’est pas une carte hors ligne complète. Une zone OSM couvre uniquement la zone indiquée et peut manquer de sentiers ou d’autres données. Au-delà du zoom source 14, l’affichage agrandit les données existantes sans détails supplémentaires. Vérifiez la carte sans connexion avant la randonnée et emportez une solution de remplacement adaptée et du matériel d’urgence. Téléphone, batterie, stockage, réseau et réception satellite peuvent tomber en panne."] },
        { title: "Votre jugement", body: ["Adaptez la randonnée à votre état de santé, votre expérience, votre condition physique, votre équipement et aux conditions. Réévaluez la situation au fur et à mesure et faites demi-tour à temps. Vous êtes responsable de vos évaluations, de vos choix d’itinéraire et de vos actions, ainsi que du respect des lois et règles applicables."] },
        { title: "Urgences", body: ["En Norvège, appelez le 112 pour une urgence ou une opération de secours. Appelez le 113 pour une urgence médicale. Suivez toujours les instructions des services d’urgence et des autorités."], tone: "warning" },
        { title: "Droits auxquels il ne peut être dérogé", body: ["Ces informations ne limitent aucun droit ni aucune responsabilité auxquels la législation applicable interdit de déroger."] }
      ]},
      es: { eyebrow: "Antes y durante la excursión", title: "Seguridad y responsabilidad", lead: "Tind 100 puede inspirar y registrar, pero no decide si una excursión es adecuada o segura.", dated: true, sections: [
        { title: "La información puede contener errores", body: ["Nombres, altitudes, coordenadas, clasificaciones, accesos, rutas, distancias, estimaciones, mapas y otros datos pueden ser erróneos, imprecisos, incompletos o estar desactualizados. «Sometido a control de calidad» solo indica una comprobación limitada; no garantiza precisión total, acceso legal ni seguridad."], tone: "warning" },
        { title: "Comprueba siempre", body: ["Una entrada no significa que la cumbre o ruta esté abierta, sea legal, transitable o segura. Antes y durante la excursión revisa mapas oficiales, alternativas, tiempo, terreno, peligros naturales, cierres, espacios protegidos, restricciones, permisos y aparcamiento."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Código de Montaña noruego", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "La tecnología puede fallar", body: ["El GPS, los mapas en línea, la caché y los mapas OSM descargados pueden ser inexactos, incompletos, obsoletos o no estar disponibles. La caché no es un mapa sin conexión completo. Una zona OSM solo cubre el área indicada y puede carecer de senderos u otros datos. Por encima del zoom fuente 14 se amplían datos existentes sin añadir detalle. Comprueba el mapa sin conexión antes de salir y lleva una alternativa adecuada y material de emergencia. Pueden fallar el teléfono, batería, almacenamiento, red y recepción por satélite."] },
        { title: "Tu criterio", body: ["Adapta la excursión a tu salud, experiencia, forma, equipo y condiciones. Reevalúa y regresa a tiempo. Eres responsable de tus evaluaciones, ruta, acciones y cumplimiento de las normas."] },
        { title: "Emergencias", body: ["En Noruega llama al 112 para emergencia o rescate y al 113 para ayuda médica urgente. Sigue siempre las instrucciones oficiales."], tone: "warning" },
        { title: "Derechos irrenunciables", body: ["Esta información no limita derechos ni responsabilidad que no puedan excluirse conforme a la ley aplicable."] }
      ]},
      de: { eyebrow: "Vor und während der Tour", title: "Sicherheit und Verantwortung", lead: "Tind 100 kann inspirieren und aufzeichnen, aber nicht entscheiden, ob eine Tour geeignet oder sicher ist.", dated: true, sections: [
        { title: "Informationen können Fehler enthalten", body: ["Namen, Höhen, Koordinaten, Ranglisten, Zugänge, Routenvorschläge, Entfernungen, Angaben, Karten und weitere Informationen können falsch, ungenau, unvollständig oder veraltet sein. „Qualitätsgesichert“ bezeichnet nur eine begrenzte Prüfung und garantiert weder Genauigkeit noch legalen Zugang oder Sicherheit."], tone: "warning" },
        { title: "Immer prüfen", body: ["Ein Eintrag bedeutet nicht, dass Gipfel oder Route geöffnet, legal zugänglich, begehbar oder sicher sind. Prüfe vor und während der Tour offizielle Karten, Alternativen, Wetter, Wegzustand, Naturgefahren, Sperrungen, Schutzgebiete, Einschränkungen, Genehmigungen und Parken."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Norwegischer Bergkodex", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Technik kann ausfallen", body: ["GPS, Onlinekarten, Kartencache und heruntergeladene OSM-Karten können ungenau, unvollständig, veraltet oder nicht verfügbar sein. Der Cache ist keine vollständige Offlinekarte. Ein OSM-Gebiet deckt nur den angegebenen Bereich ab; Wege und andere Daten können fehlen. Über Quellzoom 14 wird nur vorhandener Inhalt ohne neue Details vergrößert. Prüfe die Karte vor der Tour ohne Verbindung und nimm eine geeignete Alternative und Notfallausrüstung mit. Telefon, Akku, Speicher, Netz und Satellitenempfang können ausfallen."] },
        { title: "Deine Einschätzung", body: ["Passe die Tour an Gesundheit, Erfahrung, Kondition, Ausrüstung und Bedingungen an. Bewerte neu und kehre rechtzeitig um. Du bist für deine Einschätzungen, Routenwahl, Handlungen und Regeleinhaltung verantwortlich."] },
        { title: "Notfälle", body: ["In Norwegen gilt 112 für dringende Notfall- oder Rettungshilfe und 113 für dringende medizinische Hilfe. Befolge stets behördliche Anweisungen."], tone: "warning" },
        { title: "Unabdingbare Rechte", body: ["Diese Informationen beschränken keine Rechte oder Haftung, die nach geltendem Recht nicht ausgeschlossen werden können."] }
      ]},
      "zh-Hans": { eyebrow: "出行前及途中", title: "安全与责任", lead: "Tind 100 可用于灵感和记录，但无法判断一次行程是否适合或安全。", dated: true, sections: [
        { title: "信息可能有误", body: ["名称、海拔、坐标、排名、通行信息、路线建议、距离、预计时间、地图及其他信息可能有误、不精确、不完整或已过时。“已通过质量审核”仅表示进行过有限检查，不保证完全准确、合法通行或安全。"], tone: "warning" },
        { title: "始终核实", body: ["收录不代表山峰或路线开放、合法可达、可通行或安全。出行前及途中请核对最新权威地图、备选路线、天气、地面状况、自然灾害、封闭、保护区规定、限制、许可和停车。"], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["挪威山区安全守则", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "技术可能失效", body: ["GPS、在线地图、地图缓存和已下载的 OSM 地图可能不准确、不完整、过时或不可用。缓存不是完整离线地图。OSM 区域只覆盖所标示范围，可能缺少步道或其他数据。超过源缩放级别 14 时，仅放大已有内容，不增加细节。出发前请断网检查地图，并携带合适的替代工具和应急装备。手机、电池、存储、网络或卫星接收均可能失效。"] },
        { title: "你的判断", body: ["请根据健康、经验、体能、装备和条件安排行程。途中持续评估并及时折返。你应对自己的判断、路线选择、行为以及遵守法律法规负责。"] },
        { title: "紧急情况", body: ["在挪威，紧急救援请拨 112，紧急医疗救助请拨 113。请始终遵循紧急服务机构和主管部门的指示。"], tone: "warning" },
        { title: "不可放弃的权利", body: ["本说明不限制适用法律规定不得排除的任何权利或责任。"] }
      ]}
    },

    "data-sources": {
      nb: {
        "eyebrow": "Åpenhet",
        "title": "Datakilder og kreditering",
        "lead": "Den aktive katalogen i Tind 100 versjon 1.18.0 (bygg 45) er en kilde- og rettighetsdokumentert sammenstilling av 1 500 poster fra Kartverkets åpne data. Dokumentasjonen er ikke en juridisk garanti.",
        "dated": true,
        "sections": [
          {
            "title": "Aktiv katalog i bygg 45",
            "body": [
              "Katalogen inneholder 1 500 unike poster: nøyaktig 100 i hvert av Norges 15 fylker. Autoriserte navn, alternative skrivemåter, objekttype, stedsnummer og representasjonspunkt kommer fra SSR. Kommune- og fylkestilhørighet er kontrollert med Kommuneinfo.",
              "Modellhøyder og representative toppunkt for de 653 nye postene i bygg 45 er utledet fra Kartverkets NHM/DTM via WCS: 651 fra uttrekk med 10 m rutenett og to fra særskilt dokumenterte uttrekk med 1 m rutenett. Rutenettstørrelsen er ikke en garanti for nøyaktigheten. De 847 videreførte postene er ikke kontrollert på nytt gjennom disse uttrekkene. Hver post oppgir datakilder. Tind 100 har valgt, beregnet og avrundet verdiene; dette er ikke feltmålinger eller ruteanbefalinger."
            ],
            "links": [
              [
                "SSR / Stedsnavn",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "Lisens, kreditering og bearbeiding",
            "body": [
              "Offisielle stedsnavn og identifikatorer kommer fra SSR © Kartverket under CC BY 4.0, og administrativ tilordning kontrolleres med Kommuneinfo © Kartverket under CC BY 4.0. Høyder og representative toppkoordinater er utledet fra NHM/DTM-terrengdata © Kartverket; CC BY 4.0 gjelder der de lenkede kildemetadataene angir dette, og utgiveren må bevare tjenestespesifikk rettighetsdokumentasjon for detaljerte data. Tind 100 har valgt, kombinert, beregnet, avrundet og rangert dataene. Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti.",
              "CC BY 4.0 tillater gjenbruk på lisensens vilkår. Katalogdata må derfor videreføres med påkrevd kreditering, lisenshenvisning og opplysning om bearbeiding. Denne kilde- og lisensvurderingen er ikke juridisk rådgivning eller en garanti for ethvert tenkelig brukstilfelle."
            ],
            "links": [
              [
                "Åpne data og lisens",
                "../open-data/"
              ],
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Hva katalogen ikke inneholder",
            "body": [
              "Den aktive katalogen inneholder ingen arvede turbeskrivelser eller tekster om rute, adkomst, parkering eller sikkerhet, ingen prominensverdier og ingen tredjeparts katalogfelt fra kommersielle eller fellesskapsbaserte turtjenester.",
              "Katalogrekkefølgen er Tind 100s redaksjonelle utvalg og er ikke en ensartet rangering av Norges høyeste eller mest prominente topper."
            ],
            "tone": "notice"
          },
          {
            "title": "Onlinekart og offlinegrense",
            "body": [
              "Kartverkets turkart vises på nett til zoomnivå 17. Appen mellomlagrer automatisk kvalifiserte fliser som faktisk vises, på disk for zoomnivå 5–16 når kilden tillater det. Bufferen er begrenset til 128 MiB og 4 096 fliser, med levetid høyst sju dager og eventuelt kortere etter svaret fra kilden. Den er ikke et komplett offlinekart. Kartverket mottar flisekoordinater (x/y/z), som viser kartområdet, og vanlige nettverksopplysninger som IP-adresse. Det finnes ingen ny områdenedlasting fra Kartverket. Kartdata © Kartverket. Se kildenes vilkår og lisenser. Kartverket har ikke godkjent eller kvalitetssikret Tind 100.", "OSM-kartområder lastes bare ned etter at du velger og bekrefter ett område. Nedlastingen bruker HTTPS fra GitHub Releases og GitHubs filverter github.com, release-assets.githubusercontent.com eller objects.githubusercontent.com. Filverten mottar IP-adresse, valgt område gjennom filadressen og appens User-Agent; forespørselen sender ikke GPS-posisjon, rutespor eller Game Center-ID. Kartene bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Pakkene har kildedata på zoomnivå 0–14 og kan vises til nivå 16; forstørring over 14 tilfører ikke flere detaljer.",
              "Kartflisenes bruksvilkår er atskilt fra toppkatalogens lisens. Kartverkets nettvisning er begrenset til zoom 17. OSM-offlinepakkene inneholder kildedata på zoomnivå 0–14 og kan vises til nivå 16; forstørring over 14 tilfører ikke flere detaljer. Disse grensene gir ikke en generell rett til å dele eller videredistribuere kartfliser. Se Kartverkets tjenestevilkår og aktuell kildekreditering."
            ],
            "links": [
              [
                "Tredjepartsmerknader",
                "../third-party-notices/"
              ],
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap og Overpass",
            "body": [
              "Regionalt nedlastbare kart bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Kildedato og dekning vises for området; stier og andre data kan være feil eller mangle. Dette er atskilt fra den forhåndsinstallerte toppkatalogen. Denne versjonen sender ingen katalogforespørsler til Overpass. Den eldre Overpass-importøren finnes bare som utviklerkilde og er ikke med i vanlige appbygg. Kartvertene og OSM-datalisensen er separate forhold."
            ],
            "links": [
              [
                "OpenStreetMaps opphavsrett",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "Feil og rettelser",
            "body": [
              "Opplysninger kan være feil eller utdaterte. Meld en konkret feil via brukerstøtte, og oppgi gjerne autoritativ kilde. Ikke send opphavsrettsbeskyttet turprosa eller komplette tredjepartsdatasett."
            ],
            "links": [
              [
                "Brukerstøtte",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Det geografiske utvalget bygger blant annet på Statistisk sentralbyrå (SSB), Befolkning på rutenett 1 km 2025, under NLOD 1.0. Tind 100 har bearbeidet dataene til anslag for nærhet i luftlinje, ikke reisetid eller bekreftelse på lovlig adkomst. SSB har ikke godkjent utvalget."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      en: {
        "eyebrow": "Transparency",
        "title": "Data sources and attribution",
        "lead": "The active catalogue in Tind 100 version 1.18.0 (build 45) is a source-and-rights-documented compilation of 1,500 records from Kartverket open data. The documentation is not a legal guarantee.",
        "dated": true,
        "sections": [
          {
            "title": "Active catalogue in build 45",
            "body": [
              "The catalogue contains 1,500 unique records: exactly 100 in each of Norway’s 15 counties. Authorised names, alternative spellings, feature type, place-name ID and representation point come from SSR. Municipality and county membership are checked with Kommuneinfo.",
              "Model elevations and representative summit points for the 653 new entries in build 45 are derived from Kartverket NHM/DTM through WCS: 651 from extractions on a 10 m grid and two from individually documented extractions on a 1 m grid. Grid spacing is not an accuracy guarantee. The 847 retained entries were not reverified by these extractions. Each entry identifies its data sources. Tind 100 selected, calculated and rounded the values; these are not field measurements or route recommendations."
            ],
            "links": [
              [
                "SSR / place names",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "Licence, attribution and changes",
            "body": [
              "Official place names and identifiers come from SSR © Kartverket under CC BY 4.0, and administrative assignment is checked with Kommuneinfo © Kartverket under CC BY 4.0. Elevations and representative summit coordinates are derived from NHM/DTM terrain data © Kartverket; CC BY 4.0 applies where identified in the linked source metadata, and the publisher must retain service-specific rights confirmation for detailed inputs. Tind 100 selected, combined, calculated, rounded and ranked the data. Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty.",
              "CC BY 4.0 permits reuse under its terms. Catalogue data must therefore retain the required attribution, licence notice and indication of changes. This source and licence assessment is not legal advice or a guarantee for every possible use."
            ],
            "links": [
              [
                "Open data and licence",
                "../open-data/"
              ],
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "What the catalogue excludes",
            "body": [
              "The active catalogue contains no inherited hiking descriptions or route, access, parking or safety prose, no prominence values and no third-party catalogue fields from commercial or community hiking services.",
              "Catalogue order is Tind 100’s editorial selection, not a uniform ranking of Norway’s highest or most prominent summits."
            ],
            "tone": "notice"
          },
          {
            "title": "Online maps and offline boundary",
            "body": [
              "The online Kartverket hiking map is displayed up to zoom 17. The app automatically caches eligible tiles you actually view on disk at zoom levels 5–16 when the source permits it. The cache is limited to 128 MiB and 4,096 tiles, retained for at most seven days and possibly less depending on the source response. It is not a complete offline map. Kartverket receives tile coordinates (x/y/z), revealing the map area, and ordinary network information such as your IP address. No new Kartverket area download is offered. Map data © Kartverket. See the source terms and licences. Kartverket has not endorsed or quality-assured Tind 100.", "OSM map areas download only after you select and confirm one area. Downloads use HTTPS from GitHub Releases and GitHub file hosts github.com, release-assets.githubusercontent.com or objects.githubusercontent.com. The host receives your IP address, the selected area through the file URL and the app's User-Agent; the request does not send GPS position, route tracks or Game Center ID. Maps use © OpenStreetMap contributors under ODbL 1.0. Packages contain source data at zoom levels 0–14 and can be displayed up to level 16; enlarging above 14 adds no new detail.",
              "Map-tile terms are separate from the peak catalogue’s licence. Kartverket online display is capped at zoom 17. OSM offline packages contain source data at zoom levels 0–14 and can be displayed up to level 16; enlarging above 14 adds no new detail. These limits do not grant general rights to share or redistribute map tiles. Consult Kartverket’s service terms and the applicable source attribution."
            ],
            "links": [
              [
                "Third-party notices",
                "../third-party-notices/"
              ],
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap and Overpass",
            "body": [
              "Downloadable regional maps use © OpenStreetMap contributors under ODbL 1.0. The source date and coverage are shown for each area; paths and other data may be wrong or missing. This is separate from the preinstalled peak catalogue. This version sends no catalogue requests to Overpass. The legacy Overpass importer remains only as developer source and is not included in ordinary app builds. File hosting and the OSM data licence are separate matters."
            ],
            "links": [
              [
                "OpenStreetMap copyright",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "Errors and corrections",
            "body": [
              "Information may be wrong or out of date. Report a specific error through Support and include an authoritative source when possible. Do not send copyrighted hiking prose or complete third-party datasets."
            ],
            "links": [
              [
                "Support",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Geographic selection uses Statistics Norway (SSB), Population on 1 km grids 2025, under NLOD 1.0. Tind 100 processed the data into straight-line proximity estimates, not travel times or confirmation of public access. SSB has not endorsed this selection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      fr: {
        "eyebrow": "Transparence",
        "title": "Sources de données et attribution",
        "lead": "Le catalogue actif de Tind 100 version 1.18.0 (compilation 45) est une compilation de 1 500 entrées issues des données ouvertes de Kartverket, dont les sources et les droits d’utilisation sont documentés. Cette documentation ne constitue pas une garantie juridique.",
        "dated": true,
        "sections": [
          {
            "title": "Catalogue actif de la compilation 45",
            "body": [
              "Le catalogue contient 1 500 entrées uniques : exactement 100 dans chacun des 15 comtés de Norvège. Les noms autorisés, graphies alternatives, types d’objet, identifiants toponymiques et points de représentation proviennent de SSR. L’appartenance à la commune et au comté est vérifiée avec Kommuneinfo.",
              "Les altitudes modélisées et les points sommitaux représentatifs des 653 nouvelles entrées de la compilation 45 sont dérivés des données NHM/DTM de Kartverket via WCS : 651 à partir d’extractions sur une grille de 10 m et deux à partir d’extractions sur une grille de 1 m documentées individuellement. Le pas de la grille ne garantit pas la précision. Ces extractions ne constituent pas une nouvelle vérification des 847 entrées conservées. Chaque entrée indique ses sources. Tind 100 a sélectionné, calculé et arrondi les valeurs ; il ne s’agit ni de mesures de terrain ni de recommandations d’itinéraire."
            ],
            "links": [
              [
                "SSR / noms de lieux",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "Licence, attribution et modifications",
            "body": [
              "Les noms de lieux et identifiants officiels proviennent de SSR © Kartverket sous licence CC BY 4.0 ; l’affectation administrative est vérifiée avec Kommuneinfo © Kartverket sous CC BY 4.0. Les altitudes et coordonnées représentatives sont dérivées des données topographiques NHM/DTM © Kartverket ; CC BY 4.0 s’applique lorsqu’elle est indiquée dans les métadonnées liées, et l’éditeur doit conserver une confirmation des droits propre au service pour les données détaillées. Tind 100 a sélectionné, combiné, calculé, arrondi et classé les données. Kartverket ne les a ni approuvées ni cautionnées, n’en a pas contrôlé la qualité et ne fournit aucune garantie.",
              "La licence CC BY 4.0 autorise la réutilisation selon ses conditions. Toute réutilisation des données du catalogue doit donc conserver l’attribution requise, la mention de la licence et l’indication des modifications. Cette évaluation des sources et des licences ne constitue ni un avis juridique ni une garantie pour tous les usages possibles."
            ],
            "links": [
              [
                "Données ouvertes et licence",
                "../open-data/"
              ],
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Ce que le catalogue exclut",
            "body": [
              "Le catalogue actif ne contient ni descriptions de randonnée héritées, ni textes concernant les itinéraires, l’accès, le stationnement ou la sécurité, ni valeurs de proéminence, ni champs de catalogue tiers provenant de services de randonnée commerciaux ou communautaires.",
              "L’ordre du catalogue résulte d’une sélection éditoriale de Tind 100, et non d’un classement uniforme des sommets les plus hauts ou les plus proéminents de Norvège."
            ],
            "tone": "notice"
          },
          {
            "title": "Cartes en ligne et périmètre hors ligne",
            "body": [
              "La carte de randonnée Kartverket en ligne s’affiche jusqu’au zoom 17. L’app conserve automatiquement sur disque les tuiles admissibles réellement consultées aux niveaux 5–16, lorsque la source l’autorise. Le cache est limité à 128 Mio et 4 096 tuiles, pour sept jours au maximum, éventuellement moins selon la réponse de la source. Ce n’est pas une carte hors ligne complète. Kartverket reçoit les coordonnées des tuiles (x/y/z), qui révèlent la zone, et des informations réseau habituelles telles que l’adresse IP. Aucun nouveau téléchargement de zone Kartverket n’est proposé. Données cartographiques © Kartverket. Consultez les conditions et licences des sources. Kartverket n’a ni approuvé Tind 100 ni vérifié sa qualité.", "Les zones OSM ne sont téléchargées qu’après sélection et confirmation d’une zone. Le téléchargement utilise HTTPS depuis GitHub Releases et les hôtes GitHub github.com, release-assets.githubusercontent.com ou objects.githubusercontent.com. L’hôte reçoit l’adresse IP, la zone choisie via l’adresse du fichier et le User-Agent de l’app ; la requête n’envoie ni position GPS, ni traces, ni identifiant Game Center. Les cartes utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. Les paquets contiennent les niveaux source 0–14 et peuvent s’afficher jusqu’au niveau 16 ; au-delà de 14, l’agrandissement n’ajoute aucun détail.",
              "Les conditions des tuiles cartographiques sont distinctes de la licence du catalogue des sommets. L’affichage en ligne de Kartverket est limité au zoom 17. Les paquets OSM hors ligne contiennent des données sources aux niveaux 0–14 et peuvent être affichés jusqu’au niveau 16 ; un agrandissement au-delà de 14 n’ajoute aucun détail. Elles ne confèrent aucun droit général de partage ou de redistribution des tuiles. Consultez les conditions du service de Kartverket et l’attribution des sources concernées."
            ],
            "links": [
              [
                "Mentions relatives aux tiers",
                "../third-party-notices/"
              ],
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap et Overpass",
            "body": [
              "Les cartes régionales téléchargeables utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. La date des données et la couverture sont indiquées pour chaque zone ; sentiers et autres données peuvent être erronés ou absents. Elles sont distinctes du catalogue de sommets préinstallé. Cette version n’envoie aucune requête de catalogue à Overpass. L’ancien importateur Overpass est conservé uniquement comme code source de développement et n’est pas inclus dans les compilations ordinaires de l’app. L’hébergement des fichiers et la licence OSM sont distincts."
            ],
            "links": [
              [
                "Droits d’auteur d’OpenStreetMap",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "Erreurs et corrections",
            "body": [
              "Les informations peuvent être erronées ou obsolètes. Signalez toute erreur précise à l’assistance et indiquez si possible une source faisant autorité. N’envoyez pas de textes de randonnée protégés par le droit d’auteur ni de jeux de données tiers complets."
            ],
            "links": [
              [
                "Assistance",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La sélection géographique utilise les données de Statistics Norway (SSB), population sur une grille de 1 km en 2025, sous licence NLOD 1.0. Tind 100 les a transformées en estimations de proximité à vol d’oiseau, et non en temps de trajet ou en confirmation d’un accès autorisé. SSB n’a pas approuvé cette sélection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      es: {
        "eyebrow": "Transparencia",
        "title": "Fuentes de datos y atribución",
        "lead": "El catálogo activo de Tind 100 versión 1.18.0 (compilación 45) es una recopilación de 1.500 registros con fuentes y licencias documentadas procedentes de datos abiertos de Kartverket. La documentación no es una garantía jurídica.",
        "dated": true,
        "sections": [
          {
            "title": "Catálogo activo en la compilación 45",
            "body": [
              "El catálogo contiene 1.500 registros únicos: exactamente 100 en cada una de las 15 provincias de Noruega. Los nombres autorizados, grafías alternativas, tipos de objeto, identificadores toponímicos y puntos de representación proceden de SSR. La pertenencia municipal y provincial se comprueba con Kommuneinfo.",
              "Las altitudes modeladas y los puntos representativos de las cumbres de las 653 nuevas entradas de la compilación 45 se derivan de NHM/DTM de Kartverket mediante WCS: 651 a partir de extracciones en una cuadrícula de 10 m y dos a partir de extracciones en una cuadrícula de 1 m documentadas individualmente. El espaciado de la cuadrícula no garantiza la precisión. Estas extracciones no suponen una nueva verificación de las 847 entradas conservadas. Cada entrada identifica sus fuentes. Tind 100 seleccionó, calculó y redondeó los valores; no son mediciones sobre el terreno ni recomendaciones de ruta."
            ],
            "links": [
              [
                "SSR / topónimos",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "Licencia, atribución y cambios",
            "body": [
              "Los topónimos e identificadores oficiales proceden de SSR © Kartverket bajo CC BY 4.0; la división administrativa se comprueba con Kommuneinfo © Kartverket bajo CC BY 4.0. Las altitudes y coordenadas representativas se derivan de datos de terreno NHM/DTM © Kartverket; CC BY 4.0 se aplica cuando así se indica en los metadatos enlazados, y el editor debe conservar una confirmación de derechos específica del servicio para los datos detallados. Tind 100 seleccionó, combinó, calculó, redondeó y ordenó los datos. Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías.",
              "CC BY 4.0 permite la reutilización conforme a sus condiciones. Los datos del catálogo deben mantener la atribución, el aviso de licencia y la indicación de cambios exigidos. Esta evaluación de fuentes y licencias no es asesoramiento jurídico ni una garantía para todos los usos posibles."
            ],
            "links": [
              [
                "Datos abiertos y licencia",
                "../open-data/"
              ],
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Contenido excluido del catálogo",
            "body": [
              "El catálogo activo no contiene descripciones de excursiones heredadas ni textos de ruta, acceso, aparcamiento o seguridad, valores de prominencia ni campos de catálogos externos procedentes de servicios comerciales o comunitarios.",
              "El orden es una selección editorial de Tind 100, no una clasificación uniforme de las cumbres más altas o prominentes de Noruega."
            ],
            "tone": "notice"
          },
          {
            "title": "Mapas en línea y límite sin conexión",
            "body": [
              "El mapa de senderismo de Kartverket en línea se muestra hasta el zoom 17. La app guarda automáticamente en disco las teselas permitidas que realmente visualizas, de los niveles 5–16, cuando la fuente lo permite. La caché se limita a 128 MiB y 4096 teselas durante un máximo de siete días, o menos según la respuesta de la fuente. No es un mapa sin conexión completo. Kartverket recibe coordenadas de teselas (x/y/z), que revelan la zona, e información de red habitual como la dirección IP. No se ofrece una nueva descarga de zonas de Kartverket. Datos cartográficos © Kartverket. Consulta las condiciones y licencias de las fuentes. Kartverket no ha respaldado Tind 100 ni verificado su calidad.", "Las zonas OSM solo se descargan tras seleccionar y confirmar una zona. La descarga usa HTTPS desde GitHub Releases y los servidores github.com, release-assets.githubusercontent.com u objects.githubusercontent.com. El servidor recibe la dirección IP, la zona elegida mediante la URL del archivo y el User-Agent de la app; la solicitud no envía posición GPS, trazados de rutas ni ID de Game Center. Los mapas usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Los paquetes contienen datos fuente en niveles 0–14 y pueden mostrarse hasta el 16; ampliar por encima de 14 no añade detalle.",
              "Las condiciones de las teselas son independientes de la licencia del catálogo de cumbres. La visualización de Kartverket en línea está limitada al zoom 17. Los paquetes OSM sin conexión contienen datos de origen en los niveles 0–14 y pueden mostrarse hasta el nivel 16; ampliar por encima de 14 no añade detalle. No otorgan derechos generales para compartir o redistribuir teselas. Consulta las condiciones del servicio de Kartverket y la atribución de cada fuente."
            ],
            "links": [
              [
                "Avisos de terceros",
                "../third-party-notices/"
              ],
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap y Overpass",
            "body": [
              "Los mapas regionales descargables usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Se muestran la fecha de los datos y la cobertura de cada zona; los senderos y otros datos pueden ser erróneos o faltar. Son independientes del catálogo de cumbres preinstalado. Esta versión no envía solicitudes de catálogo a Overpass. El importador antiguo de Overpass se conserva solo como código fuente de desarrollo y no se incluye en las compilaciones normales de la app. El alojamiento de archivos y la licencia OSM son asuntos distintos."
            ],
            "links": [
              [
                "Derechos de autor de OpenStreetMap",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "Errores y correcciones",
            "body": [
              "La información puede ser errónea o estar desactualizada. Informa mediante Soporte e incluye una fuente oficial si es posible. No envíes textos de excursiones protegidos ni bases de datos completas de terceros."
            ],
            "links": [
              [
                "Soporte",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La selección geográfica utiliza datos de Statistics Norway (SSB), población en cuadrículas de 1 km de 2025, bajo NLOD 1.0. Tind 100 los ha transformado en estimaciones de proximidad en línea recta, no en tiempos de viaje ni en confirmaciones de acceso permitido. SSB no ha aprobado esta selección."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      de: {
        "eyebrow": "Transparenz",
        "title": "Datenquellen und Namensnennung",
        "lead": "Der aktive Katalog in Tind 100 Version 1.18.0 (Build 45) ist eine Zusammenstellung von 1.500 Datensätzen mit dokumentierten Quellen und Lizenzen aus offenen Kartverket-Daten. Die Dokumentation ist keine rechtliche Garantie.",
        "dated": true,
        "sections": [
          {
            "title": "Aktiver Katalog in Build 45",
            "body": [
              "Der Katalog enthält 1.500 eindeutige Einträge: genau 100 in jedem der 15 norwegischen Fylker. Amtliche Namen, alternative Schreibweisen, Objekttyp, Ortsnamen-ID und Repräsentationspunkt stammen aus SSR. Die Gemeinde- und Fylke-Zuordnung wird mit Kommuneinfo geprüft.",
              "Modellhöhen und repräsentative Gipfelpunkte der 653 neuen Einträge in Build 45 sind aus Kartverkets NHM/DTM über WCS abgeleitet: 651 aus Auszügen auf einem 10-m-Raster und zwei aus einzeln dokumentierten Auszügen auf einem 1-m-Raster. Die Rasterweite garantiert keine Genauigkeit. Die 847 übernommenen Einträge wurden durch diese Auszüge nicht erneut überprüft. Jeder Eintrag nennt seine Quellen. Tind 100 hat die Werte ausgewählt, berechnet und gerundet; es handelt sich nicht um Messungen vor Ort oder Routenempfehlungen."
            ],
            "links": [
              [
                "SSR / Ortsnamen",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "Lizenz, Namensnennung und Änderungen",
            "body": [
              "Offizielle Ortsnamen und Kennungen stammen aus SSR © Kartverket unter CC BY 4.0; die Verwaltungszuordnung wird mit Kommuneinfo © Kartverket unter CC BY 4.0 geprüft. Höhen und repräsentative Gipfelkoordinaten sind aus NHM/DTM-Geländedaten © Kartverket abgeleitet. CC BY 4.0 gilt dort, wo die verlinkten Quellmetadaten dies angeben; für detaillierte Daten muss der Herausgeber eine dienstspezifische Rechtebestätigung aufbewahren. Tind 100 hat die Daten ausgewählt, kombiniert, berechnet, gerundet und geordnet. Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr.",
              "CC BY 4.0 erlaubt die Weiterverwendung zu ihren Bedingungen. Bei Katalogdaten müssen daher die verlangte Namensnennung, der Lizenzhinweis und die Änderungsangabe erhalten bleiben. Diese Quellen- und Lizenzbewertung ist keine Rechtsberatung oder Garantie für jede denkbare Nutzung."
            ],
            "links": [
              [
                "Offene Daten und Lizenz",
                "../open-data/"
              ],
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Nicht enthaltene Kataloginhalte",
            "body": [
              "Der aktive Katalog enthält keine übernommenen Tourenbeschreibungen oder Texte zu Route, Zugang, Parken oder Sicherheit, keine Prominenzwerte und keine Katalogfelder kommerzieller oder gemeinschaftlicher Tourendienste.",
              "Die Reihenfolge ist eine redaktionelle Auswahl von Tind 100 und keine einheitliche Rangliste der höchsten oder prominentesten Gipfel Norwegens."
            ],
            "tone": "notice"
          },
          {
            "title": "Online-Karten und Offline-Grenze",
            "body": [
              "Kartverkets Online-Wanderkarte wird bis Zoomstufe 17 angezeigt. Tatsächlich betrachtete zulässige Kacheln der Stufen 5–16 speichert die App automatisch auf dem Gerät, sofern die Quelle dies erlaubt. Der Cache ist auf 128 MiB und 4.096 Kacheln begrenzt, für höchstens sieben Tage oder kürzer entsprechend der Antwort der Quelle. Er ist keine vollständige Offlinekarte. Kartverket erhält Kachelkoordinaten (x/y/z), die das Kartengebiet erkennen lassen, und übliche Netzwerkinformationen wie die IP-Adresse. Neue Kartverket-Gebietsdownloads werden nicht angeboten. Kartendaten © Kartverket. Beachte die Bedingungen und Lizenzen der Quellen. Kartverket hat Tind 100 weder genehmigt noch qualitätsgeprüft.", "OSM-Gebiete werden erst nach Auswahl und Bestätigung eines Gebiets heruntergeladen. Downloads erfolgen über HTTPS von GitHub Releases und den GitHub-Dateihostern github.com, release-assets.githubusercontent.com oder objects.githubusercontent.com. Der Hoster erhält IP-Adresse, gewähltes Gebiet über die Datei-URL und den User-Agent der App; GPS-Position, Routenspuren oder Game-Center-ID werden nicht mitgesendet. Die Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Pakete enthalten Quelldaten der Zoomstufen 0–14 und können bis Stufe 16 angezeigt werden; Vergrößerung über 14 ergänzt keine Details.",
              "Für Kartenkacheln gelten andere Bedingungen als für die Lizenz des Gipfelkatalogs. Kartverkets Onlineanzeige ist auf Zoom 17 begrenzt. OSM-Offlinepakete enthalten Quelldaten der Zoomstufen 0–14 und können bis Stufe 16 angezeigt werden; eine Vergrößerung über 14 hinaus fügt keine Details hinzu. Sie gewähren keine allgemeinen Rechte zum Teilen oder Weiterverbreiten von Kartenkacheln. Beachte Kartverkets Dienstbedingungen und die jeweilige Quellenangabe."
            ],
            "links": [
              [
                "Hinweise zu Drittanbietern",
                "../third-party-notices/"
              ],
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap und Overpass",
            "body": [
              "Herunterladbare regionale Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Datenstand und Abdeckung werden je Gebiet angezeigt; Wege und andere Daten können falsch sein oder fehlen. Dies ist vom vorinstallierten Gipfelkatalog getrennt. Diese Version sendet keine Kataloganfragen an Overpass. Der ältere Overpass-Importer bleibt nur als Entwicklungsquellcode erhalten und ist nicht in normalen App-Builds enthalten. Dateihosting und OSM-Datenlizenz sind getrennte Themen."
            ],
            "links": [
              [
                "OpenStreetMap-Urheberrecht",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "Fehler und Korrekturen",
            "body": [
              "Informationen können falsch oder veraltet sein. Melde konkrete Fehler über den Support und nenne möglichst eine offizielle Quelle. Sende keine geschützten Tourentexte oder vollständigen Drittdatenbanken."
            ],
            "links": [
              [
                "Support",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Die geografische Auswahl nutzt Bevölkerungsdaten von Statistics Norway (SSB) im 1-km-Raster für 2025 unter NLOD 1.0. Tind 100 hat daraus Luftlinienentfernungen abgeleitet, keine Reisezeiten oder Bestätigungen eines erlaubten Zugangs. SSB hat diese Auswahl nicht genehmigt."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      "zh-Hans": {
        "eyebrow": "透明度",
        "title": "数据来源与署名",
        "lead": "Tind 100 1.18.0 版（构建 45）的活动目录，是基于 Kartverket 开放数据、来源与许可已有文档记录的 1,500 条记录汇编。相关文档并非法律保证。",
        "dated": true,
        "sections": [
          {
            "title": "构建 45 的活动目录",
            "body": [
              "目录包含 1,500 条唯一记录：挪威 15 个郡各 100 条。获准名称、其他拼写、对象类型、地名编号及代表点来自 SSR。市镇与郡归属通过 Kommuneinfo 核查。",
              "构建45新增的653条记录，其模型海拔和代表性山顶点由 Kartverket 的 NHM/DTM 经 WCS 提取计算：651条来自10米网格提取，另两条来自单独留有依据的1米网格提取。网格间距不代表精度保证。这些提取并未重新核验沿用的847条记录。每条记录列明来源。Tind 100 对数值进行了选择、计算和取整；这些并非实地测量或路线推荐。"
            ],
            "links": [
              [
                "SSR / 地名",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ]
            ]
          },
          {
            "title": "许可、署名与修改说明",
            "body": [
              "官方地名和标识来自采用 CC BY 4.0 的 SSR © Kartverket；行政归属使用采用 CC BY 4.0 的 Kommuneinfo © Kartverket 核对。海拔和代表性山顶坐标由 NHM/DTM 地形数据 © Kartverket 派生。CC BY 4.0 仅适用于链接的来源元数据明确标明采用该许可的数据；发布者必须保留详细数据所用服务的专门权利确认。Tind 100 对数据进行了选择、组合、计算、取整和排序。Kartverket 未批准、背书或质量核验 Tind 100，也不提供保证。",
              "CC BY 4.0 允许依照许可条件再利用。继续使用目录数据时，必须保留所要求的署名、许可说明和修改说明。此来源与许可评估不构成法律意见，也不保证适用于所有可能的用途。"
            ],
            "links": [
              [
                "开放数据与许可",
                "../open-data/"
              ],
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "目录未包含的内容",
            "body": [
              "活动目录不含继承的徒步说明，也不含路线、通行、停车或安全文字，不含地形突起度数值，也不含商业或社区徒步服务的第三方目录字段。",
              "目录顺序是 Tind 100 的编辑选择，并非挪威最高或最突出山峰的统一排名。"
            ],
            "tone": "notice"
          },
          {
            "title": "在线地图与离线边界",
            "body": [
              "Kartverket 在线徒步地图最高显示至缩放级别 17。在来源允许的情况下，App 会自动将实际查看过且符合条件的 5–16 级瓦片缓存到磁盘。缓存最多为 128 MiB、4096 个瓦片，保留时间最长七天，也可能依据来源响应缩短。它并非完整离线地图。Kartverket 会收到可显示地图区域的瓦片坐标（x/y/z）及 IP 地址等常规网络信息。不提供新的 Kartverket 区域下载。 地图数据 © Kartverket。请参阅来源条款和许可。Kartverket 未批准 Tind 100，也未核验其质量。", "OSM 区域只有在你选择并确认一个区域后才会下载。下载通过 HTTPS 从 GitHub Releases 及 GitHub 文件托管域名 github.com、release-assets.githubusercontent.com 或 objects.githubusercontent.com 获取。托管方会收到 IP 地址、文件网址中表示的所选区域以及 App 的 User-Agent；请求不发送 GPS 位置、路线轨迹或 Game Center ID。地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。地图包包含 0–14 级源数据，最高可显示至 16 级；超过 14 级只会放大已有数据，不增加细节。",
              "地图瓦片的条款与山峰目录的许可相互独立。Kartverket 在线地图最高显示至 17 级。OSM 离线包包含 0–14 级的源数据，最高可显示至 16 级；超过 14 级只会放大现有数据，不会增加细节。这些上限不授予普遍分享或重新分发地图瓦片的权利。请查阅 Kartverket 服务条款及相应来源标注。"
            ],
            "links": [
              [
                "第三方声明",
                "../third-party-notices/"
              ],
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap 与 Overpass",
            "body": [
              "可下载区域地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。每个区域会显示数据日期和覆盖范围；步道及其他数据可能有误或缺失。这些地图与预装山峰目录相互独立。此版本不会向 Overpass 发送目录请求。旧版 Overpass 导入器仅保留为开发源码，不包含在普通 App 构建中。文件托管和 OSM 数据许可属于不同事项。"
            ],
            "links": [
              [
                "OpenStreetMap 版权",
                "https://www.openstreetmap.org/copyright",
                "external"
              ]
            ]
          },
          {
            "title": "错误与更正",
            "body": [
              "信息可能有误或已过时。请通过支持报告具体错误，并尽可能提供权威来源。请勿发送受版权保护的徒步文字或完整第三方数据集。"
            ],
            "links": [
              [
                "支持",
                "../support/"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "地理选点参考了挪威统计局（SSB）2025年1公里网格人口数据，使用许可为 NLOD 1.0。Tind 100 将数据处理为直线距离估算，并非行程时间或合法通行的确认。SSB 未认可此选点结果。"
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      }
    },

    "open-data": {
      nb: {
        "eyebrow": "Åpne offentlige data",
        "title": "Åpne data og lisens",
        "lead": "Her beskrives det åpne datagrunnlaget for den aktive katalogen i Tind 100 versjon 1.18.0 (bygg 45), hvordan det er bearbeidet og hvilke vilkår som følger med.",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "Gjelder Tind 100 versjon 1.18.0 (bygg 45)",
        "sections": [
          {
            "title": "1 500 kilde- og rettighetsdokumenterte katalogposter",
            "body": [
              "Den aktive forhåndsinstallerte katalogen har 1 500 unike poster og nøyaktig 100 topper i hvert av Norges 15 fylker. Autoriserte prioriterte navn, alternative skrivemåter, objekttype, stedsnummer og representasjonspunkt kommer fra Kartverkets Sentralt stedsnavnregister (SSR). Kommune- og fylkestilhørighet er kontrollert med Kommuneinfo.",
              "Katalogen inneholder ingen arvede turbeskrivelser eller tekster om rute, adkomst, parkering eller sikkerhet, ingen prominensverdier og ingen tredjeparts katalogfelt fra kommersielle eller fellesskapsbaserte turtjenester. Dokumentasjonen er ikke en juridisk garanti."
            ],
            "links": [
              [
                "Full kildeoversikt",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "NHM/DTM via Kartverkets WCS",
            "body": [
              "Modellhøyder og representative toppunkt for de 653 nye postene i bygg 45 er utledet fra Kartverkets NHM/DTM via WCS: 651 fra uttrekk med 10 m rutenett og to fra særskilt dokumenterte uttrekk med 1 m rutenett. Rutenettstørrelsen er ikke en garanti for nøyaktigheten. De 847 videreførte postene er ikke kontrollert på nytt gjennom disse uttrekkene. Hver post oppgir datakilder. Tind 100 har valgt, beregnet og avrundet verdiene; dette er ikke feltmålinger eller ruteanbefalinger."
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "Offisielle stedsnavn og identifikatorer kommer fra SSR © Kartverket under CC BY 4.0, og administrativ tilordning kontrolleres med Kommuneinfo © Kartverket under CC BY 4.0. Høyder og representative toppkoordinater er utledet fra NHM/DTM-terrengdata © Kartverket; CC BY 4.0 gjelder der de lenkede kildemetadataene angir dette, og utgiveren må bevare tjenestespesifikk rettighetsdokumentasjon for detaljerte data. Tind 100 har valgt, kombinert, beregnet, avrundet og rangert dataene. Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti.",
              "CC BY 4.0 tillater kopiering, deling og bearbeiding på lisensens vilkår. Viderebruk må beholde påkrevd kreditering, lisenshenvisning og opplysning om bearbeiding. Nettstedets egen lisens begrenser ikke rettigheter du får direkte fra datalisensgiveren. Dette er en dokumentert kilde- og lisensvurdering, ikke juridisk rådgivning eller garanti."
            ],
            "links": [
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Gjeldende katalog – bygg 45",
            "body": [
              "Denne filen er en byteidentisk kopi av den geografisk reviderte katalogen i Tind 100 1.18.0 (bygg 45): 1 500 poster, 100 per fylke. Oppføringene er ikke feltkontrollerte tur- eller adkomstanbefalinger.",
              "Ved viderebruk: «Tind 100-katalog v1.18.0 (bygg 45), basert på data © Kartverket», lenke til CC BY 4.0 og opplysning om Tind 100s utvelgelse, kombinasjon, beregning, avrunding og rangering. Behold også krediteringen «Kilde: Statistisk sentralbyrå (SSB), befolkning på 1 km-rutenett 2025», lenkene til SSB-kilden og NLOD 1.0, og opplysningen om Tind 100s bearbeiding. Filen inneholder ingen brukerdata, appkode, kartfliser, privat korrespondanse eller råbevis.",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "Last ned gjeldende katalog (JSON)",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "Last ned katalogøyeblikksbildet",
            "body": [
              "Dette er det historiske katalogøyeblikksbildet fra versjon 1.17.0 (bygg 41), også brukt uendret i bygg 44. Det er ikke den geografisk reviderte bygg 45-katalogen. SHA-256: 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "Ved viderebruk skal du kreditere «Tind 100-katalogøyeblikksbilde v1.17.0 (bygg 41), brukt uendret i v1.18.0 (bygg 44), basert på data © Kartverket», lenke til CC BY 4.0 og opplyse om Tind 100s utvelgelse, kombinasjon, beregning, avrunding og rangering. Filen inneholder ikke brukerdata, appkildekode, kartfliser, privat korrespondanse eller rå evidens."
            ],
            "links": [
              [
                "Last ned katalogøyeblikksbildet (JSON)",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "SHA-256-kontrollsum",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "Offisielle kildeinnganger",
            "body": [
              "Lenkene nedenfor er kildenes egne katalog- eller tjenesteoppføringer."
            ],
            "links": [
              [
                "SSR / Stedsnavn",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "Tredjepartsmerknader",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "Kartfliser er en egen rettighetsgrense",
            "body": [
              "Kartverkets turkart vises på nett til zoomnivå 17. Appen mellomlagrer automatisk kvalifiserte fliser som faktisk vises, på disk for zoomnivå 5–16 når kilden tillater det. Bufferen er begrenset til 128 MiB og 4 096 fliser, med levetid høyst sju dager og eventuelt kortere etter svaret fra kilden. Den er ikke et komplett offlinekart. Kartverket mottar flisekoordinater (x/y/z), som viser kartområdet, og vanlige nettverksopplysninger som IP-adresse. Det finnes ingen ny områdenedlasting fra Kartverket. Kartdata © Kartverket. Se kildenes vilkår og lisenser. Kartverket har ikke godkjent eller kvalitetssikret Tind 100.", "OSM-kartområder lastes bare ned etter at du velger og bekrefter ett område. Nedlastingen bruker HTTPS fra GitHub Releases og GitHubs filverter github.com, release-assets.githubusercontent.com eller objects.githubusercontent.com. Filverten mottar IP-adresse, valgt område gjennom filadressen og appens User-Agent; forespørselen sender ikke GPS-posisjon, rutespor eller Game Center-ID. Kartene bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Pakkene har kildedata på zoomnivå 0–14 og kan vises til nivå 16; forstørring over 14 tilfører ikke flere detaljer.",
              "Kartflisenes bruksvilkår er atskilt fra toppkatalogens lisens. Appens produktgrenser er zoom 17 på nett og zoom 16 uten nett. Disse grensene gir ikke en generell rett til å dele eller videredistribuere kartfliser. Se Kartverkets tjenestevilkår og aktuell kildekreditering."
            ],
            "tone": "notice",
            "links": [
              [
                "Tredjepartsmerknader",
                "../third-party-notices/"
              ],
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Det geografiske utvalget bygger blant annet på Statistisk sentralbyrå (SSB), Befolkning på rutenett 1 km 2025, under NLOD 1.0. Tind 100 har bearbeidet dataene til anslag for nærhet i luftlinje, ikke reisetid eller bekreftelse på lovlig adkomst. SSB har ikke godkjent utvalget."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      en: {
        "eyebrow": "Open public data",
        "title": "Open data and licence",
        "lead": "This page explains the open-data basis of the active catalogue in Tind 100 version 1.18.0 (build 45), how it was changed and the terms that apply.",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "Applies to Tind 100 version 1.18.0 (build 45)",
        "sections": [
          {
            "title": "1,500 source-and-rights-documented catalogue records",
            "body": [
              "The active preinstalled catalogue contains 1,500 unique records and exactly 100 peaks in each of Norway’s 15 counties. Authorised prioritised names, alternative spellings, feature type, place-name ID and representation point come from Kartverket’s Central Place Name Register (SSR). Municipality and county assignment are checked with Kommuneinfo.",
              "The catalogue contains no inherited hiking descriptions or route, access, parking or safety prose, no prominence values and no third-party catalogue fields from commercial or community hiking services. The documentation is not a legal guarantee."
            ],
            "links": [
              [
                "Complete source overview",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "NHM/DTM through Kartverket WCS",
            "body": [
              "Model elevations and representative summit points for the 653 new entries in build 45 are derived from Kartverket NHM/DTM through WCS: 651 from extractions on a 10 m grid and two from individually documented extractions on a 1 m grid. Grid spacing is not an accuracy guarantee. The 847 retained entries were not reverified by these extractions. Each entry identifies its data sources. Tind 100 selected, calculated and rounded the values; these are not field measurements or route recommendations."
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "Official place names and identifiers come from SSR © Kartverket under CC BY 4.0, and administrative assignment is checked with Kommuneinfo © Kartverket under CC BY 4.0. Elevations and representative summit coordinates are derived from NHM/DTM terrain data © Kartverket; CC BY 4.0 applies where identified in the linked source metadata, and the publisher must retain service-specific rights confirmation for detailed inputs. Tind 100 selected, combined, calculated, rounded and ranked the data. Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty.",
              "CC BY 4.0 permits copying, sharing and adaptation under its terms. Reuse must retain the required attribution, licence notice and indication of changes. The website’s own licence does not limit rights granted directly by the data licensor. This is a documented source and licence assessment, not legal advice or a guarantee."
            ],
            "links": [
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Current catalogue – build 45",
            "body": [
              "This file is a byte-identical copy of the geographically revised Tind 100 1.18.0 (build 45) catalogue: 1,500 records, 100 per county. The records are not field-checked hiking or access recommendations.",
              "For reuse, credit “Tind 100 catalogue v1.18.0 (build 45), based on data © Kartverket”, link to CC BY 4.0 and indicate Tind 100’s selection, combination, calculation, rounding and ranking. Also retain the credit “Source: Statistics Norway (SSB), population on 1 km grids 2025”, the links to the SSB source and NLOD 1.0, and the notice describing Tind 100’s processing. The file contains no user data, app code, map tiles, private correspondence or raw evidence.",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "Download current catalogue (JSON)",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "Download the catalogue snapshot",
            "body": [
              "This is the historical catalogue snapshot from version 1.17.0 (build 41), also used unchanged in build 44. It is not the geographically revised build 45 catalogue. SHA-256: 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "For reuse, credit “Tind 100 catalogue snapshot v1.17.0 (build 41), used unchanged in v1.18.0 (build 44), based on data © Kartverket”, link to CC BY 4.0 and indicate Tind 100’s selection, combination, calculation, rounding and ranking. The file contains no user data, app source code, map tiles, private correspondence or raw evidence."
            ],
            "links": [
              [
                "Download catalogue snapshot (JSON)",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "SHA-256 checksum",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "Official source entry points",
            "body": [
              "The links below are the source providers’ own catalogue or service entries."
            ],
            "links": [
              [
                "SSR / place names",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "Third-party notices",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "Map tiles are a separate rights boundary",
            "body": [
              "The online Kartverket hiking map is displayed up to zoom 17. The app automatically caches eligible tiles you actually view on disk at zoom levels 5–16 when the source permits it. The cache is limited to 128 MiB and 4,096 tiles, retained for at most seven days and possibly less depending on the source response. It is not a complete offline map. Kartverket receives tile coordinates (x/y/z), revealing the map area, and ordinary network information such as your IP address. No new Kartverket area download is offered. Map data © Kartverket. See the source terms and licences. Kartverket has not endorsed or quality-assured Tind 100.", "OSM map areas download only after you select and confirm one area. Downloads use HTTPS from GitHub Releases and GitHub file hosts github.com, release-assets.githubusercontent.com or objects.githubusercontent.com. The host receives your IP address, the selected area through the file URL and the app's User-Agent; the request does not send GPS position, route tracks or Game Center ID. Maps use © OpenStreetMap contributors under ODbL 1.0. Packages contain source data at zoom levels 0–14 and can be displayed up to level 16; enlarging above 14 adds no new detail.",
              "Map-tile terms are separate from the peak catalogue’s licence. The app’s product limits are zoom 17 online and zoom 16 offline. These limits do not grant general rights to share or redistribute map tiles. Consult Kartverket’s service terms and the applicable source attribution."
            ],
            "tone": "notice",
            "links": [
              [
                "Third-party notices",
                "../third-party-notices/"
              ],
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Geographic selection uses Statistics Norway (SSB), Population on 1 km grids 2025, under NLOD 1.0. Tind 100 processed the data into straight-line proximity estimates, not travel times or confirmation of public access. SSB has not endorsed this selection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      fr: {
        "eyebrow": "Données publiques ouvertes",
        "title": "Données ouvertes et licence",
        "lead": "Cette page explique le fondement en données ouvertes du catalogue actif de Tind 100 version 1.18.0 (compilation 45), les modifications apportées et les conditions applicables.",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "S’applique à Tind 100 version 1.18.0 (compilation 45)",
        "sections": [
          {
            "title": "1 500 entrées de catalogue assorties d’une documentation sur les sources et les droits",
            "body": [
              "Le catalogue actif préinstallé contient 1 500 entrées uniques et exactement 100 sommets dans chacun des 15 comtés de Norvège. Les noms autorisés retenus comme prioritaires, les graphies alternatives, le type d’objet, l’identifiant toponymique et le point de représentation proviennent du Registre central des noms de lieux de Kartverket (SSR). L’affectation à la commune et au comté est vérifiée au moyen de Kommuneinfo.",
              "Le catalogue ne contient ni descriptions de randonnée héritées, ni textes concernant les itinéraires, l’accès, le stationnement ou la sécurité, ni valeurs de proéminence, ni champs de catalogue tiers provenant de services de randonnée commerciaux ou communautaires. Cette documentation ne constitue pas une garantie juridique."
            ],
            "links": [
              [
                "Vue d’ensemble complète des sources",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "NHM/DTM via le WCS de Kartverket",
            "body": [
              "Les altitudes modélisées et les points sommitaux représentatifs des 653 nouvelles entrées de la compilation 45 sont dérivés des données NHM/DTM de Kartverket via WCS : 651 à partir d’extractions sur une grille de 10 m et deux à partir d’extractions sur une grille de 1 m documentées individuellement. Le pas de la grille ne garantit pas la précision. Ces extractions ne constituent pas une nouvelle vérification des 847 entrées conservées. Chaque entrée indique ses sources. Tind 100 a sélectionné, calculé et arrondi les valeurs ; il ne s’agit ni de mesures de terrain ni de recommandations d’itinéraire."
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "Les noms de lieux et identifiants officiels proviennent de SSR © Kartverket sous licence CC BY 4.0 ; l’affectation administrative est vérifiée avec Kommuneinfo © Kartverket sous CC BY 4.0. Les altitudes et coordonnées représentatives sont dérivées des données topographiques NHM/DTM © Kartverket ; CC BY 4.0 s’applique lorsqu’elle est indiquée dans les métadonnées liées, et l’éditeur doit conserver une confirmation des droits propre au service pour les données détaillées. Tind 100 a sélectionné, combiné, calculé, arrondi et classé les données. Kartverket ne les a ni approuvées ni cautionnées, n’en a pas contrôlé la qualité et ne fournit aucune garantie.",
              "La licence CC BY 4.0 autorise la copie, le partage et l’adaptation selon ses conditions. Toute réutilisation doit conserver l’attribution requise, la mention de la licence et l’indication des modifications. La licence propre au site web ne restreint pas les droits accordés directement par le concédant des données. Il s’agit d’une évaluation documentée des sources et des licences, et non d’un avis juridique ou d’une garantie."
            ],
            "links": [
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Catalogue actuel – compilation 45",
            "body": [
              "Ce fichier est une copie à l’octet près du catalogue révisé géographiquement de Tind 100 1.18.0 (compilation 45) : 1 500 entrées, 100 par comté. Les entrées ne sont pas des recommandations de randonnée ou d’accès vérifiées sur le terrain.",
              "En cas de réutilisation, indiquez « Catalogue Tind 100 v1.18.0 (compilation 45), basé sur les données © Kartverket », ajoutez un lien vers CC BY 4.0 et précisez la sélection, la combinaison, le calcul, l’arrondi et le classement effectués par Tind 100. Conservez également la mention « Source : Statistics Norway (SSB), population sur une grille de 1 km en 2025 », les liens vers la source SSB et NLOD 1.0, ainsi que la description des traitements effectués par Tind 100. Le fichier ne contient ni données utilisateur, ni code de l’app, ni tuiles cartographiques, ni correspondance privée, ni éléments justificatifs bruts.",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "Télécharger le catalogue actuel (JSON)",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "Télécharger l’instantané du catalogue",
            "body": [
              "Il s’agit de l’instantané historique de la version 1.17.0 (compilation 41), également utilisé sans modification dans la compilation 44. Ce n’est pas le catalogue révisé géographiquement de la compilation 45. SHA-256 : 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "Pour toute réutilisation, indiquez « Instantané du catalogue Tind 100 v1.17.0 (compilation 41), utilisé sans modification dans la v1.18.0 (compilation 44), fondé sur des données © Kartverket », ajoutez un lien vers CC BY 4.0 et mentionnez les opérations de sélection, de combinaison, de calcul, d’arrondi et de classement réalisées par Tind 100. Le fichier ne contient ni données utilisateur, ni code source de l’app, ni tuiles cartographiques, ni correspondance privée, ni éléments justificatifs bruts."
            ],
            "links": [
              [
                "Télécharger l’instantané du catalogue (JSON)",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "Somme de contrôle SHA-256",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "Points d’accès officiels aux sources",
            "body": [
              "Les liens ci-dessous mènent aux propres entrées de catalogue ou de service des fournisseurs de données."
            ],
            "links": [
              [
                "SSR / noms de lieux",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "Mentions relatives aux tiers",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "Les tuiles cartographiques constituent un périmètre de droits distinct",
            "body": [
              "La carte de randonnée Kartverket en ligne s’affiche jusqu’au zoom 17. L’app conserve automatiquement sur disque les tuiles admissibles réellement consultées aux niveaux 5–16, lorsque la source l’autorise. Le cache est limité à 128 Mio et 4 096 tuiles, pour sept jours au maximum, éventuellement moins selon la réponse de la source. Ce n’est pas une carte hors ligne complète. Kartverket reçoit les coordonnées des tuiles (x/y/z), qui révèlent la zone, et des informations réseau habituelles telles que l’adresse IP. Aucun nouveau téléchargement de zone Kartverket n’est proposé. Données cartographiques © Kartverket. Consultez les conditions et licences des sources. Kartverket n’a ni approuvé Tind 100 ni vérifié sa qualité.", "Les zones OSM ne sont téléchargées qu’après sélection et confirmation d’une zone. Le téléchargement utilise HTTPS depuis GitHub Releases et les hôtes GitHub github.com, release-assets.githubusercontent.com ou objects.githubusercontent.com. L’hôte reçoit l’adresse IP, la zone choisie via l’adresse du fichier et le User-Agent de l’app ; la requête n’envoie ni position GPS, ni traces, ni identifiant Game Center. Les cartes utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. Les paquets contiennent les niveaux source 0–14 et peuvent s’afficher jusqu’au niveau 16 ; au-delà de 14, l’agrandissement n’ajoute aucun détail.",
              "Les conditions des tuiles cartographiques sont distinctes de la licence du catalogue des sommets. Les limites de l’app sont le zoom 17 en ligne et le zoom 16 hors ligne. Elles ne confèrent aucun droit général de partage ou de redistribution des tuiles. Consultez les conditions du service de Kartverket et l’attribution des sources concernées."
            ],
            "tone": "notice",
            "links": [
              [
                "Mentions relatives aux tiers",
                "../third-party-notices/"
              ],
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La sélection géographique utilise les données de Statistics Norway (SSB), population sur une grille de 1 km en 2025, sous licence NLOD 1.0. Tind 100 les a transformées en estimations de proximité à vol d’oiseau, et non en temps de trajet ou en confirmation d’un accès autorisé. SSB n’a pas approuvé cette sélection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      es: {
        "eyebrow": "Datos públicos abiertos",
        "title": "Datos abiertos y licencia",
        "lead": "Esta página explica la base de datos abiertos del catálogo activo de Tind 100 versión 1.18.0 (compilación 45), sus modificaciones y las condiciones aplicables.",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "Se aplica a Tind 100 versión 1.18.0 (compilación 45)",
        "sections": [
          {
            "title": "1.500 registros con fuentes y licencias documentadas",
            "body": [
              "El catálogo activo preinstalado contiene 1.500 registros únicos y exactamente 100 cumbres en cada una de las 15 provincias de Noruega. Los nombres autorizados y prioritarios, grafías alternativas, tipo de elemento, identificador toponímico y punto de representación proceden del Registro Central de Topónimos de Kartverket (SSR). La provincia y el municipio se comprueban con Kommuneinfo.",
              "El catálogo no contiene descripciones de excursiones heredadas ni textos de ruta, acceso, aparcamiento o seguridad, valores de prominencia ni campos externos de servicios comerciales o comunitarios. La documentación no es una garantía jurídica."
            ],
            "links": [
              [
                "Resumen completo de fuentes",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "NHM/DTM mediante WCS de Kartverket",
            "body": [
              "Las altitudes modeladas y los puntos representativos de las cumbres de las 653 nuevas entradas de la compilación 45 se derivan de NHM/DTM de Kartverket mediante WCS: 651 a partir de extracciones en una cuadrícula de 10 m y dos a partir de extracciones en una cuadrícula de 1 m documentadas individualmente. El espaciado de la cuadrícula no garantiza la precisión. Estas extracciones no suponen una nueva verificación de las 847 entradas conservadas. Cada entrada identifica sus fuentes. Tind 100 seleccionó, calculó y redondeó los valores; no son mediciones sobre el terreno ni recomendaciones de ruta."
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "Los topónimos e identificadores oficiales proceden de SSR © Kartverket bajo CC BY 4.0; la división administrativa se comprueba con Kommuneinfo © Kartverket bajo CC BY 4.0. Las altitudes y coordenadas representativas se derivan de datos de terreno NHM/DTM © Kartverket; CC BY 4.0 se aplica cuando así se indica en los metadatos enlazados, y el editor debe conservar una confirmación de derechos específica del servicio para los datos detallados. Tind 100 seleccionó, combinó, calculó, redondeó y ordenó los datos. Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías.",
              "CC BY 4.0 permite copiar, compartir y adaptar conforme a sus condiciones. La reutilización debe conservar la atribución, el aviso de licencia y la indicación de cambios exigidos. La licencia propia del sitio no limita los derechos concedidos directamente por el licenciante de los datos. Esta es una evaluación documentada, no asesoramiento jurídico ni una garantía."
            ],
            "links": [
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Catálogo actual – compilación 45",
            "body": [
              "Este archivo es una copia idéntica byte por byte del catálogo revisado geográficamente de Tind 100 1.18.0 (compilación 45): 1.500 registros, 100 por provincia. Los registros no son recomendaciones de senderismo o acceso comprobadas sobre el terreno.",
              "Para reutilizarlo, atribuya «Catálogo Tind 100 v1.18.0 (compilación 45), basado en datos © Kartverket», enlace a CC BY 4.0 e indique la selección, combinación, cálculo, redondeo y clasificación realizados por Tind 100. Conserve también la atribución «Fuente: Statistics Norway (SSB), población en cuadrículas de 1 km de 2025», los enlaces a la fuente SSB y a NLOD 1.0, y la descripción del tratamiento realizado por Tind 100. El archivo no contiene datos de usuarios, código de la app, teselas, correspondencia privada ni evidencia sin procesar.",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "Descargar el catálogo actual (JSON)",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "Descargar la instantánea del catálogo",
            "body": [
              "Este es el catálogo histórico de la versión 1.17.0 (compilación 41), también usado sin cambios en la compilación 44. No es el catálogo revisado geográficamente de la compilación 45. SHA-256: 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "Para reutilizarlo, atribuye «Instantánea del catálogo Tind 100 v1.17.0 (compilación 41), usada sin cambios en v1.18.0 (compilación 44), basada en datos © Kartverket», enlaza CC BY 4.0 e indica la selección, combinación, cálculo, redondeo y ordenación realizados por Tind 100. El archivo no contiene datos de usuarios, código fuente, teselas, correspondencia privada ni evidencia sin procesar."
            ],
            "links": [
              [
                "Descargar la instantánea (JSON)",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "Suma SHA-256",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "Accesos oficiales a las fuentes",
            "body": [
              "Los enlaces siguientes son las entradas oficiales del catálogo o servicio de cada fuente."
            ],
            "links": [
              [
                "SSR / topónimos",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "Avisos de terceros",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "Las teselas tienen un límite de derechos independiente",
            "body": [
              "El mapa de senderismo de Kartverket en línea se muestra hasta el zoom 17. La app guarda automáticamente en disco las teselas permitidas que realmente visualizas, de los niveles 5–16, cuando la fuente lo permite. La caché se limita a 128 MiB y 4096 teselas durante un máximo de siete días, o menos según la respuesta de la fuente. No es un mapa sin conexión completo. Kartverket recibe coordenadas de teselas (x/y/z), que revelan la zona, e información de red habitual como la dirección IP. No se ofrece una nueva descarga de zonas de Kartverket. Datos cartográficos © Kartverket. Consulta las condiciones y licencias de las fuentes. Kartverket no ha respaldado Tind 100 ni verificado su calidad.", "Las zonas OSM solo se descargan tras seleccionar y confirmar una zona. La descarga usa HTTPS desde GitHub Releases y los servidores github.com, release-assets.githubusercontent.com u objects.githubusercontent.com. El servidor recibe la dirección IP, la zona elegida mediante la URL del archivo y el User-Agent de la app; la solicitud no envía posición GPS, trazados de rutas ni ID de Game Center. Los mapas usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Los paquetes contienen datos fuente en niveles 0–14 y pueden mostrarse hasta el 16; ampliar por encima de 14 no añade detalle.",
              "Las condiciones de las teselas son independientes de la licencia del catálogo de cumbres. Los límites del producto son zoom 17 en línea y zoom 16 sin conexión. No otorgan derechos generales para compartir o redistribuir teselas. Consulta las condiciones del servicio de Kartverket y la atribución de cada fuente."
            ],
            "tone": "notice",
            "links": [
              [
                "Avisos de terceros",
                "../third-party-notices/"
              ],
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La selección geográfica utiliza datos de Statistics Norway (SSB), población en cuadrículas de 1 km de 2025, bajo NLOD 1.0. Tind 100 los ha transformado en estimaciones de proximidad en línea recta, no en tiempos de viaje ni en confirmaciones de acceso permitido. SSB no ha aprobado esta selección."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      de: {
        "eyebrow": "Offene öffentliche Daten",
        "title": "Offene Daten und Lizenz",
        "lead": "Diese Seite erläutert die Open-Data-Grundlage des aktiven Katalogs in Tind 100 Version 1.18.0 (Build 45), seine Bearbeitung und die geltenden Bedingungen.",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "Gilt für Tind 100 Version 1.18.0 (Build 45)",
        "sections": [
          {
            "title": "1.500 Katalogdatensätze mit dokumentierten Quellen und Lizenzen",
            "body": [
              "Der aktive vorinstallierte Katalog enthält 1.500 eindeutige Datensätze und genau 100 Gipfel in jeder der 15 norwegischen Provinzen. Amtliche priorisierte Namen, alternative Schreibweisen, Objektart, Ortsnamenkennung und Repräsentationspunkt stammen aus Kartverkets zentralem Ortsnamenregister SSR. Gemeinde- und Provinzzuordnung werden mit Kommuneinfo geprüft.",
              "Der Katalog enthält keine übernommenen Tourenbeschreibungen oder Texte zu Route, Zugang, Parken oder Sicherheit, keine Prominenzwerte und keine externen Katalogfelder kommerzieller oder gemeinschaftlicher Tourendienste. Die Dokumentation ist keine rechtliche Garantie."
            ],
            "links": [
              [
                "Vollständige Quellenübersicht",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "NHM/DTM über Kartverkets WCS",
            "body": [
              "Modellhöhen und repräsentative Gipfelpunkte der 653 neuen Einträge in Build 45 sind aus Kartverkets NHM/DTM über WCS abgeleitet: 651 aus Auszügen auf einem 10-m-Raster und zwei aus einzeln dokumentierten Auszügen auf einem 1-m-Raster. Die Rasterweite garantiert keine Genauigkeit. Die 847 übernommenen Einträge wurden durch diese Auszüge nicht erneut überprüft. Jeder Eintrag nennt seine Quellen. Tind 100 hat die Werte ausgewählt, berechnet und gerundet; es handelt sich nicht um Messungen vor Ort oder Routenempfehlungen."
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "Offizielle Ortsnamen und Kennungen stammen aus SSR © Kartverket unter CC BY 4.0; die Verwaltungszuordnung wird mit Kommuneinfo © Kartverket unter CC BY 4.0 geprüft. Höhen und repräsentative Gipfelkoordinaten sind aus NHM/DTM-Geländedaten © Kartverket abgeleitet. CC BY 4.0 gilt dort, wo die verlinkten Quellmetadaten dies angeben; für detaillierte Daten muss der Herausgeber eine dienstspezifische Rechtebestätigung aufbewahren. Tind 100 hat die Daten ausgewählt, kombiniert, berechnet, gerundet und geordnet. Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr.",
              "CC BY 4.0 erlaubt Kopieren, Teilen und Bearbeiten zu ihren Bedingungen. Bei Weiterverwendung müssen die verlangte Namensnennung, der Lizenzhinweis und die Änderungsangabe erhalten bleiben. Die eigene Website-Lizenz beschränkt keine Rechte, die der Datenlizenzgeber unmittelbar einräumt. Dies ist eine dokumentierte Bewertung, keine Rechtsberatung oder Garantie."
            ],
            "links": [
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Aktueller Katalog – Build 45",
            "body": [
              "Diese Datei ist eine byteidentische Kopie des geografisch überarbeiteten Katalogs von Tind 100 1.18.0 (Build 45): 1.500 Einträge, 100 pro Fylke. Die Einträge sind keine vor Ort geprüften Wander- oder Zugangsempfehlungen.",
              "Bei Weiterverwendung nennen Sie „Tind-100-Katalog v1.18.0 (Build 45), basierend auf Daten © Kartverket“, verlinken CC BY 4.0 und erläutern die Auswahl, Kombination, Berechnung, Rundung und Rangfolge durch Tind 100. Behalten Sie außerdem den Quellenhinweis „Quelle: Statistics Norway (SSB), Bevölkerung im 1-km-Raster 2025“, die Links zur SSB-Quelle und zu NLOD 1.0 sowie die Beschreibung der Bearbeitung durch Tind 100 bei. Die Datei enthält keine Nutzerdaten, keinen App-Code, keine Kartenkacheln, keine private Korrespondenz und keine Rohbelege.",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "Aktuellen Katalog herunterladen (JSON)",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "Katalog-Snapshot herunterladen",
            "body": [
              "Dies ist der historische Katalogstand aus Version 1.17.0 (Build 41), der auch unverändert in Build 44 verwendet wurde. Es ist nicht der geografisch überarbeitete Katalog von Build 45. SHA-256: 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "Bei Weiterverwendung: „Tind-100-Katalog-Snapshot v1.17.0 (Build 41), unverändert in v1.18.0 (Build 44) verwendet, basierend auf Daten © Kartverket“, Link zu CC BY 4.0 und Hinweis auf Auswahl, Kombination, Berechnung, Rundung und Rangfolge durch Tind 100. Die Datei enthält keine Nutzerdaten, keinen App-Quellcode, keine Kartenkacheln, keine private Korrespondenz und keine Rohbelege."
            ],
            "links": [
              [
                "Katalog-Snapshot herunterladen (JSON)",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "SHA-256-Prüfsumme",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "Offizielle Quellenzugänge",
            "body": [
              "Die folgenden Links führen zu den eigenen Katalog- oder Diensteinträgen der Quellen."
            ],
            "links": [
              [
                "SSR / Ortsnamen",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "Hinweise zu Drittanbietern",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "Kartenkacheln bilden eine eigene Rechtegrenze",
            "body": [
              "Kartverkets Online-Wanderkarte wird bis Zoomstufe 17 angezeigt. Tatsächlich betrachtete zulässige Kacheln der Stufen 5–16 speichert die App automatisch auf dem Gerät, sofern die Quelle dies erlaubt. Der Cache ist auf 128 MiB und 4.096 Kacheln begrenzt, für höchstens sieben Tage oder kürzer entsprechend der Antwort der Quelle. Er ist keine vollständige Offlinekarte. Kartverket erhält Kachelkoordinaten (x/y/z), die das Kartengebiet erkennen lassen, und übliche Netzwerkinformationen wie die IP-Adresse. Neue Kartverket-Gebietsdownloads werden nicht angeboten. Kartendaten © Kartverket. Beachte die Bedingungen und Lizenzen der Quellen. Kartverket hat Tind 100 weder genehmigt noch qualitätsgeprüft.", "OSM-Gebiete werden erst nach Auswahl und Bestätigung eines Gebiets heruntergeladen. Downloads erfolgen über HTTPS von GitHub Releases und den GitHub-Dateihostern github.com, release-assets.githubusercontent.com oder objects.githubusercontent.com. Der Hoster erhält IP-Adresse, gewähltes Gebiet über die Datei-URL und den User-Agent der App; GPS-Position, Routenspuren oder Game-Center-ID werden nicht mitgesendet. Die Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Pakete enthalten Quelldaten der Zoomstufen 0–14 und können bis Stufe 16 angezeigt werden; Vergrößerung über 14 ergänzt keine Details.",
              "Für Kartenkacheln gelten andere Bedingungen als für die Lizenz des Gipfelkatalogs. Die Produktgrenzen sind Zoom 17 online und Zoom 16 offline. Sie gewähren keine allgemeinen Rechte zum Teilen oder Weiterverbreiten von Kartenkacheln. Beachte Kartverkets Dienstbedingungen und die jeweilige Quellenangabe."
            ],
            "tone": "notice",
            "links": [
              [
                "Hinweise zu Drittanbietern",
                "../third-party-notices/"
              ],
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Die geografische Auswahl nutzt Bevölkerungsdaten von Statistics Norway (SSB) im 1-km-Raster für 2025 unter NLOD 1.0. Tind 100 hat daraus Luftlinienentfernungen abgeleitet, keine Reisezeiten oder Bestätigungen eines erlaubten Zugangs. SSB hat diese Auswahl nicht genehmigt."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      "zh-Hans": {
        "eyebrow": "开放公共数据",
        "title": "开放数据与许可",
        "lead": "本页说明 Tind 100 1.18.0 版（构建 45）活动目录的开放数据依据、所作修改及适用条件。",
        "dated": true,
        "metaUpdatedISO": "2026-10-15",
        "metaVersion": "适用于 Tind 100 1.18.0 版（构建 45）",
        "sections": [
          {
            "title": "1,500 条来源与许可已有文档记录的目录记录",
            "body": [
              "活动预装目录包含 1,500 条唯一记录，挪威 15 个郡各 100 座山峰。授权优先名称、替代拼写、对象类型、地名编号和代表点来自 Kartverket 的中央地名注册库 SSR；市镇和郡归属通过 Kommuneinfo 核验。",
              "目录不含继承的徒步说明，也不含路线、通行、停车或安全文字，不含地形突起度数值，也不含商业或社区徒步服务的第三方目录字段。相关文档并非法律保证。"
            ],
            "links": [
              [
                "完整数据来源",
                "../data-sources/"
              ]
            ]
          },
          {
            "title": "经 Kartverket WCS 提供的 NHM/DTM",
            "body": [
              "构建45新增的653条记录，其模型海拔和代表性山顶点由 Kartverket 的 NHM/DTM 经 WCS 提取计算：651条来自10米网格提取，另两条来自单独留有依据的1米网格提取。网格间距不代表精度保证。这些提取并未重新核验沿用的847条记录。每条记录列明来源。Tind 100 对数值进行了选择、计算和取整；这些并非实地测量或路线推荐。"
            ],
            "links": [
              [
                "NHM/DTM · Kartverket WCS",
                "https://kartkatalog.geonorge.no/metadata/nasjonal-hoeydemodell-digital-terrengmodell-25833-wcs/0f0a0f38-00c4-4213-a9e5-2d861dc4abb0",
                "external"
              ]
            ]
          },
          {
            "title": "CC BY 4.0",
            "body": [
              "官方地名和标识来自采用 CC BY 4.0 的 SSR © Kartverket；行政归属使用采用 CC BY 4.0 的 Kommuneinfo © Kartverket 核对。海拔和代表性山顶坐标由 NHM/DTM 地形数据 © Kartverket 派生。CC BY 4.0 仅适用于链接的来源元数据明确标明采用该许可的数据；发布者必须保留详细数据所用服务的专门权利确认。Tind 100 对数据进行了选择、组合、计算、取整和排序。Kartverket 未批准、背书或质量核验 Tind 100，也不提供保证。",
              "CC BY 4.0 允许依照许可条件复制、分享和改编。继续使用时必须保留所要求的署名、许可说明和修改说明。网站自身许可不会限制数据许可方直接授予的权利。这是文档化的来源与许可评估，不构成法律意见或保证。"
            ],
            "links": [
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "当前目录 — 构建 45",
            "body": [
              "此文件与 Tind 100 1.18.0（构建 45）经过地理分布修订的目录逐字节相同：共 1,500 条记录，每郡 100 条。这些记录不是经过实地核实的徒步或通行建议。",
              "再次使用时，请标注“Tind 100 目录 v1.18.0（构建 45），基于数据 © Kartverket”，链接至 CC BY 4.0，并说明 Tind 100 所作的选择、组合、计算、取整及排序。还须保留“来源：挪威统计局（SSB），2025年1公里网格人口数据”的署名、SSB数据来源和 NLOD 1.0 的链接，以及 Tind 100 对数据所作处理的说明。文件不含用户数据、应用代码、地图瓦片、私人通信或原始证据。",
              "SHA-256: ba5dcd4768e3daced9a9661b0cfb9dfa9f045c4e69e672b0166a9b36b668e2d9"
            ],
            "links": [
              [
                "下载当前目录（JSON）",
                "open-data/seed_peaks-v1.18.0-build45.json"
              ],
              [
                "SHA-256",
                "open-data/seed_peaks-v1.18.0-build45.json.sha256"
              ]
            ]
          },
          {
            "title": "下载目录快照",
            "body": [
              "这是版本 1.17.0（构建 41）的历史目录快照，构建 44 也使用了相同内容。它并非经过地理分布修订的构建 45 目录。SHA-256：27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.",
              "继续使用时，请注明“Tind 100 目录快照 v1.17.0（构建 41），在 v1.18.0（构建 44）中未改动使用，基于 © Kartverket 数据”，链接 CC BY 4.0，并说明 Tind 100 所作的选择、组合、计算、取整与排序。文件不含用户数据、App 源代码、地图切片、私人通信或原始证据。"
            ],
            "links": [
              [
                "下载目录快照（JSON）",
                "open-data/seed_peaks-v1.17.0-build41.json"
              ],
              [
                "SHA-256 校验值",
                "open-data/seed_peaks-v1.17.0-build41.json.sha256"
              ]
            ]
          },
          {
            "title": "官方来源入口",
            "body": [
              "以下链接是来源方自己的数据目录或服务条目。"
            ],
            "links": [
              [
                "SSR / 地名",
                "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr",
                "external"
              ],
              [
                "Kommuneinfo",
                "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api",
                "external"
              ],
              [
                "第三方声明",
                "../third-party-notices/"
              ]
            ]
          },
          {
            "title": "地图切片属于独立权利边界",
            "body": [
              "Kartverket 在线徒步地图最高显示至缩放级别 17。在来源允许的情况下，App 会自动将实际查看过且符合条件的 5–16 级瓦片缓存到磁盘。缓存最多为 128 MiB、4096 个瓦片，保留时间最长七天，也可能依据来源响应缩短。它并非完整离线地图。Kartverket 会收到可显示地图区域的瓦片坐标（x/y/z）及 IP 地址等常规网络信息。不提供新的 Kartverket 区域下载。 地图数据 © Kartverket。请参阅来源条款和许可。Kartverket 未批准 Tind 100，也未核验其质量。", "OSM 区域只有在你选择并确认一个区域后才会下载。下载通过 HTTPS 从 GitHub Releases 及 GitHub 文件托管域名 github.com、release-assets.githubusercontent.com 或 objects.githubusercontent.com 获取。托管方会收到 IP 地址、文件网址中表示的所选区域以及 App 的 User-Agent；请求不发送 GPS 位置、路线轨迹或 Game Center ID。地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。地图包包含 0–14 级源数据，最高可显示至 16 级；超过 14 级只会放大已有数据，不增加细节。",
              "地图瓦片的条款与山峰目录的许可相互独立。App 的产品上限为在线 17 级、离线 16 级。这些上限不授予普遍分享或重新分发地图瓦片的权利。请查阅 Kartverket 服务条款及相应来源标注。"
            ],
            "tone": "notice",
            "links": [
              [
                "第三方声明",
                "../third-party-notices/"
              ],
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "地理选点参考了挪威统计局（SSB）2025年1公里网格人口数据，使用许可为 NLOD 1.0。Tind 100 将数据处理为直线距离估算，并非行程时间或合法通行的确认。SSB 未认可此选点结果。"
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      }
    },

    "third-party-notices": {
      nb: {
        "eyebrow": "Lisenser og tjenester",
        "title": "Tredjepartsmerknader",
        "lead": "Denne siden identifiserer tredjepartstjenester, data, lisenser og kreditering som er relevante for Tind 100 versjon 1.18.0 (bygg 45). Den er ikke juridisk rådgivning eller en garanti.",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 bruker Apple Maps/MapKit til kart, geokoding og fylkesoppslag. Game Center/iCloud brukes til fremdrift bare når du velger synk og kontobekreftelsen tillater det. Apple behandler nødvendige konto-, tjeneste-, nettverks- og sikkerhetskopidata etter sine egne vilkår og personvernregler.",
              "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone og iOS er navn eller varemerker som tilhører Apple Inc. Bruken innebærer ikke at Apple anbefaler eller kvalitetssikrer Tind 100."
            ],
            "links": [
              [
                "Apples personvern",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "Apples standard EULA",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverkets åpne katalogdata",
            "body": [
              "Offisielle stedsnavn og identifikatorer kommer fra SSR © Kartverket under CC BY 4.0, og administrativ tilordning kontrolleres med Kommuneinfo © Kartverket under CC BY 4.0. Høyder og representative toppkoordinater er utledet fra NHM/DTM-terrengdata © Kartverket; CC BY 4.0 gjelder der de lenkede kildemetadataene angir dette, og utgiveren må bevare tjenestespesifikk rettighetsdokumentasjon for detaljerte data. Tind 100 har valgt, kombinert, beregnet, avrundet og rangert dataene. Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti."
            ],
            "links": [
              [
                "Åpne data og lisens",
                "../open-data/"
              ],
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverkets nettkart, kartbuffer og OSM-områder",
            "body": [
              "Kartverkets turkart vises på nett til zoomnivå 17. Appen mellomlagrer automatisk kvalifiserte fliser som faktisk vises, på disk for zoomnivå 5–16 når kilden tillater det. Bufferen er begrenset til 128 MiB og 4 096 fliser, med levetid høyst sju dager og eventuelt kortere etter svaret fra kilden. Den er ikke et komplett offlinekart. Kartverket mottar flisekoordinater (x/y/z), som viser kartområdet, og vanlige nettverksopplysninger som IP-adresse. Det finnes ingen ny områdenedlasting fra Kartverket. Kartdata © Kartverket. Se kildenes vilkår og lisenser. Kartverket har ikke godkjent eller kvalitetssikret Tind 100.", "OSM-kartområder lastes bare ned etter at du velger og bekrefter ett område. Nedlastingen bruker HTTPS fra GitHub Releases og GitHubs filverter github.com, release-assets.githubusercontent.com eller objects.githubusercontent.com. Filverten mottar IP-adresse, valgt område gjennom filadressen og appens User-Agent; forespørselen sender ikke GPS-posisjon, rutespor eller Game Center-ID. Kartene bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Pakkene har kildedata på zoomnivå 0–14 og kan vises til nivå 16; forstørring over 14 tilfører ikke flere detaljer.",
              "Kartflisenes bruksvilkår er atskilt fra toppkatalogens lisens. Appens produktgrenser er zoom 17 på nett og zoom 16 uten nett. Disse grensene gir ikke en generell rett til å dele eller videredistribuere kartfliser. Se Kartverkets tjenestevilkår og aktuell kildekreditering."
            ],
            "tone": "notice",
            "links": [
              [
                "Kartverkets bruksvilkår",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap og Overpass",
            "body": [
              "Regionalt nedlastbare kart bruker © OpenStreetMap-bidragsytere under ODbL 1.0. Kildedato og dekning vises for området; stier og andre data kan være feil eller mangle. Dette er atskilt fra den forhåndsinstallerte toppkatalogen. Denne versjonen sender ingen katalogforespørsler til Overpass. Den eldre Overpass-importøren finnes bare som utviklerkilde og er ikke med i vanlige appbygg. Kartvertene og OSM-datalisensen er separate forhold."
            ],
            "links": [
              [
                "OpenStreetMaps opphavsrett og ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Overpass-bruk",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "Dette nettstedet driftes med GitHub Pages. Nettstedet har ingen egne analyseverktøy, annonsepiksler eller informasjonskapsler. GitHub kan behandle IP-adresse og andre tekniske besøksdata for sikkerhet og drift etter sin egen personvernerklæring."
            ],
            "links": [
              [
                "GitHubs personvern",
                "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "Deling og eksterne lenker",
            "body": [
              "Deling til andre tjenester starter bare når brukeren velger det. Delingslenken kan inneholde alias, statistikk, dato og begrensede toppopplysninger, men ikke toppkoordinat eller rutespor. Når en bruker sender til en delingstjeneste eller åpner Varsom, Fjellvettreglene eller et annet nettsted, gjelder tredjepartens egne vilkår og personvernregler."
            ],
            "links": [
              [
                "Personvern",
                "../privacy/"
              ],
              [
                "Vilkår",
                "../terms/"
              ]
            ]
          },
          {
            "title": "Merknad om navn og garantier",
            "body": [
              "Alle tredjepartsnavn, merker og tjenester tilhører sine respektive eiere. Kreditering eller interoperabilitet innebærer ikke sponsing, anbefaling eller godkjenning. Opplysningene kan endres; kontroller alltid de lenkede originalvilkårene og be om profesjonell rådgivning når det er nødvendig."
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Det geografiske utvalget bygger blant annet på Statistisk sentralbyrå (SSB), Befolkning på rutenett 1 km 2025, under NLOD 1.0. Tind 100 har bearbeidet dataene til anslag for nærhet i luftlinje, ikke reisetid eller bekreftelse på lovlig adkomst. SSB har ikke godkjent utvalget."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      en: {
        "eyebrow": "Licences and services",
        "title": "Third-party notices",
        "lead": "This page identifies third-party services, data, licences and attribution relevant to Tind 100 version 1.18.0 (build 45). It is not legal advice or a guarantee.",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 uses Apple Maps/MapKit for maps, geocoding and county lookup. Game Center/iCloud is used for progress only when you choose sync and account confirmation permits it. Apple processes the necessary account, service, network and backup data under its own terms and privacy rules.",
              "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone and iOS are names or trademarks of Apple Inc. Their use does not mean Apple endorses or quality-assures Tind 100."
            ],
            "links": [
              [
                "Apple Privacy",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "Apple Standard EULA",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverket open catalogue data",
            "body": [
              "Official place names and identifiers come from SSR © Kartverket under CC BY 4.0, and administrative assignment is checked with Kommuneinfo © Kartverket under CC BY 4.0. Elevations and representative summit coordinates are derived from NHM/DTM terrain data © Kartverket; CC BY 4.0 applies where identified in the linked source metadata, and the publisher must retain service-specific rights confirmation for detailed inputs. Tind 100 selected, combined, calculated, rounded and ranked the data. Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty."
            ],
            "links": [
              [
                "Open data and licence",
                "../open-data/"
              ],
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverket online map, map cache and OSM areas",
            "body": [
              "The online Kartverket hiking map is displayed up to zoom 17. The app automatically caches eligible tiles you actually view on disk at zoom levels 5–16 when the source permits it. The cache is limited to 128 MiB and 4,096 tiles, retained for at most seven days and possibly less depending on the source response. It is not a complete offline map. Kartverket receives tile coordinates (x/y/z), revealing the map area, and ordinary network information such as your IP address. No new Kartverket area download is offered. Map data © Kartverket. See the source terms and licences. Kartverket has not endorsed or quality-assured Tind 100.", "OSM map areas download only after you select and confirm one area. Downloads use HTTPS from GitHub Releases and GitHub file hosts github.com, release-assets.githubusercontent.com or objects.githubusercontent.com. The host receives your IP address, the selected area through the file URL and the app's User-Agent; the request does not send GPS position, route tracks or Game Center ID. Maps use © OpenStreetMap contributors under ODbL 1.0. Packages contain source data at zoom levels 0–14 and can be displayed up to level 16; enlarging above 14 adds no new detail.",
              "Map-tile terms are separate from the peak catalogue’s licence. The app’s product limits are zoom 17 online and zoom 16 offline. These limits do not grant general rights to share or redistribute map tiles. Consult Kartverket’s service terms and the applicable source attribution."
            ],
            "tone": "notice",
            "links": [
              [
                "Kartverket terms",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap and Overpass",
            "body": [
              "Downloadable regional maps use © OpenStreetMap contributors under ODbL 1.0. The source date and coverage are shown for each area; paths and other data may be wrong or missing. This is separate from the preinstalled peak catalogue. This version sends no catalogue requests to Overpass. The legacy Overpass importer remains only as developer source and is not included in ordinary app builds. File hosting and the OSM data licence are separate matters."
            ],
            "links": [
              [
                "OpenStreetMap copyright and ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Using Overpass",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "This website is hosted with GitHub Pages. It has no first-party analytics, advertising pixels or cookies. GitHub may process IP addresses and other technical visit data for security and operation under its own privacy statement."
            ],
            "links": [
              [
                "GitHub Privacy Statement",
                "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "Sharing and external links",
            "body": [
              "Sharing to another service starts only when the user chooses it. A shared link may contain an alias, statistics, date and limited peak details, but not a summit coordinate or route track. When a user sends to a sharing service or opens Varsom, the Norwegian Mountain Code or another website, that third party’s own terms and privacy rules apply."
            ],
            "links": [
              [
                "Privacy",
                "../privacy/"
              ],
              [
                "Terms",
                "../terms/"
              ]
            ]
          },
          {
            "title": "Names and warranties",
            "body": [
              "All third-party names, marks and services belong to their respective owners. Attribution or interoperability does not imply sponsorship, endorsement or approval. Information may change; always check the linked original terms and seek professional advice where needed."
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Geographic selection uses Statistics Norway (SSB), Population on 1 km grids 2025, under NLOD 1.0. Tind 100 processed the data into straight-line proximity estimates, not travel times or confirmation of public access. SSB has not endorsed this selection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      fr: {
        "eyebrow": "Licences et services",
        "title": "Mentions relatives aux tiers",
        "lead": "Cette page recense les services, données, licences et attributions de tiers pertinents pour Tind 100 version 1.18.0 (compilation 45). Elle ne constitue ni un avis juridique ni une garantie.",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 utilise Apple Maps/MapKit pour les cartes, le géocodage et la recherche de comté. Game Center/iCloud sert à la progression uniquement si vous choisissez la synchronisation et si la confirmation des comptes le permet. Apple traite les données nécessaires de compte, service, réseau et sauvegarde selon ses propres conditions et règles de confidentialité.",
              "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone et iOS sont des noms ou des marques appartenant à Apple Inc. Leur utilisation ne signifie pas qu’Apple cautionne Tind 100 ou en contrôle la qualité."
            ],
            "links": [
              [
                "Confidentialité Apple",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "CLUF standard d’Apple",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Données ouvertes du catalogue de Kartverket",
            "body": [
              "Les noms de lieux et identifiants officiels proviennent de SSR © Kartverket sous licence CC BY 4.0 ; l’affectation administrative est vérifiée avec Kommuneinfo © Kartverket sous CC BY 4.0. Les altitudes et coordonnées représentatives sont dérivées des données topographiques NHM/DTM © Kartverket ; CC BY 4.0 s’applique lorsqu’elle est indiquée dans les métadonnées liées, et l’éditeur doit conserver une confirmation des droits propre au service pour les données détaillées. Tind 100 a sélectionné, combiné, calculé, arrondi et classé les données. Kartverket ne les a ni approuvées ni cautionnées, n’en a pas contrôlé la qualité et ne fournit aucune garantie."
            ],
            "links": [
              [
                "Données ouvertes et licence",
                "../open-data/"
              ],
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Carte Kartverket en ligne, cache et zones OSM",
            "body": [
              "La carte de randonnée Kartverket en ligne s’affiche jusqu’au zoom 17. L’app conserve automatiquement sur disque les tuiles admissibles réellement consultées aux niveaux 5–16, lorsque la source l’autorise. Le cache est limité à 128 Mio et 4 096 tuiles, pour sept jours au maximum, éventuellement moins selon la réponse de la source. Ce n’est pas une carte hors ligne complète. Kartverket reçoit les coordonnées des tuiles (x/y/z), qui révèlent la zone, et des informations réseau habituelles telles que l’adresse IP. Aucun nouveau téléchargement de zone Kartverket n’est proposé. Données cartographiques © Kartverket. Consultez les conditions et licences des sources. Kartverket n’a ni approuvé Tind 100 ni vérifié sa qualité.", "Les zones OSM ne sont téléchargées qu’après sélection et confirmation d’une zone. Le téléchargement utilise HTTPS depuis GitHub Releases et les hôtes GitHub github.com, release-assets.githubusercontent.com ou objects.githubusercontent.com. L’hôte reçoit l’adresse IP, la zone choisie via l’adresse du fichier et le User-Agent de l’app ; la requête n’envoie ni position GPS, ni traces, ni identifiant Game Center. Les cartes utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. Les paquets contiennent les niveaux source 0–14 et peuvent s’afficher jusqu’au niveau 16 ; au-delà de 14, l’agrandissement n’ajoute aucun détail.",
              "Les conditions des tuiles cartographiques sont distinctes de la licence du catalogue des sommets. Les limites de l’app sont le zoom 17 en ligne et le zoom 16 hors ligne. Elles ne confèrent aucun droit général de partage ou de redistribution des tuiles. Consultez les conditions du service de Kartverket et l’attribution des sources concernées."
            ],
            "tone": "notice",
            "links": [
              [
                "Conditions de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap et Overpass",
            "body": [
              "Les cartes régionales téléchargeables utilisent les données © les contributeurs OpenStreetMap sous ODbL 1.0. La date des données et la couverture sont indiquées pour chaque zone ; sentiers et autres données peuvent être erronés ou absents. Elles sont distinctes du catalogue de sommets préinstallé. Cette version n’envoie aucune requête de catalogue à Overpass. L’ancien importateur Overpass est conservé uniquement comme code source de développement et n’est pas inclus dans les compilations ordinaires de l’app. L’hébergement des fichiers et la licence OSM sont distincts."
            ],
            "links": [
              [
                "Droits d’auteur d’OpenStreetMap et ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Utilisation d’Overpass",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "Ce site web est hébergé avec GitHub Pages. Le site lui-même n’utilise aucun outil d’analyse, pixel publicitaire ou cookie. GitHub peut traiter les adresses IP et d’autres données techniques de visite à des fins de sécurité et d’exploitation, conformément à sa propre déclaration de confidentialité."
            ],
            "links": [
              [
                "Déclaration de confidentialité de GitHub",
                "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "Partage et liens externes",
            "body": [
              "Le partage vers un autre service n’est déclenché que lorsque l’utilisateur le choisit. Un lien partagé peut contenir un alias, des statistiques, une date et des informations limitées sur un sommet, mais ni les coordonnées du sommet ni une trace d’itinéraire. Lorsqu’un utilisateur transmet des données à un service de partage ou ouvre Varsom, le Code norvégien de la montagne ou un autre site web, les propres conditions et règles de confidentialité de ce tiers s’appliquent."
            ],
            "links": [
              [
                "Confidentialité",
                "../privacy/"
              ],
              [
                "Conditions",
                "../terms/"
              ]
            ]
          },
          {
            "title": "Noms et garanties",
            "body": [
              "Tous les noms, marques et services tiers appartiennent à leurs propriétaires respectifs. Une attribution ou une interopérabilité n’implique aucun parrainage, soutien ou agrément. Les informations peuvent évoluer ; consultez toujours les conditions originales accessibles par les liens et sollicitez un avis professionnel lorsque cela est nécessaire."
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La sélection géographique utilise les données de Statistics Norway (SSB), population sur une grille de 1 km en 2025, sous licence NLOD 1.0. Tind 100 les a transformées en estimations de proximité à vol d’oiseau, et non en temps de trajet ou en confirmation d’un accès autorisé. SSB n’a pas approuvé cette sélection."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      es: {
        "eyebrow": "Licencias y servicios",
        "title": "Avisos de terceros",
        "lead": "Esta página identifica servicios, datos, licencias y atribuciones de terceros relevantes para Tind 100 versión 1.18.0 (compilación 45). No constituye asesoramiento jurídico ni una garantía.",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 usa Apple Maps/MapKit para mapas, geocodificación y búsqueda de provincia. Game Center/iCloud solo se usa para el progreso si eliges sincronizar y la confirmación de cuentas lo permite. Apple trata los datos necesarios de cuenta, servicio, red y copias según sus propias condiciones y normas de privacidad.",
              "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone e iOS son nombres o marcas de Apple Inc. Su uso no significa que Apple respalde o verifique Tind 100."
            ],
            "links": [
              [
                "Privacidad de Apple",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "EULA estándar de Apple",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Datos abiertos de catálogo de Kartverket",
            "body": [
              "Los topónimos e identificadores oficiales proceden de SSR © Kartverket bajo CC BY 4.0; la división administrativa se comprueba con Kommuneinfo © Kartverket bajo CC BY 4.0. Las altitudes y coordenadas representativas se derivan de datos de terreno NHM/DTM © Kartverket; CC BY 4.0 se aplica cuando así se indica en los metadatos enlazados, y el editor debe conservar una confirmación de derechos específica del servicio para los datos detallados. Tind 100 seleccionó, combinó, calculó, redondeó y ordenó los datos. Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías."
            ],
            "links": [
              [
                "Datos abiertos y licencia",
                "../open-data/"
              ],
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Mapa de Kartverket en línea, caché y zonas OSM",
            "body": [
              "El mapa de senderismo de Kartverket en línea se muestra hasta el zoom 17. La app guarda automáticamente en disco las teselas permitidas que realmente visualizas, de los niveles 5–16, cuando la fuente lo permite. La caché se limita a 128 MiB y 4096 teselas durante un máximo de siete días, o menos según la respuesta de la fuente. No es un mapa sin conexión completo. Kartverket recibe coordenadas de teselas (x/y/z), que revelan la zona, e información de red habitual como la dirección IP. No se ofrece una nueva descarga de zonas de Kartverket. Datos cartográficos © Kartverket. Consulta las condiciones y licencias de las fuentes. Kartverket no ha respaldado Tind 100 ni verificado su calidad.", "Las zonas OSM solo se descargan tras seleccionar y confirmar una zona. La descarga usa HTTPS desde GitHub Releases y los servidores github.com, release-assets.githubusercontent.com u objects.githubusercontent.com. El servidor recibe la dirección IP, la zona elegida mediante la URL del archivo y el User-Agent de la app; la solicitud no envía posición GPS, trazados de rutas ni ID de Game Center. Los mapas usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Los paquetes contienen datos fuente en niveles 0–14 y pueden mostrarse hasta el 16; ampliar por encima de 14 no añade detalle.",
              "Las condiciones de las teselas son independientes de la licencia del catálogo de cumbres. Los límites del producto son zoom 17 en línea y zoom 16 sin conexión. No otorgan derechos generales para compartir o redistribuir teselas. Consulta las condiciones del servicio de Kartverket y la atribución de cada fuente."
            ],
            "tone": "notice",
            "links": [
              [
                "Condiciones de Kartverket",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap y Overpass",
            "body": [
              "Los mapas regionales descargables usan © colaboradores de OpenStreetMap bajo ODbL 1.0. Se muestran la fecha de los datos y la cobertura de cada zona; los senderos y otros datos pueden ser erróneos o faltar. Son independientes del catálogo de cumbres preinstalado. Esta versión no envía solicitudes de catálogo a Overpass. El importador antiguo de Overpass se conserva solo como código fuente de desarrollo y no se incluye en las compilaciones normales de la app. El alojamiento de archivos y la licencia OSM son asuntos distintos."
            ],
            "links": [
              [
                "OpenStreetMap y ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Uso de Overpass",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "Este sitio se aloja con GitHub Pages. No contiene análisis propios, píxeles publicitarios ni cookies propias. GitHub puede tratar direcciones IP y otros datos técnicos para seguridad y funcionamiento conforme a su propia declaración."
            ],
            "links": [
              [
                "Privacidad de GitHub",
                "https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "Compartir y enlaces externos",
            "body": [
              "Compartir con otro servicio comienza solo cuando el usuario lo elige. El enlace puede contener alias, estadísticas, fecha y datos limitados de la cumbre, pero no la coordenada de la cumbre ni el recorrido. Al enviar a un servicio o abrir Varsom, el Código de Montaña noruego u otra web, se aplican sus propias condiciones y normas de privacidad."
            ],
            "links": [
              [
                "Privacidad",
                "../privacy/"
              ],
              [
                "Condiciones",
                "../terms/"
              ]
            ]
          },
          {
            "title": "Nombres y garantías",
            "body": [
              "Todos los nombres, marcas y servicios de terceros pertenecen a sus respectivos propietarios. La atribución o interoperabilidad no implica patrocinio, respaldo ni aprobación. La información puede cambiar; consulta siempre las condiciones originales enlazadas y solicita asesoramiento profesional cuando sea necesario."
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "La selección geográfica utiliza datos de Statistics Norway (SSB), población en cuadrículas de 1 km de 2025, bajo NLOD 1.0. Tind 100 los ha transformado en estimaciones de proximidad en línea recta, no en tiempos de viaje ni en confirmaciones de acceso permitido. SSB no ha aprobado esta selección."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      de: {
        "eyebrow": "Lizenzen und Dienste",
        "title": "Hinweise zu Drittanbietern",
        "lead": "Diese Seite nennt Drittanbieterdienste, Daten, Lizenzen und Namensnennungen für Tind 100 Version 1.18.0 (Build 45). Sie ist keine Rechtsberatung oder Garantie.",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 nutzt Apple Maps/MapKit für Karten, Geocodierung und Provinzsuche. Game Center/iCloud wird für Fortschritt nur verwendet, wenn du die Synchronisierung wählst und die Kontobestätigung sie zulässt. Apple verarbeitet notwendige Konto-, Dienst-, Netzwerk- und Sicherungsdaten nach eigenen Bedingungen und Datenschutzregeln.",
              "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone und iOS sind Namen oder Marken von Apple Inc. Ihre Nutzung bedeutet nicht, dass Apple Tind 100 empfiehlt oder qualitätsgesichert hat."
            ],
            "links": [
              [
                "Apple Datenschutz",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "Apple Standard EULA",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Offene Katalogdaten von Kartverket",
            "body": [
              "Offizielle Ortsnamen und Kennungen stammen aus SSR © Kartverket unter CC BY 4.0; die Verwaltungszuordnung wird mit Kommuneinfo © Kartverket unter CC BY 4.0 geprüft. Höhen und repräsentative Gipfelkoordinaten sind aus NHM/DTM-Geländedaten © Kartverket abgeleitet. CC BY 4.0 gilt dort, wo die verlinkten Quellmetadaten dies angeben; für detaillierte Daten muss der Herausgeber eine dienstspezifische Rechtebestätigung aufbewahren. Tind 100 hat die Daten ausgewählt, kombiniert, berechnet, gerundet und geordnet. Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr."
            ],
            "links": [
              [
                "Offene Daten und Lizenz",
                "../open-data/"
              ],
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverket-Onlinekarte, Kartencache und OSM-Gebiete",
            "body": [
              "Kartverkets Online-Wanderkarte wird bis Zoomstufe 17 angezeigt. Tatsächlich betrachtete zulässige Kacheln der Stufen 5–16 speichert die App automatisch auf dem Gerät, sofern die Quelle dies erlaubt. Der Cache ist auf 128 MiB und 4.096 Kacheln begrenzt, für höchstens sieben Tage oder kürzer entsprechend der Antwort der Quelle. Er ist keine vollständige Offlinekarte. Kartverket erhält Kachelkoordinaten (x/y/z), die das Kartengebiet erkennen lassen, und übliche Netzwerkinformationen wie die IP-Adresse. Neue Kartverket-Gebietsdownloads werden nicht angeboten. Kartendaten © Kartverket. Beachte die Bedingungen und Lizenzen der Quellen. Kartverket hat Tind 100 weder genehmigt noch qualitätsgeprüft.", "OSM-Gebiete werden erst nach Auswahl und Bestätigung eines Gebiets heruntergeladen. Downloads erfolgen über HTTPS von GitHub Releases und den GitHub-Dateihostern github.com, release-assets.githubusercontent.com oder objects.githubusercontent.com. Der Hoster erhält IP-Adresse, gewähltes Gebiet über die Datei-URL und den User-Agent der App; GPS-Position, Routenspuren oder Game-Center-ID werden nicht mitgesendet. Die Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Pakete enthalten Quelldaten der Zoomstufen 0–14 und können bis Stufe 16 angezeigt werden; Vergrößerung über 14 ergänzt keine Details.",
              "Für Kartenkacheln gelten andere Bedingungen als für die Lizenz des Gipfelkatalogs. Die Produktgrenzen sind Zoom 17 online und Zoom 16 offline. Sie gewähren keine allgemeinen Rechte zum Teilen oder Weiterverbreiten von Kartenkacheln. Beachte Kartverkets Dienstbedingungen und die jeweilige Quellenangabe."
            ],
            "tone": "notice",
            "links": [
              [
                "Kartverket-Bedingungen",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap und Overpass",
            "body": [
              "Herunterladbare regionale Karten verwenden © OpenStreetMap-Mitwirkende unter ODbL 1.0. Datenstand und Abdeckung werden je Gebiet angezeigt; Wege und andere Daten können falsch sein oder fehlen. Dies ist vom vorinstallierten Gipfelkatalog getrennt. Diese Version sendet keine Kataloganfragen an Overpass. Der ältere Overpass-Importer bleibt nur als Entwicklungsquellcode erhalten und ist nicht in normalen App-Builds enthalten. Dateihosting und OSM-Datenlizenz sind getrennte Themen."
            ],
            "links": [
              [
                "OpenStreetMap und ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Overpass-Nutzung",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "Diese Website wird mit GitHub Pages betrieben. Sie hat keine eigenen Analysewerkzeuge, Werbepixel oder Cookies. GitHub kann IP-Adressen und andere technische Besuchsdaten für Sicherheit und Betrieb nach seiner eigenen Datenschutzerklärung verarbeiten."
            ],
            "links": [
              [
                "GitHub-Datenschutz",
                "https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "Teilen und externe Links",
            "body": [
              "Das Teilen mit einem anderen Dienst startet nur nach Auswahl durch den Nutzer. Der Link kann Alias, Statistiken, Datum und begrenzte Gipfeldaten enthalten, aber keine Gipfelkoordinate und keinen Routentrack. Beim Senden an einen Dienst oder Öffnen von Varsom, dem norwegischen Bergkodex oder einer anderen Website gelten deren eigene Bedingungen und Datenschutzregeln."
            ],
            "links": [
              [
                "Datenschutz",
                "../privacy/"
              ],
              [
                "Bedingungen",
                "../terms/"
              ]
            ]
          },
          {
            "title": "Namen und Gewährleistung",
            "body": [
              "Alle Namen, Marken und Dienste Dritter gehören ihren jeweiligen Eigentümern. Namensnennung oder Interoperabilität bedeuten keine Förderung, Empfehlung oder Genehmigung. Informationen können sich ändern; prüfe stets die verlinkten Originalbedingungen und hole bei Bedarf professionelle Beratung ein."
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "Die geografische Auswahl nutzt Bevölkerungsdaten von Statistics Norway (SSB) im 1-km-Raster für 2025 unter NLOD 1.0. Tind 100 hat daraus Luftlinienentfernungen abgeleitet, keine Reisezeiten oder Bestätigungen eines erlaubten Zugangs. SSB hat diese Auswahl nicht genehmigt."
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      },
      "zh-Hans": {
        "eyebrow": "许可与服务",
        "title": "第三方声明",
        "lead": "本页列明与 Tind 100 1.18.0 版（构建 45）有关的第三方服务、数据、许可和署名。本页不构成法律意见或保证。",
        "dated": true,
        "sections": [
          {
            "title": "Apple",
            "body": [
              "Tind 100 使用 Apple Maps/MapKit 提供地图、地理编码和郡查询。只有选择同步且账户确认允许时，才会通过 Game Center/iCloud 保存进度。Apple 按照其自身条款和隐私规则处理必要的账户、服务、网络及备份数据。",
              "Apple、Apple Maps、MapKit、Game Center、iCloud、iPhone 和 iOS 是 Apple Inc. 的名称或商标。使用这些名称并不表示 Apple 对 Tind 100 进行背书或质量核验。"
            ],
            "links": [
              [
                "Apple 隐私",
                "https://www.apple.com/legal/privacy/",
                "external"
              ],
              [
                "Apple 标准 EULA",
                "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverket 开放目录数据",
            "body": [
              "官方地名和标识来自采用 CC BY 4.0 的 SSR © Kartverket；行政归属使用采用 CC BY 4.0 的 Kommuneinfo © Kartverket 核对。海拔和代表性山顶坐标由 NHM/DTM 地形数据 © Kartverket 派生。CC BY 4.0 仅适用于链接的来源元数据明确标明采用该许可的数据；发布者必须保留详细数据所用服务的专门权利确认。Tind 100 对数据进行了选择、组合、计算、取整和排序。Kartverket 未批准、背书或质量核验 Tind 100，也不提供保证。"
            ],
            "links": [
              [
                "开放数据与许可",
                "../open-data/"
              ],
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "Kartverket 在线地图、缓存与 OSM 区域",
            "body": [
              "Kartverket 在线徒步地图最高显示至缩放级别 17。在来源允许的情况下，App 会自动将实际查看过且符合条件的 5–16 级瓦片缓存到磁盘。缓存最多为 128 MiB、4096 个瓦片，保留时间最长七天，也可能依据来源响应缩短。它并非完整离线地图。Kartverket 会收到可显示地图区域的瓦片坐标（x/y/z）及 IP 地址等常规网络信息。不提供新的 Kartverket 区域下载。 地图数据 © Kartverket。请参阅来源条款和许可。Kartverket 未批准 Tind 100，也未核验其质量。", "OSM 区域只有在你选择并确认一个区域后才会下载。下载通过 HTTPS 从 GitHub Releases 及 GitHub 文件托管域名 github.com、release-assets.githubusercontent.com 或 objects.githubusercontent.com 获取。托管方会收到 IP 地址、文件网址中表示的所选区域以及 App 的 User-Agent；请求不发送 GPS 位置、路线轨迹或 Game Center ID。地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。地图包包含 0–14 级源数据，最高可显示至 16 级；超过 14 级只会放大已有数据，不增加细节。",
              "地图瓦片的条款与山峰目录的许可相互独立。App 的产品上限为在线 17 级、离线 16 级。这些上限不授予普遍分享或重新分发地图瓦片的权利。请查阅 Kartverket 服务条款及相应来源标注。"
            ],
            "tone": "notice",
            "links": [
              [
                "Kartverket 使用条款",
                "https://www.kartverket.no/api-og-data/vilkar-for-bruk",
                "external"
              ],
              [
                "CC BY 4.0",
                "https://creativecommons.org/licenses/by/4.0/",
                "external"
              ]
            ]
          },
          {
            "title": "OpenStreetMap 与 Overpass",
            "body": [
              "可下载区域地图使用依据 ODbL 1.0 提供的 © OpenStreetMap 贡献者数据。每个区域会显示数据日期和覆盖范围；步道及其他数据可能有误或缺失。这些地图与预装山峰目录相互独立。此版本不会向 Overpass 发送目录请求。旧版 Overpass 导入器仅保留为开发源码，不包含在普通 App 构建中。文件托管和 OSM 数据许可属于不同事项。"
            ],
            "links": [
              [
                "OpenStreetMap 与 ODbL",
                "https://www.openstreetmap.org/copyright",
                "external"
              ],
              [
                "Overpass 使用说明",
                "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html",
                "external"
              ]
            ]
          },
          {
            "title": "GitHub Pages",
            "body": [
              "本网站由 GitHub Pages 托管，不使用第一方分析工具、广告像素或 Cookie。GitHub 可能依据其自身隐私声明，为安全和运营处理 IP 地址及其他技术访问数据。"
            ],
            "links": [
              [
                "GitHub 隐私声明",
                "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement",
                "external"
              ]
            ]
          },
          {
            "title": "分享与外部链接",
            "body": [
              "只有用户主动选择后，才会向其他服务分享。分享链接可能包含昵称、统计、日期和有限的山峰资料，但不包含山峰坐标或路线轨迹。向分享服务发送内容，或打开 Varsom、挪威山区安全守则及其他网站后，适用相应第三方的条款和隐私规则。"
            ],
            "links": [
              [
                "隐私",
                "../privacy/"
              ],
              [
                "条款",
                "../terms/"
              ]
            ]
          },
          {
            "title": "名称与保证",
            "body": [
              "所有第三方名称、商标和服务均归各自所有者。署名或互操作并不表示赞助、背书或批准。信息可能变化；请始终核对所链接的原始条款，并在需要时寻求专业意见。"
            ],
            "tone": "warning"
          },
          {
            "title": "SSB · NLOD 1.0",
            "body": [
              "地理选点参考了挪威统计局（SSB）2025年1公里网格人口数据，使用许可为 NLOD 1.0。Tind 100 将数据处理为直线距离估算，并非行程时间或合法通行的确认。SSB 未认可此选点结果。"
            ],
            "links": [
              [
                "SSB · 2025",
                "https://kartkatalog.geonorge.no/Metadata/uuid/25c70158-5841-4801-8bf3-fc3c5adf5329",
                "external"
              ],
              [
                "NLOD 1.0",
                "https://data.norge.no/nlod/no/1.0",
                "external"
              ]
            ]
          }
        ]
      }
    },

    terms: {
      nb: { eyebrow: "Rammer for bruk", title: "Vilkår", lead: "Disse opplysningene supplerer Apples standard sluttbrukerlisens og sikkerhetsinformasjonen for Tind 100.", dated: true, sections: [
        { title: "Lisens", body: ["Med mindre en egen lisensavtale uttrykkelig er oppgitt i App Store Connect, brukes Tind 100 under Apples standard sluttbrukerlisens for apper. Disse nettsidevilkårene erstatter ikke den avtalen."], links: [["Apples standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Tillatt bruk", body: ["Bruk appen lovlig og med respekt for natur, grunneiere, verneområder og andre mennesker. Ikke bruk funksjonene til å villede, trakassere, få uautorisert tilgang eller omgå begrensninger i eksterne tjenester."] },
        { title: "Ingen sikkerhetsgaranti", body: ["Appen er et inspirasjons- og registreringsverktøy, ikke et navigasjons-, rednings- eller sikkerhetssystem. Opplysninger og teknologi kan svikte. Se Sikkerhet og ansvar før tur."], links: [["Sikkerhet og ansvar", "../safety/"]] },
        { title: "Poeng og verifikasjon", body: ["Poeng, GPS-innsjekking og andre statuser er motivasjonsfunksjoner. De er ikke offisielt bevis på bestigning, rett til ferdsel, eierskap, helseprestasjon eller sikker gjennomføring."] },
        { title: "Tredjepartstjenester og innhold", body: ["Apple, Kartverket, OpenStreetMap/Overpass og delingstjenester har egne vilkår. Bruken av appen eller nettstedet gir ikke i seg selv nye rettigheter til tredjepartsinnhold. Ingenting her begrenser rettigheter som gis direkte under CC BY 4.0, ODbL eller en annen identifisert lisens; viderebruk må følge den aktuelle lisensen og krediteringskravene."], links: [["Åpne data", "../open-data/"], ["Tredjepartsmerknader", "../third-party-notices/"]] },
        { title: "Tilgjengelighet og endringer", body: ["Funksjoner kan endres, avbrytes eller være utilgjengelige på grunn av nett, enhet, tjenesteleverandør, sikkerhet, lov eller vedlikehold. Vesentlige endringer i personvern beskrives i personvernerklæringen."] },
        { title: "Ufravikelig lov", body: ["Ingenting her begrenser forbrukerrettigheter, personvernrettigheter eller ansvar som ikke lovlig kan fravikes."] }
      ]},
      en: { eyebrow: "Conditions of use", title: "Terms", lead: "This information supplements Apple’s standard end-user licence and the Tind 100 safety notice.", dated: true, sections: [
        { title: "Licence", body: ["Unless a custom agreement is expressly provided in App Store Connect, Tind 100 is used under Apple’s standard end-user licence for apps. These website terms do not replace that agreement."], links: [["Apple Standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Permitted use", body: ["Use the app lawfully and with respect for nature, landowners, protected areas and other people. Do not use features to deceive, harass, gain unauthorised access or evade external-service limits."] },
        { title: "No safety guarantee", body: ["The app is an inspiration and logging tool, not a navigation, rescue or safety system. Information and technology can fail. Read Safety and responsibility before a hike."], links: [["Safety and responsibility", "../safety/"]] },
        { title: "Points and verification", body: ["Points, GPS check-in and other statuses are motivational features. They are not official proof of an ascent, access rights, ownership, health performance or safe completion."] },
        { title: "Third-party services and content", body: ["Apple, Kartverket, OpenStreetMap/Overpass and sharing services have their own terms. Using the app or website does not itself create new rights in third-party content. Nothing here limits rights granted directly under CC BY 4.0, the ODbL or another identified licence; reuse must follow the applicable licence and attribution requirements."], links: [["Open data", "../open-data/"], ["Third-party notices", "../third-party-notices/"]] },
        { title: "Availability and changes", body: ["Features may change, stop or be unavailable because of network, device, provider, security, law or maintenance. Material privacy changes will be described in the privacy policy."] },
        { title: "Non-waivable law", body: ["Nothing here limits consumer rights, privacy rights or liability that cannot lawfully be excluded."] }
      ]},
      fr: { eyebrow: "Conditions d’utilisation", title: "Conditions", lead: "Ces informations complètent le contrat de licence utilisateur final standard d’Apple et l’avis de sécurité de Tind 100.", dated: true, sections: [
        { title: "Licence", body: ["Sauf si un contrat spécifique est expressément fourni dans App Store Connect, l’utilisation de Tind 100 est régie par le contrat de licence utilisateur final standard d’Apple pour les apps. Les présentes conditions du site web ne remplacent pas ce contrat."], links: [["CLUF standard d’Apple", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Utilisation autorisée", body: ["Utilisez l’app dans le respect de la loi, de la nature, des propriétaires fonciers, des espaces protégés et d’autrui. N’utilisez pas ses fonctionnalités pour tromper, harceler, obtenir un accès non autorisé ou contourner les limites imposées par des services externes."] },
        { title: "Aucune garantie de sécurité", body: ["L’app est un outil d’inspiration et de consignation, et non un système de navigation, de secours ou de sécurité. Les informations et les technologies peuvent faire défaut. Consultez « Sécurité et responsabilité » avant toute sortie."], links: [["Sécurité et responsabilité", "../safety/"]] },
        { title: "Points et vérification", body: ["Les points, la vérification GPS et les autres statuts sont des fonctionnalités de motivation. Ils ne constituent pas une preuve officielle d’une ascension, d’un droit d’accès, d’un droit de propriété, d’une performance physique ou d’une réalisation en toute sécurité."] },
        { title: "Services et contenus tiers", body: ["Apple, Kartverket, OpenStreetMap/Overpass et les services de partage appliquent leurs propres conditions. L’utilisation de l’app ou du site web n’octroie pas, à elle seule, de nouveaux droits sur les contenus tiers. Rien dans les présentes ne limite les droits accordés directement par la licence CC BY 4.0, l’ODbL ou une autre licence identifiée ; toute réutilisation doit respecter la licence applicable et ses exigences d’attribution."], links: [["Données ouvertes", "../open-data/"], ["Mentions relatives aux tiers", "../third-party-notices/"]] },
        { title: "Disponibilité et modifications", body: ["Les fonctionnalités peuvent être modifiées, interrompues ou indisponibles en raison du réseau, de l’appareil, du fournisseur, de la sécurité, de la loi ou de la maintenance. Toute modification substantielle touchant à la vie privée sera décrite dans la politique de confidentialité."] },
        { title: "Droit impératif", body: ["Rien dans les présentes ne limite les droits des consommateurs, les droits en matière de vie privée ni aucune responsabilité dont l’exclusion est interdite par la loi."] }
      ]},
      es: { eyebrow: "Condiciones de uso", title: "Condiciones", lead: "Esta información complementa la licencia estándar de Apple y la información de seguridad de Tind 100.", dated: true, sections: [
        { title: "Licencia", body: ["Salvo que App Store Connect indique expresamente un acuerdo propio, Tind 100 se usa conforme a la licencia estándar de Apple para apps. Estas condiciones web no sustituyen ese acuerdo."], links: [["EULA estándar de Apple", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Uso permitido", body: ["Usa la app legalmente y respeta la naturaleza, propietarios, espacios protegidos y otras personas. No uses funciones para engañar, acosar, obtener acceso no autorizado ni eludir límites externos."] },
        { title: "Sin garantía de seguridad", body: ["La app sirve para inspiración y registro, no es un sistema de navegación, rescate ni seguridad. La información y la tecnología pueden fallar. Lee Seguridad y responsabilidad antes de salir."], links: [["Seguridad y responsabilidad", "../safety/"]] },
        { title: "Puntos y verificación", body: ["Los puntos, registros GPS y demás estados son funciones de motivación. No prueban oficialmente una ascensión, derecho de acceso, propiedad, rendimiento físico ni finalización segura."] },
        { title: "Servicios y contenido externos", body: ["Apple, Kartverket, OpenStreetMap/Overpass y los servicios de uso compartido tienen sus propias condiciones. Usar la app o web no crea por sí mismo nuevos derechos sobre contenido de terceros. Nada de lo aquí indicado limita los derechos concedidos directamente por CC BY 4.0, ODbL u otra licencia identificada; la reutilización debe cumplir la licencia y atribución aplicables."], links: [["Datos abiertos", "../open-data/"], ["Avisos de terceros", "../third-party-notices/"]] },
        { title: "Disponibilidad y cambios", body: ["Las funciones pueden cambiar, detenerse o no estar disponibles por red, dispositivo, proveedor, seguridad, ley o mantenimiento. Los cambios importantes de privacidad se describirán en su política."] },
        { title: "Derecho irrenunciable", body: ["Nada limita derechos del consumidor, privacidad o responsabilidad que legalmente no puedan excluirse."] }
      ]},
      de: { eyebrow: "Nutzungsbedingungen", title: "Bedingungen", lead: "Diese Hinweise ergänzen Apples Standard-Endnutzerlizenz und die Tind-100-Sicherheitshinweise.", dated: true, sections: [
        { title: "Lizenz", body: ["Sofern in App Store Connect nicht ausdrücklich eine eigene Vereinbarung angegeben ist, gilt für Tind 100 Apples Standard-Endnutzerlizenz für Apps. Diese Website-Bedingungen ersetzen sie nicht."], links: [["Apple Standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Erlaubte Nutzung", body: ["Nutze die App rechtmäßig und mit Rücksicht auf Natur, Grundeigentümer, Schutzgebiete und andere Menschen. Nutze Funktionen nicht für Täuschung, Belästigung, unbefugten Zugriff oder zur Umgehung externer Beschränkungen."] },
        { title: "Keine Sicherheitsgarantie", body: ["Die App ist ein Inspirations- und Aufzeichnungswerkzeug, kein Navigations-, Rettungs- oder Sicherheitssystem. Informationen und Technik können ausfallen. Lies vor der Tour die Sicherheitshinweise."], links: [["Sicherheit und Verantwortung", "../safety/"]] },
        { title: "Punkte und Bestätigung", body: ["Punkte, GPS-Check-in und Status dienen der Motivation. Sie sind kein offizieller Nachweis einer Besteigung, eines Zugangsrechts, Eigentums, einer Gesundheitsleistung oder sicheren Durchführung."] },
        { title: "Drittdienste und Inhalte", body: ["Apple, Kartverket, OpenStreetMap/Overpass und Teilungsdienste haben eigene Bedingungen. Die Nutzung von App oder Website schafft für sich allein keine neuen Rechte an Drittinhalten. Nichts hier beschränkt Rechte, die unmittelbar unter CC BY 4.0, ODbL oder einer anderen genannten Lizenz eingeräumt werden; eine Weiterverwendung muss die jeweilige Lizenz und Namensnennung einhalten."], links: [["Offene Daten", "../open-data/"], ["Hinweise zu Drittanbietern", "../third-party-notices/"]] },
        { title: "Verfügbarkeit und Änderungen", body: ["Funktionen können sich ändern, enden oder wegen Netz, Gerät, Anbieter, Sicherheit, Recht oder Wartung ausfallen. Wesentliche Datenschutzänderungen werden in der Datenschutzerklärung beschrieben."] },
        { title: "Unabdingbares Recht", body: ["Nichts beschränkt Verbraucher- oder Datenschutzrechte oder Haftung, die rechtlich nicht ausgeschlossen werden können."] }
      ]},
      "zh-Hans": { eyebrow: "使用条件", title: "条款", lead: "本说明是 Apple 标准最终用户许可协议及 Tind 100 安全说明的补充。", dated: true, sections: [
        { title: "许可", body: ["除非 App Store Connect 明确提供自定义协议，Tind 100 根据 Apple 的 App 标准最终用户许可协议使用。本网站条款不取代该协议。"], links: [["Apple 标准 EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "允许的使用", body: ["请合法使用 App，并尊重自然、土地所有者、保护区和他人。不得利用功能进行欺骗、骚扰、未授权访问或规避外部服务限制。"] },
        { title: "不提供安全保证", body: ["本 App 用于灵感和记录，并非导航、救援或安全系统。信息和技术可能失效。出行前请阅读“安全与责任”。"], links: [["安全与责任", "../safety/"]] },
        { title: "积分与验证", body: ["积分、GPS 签到和其他状态属于激励功能，并非登顶、通行权、所有权、健康表现或安全完成的官方证明。"] },
        { title: "第三方服务与内容", body: ["Apple、Kartverket、OpenStreetMap/Overpass 和分享服务各有其条款。使用 App 或网站本身不会产生新的第三方内容权利。本说明不限制 CC BY 4.0、ODbL 或其他已识别许可直接授予的权利；继续使用必须遵守相应许可和署名要求。"], links: [["开放数据", "../open-data/"], ["第三方声明", "../third-party-notices/"]] },
        { title: "可用性与变更", body: ["功能可能因网络、设备、服务商、安全、法律或维护而变更、中止或不可用。重大隐私变更将在隐私政策中说明。"] },
        { title: "不可排除的法律权利", body: ["本条款不限制法律规定不得排除的消费者权利、隐私权利或责任。"] }
      ]}
    }
  };

  // The same purchase boundary is used on support, privacy and terms pages.
  // Keep this independent of the App Store's changing local prices.
  const premiumCopy = {
    nb: {
      title: "Premium – valgfritt engangskjøp",
      summary: "Premium i versjon 1.18 er et valgfritt engangskjøp uten abonnement eller automatisk fornyelse. Det gir detaljert fremdriftsstatistikk, personlige månedsmål og ekstra oversikt for offlineplanlegging. Grunnleggende GPS, toppverifisering, rutesporing, kart, nedlasting og sletting av offlinekart samt sikkerhetsinformasjon er gratis. Pris og tilgjengelighet vises i appen før et eventuelt kjøp; informasjonen her betyr ikke at produktet er tilgjengelig ennå.",
      restore: "På en ny installasjon åpner du Profil > Tind 100 Premium > Gjenopprett kjøp med den samme Apple-kontoen som kjøpet ble gjort med. Du trenger nett for å kontrollere kjøpet. Hvis et kjøp venter på godkjenning, betyr det ikke at Premium er aktivert. Vent på avgjørelsen og kontroller statusen i appen. Ikke send passord, engangskoder eller betalingskortopplysninger til oss.",
      privacy: "Apple håndterer betalingen. Appen bruker StoreKit til å kontrollere produkt, pris, kjøpsstatus og Premium-rettighet. Utgiveren mottar ikke kort- eller bankopplysninger gjennom kjøpsflyten og har ingen egen kjøpsserver. Lokal kjøpsstatus brukes bare til å vise riktig tilgang og håndtere et ventende kjøp. En tilbakekalt eller refundert rettighet gir ikke lenger Premium-tilgang; dine gratisfunksjoner og turregistreringer beholdes.",
      help: "Apples hjelp med gjenoppretting", refund: "Be Apple om refusjon"
    },
    en: {
      title: "Premium – an optional one-time purchase",
      summary: "Premium in version 1.18 is an optional one-time purchase with no subscription or automatic renewal. It adds detailed progress statistics, personal monthly goals and extra offline-planning insights. Basic GPS, summit verification, route recording, maps, offline-map downloads and deletion, and safety information remain free. The app shows the price and availability before any purchase; this information does not mean the product is available yet.",
      restore: "After reinstalling, open Profile > Tind 100 Premium > Restore purchase using the same Apple Account used for the purchase. Checking the purchase requires a connection. A purchase awaiting approval does not mean Premium is active. Wait for the decision and check the status in the app. Never send us passwords, one-time codes or payment-card information.",
      privacy: "Apple handles payment. The app uses StoreKit to check the product, price, purchase status and Premium entitlement. The publisher does not receive card or bank details through the purchase flow and has no purchase server. Local purchase status is used only to show the correct access and handle a pending purchase. A revoked or refunded entitlement no longer grants Premium access; free features and your hike records remain available.",
      help: "Apple’s help with restoring purchases", refund: "Request a refund from Apple"
    },
    fr: {
      title: "Premium – un achat unique facultatif",
      summary: "Premium dans la version 1.18 est un achat unique facultatif, sans abonnement ni renouvellement automatique. Il ajoute des statistiques de progression détaillées, des objectifs mensuels personnels et des informations supplémentaires pour la planification hors ligne. Le GPS de base, la vérification des sommets, l’enregistrement des itinéraires, les cartes, le téléchargement et la suppression des cartes hors ligne ainsi que les informations de sécurité restent gratuits. L’app affiche le prix et la disponibilité avant tout achat ; ces informations ne signifient pas que le produit est déjà disponible.",
      restore: "Après une réinstallation, ouvrez Profil > Tind 100 Premium > Restaurer l’achat avec le compte Apple utilisé pour l’achat. La vérification nécessite une connexion. Un achat en attente d’approbation ne signifie pas que Premium est activé. Attendez la décision et vérifiez l’état dans l’app. Ne nous envoyez jamais de mot de passe, de code à usage unique ni de données de carte bancaire.",
      privacy: "Apple traite le paiement. L’app utilise StoreKit pour vérifier le produit, le prix, l’état de l’achat et le droit d’accès à Premium. L’éditeur ne reçoit aucune donnée de carte ou de compte bancaire par ce processus et ne dispose pas de serveur d’achats. L’état local de l’achat sert uniquement à afficher l’accès approprié et à gérer un achat en attente. Un droit révoqué ou remboursé ne donne plus accès à Premium ; les fonctionnalités gratuites et vos sorties enregistrées restent disponibles.",
      help: "Aide Apple pour restaurer des achats", refund: "Demander un remboursement à Apple"
    },
    es: {
      title: "Premium: una compra única opcional",
      summary: "Premium en la versión 1.18 es una compra única opcional, sin suscripción ni renovación automática. Añade estadísticas de progreso detalladas, objetivos mensuales personales e información adicional para planificar sin conexión. El GPS básico, la verificación de cumbres, la grabación de rutas, los mapas, la descarga y eliminación de mapas sin conexión y la información de seguridad siguen siendo gratuitos. La app muestra el precio y la disponibilidad antes de cualquier compra; esta información no significa que el producto ya esté disponible.",
      restore: "Tras reinstalar, abre Perfil > Tind 100 Premium > Restaurar compra con la misma cuenta de Apple utilizada para comprar. La comprobación requiere conexión. Una compra pendiente de aprobación no significa que Premium esté activo. Espera la decisión y comprueba el estado en la app. Nunca nos envíes contraseñas, códigos de un solo uso ni datos de tarjetas de pago.",
      privacy: "Apple gestiona el pago. La app utiliza StoreKit para comprobar el producto, el precio, el estado de compra y el derecho a Premium. El editor no recibe datos de tarjetas o cuentas bancarias mediante este proceso y no dispone de servidor de compras. El estado local solo se usa para mostrar el acceso correcto y gestionar una compra pendiente. Un derecho revocado o reembolsado deja de dar acceso a Premium; las funciones gratuitas y tus excursiones registradas siguen disponibles.",
      help: "Ayuda de Apple para restaurar compras", refund: "Solicitar un reembolso a Apple"
    },
    de: {
      title: "Premium – ein optionaler Einmalkauf",
      summary: "Premium in Version 1.18 ist ein optionaler Einmalkauf ohne Abonnement oder automatische Verlängerung. Es ergänzt ausführliche Fortschrittsstatistiken, persönliche Monatsziele und zusätzliche Informationen zur Offlineplanung. Grundlegendes GPS, Gipfelbestätigung, Routenaufzeichnung, Karten, Download und Löschen von Offlinekarten sowie Sicherheitshinweise bleiben kostenlos. Preis und Verfügbarkeit werden vor einem Kauf in der App angezeigt; diese Informationen bedeuten nicht, dass das Produkt bereits verfügbar ist.",
      restore: "Öffne nach einer Neuinstallation Profil > Tind 100 Premium > Kauf wiederherstellen mit demselben Apple Account wie beim Kauf. Die Überprüfung benötigt eine Verbindung. Ein Kauf, der auf Genehmigung wartet, bedeutet nicht, dass Premium aktiviert ist. Warte auf die Entscheidung und prüfe den Status in der App. Sende uns niemals Passwörter, Einmalcodes oder Zahlungskartendaten.",
      privacy: "Apple wickelt die Zahlung ab. Die App prüft Produkt, Preis, Kaufstatus und Premium-Berechtigung mit StoreKit. Der Herausgeber erhält dabei keine Karten- oder Bankdaten und betreibt keinen Kaufserver. Der lokale Kaufstatus dient nur dazu, den richtigen Zugang anzuzeigen und einen ausstehenden Kauf zu verwalten. Eine widerrufene oder erstattete Berechtigung gewährt keinen Premium-Zugang mehr; kostenlose Funktionen und gespeicherte Touren bleiben verfügbar.",
      help: "Apple-Hilfe zur Wiederherstellung von Käufen", refund: "Eine Rückerstattung bei Apple beantragen"
    },
    "zh-Hans": {
      title: "Premium：可选的一次性购买",
      summary: "1.18 版中的 Premium 是可选的一次性购买，不是订阅，也不会自动续费。它提供详细进度统计、个人月度目标以及额外的离线规划信息。基础 GPS、山峰验证、路线记录、地图、离线地图下载和删除，以及安全信息仍然免费。App 会在购买前显示价格与可用状态；此处的信息不表示该产品已经可供购买。",
      restore: "重新安装后，请使用购买时的同一 Apple 账户，打开“个人资料 > Tind 100 高级版 > 恢复购买”。核验购买需要联网。购买正在等待批准，并不表示 Premium 已启用。请等待决定，然后在 App 中检查状态。切勿向我们发送密码、一次性验证码或银行卡资料。",
      privacy: "付款由 Apple 处理。App 使用 StoreKit 核验产品、价格、购买状态和 Premium 使用权。发布者不会通过购买流程收到银行卡或银行账户资料，也没有自己的购买服务器。本地购买状态仅用于显示正确的访问权限及处理待批准的购买。如果使用权被撤销或相关购买已退款，则不再授予 Premium 访问权限；免费功能和已记录的徒步活动仍然保留。",
      help: "Apple 恢复购买帮助", refund: "向 Apple 申请退款"
    }
  };
  for (const language of supported) {
    const copy = premiumCopy[language];
    content.support[language].sections.splice(1, 0, {
      title: copy.title,
      body: [copy.summary, copy.restore],
      links: [[copy.help, "https://support.apple.com/108096", "external"],
        [copy.refund, "https://support.apple.com/118223", "external"]]
    });
    content.privacy[language].sections.splice(2, 0, {
      title: copy.title, body: [copy.privacy]
    });
    content.terms[language].sections.splice(1, 0, {
      title: copy.title, body: [copy.summary, copy.restore],
      links: [[copy.refund, "https://support.apple.com/118223", "external"]]
    });
  }

  const pagePaths = {
    home: "",
    privacy: "privacy/",
    support: "support/",
    safety: "safety/",
    choices: "privacy-choices/",
    sources: "data-sources/",
    openData: "open-data/",
    notices: "third-party-notices/",
    terms: "terms/"
  };

  function selectedLanguage() {
    const rawRequested = new URLSearchParams(location.search).get("lang");
    const requested = rawRequested === "no" ? "nb" : rawRequested;
    if (supported.includes(requested)) return requested;
    const browserLanguage = (navigator.languages || [navigator.language || "nb"])
      .map(value => value.toLowerCase())
      .find(value => value.startsWith("nb") || value.startsWith("no") || value.startsWith("fr") || value.startsWith("es") || value.startsWith("de") || value.startsWith("zh") || value.startsWith("en"));
    if (!browserLanguage) return "nb";
    if (browserLanguage.startsWith("no") || browserLanguage.startsWith("nb")) return "nb";
    if (browserLanguage.startsWith("fr")) return "fr";
    if (browserLanguage.startsWith("es")) return "es";
    if (browserLanguage.startsWith("de")) return "de";
    if (browserLanguage.startsWith("zh")) return "zh-Hans";
    return "en";
  }

  const lang = selectedLanguage();
  const ui = common[lang];
  const current = content[page]?.[lang] || content[page]?.en || content.home[lang];
  const prefix = page === "home" ? "" : "../";

  function format(template) {
    return String(template)
      .replaceAll("{publisher}", config.publisherName || "")
      .replaceAll("{country}", ui.country)
      .replaceAll("{version}", config.appVersion || "")
      .replaceAll("{build}", config.appBuild || "");
  }

  function internalLink(path) {
    const normalizedPath = path.replace(/^(\.\.\/)+/, "");
    if (/\.(?:json|sha256)$/.test(normalizedPath)) {
      return `${prefix}${normalizedPath}`;
    }
    const separator = normalizedPath.includes("?") ? "&" : "?";
    return `${prefix}${normalizedPath}${separator}lang=${encodeURIComponent(lang)}`;
  }

  function appendText(parent, tag, value, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = format(value);
    parent.append(node);
    return node;
  }

  function appendLink(parent, label, href, style) {
    const link = document.createElement("a");
    link.textContent = label;
    if (href.startsWith("https://") || href.startsWith("mailto:")) {
      link.href = href;
      if (href.startsWith("https://")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `${label} — ${ui.external}`);
      }
    } else {
      link.href = internalLink(href);
    }
    if (style) link.className = style;
    parent.append(link);
    return link;
  }

  function renderHeader() {
    const header = document.querySelector(".site-header");
    const inner = document.createElement("div");
    inner.className = "header-inner";

    const brand = document.createElement("a");
    brand.className = "brand";
    brand.href = internalLink("");
    brand.setAttribute("aria-label", "Tind 100");
    const logo = document.createElement("img");
    logo.src = `${prefix}assets/mark.svg`;
    logo.alt = "";
    brand.append(logo);
    appendText(brand, "span", "Tind 100");
    inner.append(brand);

    const wrap = document.createElement("div");
    wrap.className = "nav-wrap";
    const nav = document.createElement("nav");
    nav.className = "primary-nav";
    nav.setAttribute("aria-label", ui.primaryNav);
    [["home", ui.nav.home], ["privacy", ui.nav.privacy], ["support", ui.nav.support], ["safety", ui.nav.safety]].forEach(([key, label]) => {
      const href = key === "home" ? "" : `${pagePaths[key]}`;
      const link = appendLink(nav, label, href);
      if (key === page) link.setAttribute("aria-current", "page");
    });
    wrap.append(nav);

    const picker = document.createElement("select");
    picker.className = "language-picker";
    picker.setAttribute("aria-label", ui.language);
    [["nb", "Norsk"], ["en", "English"], ["fr", "Français"], ["es", "Español"], ["de", "Deutsch"], ["zh-Hans", "简体中文"]].forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      option.selected = value === lang;
      picker.append(option);
    });
    picker.addEventListener("change", () => {
      const url = new URL(location.href);
      url.searchParams.set("lang", picker.value);
      location.assign(url.href);
    });
    wrap.append(picker);
    inner.append(wrap);
    header.append(inner);
  }

  function renderHero() {
    const hero = document.querySelector(".hero");
    appendText(hero, "p", current.eyebrow, "eyebrow");
    appendText(hero, "h1", current.title);
    appendText(hero, "p", current.lead, "lead");
    if (current.dated) {
      const policyUpdatedISO = current.metaUpdatedISO || config.policyUpdatedISO;
      const date = new Intl.DateTimeFormat(localeMap[lang], { dateStyle: "long" }).format(new Date(`${policyUpdatedISO}T12:00:00Z`));
      appendText(hero, "p", `${ui.updated}: ${date}. ${current.metaVersion || format(ui.version)}`, "meta-line");
    }
    appendText(hero, "p", ui.releaseStatus, "meta-line");
    if (current.actions) {
      const actions = document.createElement("div");
      actions.className = "hero-actions";
      current.actions.forEach(([label, href, style]) => appendLink(actions, label, href, `button-link${style ? ` ${style}` : ""}`));
      hero.append(actions);
    }
  }

  function renderContact(card, includeIssues = false) {
    const box = document.createElement("div");
    box.className = "contact-box";
    appendText(box, "strong", `${config.publisherName}, ${ui.country}`);
    const mail = document.createElement("a");
    mail.href = `mailto:${config.supportEmail}`;
    mail.textContent = `${ui.email}: ${config.supportEmail}`;
    box.append(mail);
    if (includeIssues && /^https:\/\//.test(config.repositoryUrl || "")) {
      appendLink(box, ui.issues, `${config.repositoryUrl}/issues/new/choose`);
    }
    card.append(box);
  }

  function renderSections() {
    const grid = document.querySelector(".content-grid");
    current.sections.forEach(section => {
      const card = document.createElement("section");
      card.className = ["section-card", section.size, section.tone].filter(Boolean).join(" ");
      if (section.number) {
        const badge = appendText(card, "div", section.number, "feature-number");
        badge.setAttribute("aria-hidden", "true");
      }
      appendText(card, "h2", section.title);
      (section.body || []).forEach(paragraph => appendText(card, "p", paragraph));
      if (section.bullets) {
        const list = document.createElement("ul");
        section.bullets.forEach(item => appendText(list, "li", item));
        card.append(list);
      }
      if (section.kind === "controller") renderContact(card, false);
      if (section.kind === "issues") renderContact(card, true);
      if (section.links) {
        const row = document.createElement("div");
        row.className = "link-row";
        section.links.forEach(([label, href]) => appendLink(row, label, href, "button-link secondary"));
        card.append(row);
      }
      grid.append(card);
    });
  }

  function renderFooter() {
    const footer = document.querySelector(".site-footer");
    const inner = document.createElement("div");
    inner.className = "footer-inner";
    const nav = document.createElement("nav");
    nav.className = "footer-nav";
    nav.setAttribute("aria-label", ui.footerNav);
    Object.entries(ui.allLinks).forEach(([key, label]) => appendLink(nav, label, pagePaths[key]));
    inner.append(nav);
    appendText(inner, "p", ui.footer, "footer-note");
    appendText(inner, "p", `© ${new Date().getFullYear()} ${config.publisherName}.`, "footer-note");
    footer.append(inner);
  }

  function configurationComplete() {
    return config.publisherName && !config.publisherName.startsWith("PENDING_") &&
      config.supportEmail && !config.supportEmail.startsWith("PENDING_") &&
      config.repositoryUrl && /^https:\/\/github\.com\//.test(config.repositoryUrl);
  }

  document.documentElement.lang = localeMap[lang];
  document.title = page === "home" ? "Tind 100" : `${current.title} — Tind 100`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = current.lead;
  const skip = document.querySelector(".skip-link");
  if (skip) {
    skip.textContent = ui.skip;
    skip.addEventListener("click", () => {
      const main = document.getElementById("main");
      if (main) window.setTimeout(() => main.focus(), 0);
    });
  }
  renderHeader();
  renderHero();
  renderSections();
  renderFooter();
  if (!configurationComplete()) {
    const warning = document.querySelector(".draft-warning");
    warning.textContent = ui.draft;
    warning.classList.add("is-visible");
  }
})();
