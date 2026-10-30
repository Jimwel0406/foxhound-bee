import Link from "next/link";

const ROWS = [
  [["Harvest", "/harvest"], ["Hives", "/hives"], ["Journal", "/journal"]],
  [["Our story", "/story"], null, ["Contact", "#support"]],
];
const POLICIES = [
  ["Privacy", "/"],
  ["Terms of use", "/"],
  ["Shipping & returns", "#support"],
  ["Warranty", "#support"],
];

export default function Footer() {
  return (
    <footer className="foot" id="support">
      <div className="foot-in">
        <div className="foot-main">
          <nav className="foot-comb" aria-label="Footer">
            {ROWS.map((row, r) => (
              <div className="foot-row" key={r}>
                {row.map((item) =>
                  item ? (
                    <Link className="foot-cell" href={item[1]} key={item[0]}>{item[0]}</Link>
                  ) : (
                    <Link className="foot-cell foot-cell--mark" href="/" key="home" aria-label="FoxHound Bee home">
                      <svg viewBox="0 0 32 32" aria-hidden="true"><use href="#i-mark" /></svg>
                    </Link>
                  )
                )}
              </div>
            ))}
          </nav>
          <div className="foot-say">
            <h2>Find your way<br />around the comb.</h2>
            <p>Questions about a hive or an order?<br />Pick a cell, or write to the keepers.</p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>&copy; 2026 FoxHound Bee</span>
          {POLICIES.map(([label, href]) => (
            <Link href={href} key={label}>{label}</Link>
          ))}
          <span className="foot-place">Cascade Foothills · Est. 2013</span>
        </div>
      </div>
    </footer>
  );
}
