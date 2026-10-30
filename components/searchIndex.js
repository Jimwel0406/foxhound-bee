/* Everything the search box can find. `words` are extra terms people might type. */
const SEARCH_INDEX = [
  { title: "Solstice", kind: "Honey", href: "/product/solstice", words: "wildflower honey jar $28 season" },
  { title: "Vesper", kind: "Honey", href: "/product/vesper", words: "buckwheat honey jar $34 dark mineral" },
  { title: "Spring No. 2", kind: "Honey", href: "/product/spring-no-2", words: "apple bloom clover honey jar $26 pale" },
  { title: "HX-1 cedar hive", kind: "Hive", href: "/product/hx1", words: "hx1 hive box cedar bees" },
  { title: "Hive Monitor", kind: "Hive", href: "/product/monitor", words: "sensor weight warmth alerts phone" },
  { title: "Optics", kind: "Hive", href: "/product/optics", words: "camera entrance lens" },
  { title: "Smoker No. 4", kind: "Equipment", href: "/product/smoker", words: "smoker bellows brass tool $96" },
  { title: "Frame 12", kind: "Equipment", href: "/hives#frame", words: "frame wax foundation comb" },
  { title: "Nuc Box", kind: "Equipment", href: "/product/nuc", words: "nuc nucleus queen starter colony $145" },
  { title: "Valley Floor", kind: "Journal", href: "/journal", words: "episode 11 podcast story" },
  { title: "First Frost", kind: "Journal", href: "/journal", words: "episode 10 winter story" },
  { title: "Queen Cells", kind: "Journal", href: "/journal", words: "episode 09 queen story" },
  { title: "The Nuc Yard", kind: "Journal", href: "/journal", words: "episode 08 nuc story" },
  { title: "Reading a frame", kind: "Journal", href: "/journal#field-notes", words: "guide field notes brood" },
  { title: "Yield curve", kind: "Journal", href: "/journal#field-notes", words: "data harvest numbers" },
  { title: "Forage map", kind: "Journal", href: "/journal#field-notes", words: "species flowers bloom" },
  { title: "Our story", kind: "About", href: "/story", words: "keepers apiary yards valleys 2013 practices mites" },
  { title: "Orders & delivery", kind: "Support", href: "/support#orders", words: "tracking order shipped packed delivery days" },
  { title: "Shipping & returns", kind: "Support", href: "/support#shipping", words: "rates free flat refund return postage" },
  { title: "Warranty", kind: "Support", href: "/support#warranty", words: "guarantee two years repair claim" },
  { title: "Hive care", kind: "Support", href: "/support#hive-care", words: "first week setup level stand seat frames pair monitor" },
  { title: "Contact", kind: "Support", href: "/support#contact", words: "email message write keepers help question" },
];

const POPULAR = ["Solstice", "HX-1 cedar hive", "Shipping & returns", "Warranty"];

function norm(s) {
  return s.toLowerCase().replace(/[^a-z0-9$ ]+/g, " ").replace(/\s+/g, " ").trim();
}

export function searchSite(query, limit = 6) {
  const q = norm(query);
  if (!q) return POPULAR.map((t) => SEARCH_INDEX.find((e) => e.title === t));
  const terms = q.split(" ");
  const scored = [];
  SEARCH_INDEX.forEach((e) => {
    const title = norm(e.title);
    const hay = title + " " + norm(e.kind) + " " + norm(e.words);
    if (!terms.every((t) => hay.includes(t))) return;
    let score = 1;
    if (title === q) score = 100;
    else if (title.startsWith(q)) score = 50;
    else if (norm(e.kind) === q) score = 40;
    else if (title.includes(q)) score = 30;
    else if (terms.every((t) => title.includes(t))) score = 20;
    scored.push([score, e]);
  });
  return scored.sort((a, b) => b[0] - a[0]).slice(0, limit).map((x) => x[1]);
}
