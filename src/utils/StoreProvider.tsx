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
      const _theme = localStorage.getItem("theme-prefrence")
        ? localStorage.getItem("theme-prefrence") === "light"
          ? "light"
          : "dark"
        : "light";

      const { body } = document;

      if (_theme == "dark") body.classList.add("bg-dark");
      else body.classList.remove("bg-dark");

      setTheme(_theme);
    })();
  }, []);

  const changeTheme = (_theme: (typeof Themes)[number]) => {
    setTheme(_theme);

    const { body } = document;

    if (_theme == "dark") body.classList.add("bg-dark");
    else body.classList.remove("bg-dark");

    localStorage.setItem("theme-prefrence", _theme);
  };

  return (
    <Context.Provider value={{ theme, changeTheme, displaySidebar, setDisaplaySidebar }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
