import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type I18nContextType = {
    lang: Locale;
    setLang: (lang: Locale) => void;
    t: (typeof translations)[Locale]; // объект переводов для текущего языка
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<Locale>("en");

    const t = translations[lang];

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
};

/* eslint-disable-next-line react-refresh/only-export-components */
export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return ctx;
};
