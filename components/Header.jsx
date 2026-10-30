import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link className="brand" href="/" aria-label="FoxHound Bee home">
            <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
              <use href="#i-mark" />
            </svg>
            <span>FoxHound Bee</span>
          </Link>
          <nav className="nav-links" id="navLinks" aria-label="Primary">
            <Link href="/harvest" data-nav="harvest">Harvest</Link>
            <Link href="/hives" data-nav="hives">Hives</Link>
            <Link href="/journal" data-nav="journal">Journal</Link>
            <Link href="/support" data-nav="support">Support</Link>
          </nav>
          <div className="nav-tools">
            <button className="icon-btn" id="searchBtn" aria-label="Search foxhound.co">
              <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-search" /></svg>
            </button>
            <button className="icon-btn" id="bagBtn" aria-label="Shopping bag" aria-expanded="false">
              <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-bag" /></svg>
            </button>
            <button className="icon-btn menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false">
              <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-menu" /></svg>
            </button>
          </div>
          <div className="popover" id="bagPop" role="dialog" aria-label="Shopping bag">
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "18px" }}>
              Your bag is empty.
            </p>
            <p className="small" style={{ marginTop: "6px" }}>
              The 2026 harvest is still in the extractor.
            </p>
            <Link className="btn btn--primary btn--sm" href="/harvest" style={{ marginTop: "14px" }}>
              Shop the harvest
            </Link>
          </div>
        </div>
        <div className="flyout" id="flyout">
          <Link href="/harvest" data-nav="harvest">
            Harvest <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </Link>
          <Link href="/hives" data-nav="hives">
            Hives <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </Link>
          <Link href="/journal" data-nav="journal">
            Journal <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </Link>
          <Link href="/support" data-nav="support">
            Support <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </Link>
        </div>
      </header>


      <div className="overlay" id="searchOverlay">
        <div className="search-box">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-search" /></svg>
          <input id="searchInput" type="search" placeholder="Search foxhound.co" aria-label="Search" />
          <button className="icon-btn" id="searchClose" aria-label="Close search">
            &#10005;
          </button>
        </div>
        <p className="search-hint">
          Try &ldquo;HX-1&rdquo;, &ldquo;Vesper&rdquo;, &ldquo;pollination contract&rdquo;,
          &ldquo;frame 12&rdquo;. Press Esc to close.
        </p>
      </div>
    </>
  );
}


