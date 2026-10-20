import React from "react";
import { PortfolioContainer } from "@/components/PortfolioContainer";
import { TranslationProvider } from "@/lib/i18n";

export const App: React.FC = () => {
  return (
    <TranslationProvider>
      <main className="min-h-screen">
        <PortfolioContainer />
      </main>
    </TranslationProvider>
  );
};

export default App;
