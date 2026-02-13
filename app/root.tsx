import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import AOS from 'aos';

import "./tailwind.css";
import './root.css'
import { DonateQrCode, Footer, HamburgerMenu, Header, PromotionCarousel, RouteNewsLetterContainer } from "./components/header";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  { rel: 'icon', href: '../public/taaabasamu.png' },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },

  {
    rel: 'stylesheet',
    type: 'text/css',
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  },

  {
    rel: 'stylesheet',
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    type: 'text/css'
  },
  
  {
    rel: 'stylesheet',
    href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {

  useEffect(() => {
    AOS.init({})
    
  }, [])
  

  return (
    <div className="taabasamubody">
      <Header />
      <HamburgerMenu/>
      <Outlet />
      <RouteNewsLetterContainer />
      <PromotionCarousel />
      <DonateQrCode />
      <Footer />
    </div>
  );
}
