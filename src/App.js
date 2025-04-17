
  );
}
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle, DollarSign, Image as ImageIcon } from "lucide-react";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const defaultEntrenamiento = {
  Lunes: "Pecho y tríceps",
  Martes: "Espalda y bíceps",
  Miércoles: "Ombro / Descanso activo",
  Jueves: "Pecho y tríceps",
  Viernes: "Piernas-Cardio",
  Sábado: "HIIT + Abs",
  Domingo: "Descanso"
};

const defaultAlimentacion = {
  Lunes: "Desayuno: Avena y fruta\nAlmuerzo: Pollo con arroz integral\nCena: Ensalada con atún",
  Martes: "Desayuno: Tostadas integrales con aguacate\nAlmuerzo: Lentejas\nCena: Pescado con verduras",
  Miércoles: "Desayuno: Cafe y Tostadas integrales\nAlmuerzo: Albondigascon ensalada \nCena: Sopa de verduras",
  Jueves: "Desayuno: Huevos revueltos\nAlmuerzo: Ensalada con pollo\nCena: Arroz integral y Pollo",
  Viernes: "Desayuno: Yogur con frutas\nAlmuerzo: Omelet con Queso y jamon \nCena: Verduras al vapor",
  Sábado: "Desayuno: Pan integral con mantequilla de maní\nAlmuerzo: Pasta integral con tomate\nCena: Permitido",
  Domingo: "Desayuno: Croissant integral\nAlmuerzo: Pollo al horno\nCena: Puré de papa y vegetales"
};

