"use client";
import { useState, useRef, useEffect } from "react";

import { addItem } from "../../../components/cart";

export default function BuyBox({ options, name, slug, image }) {
  const [pick, setPick] = useState(0);
  const [added, setAdded] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onAdd = () => {
    const [label, , price] = options[pick];
    addItem({ id: `${slug}:${label}`, slug, name, option: label, price, image });
    /* open the bag after this click has finished, so the page's outside-click handler doesn't close it */
    window.setTimeout(() => window.dispatchEvent(new Event("fh-bag-open")), 0);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 2600);
  };

  return (
    <div className="pd-buy">
      <fieldset className="pd-options">
        <legend className="pd-sr">Choose {name} option</legend>
        {options.map(([label, sub, price], i) => (
          <label className="pd-opt" key={label}>
            <input type="radio" name="option" checked={pick === i} onChange={() => setPick(i)} />
            <span className="pd-rad" aria-hidden="true" />
            <span><b>{label}</b><em>{sub}</em></span>
            <span className="pd-opt-price">${price}</span>
          </label>
        ))}
      </fieldset>
      <div className="pd-row">
        <span className="pd-price">${options[pick][2]}</span>
        <button type="button" className="pd-add" onClick={onAdd}>{added ? "Added" : "Add to bag"}</button>
      </div>
      <p className="pd-added" role="status">{added ? `${options[pick][0]} is in your bag.` : ""}</p>
    </div>
  );
}
