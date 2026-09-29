export default function Header() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="FoxHound Bee home">
            <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
              <use href="#i-mark" />
            </svg>
            <span>FoxHound Bee</span>
          </a>
          <nav className="nav-links" id="navLinks" aria-label="Primary">
            <a href="#top" data-nav="top">Overview</a>
            <a href="#hives" data-nav="hives">Hives</a>
            <a href="#harvest" data-nav="harvest">Harvest</a>
            <a href="#journal" data-nav="journal">Journal</a>
            <a href="#support" data-nav="support">Support</a>
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
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "17px" }}>
              Your bag is empty.
            </p>
            <p className="small" style={{ marginTop: "6px" }}>
              The 2026 harvest is still in the extractor.
            </p>
            <a className="btn btn--primary btn--sm" href="#harvest" style={{ marginTop: "14px" }}>
              Shop the harvest
            </a>
          </div>
        </div>
        <div className="flyout" id="flyout">
          <a href="#top" data-nav="top">
            Overview <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </a>
          <a href="#hives" data-nav="hives">
            Hives <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </a>
          <a href="#harvest" data-nav="harvest">
            Harvest <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </a>
          <a href="#journal" data-nav="journal">
            Journal <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </a>
          <a href="#support" data-nav="support">
            Support <svg viewBox="0 0 24 24"><use href="#i-chev" /></svg>
          </a>
        </div>
      </header>

      <div className="announce">
        <a href="#harvest">
          Solstice Reserve is open for the season. Free shipping on crates over $60{" "}
          <span className="arrow">&rsaquo;</span>
        </a>
      </div>

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
