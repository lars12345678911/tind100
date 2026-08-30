(() => {
  "use strict";

  const config = window.TIND100_SITE || {};
  const page = document.body.dataset.page || "home";
  const supported = ["nb", "en", "es", "de", "zh-Hans"];
  const localeMap = {
    nb: "nb-NO",
    en: "en-GB",
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
      version: "Gjelder Tind 100 versjon {version} (bygg {build}) og nyere.",
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
      version: "Applies to Tind 100 version {version} (build {build}) and later.",
      external: "Opens an external website",
      contact: "Contact",
      country: "Norway",
      email: "Email",
      issues: "Public issue reporting",
      draft: "This local draft is missing a confirmed publisher, contact address or GitHub address and must not be published yet."
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
      version: "Se aplica a Tind 100 versión {version} (compilación {build}) y posteriores.",
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
      version: "Gilt für Tind 100 Version {version} (Build {build}) und neuer.",
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
      version: "适用于 Tind 100 {version} 版（构建 {build}）及更高版本。",
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
          { title: "Din fremdrift", body: ["Registrer kvalifiserte besøk manuelt eller med GPS, følg ruter og bruk valgfrie utfordringer. Fremdrift lagres først på iPhonen."], size: "third", number: "✓" },
          { title: "Automatisk Game Center-synk", body: ["Når enheten allerede er innlogget i Game Center, starter appen integrasjonen automatisk og kan synkronisere en begrenset fremdriftskopi via Game Center og iCloud. Det finnes ingen egen påmelding i appen. Appen har ingen egen Tind 100-konto, annonser eller markedsføringssporing."], size: "third", number: "☁" },
          { title: "Viktig før turen", body: ["Opplysninger, koordinater, kart og ruteforslag kan være feil, ufullstendige eller utdaterte. Kontroller alltid oppdaterte, offisielle kilder og lokale forhold. Ikke bruk appen som eneste kart, navigasjon eller sikkerhetsverktøy."], tone: "warning", links: [["Les hele sikkerhetsinformasjonen", "safety/"]] }
        ]
      },
      en: {
        eyebrow: "Peaks. Hikes. Progress.", title: "Tind 100",
        lead: "Explore a curated catalogue of 100 peaks in each of Norway’s 15 counties, log your hikes and build progress at your own pace.",
        actions: [["Read the privacy policy", "privacy/"], ["Get support", "support/", "secondary"]],
        sections: [
          { title: "1,500 peaks", body: ["The app includes 15 preinstalled county catalogues with exactly 100 peaks in each. The ranking follows a curated catalogue order; it is not necessarily a uniform list of the 100 highest or most prominent peaks."], size: "third", number: "100" },
          { title: "Your progress", body: ["Log eligible visits manually or with GPS, record routes and use optional challenges. Progress is stored on the iPhone first."], size: "third", number: "✓" },
          { title: "Automatic Game Center sync", body: ["When the device is already signed in to Game Center, the app starts the integration automatically and may sync a limited progress copy through Game Center and iCloud. There is no separate in-app opt-in. The app has no separate Tind 100 account, advertising or marketing tracking."], size: "third", number: "☁" },
          { title: "Important before a hike", body: ["Information, coordinates, maps and route suggestions may be wrong, incomplete or out of date. Always verify current authoritative sources and local conditions. Do not use the app as your only map, navigation or safety tool."], tone: "warning", links: [["Read the full safety notice", "safety/"]] }
        ]
      },
      es: {
        eyebrow: "Cumbres. Excursiones. Progreso.", title: "Tind 100",
        lead: "Explora un catálogo seleccionado de 100 cumbres en cada una de las 15 provincias de Noruega, registra tus excursiones y progresa a tu ritmo.",
        actions: [["Leer la política de privacidad", "privacy/"], ["Obtener ayuda", "support/", "secondary"]],
        sections: [
          { title: "1.500 cumbres", body: ["La app incluye 15 catálogos provinciales preinstalados con exactamente 100 cumbres cada uno. La clasificación sigue el orden editorial del catálogo; no es necesariamente una lista uniforme de las 100 cumbres más altas o prominentes."], size: "third", number: "100" },
          { title: "Tu progreso", body: ["Registra visitas aptas manualmente o con GPS, graba rutas y usa desafíos opcionales. El progreso se guarda primero en el iPhone."], size: "third", number: "✓" },
          { title: "Sincronización automática de Game Center", body: ["Si el dispositivo ya tiene una sesión iniciada en Game Center, la app inicia la integración automáticamente y puede sincronizar una copia limitada del progreso mediante Game Center e iCloud. No existe una aceptación independiente dentro de la app. No hay una cuenta propia de Tind 100, publicidad ni seguimiento comercial."], size: "third", number: "☁" },
          { title: "Importante antes de salir", body: ["La información, coordenadas, mapas y rutas sugeridas pueden ser erróneos, incompletos o estar desactualizados. Consulta siempre fuentes oficiales actuales y las condiciones locales. No uses la app como único mapa, sistema de navegación o herramienta de seguridad."], tone: "warning", links: [["Leer toda la información de seguridad", "safety/"]] }
        ]
      },
      de: {
        eyebrow: "Gipfel. Touren. Fortschritt.", title: "Tind 100",
        lead: "Entdecke einen kuratierten Katalog mit 100 Gipfeln in jeder der 15 norwegischen Provinzen, zeichne Touren auf und sammle Fortschritt in deinem Tempo.",
        actions: [["Datenschutzerklärung lesen", "privacy/"], ["Support erhalten", "support/", "secondary"]],
        sections: [
          { title: "1.500 Gipfel", body: ["Die App enthält 15 vorinstallierte Provinzkataloge mit jeweils genau 100 Gipfeln. Der Rang ist eine kuratierte Katalogreihenfolge und nicht zwingend eine einheitliche Liste der 100 höchsten oder prominentesten Gipfel."], size: "third", number: "100" },
          { title: "Dein Fortschritt", body: ["Erfasse geeignete Besuche manuell oder per GPS, zeichne Routen auf und nutze optionale Aufgaben. Fortschritt wird zuerst auf dem iPhone gespeichert."], size: "third", number: "✓" },
          { title: "Automatische Game-Center-Synchronisierung", body: ["Ist das Gerät bereits bei Game Center angemeldet, startet die App die Integration automatisch und kann über Game Center und iCloud eine begrenzte Fortschrittskopie synchronisieren. Es gibt keine gesonderte Zustimmung in der App. Es gibt kein eigenes Tind-100-Konto, keine Werbung und kein Marketing-Tracking."], size: "third", number: "☁" },
          { title: "Wichtig vor der Tour", body: ["Informationen, Koordinaten, Karten und Routenvorschläge können falsch, unvollständig oder veraltet sein. Prüfe stets aktuelle offizielle Quellen und örtliche Bedingungen. Nutze die App nicht als einzige Karte, Navigation oder Sicherheitsausrüstung."], tone: "warning", links: [["Vollständige Sicherheitshinweise", "safety/"]] }
        ]
      },
      "zh-Hans": {
        eyebrow: "山峰。徒步。进度。", title: "Tind 100",
        lead: "探索挪威 15 个郡各 100 座山峰的精选目录，记录徒步，并按自己的节奏积累进度。",
        actions: [["阅读隐私政策", "privacy/"], ["获取支持", "support/", "secondary"]],
        sections: [
          { title: "1,500 座山峰", body: ["App 预装 15 个郡级目录，每个目录恰好包含 100 座山峰。排名是精选目录顺序，不一定是统一的最高或最突出 100 座山峰列表。"], size: "third", number: "100" },
          { title: "你的进度", body: ["可手动或通过 GPS 记录符合条件的到访，记录路线并使用可选挑战。进度会先保存在 iPhone 上。"], size: "third", number: "✓" },
          { title: "Game Center 自动同步", body: ["如果设备已登录 Game Center，App 会自动启动集成，并可通过 Game Center 与 iCloud 同步有限的进度副本；App 内没有单独的选择加入开关。App 没有独立的 Tind 100 帐户、广告或营销跟踪。"], size: "third", number: "☁" },
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
          { title: "Kort fortalt", body: ["Tind 100 har ingen annonser, markedsføringssporing eller analyseverktøy og selger ikke personopplysninger. Appen kan brukes uten en egen Tind 100-konto. Fremdrift lagres først på enheten. Når enheten allerede er innlogget i Game Center, starter appen integrasjonen automatisk og kan synkronisere en begrenset fremdriftskopi gjennom Apples tjenester. Det finnes ingen egen Game Center-påmelding i appen."] },
          { title: "Opplysninger som lagres lokalt", bullets: ["språk, kartvalg, valgte utfordringer og synkroniseringsstatus", "Game Center-spiller-ID og sist viste alias når enheten er innlogget i Game Center", "toppbesøk, tidspunkt, bekreftelsesmåte, poeng og innsjekkingsavstand", "aktive GPS-ruter med koordinater, høyde, nøyaktighet og tidspunkt", "fullførte rutesammendrag med startpunkt, et begrenset utvalg rutepunkter, distanse, varighet og stigning; disse totalene er aktivitets- og treningsdata", "ukes- og venneutfordringer", "eventuelle eldre lokale kartpakker og egendefinerte navn beholdt fra en tidligere appversjon; bygg 41 kan ikke opprette nye offline-nedlastinger"] },
          { title: "Posisjon og rutesporing", body: ["Når du velger en posisjonsfunksjon, kan appen bruke nøyaktig eller omtrentlig posisjon til GPS-innsjekking, fylkesoppslag, kartvisning, utfordringer og rutesporing. Under aktiv rutesporing kan appen fortsette å bruke posisjon i bakgrunnen, og iOS viser da en indikator.", "Det komplette aktive sporet lagres lokalt. Etter fullføring slettes det komplette aktive sporet, mens et begrenset sammendrag og enkelte utvalgte punkter beholdes lokalt. Den aktive Game Center-lagringen v3 mottar ikke nøyaktig rutegeometri, rutestart, toppkoordinater eller innsjekkingsavstand."] },
          { title: "Game Center og iCloud", body: ["Når enheten allerede er innlogget i Game Center, starter appen integrasjonen automatisk. Den kan lese Game Center-spiller-ID og visningsnavn og lagre fremdrift i en Game Center-skykopi knyttet til Apple-kontoen; det finnes ingen egen påmelding i appen. Kopien kan inneholde besøkte topp-ID-er og datoer, verifikasjonsmåte, poeng, rutesammendrag, utfordringer, fylke, toppmetadata, alias og nullstillingstidspunkt.", "En eldre v1-skyfil kan bli liggende inaktiv for kompatibilitet og kan inneholde data skrevet av eldre appversjoner. Apple behandler Game Center-, iCloud- og sikkerhetskopidata etter sine egne vilkår og personvernregler."] },
          { title: "Kart og eksterne tjenester", bullets: ["Apple Maps/MapKit brukes til kart, geokoding og fylkesoppslag.", "Kartverket leverer toporaster på nett, begrenset til zoomnivå 11 i bygg 41. Forespørselen røper kartområdet som hentes, og tjenesten mottar vanlige nettverksopplysninger som IP-adresse. Nye vedvarende offline-nedlastinger og servering av eldre pakker er deaktivert.", "Ved eventuell katalogoppdatering mottar Overpass API fylkesnavn, appversjon og IP-adresse, men ikke brukerens GPS-koordinat i denne forespørselen.", "Når du selv åpner Varsom, Fjellvettreglene eller andre eksterne lenker, gjelder nettstedets egen personvernpraksis."] },
          { title: "Deling", body: ["Appen deler ikke fremdrift automatisk til personer. Når du selv bruker delingsfunksjonen, kan mottakeren eller den valgte tjenesten motta Game Center-visningsnavn, statistikk, dato, begrensede toppopplysninger og en Tind 100-lenke. Verken toppkoordinat eller rutespor inngår i delingslenken. Den valgte delingstjenestens regler gjelder etter at du sender informasjonen."] },
          { title: "Brukerstøtte og offentlige feilrapporter", body: ["Når du sender e-post, behandler utgiveren avsenderadresse, innhold, vedlegg og tekniske opplysninger du velger å oppgi, for å besvare og dokumentere henvendelsen. E-postleverandøren mottar og lagrer meldingen som tjenesteleverandør og kan ha egne sikkerhetskopier og lagringstider. Kopier utgiveren kontrollerer, slettes eller anonymiseres normalt senest 12 måneder etter at saken er avsluttet, med mindre sikkerhet eller et rettslig krav gjør lengre lagring nødvendig.", "En GitHub-feilrapport er offentlig og kan vise brukernavn, tekst, vedlegg, enhets- og appversjon og tidspunkt. Ikke legg inn sensitive opplysninger, GPS-spor eller andre personopplysninger du ikke vil offentliggjøre."] },
          { title: "Sikkerhetskopi og lagringstid", body: ["Lokal fremdrift beholdes til du nullstiller den eller sletter appen. Lokale fremdriftsfiler, inkludert rutedata, kan inngå i brukerens iOS-/iCloud-sikkerhetskopi av enheten. Eventuelle eldre lokale kartpakker er uttrykkelig utelatt fra sikkerhetskopien og beholdes til de slettes i appen eller appen fjernes. Bygg 41 oppretter eller serverer ikke slike pakker.", "Aktiv Game Center v3-fremdrift beholdes til den erstattes eller nullstilles. En inaktiv eldre v1-fil kan bestå. Tidsfrister og sletting i Apple-, Kartverket-, Overpass- og GitHub-systemer styres også av deres egne regler."] },
          { title: "Rettslig grunnlag", body: ["Når personvernforordningen gjelder, brukes artikkel 6 nr. 1 bokstav b for å levere funksjoner du selv starter under appavtalen, og bokstav f for nødvendig brukerstøtte, feilsøking og sikker drift. Dersom en behandling krever samtykke, brukes bokstav a. Samtykket kan trekkes tilbake uten at det påvirker lovligheten av behandling som skjedde før tilbaketrekkingen. iOS-tillatelsen er en teknisk kontroll og er ikke alene et personvernrettslig samtykke. Eksterne leverandører oppgir sine egne behandlingsgrunnlag i sine personvernerklæringer."] },
          { title: "Dine valg og rettigheter", body: ["Du kan trekke tilbake posisjonstilgang, logge ut av Game Center i iOS, slette eventuelle eldre lokale kartpakker og nullstille aktiv fremdrift. Se den trinnvise siden Personvernvalg.", "Du kan kontakte utgiveren for å be om innsyn, retting, sletting, begrensning, protest eller dataportabilitet der disse rettighetene gjelder. Utgiveren har ikke direkte administrativ tilgang til data i Apples Game Center, iCloud eller sikkerhetskopi av enheten. Slike data må også håndteres gjennom Apples kontroller eller Apple Support. Du kan klage til Datatilsynet."], links: [["Åpne Personvernvalg", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/", "external"]] },
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
          { title: "In brief", body: ["Tind 100 has no advertising, marketing tracking or analytics tools and does not sell personal data. It can be used without a separate Tind 100 account. Progress is stored on the device first. When the device is already signed in to Game Center, the app starts the integration automatically and may sync a limited progress copy through Apple’s services. There is no separate in-app Game Center opt-in."] },
          { title: "Information stored locally", bullets: ["language, map choices, selected challenges and sync status", "Game Center player ID and last displayed alias when the device is signed in to Game Center", "peak visits, timestamps, verification method, points and check-in distance", "active GPS routes with coordinates, elevation, accuracy and timestamps", "completed route summaries with start point, a limited sample of route points, distance, duration and ascent; these totals are activity and fitness data", "weekly and friend challenges", "any legacy local map packages and custom names retained from an older app version; build 41 cannot create new offline downloads"] },
          { title: "Location and route recording", body: ["When you choose a location feature, the app may use precise or approximate location for GPS check-in, county lookup, maps, challenges and route recording. During an active route it may continue using location in the background, in which case iOS shows an indicator.", "The complete active track is stored locally. After completion the complete active track is removed, while a limited summary and selected sample points remain locally. The active Game Center v3 save does not receive precise route geometry, route start, peak coordinates or check-in distance."] },
          { title: "Game Center and iCloud", body: ["When the device is already signed in to Game Center, the app starts the integration automatically. It may read the Game Center player ID and display name and store progress in a Game Center cloud save linked to the Apple account; there is no separate in-app opt-in. The save may include visited peak IDs and dates, verification method, points, route summaries, challenges, county, peak metadata, alias and reset timestamp.", "An older v1 cloud save may remain inactive for compatibility and may contain data written by older app versions. Apple processes Game Center, iCloud and device-backup data under its own terms and privacy rules."] },
          { title: "Maps and external services", bullets: ["Apple Maps/MapKit provides maps, geocoding and county lookup.", "Kartverket provides online topographic raster tiles, capped at zoom level 11 in build 41. Requests reveal the requested map area and include ordinary network information such as IP address. New persistent offline downloads and serving of older packages are disabled.", "If catalogue refresh is used, Overpass API receives the county name, app version and IP address, but not the user’s GPS coordinate in that request.", "When you choose to open Varsom, the Norwegian Mountain Code or another external link, that site’s privacy practices apply."] },
          { title: "Sharing", body: ["The app does not automatically share progress with people. When you use the share feature, the recipient or selected service may receive a Game Center display name, statistics, date, limited peak details and a Tind 100 link. Neither the summit coordinate nor the route track is included in the shared link. The selected sharing service’s rules apply after you send the information."] },
          { title: "Support and public issue reports", body: ["When you send email, the publisher processes the sender address, message, attachments and technical details you choose to provide to answer and document the enquiry. The email provider receives and stores the message as a service provider and may maintain its own backups and retention periods. Copies controlled by the publisher are normally deleted or anonymised no later than 12 months after the case is closed, unless security or a legal requirement makes longer retention necessary.", "A GitHub issue is public and may display a username, text, attachments, device and app version and timestamps. Do not include sensitive information, GPS tracks or other personal data you do not want to make public."] },
          { title: "Backups and retention", body: ["Local progress remains until you reset it or delete the app. Local progress files, including route data, may be included in the user’s iOS/iCloud device backup. Any retained legacy local map packages are explicitly excluded from device backup and remain until deleted in the app or the app is removed. Build 41 does not create or serve such packages.", "Active Game Center v3 progress remains until replaced or reset. An inactive older v1 file may persist. Retention and deletion in Apple, Kartverket, Overpass and GitHub systems are also governed by their own policies."] },
          { title: "Legal basis", body: ["Where the GDPR applies, Article 6(1)(b) is used to provide features you initiate under the app agreement, and Article 6(1)(f) for necessary support, troubleshooting and secure operation. Where processing requires consent, Article 6(1)(a) is used. Consent can be withdrawn without affecting the lawfulness of processing before withdrawal. An iOS permission is a technical control and is not by itself GDPR consent. External providers state their own legal bases in their privacy notices."] },
          { title: "Your choices and rights", body: ["You can withdraw location permission, sign out of Game Center in iOS, delete any retained legacy local map packages and reset active progress. See Privacy choices for step-by-step instructions.", "You may contact the publisher to request access, correction, deletion, restriction, objection or data portability where those rights apply. The publisher has no direct administrative access to Apple Game Center, iCloud or device-backup data. Those must also be managed through Apple’s controls or Apple Support. You may complain to your data-protection authority."], links: [["Open Privacy choices", "../privacy-choices/"], ["Norwegian Data Protection Authority", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "Transfers outside the EEA", body: ["Apple states that EEA personal data is controlled from Ireland and that Apple’s international transfers are governed by the EU Standard Contractual Clauses. A copy may be requested through Apple’s privacy contact. GitHub states that transfers to countries without an adequacy decision generally rely on the EU Standard Contractual Clauses, and that GitHub is also certified under the EU–US Data Privacy Framework. Copies of or information about the safeguards are available through the linked privacy notices and contact points."], links: [["Apple Privacy", "https://www.apple.com/legal/privacy/", "external"], ["GitHub Privacy Statement", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "This website", body: ["This website uses no analytics, advertising pixels or first-party cookies. It is hosted by GitHub Pages. GitHub may log IP addresses and other technical visit data for security and operation under its privacy statement."], links: [["GitHub Privacy Statement", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "Changes", body: ["This policy will be updated if the app’s data use or relevant services change materially. The date and applicable app version appear above."] }
        ]
      },
      es: {
        eyebrow: "Legal y transparente", title: "Privacidad de Tind 100",
        lead: "Esta política explica qué información trata la app, dónde se guarda, qué servicios externos utiliza y qué opciones tienes.", dated: true,
        sections: [
          { title: "Responsable del tratamiento", kind: "controller", body: ["Tind 100 es publicada por {publisher}, {country}. Usa la dirección privada de correo indicada abajo para consultas de privacidad y seguridad. No publiques información personal ni rutas GPS en una incidencia pública de GitHub."] },
          { title: "Resumen", body: ["Tind 100 no contiene publicidad, seguimiento comercial ni herramientas de análisis, y no vende datos personales. Puede usarse sin una cuenta propia de Tind 100. El progreso se guarda primero en el dispositivo. Si el dispositivo ya tiene una sesión iniciada en Game Center, la app inicia la integración automáticamente y puede sincronizar una copia limitada mediante los servicios de Apple. No existe una aceptación independiente de Game Center dentro de la app."] },
          { title: "Información guardada localmente", bullets: ["idioma, opciones de mapa, desafíos seleccionados y estado de sincronización", "ID de jugador y último alias mostrado cuando el dispositivo tiene una sesión iniciada en Game Center", "visitas a cumbres, fechas, método de verificación, puntos y distancia de registro", "rutas GPS activas con coordenadas, altitud, precisión y fecha", "resúmenes de rutas terminadas con punto de inicio, una muestra limitada de puntos, distancia, duración y ascenso; estos totales son datos de actividad física", "desafíos semanales y de amistades", "posibles paquetes de mapas locales antiguos y nombres personalizados conservados de una versión anterior; la compilación 41 no puede crear nuevas descargas sin conexión"] },
          { title: "Ubicación y grabación de rutas", body: ["Cuando eliges una función de ubicación, la app puede usar la ubicación precisa o aproximada para registros GPS, localizar la provincia, mostrar mapas, gestionar desafíos y grabar rutas. Durante una ruta activa puede seguir usando la ubicación en segundo plano; iOS muestra entonces un indicador.", "El recorrido activo completo se guarda localmente. Al terminar se elimina el recorrido activo completo, pero permanece localmente un resumen limitado y algunos puntos de muestra. La copia activa v3 de Game Center no recibe la geometría precisa de la ruta, su inicio, las coordenadas de la cumbre ni la distancia de registro."] },
          { title: "Game Center e iCloud", body: ["Si el dispositivo ya tiene una sesión iniciada en Game Center, la app inicia la integración automáticamente. Puede leer el ID y nombre visible de Game Center y guardar progreso en una copia vinculada a la cuenta de Apple; no existe una aceptación independiente dentro de la app. La copia puede incluir ID y fechas de cumbres visitadas, método de verificación, puntos, resúmenes de rutas, desafíos, provincia, metadatos de cumbres, alias y fecha de restablecimiento.", "Una copia v1 antigua puede permanecer inactiva por compatibilidad y contener datos escritos por versiones anteriores. Apple trata los datos de Game Center, iCloud y copias del dispositivo según sus propias condiciones y normas de privacidad."] },
          { title: "Mapas y servicios externos", bullets: ["Apple Maps/MapKit proporciona mapas, geocodificación y búsqueda de provincia.", "Kartverket proporciona teselas topográficas ráster en línea, limitadas al nivel de zoom 11 en la compilación 41. Las solicitudes revelan la zona solicitada e incluyen datos de red habituales, como la dirección IP. Las nuevas descargas persistentes sin conexión y el uso de paquetes antiguos están desactivados.", "Si se actualiza un catálogo, Overpass API recibe el nombre de la provincia, versión de la app y dirección IP, pero no la coordenada GPS del usuario en esa solicitud.", "Al abrir Varsom, el Código de Montaña noruego u otro enlace externo, se aplica la privacidad de ese sitio."] },
          { title: "Compartir", body: ["La app no comparte automáticamente el progreso con otras personas. Cuando utilizas Compartir, el destinatario o servicio elegido puede recibir el nombre visible de Game Center, estadísticas, fecha, datos limitados de la cumbre y un enlace de Tind 100. Ni la coordenada de la cumbre ni el recorrido se incluyen en el enlace compartido. Después se aplican las normas del servicio elegido."] },
          { title: "Soporte e informes públicos de errores", body: ["Cuando envías un correo, el editor trata la dirección del remitente, el mensaje, los archivos adjuntos y los datos técnicos que decidas proporcionar para responder y documentar la consulta. El proveedor de correo recibe y almacena el mensaje como proveedor de servicios y puede conservar sus propias copias de seguridad y aplicar sus propios plazos. Las copias bajo control del editor se eliminan o anonimizan normalmente como máximo 12 meses después de cerrar el caso, salvo que la seguridad o una obligación legal exijan conservarlas más tiempo.", "Una incidencia de GitHub es pública y puede mostrar nombre de usuario, texto, archivos adjuntos, versión del dispositivo y de la app y marcas de tiempo. No incluyas información sensible, rutas GPS ni otros datos personales que no quieras hacer públicos."] },
          { title: "Copias y conservación", body: ["El progreso local permanece hasta que lo restableces o eliminas la app. Los archivos locales, incluidos datos de ruta, pueden incluirse en la copia iOS/iCloud del dispositivo. Los posibles paquetes de mapas locales antiguos están excluidos expresamente de esa copia y permanecen hasta eliminarlos o borrar la app. La compilación 41 no crea ni utiliza esos paquetes.", "El progreso activo v3 de Game Center permanece hasta sustituirlo o restablecerlo. Puede persistir un archivo v1 antiguo e inactivo. Los plazos en Apple, Kartverket, Overpass y GitHub también se rigen por sus políticas."] },
          { title: "Base jurídica", body: ["Cuando se aplica el RGPD, se utiliza el artículo 6.1.b para prestar las funciones que inicias en virtud del acuerdo de la app, y el artículo 6.1.f para el soporte, la resolución de errores y el funcionamiento seguro necesarios. Cuando un tratamiento requiera consentimiento, se utiliza el artículo 6.1.a. Puedes retirarlo sin que ello afecte a la licitud del tratamiento anterior a la retirada. El permiso de iOS es un control técnico y no constituye por sí solo consentimiento conforme al RGPD. Los proveedores externos indican sus propias bases en sus avisos."] },
          { title: "Tus opciones y derechos", body: ["Puedes retirar la ubicación, cerrar la sesión de Game Center en iOS, eliminar los posibles paquetes de mapas locales antiguos y restablecer el progreso activo. Consulta Opciones de privacidad para ver los pasos.", "Puedes contactar con el editor para solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad cuando correspondan. El editor no tiene acceso administrativo directo a Game Center, iCloud ni copias de dispositivo de Apple; también deben gestionarse con los controles o el soporte de Apple. Puedes reclamar ante tu autoridad de protección de datos."], links: [["Abrir Opciones de privacidad", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/en/", "external"]] },
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
          { title: "Kurzfassung", body: ["Tind 100 enthält keine Werbung, kein Marketing-Tracking und keine Analysewerkzeuge und verkauft keine personenbezogenen Daten. Die App kann ohne eigenes Tind-100-Konto genutzt werden. Fortschritt wird zuerst auf dem Gerät gespeichert. Ist das Gerät bereits bei Game Center angemeldet, startet die App die Integration automatisch und kann über Apple eine begrenzte Fortschrittskopie synchronisieren. Es gibt keine gesonderte Game-Center-Zustimmung in der App."] },
          { title: "Lokal gespeicherte Informationen", bullets: ["Sprache, Kartenauswahl, gewählte Aufgaben und Synchronisierungsstatus", "Game-Center-Spieler-ID und zuletzt angezeigter Alias, wenn das Gerät bei Game Center angemeldet ist", "Gipfelbesuche, Zeitpunkte, Bestätigungsart, Punkte und Check-in-Entfernung", "aktive GPS-Routen mit Koordinaten, Höhe, Genauigkeit und Zeitpunkten", "abgeschlossene Routenzusammenfassungen mit Startpunkt, begrenzter Punktestichprobe, Distanz, Dauer und Anstieg; diese Summen sind Aktivitäts- und Fitnessdaten", "Wochen- und Freundesaufgaben", "mögliche ältere lokale Kartenpakete und eigene Namen aus einer früheren App-Version; Build 41 kann keine neuen Offline-Downloads erstellen"] },
          { title: "Standort und Routenaufzeichnung", body: ["Wenn du eine Standortfunktion auswählst, kann die App den genauen oder ungefähren Standort für GPS-Check-in, Provinzsuche, Karten, Aufgaben und Routenaufzeichnung verwenden. Während einer aktiven Route kann der Standort im Hintergrund genutzt werden; iOS zeigt dann einen Hinweis.", "Der vollständige aktive Track wird lokal gespeichert. Nach Abschluss wird er entfernt; eine begrenzte Zusammenfassung und ausgewählte Stichprobenpunkte bleiben lokal. Der aktive Game-Center-v3-Spielstand erhält keine genaue Routengeometrie, keinen Routenstart, keine Gipfelkoordinaten und keine Check-in-Entfernung."] },
          { title: "Game Center und iCloud", body: ["Ist das Gerät bereits bei Game Center angemeldet, startet die App die Integration automatisch. Sie kann Spieler-ID und Anzeigenamen lesen und Fortschritt in einem mit dem Apple-Konto verknüpften Game-Center-Spielstand speichern; eine gesonderte Zustimmung in der App gibt es nicht. Dieser kann besuchte Gipfel-IDs und Besuchszeitpunkte, Bestätigungsart, Punkte, Routenzusammenfassungen, Aufgaben, Provinz, Gipfelmetadaten, Alias und Rücksetzzeit enthalten.", "Ein älterer v1-Spielstand kann aus Kompatibilitätsgründen inaktiv bestehen bleiben und Daten älterer Versionen enthalten. Apple verarbeitet Game-Center-, iCloud- und Gerätesicherungsdaten nach eigenen Bedingungen und Datenschutzregeln."] },
          { title: "Karten und externe Dienste", bullets: ["Apple Maps/MapKit liefert Karten, Geocodierung und Provinzsuche.", "Kartverket liefert Online-Toporaster, in Build 41 auf Zoomstufe 11 begrenzt. Anfragen zeigen das angeforderte Kartengebiet und enthalten übliche Netzwerkdaten wie die IP-Adresse. Neue dauerhafte Offline-Downloads und die Nutzung älterer Pakete sind deaktiviert.", "Bei einer Katalogaktualisierung erhält die Overpass API den Provinznamen, die App-Version und IP-Adresse, aber in dieser Anfrage nicht die GPS-Koordinate des Nutzers.", "Beim Öffnen von Varsom, dem norwegischen Bergkodex oder anderen externen Links gilt der Datenschutz der jeweiligen Website."] },
          { title: "Teilen", body: ["Die App teilt Fortschritt nicht automatisch mit anderen Personen. Beim aktiven Teilen können Empfänger oder Dienst Game-Center-Anzeigenamen, Statistiken, Datum, begrenzte Gipfeldaten und einen Tind-100-Link erhalten. Weder Gipfelkoordinate noch Routentrack sind im geteilten Link enthalten. Anschließend gelten die Regeln des gewählten Dienstes."] },
          { title: "Support und öffentliche Fehlermeldungen", body: ["Bei einer E-Mail verarbeitet der Herausgeber Absenderadresse, Nachricht, Anhänge und freiwillig mitgeteilte technische Angaben, um die Anfrage zu beantworten und zu dokumentieren. Der E-Mail-Anbieter empfängt und speichert die Nachricht als Dienstanbieter und kann eigene Sicherungen und Aufbewahrungsfristen haben. Vom Herausgeber kontrollierte Kopien werden normalerweise spätestens 12 Monate nach Abschluss des Falls gelöscht oder anonymisiert, sofern Sicherheit oder eine rechtliche Pflicht keine längere Speicherung erfordern.", "Ein GitHub-Issue ist öffentlich und kann Nutzername, Text, Anhänge, Geräte- und App-Version sowie Zeitangaben zeigen. Veröffentliche keine sensiblen Informationen, GPS-Tracks oder andere personenbezogene Daten, die nicht öffentlich sein sollen."] },
          { title: "Sicherungen und Speicherdauer", body: ["Lokaler Fortschritt bleibt bis zum Zurücksetzen oder Löschen der App erhalten. Lokale Fortschrittsdateien einschließlich Routendaten können in der iOS-/iCloud-Gerätesicherung enthalten sein. Mögliche ältere lokale Kartenpakete sind davon ausdrücklich ausgeschlossen und bleiben erhalten, bis sie in der App gelöscht oder die App entfernt wird. Build 41 erstellt oder verwendet solche Pakete nicht.", "Aktiver Game-Center-v3-Fortschritt bleibt bis zum Ersetzen oder Zurücksetzen. Eine inaktive ältere v1-Datei kann bestehen. Für Apple, Kartverket, Overpass und GitHub gelten zusätzlich deren Aufbewahrungsregeln."] },
          { title: "Rechtsgrundlage", body: ["Soweit die DSGVO gilt, wird Artikel 6 Absatz 1 Buchstabe b für Funktionen genutzt, die du im Rahmen des App-Vertrags selbst startest, und Buchstabe f für notwendigen Support, Fehlerbehebung und sicheren Betrieb. Wenn eine Verarbeitung eine Einwilligung erfordert, gilt Buchstabe a. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung vor dem Widerruf. Eine iOS-Berechtigung ist eine technische Kontrolle und allein keine DSGVO-Einwilligung. Externe Anbieter nennen ihre eigenen Grundlagen in ihren Datenschutzhinweisen."] },
          { title: "Deine Optionen und Rechte", body: ["Du kannst Standortzugriff entziehen, dich in iOS von Game Center abmelden, mögliche ältere lokale Kartenpakete löschen und aktiven Fortschritt zurücksetzen. Eine Anleitung steht unter Datenschutzoptionen.", "Du kannst den Herausgeber um Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Datenübertragbarkeit bitten, soweit diese Rechte gelten. Der Herausgeber hat keinen direkten administrativen Zugriff auf Apple Game Center, iCloud oder Gerätesicherungen; diese müssen auch über Apple verwaltet werden. Beschwerden sind bei der zuständigen Datenschutzbehörde möglich."], links: [["Datenschutzoptionen öffnen", "../privacy-choices/"], ["Datatilsynet", "https://www.datatilsynet.no/en/", "external"]] },
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
          { title: "概要", body: ["Tind 100 不含广告、营销跟踪或分析工具，也不会出售个人数据。无需创建独立的 Tind 100 帐户即可使用。进度首先保存在设备上。如果设备已登录 Game Center，App 会自动启动集成，并可通过 Apple 服务同步有限的进度副本；App 内没有单独的 Game Center 选择加入开关。"] },
          { title: "本机保存的信息", bullets: ["语言、地图选择、所选挑战和同步状态", "设备已登录 Game Center 时的玩家 ID 和最近显示的昵称", "山峰到访、时间、验证方式、积分和签到距离", "包含坐标、海拔、精度和时间的活动 GPS 路线", "包含起点、有限采样点、距离、时长和累计爬升的已完成路线摘要；这些汇总属于活动与健身数据", "每周挑战和好友挑战", "旧版 App 可能保留的本地地图包及自定义名称；构建 41 无法创建新的离线下载"] },
          { title: "位置与路线记录", body: ["选择位置功能后，App 可能使用精确或大致位置进行 GPS 签到、郡级查询、地图显示、挑战和路线记录。活动路线期间可在后台继续使用位置，此时 iOS 会显示指示。", "完整活动轨迹保存在本机。完成后完整活动轨迹会被删除，但有限摘要和选定采样点仍保存在本机。活动 Game Center v3 存档不会收到精确路线几何、路线起点、山峰坐标或签到距离。"] },
          { title: "Game Center 与 iCloud", body: ["如果设备已登录 Game Center，App 会自动启动集成。App 可读取 Game Center 玩家 ID 和显示名称，并将进度保存至与 Apple 帐户关联的 Game Center 云存档；App 内没有单独的选择加入开关。内容可能包括到访山峰 ID 和日期、验证方式、积分、路线摘要、挑战、郡、山峰元数据、昵称和重置时间。", "出于兼容性，旧版 v1 云存档可能以非活动状态保留，并可能包含旧版 App 写入的数据。Apple 根据其自身条款和隐私规则处理 Game Center、iCloud 和设备备份数据。"] },
          { title: "地图与外部服务", bullets: ["Apple Maps/MapKit 提供地图、地理编码和郡级查询。", "Kartverket 提供在线地形栅格切片；构建 41 将最大缩放级别限制为 11。请求会显示所获取的地图区域，并包含 IP 地址等常规网络信息。新的持久离线下载及旧包的使用均已停用。", "如使用目录更新，Overpass API 会收到郡名、App 版本和 IP 地址，但该请求不会包含用户 GPS 坐标。", "主动打开 Varsom、挪威山区安全守则或其他外部链接后，适用相应网站的隐私政策。"] },
          { title: "分享", body: ["App 不会自动向他人分享进度。你主动使用分享功能时，接收者或所选服务可能收到 Game Center 显示名称、统计数据、日期、有限的山峰资料和 Tind 100 链接。分享链接不包含山峰坐标或路线轨迹。发送后适用所选服务的规则。"] },
          { title: "支持与公开问题报告", body: ["发送电子邮件时，发布者会处理发件地址、邮件内容、附件以及你自愿提供的技术信息，用于答复并记录咨询。电子邮件服务商作为服务提供方接收并存储邮件，并可能保有自己的备份和保留期限。发布者控制的副本通常最迟会在案件结束后 12 个月内删除或匿名化；如安全或法律要求需要，则可能保留更久。", "GitHub Issue 是公开的，可能显示用户名、文字、附件、设备与 App 版本和时间。请勿提交敏感信息、GPS 轨迹或其他你不希望公开的个人数据。"] },
          { title: "备份与保留期限", body: ["本机进度会保留至你重置进度或删除 App。本机进度文件（包括路线数据）可能进入用户的 iOS/iCloud 设备备份。旧版可能保留的本地地图包会保留至你在 App 中将其删除或卸载 App；这些地图包已明确排除在设备备份之外。构建 41 不会创建或使用此类包。", "活动 Game Center v3 进度会保留至被替换或重置。旧版非活动 v1 文件可能继续存在。Apple、Kartverket、Overpass 和 GitHub 系统中的保留与删除也受其自身政策约束。"] },
          { title: "法律依据", body: ["在适用 GDPR 的地区，依据第 6 条第 1 款 b 项处理你根据 App 协议主动启用的功能，依据 f 项处理必要的支持、故障排查和安全运营。处理如需同意，则依据 a 项。撤回同意不会影响撤回前处理活动的合法性。iOS 权限是一项技术控制，本身并不构成 GDPR 同意。外部服务商会在其隐私声明中说明各自的法律依据。"] },
          { title: "你的选择与权利", body: ["你可以撤回位置权限、在 iOS 中退出 Game Center、删除旧版可能保留的本地地图包，并重置活动进度。具体步骤请参阅“隐私选项”。", "在适用情况下，你可联系发布者行使访问、更正、删除、限制处理、反对处理或数据可携权。发布者无法直接管理 Apple Game Center、iCloud 或设备备份数据；这些数据也需通过 Apple 控件或 Apple 支持处理。你还可以向数据保护主管机构投诉。"], links: [["打开隐私选项", "../privacy-choices/"], ["挪威数据保护局", "https://www.datatilsynet.no/en/", "external"]] },
          { title: "向欧洲经济区以外传输", body: ["Apple 表示，欧洲经济区个人数据由其爱尔兰实体负责，Apple 的国际传输受欧盟标准合同条款约束；可通过 Apple 隐私联系渠道索取副本。GitHub 表示，向没有充分性决定的国家传输时通常依据欧盟标准合同条款，并已通过欧盟—美国数据隐私框架认证。可通过所链接的隐私声明和联系渠道获取保障措施的副本或相关信息。"], links: [["Apple 隐私", "https://www.apple.com/legal/privacy/", "external"], ["GitHub 隐私声明", "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "本网站", body: ["本网站不使用分析工具、广告像素或第一方 Cookie，由 GitHub Pages 托管。GitHub 可能根据其隐私声明，为安全和运营记录 IP 地址及其他技术访问数据。"], links: [["GitHub 隐私声明", "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
          { title: "变更", body: ["若 App 的数据使用或相关服务发生重大变化，本政策将更新。更新日期和适用 App 版本显示在上方。"] }
        ]
      }
    },

    support: {
      nb: {
        eyebrow: "Hjelp og kontakt", title: "Brukerstøtte",
        lead: "Få hjelp med GPS, automatisk Game Center-synk, onlinekart, sletting av eldre lokale kartpakker, nullstilling eller andre problemer i Tind 100.", dated: true,
        sections: [
          { title: "Kontakt oss privat", kind: "controller", body: ["Bruk e-post for spørsmål som kan inneholde personopplysninger, kontoinformasjon, posisjon, GPS-spor eller sikkerhetsdetaljer. Ikke send passord, Apple-ID-passord eller engangskoder."] },
          { title: "Rapporter en vanlig feil", kind: "issues", body: ["Du kan bruke GitHub Issues for en vanlig, offentlig feilrapport eller et funksjonsønske. Ikke legg inn personopplysninger, nøyaktig posisjon, GPS-spor, skjermbilder med kontoopplysninger eller sikkerhetssårbarheter."] },
          { title: "Ta med dette", bullets: ["Tind 100-versjon og byggnummer", "iPhone-modell og iOS-versjon", "hvilket språk som er valgt i appen og i iOS", "hva du gjorde, hva du forventet og hva som faktisk skjedde", "om problemet gjelder lokal fremdrift, Game Center, GPS, onlinekart eller sletting av en eldre lokal kartpakke"], size: "half" },
          { title: "Ikke ta med dette offentlig", bullets: ["Apple-ID, passord eller bekreftelseskoder", "nøyaktig hjemmeadresse eller GPS-spor", "Game Center-ID eller andre private identifikatorer", "helseopplysninger eller annen sensitiv informasjon", "detaljer som gjør en sikkerhetssårbarhet enkel å misbruke"], size: "half", tone: "warning" },
          { title: "Raske kontroller", bullets: ["GPS: kontroller stedstilgang for Tind 100 i iOS-innstillinger og prøv under åpen himmel.", "Bakgrunnssporing: behold posisjonstilgang og ikke tvangsavslutt appen under aktiv rute.", "Game Center: synk starter automatisk når enheten allerede er innlogget; det finnes ingen egen påmelding i appen. Kontroller riktig Apple-/Game Center-konto og iCloud Drive ved problemer.", "Kart: bygg 41 deaktiverer nye offline-nedlastinger og servering av eldre pakker. Online toporaster stopper ved zoomnivå 11. Eventuelle eldre lokale kartpakker kan fortsatt slettes i appen.", "Språk: appskjermer følger valget i Profil; Apple-dialoger, Game Center, deling og enkelte kartetiketter følger iOS-/kildespråk."] },
          { title: "Ingen nødtjeneste", body: ["Tind 100 overvåkes ikke som en nødtjeneste. I Norge ringer du 112 ved akutt behov for hjelp eller redning og 113 ved akutt medisinsk hjelp. Følg alltid nødetatenes råd."], tone: "warning", links: [["Les sikkerhetsinformasjonen", "../safety/"]] }
        ]
      },
      en: {
        eyebrow: "Help and contact", title: "Support",
        lead: "Get help with GPS, automatic Game Center sync, online maps, deletion of legacy local map packages, reset or other Tind 100 issues.", dated: true,
        sections: [
          { title: "Contact us privately", kind: "controller", body: ["Use email for questions that may contain personal data, account information, location, GPS tracks or security details. Never send passwords, Apple ID passwords or one-time codes."] },
          { title: "Report a general issue", kind: "issues", body: ["Use GitHub Issues for a general public bug report or feature request. Do not include personal data, precise location, GPS tracks, screenshots containing account details or security vulnerabilities."] },
          { title: "Helpful details", bullets: ["Tind 100 version and build number", "iPhone model and iOS version", "language selected in the app and in iOS", "what you did, what you expected and what happened", "whether the issue concerns local progress, Game Center, GPS, online maps or deletion of a legacy local map package"], size: "half" },
          { title: "Do not post publicly", bullets: ["Apple ID, passwords or verification codes", "precise home address or GPS tracks", "Game Center ID or other private identifiers", "health or other sensitive information", "details that make a security vulnerability easy to exploit"], size: "half", tone: "warning" },
          { title: "Quick checks", bullets: ["GPS: check Tind 100 location permission in iOS Settings and try outdoors with a clear sky view.", "Background recording: retain location permission and do not force-quit the app during an active route.", "Game Center: sync starts automatically when the device is already signed in; there is no separate in-app opt-in. Check the correct Apple/Game Center account and iCloud Drive if needed.", "Maps: build 41 disables new offline downloads and serving of older packages. Online topographic raster tiles stop at zoom level 11. Any retained legacy local map packages can still be deleted in the app.", "Language: app screens follow the Profile selection; Apple dialogs, Game Center, sharing and some map labels follow the iOS or source language."] },
          { title: "Not an emergency service", body: ["Tind 100 is not monitored as an emergency service. In Norway call 112 for urgent emergency or rescue assistance and 113 for urgent medical help. Always follow the emergency services’ advice."], tone: "warning", links: [["Read the safety notice", "../safety/"]] }
        ]
      },
      es: {
        eyebrow: "Ayuda y contacto", title: "Soporte",
        lead: "Obtén ayuda con GPS, sincronización automática de Game Center, mapas en línea, eliminación de paquetes locales antiguos, restablecimiento u otros problemas de Tind 100.", dated: true,
        sections: [
          { title: "Contacto privado", kind: "controller", body: ["Usa el correo para consultas que puedan contener datos personales, información de cuenta, ubicación, rutas GPS o detalles de seguridad. Nunca envíes contraseñas, la contraseña del Apple ID ni códigos de un solo uso."] },
          { title: "Informar de un error normal", kind: "issues", body: ["Usa GitHub Issues para un error público normal o una sugerencia. No incluyas datos personales, ubicación precisa, rutas GPS, capturas con datos de cuenta ni vulnerabilidades."] },
          { title: "Datos útiles", bullets: ["versión y compilación de Tind 100", "modelo de iPhone y versión de iOS", "idioma elegido en la app y en iOS", "qué hiciste, qué esperabas y qué ocurrió", "si afecta al progreso local, Game Center, GPS, mapas en línea o eliminación de un paquete local antiguo"], size: "half" },
          { title: "No publiques", bullets: ["Apple ID, contraseñas o códigos", "domicilio preciso o rutas GPS", "ID de Game Center u otros identificadores privados", "información de salud u otra información sensible", "detalles que faciliten explotar una vulnerabilidad"], size: "half", tone: "warning" },
          { title: "Comprobaciones rápidas", bullets: ["GPS: revisa el permiso de ubicación de Tind 100 en Ajustes de iOS y prueba al aire libre.", "Segundo plano: mantén el permiso y no fuerces el cierre durante una ruta activa.", "Game Center: la sincronización comienza automáticamente cuando el dispositivo ya tiene una sesión iniciada; no existe una aceptación independiente dentro de la app. Comprueba la cuenta y iCloud Drive si hay problemas.", "Mapas: la compilación 41 desactiva nuevas descargas sin conexión y el uso de paquetes antiguos. El toporáster en línea termina en el nivel de zoom 11. Los posibles paquetes locales antiguos aún pueden eliminarse en la app.", "Idioma: las pantallas siguen el idioma de Perfil; los diálogos de Apple, Game Center, compartir y algunas etiquetas de mapa siguen iOS o la fuente."] },
          { title: "No es un servicio de emergencias", body: ["Tind 100 no se supervisa como servicio de emergencias. En Noruega llama al 112 para emergencia o rescate y al 113 para ayuda médica urgente. Sigue siempre las indicaciones oficiales."], tone: "warning", links: [["Leer la información de seguridad", "../safety/"]] }
        ]
      },
      de: {
        eyebrow: "Hilfe und Kontakt", title: "Support",
        lead: "Hilfe zu GPS, automatischer Game-Center-Synchronisierung, Online-Karten, Löschen älterer lokaler Kartenpakete, Zurücksetzen und anderen Problemen mit Tind 100.", dated: true,
        sections: [
          { title: "Privater Kontakt", kind: "controller", body: ["Nutze E-Mail für Fragen, die personenbezogene Daten, Kontoinformationen, Standort, GPS-Tracks oder Sicherheitsdetails enthalten können. Sende niemals Passwörter, das Apple-ID-Passwort oder Einmalcodes."] },
          { title: "Gewöhnlichen Fehler melden", kind: "issues", body: ["Nutze GitHub Issues für einen gewöhnlichen öffentlichen Fehlerbericht oder Funktionswunsch. Veröffentliche keine personenbezogenen Daten, genauen Standorte, GPS-Tracks, Screenshots mit Kontodaten oder Sicherheitslücken."] },
          { title: "Hilfreiche Angaben", bullets: ["Tind-100-Version und Build", "iPhone-Modell und iOS-Version", "in App und iOS gewählte Sprache", "Handlung, erwartetes und tatsächliches Ergebnis", "ob lokaler Fortschritt, Game Center, GPS, Online-Karten oder das Löschen eines älteren lokalen Kartenpakets betroffen sind"], size: "half" },
          { title: "Nicht öffentlich posten", bullets: ["Apple-ID, Passwörter oder Bestätigungscodes", "genaue Privatadresse oder GPS-Tracks", "Game-Center-ID oder andere private Kennungen", "Gesundheitsdaten oder andere sensible Informationen", "Details, die eine Sicherheitslücke leicht ausnutzbar machen"], size: "half", tone: "warning" },
          { title: "Schnelle Prüfungen", bullets: ["GPS: Standortberechtigung für Tind 100 in iOS prüfen und im Freien testen.", "Hintergrund: Berechtigung behalten und die App während einer aktiven Route nicht zwangsbeenden.", "Game Center: Die Synchronisierung startet automatisch, wenn das Gerät bereits angemeldet ist; eine gesonderte Zustimmung in der App gibt es nicht. Bei Problemen Konto und iCloud Drive prüfen.", "Karten: Build 41 deaktiviert neue Offline-Downloads und die Nutzung älterer Pakete. Online-Toporaster endet bei Zoomstufe 11. Mögliche ältere lokale Kartenpakete können in der App weiterhin gelöscht werden.", "Sprache: App-Ansichten folgen der Profilwahl; Apple-Dialoge, Game Center, Teilen und einige Kartenbeschriftungen folgen iOS oder der Quelle."] },
          { title: "Kein Notfalldienst", body: ["Tind 100 wird nicht als Notfalldienst überwacht. In Norwegen gilt 112 für dringende Notfall- oder Rettungshilfe und 113 für dringende medizinische Hilfe. Befolge stets behördliche Anweisungen."], tone: "warning", links: [["Sicherheitshinweise lesen", "../safety/"]] }
        ]
      },
      "zh-Hans": {
        eyebrow: "帮助与联系", title: "支持",
        lead: "获取有关 GPS、Game Center 自动同步、在线地图、删除旧版本地地图包、重置或其他 Tind 100 问题的帮助。", dated: true,
        sections: [
          { title: "私人联系", kind: "controller", body: ["可能包含个人数据、帐户信息、位置、GPS 轨迹或安全详情的问题，请使用电子邮件。切勿发送密码、Apple ID 密码或一次性验证码。"] },
          { title: "报告一般问题", kind: "issues", body: ["一般公开错误报告或功能建议可使用 GitHub Issues。请勿包含个人数据、精确位置、GPS 轨迹、含帐户信息的截图或安全漏洞。"] },
          { title: "有用信息", bullets: ["Tind 100 版本和构建号", "iPhone 型号和 iOS 版本", "App 与 iOS 中选择的语言", "你的操作、预期结果和实际结果", "问题是否涉及本机进度、Game Center、GPS、在线地图或删除旧版本地地图包"], size: "half" },
          { title: "请勿公开发布", bullets: ["Apple ID、密码或验证码", "精确住址或 GPS 轨迹", "Game Center ID 或其他私人标识符", "健康或其他敏感信息", "可使安全漏洞易于利用的详情"], size: "half", tone: "warning" },
          { title: "快速检查", bullets: ["GPS：在 iOS 设置中检查 Tind 100 的位置权限，并在室外开阔处测试。", "后台记录：保留位置权限，活动路线期间不要强制退出 App。", "Game Center：如果设备已登录，同步会自动开始；App 内没有单独的选择加入开关。如有问题，请检查帐户和 iCloud 云盘。", "地图：构建 41 已停用新的离线下载及旧包的使用。在线地形栅格的最大缩放级别为 11。旧版可能保留的本地地图包仍可在 App 中删除。", "语言：App 页面遵循“个人资料”中的选择；Apple 对话框、Game Center、分享及部分地图标签遵循 iOS 或来源语言。"] },
          { title: "并非紧急服务", body: ["Tind 100 并非有人值守的紧急服务。在挪威，紧急救援请拨 112，紧急医疗救助请拨 113。请始终遵循紧急服务机构的指示。"], tone: "warning", links: [["阅读安全说明", "../safety/"]] }
        ]
      }
    },

    "privacy-choices": {
      nb: { eyebrow: "Du bestemmer", title: "Personvernvalg", lead: "Slik styrer du posisjon, fremdrift, automatisk Game Center-synk, eldre lokale kartpakker og deling.", dated: true, sections: [
        { title: "Slå posisjon av eller på", number: "1", body: ["Åpne iOS-innstillinger for Tind 100, eller Innstillinger → Personvern og sikkerhet → Stedstjenester → Tind 100. Du kan endre eller trekke tilbake tillatelsen når som helst. GPS-innsjekking, ruteregistrering og stedsbaserte funksjoner virker ikke uten nødvendig tilgang."] },
        { title: "Bruk appen uten Game Center", number: "2", body: ["Game Center-integrasjonen starter automatisk når enheten allerede er innlogget; det finnes ingen egen påmelding i appen. Lokal fremdrift fungerer uten Game Center. Hvis du vil unngå Game Center-synk, logger du ut av Game Center i iOS. Fremdrift synkroniseres da ikke til en ny iPhone gjennom Tind 100."] },
        { title: "Nullstill aktiv fremdrift", number: "3", body: ["I Profil velger du «Nullstill nåværende fremdrift» og bekrefter. Dette sletter aktiv topp-, rute- og utfordringsfremdrift lokalt og sender et nullstillingssignal til den aktive Game Center-lagringen v3 når synkronisering lykkes. En eldre inaktiv v1-skyfil kan bestå. Nullstillingen sletter ikke Apple-kontoen, alle innstillinger, enhetsbackup eller eventuelle eldre lokale kartpakker."] },
        { title: "Slett eldre lokale kartpakker", number: "4", body: ["Bygg 41 kan ikke starte eller fortsette offline-nedlasting og serverer ikke eldre kartpakker. Hvis en tidligere appversjon har etterlatt lokale pakker, åpner du Kart → Kart uten nett og sletter ett område eller velger «Slett alle kart uten nett». Kartfilene er ikke med i iOS-/iCloud-enhetsbackup."] },
        { title: "Slett appen og sikkerhetskopier", number: "5", body: ["Sletting av appen fjerner appens aktive lokale data fra iPhonen. Kopier kan fortsatt finnes i iOS-/iCloud-enhetsbackup til du administrerer eller utløper sikkerhetskopien i Apples innstillinger. Game Center- og iCloud-data styres også av Apple."] },
        { title: "Del bare når du vil", number: "6", body: ["Tind 100 starter deling først når du velger det. Kontroller forhåndsvisningen og mottakeren. En delingslenke kan inneholde alias, statistikk, dato og begrensede toppopplysninger. Toppkoordinat og rutespor inngår ikke. Ikke del lenken med personer som ikke skal se innholdet."] },
        { title: "Be om hjelp eller rettigheter", kind: "controller", body: ["Kontakt utgiveren privat for personvernspørsmål. Utgiveren kan forklare appens behandling, men har ikke direkte administrativ tilgang til Apple-kontoen, Game Center, iCloud eller enhetsbackup."] }
      ]},
      en: { eyebrow: "You are in control", title: "Privacy choices", lead: "Manage location, progress, automatic Game Center sync, legacy local map packages and sharing.", dated: true, sections: [
        { title: "Turn location on or off", number: "1", body: ["Open iOS Settings for Tind 100, or Settings → Privacy & Security → Location Services → Tind 100. Change or withdraw permission at any time. GPS check-in, route recording and location-based features need the relevant access."] },
        { title: "Use the app without Game Center", number: "2", body: ["Game Center integration starts automatically when the device is already signed in; there is no separate in-app opt-in. Local progress works without Game Center. To avoid Game Center sync, sign out of Game Center in iOS. Tind 100 progress will then not sync to a new iPhone."] },
        { title: "Reset active progress", number: "3", body: ["In Profile choose “Reset current progress” and confirm. This removes active peak, route and challenge progress locally and sends a reset marker to the active Game Center v3 save when sync succeeds. An inactive older v1 cloud file may remain. This does not delete the Apple account, every preference, device backups or any retained legacy local map packages."] },
        { title: "Delete legacy local map packages", number: "4", body: ["Build 41 cannot start or continue an offline download and does not serve older map packages. If an earlier app version left local packages, open Map → Offline maps and delete one area or choose “Delete all offline maps”. Map files are excluded from iOS/iCloud device backup."] },
        { title: "Delete the app and manage backups", number: "5", body: ["Deleting the app removes its active local data from the iPhone. Copies may remain in an iOS/iCloud device backup until you manage or expire that backup in Apple’s settings. Game Center and iCloud data are also controlled by Apple."] },
        { title: "Share only when you choose", number: "6", body: ["Tind 100 starts sharing only after your action. Check the preview and recipient. A shared link may contain an alias, statistics, date and limited peak details. It does not contain the summit coordinate or route track. Do not share it with anyone who should not see the content."] },
        { title: "Ask for help or exercise rights", kind: "controller", body: ["Contact the publisher privately for privacy questions. The publisher can explain the app’s processing but has no direct administrative access to your Apple account, Game Center, iCloud or device backup."] }
      ]},
      es: { eyebrow: "Tú decides", title: "Opciones de privacidad", lead: "Gestiona la ubicación, el progreso, la sincronización automática de Game Center, los paquetes locales antiguos y el uso compartido.", dated: true, sections: [
        { title: "Activar o desactivar la ubicación", number: "1", body: ["Abre Ajustes de iOS para Tind 100 o Ajustes → Privacidad y seguridad → Localización → Tind 100. Cambia o retira el permiso en cualquier momento. El registro GPS, las rutas y las funciones por ubicación requieren el acceso correspondiente."] },
        { title: "Usar la app sin Game Center", number: "2", body: ["La integración de Game Center comienza automáticamente si el dispositivo ya tiene una sesión iniciada; no existe una aceptación independiente dentro de la app. El progreso local funciona sin Game Center. Para evitar la sincronización, cierra la sesión de Game Center en iOS. El progreso de Tind 100 no se sincronizará entonces con otro iPhone."] },
        { title: "Restablecer el progreso activo", number: "3", body: ["En Perfil elige «Restablecer el progreso actual» y confirma. Elimina localmente el progreso activo de cumbres, rutas y desafíos y envía una marca a la copia v3 de Game Center si la sincronización termina. Puede quedar un archivo v1 antiguo inactivo. No elimina la cuenta Apple, todos los ajustes, copias del dispositivo ni posibles paquetes de mapas locales antiguos."] },
        { title: "Eliminar paquetes de mapas locales antiguos", number: "4", body: ["La compilación 41 no puede iniciar ni continuar una descarga sin conexión y no utiliza paquetes antiguos. Si una versión anterior dejó paquetes locales, abre Mapa → Mapas sin conexión y elimina una zona o elige «Eliminar todos los mapas sin conexión». Los archivos están excluidos de la copia iOS/iCloud del dispositivo."] },
        { title: "Eliminar la app y gestionar copias", number: "5", body: ["Eliminar la app borra sus datos locales activos del iPhone. Puede haber copias en una copia iOS/iCloud hasta gestionarla o dejarla caducar en Apple. Apple también controla Game Center e iCloud."] },
        { title: "Compartir solo cuando quieras", number: "6", body: ["Tind 100 solo inicia el uso compartido tras tu acción. Revisa la vista previa y el destinatario. El enlace puede contener alias, estadísticas, fecha y datos limitados de la cumbre. No contiene la coordenada de la cumbre ni el recorrido. No lo compartas con nadie que no deba ver el contenido."] },
        { title: "Pedir ayuda o ejercer derechos", kind: "controller", body: ["Contacta en privado con el editor para cuestiones de privacidad. El editor puede explicar el tratamiento realizado por la app, pero no tiene acceso administrativo directo a la cuenta Apple, Game Center, iCloud ni las copias del dispositivo."] }
      ]},
      de: { eyebrow: "Du entscheidest", title: "Datenschutzoptionen", lead: "Verwalte Standort, Fortschritt, automatische Game-Center-Synchronisierung, ältere lokale Kartenpakete und Teilen.", dated: true, sections: [
        { title: "Standort ein- oder ausschalten", number: "1", body: ["Öffne die iOS-Einstellungen für Tind 100 oder Einstellungen → Datenschutz & Sicherheit → Ortungsdienste → Tind 100. Die Berechtigung kann jederzeit geändert oder entzogen werden. GPS-Check-in, Routenaufzeichnung und Standortfunktionen benötigen den entsprechenden Zugriff."] },
        { title: "App ohne Game Center verwenden", number: "2", body: ["Die Game-Center-Integration startet automatisch, wenn das Gerät bereits angemeldet ist; eine gesonderte Zustimmung in der App gibt es nicht. Lokaler Fortschritt funktioniert ohne Game Center. Um die Synchronisierung zu vermeiden, melde dich in iOS von Game Center ab. Tind-100-Fortschritt wird dann nicht auf ein neues iPhone synchronisiert."] },
        { title: "Aktiven Fortschritt zurücksetzen", number: "3", body: ["Wähle im Profil „Aktuellen Fortschritt zurücksetzen“ und bestätige. Aktiver Gipfel-, Routen- und Aufgabenfortschritt wird lokal entfernt; bei erfolgreicher Synchronisierung wird eine Rücksetzmarke an den aktiven Game-Center-v3-Spielstand gesendet. Eine inaktive ältere v1-Datei kann bleiben. Apple-Konto, alle Einstellungen, Gerätesicherungen und mögliche ältere lokale Kartenpakete werden nicht gelöscht."] },
        { title: "Ältere lokale Kartenpakete löschen", number: "4", body: ["Build 41 kann keinen Offline-Download starten oder fortsetzen und verwendet ältere Pakete nicht. Hat eine frühere App-Version lokale Pakete hinterlassen, öffne Karte → Offline-Karten und lösche ein Gebiet oder wähle „Alle Offline-Karten löschen“. Kartendateien sind von der iOS-/iCloud-Gerätesicherung ausgeschlossen."] },
        { title: "App löschen und Sicherungen verwalten", number: "5", body: ["Beim Löschen der App werden aktive lokale Daten vom iPhone entfernt. Kopien können in einer iOS-/iCloud-Gerätesicherung bleiben, bis diese bei Apple verwaltet oder abläuft. Game Center und iCloud werden ebenfalls von Apple gesteuert."] },
        { title: "Nur bewusst teilen", number: "6", body: ["Tind 100 beginnt das Teilen erst nach deiner Aktion. Prüfe Vorschau und Empfänger. Ein Link kann Alias, Statistiken, Datum und begrenzte Gipfeldaten enthalten. Gipfelkoordinate und Routentrack sind nicht enthalten. Teile ihn nicht mit Personen, die den Inhalt nicht sehen sollen."] },
        { title: "Hilfe oder Rechte anfragen", kind: "controller", body: ["Kontaktiere den Herausgeber privat bei Datenschutzfragen. Der Herausgeber kann die Verarbeitung durch die App erläutern, hat aber keinen direkten administrativen Zugriff auf Apple-Konto, Game Center, iCloud oder Gerätesicherungen."] }
      ]},
      "zh-Hans": { eyebrow: "由你掌控", title: "隐私选项", lead: "管理位置、进度、Game Center 自动同步、旧版本地地图包和分享。", dated: true, sections: [
        { title: "开启或关闭位置", number: "1", body: ["打开 Tind 100 的 iOS 设置，或“设置 → 隐私与安全性 → 定位服务 → Tind 100”。可随时更改或撤回权限。GPS 签到、路线记录和位置功能需要相应权限。"] },
        { title: "不使用 Game Center", number: "2", body: ["如果设备已登录，Game Center 集成会自动启动；App 内没有单独的选择加入开关。本机进度无需 Game Center。若要避免同步，请在 iOS 中退出 Game Center。之后 Tind 100 进度不会同步至新 iPhone。"] },
        { title: "重置活动进度", number: "3", body: ["在“个人资料”中选择“重置当前进度”并确认。本机活动山峰、路线和挑战进度会被删除；同步成功时向活动 Game Center v3 存档发送重置标记。旧版非活动 v1 云文件可能保留。此操作不会删除 Apple 帐户、所有设置、设备备份或旧版可能保留的本地地图包。"] },
        { title: "删除旧版本地地图包", number: "4", body: ["构建 41 无法开始或继续离线下载，也不会使用旧包。如果早期 App 版本留下了本地包，请打开“地图 → 离线地图”，删除一个区域或选择“删除所有离线地图”。地图文件不进入 iOS/iCloud 设备备份。"] },
        { title: "删除 App 并管理备份", number: "5", body: ["删除 App 会从 iPhone 移除其活动本机数据。副本可能留在 iOS/iCloud 设备备份中，直至你在 Apple 设置中管理或备份到期。Game Center 和 iCloud 数据也由 Apple 控制。"] },
        { title: "仅在你选择时分享", number: "6", body: ["Tind 100 只会在你主动操作后开始分享。请检查预览和接收者。链接可能包含昵称、统计、日期和有限的山峰资料，不包含山峰坐标或路线轨迹。请勿与不应看到这些内容的人分享。"] },
        { title: "寻求帮助或行使权利", kind: "controller", body: ["隐私问题请私下联系发布者。发布者可以说明 App 的数据处理方式，但无法直接管理你的 Apple 帐户、Game Center、iCloud 或设备备份。"] }
      ]}
    },

    safety: {
      nb: { eyebrow: "Før og under turen", title: "Sikkerhet og ansvar", lead: "Tind 100 inspirerer og registrerer, men kan ikke avgjøre om en tur er riktig eller trygg.", dated: true, sections: [
        { title: "Opplysninger kan inneholde feil", body: ["Navn, høyder, koordinater, rangeringer, adkomst, ruteforslag, distanser, tidsanslag, kart og andre opplysninger kan være feil, unøyaktige, ufullstendige eller utdaterte. «Kvalitetssikret» betyr bare at en avgrenset datakontroll er utført; det er ingen garanti for full nøyaktighet, lovlig adkomst eller sikkerhet."], tone: "warning" },
        { title: "Kontroller alltid", body: ["En oppføring betyr ikke at toppen eller ruten er åpen, lovlig å ferdes på, farbar eller trygg. Sjekk oppdaterte offisielle kart, alternative veivalg, vær, føre, naturfare, stengninger, vernebestemmelser, ferdselsforbud, tillatelser og parkering før og under turen."], links: [["Varsom", "https://www.varsom.no/", "external"], ["Fjellvettreglene", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Teknologi kan svikte", body: ["GPS-posisjon og -høyde, onlinekart, eventuelle eldre lokale kartpakker, avstander og rutesporing kan være unøyaktige eller utilgjengelige. Bygg 41 har nye offline-nedlastinger og servering av eldre pakker deaktivert; toporaster på nett stopper ved zoomnivå 11. Telefon, batteri, nett og satellittmottak kan svikte. Ta med egnede alternativer og nødvendig nødberedskap."] },
        { title: "Dine vurderinger", body: ["Tilpass turen etter helse, erfaring, form, utstyr og forhold. Vurder på nytt underveis og snu i tide. Du er ansvarlig for egne vurderinger, rutevalg og handlinger og for å følge gjeldende lover og regler."] },
        { title: "Nødsituasjoner", body: ["I Norge ringer du 112 når du trenger akutt hjelp eller redning. Ring 113 ved akutt medisinsk behov. Følg alltid instruksjoner fra nødetater og myndigheter."], tone: "warning" },
        { title: "Ufravikelige rettigheter", body: ["Denne informasjonen begrenser ikke rettigheter eller ansvar som ikke kan fravikes etter gjeldende lov."] }
      ]},
      en: { eyebrow: "Before and during a hike", title: "Safety and responsibility", lead: "Tind 100 can inspire and record, but it cannot decide whether a hike is suitable or safe.", dated: true, sections: [
        { title: "Information may contain errors", body: ["Names, elevations, coordinates, rankings, access, route suggestions, distances, estimates, maps and other information may be wrong, imprecise, incomplete or out of date. “Quality-assured” only means a limited data check was performed; it does not guarantee full accuracy, legal access or safety."], tone: "warning" },
        { title: "Always verify", body: ["An entry does not mean a peak or route is open, legally accessible, passable or safe. Before and during the hike, check current authoritative maps, alternatives, weather, ground conditions, hazards, closures, protected-area rules, restrictions, permits and parking."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Norwegian Mountain Code", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Technology can fail", body: ["GPS location and elevation, online maps, any retained legacy local map packages, distances and route recording may be inaccurate or unavailable. Build 41 disables new offline downloads and serving of older packages; online topographic raster tiles stop at zoom level 11. The phone, battery, network and satellite reception can fail. Carry suitable alternatives and emergency equipment."] },
        { title: "Your judgement", body: ["Adapt the hike to your health, experience, fitness, equipment and conditions. Reassess as you go and turn back in time. You are responsible for your judgements, route choices and actions and for following applicable laws and rules."] },
        { title: "Emergencies", body: ["In Norway call 112 for urgent emergency or rescue assistance. Call 113 for urgent medical help. Always follow instructions from emergency services and authorities."], tone: "warning" },
        { title: "Non-waivable rights", body: ["This information does not limit any rights or liability that cannot be excluded under applicable law."] }
      ]},
      es: { eyebrow: "Antes y durante la excursión", title: "Seguridad y responsabilidad", lead: "Tind 100 puede inspirar y registrar, pero no decide si una excursión es adecuada o segura.", dated: true, sections: [
        { title: "La información puede contener errores", body: ["Nombres, altitudes, coordenadas, clasificaciones, accesos, rutas, distancias, estimaciones, mapas y otros datos pueden ser erróneos, imprecisos, incompletos o estar desactualizados. «Sometido a control de calidad» solo indica una comprobación limitada; no garantiza precisión total, acceso legal ni seguridad."], tone: "warning" },
        { title: "Comprueba siempre", body: ["Una entrada no significa que la cumbre o ruta esté abierta, sea legal, transitable o segura. Antes y durante la excursión revisa mapas oficiales, alternativas, tiempo, terreno, peligros naturales, cierres, espacios protegidos, restricciones, permisos y aparcamiento."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Código de Montaña noruego", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "La tecnología puede fallar", body: ["La ubicación y altitud GPS, los mapas en línea, los posibles paquetes locales antiguos, las distancias y la grabación pueden ser imprecisos o no estar disponibles. La compilación 41 desactiva nuevas descargas sin conexión y el uso de paquetes antiguos; el toporáster en línea termina en el nivel de zoom 11. El teléfono, la batería, la red y la recepción por satélite pueden fallar. Lleva alternativas y preparación de emergencia."] },
        { title: "Tu criterio", body: ["Adapta la excursión a tu salud, experiencia, forma, equipo y condiciones. Reevalúa y regresa a tiempo. Eres responsable de tus evaluaciones, ruta, acciones y cumplimiento de las normas."] },
        { title: "Emergencias", body: ["En Noruega llama al 112 para emergencia o rescate y al 113 para ayuda médica urgente. Sigue siempre las instrucciones oficiales."], tone: "warning" },
        { title: "Derechos irrenunciables", body: ["Esta información no limita derechos ni responsabilidad que no puedan excluirse conforme a la ley aplicable."] }
      ]},
      de: { eyebrow: "Vor und während der Tour", title: "Sicherheit und Verantwortung", lead: "Tind 100 kann inspirieren und aufzeichnen, aber nicht entscheiden, ob eine Tour geeignet oder sicher ist.", dated: true, sections: [
        { title: "Informationen können Fehler enthalten", body: ["Namen, Höhen, Koordinaten, Ranglisten, Zugänge, Routenvorschläge, Entfernungen, Angaben, Karten und weitere Informationen können falsch, ungenau, unvollständig oder veraltet sein. „Qualitätsgesichert“ bezeichnet nur eine begrenzte Prüfung und garantiert weder Genauigkeit noch legalen Zugang oder Sicherheit."], tone: "warning" },
        { title: "Immer prüfen", body: ["Ein Eintrag bedeutet nicht, dass Gipfel oder Route geöffnet, legal zugänglich, begehbar oder sicher sind. Prüfe vor und während der Tour offizielle Karten, Alternativen, Wetter, Wegzustand, Naturgefahren, Sperrungen, Schutzgebiete, Einschränkungen, Genehmigungen und Parken."], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["Norwegischer Bergkodex", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "Technik kann ausfallen", body: ["GPS-Position und -Höhe, Online-Karten, mögliche ältere lokale Kartenpakete, Entfernungen und Routenaufzeichnung können ungenau oder nicht verfügbar sein. Build 41 deaktiviert neue Offline-Downloads und die Nutzung älterer Pakete; Online-Toporaster endet bei Zoomstufe 11. Telefon, Akku, Netz und Satellitenempfang können ausfallen. Führe Alternativen und Notfallausrüstung mit."] },
        { title: "Deine Einschätzung", body: ["Passe die Tour an Gesundheit, Erfahrung, Kondition, Ausrüstung und Bedingungen an. Bewerte neu und kehre rechtzeitig um. Du bist für deine Einschätzungen, Routenwahl, Handlungen und Regeleinhaltung verantwortlich."] },
        { title: "Notfälle", body: ["In Norwegen gilt 112 für dringende Notfall- oder Rettungshilfe und 113 für dringende medizinische Hilfe. Befolge stets behördliche Anweisungen."], tone: "warning" },
        { title: "Unabdingbare Rechte", body: ["Diese Informationen beschränken keine Rechte oder Haftung, die nach geltendem Recht nicht ausgeschlossen werden können."] }
      ]},
      "zh-Hans": { eyebrow: "出行前及途中", title: "安全与责任", lead: "Tind 100 可用于灵感和记录，但无法判断一次行程是否适合或安全。", dated: true, sections: [
        { title: "信息可能有误", body: ["名称、海拔、坐标、排名、通行信息、路线建议、距离、预计时间、地图及其他信息可能有误、不精确、不完整或已过时。“已通过质量审核”仅表示进行过有限检查，不保证完全准确、合法通行或安全。"], tone: "warning" },
        { title: "始终核实", body: ["收录不代表山峰或路线开放、合法可达、可通行或安全。出行前及途中请核对最新权威地图、备选路线、天气、地面状况、自然灾害、封闭、保护区规定、限制、许可和停车。"], links: [["Varsom", "https://www.varsom.no/en/", "external"], ["挪威山区安全守则", "https://www.rodekors.no/vart-arbeid/beredskap/fjellvett/mountain-code/", "external"]] },
        { title: "技术可能失效", body: ["GPS 位置和海拔、在线地图、旧版可能保留的本地地图包、距离和路线记录可能不准确或不可用。构建 41 已停用新的离线下载及旧包的使用；在线地形栅格的最大缩放级别为 11。手机、电池、网络和卫星接收都可能失效。请携带替代工具和应急装备。"] },
        { title: "你的判断", body: ["请根据健康、经验、体能、装备和条件安排行程。途中持续评估并及时折返。你应对自己的判断、路线选择、行为以及遵守法律法规负责。"] },
        { title: "紧急情况", body: ["在挪威，紧急救援请拨 112，紧急医疗救助请拨 113。请始终遵循紧急服务机构和主管部门的指示。"], tone: "warning" },
        { title: "不可放弃的权利", body: ["本说明不限制适用法律规定不得排除的任何权利或责任。"] }
      ]}
    },

    "data-sources": {
      nb: { eyebrow: "Åpenhet", title: "Datakilder og kreditering", lead: "Den aktive katalogen i Tind 100 versjon 1.17.0 (bygg 41) er en kilde- og rettighetsdokumentert sammenstilling av 1 500 poster fra Kartverkets åpne data. Dokumentasjonen er ikke en juridisk garanti.", dated: true, sections: [
        { title: "Aktiv katalog i bygg 41", body: ["Katalogen har 1 500 unike poster: nøyaktig 100 i hvert av Norges 15 fylker. Autoriserte navn, alternative skrivemåter, objekttype, stedsnummer og representasjonspunkt kommer fra SSR. Modellhøyde og representative toppunkt er utledet fra DTM10 for 1 114 poster og kontrollsumbundet Høyde DTM1 for 386 poster. Kommune- og fylkestilhørighet er kontrollert med Kommuneinfo.", "Koordinater og høyder er modellutledede representasjoner, ikke oppmålte toppmerker, feltkontroll eller ruteanbefaling."], links: [["SSR / Stedsnavn", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"]] },
        { title: "Lisens, kreditering og bearbeiding", body: ["De identifiserte SSR-, DTM10-, Høyde DTM1- og Kommuneinfo-kildene er dokumentert som tilgjengelige under CC BY 4.0 med kreditering. Kildeangivelsen er «© Kartverket». Tind 100 har valgt, kombinert, beregnet, avrundet og rangert opplysningene; Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti.", "CC BY 4.0 tillater gjenbruk på lisensens vilkår. Katalogdata må derfor videreføres med påkrevd kreditering, lisenshenvisning og opplysning om bearbeiding. Denne kilde- og lisensvurderingen er ikke juridisk rådgivning eller en garanti for ethvert tenkelig brukstilfelle."], links: [["Åpne data og lisens", "../open-data/"], ["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Hva katalogen ikke inneholder", body: ["Den aktive katalogen inneholder ingen arvede turbeskrivelser eller tekster om rute, adkomst, parkering eller sikkerhet, ingen prominensverdier og ingen tredjeparts katalogfelt fra kommersielle eller fellesskapsbaserte turtjenester.", "Katalogrekkefølgen er Tind 100s redaksjonelle utvalg og er ikke en ensartet rangering av Norges høyeste eller mest prominente topper."], tone: "notice" },
        { title: "Onlinekart og offlinegrense", body: ["Bygg 41 henter Kartverkets toporaster på nett med maksimal zoom 11. Nye vedvarende offline-nedlastinger, direkte nedlastingskall og servering av eldre pakker er deaktivert. Eventuelle eldre lokale pakker kan fortsatt slettes. Rettighetene til kartfliser er et eget forhold og følger ikke automatisk av katalogens CC BY 4.0-grunnlag."], links: [["Tredjepartsmerknader", "../third-party-notices/"], ["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap og Overpass", body: ["OpenStreetMap og Overpass er ikke kilder for den aktive forhåndsinstallerte 1 500-raderskatalogen. Appen har eldre synkroniseringskode for en manglende fylkeskatalog; alle 15 komplette fylkeskataloger i bygg 41 er beskyttet mot slik erstatning. Eventuelle separate OpenStreetMap-data følger ODbL og krediteres © OpenStreetMap-bidragsyterne."], links: [["OpenStreetMaps opphavsrett", "https://www.openstreetmap.org/copyright", "external"]] },
        { title: "Feil og rettelser", body: ["Opplysninger kan være feil eller utdaterte. Meld en konkret feil via brukerstøtte, og oppgi gjerne autoritativ kilde. Ikke send opphavsrettsbeskyttet turprosa eller komplette tredjepartsdatasett."], links: [["Brukerstøtte", "../support/"]] }
      ]},
      en: { eyebrow: "Transparency", title: "Data sources and attribution", lead: "The active catalogue in Tind 100 version 1.17.0 (build 41) is a source-and-rights-documented compilation of 1,500 records from Kartverket open data. The documentation is not a legal guarantee.", dated: true, sections: [
        { title: "Active catalogue in build 41", body: ["The catalogue contains 1,500 unique records: exactly 100 in each of Norway’s 15 counties. Authorised names, alternative spellings, feature type, place-name ID and representation point come from SSR. Model elevation and representative summit points are derived from DTM10 for 1,114 records and checksum-bound Høyde DTM1 evidence for 386 records. Municipality and county assignment are checked with Kommuneinfo.", "Coordinates and elevations are model-derived representations, not surveyed summit markers, field checks or route recommendations."], links: [["SSR / place names", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"]] },
        { title: "Licence, attribution and changes", body: ["The identified SSR, DTM10, Høyde DTM1 and Kommuneinfo sources are documented as available under CC BY 4.0 with attribution. The source credit is “© Kartverket”. Tind 100 selected, combined, calculated, rounded and ranked the information; Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty.", "CC BY 4.0 permits reuse under its terms. Catalogue data must therefore retain the required attribution, licence notice and indication of changes. This source and licence assessment is not legal advice or a guarantee for every possible use."], links: [["Open data and licence", "../open-data/"], ["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "What the catalogue excludes", body: ["The active catalogue contains no inherited hiking descriptions or route, access, parking or safety prose, no prominence values and no third-party catalogue fields from commercial or community hiking services.", "Catalogue order is Tind 100’s editorial selection, not a uniform ranking of Norway’s highest or most prominent summits."], tone: "notice" },
        { title: "Online maps and offline boundary", body: ["Build 41 fetches Kartverket online topographic raster tiles with a maximum zoom level of 11. New persistent offline downloads, direct download calls and serving of older packages are disabled. Any retained legacy local packages can still be deleted. Map-tile rights are a separate matter and do not follow automatically from the catalogue’s CC BY 4.0 basis."], links: [["Third-party notices", "../third-party-notices/"], ["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap and Overpass", body: ["OpenStreetMap and Overpass are not sources for the active preinstalled 1,500-record catalogue. The app retains legacy sync code for a missing county catalogue; all 15 complete county catalogues in build 41 are protected from such replacement. Any separate OpenStreetMap data is governed by the ODbL and credited to © OpenStreetMap contributors."], links: [["OpenStreetMap copyright", "https://www.openstreetmap.org/copyright", "external"]] },
        { title: "Errors and corrections", body: ["Information may be wrong or out of date. Report a specific error through Support and include an authoritative source when possible. Do not send copyrighted hiking prose or complete third-party datasets."], links: [["Support", "../support/"]] }
      ]},
      es: { eyebrow: "Transparencia", title: "Fuentes de datos y atribución", lead: "El catálogo activo de Tind 100 versión 1.17.0 (compilación 41) es una recopilación de 1.500 registros con fuentes y licencias documentadas procedentes de datos abiertos de Kartverket. La documentación no es una garantía jurídica.", dated: true, sections: [
        { title: "Catálogo activo en la compilación 41", body: ["El catálogo contiene 1.500 registros únicos: exactamente 100 en cada una de las 15 provincias de Noruega. Los nombres autorizados, grafías alternativas, tipo de elemento, identificador toponímico y punto de representación proceden de SSR. La altitud de modelo y los puntos representativos se derivan de DTM10 para 1.114 registros y de evidencia Høyde DTM1 vinculada por suma de comprobación para 386 registros. La provincia y el municipio se comprueban con Kommuneinfo.", "Las coordenadas y altitudes son representaciones derivadas de modelos, no hitos topográficos medidos, comprobaciones de campo ni recomendaciones de ruta."], links: [["SSR / topónimos", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"]] },
        { title: "Licencia, atribución y cambios", body: ["Las fuentes identificadas SSR, DTM10, Høyde DTM1 y Kommuneinfo están documentadas como disponibles bajo CC BY 4.0 con atribución. El crédito de la fuente es «© Kartverket». Tind 100 seleccionó, combinó, calculó, redondeó y ordenó la información; Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías.", "CC BY 4.0 permite la reutilización conforme a sus condiciones. Los datos del catálogo deben mantener la atribución, el aviso de licencia y la indicación de cambios exigidos. Esta evaluación de fuentes y licencias no es asesoramiento jurídico ni una garantía para todos los usos posibles."], links: [["Datos abiertos y licencia", "../open-data/"], ["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Contenido excluido del catálogo", body: ["El catálogo activo no contiene descripciones de excursiones heredadas ni textos de ruta, acceso, aparcamiento o seguridad, valores de prominencia ni campos de catálogos externos procedentes de servicios comerciales o comunitarios.", "El orden es una selección editorial de Tind 100, no una clasificación uniforme de las cumbres más altas o prominentes de Noruega."], tone: "notice" },
        { title: "Mapas en línea y límite sin conexión", body: ["La compilación 41 obtiene el toporáster en línea de Kartverket con un nivel máximo de zoom 11. Las nuevas descargas persistentes sin conexión, las llamadas directas de descarga y el uso de paquetes antiguos están desactivados. Los posibles paquetes locales antiguos aún pueden eliminarse. Los derechos de las teselas son independientes y no se derivan automáticamente de la base CC BY 4.0 del catálogo."], links: [["Avisos de terceros", "../third-party-notices/"], ["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap y Overpass", body: ["OpenStreetMap y Overpass no son fuentes del catálogo activo preinstalado de 1.500 registros. La app conserva código de sincronización antiguo para una provincia sin catálogo; los 15 catálogos completos de la compilación 41 están protegidos frente a esa sustitución. Los posibles datos separados de OpenStreetMap se rigen por ODbL y se atribuyen a © colaboradores de OpenStreetMap."], links: [["Derechos de autor de OpenStreetMap", "https://www.openstreetmap.org/copyright", "external"]] },
        { title: "Errores y correcciones", body: ["La información puede ser errónea o estar desactualizada. Informa mediante Soporte e incluye una fuente oficial si es posible. No envíes textos de excursiones protegidos ni bases de datos completas de terceros."], links: [["Soporte", "../support/"]] }
      ]},
      de: { eyebrow: "Transparenz", title: "Datenquellen und Namensnennung", lead: "Der aktive Katalog in Tind 100 Version 1.17.0 (Build 41) ist eine Zusammenstellung von 1.500 Datensätzen mit dokumentierten Quellen und Lizenzen aus offenen Kartverket-Daten. Die Dokumentation ist keine rechtliche Garantie.", dated: true, sections: [
        { title: "Aktiver Katalog in Build 41", body: ["Der Katalog enthält 1.500 eindeutige Datensätze: genau 100 in jeder der 15 norwegischen Provinzen. Amtliche Namen, alternative Schreibweisen, Objektart, Ortsnamenkennung und Repräsentationspunkt stammen aus SSR. Modellhöhe und repräsentative Gipfelpunkte werden für 1.114 Datensätze aus DTM10 und für 386 Datensätze aus prüfsummengebundener Høyde-DTM1-Evidenz abgeleitet. Gemeinde- und Provinzzuordnung werden mit Kommuneinfo geprüft.", "Koordinaten und Höhen sind modellabgeleitete Repräsentationen, keine vermessenen Gipfelmarken, Feldprüfungen oder Routenempfehlungen."], links: [["SSR / Ortsnamen", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"]] },
        { title: "Lizenz, Namensnennung und Änderungen", body: ["Für die genannten Quellen SSR, DTM10, Høyde DTM1 und Kommuneinfo ist die Verfügbarkeit mit Namensnennung unter CC BY 4.0 dokumentiert. Der Quellenhinweis lautet „© Kartverket“. Tind 100 hat die Angaben ausgewählt, kombiniert, berechnet, gerundet und geordnet; Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr.", "CC BY 4.0 erlaubt die Weiterverwendung zu ihren Bedingungen. Bei Katalogdaten müssen daher die verlangte Namensnennung, der Lizenzhinweis und die Änderungsangabe erhalten bleiben. Diese Quellen- und Lizenzbewertung ist keine Rechtsberatung oder Garantie für jede denkbare Nutzung."], links: [["Offene Daten und Lizenz", "../open-data/"], ["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Nicht enthaltene Kataloginhalte", body: ["Der aktive Katalog enthält keine übernommenen Tourenbeschreibungen oder Texte zu Route, Zugang, Parken oder Sicherheit, keine Prominenzwerte und keine Katalogfelder kommerzieller oder gemeinschaftlicher Tourendienste.", "Die Reihenfolge ist eine redaktionelle Auswahl von Tind 100 und keine einheitliche Rangliste der höchsten oder prominentesten Gipfel Norwegens."], tone: "notice" },
        { title: "Online-Karten und Offline-Grenze", body: ["Build 41 lädt Kartverket-Toporaster online bis maximal Zoomstufe 11. Neue dauerhafte Offline-Downloads, direkte Downloadaufrufe und die Nutzung älterer Pakete sind deaktiviert. Mögliche ältere lokale Pakete können weiterhin gelöscht werden. Rechte an Kartenkacheln sind getrennt zu betrachten und folgen nicht automatisch aus der CC-BY-4.0-Grundlage des Katalogs."], links: [["Hinweise zu Drittanbietern", "../third-party-notices/"], ["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap und Overpass", body: ["OpenStreetMap und Overpass sind keine Quellen des aktiven vorinstallierten Katalogs mit 1.500 Datensätzen. Die App enthält ältere Synchronisierungscodes für einen fehlenden Provinzkatalog; alle 15 vollständigen Kataloge in Build 41 sind vor einem solchen Ersatz geschützt. Getrennte OpenStreetMap-Daten unterliegen der ODbL und werden © OpenStreetMap-Mitwirkende zugeschrieben."], links: [["OpenStreetMap-Urheberrecht", "https://www.openstreetmap.org/copyright", "external"]] },
        { title: "Fehler und Korrekturen", body: ["Informationen können falsch oder veraltet sein. Melde konkrete Fehler über den Support und nenne möglichst eine offizielle Quelle. Sende keine geschützten Tourentexte oder vollständigen Drittdatenbanken."], links: [["Support", "../support/"]] }
      ]},
      "zh-Hans": { eyebrow: "透明度", title: "数据来源与署名", lead: "Tind 100 1.17.0 版（构建 41）的活动目录，是基于 Kartverket 开放数据、来源与许可已有文档记录的 1,500 条记录汇编。相关文档并非法律保证。", dated: true, sections: [
        { title: "构建 41 的活动目录", body: ["目录包含 1,500 条唯一记录：挪威 15 个郡各 100 条。授权名称、替代拼写、对象类型、地名编号和代表点来自 SSR。1,114 条记录的模型海拔和代表性峰顶点源自 DTM10，386 条记录源自以校验和绑定的 Høyde DTM1 证据。市镇和郡归属通过 Kommuneinfo 核验。", "坐标和海拔是模型推导的代表值，并非实地测量的峰顶标志、现场核验或路线建议。"], links: [["SSR / 地名", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"]] },
        { title: "许可、署名与修改说明", body: ["已有文档表明，已识别的 SSR、DTM10、Høyde DTM1 和 Kommuneinfo 来源采用 CC BY 4.0 许可并要求署名，来源署名为“© Kartverket”。Tind 100 对信息进行了选择、组合、计算、取整和排序；Kartverket 未审批、背书或质量核验 Tind 100，也不提供保证。", "CC BY 4.0 允许依照许可条件再利用。继续使用目录数据时，必须保留所要求的署名、许可说明和修改说明。此来源与许可评估不构成法律意见，也不保证适用于所有可能的用途。"], links: [["开放数据与许可", "../open-data/"], ["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "目录未包含的内容", body: ["活动目录不含继承的徒步说明，也不含路线、通行、停车或安全文字，不含地形突起度数值，也不含商业或社区徒步服务的第三方目录字段。", "目录顺序是 Tind 100 的编辑选择，并非挪威最高或最突出山峰的统一排名。"], tone: "notice" },
        { title: "在线地图与离线边界", body: ["构建 41 在线获取 Kartverket 地形栅格，最大缩放级别为 11。新的持久离线下载、直接下载调用及旧包的使用均已停用。旧版可能保留的本地包仍可删除。地图切片权利属于独立事项，并不会自动随目录的 CC BY 4.0 依据而适用。"], links: [["第三方声明", "../third-party-notices/"], ["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap 与 Overpass", body: ["OpenStreetMap 与 Overpass 并非活动预装 1,500 条记录目录的来源。App 保留了用于缺失郡目录的旧版同步代码；构建 41 中全部 15 个完整郡目录均受保护，不会被该机制替换。任何独立的 OpenStreetMap 数据均受 ODbL 约束，并署名 © OpenStreetMap 贡献者。"], links: [["OpenStreetMap 版权", "https://www.openstreetmap.org/copyright", "external"]] },
        { title: "错误与更正", body: ["信息可能有误或已过时。请通过支持报告具体错误，并尽可能提供权威来源。请勿发送受版权保护的徒步文字或完整第三方数据集。"], links: [["支持", "../support/"]] }
      ]}
    },

    "open-data": {
      nb: { eyebrow: "Åpne offentlige data", title: "Åpne data og lisens", lead: "Her beskrives det åpne datagrunnlaget for den aktive katalogen i Tind 100 versjon 1.17.0 (bygg 41), hvordan det er bearbeidet og hvilke vilkår som følger med.", dated: true, sections: [
        { title: "1 500 kilde- og rettighetsdokumenterte katalogposter", body: ["Den aktive forhåndsinstallerte katalogen har 1 500 unike poster og nøyaktig 100 topper i hvert av Norges 15 fylker. Autoriserte prioriterte navn, alternative skrivemåter, objekttype, stedsnummer og representasjonspunkt kommer fra Kartverkets Sentralt stedsnavnregister (SSR). Kommune- og fylkestilhørighet er kontrollert med Kommuneinfo.", "Katalogen inneholder ingen arvede turbeskrivelser eller tekster om rute, adkomst, parkering eller sikkerhet, ingen prominensverdier og ingen tredjeparts katalogfelt fra kommersielle eller fellesskapsbaserte turtjenester. Dokumentasjonen er ikke en juridisk garanti."], links: [["Full kildeoversikt", "../data-sources/"]] },
        { title: "DTM10 og Høyde DTM1", body: ["Modellhøyde og representative toppunkt er utledet fra DTM10 for 1 114 poster og kontrollsumbundet Høyde DTM1-evidens for 386 poster. Verdiene er beregnet og avrundet av Tind 100 og er ikke oppmålte toppmerker, feltkontroll eller ruteanbefaling."], links: [["DTM10-datasett", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1-datasett", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"]] },
        { title: "CC BY 4.0", body: ["De identifiserte SSR-, DTM10-, Høyde DTM1- og Kommuneinfo-kildene er dokumentert som tilgjengelige under Creative Commons Navngivelse 4.0 Internasjonal. Kildeangivelsen er «© Kartverket». Tind 100 har valgt, kombinert, beregnet, avrundet og rangert dataene; Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti.", "CC BY 4.0 tillater kopiering, deling og bearbeiding på lisensens vilkår. Viderebruk må beholde påkrevd kreditering, lisenshenvisning og opplysning om bearbeiding. Nettstedets egen lisens begrenser ikke rettigheter du får direkte fra datalisensgiveren. Dette er en dokumentert kilde- og lisensvurdering, ikke juridisk rådgivning eller garanti."], links: [["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Last ned den aktive katalogen", body: ["JSON-filen er en byteidentisk offentlig kopi av appens aktive katalog i versjon 1.17.0 (bygg 41). Kontrollsummen er SHA-256 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.", "Ved viderebruk skal du kreditere «Tind 100-katalog v1.17.0 (bygg 41), basert på data © Kartverket», lenke til CC BY 4.0 og opplyse om Tind 100s utvelgelse, kombinasjon, beregning, avrunding og rangering. Filen inneholder ikke brukerdata, appkildekode, kartfliser, privat korrespondanse, rå evidens eller historiske kataloger."], links: [["Last ned katalogen (JSON)", "open-data/seed_peaks-v1.17.0-build41.json"], ["SHA-256-kontrollsum", "open-data/seed_peaks-v1.17.0-build41.json.sha256"]] },
        { title: "Offisielle kildeinnganger", body: ["Lenkene nedenfor er kildenes egne katalog- eller tjenesteoppføringer."], links: [["SSR / Stedsnavn", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"], ["Tredjepartsmerknader", "../third-party-notices/"]] },
        { title: "Kartfliser er en egen rettighetsgrense", body: ["Bygg 41 bruker Kartverkets toporaster på nett med maksimal zoom 11. Nye vedvarende offline-nedlastinger, direkte nedlastingskall og servering av eldre pakker er deaktivert; eventuelle eldre lokale pakker kan fortsatt slettes. Katalogens CC BY 4.0-grunnlag skal ikke tolkes som en generell tillatelse til å kopiere eller distribuere kartfliser."], tone: "notice", links: [["Tredjepartsmerknader", "../third-party-notices/"]] }
      ]},
      en: { eyebrow: "Open public data", title: "Open data and licence", lead: "This page explains the open-data basis of the active catalogue in Tind 100 version 1.17.0 (build 41), how it was changed and the terms that apply.", dated: true, sections: [
        { title: "1,500 source-and-rights-documented catalogue records", body: ["The active preinstalled catalogue contains 1,500 unique records and exactly 100 peaks in each of Norway’s 15 counties. Authorised prioritised names, alternative spellings, feature type, place-name ID and representation point come from Kartverket’s Central Place Name Register (SSR). Municipality and county assignment are checked with Kommuneinfo.", "The catalogue contains no inherited hiking descriptions or route, access, parking or safety prose, no prominence values and no third-party catalogue fields from commercial or community hiking services. The documentation is not a legal guarantee."], links: [["Complete source overview", "../data-sources/"]] },
        { title: "DTM10 and Høyde DTM1", body: ["Model elevations and representative summit points are derived from DTM10 for 1,114 records and checksum-bound Høyde DTM1 evidence for 386 records. Tind 100 calculated and rounded the values; they are not surveyed summit markers, field checks or route recommendations."], links: [["DTM10 dataset", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1 dataset", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"]] },
        { title: "CC BY 4.0", body: ["The identified SSR, DTM10, Høyde DTM1 and Kommuneinfo sources are documented as available under Creative Commons Attribution 4.0 International. The source credit is “© Kartverket”. Tind 100 selected, combined, calculated, rounded and ranked the data; Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty.", "CC BY 4.0 permits copying, sharing and adaptation under its terms. Reuse must retain the required attribution, licence notice and indication of changes. The website’s own licence does not limit rights granted directly by the data licensor. This is a documented source and licence assessment, not legal advice or a guarantee."], links: [["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Download the active catalogue", body: ["The JSON file is a byte-for-byte public copy of the app’s active catalogue in version 1.17.0 (build 41). Its SHA-256 checksum is 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.", "For reuse, credit “Tind 100 catalogue v1.17.0 (build 41), based on data © Kartverket”, link to CC BY 4.0 and indicate Tind 100’s selection, combination, calculation, rounding and ranking. The file contains no user data, app source code, map tiles, private correspondence, raw evidence or historical catalogues."], links: [["Download catalogue (JSON)", "open-data/seed_peaks-v1.17.0-build41.json"], ["SHA-256 checksum", "open-data/seed_peaks-v1.17.0-build41.json.sha256"]] },
        { title: "Official source entry points", body: ["The links below are the source providers’ own catalogue or service entries."], links: [["SSR / place names", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"], ["Third-party notices", "../third-party-notices/"]] },
        { title: "Map tiles are a separate rights boundary", body: ["Build 41 uses Kartverket online topographic raster tiles with a maximum zoom level of 11. New persistent offline downloads, direct download calls and serving of older packages are disabled; any retained legacy local packages can still be deleted. The catalogue’s CC BY 4.0 basis must not be read as general permission to copy or distribute map tiles."], tone: "notice", links: [["Third-party notices", "../third-party-notices/"]] }
      ]},
      es: { eyebrow: "Datos públicos abiertos", title: "Datos abiertos y licencia", lead: "Esta página explica la base de datos abiertos del catálogo activo de Tind 100 versión 1.17.0 (compilación 41), sus modificaciones y las condiciones aplicables.", dated: true, sections: [
        { title: "1.500 registros con fuentes y licencias documentadas", body: ["El catálogo activo preinstalado contiene 1.500 registros únicos y exactamente 100 cumbres en cada una de las 15 provincias de Noruega. Los nombres autorizados y prioritarios, grafías alternativas, tipo de elemento, identificador toponímico y punto de representación proceden del Registro Central de Topónimos de Kartverket (SSR). La provincia y el municipio se comprueban con Kommuneinfo.", "El catálogo no contiene descripciones de excursiones heredadas ni textos de ruta, acceso, aparcamiento o seguridad, valores de prominencia ni campos externos de servicios comerciales o comunitarios. La documentación no es una garantía jurídica."], links: [["Resumen completo de fuentes", "../data-sources/"]] },
        { title: "DTM10 y Høyde DTM1", body: ["Las altitudes de modelo y los puntos representativos se derivan de DTM10 para 1.114 registros y de evidencia Høyde DTM1 vinculada por suma de comprobación para 386 registros. Tind 100 calculó y redondeó los valores; no son hitos topográficos medidos, comprobaciones de campo ni recomendaciones de ruta."], links: [["Conjunto DTM10", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Conjunto Høyde DTM1", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"]] },
        { title: "CC BY 4.0", body: ["Las fuentes identificadas SSR, DTM10, Høyde DTM1 y Kommuneinfo están documentadas como disponibles bajo Creative Commons Atribución 4.0 Internacional. El crédito de la fuente es «© Kartverket». Tind 100 seleccionó, combinó, calculó, redondeó y ordenó los datos; Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías.", "CC BY 4.0 permite copiar, compartir y adaptar conforme a sus condiciones. La reutilización debe conservar la atribución, el aviso de licencia y la indicación de cambios exigidos. La licencia propia del sitio no limita los derechos concedidos directamente por el licenciante de los datos. Esta es una evaluación documentada, no asesoramiento jurídico ni una garantía."], links: [["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Descargar el catálogo activo", body: ["El archivo JSON es una copia pública idéntica byte por byte del catálogo activo de la versión 1.17.0 (compilación 41). Su suma SHA-256 es 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.", "Para reutilizarlo, atribuye «Catálogo Tind 100 v1.17.0 (compilación 41), basado en datos © Kartverket», enlaza CC BY 4.0 e indica la selección, combinación, cálculo, redondeo y ordenación realizados por Tind 100. El archivo no contiene datos de usuarios, código fuente, teselas, correspondencia privada, evidencia sin procesar ni catálogos históricos."], links: [["Descargar catálogo (JSON)", "open-data/seed_peaks-v1.17.0-build41.json"], ["Suma SHA-256", "open-data/seed_peaks-v1.17.0-build41.json.sha256"]] },
        { title: "Accesos oficiales a las fuentes", body: ["Los enlaces siguientes son las entradas oficiales del catálogo o servicio de cada fuente."], links: [["SSR / topónimos", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"], ["Avisos de terceros", "../third-party-notices/"]] },
        { title: "Las teselas tienen un límite de derechos independiente", body: ["La compilación 41 usa el toporáster en línea de Kartverket con un nivel máximo de zoom 11. Las nuevas descargas persistentes sin conexión, las llamadas directas de descarga y el uso de paquetes antiguos están desactivados; los posibles paquetes locales antiguos aún pueden eliminarse. La base CC BY 4.0 del catálogo no debe interpretarse como permiso general para copiar o distribuir teselas."], tone: "notice", links: [["Avisos de terceros", "../third-party-notices/"]] }
      ]},
      de: { eyebrow: "Offene öffentliche Daten", title: "Offene Daten und Lizenz", lead: "Diese Seite erläutert die Open-Data-Grundlage des aktiven Katalogs in Tind 100 Version 1.17.0 (Build 41), seine Bearbeitung und die geltenden Bedingungen.", dated: true, sections: [
        { title: "1.500 Katalogdatensätze mit dokumentierten Quellen und Lizenzen", body: ["Der aktive vorinstallierte Katalog enthält 1.500 eindeutige Datensätze und genau 100 Gipfel in jeder der 15 norwegischen Provinzen. Amtliche priorisierte Namen, alternative Schreibweisen, Objektart, Ortsnamenkennung und Repräsentationspunkt stammen aus Kartverkets zentralem Ortsnamenregister SSR. Gemeinde- und Provinzzuordnung werden mit Kommuneinfo geprüft.", "Der Katalog enthält keine übernommenen Tourenbeschreibungen oder Texte zu Route, Zugang, Parken oder Sicherheit, keine Prominenzwerte und keine externen Katalogfelder kommerzieller oder gemeinschaftlicher Tourendienste. Die Dokumentation ist keine rechtliche Garantie."], links: [["Vollständige Quellenübersicht", "../data-sources/"]] },
        { title: "DTM10 und Høyde DTM1", body: ["Modellhöhen und repräsentative Gipfelpunkte werden für 1.114 Datensätze aus DTM10 und für 386 Datensätze aus prüfsummengebundener Høyde-DTM1-Evidenz abgeleitet. Tind 100 hat die Werte berechnet und gerundet; sie sind keine vermessenen Gipfelmarken, Feldprüfungen oder Routenempfehlungen."], links: [["DTM10-Datensatz", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde-DTM1-Datensatz", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"]] },
        { title: "CC BY 4.0", body: ["Für die genannten Quellen SSR, DTM10, Høyde DTM1 und Kommuneinfo ist die Verfügbarkeit unter Creative Commons Namensnennung 4.0 International dokumentiert. Der Quellenhinweis lautet „© Kartverket“. Tind 100 hat die Daten ausgewählt, kombiniert, berechnet, gerundet und geordnet; Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr.", "CC BY 4.0 erlaubt Kopieren, Teilen und Bearbeiten zu ihren Bedingungen. Bei Weiterverwendung müssen die verlangte Namensnennung, der Lizenzhinweis und die Änderungsangabe erhalten bleiben. Die eigene Website-Lizenz beschränkt keine Rechte, die der Datenlizenzgeber unmittelbar einräumt. Dies ist eine dokumentierte Bewertung, keine Rechtsberatung oder Garantie."], links: [["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Aktiven Katalog herunterladen", body: ["Die JSON-Datei ist eine byteidentische öffentliche Kopie des aktiven Katalogs in Version 1.17.0 (Build 41). Ihre SHA-256-Prüfsumme lautet 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872.", "Bei Weiterverwendung: „Tind-100-Katalog v1.17.0 (Build 41), basierend auf Daten © Kartverket“, Link zu CC BY 4.0 und Hinweis auf Auswahl, Kombination, Berechnung, Rundung und Rangfolge durch Tind 100. Die Datei enthält keine Nutzerdaten, keinen App-Quellcode, keine Kartenkacheln, private Korrespondenz, Rohbelege oder historischen Kataloge."], links: [["Katalog herunterladen (JSON)", "open-data/seed_peaks-v1.17.0-build41.json"], ["SHA-256-Prüfsumme", "open-data/seed_peaks-v1.17.0-build41.json.sha256"]] },
        { title: "Offizielle Quellenzugänge", body: ["Die folgenden Links führen zu den eigenen Katalog- oder Diensteinträgen der Quellen."], links: [["SSR / Ortsnamen", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"], ["Hinweise zu Drittanbietern", "../third-party-notices/"]] },
        { title: "Kartenkacheln bilden eine eigene Rechtegrenze", body: ["Build 41 nutzt Kartverket-Toporaster online bis maximal Zoomstufe 11. Neue dauerhafte Offline-Downloads, direkte Downloadaufrufe und die Nutzung älterer Pakete sind deaktiviert; mögliche ältere lokale Pakete können weiterhin gelöscht werden. Die CC-BY-4.0-Grundlage des Katalogs ist keine allgemeine Erlaubnis zum Kopieren oder Verteilen von Kartenkacheln."], tone: "notice", links: [["Hinweise zu Drittanbietern", "../third-party-notices/"]] }
      ]},
      "zh-Hans": { eyebrow: "开放公共数据", title: "开放数据与许可", lead: "本页说明 Tind 100 1.17.0 版（构建 41）活动目录的开放数据依据、所作修改及适用条件。", dated: true, sections: [
        { title: "1,500 条来源与许可已有文档记录的目录记录", body: ["活动预装目录包含 1,500 条唯一记录，挪威 15 个郡各 100 座山峰。授权优先名称、替代拼写、对象类型、地名编号和代表点来自 Kartverket 的中央地名注册库 SSR；市镇和郡归属通过 Kommuneinfo 核验。", "目录不含继承的徒步说明，也不含路线、通行、停车或安全文字，不含地形突起度数值，也不含商业或社区徒步服务的第三方目录字段。相关文档并非法律保证。"], links: [["完整数据来源", "../data-sources/"]] },
        { title: "DTM10 与 Høyde DTM1", body: ["1,114 条记录的模型海拔和代表性峰顶点源自 DTM10，386 条记录源自以校验和绑定的 Høyde DTM1 证据。数值由 Tind 100 计算并取整，并非实地测量的峰顶标志、现场核验或路线建议。"], links: [["DTM10 数据集", "https://data.norge.no/nb/datasets/a5d061e7-a455-45ae-8eeb-d2730ba73dd3/dtm-10-terrengmodell-utm33", "external"], ["Høyde DTM1 数据集", "https://data.norge.no/nb/datasets/1a7327eb-1fa5-3432-8dea-fc198a5ede13/hoyde-dtm1", "external"]] },
        { title: "CC BY 4.0", body: ["已有文档表明，已识别的 SSR、DTM10、Høyde DTM1 和 Kommuneinfo 来源采用知识共享署名 4.0 国际许可，来源署名为“© Kartverket”。Tind 100 对数据进行了选择、组合、计算、取整和排序；Kartverket 未审批、背书或质量核验 Tind 100，也不提供保证。", "CC BY 4.0 允许依照许可条件复制、分享和改编。继续使用时必须保留所要求的署名、许可说明和修改说明。网站自身许可不会限制数据许可方直接授予的权利。这是文档化的来源与许可评估，不构成法律意见或保证。"], links: [["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "下载当前目录", body: ["该 JSON 文件是 App 1.17.0 版（构建 41）当前目录的逐字节一致公开副本。SHA-256 校验值为 27d2a10424759d120e9c9b89b1dc3bdb4d323ca63fc98fe0bcbcacd4fe627872。", "继续使用时，请注明“Tind 100 目录 v1.17.0（构建 41），基于 © Kartverket 数据”，链接 CC BY 4.0，并说明 Tind 100 所作的选择、组合、计算、取整与排序。文件不含用户数据、App 源代码、地图切片、私人通信、原始证据或历史目录。"], links: [["下载目录（JSON）", "open-data/seed_peaks-v1.17.0-build41.json"], ["SHA-256 校验值", "open-data/seed_peaks-v1.17.0-build41.json.sha256"]] },
        { title: "官方来源入口", body: ["以下链接是来源方自己的数据目录或服务条目。"], links: [["SSR / 地名", "https://data.norge.no/nb/datasets/f855246a-fdb0-367d-98dd-684d59195887/stedsnavn-komplett-ssr", "external"], ["Kommuneinfo", "https://data.norge.no/nb/data-services/a0eaeac7-b5d7-36a0-b2b5-caff65b3364f/administrative-inndelinger-rest-api", "external"], ["第三方声明", "../third-party-notices/"]] },
        { title: "地图切片属于独立权利边界", body: ["构建 41 在线使用 Kartverket 地形栅格，最大缩放级别为 11。新的持久离线下载、直接下载调用及旧包的使用均已停用；旧版可能保留的本地包仍可删除。目录的 CC BY 4.0 依据不得解释为复制或分发地图切片的一般许可。"], tone: "notice", links: [["第三方声明", "../third-party-notices/"]] }
      ]}
    },

    "third-party-notices": {
      nb: { eyebrow: "Lisenser og tjenester", title: "Tredjepartsmerknader", lead: "Denne siden identifiserer tredjepartstjenester, data, lisenser og kreditering som er relevante for Tind 100 versjon 1.17.0 (bygg 41). Den er ikke juridisk rådgivning eller en garanti.", dated: true, sections: [
        { title: "Apple", body: ["Tind 100 bruker Apple Maps/MapKit til kart, geokoding og fylkesoppslag, og Game Center/iCloud til en begrenset fremdriftskopi. Når enheten allerede er innlogget i Game Center, starter appen integrasjonen automatisk; det finnes ingen egen påmelding i appen. Apple behandler nødvendige konto-, tjeneste-, nettverks- og sikkerhetskopidata etter sine egne vilkår og personvernregler.", "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone og iOS er navn eller varemerker som tilhører Apple Inc. Bruken innebærer ikke at Apple anbefaler eller kvalitetssikrer Tind 100."], links: [["Apples personvern", "https://www.apple.com/legal/privacy/", "external"], ["Apples standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Kartverkets åpne katalogdata", body: ["Den aktive 1 500-raderskatalogen bruker dokumenterte Kartverket-kilder: SSR, DTM10, Høyde DTM1 og Kommuneinfo. De identifiserte kildene er dokumentert under CC BY 4.0 med krediteringen «© Kartverket». Tind 100 har valgt, kombinert, beregnet, avrundet og rangert dataene. Kartverket har ikke godkjent, anbefalt eller kvalitetssikret Tind 100 og gir ingen garanti."], links: [["Åpne data og lisens", "../open-data/"], ["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Kartverkets online toporaster", body: ["Kartfliser er en egen rettighetsgrense fra toppkatalogen. Bygg 41 viser Kartverkets toporaster på nett med maksimal zoom 11 og synlig «© Kartverket»-kreditering. Nye vedvarende offline-nedlastinger, direkte nedlastingskall og servering av eldre pakker er deaktivert; eventuelle eldre lokale pakker kan fortsatt slettes. Ingen tekst her gir en videre tillatelse til kopiering eller distribusjon av kartfliser."], tone: "notice", links: [["Kartverkets bruksvilkår", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap og Overpass", body: ["OpenStreetMap og Overpass er ikke kilder for den aktive forhåndsinstallerte 1 500-raderskatalogen. Appen beholder eldre synkroniseringskode for en manglende fylkeskatalog, men alle 15 komplette fylkeskataloger i bygg 41 er beskyttet mot slik erstatning. Eventuelle separate OpenStreetMap-data er © OpenStreetMap-bidragsyterne og følger Open Database License (ODbL). Overpass-drift og OSM-datalisens er separate forhold."], links: [["OpenStreetMaps opphavsrett og ODbL", "https://www.openstreetmap.org/copyright", "external"], ["Overpass-bruk", "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html", "external"]] },
        { title: "GitHub Pages", body: ["Dette nettstedet driftes med GitHub Pages. Nettstedet har ingen egne analyseverktøy, annonsepiksler eller informasjonskapsler. GitHub kan behandle IP-adresse og andre tekniske besøksdata for sikkerhet og drift etter sin egen personvernerklæring."], links: [["GitHubs personvern", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
        { title: "Deling og eksterne lenker", body: ["Deling til andre tjenester starter bare når brukeren velger det. Delingslenken kan inneholde alias, statistikk, dato og begrensede toppopplysninger, men ikke toppkoordinat eller rutespor. Når en bruker sender til en delingstjeneste eller åpner Varsom, Fjellvettreglene eller et annet nettsted, gjelder tredjepartens egne vilkår og personvernregler."], links: [["Personvern", "../privacy/"], ["Vilkår", "../terms/"]] },
        { title: "Merknad om navn og garantier", body: ["Alle tredjepartsnavn, merker og tjenester tilhører sine respektive eiere. Kreditering eller interoperabilitet innebærer ikke sponsing, anbefaling eller godkjenning. Opplysningene kan endres; kontroller alltid de lenkede originalvilkårene og be om profesjonell rådgivning når det er nødvendig."], tone: "warning" }
      ]},
      en: { eyebrow: "Licences and services", title: "Third-party notices", lead: "This page identifies third-party services, data, licences and attribution relevant to Tind 100 version 1.17.0 (build 41). It is not legal advice or a guarantee.", dated: true, sections: [
        { title: "Apple", body: ["Tind 100 uses Apple Maps/MapKit for maps, geocoding and county lookup, and Game Center/iCloud for a limited progress copy. When the device is already signed in to Game Center, the app starts the integration automatically; there is no separate in-app opt-in. Apple processes the necessary account, service, network and backup data under its own terms and privacy rules.", "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone and iOS are names or trademarks of Apple Inc. Their use does not mean Apple endorses or quality-assures Tind 100."], links: [["Apple Privacy", "https://www.apple.com/legal/privacy/", "external"], ["Apple Standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Kartverket open catalogue data", body: ["The active 1,500-record catalogue uses documented Kartverket sources: SSR, DTM10, Høyde DTM1 and Kommuneinfo. The identified sources are documented under CC BY 4.0 with the credit “© Kartverket”. Tind 100 selected, combined, calculated, rounded and ranked the data. Kartverket has not approved, endorsed or quality-assured Tind 100 and provides no warranty."], links: [["Open data and licence", "../open-data/"], ["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Kartverket online topographic raster", body: ["Map tiles are a separate rights boundary from the peak catalogue. Build 41 displays Kartverket online topographic raster tiles with a maximum zoom level of 11 and visible “© Kartverket” attribution. New persistent offline downloads, direct download calls and serving of older packages are disabled; any retained legacy local packages can still be deleted. Nothing here grants broader permission to copy or distribute map tiles."], tone: "notice", links: [["Kartverket terms", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap and Overpass", body: ["OpenStreetMap and Overpass are not sources for the active preinstalled 1,500-record catalogue. The app retains legacy sync code for a missing county catalogue, but all 15 complete county catalogues in build 41 are protected from such replacement. Any separate OpenStreetMap data is © OpenStreetMap contributors and governed by the Open Database License (ODbL). Overpass operation and OSM data licensing are separate matters."], links: [["OpenStreetMap copyright and ODbL", "https://www.openstreetmap.org/copyright", "external"], ["Using Overpass", "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html", "external"]] },
        { title: "GitHub Pages", body: ["This website is hosted with GitHub Pages. It has no first-party analytics, advertising pixels or cookies. GitHub may process IP addresses and other technical visit data for security and operation under its own privacy statement."], links: [["GitHub Privacy Statement", "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
        { title: "Sharing and external links", body: ["Sharing to another service starts only when the user chooses it. A shared link may contain an alias, statistics, date and limited peak details, but not a summit coordinate or route track. When a user sends to a sharing service or opens Varsom, the Norwegian Mountain Code or another website, that third party’s own terms and privacy rules apply."], links: [["Privacy", "../privacy/"], ["Terms", "../terms/"]] },
        { title: "Names and warranties", body: ["All third-party names, marks and services belong to their respective owners. Attribution or interoperability does not imply sponsorship, endorsement or approval. Information may change; always check the linked original terms and seek professional advice where needed."], tone: "warning" }
      ]},
      es: { eyebrow: "Licencias y servicios", title: "Avisos de terceros", lead: "Esta página identifica servicios, datos, licencias y atribuciones de terceros relevantes para Tind 100 versión 1.17.0 (compilación 41). No constituye asesoramiento jurídico ni una garantía.", dated: true, sections: [
        { title: "Apple", body: ["Tind 100 usa Apple Maps/MapKit para mapas, geocodificación y búsqueda de provincia, y Game Center/iCloud para una copia limitada del progreso. Si el dispositivo ya tiene una sesión iniciada en Game Center, la app inicia la integración automáticamente; no existe una aceptación independiente dentro de la app. Apple trata los datos necesarios de cuenta, servicio, red y copias conforme a sus propias condiciones y normas de privacidad.", "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone e iOS son nombres o marcas de Apple Inc. Su uso no significa que Apple respalde o verifique Tind 100."], links: [["Privacidad de Apple", "https://www.apple.com/legal/privacy/", "external"], ["EULA estándar de Apple", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Datos abiertos de catálogo de Kartverket", body: ["El catálogo activo de 1.500 registros usa fuentes documentadas de Kartverket: SSR, DTM10, Høyde DTM1 y Kommuneinfo. Las fuentes identificadas están documentadas bajo CC BY 4.0 con el crédito «© Kartverket». Tind 100 seleccionó, combinó, calculó, redondeó y ordenó los datos. Kartverket no ha aprobado, respaldado ni verificado Tind 100 y no ofrece garantías."], links: [["Datos abiertos y licencia", "../open-data/"], ["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Toporáster en línea de Kartverket", body: ["Las teselas constituyen un límite de derechos independiente del catálogo. La compilación 41 muestra el toporáster en línea de Kartverket hasta el nivel máximo de zoom 11 y con atribución visible «© Kartverket». Las nuevas descargas persistentes sin conexión, las llamadas directas de descarga y el uso de paquetes antiguos están desactivados; los posibles paquetes locales antiguos aún pueden eliminarse. Este aviso no concede permiso más amplio para copiar o distribuir teselas."], tone: "notice", links: [["Condiciones de Kartverket", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap y Overpass", body: ["OpenStreetMap y Overpass no son fuentes del catálogo activo preinstalado de 1.500 registros. La app conserva código de sincronización antiguo para una provincia sin catálogo, pero los 15 catálogos completos de la compilación 41 están protegidos frente a esa sustitución. Los posibles datos separados de OpenStreetMap son © colaboradores de OpenStreetMap y se rigen por Open Database License (ODbL). El funcionamiento de Overpass y la licencia de OSM son asuntos distintos."], links: [["OpenStreetMap y ODbL", "https://www.openstreetmap.org/copyright", "external"], ["Uso de Overpass", "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html", "external"]] },
        { title: "GitHub Pages", body: ["Este sitio se aloja con GitHub Pages. No contiene análisis propios, píxeles publicitarios ni cookies propias. GitHub puede tratar direcciones IP y otros datos técnicos para seguridad y funcionamiento conforme a su propia declaración."], links: [["Privacidad de GitHub", "https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
        { title: "Compartir y enlaces externos", body: ["Compartir con otro servicio comienza solo cuando el usuario lo elige. El enlace puede contener alias, estadísticas, fecha y datos limitados de la cumbre, pero no la coordenada de la cumbre ni el recorrido. Al enviar a un servicio o abrir Varsom, el Código de Montaña noruego u otra web, se aplican sus propias condiciones y normas de privacidad."], links: [["Privacidad", "../privacy/"], ["Condiciones", "../terms/"]] },
        { title: "Nombres y garantías", body: ["Todos los nombres, marcas y servicios de terceros pertenecen a sus respectivos propietarios. La atribución o interoperabilidad no implica patrocinio, respaldo ni aprobación. La información puede cambiar; consulta siempre las condiciones originales enlazadas y solicita asesoramiento profesional cuando sea necesario."], tone: "warning" }
      ]},
      de: { eyebrow: "Lizenzen und Dienste", title: "Hinweise zu Drittanbietern", lead: "Diese Seite nennt Drittanbieterdienste, Daten, Lizenzen und Namensnennungen für Tind 100 Version 1.17.0 (Build 41). Sie ist keine Rechtsberatung oder Garantie.", dated: true, sections: [
        { title: "Apple", body: ["Tind 100 nutzt Apple Maps/MapKit für Karten, Geocodierung und Provinzsuche sowie Game Center/iCloud für eine begrenzte Fortschrittskopie. Ist das Gerät bereits bei Game Center angemeldet, startet die App die Integration automatisch; eine gesonderte Zustimmung in der App gibt es nicht. Apple verarbeitet erforderliche Konto-, Dienst-, Netzwerk- und Sicherungsdaten nach eigenen Bedingungen und Datenschutzregeln.", "Apple, Apple Maps, MapKit, Game Center, iCloud, iPhone und iOS sind Namen oder Marken von Apple Inc. Ihre Nutzung bedeutet nicht, dass Apple Tind 100 empfiehlt oder qualitätsgesichert hat."], links: [["Apple Datenschutz", "https://www.apple.com/legal/privacy/", "external"], ["Apple Standard EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Offene Katalogdaten von Kartverket", body: ["Der aktive Katalog mit 1.500 Datensätzen nutzt dokumentierte Kartverket-Quellen: SSR, DTM10, Høyde DTM1 und Kommuneinfo. Für die genannten Quellen ist CC BY 4.0 mit dem Quellenhinweis „© Kartverket“ dokumentiert. Tind 100 hat die Daten ausgewählt, kombiniert, berechnet, gerundet und geordnet. Kartverket hat Tind 100 weder genehmigt noch empfohlen oder qualitätsgesichert und übernimmt keine Gewähr."], links: [["Offene Daten und Lizenz", "../open-data/"], ["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Kartverket-Toporaster online", body: ["Kartenkacheln bilden eine eigene Rechtegrenze zum Gipfelkatalog. Build 41 zeigt Kartverket-Toporaster online bis maximal Zoomstufe 11 und mit sichtbarer Namensnennung „© Kartverket“. Neue dauerhafte Offline-Downloads, direkte Downloadaufrufe und die Nutzung älterer Pakete sind deaktiviert; mögliche ältere lokale Pakete können weiterhin gelöscht werden. Dieser Hinweis erteilt keine weitergehende Kopier- oder Verbreitungserlaubnis für Kartenkacheln."], tone: "notice", links: [["Kartverket-Bedingungen", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap und Overpass", body: ["OpenStreetMap und Overpass sind keine Quellen des aktiven vorinstallierten Katalogs mit 1.500 Datensätzen. Die App enthält ältere Synchronisierungscodes für einen fehlenden Provinzkatalog; alle 15 vollständigen Kataloge in Build 41 sind vor einem solchen Ersatz geschützt. Getrennte OpenStreetMap-Daten sind © OpenStreetMap-Mitwirkende und unterliegen der Open Database License (ODbL). Overpass-Betrieb und OSM-Datenlizenz sind getrennte Themen."], links: [["OpenStreetMap und ODbL", "https://www.openstreetmap.org/copyright", "external"], ["Overpass-Nutzung", "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html", "external"]] },
        { title: "GitHub Pages", body: ["Diese Website wird mit GitHub Pages betrieben. Sie hat keine eigenen Analysewerkzeuge, Werbepixel oder Cookies. GitHub kann IP-Adressen und andere technische Besuchsdaten für Sicherheit und Betrieb nach seiner eigenen Datenschutzerklärung verarbeiten."], links: [["GitHub-Datenschutz", "https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
        { title: "Teilen und externe Links", body: ["Das Teilen mit einem anderen Dienst startet nur nach Auswahl durch den Nutzer. Der Link kann Alias, Statistiken, Datum und begrenzte Gipfeldaten enthalten, aber keine Gipfelkoordinate und keinen Routentrack. Beim Senden an einen Dienst oder Öffnen von Varsom, dem norwegischen Bergkodex oder einer anderen Website gelten deren eigene Bedingungen und Datenschutzregeln."], links: [["Datenschutz", "../privacy/"], ["Bedingungen", "../terms/"]] },
        { title: "Namen und Gewährleistung", body: ["Alle Namen, Marken und Dienste Dritter gehören ihren jeweiligen Eigentümern. Namensnennung oder Interoperabilität bedeuten keine Förderung, Empfehlung oder Genehmigung. Informationen können sich ändern; prüfe stets die verlinkten Originalbedingungen und hole bei Bedarf professionelle Beratung ein."], tone: "warning" }
      ]},
      "zh-Hans": { eyebrow: "许可与服务", title: "第三方声明", lead: "本页列明与 Tind 100 1.17.0 版（构建 41）有关的第三方服务、数据、许可和署名。本页不构成法律意见或保证。", dated: true, sections: [
        { title: "Apple", body: ["Tind 100 使用 Apple Maps/MapKit 提供地图、地理编码和郡级查询，并使用 Game Center/iCloud 保存有限的进度副本。如果设备已登录 Game Center，App 会自动启动集成；App 内没有单独的选择加入开关。Apple 依据其自身条款和隐私规则处理必要的帐户、服务、网络和备份数据。", "Apple、Apple Maps、MapKit、Game Center、iCloud、iPhone 和 iOS 是 Apple Inc. 的名称或商标。使用这些名称并不表示 Apple 对 Tind 100 进行背书或质量核验。"], links: [["Apple 隐私", "https://www.apple.com/legal/privacy/", "external"], ["Apple 标准 EULA", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", "external"]] },
        { title: "Kartverket 开放目录数据", body: ["活动 1,500 条记录目录使用已有文档记录的 Kartverket 来源：SSR、DTM10、Høyde DTM1 和 Kommuneinfo。已有文档表明这些来源采用 CC BY 4.0，并署名“© Kartverket”。Tind 100 对数据进行了选择、组合、计算、取整和排序。Kartverket 未审批、背书或质量核验 Tind 100，也不提供保证。"], links: [["开放数据与许可", "../open-data/"], ["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"], ["CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/", "external"]] },
        { title: "Kartverket 在线地形栅格", body: ["地图切片与山峰目录属于不同的权利边界。构建 41 在线显示 Kartverket 地形栅格，最大缩放级别为 11，并显示“© Kartverket”署名。新的持久离线下载、直接下载调用及旧包的使用均已停用；旧版可能保留的本地包仍可删除。本声明不授予复制或分发地图切片的更广泛许可。"], tone: "notice", links: [["Kartverket 使用条款", "https://www.kartverket.no/api-og-data/vilkar-for-bruk", "external"]] },
        { title: "OpenStreetMap 与 Overpass", body: ["OpenStreetMap 与 Overpass 并非活动预装 1,500 条记录目录的来源。App 保留了用于缺失郡目录的旧版同步代码；构建 41 中全部 15 个完整郡目录均受保护，不会被该机制替换。任何独立的 OpenStreetMap 数据均为 © OpenStreetMap 贡献者，并受开放数据库许可 ODbL 约束。Overpass 服务运营与 OSM 数据许可属于不同事项。"], links: [["OpenStreetMap 与 ODbL", "https://www.openstreetmap.org/copyright", "external"], ["Overpass 使用说明", "https://dev.overpass-api.de/overpass-doc/en/preface/commons.html", "external"]] },
        { title: "GitHub Pages", body: ["本网站由 GitHub Pages 托管，不使用第一方分析工具、广告像素或 Cookie。GitHub 可能依据其自身隐私声明，为安全和运营处理 IP 地址及其他技术访问数据。"], links: [["GitHub 隐私声明", "https://docs.github.com/zh/site-policy/privacy-policies/github-general-privacy-statement", "external"]] },
        { title: "分享与外部链接", body: ["只有用户主动选择后，才会向其他服务分享。分享链接可能包含昵称、统计、日期和有限的山峰资料，但不包含山峰坐标或路线轨迹。向分享服务发送内容，或打开 Varsom、挪威山区安全守则及其他网站后，适用相应第三方的条款和隐私规则。"], links: [["隐私", "../privacy/"], ["条款", "../terms/"]] },
        { title: "名称与保证", body: ["所有第三方名称、商标和服务均归各自所有者。署名或互操作并不表示赞助、背书或批准。信息可能变化；请始终核对所链接的原始条款，并在需要时寻求专业意见。"], tone: "warning" }
      ]}
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
      .find(value => value.startsWith("nb") || value.startsWith("no") || value.startsWith("es") || value.startsWith("de") || value.startsWith("zh") || value.startsWith("en"));
    if (!browserLanguage) return "nb";
    if (browserLanguage.startsWith("no") || browserLanguage.startsWith("nb")) return "nb";
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
    [["nb", "Norsk"], ["en", "English"], ["es", "Español"], ["de", "Deutsch"], ["zh-Hans", "简体中文"]].forEach(([value, label]) => {
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
      const date = new Intl.DateTimeFormat(localeMap[lang], { dateStyle: "long" }).format(new Date(`${config.policyUpdatedISO}T12:00:00Z`));
      appendText(hero, "p", `${ui.updated}: ${date}. ${format(ui.version)}`, "meta-line");
    }
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
