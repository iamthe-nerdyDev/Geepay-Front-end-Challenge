import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<ContextProps>({
  theme: "light",
  toggleTheme() {},
});

export const useStore = () => useContext(Context);

type Props = { children?: React.ReactNode };

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<(typeof Themes)[number]>("light");

  useEffect(() => {
    (function () {
      const _theme = localStorage.getItem("theme-prefrence");

      if (_theme) setTheme(_theme == "light" ? "light" : "dark");
    })();
  }, []);

  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");

  return <Context.Provider value={{ theme, toggleTheme }}>{children}</Context.Provider>;
};

export default StoreProvider;
