const PATHS = {
  frames: <><rect x="6" y="7" width="36" height="5" rx="1.5" /><path d="M12 15v26M20 15v26M28 15v26M36 15v26" /></>,
  rings: <><circle cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="11.5" /><circle cx="24" cy="24" r="5" /></>,
  shield: <><path d="M24 4l16 9v22l-16 9-16-9V13z" /><path d="M16.5 24.5l5.5 5.5 10-11" /></>,
  clock: <><circle cx="24" cy="24" r="18" /><path d="M24 13v11l7 5" /></>,
  bracket: <><path d="M14 7h20v11H14z" /><path d="M24 18v22M16 41h16" /></>,
  lens: <><circle cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="8" /><circle cx="24" cy="24" r="1.5" /></>,
  flame: <path d="M24 5c2 8 11 12 11 24a11 11 0 0 1-22 0c0-6 3-9 6-12 0 4 2 6 4 6 0-6-1-10 1-18z" />,
  wind: <path d="M6 18h24a6 6 0 1 0-6-6M6 27h32a6 6 0 1 1-6 6M6 36h14" />,
  plate: <><rect x="8" y="10" width="32" height="28" rx="4" /><path d="M16 20h16M16 28h16" /></>,
  crown: <path d="M8 37V16l9 9 7-12 7 12 9-9v21z" />,
  box: <><path d="M6 16l18-9 18 9v20l-18 9-18-9z" /><path d="M6 16l18 9 18-9M24 25v20" /></>,
  drop: <path d="M24 6c8 10 13 16 13 23a13 13 0 0 1-26 0c0-7 5-13 13-23z" />,
  jar: <><path d="M16 5h16v7H16z" /><path d="M13 12h22v4l2 4v20a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V20l2-4z" /><path d="M16 27h16" /></>,
  flower: <><circle cx="24" cy="12" r="6.5" /><circle cx="24" cy="36" r="6.5" /><circle cx="12" cy="24" r="6.5" /><circle cx="36" cy="24" r="6.5" /><circle cx="24" cy="24" r="3.5" /></>,
  never: <><circle cx="24" cy="24" r="18" /><path d="M11.5 36.5l25-25" /></>,
};

export default function SpecIcon({ name }) {
  return <svg className="pd-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">{PATHS[name]}</svg>;
}
