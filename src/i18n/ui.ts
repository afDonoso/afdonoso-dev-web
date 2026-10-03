/**
 * Site copy, per locale.
 *
 * The legal documents are NOT here — they are English-only Markdown in
 * src/content/, byte-synced with the iOS app. See CLAUDE.md.
 *
 * Provenance rule, and it matters: the English marketing copy was quoted from
 * the app's own English strings, so the Spanish is quoted from the app's own
 * Spanish strings — not translated fresh. Entries carrying a `// File::key`
 * comment are verbatim from
 *   BookTracker/iOS/BookTracker/BookTracker/Resources/Localization/*.xcstrings
 * and must not be "improved" here; fix them in the app and re-copy. Entries
 * marked `// site-original` have no app counterpart and belong to the site.
 *
 * Where the app's Spanish is shorter than the English (sessionBody is the clear
 * case), the app's wording wins. The site and the app must not say different
 * things.
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    common: {
      skipToContent: 'Skip to content',
      switchLanguage: 'Language',
      inEnglish: '',
      mode: {
        light: 'Light',
        dark: 'Dark',
        toLight: 'Switch to light mode',
        toDark: 'Switch to dark mode',
      },
      nav: {
        features: 'Features',
        privacy: 'Privacy',
        themes: 'Themes',
        support: 'Support',
        terms: 'Terms',
      },
      footer: {
        tagline: 'A reading journal for iOS.',
        chronica: 'Chronica',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service',
        support: 'Support',
        copy: '© 2026 · afdonoso.dev',
      },
    },

    home: {
      title: 'Andrés Donoso',
      description: 'Andrés Donoso — iOS and backend developer. Swift, SwiftUI, Vapor.',
      name: 'Andrés Donoso',
      role: 'iOS and backend developer. Swift, SwiftUI and Vapor.',
      projectsLabel: 'Projects',
      chronicaBlurb: 'A reading journal for iOS.',
    },

    landing: {
      title: 'Chronica · Your Reading Journey',
      description:
        'A reading tracker for iOS built like a private library. Sessions run on your Lock Screen, notes stay bound to their books, and nothing you write ever leaves your phone.',
      eyebrow: 'iOS',
      hero: {
        exLibris: 'Ex Libris',
        // App Store subtitle
        subtitle: 'Your Reading Journey',
        // site-original
        body: 'A reading tracker built like a private library. Sessions run on your Lock Screen, notes stay bound to their books, and nothing you write ever leaves your phone.',
        testflight: 'Join the TestFlight beta',
        testflightTitle: 'TestFlight link not issued yet',
        placeholderNote: '[ placeholder — link not issued ]',
        iconAlt: 'The Chronica app icon',
      },
      features: {
        eyebrow: 'The volume in four parts',
        plateWord: 'Plate',
        screenshotWord: 'screenshot',
        plates: [
          {
            // Onboarding::sessionHeadline
            title: 'Press play, put your phone down',
            // Onboarding::sessionBody
            body: 'A session keeps running on your Lock Screen, so you can log a reading session without unlocking your phone.',
            slot: 'session running',
            alt: 'Screenshot placeholder: reading session',
          },
          {
            // Onboarding::notesHeadline
            title: 'A commonplace book that outlives the book',
            // Onboarding::notesBody
            body: 'Save a quote, a word you looked up, or a passing thought; each one stays linked to the book it came from.',
            slot: 'chapter notes',
            alt: 'Screenshot placeholder: notes',
          },
          {
            // Onboarding::chronicleHeadline
            title: 'Write your own story',
            // Onboarding::chronicleBody
            body: 'Every day you meet your goal becomes a chapter, every streak a bound volume on your shelf.',
            slot: 'chronicle volume',
            alt: 'Screenshot placeholder: chronicle',
          },
          {
            // Onboarding::badgesHeadline
            title: 'Earn badges along the way',
            // Corrected against BadgeCopy.swift — volume badges are at 10/25/50/100
            // and year badges are separate, so this diverges from badgesBody on
            // purpose. If the badge roster changes, this line changes.
            body: 'Records from your finished shelf, habits like Night Owl, milestones at ten, twenty-five, fifty and a hundred volumes, and a seal for every year you meet your goal.',
            slot: 'badge cabinet',
            alt: 'Screenshot placeholder: badges',
          },
        ],
      },
      privacy: {
        eyebrow: 'Privacy, stated plainly',
        // Onboarding::beginBody — do not embellish this
        quote:
          '“Your shelf, your notes, and your reading history stay on your phone. Nothing leaves it unless you turn on iCloud sync.”',
        // site-original
        body: 'Chronica is offline-first. Your shelf, sessions, notes, stats and badges live on-device in SwiftData. There is no account, no login, and no analytics — only book searches reach a server, and they carry nothing about you. iCloud sync is off until you turn it on; when you do, your library moves through your own private iCloud account, which we cannot read.',
        pills: ['No account', 'No ads', 'No analytics SDKs', 'No cross-app tracking'],
        more: 'Read the full privacy policy →',
      },
      themes: {
        eyebrow: 'Six bindings',
        heading: 'Choose your binding',
        // site-original
        body: 'Six themes ship with the app — each one a different accent and gilt over the same warm paper.',
        groupLabel: 'App themes',
        exLibris: 'Ex Libris',
        continueReading: 'Continue reading',
        mottos: [
          // Profile::quote7
          'A room without books is a body without a soul.',
          'Old paper keeps its own weather.', // site-original
          'Read as the trees grow — slowly, and toward light.', // site-original
          'Bound in leather, opened in silence.', // site-original
          'The night is the longest chapter.', // site-original
          'Every margin is a small confession.', // site-original
        ],
      },
      editions: {
        eyebrow: 'Editions',
        heading: 'Free covers the reading. Gilt covers the record.',
        whatYouGet: 'What you get',
        free: 'Free',
        // Subscription::celebrationTitle — the tier is the "Gilt Edition"
        gilt: 'Gilt',
        included: 'Included',
        notIncluded: 'Not included',
        rows: [
          'Shelf — reading, owned, wishlist, finished',
          'Reading sessions with Lock Screen timer',
          'Chapter notes, quotes and definitions',
          'Badges and seals',
          'Search and barcode scanning',
          'The Chronicle — your reading bound as volumes',
          'Calendar and reading heatmap',
          'All-time statistics',
          'iCloud sync across your devices',
        ],
        themesRow: 'Themes',
        themesFree: 'Ink',
        themesGilt: 'All six',
      },
      cta: {
        heading: 'Begin your chronicle',
        // Claims nothing that isn't true yet.
        body: 'Chronica is in private testing. The public TestFlight link and App Store listing land here when they exist.',
        badgeAlt: 'App Store badge placeholder',
        badgeCaption: 'App Store badge',
      },
    },

    support: {
      title: 'Support · Chronica',
      description:
        'Support for Chronica: contact the developer directly, plus answers to the questions that come up most.',
      eyebrow: 'Support',
      heading: 'Something wrong?',
      body: "Write to me directly. It's one person reading these, and replies usually come within a couple of days.",
      mail: {
        label: 'Write to',
        note: 'Or, in the app: You → Contact support (it attaches your app and iOS version for you)',
      },
      faqEyebrow: 'Common questions',
      // site-original — these have no app counterpart
      faqs: [
        {
          q: 'Where is my reading data stored? Does it sync?',
          a: "On your device, in Apple's on-device storage. Your shelf, sessions, chapter notes, ratings, goals and preferences never leave your phone — there is no account and no server copy. Sync between devices isn't available yet; if it arrives, it will run through your own private iCloud account, not through us.",
        },
        {
          q: 'Can I export my data?',
          a: "Not yet — export is planned, not shipped. Today the app can delete your data (Delete all books, or Reset all data), but it can't hand it back to you as a file. If export matters to you, write in and say so; it moves the queue.",
        },
        {
          q: "What's included in Gilt Edition?",
          a: 'Everything free covers — shelf, reading sessions, notes, badges and search — plus the Chronicle, the calendar, the reading heatmap, all-time statistics, and all six themes. Free is a complete reading tracker; Gilt is the record it keeps of you.',
        },
        {
          q: 'How do I manage or cancel my subscription?',
          a: "Subscriptions are handled by Apple, not by Chronica — so cancelling happens in Settings on your device: tap your name, then Subscriptions, then Chronica. Apple's own guide is at support.apple.com/en-us/HT202039. Deleting the app does not cancel a subscription.",
          linkText: 'support.apple.com/en-us/HT202039',
        },
        {
          q: "Why can't I find a book in search?",
          a: "Book data comes from a third-party catalogue, ISBNdb, and it doesn't have everything — self-published titles, very new releases and some non-English editions are often missing. Try the ISBN or the barcode scanner first. If it's still absent, add it by hand: search has an Add manually option, and a manual book behaves like any other on your shelf.",
        },
        {
          q: 'How do I report a bug?',
          a: "Email chronica-support@afdonoso.dev with the four lines below — device, iOS version, app version, and what happened. Writing from the You tab's Contact support row is easier still: it fills in your app and iOS version before you start typing.",
        },
        {
          q: 'Where do I find my app version?',
          a: "The You tab → About. Version and build are listed under the app name; that's the number to quote in any bug report.",
        },
      ],
      report: {
        eyebrow: 'Reporting a problem',
        heading: 'Four lines make it fixable',
        body: "Without these I'm guessing. With them, most bugs are reproducible on the first try.",
        steps: [
          'Your device — iPhone 14, iPad Pro, and so on.',
          'Your iOS version — Settings → General → About.',
          'The Chronica version and build — the You tab → About.',
          'What you did, what happened, what you expected instead.',
        ],
      },
      closing:
        "Still stuck? Nobody arrives here in a good mood — say what happened in plain words and I'll take it from there.",
    },
  },

  es: {
    common: {
      skipToContent: 'Saltar al contenido',
      switchLanguage: 'Idioma',
      inEnglish: '(en inglés)',
      mode: {
        light: 'Claro',
        dark: 'Oscuro',
        toLight: 'Cambiar al modo claro',
        toDark: 'Cambiar al modo oscuro',
      },
      nav: {
        features: 'Funciones',
        privacy: 'Privacidad',
        themes: 'Temas', // Subscription::rowThemes
        support: 'Soporte', // Profile::sectionSupport
        terms: 'Términos',
      },
      footer: {
        tagline: 'Un diario de lectura para iOS.',
        chronica: 'Chronica',
        privacyPolicy: 'Política de privacidad', // Profile::privacyPolicy
        termsOfService: 'Términos del servicio', // Profile::termsOfService
        support: 'Soporte', // Profile::sectionSupport
        copy: '© 2026 · afdonoso.dev',
      },
    },

    home: {
      title: 'Andrés Donoso',
      description: 'Andrés Donoso — desarrollador iOS y backend. Swift, SwiftUI, Vapor.',
      name: 'Andrés Donoso',
      role: 'Desarrollador iOS y backend. Swift, SwiftUI y Vapor.',
      projectsLabel: 'Proyectos',
      chronicaBlurb: 'Un diario de lectura para iOS.',
    },

    landing: {
      title: 'Chronica · Tu viaje de lectura',
      description:
        'Un registro de lectura para iOS construido como una biblioteca privada. Las sesiones corren en tu pantalla de bloqueo, las notas quedan unidas a sus libros, y nada de lo que escribes sale de tu teléfono.',
      eyebrow: 'iOS',
      hero: {
        exLibris: 'Ex Libris', // Latin, untranslated in both
        // site-original — confirm against the App Store Connect Spanish subtitle
        // once one is set there.
        subtitle: 'Tu viaje de lectura',
        // site-original
        body: 'Un registro de lectura construido como una biblioteca privada. Las sesiones corren en tu pantalla de bloqueo, las notas quedan unidas a sus libros, y nada de lo que escribes sale de tu teléfono.',
        testflight: 'Únete a la beta de TestFlight',
        testflightTitle: 'El enlace de TestFlight aún no existe',
        placeholderNote: '[ marcador — enlace no emitido ]',
        iconAlt: 'El ícono de la app Chronica',
      },
      features: {
        eyebrow: 'El volumen en cuatro partes',
        plateWord: 'Lámina',
        screenshotWord: 'captura',
        plates: [
          {
            // Onboarding::sessionHeadline
            title: 'Presiona play y guarda tu teléfono',
            // Onboarding::sessionBody — the app's Spanish is shorter than the
            // English here. App wording wins; do not extend it on the site.
            body: 'Una sesión sigue corriendo en tu pantalla de bloqueo.',
            slot: 'sesión en curso',
            alt: 'Marcador de captura: sesión de lectura',
          },
          {
            // Onboarding::notesHeadline
            title: 'Un libro de apuntes que sobrevive al libro',
            // Onboarding::notesBody
            body: 'Guarda una cita, una palabra que buscaste o un pensamiento pasajero: cada una queda vinculada al libro del que salió.',
            slot: 'notas de capítulo',
            alt: 'Marcador de captura: notas',
          },
          {
            // Onboarding::chronicleHeadline
            title: 'Escribe tu propia historia',
            // Onboarding::chronicleBody
            body: 'Cada día que cumples tu meta se convierte en un capítulo. Cada racha se convierte en un volumen encuadernado en tu estante.',
            slot: 'volumen de la crónica',
            alt: 'Marcador de captura: crónica',
          },
          {
            // Onboarding::badgesHeadline
            title: 'Obtén insignias a lo largo de tu camino',
            // Carries the same BadgeCopy.swift correction as the English line,
            // so it diverges from Onboarding::badgesBody on purpose.
            body: 'Récords de tus libros terminados, hábitos como Night Owl, hitos en diez, veinticinco, cincuenta y cien volúmenes, y un sello por cada año en que cumples tu meta.',
            slot: 'gabinete de insignias',
            alt: 'Marcador de captura: insignias',
          },
        ],
      },
      privacy: {
        eyebrow: 'Privacidad, sin rodeos',
        // Onboarding::beginBody — do not embellish this
        quote:
          '«Tu estante, tus notas y tu historial de lectura permanecen en tu teléfono. Nada sale de ahí a menos que actives la sincronización con iCloud.»',
        // site-original
        body: 'Chronica funciona sin conexión desde el principio. Tu estante, tus sesiones, tus notas, tus estadísticas y tus insignias viven en el dispositivo, en SwiftData. No hay cuenta, no hay inicio de sesión y no hay analítica — solo las búsquedas de libros llegan a un servidor, y no llevan nada sobre ti. La sincronización con iCloud está desactivada hasta que tú la actives; cuando lo haces, tu biblioteca se mueve por tu propia cuenta privada de iCloud, que nosotros no podemos leer.',
        pills: ['Sin cuenta', 'Sin anuncios', 'Sin SDK de analítica', 'Sin rastreo entre apps'],
        more: 'Lee la política de privacidad completa →',
      },
      themes: {
        eyebrow: 'Seis encuadernaciones',
        heading: 'Elige tu encuadernación',
        // site-original
        body: 'La app trae seis temas — cada uno con un acento y un dorado distintos sobre el mismo papel cálido.',
        groupLabel: 'Temas de la app',
        exLibris: 'Ex Libris',
        continueReading: 'Seguir leyendo',
        mottos: [
          // Profile::quote7
          'Una habitación sin libros es como un cuerpo sin alma.',
          'El papel viejo guarda su propio clima.', // site-original
          'Lee como crecen los árboles: despacio y hacia la luz.', // site-original
          'Encuadernado en cuero, abierto en silencio.', // site-original
          'La noche es el capítulo más largo.', // site-original
          'Cada margen es una pequeña confesión.', // site-original
        ],
      },
      editions: {
        eyebrow: 'Ediciones',
        heading: 'Gratis cubre la lectura. Dorada cubre el registro.',
        whatYouGet: 'Qué incluye',
        free: 'Gratis',
        // Subscription::celebrationTitle — "Edición Dorada"
        gilt: 'Dorada',
        included: 'Incluido',
        notIncluded: 'No incluido',
        rows: [
          'Estantería — leyendo, en propiedad, deseados, terminados', // Shelf::short*
          'Sesiones de lectura con temporizador en la pantalla de bloqueo',
          'Notas de capítulo, citas y definiciones',
          'Insignias y sellos', // Subscription::rowBadges
          'Búsqueda y escaneo de códigos de barras',
          'La Crónica — tu lectura encuadernada en volúmenes', // Onboarding::chronicleEyebrow
          'Calendario y mapa de calor de lectura', // Subscription::rowHeatmap
          'Estadísticas de todo el tiempo',
          'Sincronización con iCloud entre tus dispositivos',
        ],
        themesRow: 'Temas', // Subscription::rowThemes
        themesFree: 'Ink', // Theme::themeNameInk — untranslated by design
        themesGilt: 'Los seis',
      },
      cta: {
        heading: 'Comienza tu crónica',
        // Claims nothing that isn't true yet.
        body: 'Chronica está en pruebas privadas. El enlace público de TestFlight y la ficha de la App Store aparecerán aquí cuando existan.',
        badgeAlt: 'Marcador del distintivo de la App Store',
        badgeCaption: 'distintivo App Store',
      },
    },

    support: {
      title: 'Soporte · Chronica',
      description:
        'Soporte de Chronica: escribe directamente al desarrollador y consulta las preguntas más frecuentes.',
      eyebrow: 'Soporte',
      heading: '¿Algo salió mal?',
      body: 'Escríbeme directamente. Es una sola persona leyendo estos mensajes, y las respuestas suelen llegar en un par de días.',
      mail: {
        label: 'Escribe a',
        note: 'O, dentro de la app: Tú → Contactar soporte (adjunta tu versión de la app y de iOS por ti)',
      },
      faqEyebrow: 'Preguntas frecuentes',
      // site-original — these have no app counterpart
      faqs: [
        {
          q: '¿Dónde se guardan mis datos de lectura? ¿Se sincronizan?',
          a: 'En tu dispositivo, en el almacenamiento local de Apple. Tu estante, tus sesiones, tus notas de capítulo, tus calificaciones, tus metas y tus preferencias nunca salen de tu teléfono — no hay cuenta ni copia en un servidor. La sincronización entre dispositivos todavía no existe; si llega, funcionará a través de tu propia cuenta privada de iCloud, no a través de nosotros.',
        },
        {
          q: '¿Puedo exportar mis datos?',
          a: 'Todavía no — la exportación está planeada, no publicada. Hoy la app puede borrar tus datos (Borrar todos los libros, o Restablecer todos los datos), pero no puede devolvértelos como archivo. Si la exportación te importa, escríbeme y dímelo; eso mueve la fila.',
        },
        {
          q: '¿Qué incluye la Edición Dorada?',
          a: 'Todo lo que cubre la versión gratuita — estantería, sesiones de lectura, notas, insignias y búsqueda — más la Crónica, el calendario, el mapa de calor de lectura, las estadísticas de todo el tiempo y los seis temas. La versión gratuita es un registro de lectura completo; la Dorada es el registro que lleva de ti.',
        },
        {
          q: '¿Cómo administro o cancelo mi suscripción?',
          a: 'Las suscripciones las gestiona Apple, no Chronica — así que la cancelación ocurre en Configuración de tu dispositivo: toca tu nombre, luego Suscripciones y luego Chronica. La guía de Apple está en support.apple.com/es-es/HT202039. Borrar la app no cancela la suscripción.',
          linkText: 'support.apple.com/es-es/HT202039',
        },
        {
          q: '¿Por qué no encuentro un libro en la búsqueda?',
          a: 'Los datos de los libros vienen de un catálogo de terceros, ISBNdb, y no lo tiene todo — los títulos autopublicados, las novedades muy recientes y algunas ediciones fuera del inglés suelen faltar. Prueba primero con el ISBN o con el escáner de códigos de barras. Si aun así no aparece, agrégalo a mano: la búsqueda tiene la opción Agregar manualmente, y un libro manual se comporta como cualquier otro en tu estante.',
        },
        {
          q: '¿Cómo reporto un error?',
          a: 'Escribe a chronica-support@afdonoso.dev con las cuatro líneas de abajo — dispositivo, versión de iOS, versión de la app y qué pasó. Escribir desde la fila Contactar soporte de la pestaña Tú es aún más fácil: completa tu versión de la app y de iOS antes de que empieces a escribir.',
        },
        {
          q: '¿Dónde encuentro la versión de la app?',
          a: 'En la pestaña Tú → Acerca de. La versión y la compilación aparecen bajo el nombre de la app; ese es el número que hay que citar en cualquier reporte.',
        },
      ],
      report: {
        eyebrow: 'Cómo reportar un problema',
        heading: 'Cuatro líneas lo hacen reparable',
        body: 'Sin ellas estoy adivinando. Con ellas, la mayoría de los errores se reproducen al primer intento.',
        steps: [
          'Tu dispositivo — iPhone 14, iPad Pro, y así.',
          'Tu versión de iOS — Configuración → General → Información.',
          'La versión y compilación de Chronica — pestaña Tú → Acerca de.',
          'Qué hiciste, qué pasó y qué esperabas en su lugar.',
        ],
      },
      closing:
        '¿Sigues atascado? Nadie llega aquí de buen humor — cuéntame qué pasó en palabras simples y yo sigo desde ahí.',
    },
  },
} as const;

/**
 * Key-parity guard.
 *
 * `astro check` is not installed, so a Spanish key missing from `ui.es` would
 * render as `undefined` in the page rather than failing anything. This walks
 * both dictionaries and throws during the build instead — a hole in the
 * translation should stop the deploy, not ship.
 */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => keyPaths(item, `${prefix}[${i}]`));
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) =>
      keyPaths(v, prefix ? `${prefix}.${k}` : k)
    );
  }
  return [prefix];
}

const enKeys = keyPaths(ui.en);
const esKeys = new Set(keyPaths(ui.es));
const missing = enKeys.filter((k) => !esKeys.has(k));
const extra = [...esKeys].filter((k) => !enKeys.includes(k));

if (missing.length || extra.length) {
  throw new Error(
    'src/i18n/ui.ts: the locale dictionaries are out of sync.\n' +
      (missing.length ? `  missing from "es": ${missing.join(', ')}\n` : '') +
      (extra.length ? `  present only in "es": ${extra.join(', ')}\n` : '')
  );
}
