import { createI18n } from "vue-i18n";

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    pt: {
      header: {
        home: "Início",
        schedule: "Agenda",
        news: "Notícias",
        media: "Mídia",
      },
      midia: {
        midia: "Fotos",
      },
      general: {
        loading: "Carregando...",
        error: "Erro ao carregar",
      },
    },
    en: {
      header: {
        home: "Home",
        schedule: "Schedule ",
        news: "News",
        media: "Media",
      },
      midia: {
        midia: "Photos",
      },
      general: {
        loading: "Loading...",
        error: "Error loading",
      },
    },
    de: {
      header: {
        home: "Startseite",
        schedule: "Kalender",
        news: "Tagesordnung ",
        media: "Medien",
      },
      midia: {
        midia: "Bilder",
      },
      general: {
        loading: "Wird geladen...",
        error: "Fehler beim Laden",
      },
    },
  },
});
