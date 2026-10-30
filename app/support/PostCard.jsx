"use client";

import { useState } from "react";

export default function PostCard() {
  const [sent, setSent] = useState(false);
  function post(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <form className="sp-card" onSubmit={post}>
      <div className="sp-msg">
        <b>Dear keepers,</b>
        <label>Your message<textarea name="message" rows="4" required /></label>
        <label>Your email<input type="email" name="email" required autoComplete="email" /></label>
        <label>Order number, if any<input type="text" name="order" /></label>
      </div>
      <div className="sp-to">
        <div className="sp-stamp" aria-hidden="true"><span>FoxHound<br />Bee</span></div>
        <div className="sp-addr"><div>The Keepers</div><div>FoxHound Bee</div><div>Cascade Foothills</div></div>
        {sent
          ? <p className="sp-posted" role="status">Posted. A keeper replies within a day.</p>
          : <button className="sp-post" type="submit">Post it</button>}
      </div>
    </form>
  );
}
