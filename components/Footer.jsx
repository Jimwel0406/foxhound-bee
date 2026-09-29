const COLUMNS = [
  {
    heading: "Shop",
    links: [
      ["All honey", "#harvest"],
      ["Solstice Reserve", "#harvest"],
      ["Spring No. 2", "#harvest"],
      ["Vesper", "#harvest"],
      ["The crate", "#harvest"],
      ["Dippers & jar keys", "#harvest"],
    ],
  },
  {
    heading: "Hives",
    links: [
      ["HX-1 hive", "#hives"],
      ["Nuc box", "#hives"],
      ["Frame 12", "#hives"],
      ["Hive Monitor", "#hives"],
      ["Optics camera", "#hives"],
      ["Smoker No. 4", "#hives"],
      ["Spare parts", "#hives"],
    ],
  },
  {
    heading: "Services",
    links: [
      ["Pollination contracts", "#support"],
      ["Orchard survey", "#support"],
      ["Colony counts", "#support"],
      ["Swarm collection", "#support"],
      ["Extraction tours", "#support"],
      ["Beekeeper apprenticeship", "#support"],
    ],
  },
  {
    heading: "Journal",
    links: [
      ["Latest episode", "#journal"],
      ["Field notes", "#journal"],
      ["Yield data", "#journal"],
      ["Forage map", "#journal"],
      ["The 2013 ledger", "#journal"],
      ["Transcripts", "#journal"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["Our story", "#top"],
      ["The sixteen yards", "#top"],
      ["How we keep bees", "#top"],
      ["Contact", "#support"],
      ["Warranty", "#support"],
      ["Shipping & returns", "#support"],
      ["Careers", "#support"],
      ["Press kit", "#support"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="foot" id="support">
      <div className="wrap">
        <div className="foot-legal">
          <p>
            1. Solstice Reserve is a single-extraction wildflower honey drawn from yards 04,
            07 and 11 between 3 and 19 June 2026. Moisture content is printed on every label.
            Crystallisation is normal and is not a defect; stand the jar in warm water below
            40 &deg;C to reverse it. Free shipping applies to crates of $60 or more within
            the continental region and excludes freighted hive orders.
          </p>
          <p>
            2. HX-1 warranty covers joinery, finish and hardware for ten years from the date
            of purchase, transferable once to a second owner, and is void if the body has been
            planed, rebated or drilled. Monitor coverage is two years and includes one battery
            replacement. Pollination contract terms, including drop dates, colony counts and
            spray exclusions, are set out in a signed schedule issued before bloom.
          </p>
        </div>
        <div className="foot-rule"></div>
        <div className="foot-cols">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>Copyright &copy; 2026 FoxHound Bee Company. All rights reserved.</span>
          <a href="#top">Privacy</a>
          <a href="#top">Terms of use</a>
          <a href="#top">Sales policy</a>
          <a href="#top">Legal</a>
          <a href="#top">Site map</a>
          <span style={{ marginLeft: "auto" }}>Cascade Foothills · Est. 2013</span>
        </div>
      </div>
    </footer>
  );
}
