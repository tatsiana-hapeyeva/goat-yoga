export type Locale = "en" | "ru" | "by";

type TranslationKeys = {
  hero: {
    title: string;
    slogan: string;
    button: string;
  };
};

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    hero: {
      title: "Goat yoga",
      slogan: "We're focused on improving your mental wellbeing",
      button: "Sign up for a class",
    },
  },
  ru: {
    hero: {
      title: "Козья йога",
      slogan: "Мы заботимся о вашем ментальном благополучии",
      button: "Записаться на занятие",
    },
  },
  by: {
    hero: {
      title: "Казіная ёга",
      slogan: "Мы клапоцімся пра ваш ментальны дабрабыт",
      button: "Запісацца на занятак",
    },
  },
};