const Calendar = ({ title, data, editable, onChange }) => (
  <Card className="p-4 m-2 shadow-xl">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {days.map((day) => (
          <div key={day} className="border rounded-xl p-4 bg-white text-black shadow">
            <h3 className="text-lg font-semibold mb-2">{day}</h3>
            {editable ? (
              <Textarea
                value={data[day]}
                onChange={(e) => onChange(day, e.target.value)}
                className="text-sm"
              />
            ) : (
              <p className="whitespace-pre-line">{data[day]}</p>
            )}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Personalizado = () => {
  const [objetivo, setObjetivo] = useState("");
  const [preferencias, setPreferencias] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const generarPlan = () => {
    setRespuesta(`Plan personalizado para: ${objetivo}\nPreferencias: ${preferencias}\n\n✔ Lunes: Entrenamiento de fuerza\n✔ Martes: Comidas altas en proteína\n✔ Miércoles: Actividad ligera y frutas\n✔ Resto de la semana: Rutina equilibrada`);
  };

  return (
    <Card className="p-4 m-2 shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Plan Personalizado</h2>
        <div className="grid gap-4">
          <Input
            placeholder="¿Cuál es tu objetivo? (ej. perder peso, ganar masa, etc.)"
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
          />
          <Textarea
            placeholder="¿Tienes restricciones o preferencias alimenticias o de entrenamiento?"
            value={preferencias}
            onChange={(e) => setPreferencias(e.target.value)}
          />
          <Button onClick={generarPlan}>Generar Plan</Button>
          {respuesta && (
            <div className="mt-4 p-4 bg-gray-100 rounded-xl text-black whitespace-pre-line">
              {respuesta}
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-100 rounded-xl text-black">
            <h3 className="text-lg font-bold mb-2">¿Quieres un plan personalizado completo?</h3>
            <p className="mb-4">Ofrecemos asesoramiento completo y seguimiento personalizado. Para más información y pagos, contáctanos directamente por WhatsApp.</p>
            <a
              href="https://wa.me/1170169147"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
            >
              <DollarSign className="w-5 h-5" />
              Entrenamiento Personalizado - Contactar
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Billetera = () => {
  const historial = [
    { fecha: "01/04/2025", concepto: "Suscripción mensual", monto: "$5.00" },
    { fecha: "15/03/2025", concepto: "Plan personalizado", monto: "$3.00" },
    { fecha: "01/03/2025", concepto: "Suscripción mensual", monto: "$5.00" }
  ];

  const saldo = 12.0;

  return (
    <Card className="p-4 m-2 shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Billetera Virtual</h2>
        <p className="mb-2">Saldo disponible: <strong>${saldo.toFixed(2)}</strong></p>

        <h3 className="text-lg font-semibold mt-4 mb-2">Historial de Pagos:</h3>
        <ul className="space-y-2 mb-6">
          {historial.map((item, index) => (
            <li key={index} className="bg-gray-100 p-3 rounded-xl text-black">
              <div className="flex justify-between">
                <span>{item.fecha} - {item.concepto}</span>
                <span>{item.monto}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-green-100 text-black p-4 rounded-xl mb-4">
          <h4 className="text-lg font-bold mb-1">¡Forma parte del grupo exclusivo!</h4>
          <p className="mb-2">Al tener la suscripción mensual activa, accedés a un grupo de WhatsApp donde compartimos material exclusivo con todos los alumnos.</p>
          <a
            href="https://wa.me/1170169147"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar vía WhatsApp
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

const FotosProgreso = () => {
  const [fotos, setFotos] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map(file => URL.createObjectURL(file));
    setFotos([...fotos, ...urls]);
  };

  return (
    <Card className="p-4 m-2 shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Fotos de Progreso</h2>
        <input type="file" multiple accept="image/*" onChange={handleUpload} className="mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map((src, i) => (
            <img key={i} src={src} alt={`Progreso ${i + 1}`} className="rounded-xl shadow-lg object-cover" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Intro = () => (
  <section className="text-center p-6 mb-6">
    <h2 className="text-3xl font-bold mb-2">Bienvenido a Miranda 9-6</h2>
    <p className="text-lg max-w-2xl mx-auto">
      Tu plataforma integral para entrenar mejor, alimentarte saludablemente y lograr tus objetivos físicos.
      Aquí encontrarás calendarios semanales, planes personalizados y acceso directo a soporte.
    </p>
  </section>
);

const InfoGeneral = () => (
  <Card className="p-4 m-2 shadow-xl">
    <CardContent>
      <h2 className="text-xl font-bold mb-4">Información General</h2>
      <p className="text-base">
        Miranda 9-6 es una plataforma pensada para acompañarte en tu transformación física y bienestar.
        Ofrecemos orientación tanto en la parte física como nutricional, adaptándonos a tus metas.
        Nuestro equipo está comprometido a ayudarte a mejorar cada día.
      </p>
    </CardContent>
  </Card>
);

export default function EntrenamientoAlimentacion() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [entrenamientoData, setEntrenamientoData] = useState(defaultEntrenamiento);
  const [alimentacionData, setAlimentacionData] = useState(defaultAlimentacion);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto bg-gradient-to-br from-blue-600 via-indigo-400 to-purple-400 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Miranda 9-6</h1>

      {!isLoggedIn ? (
        <div className="text-center space-y-4 mb-8 max-w-xl mx-auto">
          <p className="text-xl font-medium">
            Bienvenido al Sitio que te va cambiar por completo tu sedentarismo. Pone tu nombre para comenzar este viaje.
          </p>
          <Input
            placeholder="Ingresa tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-black"
          />
          <Button onClick={handleLogin} disabled={!username}>Ingresar</Button>
        </div>
      ) : (
        <>
          <Intro />
          <InfoGeneral />
          <Tabs defaultValue="entrenamiento" className="w-full">
            <TabsList className="flex justify-center mb-4 flex-wrap gap-2">
              <TabsTrigger value="entrenamiento">Entrenamiento</TabsTrigger>
              <TabsTrigger value="alimentacion">Alimentación</TabsTrigger>
              <TabsTrigger value="personalizado">Personalizado</TabsTrigger>
              <TabsTrigger value="billetera">Billetera</TabsTrigger>
              <TabsTrigger value="progreso">Progreso</TabsTrigger>
            </TabsList>
            <TabsContent value="entrenamiento">
              <Calendar
                title="Calendario de Entrenamiento"
                data={entrenamientoData}
                editable={true}
                onChange={(day, val) =>
                  setEntrenamientoData({ ...entrenamientoData, [day]: val })
                }
              />
            </TabsContent>
            <TabsContent value="alimentacion">
              <Calendar
                title="Calendario de Alimentación Saludable"
                data={alimentacionData}
                editable={true}
                onChange={(day, val) =>
                  setAlimentacionData({ ...alimentacionData, [day]: val })
                }
              />
            </TabsContent>
            <TabsContent value="personalizado">
              <Personalizado />
            </TabsContent>
            <TabsContent value="billetera">
              <Billetera />
            </TabsContent>
            <TabsContent value="progreso">
              <FotosProgreso />
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
