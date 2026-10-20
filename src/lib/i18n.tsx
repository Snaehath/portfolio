import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import english from "@/messages/en.json";
import german from "@/messages/de.json";

export type Locale = "EN" | "DE";
type TranslationKey = keyof typeof english;

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const TranslationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = window.localStorage.getItem("portfolio-locale");
    return saved === "DE" ? "DE" : "EN";
  });

  const value = useMemo(() => ({
    locale,
    setLocale: (nextLocale: Locale) => {
      window.localStorage.setItem("portfolio-locale", nextLocale);
      setLocale(nextLocale);
    },
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useLocale = (): I18nContextValue => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useLocale must be used within TranslationProvider");
  return context;
};

export const useTranslations = () => {
  const { locale } = useLocale();
  return useCallback((key: TranslationKey, values?: Record<string, string | number>): string => {
    const template = locale === "DE" ? german[key] ?? english[key] : english[key];
    return template.replace(/\{(\w+)\}/g, (_, name: string) => String(values?.[name] ?? `{${name}}`));
  }, [locale]);
};
