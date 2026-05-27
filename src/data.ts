import { Dress, EventInfo } from './types';

export const CATALOG: Dress[] = [
  {
    id: "alba",
    name: "Vestido Alba",
    price: 1850,
    shortDescription: "Seda natural, 6 semanas de artesanía",
    longDescription: "Un diseño atemporal confeccionado en seda pura con un drapeado asimétrico que realza la silueta. Cada pliegue está fijado a mano.",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // Placeholder for actual 3D dress
    thumbnailUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2787&auto=format&fit=crop"
  },
  {
    id: "celeste",
    name: "Traje Celeste",
    price: 1200,
    shortDescription: "Lana virgen y lino",
    longDescription: "Dos piezas estructurado, de hombros definidos y caída fluida, perfecto para eventos de día.",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    thumbnailUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2820&auto=format&fit=crop"
  },
  {
    id: "luna",
    name: "Vestido Luna",
    price: 2100,
    shortDescription: "Tul bordado y organza",
    longDescription: "Bordados artesanales con motivos florales, ideal para una noche de ensueño. La falda tiene 5 capas de tul de diferentes tonos.",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    thumbnailUrl: "https://images.unsplash.com/photo-1566160913745-f0bbf38d06b6?q=80&w=2744&auto=format&fit=crop"
  },
  {
    id: "mar",
    name: "Conjunto Mar",
    price: 950,
    shortDescription: "Crepé satén",
    longDescription: "Falda midi y blusa de espalda descubierta. Minimalismo y sensualidad.",
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    thumbnailUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2787&auto=format&fit=crop"
  }
];

export const EVENTS: EventInfo[] = [
  {
    id: "paces-san-juan-2016",
    title: "Fiestas de Las Paces y San Juan",
    date: "23 Junio, 2016",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    description: "Colaboración especial con el excelentísimo Ayuntamiento y la presentadora de televisión Inma Mateos Ochovo, vistiendo con nuestras creaciones artesanales exclusivas creadas para este gran encuentro."
  },
  {
    id: "arnelio-fashion-day-2016",
    title: "Arnelio Cruz Fashion Day",
    date: "30 Abril, 2016",
    imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    description: "Un sofisticado desfile de moda al aire libre en la calle General Moscardó, celebrando el diseño artesano de autor. Una velada inolvidable acompañada de un selecto aperitivo y descuentos especiales de atelier para nuestras clientes."
  },
  {
    id: "feria-novios-intur-2015",
    title: "Feria de Novios INTUR",
    date: "31 Octubre, 2015",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description: "Exposición exclusiva de nuestra colección de novias y ceremonias de alta costura a medida. Un escaparate único de elegancia textil donde presentamos diseños únicos adaptados a cada personalidad."
  },
  {
    id: "fashion-night-alcazar-2015",
    title: "Fashion Night Alcázar",
    date: "8 Octubre, 2015",
    imageUrl: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop",
    description: "Espectacular pasarela nocturna donde presentamos la nueva colección otoño-invierno, desvelando vestidos únicos con cortes impecables y tejidos nobles."
  }
];
