export default function Sprite() {
  return (
    <svg className="sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gHoney" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F7C155"/><stop offset="1" stopColor="#DE8010"/>
      </linearGradient>
      <linearGradient id="gLens" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#20323C"/><stop offset="1" stopColor="#0A1116"/>
      </linearGradient>
      <linearGradient id="gSteel" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#A9B0B7"/><stop offset=".45" stopColor="#E3E7EA"/>
        <stop offset="1" stopColor="#9AA2A9"/>
      </linearGradient>
    </defs>

    <symbol id="i-mark" viewBox="0 0 32 32">
      <path d="M16 1.8 27.6 8.5v13.4L16 28.6 4.4 21.9V8.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="16" cy="11.2" r="2.05" fill="currentColor"/>
      <ellipse cx="11.3" cy="12.7" rx="3.2" ry="1.6" transform="rotate(-32 11.3 12.7)" fill="currentColor" opacity=".5"/>
      <ellipse cx="20.7" cy="12.7" rx="3.2" ry="1.6" transform="rotate(32 20.7 12.7)" fill="currentColor" opacity=".5"/>
      <rect x="12.9" y="14.4" width="6.2" height="2.5" rx="1.25" fill="currentColor"/>
      <rect x="13.5" y="17.6" width="5" height="2.3" rx="1.15" fill="currentColor"/>
      <rect x="14.2" y="20.6" width="3.6" height="2.1" rx="1.05" fill="currentColor"/>
    </symbol>

    <symbol id="i-bee" viewBox="0 0 24 24">
      <ellipse cx="6.8" cy="9.4" rx="4.1" ry="2.3" transform="rotate(-32 6.8 9.4)" fill="#fff" opacity=".72"/>
      <ellipse cx="17.2" cy="9.4" rx="4.1" ry="2.3" transform="rotate(32 17.2 9.4)" fill="#fff" opacity=".72"/>
      <ellipse cx="12" cy="13.6" rx="5" ry="6" fill="#2B221A"/>
      <path d="M7.7 11.6h8.6M8.4 15.2h7.2" stroke="#F3E7CE" strokeWidth="1.7" strokeLinecap="round"/>
      <circle cx="12" cy="6.6" r="3" fill="#2B221A"/>
    </symbol>

    <symbol id="i-search" viewBox="0 0 24 24">
      <path d="M10.5 4l5.63 3.25v6.5L10.5 17l-5.63-3.25v-6.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M15.5 16.2 20.5 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </symbol>
    <symbol id="i-bag" viewBox="0 0 24 24">
      <path d="M5 8h14l-1 12.5H6zM9 8V6.5a3 3 0 0 1 6 0V8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.4 11l1.73 1v2l-1.73 1-1.73-1v-2zM13.86 11l1.73 1v2l-1.73 1-1.73-1v-2zM12.13 14l1.73 1v2l-1.73 1-1.73-1v-2z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    </symbol>
    <symbol id="i-menu" viewBox="0 0 24 24">
      <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </symbol>
    <symbol id="i-chev" viewBox="0 0 24 24">
      <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </symbol>

    <symbol id="i-jar" viewBox="0 0 420 560">
      <ellipse cx="210" cy="524" rx="128" ry="15" fill="#1A1611" opacity=".13"/>
      <path d="M152 96v34c0 26-56 32-56 84v230c0 50 34 74 80 74h48c46 0 80-24 80-74V214c0-52-56-58-56-84V96Z" fill="rgba(255,255,255,.52)" stroke="#CFC3AE" strokeWidth="3"/>
      <path d="M104 258q106-26 212 0v186c0 44-28 66-72 66h-68c-44 0-72-22-72-66Z" fill="var(--honey,#EE9B24)"/>
      <path d="M104 258q106-26 212 0" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="4"/>
      <path d="M126 272c-7 58-7 148 0 208" fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" opacity=".42"/>
      <path d="M302 288c4 48 4 112 0 160" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".3"/>
      <rect x="156" y="74" width="108" height="30" fill="#3A2F25"/>
      <rect x="146" y="24" width="128" height="54" rx="10" fill="#2B221A"/>
      <rect x="156" y="38" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="156" y="48" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="156" y="58" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="134" y="298" width="152" height="156" fill="#FDF8EC" stroke="#E4DAC6" strokeWidth="2"/>
      <text x="210" y="330" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="11" fontWeight="700" letterSpacing="3" fill="#8A7C64">FOXHOUND BEE</text>
      <text x="210" y="374" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="34" fontWeight="600" fill="#1A1611">Solstice</text>
      <rect x="164" y="390" width="92" height="1.5" fill="#D9CDB6"/>
      <text x="210" y="414" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="12" fill="#8A7C64">WILDFLOWER · 500 g</text>
      <use href="#i-mark" x="197" y="422" width="26" height="26" style={{color: "#C2410C"}}/>
    </symbol>

    <symbol id="i-jar-dark" viewBox="0 0 420 560">
      <ellipse cx="210" cy="524" rx="128" ry="15" fill="#000" opacity=".45"/>
      <path d="M152 96v34c0 26-56 32-56 84v230c0 50 34 74 80 74h48c46 0 80-24 80-74V214c0-52-56-58-56-84V96Z" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.34)" strokeWidth="3"/>
      <path d="M104 258q106-26 212 0v186c0 44-28 66-72 66h-68c-44 0-72-22-72-66Z" fill="var(--honey-dark,#5E3110)"/>
      <path d="M104 258q106-26 212 0" fill="none" stroke="#F7C155" strokeOpacity=".5" strokeWidth="4"/>
      <path d="M126 272c-7 58-7 148 0 208" fill="none" stroke="#fff" strokeWidth="15" strokeLinecap="round" opacity=".22"/>
      <rect x="156" y="74" width="108" height="30" fill="#4A3E33"/>
      <rect x="146" y="24" width="128" height="54" rx="10" fill="#3A3129"/>
      <rect x="156" y="38" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="156" y="48" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="156" y="58" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="134" y="298" width="152" height="156" fill="#12100D" stroke="#3A3129" strokeWidth="2"/>
      <text x="210" y="330" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="11" fontWeight="700" letterSpacing="3" fill="#8A7C64">FOXHOUND BEE</text>
      <text x="210" y="374" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="34" fontWeight="600" fill="#F7F4EC">Vesper</text>
      <rect x="164" y="390" width="92" height="1.5" fill="#3A3129"/>
      <text x="210" y="414" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="12" fill="#8A7C64">BUCKWHEAT · 500 g</text>
      <use href="#i-mark" x="197" y="422" width="26" height="26" style={{color: "#FF9E5E"}}/>
    </symbol>

    <symbol id="i-jar-pale" viewBox="0 0 420 560">
      <ellipse cx="210" cy="524" rx="128" ry="15" fill="#000" opacity=".4"/>
      <path d="M152 96v34c0 26-56 32-56 84v230c0 50 34 74 80 74h48c46 0 80-24 80-74V214c0-52-56-58-56-84V96Z" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.4)" strokeWidth="3"/>
      <path d="M104 258q106-26 212 0v186c0 44-28 66-72 66h-68c-44 0-72-22-72-66Z" fill="#F5D699"/>
      <path d="M104 258q106-26 212 0" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="4"/>
      <path d="M126 272c-7 58-7 148 0 208" fill="none" stroke="#fff" strokeWidth="15" strokeLinecap="round" opacity=".35"/>
      <rect x="156" y="74" width="108" height="30" fill="#4A3E33"/>
      <rect x="146" y="24" width="128" height="54" rx="10" fill="#3A3129"/>
      <rect x="156" y="38" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="156" y="48" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="156" y="58" width="108" height="4" rx="2" fill="#544841"/>
      <rect x="134" y="298" width="152" height="156" fill="#12100D" stroke="#3A3129" strokeWidth="2"/>
      <text x="210" y="330" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="11" fontWeight="700" letterSpacing="3" fill="#8A7C64">FOXHOUND BEE</text>
      <text x="210" y="374" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="36" fontWeight="600" fill="#F7F4EC">No. 2</text>
      <rect x="164" y="390" width="92" height="1.5" fill="#3A3129"/>
      <text x="210" y="414" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="12" fill="#8A7C64">SPRING · 500 g</text>
      <use href="#i-mark" x="197" y="422" width="26" height="26" style={{color: "#FF9E5E"}}/>
    </symbol>

    <symbol id="i-jar-spring" viewBox="0 0 420 560">
      <ellipse cx="210" cy="524" rx="128" ry="15" fill="#1A1611" opacity=".13"/>
      <path d="M152 96v34c0 26-56 32-56 84v230c0 50 34 74 80 74h48c46 0 80-24 80-74V214c0-52-56-58-56-84V96Z" fill="rgba(255,255,255,.52)" stroke="#CFC3AE" strokeWidth="3"/>
      <path d="M104 258q106-26 212 0v186c0 44-28 66-72 66h-68c-44 0-72-22-72-66Z" fill="#F5D699"/>
      <path d="M104 258q106-26 212 0" fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="4"/>
      <path d="M126 272c-7 58-7 148 0 208" fill="none" stroke="#fff" strokeWidth="17" strokeLinecap="round" opacity=".5"/>
      <path d="M302 288c4 48 4 112 0 160" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".34"/>
      <rect x="156" y="74" width="108" height="30" fill="#3A2F25"/>
      <rect x="146" y="24" width="128" height="54" rx="10" fill="#2B221A"/>
      <rect x="156" y="38" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="156" y="48" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="156" y="58" width="108" height="4" rx="2" fill="#453A30"/>
      <rect x="134" y="298" width="152" height="156" fill="#FDF8EC" stroke="#E4DAC6" strokeWidth="2"/>
      <text x="210" y="330" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="11" fontWeight="700" letterSpacing="3" fill="#8A7C64">FOXHOUND BEE</text>
      <text x="210" y="374" textAnchor="middle" fontFamily="'Space Grotesk',sans-serif" fontSize="34" fontWeight="600" fill="#1A1611">Spring</text>
      <rect x="164" y="390" width="92" height="1.5" fill="#D9CDB6"/>
      <text x="210" y="414" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="11" fill="#8A7C64">NO. 2 · APPLE BLOOM</text>
      <use href="#i-mark" x="197" y="422" width="26" height="26" style={{color: "#C2410C"}}/>
    </symbol>

    <symbol id="i-hive" viewBox="0 0 560 500">
      <ellipse cx="280" cy="464" rx="216" ry="16" fill="#1A1611" opacity=".12"/>
      <rect x="42" y="44" width="476" height="58" rx="6" fill="#F3E6CC" stroke="#D9C7A2" strokeWidth="2"/>
      <rect x="64" y="58" width="432" height="12" rx="6" fill="#E5D4B2"/>
      <rect x="58" y="104" width="444" height="94" fill="#EBD9B9" stroke="#D3BE97" strokeWidth="2"/>
      <rect x="58" y="200" width="444" height="94" fill="#E5D0AB" stroke="#D3BE97" strokeWidth="2"/>
      <rect x="58" y="296" width="444" height="94" fill="#EBD9B9" stroke="#D3BE97" strokeWidth="2"/>
      <rect x="46" y="392" width="468" height="52" rx="5" fill="#DCC79F" stroke="#C9B28A" strokeWidth="2"/>
      <g stroke="#C9B28A" strokeWidth="1.6" opacity=".55">
        <path d="M76 134h408M76 162h408M76 230h408M76 258h408M76 326h408M76 354h408"/>
      </g>
      <path d="M58 196h444M58 292h444" stroke="#C9B28A" strokeWidth="2"/>
      <rect x="196" y="422" width="168" height="12" rx="6" fill="#5C4A33"/>
      <rect x="86" y="444" width="30" height="20" fill="#C4AC82"/>
      <rect x="444" y="444" width="30" height="20" fill="#C4AC82"/>
      <g opacity=".95">
        <use href="#i-bee" x="500" y="150" width="26" height="26"/>
        <use href="#i-bee" x="20" y="238" width="22" height="22"/>
        <use href="#i-bee" x="472" y="330" width="24" height="24"/>
      </g>
    </symbol>

    <symbol id="i-optic" viewBox="0 0 480 420">
      <ellipse cx="240" cy="392" rx="176" ry="15" fill="#1A1611" opacity=".14"/>
      <path d="M146 330h188l30 52H116Z" fill="#D9C7A2"/>
      <rect x="214" y="248" width="52" height="92" fill="#3A2F25"/>
      <rect x="104" y="84" width="272" height="182" rx="36" fill="#2B221A"/>
      <rect x="122" y="102" width="236" height="146" rx="26" fill="#372C22"/>
      <circle cx="240" cy="175" r="64" fill="#171310" stroke="#B98C4A" strokeWidth="7"/>
      <circle cx="240" cy="175" r="47" fill="url(#gLens)"/>
      <ellipse cx="222" cy="156" rx="19" ry="12" transform="rotate(-28 222 156)" fill="#fff" opacity=".55"/>
      <circle cx="330" cy="122" r="5" fill="#C2410C"/>
      <circle cx="348" cy="122" r="5" fill="#5E7A4E"/>
      <rect x="336" y="30" width="7" height="60" rx="3.5" fill="#3A2F25"/>
      <circle cx="339.5" cy="26" r="7" fill="#3A2F25"/>
      <use href="#i-mark" x="140" y="200" width="34" height="34" style={{color: "#8A7C64"}}/>
    </symbol>

    <symbol id="i-smoker" viewBox="0 0 360 440">
      <ellipse cx="176" cy="416" rx="132" ry="14" fill="#1A1611" opacity=".14"/>
      <path d="M244 206 316 224v122l-72-16Z" fill="#8A5A32"/>
      <path d="M244 232 316 248M244 268l72 16M244 304l72 16" stroke="#6E4626" strokeWidth="6"/>
      <rect x="104" y="176" width="146" height="212" rx="14" fill="url(#gSteel)" stroke="#8C939A" strokeWidth="2"/>
      <path d="M96 176h162l-44-84h-74Z" fill="#C6CCD1" stroke="#8C939A" strokeWidth="2"/>
      <path d="M158 92 174 26h16l10 66Z" fill="url(#gSteel)" stroke="#8C939A" strokeWidth="2"/>
      <circle cx="182" cy="24" r="12" fill="#C2410C" opacity=".55"/>
      <path d="M182 6c14-10 26 4 18 16" fill="none" stroke="#C9B79A" strokeWidth="6" strokeLinecap="round" opacity=".7"/>
      <rect x="120" y="228" width="114" height="6" rx="3" fill="#8C939A" opacity=".7"/>
      <rect x="120" y="244" width="114" height="6" rx="3" fill="#8C939A" opacity=".7"/>
      <path d="M250 258c26-4 44 8 44 30s-18 34-44 30" fill="none" stroke="#5E4A34" strokeWidth="10" strokeLinecap="round"/>
    </symbol>

    <symbol id="i-frame" viewBox="0 0 460 420">
      <ellipse cx="230" cy="404" rx="168" ry="13" fill="#1A1611" opacity=".12"/>
      <rect x="34" y="40" width="392" height="344" rx="8" fill="#EFDDBD" stroke="#C9B28A" strokeWidth="3"/>
      <rect x="72" y="84" width="316" height="256" fill="#F2C56A"/>
      <path d="M72 84h316v256H72Z" fill="none" stroke="#D9A647" strokeWidth="3"/>
      <g fill="none" stroke="#C98F2E" strokeWidth="2.4" opacity=".85">
        <path d="M72 110 108 88 144 110v44l-36 22-36-22Z"/>
        <path d="M144 110 180 88 216 110v44l-36 22-36-22Z"/>
        <path d="M216 110 252 88 288 110v44l-36 22-36-22Z"/>
        <path d="M288 110 324 88 360 110v44l-36 22-36-22Z"/>
        <path d="M108 176 144 154 180 176v44l-36 22-36-22Z"/>
        <path d="M180 176 216 154 252 176v44l-36 22-36-22Z"/>
        <path d="M252 176 288 154 324 176v44l-36 22-36-22Z"/>
        <path d="M72 242 108 220 144 242v44l-36 22-36-22Z"/>
        <path d="M144 242 180 220 216 242v44l-36 22-36-22Z"/>
        <path d="M216 242 252 220 288 242v44l-36 22-36-22Z"/>
        <path d="M288 242 324 220 360 242v44l-36 22-36-22Z"/>
        <path d="M324 176 360 154 396 176v44l-36 22-36-22Z"/>
      </g>
      <g fill="#C9862A">
        <path d="M108 88 144 110v44l-36 22-36-22Z"/>
        <path d="M252 176 288 154l36 22v44l-36 22Z"/>
        <path d="M180 220 216 242v44l-36 22-36-22Z"/>
      </g>
      <path d="M34 40h392v34H34Z" fill="#E6D0A6"/>
      <rect x="188" y="46" width="84" height="24" rx="4" fill="#C9B28A"/>
      <text x="230" y="63" textAnchor="middle" fontFamily="Manrope,sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#5C4A33">FRAME 12</text>
    </symbol>

    <symbol id="i-nuc" viewBox="0 0 460 340">
      <ellipse cx="230" cy="316" rx="164" ry="14" fill="#1A1611" opacity=".12"/>
      <rect x="46" y="60" width="368" height="52" rx="6" fill="#F3E6CC" stroke="#D9C7A2" strokeWidth="2"/>
      <rect x="58" y="112" width="344" height="150" fill="#EBD9B9" stroke="#D3BE97" strokeWidth="2"/>
      <g stroke="#C9B28A" strokeWidth="1.6" opacity=".5"><path d="M76 148h308M76 180h308M76 212h308"/></g>
      <path d="M58 262h344" stroke="#C9B28A" strokeWidth="2"/>
      <rect x="46" y="262" width="368" height="34" rx="4" fill="#DCC79F" stroke="#C9B28A" strokeWidth="2"/>
      <rect x="150" y="276" width="160" height="11" rx="5.5" fill="#5C4A33"/>
      <rect x="150" y="76" width="76" height="22" rx="4" fill="#C9B28A"/>
      <rect x="242" y="76" width="76" height="22" rx="4" fill="#C9B28A"/>
      <use href="#i-bee" x="386" y="196" width="26" height="26"/>
    </symbol>

    <symbol id="i-monitor" viewBox="0 0 440 380">
      <ellipse cx="220" cy="356" rx="168" ry="14" fill="#1A1611" opacity=".12"/>
      <rect x="72" y="272" width="296" height="46" rx="8" fill="#E6D0A6" stroke="#C9B28A" strokeWidth="2"/>
      <rect x="186" y="228" width="68" height="52" fill="#C9B28A"/>
      <rect x="112" y="72" width="216" height="176" rx="26" fill="#2B221A"/>
      <rect x="130" y="90" width="180" height="120" rx="8" fill="#F7F4EC"/>
      <path d="M144 178 172 152l26 20 30-46 26 30 30-38" fill="none" stroke="#C2410C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <g fill="#C9B28A" opacity=".8">
        <rect x="144" y="106" width="54" height="7" rx="3.5"/>
        <rect x="144" y="120" width="34" height="7" rx="3.5"/>
      </g>
      <rect x="144" y="196" width="76" height="6" rx="3" fill="#D9CDB6"/>
      <circle cx="304" cy="224" r="6" fill="#C2410C"/>
      <circle cx="284" cy="224" r="6" fill="#5E7A4E"/>
      <use href="#i-mark" x="196" y="286" width="30" height="30" style={{color: "#8A7C64"}}/>
    </symbol>

    <symbol id="i-keeper" viewBox="0 0 320 400">
      <g fill="none">
        <path d="M96 400V266c0-42 26-66 64-66s64 24 64 66v134Z" fill="var(--fig,#E3CFA6)"/>
        <path d="M112 400v-96h96v96" fill="#000" opacity=".08"/>
        <circle cx="160" cy="150" r="42" fill="#F2DCC4"/>
        <path d="M118 146a42 42 0 0 1 84 0Z" fill="var(--hat,#C2410C)"/>
        <path d="M96 150h128" stroke="var(--hat,#C2410C)" strokeWidth="13" strokeLinecap="round"/>
        <path d="M118 174c10 14 26 22 42 22s32-8 42-22" stroke="#D9B48B" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <rect x="86" y="238" width="148" height="102" rx="8" fill="var(--screen,#17130E)" transform="rotate(-7 160 289)"/>
        <g transform="rotate(-7 160 289)">
          <rect x="98" y="250" width="124" height="78" rx="4" fill="#F7F4EC"/>
          <path d="M108 314 130 292l18 14 22-30 16 22 26-32" fill="none" stroke="#C2410C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="108" y="258" width="46" height="6" rx="3" fill="#D9CDB6"/>
        </g>
        <path d="M110 340c14 16 34 24 50 24s36-8 50-24" fill="none" stroke="var(--fig,#E3CFA6)" strokeWidth="22" strokeLinecap="round"/>
      </g>
    </symbol>

    <symbol id="i-hex-block" viewBox="0 0 400 260">
      <rect width="400" height="260" fill="var(--tilebg,#2E2418)"/>
      <g fill="none" stroke="#fff" strokeOpacity=".14" strokeWidth="2">
        <path d="M100 40 143 65v50l-43 25-43-25V65Z"/>
        <path d="M186 40 229 65v50l-43 25-43-25V65Z"/>
        <path d="M272 40 315 65v50l-43 25-43-25V65Z"/>
        <path d="M143 115 186 140v50l-43 25-43-25v-50Z"/>
        <path d="M229 115 272 140v50l-43 25-43-25v-50Z"/>
        <path d="M57 115 100 140v50l-43 25-43-25v-50Z"/>
        <path d="M315 115 358 140v50l-43 25-43-25v-50Z"/>
      </g>
    </symbol>
    </svg>
  );
}
