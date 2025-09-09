import { useState } from "react";
import { CheckCircle2, FileText, Upload, MousePointerClick, ShieldCheck, MessageCircle } from "lucide-react";

export default function LandingPostulaFacil() {
  const [phone] = useState("991 963 019");
  const waLink = "https://wa.me/51991963019?text=Hola%20vengo%20de%20la%20web%20Postula%20F%C3%A1cil%20y%20quiero%20asesor%C3%ADa%20para%20postular";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-white font-bold">PF</span>
            <span className="font-semibold tracking-tight">Postula Fácil</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#servicios" className="hover:text-slate-900 text-slate-600">Servicios</a>
            <a href="#pasos" className="hover:text-slate-900 text-slate-600">Cómo funciona</a>
            <a href="#faq" className="hover:text-slate-900 text-slate-600">Preguntas</a>
          </nav>
          <a href={waLink} target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 shadow-sm transition">
            <MessageCircle className="h-4 w-4"/>
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-100 blur-3xl"/>
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl"/>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              ¿Quieres postular y no sabes cómo?
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Te acompaño paso a paso para presentar tu postulación <span className="font-semibold text-slate-800">sin errores</span> en convocatorias del Estado, colegios, ONGs y empresas. Atención 100% online para todo el Perú.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink} target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base shadow-md transition">
                <MessageCircle className="h-5 w-5"/>
                Escríbeme por WhatsApp
              </a>
              <a href="#servicios" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 text-base text-slate-800 hover:bg-slate-50">
                Ver servicios
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              <p className="italic">“No garantizo el puesto; garantizo tu postulación correcta.”</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card icon={<CheckCircle2 className="h-5 w-5 text-emerald-600"/>} title="Revisión de requisitos" subtitle="Verifico bases y formatos antes de enviar"/>
                <Card icon={<FileText className="h-5 w-5 text-sky-600"/>} title="CV ordenado" subtitle="Adaptado al formato solicitado"/>
                <Card icon={<Upload className="h-5 w-5 text-orange-500"/>} title="Digitalización" subtitle="Escaneo y armado de anexos"/>
                <Card icon={<MousePointerClick className="h-5 w-5 text-violet-600"/>} title="Postulación online" subtitle="Envió con constancia para tu respaldo"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Stat number="24h" label="Respuesta"/>
            <Stat number={phone} label="WhatsApp"/>
            <Stat number="100%" label="Atención online"/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-12 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Servicios principales</h2>
          <p className="text-slate-600 text-center mt-2">Todo lo que necesitas para postular sin estrés.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <ServiceCard icon={<FileText className="h-6 w-6"/>} title="Revisión de bases" desc="Checklist de requisitos, formatos y anexos."/>
            <ServiceCard icon={<Upload className="h-6 w-6"/>} title="Armado de expediente" desc="Orden de documentos, escaneo y conversión a PDF."/>
            <ServiceCard icon={<MousePointerClick className="h-6 w-6"/>} title="Envío de postulación" desc="Registro en plataforma y constancia para tu correo/WhatsApp."/>
          </div>

          <div className="mt-8 flex justify-center">
            <a href={waLink} target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 shadow">
              <MessageCircle className="h-5 w-5"/>
              Iniciar mi postulación ahora
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="pasos" className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">¿Cómo funciona?</h2>
              <ol className="mt-6 space-y-4 text-slate-700">
                <li className="flex gap-3"><span className="font-semibold">1.</span> Me escribes por WhatsApp y me envías la convocatoria o enlace.</li>
                <li className="flex gap-3"><span className="font-semibold">2.</span> Reviso requisitos y te digo qué documentos faltan.</li>
                <li className="flex gap-3"><span className="font-semibold">3.</span> Armamos el expediente (CV + anexos) y validamos.</li>
                <li className="flex gap-3"><span className="font-semibold">4.</span> Registro tu postulación y te entrego la constancia.</li>
              </ol>
              <p className="mt-6 flex items-center gap-2 text-emerald-700"><ShieldCheck className="h-5 w-5"/> Trabajo con <span className="font-semibold">confidencialidad</span> y <span className="font-semibold">transparencia</span>.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-sm">
              <form onSubmit={(e)=> e.preventDefault()} className="space-y-4">
                <h3 className="text-xl font-semibold">Déjame tus datos y te contacto</h3>
                <Input label="Nombre" placeholder="Tu nombre"/>
                <Input label="Convocatoria (enlace)" placeholder="Pega aquí el link"/>
                <Input label="WhatsApp" placeholder="991 963 019" defaultValue={phone}/>
                <a href={waLink} target="_blank" className="w-full inline-flex justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 shadow">
                  Enviar por WhatsApp
                </a>
                <p className="text-xs text-slate-500">*No garantizo el puesto; garantizo tu postulación correcta.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center">Preguntas frecuentes</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <FAQ q="¿Trabajas solo con convocatorias del Estado?" a="Trabajo con convocatorias del Estado (CAS, municipalidades, ministerios) y con privadas (colegios, empresas, ONGs)."/>
            <FAQ q="¿Qué recibo al finalizar?" a="La constancia/cargo de postulación y tu expediente digital organizado."/>
            <FAQ q="¿Puedo contactarte cualquier día?" a="Sí, atención online. Te respondo lo antes posible por WhatsApp."/>
            <FAQ q="¿Manejas mis datos de forma segura?" a="Sí, tus documentos se manejan con estricta confidencialidad."/>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <a href={waLink} target="_blank" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 shadow">
              <MessageCircle className="h-5 w-5"/> Escribir por WhatsApp ({phone})
            </a>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} Postula Fácil. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={waLink} target="_blank" className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 shadow-lg">
        <MessageCircle className="h-5 w-5"/>
        WhatsApp
      </a>
    </div>
  );
}

function Card({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <p className="text-2xl font-extrabold tracking-tight text-slate-900">{number}</p>
      <p className="text-sm text-slate-600">{label}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-slate-900/90 text-white flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder, defaultValue }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
      />
    </label>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="font-semibold text-slate-900">{q}</p>
      <p className="mt-2 text-sm text-slate-600">{a}</p>
    </div>
  );
}

