type SvgProps = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

const Themes = ["dark", "light"] as const;

type ContextProps = {
  theme: (typeof Themes)[number];
  changeTheme: (theme: (typeof Themes)[number]) => void;
  displaySidebar: boolean;
  setDisaplaySidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderStatus = ["Paid", "Refund"] as const;

type Order = {
  picture: string;
  name: string;
  date: string;
  amount: number;
  status: (typeof OrderStatus)[number];
};

type Platform = {
  name: string;
  amount: number;
  percentage: number;
  fill: string;
};
