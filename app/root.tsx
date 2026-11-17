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
import { CustomErrorBoundaryComponent, DonateQrCode, Footer, HamburgerMenu, Header, PromotionCarousel, RouteNewsLetterContainer } from "./components/header";
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
  },

  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },

  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },

  {
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Special+Elite&display=swap"
  },

  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },

  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },

  {
    rel: 'stylesheet',
    href: "https://fonts.googleapis.com/css2?family=Charis+SIL:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=PT+Serif+Caption:ital@0;1&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Rubik+Dirt&family=Special+Elite&display=swap"
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
      <HamburgerMenu />
      <Outlet />
      <RouteNewsLetterContainer />
      <PromotionCarousel />
      <DonateQrCode />
      <Footer />
    </div>
  );
}

export function ErrorBoundary() {

  return (
    <CustomErrorBoundaryComponent />
  )
}
