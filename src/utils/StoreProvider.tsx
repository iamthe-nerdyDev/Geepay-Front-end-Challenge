import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext<ContextProps>({
  theme: "light",
  changeTheme() {},
  displaySidebar: false,
  setDisaplaySidebar: () => {},
});

export const useStore = () => useContext(Context);

type Props = { children?: React.ReactNode };

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<(typeof Themes)[number]>("light");
  const [displaySidebar, setDisaplaySidebar] = useState<boolean>(false);

  useEffect(() => {
    (function () {
      const _theme = localStorage.getItem("theme-prefrence");

      if (_theme) setTheme(_theme == "light" ? "light" : "dark");
    })();
  }, []);

  const changeTheme = (_theme: (typeof Themes)[number]) => setTheme(_theme);

  return (
    <Context.Provider value={{ theme, changeTheme, displaySidebar, setDisaplaySidebar }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
