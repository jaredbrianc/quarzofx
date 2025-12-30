"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <CountdownBanner />
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
        <GuaranteeSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 22,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        // Si llegamos a 0:00:00, reiniciar a 22 minutos 22 segundos
        if (hours === 0 && minutes === 0 && seconds === 0) {
          return { hours: 0, minutes: 22, seconds: 22 };
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="fixed bg-rose-600 p-2 left-0 right-0 top-0 z-[9999]">
      <div className="flex items-center justify-center gap-2">
        <div className="text-center">
          <p className="text-xl uppercase text-white font-semibold m-0">
            80% DESCUENTO!
          </p>
          <p className="text-xl uppercase text-white font-semibold m-0">
            SE ACABA EN:{" "}
            <span className="lowercase">
              {timeLeft.hours > 0 && `${timeLeft.hours}h `}
              {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="bg-black w-full py-6 md:py-10 px-4 pt-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Logo eliminado */}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="bg-black w-full text-white pt-1 pb-5 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-5">
          Ya es hora de que comiences a <span className="text-cyan-500">ganar</span> en Forex
        </h1>
        <p className="text-lg">
          Tenemos un <strong><u>Equipo de Traders</u></strong> que analiza el mercado por ti y te envía{" "}
          <u>las mejores señales</u> al canal VIP, con el punto exacto de compra o venta 😎
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="bg-black w-full text-white pb-10 md:pb-20 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <div className="bg-white rounded-lg text-black grid grid-cols-12 items-center mb-6 w-full">
          <div className="col-span-12 lg:col-span-6 text-center p-4">
            <div className="items-center text-center flex flex-col">
              <p className="text-3xl text-red-500 line-through">Antes $40 USD</p>
              <p className="text-7xl font-semibold mb-1">$8 USD</p>
              <p className="font-semibold text-xl md:text-2xl">¡POR TIEMPO LIMITADO!</p>
              <p className="font-semibold text-xl md:text-lg mb-0 leading-relaxed">
                <span className="text-yellow-500 font-bold">Por menos de lo que gastas en un café</span>, recibe{" "}
                <span className="font-bold" style={{ color: '#00B4FF' }}>señales rentables</span> y aprende a{" "}
                <span className="uppercase font-extrabold text-yellow-500 underline decoration-2">ganar como un trader experto</span>.
              </p>
              <div className="flex flex-col items-center text-center mt-6">
                <a
                  href="#"
                  className="flex flex-col items-center text-white text-2xl font-semibold py-3 px-12 bg-cyan-500 hover:bg-cyan-700 border-b-4 border-cyan-600 shadow-[0_0_60px_0_rgba(0,0,0,0.3)] shadow-cyan-500/50 hover:shadow-none transition-all rounded-lg"
                >
                  <span>Comprar Ahora</span>
                  <span className="opacity-70 text-xl">100% segura por Hotmart</span>
                </a>
                <div className="font-medium mt-4 mb-4 text-center">
                  <p className="text-lg">Accede por $8/mes</p>
                  <p className="text-sm text-gray-600">Cupos limitados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 p-4 flex items-center justify-center sm:p-[22px]">
            <img
              src="https://ugc.same-assets.com/MPi4uXxcbOhGbSLSzzl4vTN4sFyt4HIq.jpeg"
              alt="Trading Signals Dashboard"
              className="w-full max-w-md h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="text-left w-full">
          <p className="text-2xl md:text-3xl font-semibold mb-1">
            Acceso VIP - <Image src="https://ext.same-assets.com/400954458/3691292431.png" alt="Logo" width={200} height={40} className="inline h-6 w-auto" />
          </p>
          <div className="flex items-center gap-2 mb-6">
            <div>
              <p className="text-sm">4.9 Estrellas</p>
              <p className="text-sm">Más de +100 Reseñas</p>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="flex items-center text-2xl font-light">
              <Check className="mr-2 text-green-400" />
              <span className="flex-1">Recibe de 10 a 20 señales por semana.</span>
            </p>
            <p className="flex items-center text-2xl font-light">
              <Check className="mr-2 text-green-400" />
              <span className="flex-1">Guía de trading - Conceptos Básicos de Forex</span>
            </p>
            <p className="flex items-center text-2xl font-light">
              <Check className="mr-2 text-green-400" />
              <span className="flex-1">Estrategias y Guía de como operar nuestras señales.</span>
            </p>
            <p className="flex items-center text-2xl font-light">
              <Check className="mr-2 text-green-400" />
              <span className="flex-1">Promedio de +1000 Pips mensuales</span>
            </p>
            <p className="flex items-center text-2xl font-light">
              <Check className="mr-2 text-green-400" />
              <span className="flex-1">Efectividad superior al 90%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="bg-gray-100 w-full text-black py-10 md:py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Único proveedor con garantía de satisfacción 100%
        </h2>
        <p className="text-xl text-neutral-500 mb-5">
          Nos respalda Hotmart, la plataforma de productos digitales más grande del mundo.
          Prueba el acceso VIP sin ningún riesgo, si no estás satisfecho, puedes solicitar un reembolso completo
          durante los primeros 7 días
        </p>
        <div className="flex items-center gap-4">
          <img
            alt="Hotmart"
            src="https://ugc.same-assets.com/tOS4IeN6SneLMIyqwRG6j3e9anHdaBju.png"
            className="h-24 w-auto"
          />
          <img
            alt="Money Back Guarantee"
            src="https://ugc.same-assets.com/0Sf5d05A5IGCYFlq640zyVGKjZ65SPKz.webp"
            className="h-24 w-auto"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-black w-full text-white py-10 md:py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Nuestros miembros VIP lo confirman
        </h2>
        <p className="text-xl text-neutral-500 mb-5">
          Tenemos más de 200 miembros satisfechos en nuestro grupo VIP
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-center px-4">
        <div className="flex justify-center">
          <img
            alt="Testimonio Christian Coronal"
            src="https://ugc.same-assets.com/yBZuPhVKRBKP-lULgztEMEIIpqZoMfPN.webp"
            className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-center">
          <img
            alt="Testimonio Jeff"
            src="https://ugc.same-assets.com/SJCHvPhv3_91tNJ2fv315G205ShCHVlO.webp"
            className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-center">
          <img
            alt="Testimonio Geovani Montoya"
            src="https://ugc.same-assets.com/aaY6GfBtJPLcyPx6YoUL0SzHQuj2VNVW.webp"
            className="w-full max-w-sm h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "¿Que hago después de comprar?",
      answer:
        "Recibirás dos correos electrónicos, uno con la factura de la compra y otro con una bienvenida y un botón para acceder a la plataforma de hotmart. Dentro de Hotmart encontrarás las guías descargables, en la primera vienen las instrucciones para acceder al grupo VIP.",
    },
    {
      question: "¿Como funciona este servicio?",
      answer: (
        <>
          <p>Es muy simple:</p>
          <p>1️⃣ - Realizas la compra</p>
          <p>2️⃣ - Accedes al grupo VIP</p>
          <p>3️⃣ - Recibes las señales todos los días</p>
          <p>4️⃣ - Operas en tu propia cuenta o broker.</p>
        </>
      ),
    },
    {
      question: "¿Es seguro comprar este servicio?",
      answer:
        "Claro que sí, nos respalda Hotmart, una de las plataformas de Productos digitales más prestigiosa del mundo.",
    },
    {
      question: "¿Como puedo comprar el servicio?",
      answer:
        "Le das click al botón de Comprar Ahora y eso te llevará directamente a la página de pago, donde debés poner tu información personal y método de pago.",
    },
    {
      question: "¿Qué metodos de pago aceptan?",
      answer:
        "Nosotros por tu seguridad utilizamos Hotmart que es la plataforma de Productos digitales más prestigiosa del mundo. Hotmart acepta Tarjeta de Debito o Crédito y también Paypal.",
    },
    {
      question: "¿Cómo funciona la garantía de reembolso?",
      answer:
        "Muy simple Hotmart te da 7 días para probar el servicio, si no te gusta te devuelven el dinero sin preguntas desde la misma plataforma.",
    },
    {
      question: "¿Es una suscripción recurrente?",
      answer: (
        <p>
          NO, Te cobramos <em><strong>solamente 1 única vez,</strong></em> y tienes acceso <strong>DE POR VIDA</strong>, no te hacemos cobros recurrentes como
          otros servicios si lo hacen sin avisar
        </p>
      ),
    },
  ];

  return (
    <section className="w-full text-black py-10 md:py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
          Estas son las consultas más frecuentes
        </h2>
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-5">
            <div className="flex">
              <span className="text-xl font-bold leading-6 me-3">{index + 1}.</span>
              <div>
                <h3 className="text-xl font-bold leading-6 mb-2">{faq.question}</h3>
                <div className="text-lg leading-6 text-neutral-500">
                  {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center text-center mt-6">
          <a
            href="#"
            className="flex flex-col items-center text-white text-2xl font-semibold py-3 px-12 bg-cyan-500 hover:bg-cyan-700 border-b-4 border-cyan-600 shadow-[0_0_60px_0_rgba(0,0,0,0.3)] shadow-cyan-500/50 hover:shadow-none transition-all rounded-lg"
          >
            <span>Comprar Ahora</span>
            <span className="opacity-70 text-xl">100% segura por Hotmart</span>
          </a>
          <p className="w-64 font-medium mt-4 mb-4 leading-5">
            Pagas hoy $8 USD solo una vez y tienes <u>acceso de por vida</u>
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-black w-full text-white py-10 md:py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-screen-lg mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          ¿Necesitas Ayuda? ¿Tienes alguna pregunta?
        </h2>
        <p className="text-xl md:text-2xl text-neutral-500 mb-5">
          No dudes en preguntarnos en Servicio al Cliente
        </p>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <a
          target="_blank"
          href="https://t.me/dailysignalspro"
          className="mb-10 flex flex-col items-center text-white text-2xl font-semibold py-3 px-12 bg-cyan-500 hover:bg-cyan-700 border-b-4 border-cyan-600 shadow-[0_0_60px_0_rgba(0,0,0,0.3)] shadow-cyan-500/50 hover:shadow-none transition-all rounded-lg"
          rel="noopener noreferrer"
        >
          <span>Contáctanos directo por telegram</span>
        </a>
        <p className="text-xl md:text-2xl text-neutral-500 mb-5">
          o síguenos en nuestro canal informativo de Telegram
        </p>
        <a
          target="_blank"
          href="https://t.me/+kgMtka3htygzM2Qx"
          className="flex flex-col items-center text-white text-2xl font-semibold py-3 px-12 bg-cyan-500 hover:bg-cyan-700 border-b-4 border-cyan-600 shadow-[0_0_60px_0_rgba(0,0,0,0.3)] shadow-cyan-500/50 hover:shadow-none transition-all rounded-lg"
          rel="noopener noreferrer"
        >
          <span>Únete al canal informativo</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full text-black py-10 md:py-20 px-4 bg-white">
      <div className="flex items-start flex-col max-w-screen-xl mx-auto gap-4">
        <Image
          src="https://ext.same-assets.com/400954458/3691292431.png"
          alt="Daily Signals Pro"
          width={200}
          height={40}
          className="h-6 w-auto"
        />
        <p className="font-medium">Copyright 2025 - Todos los derechos reservados</p>
        <p className="text-xs text-gray-500">
          *Este sitio no es parte del sitio web de Google™ ni de una red de sitios como Youtube™ o de ninguna empresa
          propiedad de Google™ o Youtube™. Además, este sitio web no está respaldado por Google™ Youtube™ o Facebook
          Inc. de ninguna manera. Google™ es una marca comercial de todas sus respectivas empresas, FACEBOOK™ es una
          marca comercial de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}
