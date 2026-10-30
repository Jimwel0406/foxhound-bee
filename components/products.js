const photo = (id, width = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=90`;

export const PRODUCTS = [
  {
    slug: "hx1", lines: ["HX-1."], name: "HX-1 cedar hive", kind: "Hive", price: 420,
    note: "Twenty frames of milled cedar, wired for a Monitor that never sleeps.",
    image: "/img/hx1-hive.jpg", alt: "HX-1 cedar hive with its lid lifted to reveal the frames",
    options: [["Hive only", "Ready for your own sensor", 420], ["Hive with Monitor", "Pre-paired and calibrated", 569]],
    specs: [["20", "Frames", "frames"], ["Cedar", "Milled", "rings"], ["10 yr", "Warranty", "shield"]],
    related: ["monitor", "optics", "nuc"],
  },
  {
    slug: "monitor", lines: ["Hive", "Monitor."], name: "Hive Monitor", kind: "Hive", price: 149,
    note: "Weight, weather and queen status. Logged every six minutes.",
    image: "/img/hive-monitor.jpg", alt: "Hive Monitor with its brass mounting hardware",
    options: [["Monitor", "Brass mount included", 149], ["Monitor with spare battery", "One swap, ready to go", 169]],
    specs: [["6 min", "Logged", "clock"], ["2 yr", "Coverage", "shield"], ["Brass", "Mount", "bracket"]],
    related: ["hx1", "optics", "smoker"],
  },
  {
    slug: "optics", lines: ["Optics."], name: "Optics", kind: "Hive", price: 189,
    note: "A lens that counts wings at the entrance and tells you when to open the box.",
    image: "/img/optics-entrance.jpg", alt: "Optics camera mounted at the hive entrance",
    options: [["Optics", "Entrance camera and mount", 189], ["Optics with Monitor", "Save $20 on the pair", 318]],
    specs: [["24/7", "Wing count", "lens"], ["Brass", "Mount", "bracket"], ["2 yr", "Coverage", "shield"]],
    related: ["monitor", "hx1", "smoker"],
  },
  {
    slug: "smoker", lines: ["Smoker", "No. 4."], name: "Smoker No. 4", kind: "Equipment", price: 96,
    note: "Brass, stainless, leather bellows.",
    image: photo("1781498269243-ca6119bd96a9", 1100), alt: "A beekeeper using a metal smoker",
    options: [["Smoker", "Brass and stainless", 96], ["Smoker with fuel", "One bag of cedar pellets", 108]],
    specs: [["Brass", "Body", "flame"], ["Steel", "Shield", "plate"], ["Leather", "Bellows", "wind"]],
    related: ["nuc", "hx1", "monitor"],
  },
  {
    slug: "nuc", lines: ["Nuc Box."], name: "Nuc Box", kind: "Equipment", price: 145,
    note: "Five frames, one laying queen, ready to move in.",
    image: photo("1702396304193-bb39891d9d02", 1100), alt: "Honeybees gathered on a hive",
    options: [["Nuc Box", "Five frames and a queen", 145], ["Nuc Box with spare frames", "A second set of five", 189]],
    specs: [["5", "Frames", "frames"], ["1", "Laying queen", "crown"], ["1 wk", "To ship", "box"]],
    related: ["hx1", "smoker", "monitor"],
  },
  {
    slug: "solstice", lines: ["Solstice."], name: "Solstice", kind: "Honey", price: 28,
    note: "Single-extraction wildflower honey. Pressed once, never blended.",
    image: photo("1558642452-9d2a7deb7f62"), alt: "Golden honey streaming from a wooden dipper",
    options: [["One jar", "340 g", 28], ["Case of six", "Save $18", 150]],
    specs: [["Once", "Pressed", "drop"], ["Never", "Blended", "never"], ["340 g", "Jar", "jar"]],
    related: ["vesper", "spring-no-2", "hx1"],
  },
  {
    slug: "vesper", lines: ["Vesper."], name: "Vesper", kind: "Honey", price: 34,
    note: "Dark, mineral, almost molasses. Buckwheat honey with a character of its own.",
    image: "/img/vesper.jpg", alt: "A glass jar of Vesper buckwheat honey",
    options: [["One jar", "340 g", 34], ["Case of six", "Save $20", 184]],
    specs: [["Buckwheat", "Flower", "flower"], ["Dark", "Colour", "drop"], ["340 g", "Jar", "jar"]],
    related: ["solstice", "spring-no-2", "hx1"],
  },
  {
    slug: "spring-no-2", lines: ["Spring", "No. 2."], name: "Spring No. 2", kind: "Honey", price: 26,
    note: "Apple bloom and clover. A different expression of the harvest.",
    image: photo("1572102329980-f9e3c4b955e1"), alt: "Spring honey in glass jars",
    options: [["One jar", "340 g", 26], ["Case of six", "Save $16", 140]],
    specs: [["Apple", "Bloom", "flower"], ["Pale", "Colour", "drop"], ["340 g", "Jar", "jar"]],
    related: ["solstice", "vesper", "hx1"],
  },
];

export const bySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
