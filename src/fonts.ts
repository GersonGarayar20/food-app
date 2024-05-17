import { Roboto, Poller_One } from "next/font/google";

export const pollerOne = Poller_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
