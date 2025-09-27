/* -------------------------------------------------------------
   SVG HELPERS — tiny inline diagrams (no external images)
----------------------------------------------------------------*/
const SVG = (() => {
  const frame = (w=320,h=140,inner='') =>
    `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" class="w-full h-36">
      <defs>
        <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20H20M20 0V20" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect x="0" y="0" width="${w}" height="${h}" fill="#0a0f1d"/>
      <rect x="0" y="0" width="${w}" height="${h}" fill="url(#g)"/>
      ${inner}
    </svg>`;

  const axis = (w=320,h=140) => `
    <path d="M30 10V130M30 130H310" stroke="rgba(255,255,255,.35)" stroke-width="1.2"/>`;

  const candle = (x,open,close,high,low,color) => `
    <line x1="${x}" x2="${x}" y1="${high}" y2="${low}" stroke="${color}" stroke-width="2"/>
    <rect x="${x-6}" y="${Math.min(open,close)}" width="12" height="${Math.max(2,Math.abs(close-open))}" fill="${color}" />`;

  const label = (t,x=305,y=18)=>`<text x="${x}" y="${y}" font-size="10" fill="rgba(255,255,255,.6)" text-anchor="end">${t}</text>`;

  const pathLine = (pts,stroke="#7dd3fc") =>
    `<path d="M${pts.map(p=>p.join(',')).join(' L')}" fill="none" stroke="${stroke}" stroke-width="2"/>`;

  // Minimal pattern renderers (approximate schematic, not to scale)
  const svgDoji = () => frame(320,140, `
    ${axis()}
    ${candle(120,60,62,20,120,'#eab308')}
    ${label('Doji')}
  `);

  const svgLongLeggedDoji = () => frame(320,140, `
    ${axis()}
    ${candle(120,70,70,20,130,'#eab308')}
    ${label('Long-Legged Doji')}
  `);

  const svgDragonfly = () => frame(320,140, `
    ${axis()}
    ${candle(120,30,30,30,120,'#eab308')}
    ${label('Dragonfly Doji')}
  `);

  const svgGravestone = () => frame(320,140, `
    ${axis()}
    ${candle(120,100,100,20,100,'#eab308')}
    ${label('Gravestone Doji')}
  `);

  const svgSpinningTop = () => frame(320,140, `
    ${axis()}
    ${candle(120,60,64,20,120,'#a78bfa')}
    ${label('Spinning Top')}
  `);

  const svgMaruBull = () => frame(320,140, `
    ${axis()}
    ${candle(120,100,40,40,100,'#34d399')}
    ${label('Bull Marubozu')}
  `);

  const svgMaruBear = () => frame(320,140, `
    ${axis()}
    ${candle(120,40,100,40,100,'#f87171')}
    ${label('Bear Marubozu')}
  `);

  const svgHammer = () => frame(320,140, `
    ${axis()}
    ${candle(120,80,70,80,130,'#34d399')}
    ${label('Hammer')}
  `);

  const svgInvHammer = () => frame(320,140, `
    ${axis()}
    ${candle(120,60,50,20,60,'#34d399')}
    ${label('Inverted Hammer')}
  `);

  const svgHangingMan = () => frame(320,140, `
    ${axis()}
    ${candle(120,80,75,80,130,'#f87171')}
    ${label('Hanging Man')}
  `);

  const svgShootingStar = () => frame(320,140, `
    ${axis()}
    ${candle(120,50,60,20,50,'#f87171')}
    ${label('Shooting Star')}
  `);

  const svgBeltHoldBull = () => frame(320,140, `
    ${axis()}
    ${candle(120,110,60,60,110,'#34d399')}
    ${label('Bull Belt Hold')}
  `);

  const svgBeltHoldBear = () => frame(320,140, `
    ${axis()}
    ${candle(120,40,90,40,90,'#f87171')}
    ${label('Bear Belt Hold')}
  `);

  const svgKickerBull = () => frame(320,140, `
    ${axis()}
    ${candle(100,70,100,70,100,'#f87171')}
    ${candle(140,100,60,60,100,'#34d399')}
    ${label('Bull Kicker')}
  `);

  const svgKickerBear = () => frame(320,140, `
    ${axis()}
    ${candle(100,60,20,20,60,'#34d399')}
    ${candle(140,40,80,40,80,'#f87171')}
    ${label('Bear Kicker')}
  `);

  const svgEngulfBull = () => frame(320,140, `
    ${axis()}
    ${candle(110,60,80,60,80,'#f87171')}
    ${candle(140,90,40,40,90,'#34d399')}
    ${label('Bull Engulfing')}
  `);

  const svgEngulfBear = () => frame(320,140, `
    ${axis()}
    ${candle(110,80,60,60,80,'#34d399')}
    ${candle(140,40,90,40,90,'#f87171')}
    ${label('Bear Engulfing')}
  `);

  const svgHaramiBull = () => frame(320,140, `
    ${axis()}
    ${candle(110,90,40,40,90,'#f87171')}
    ${candle(140,60,55,55,60,'#34d399')}
    ${label('Bull Harami')}
  `);

  const svgHaramiBear = () => frame(320,140, `
    ${axis()}
    ${candle(110,40,90,40,90,'#34d399')}
    ${candle(140,60,65,60,65,'#f87171')}
    ${label('Bear Harami')}
  `);

  const svgPiercing = () => frame(320,140, `
    ${axis()}
    ${candle(110,60,90,60,90,'#f87171')}
    ${candle(140,90,55,55,90,'#34d399')}
    ${label('Piercing Line')}
  `);

  const svgDarkCloud = () => frame(320,140, `
    ${axis()}
    ${candle(110,90,60,60,90,'#34d399')}
    ${candle(140,55,90,55,90,'#f87171')}
    ${label('Dark Cloud Cover')}
  `);

  const svgMorningStar = () => frame(320,140, `
    ${axis()}
    ${candle(90,60,95,60,95,'#f87171')}
    ${candle(120,80,75,75,80,'#a78bfa')}
    ${candle(150,90,50,50,90,'#34d399')}
    ${label('Morning Star')}
  `);

  const svgEveningStar = () => frame(320,140, `
    ${axis()}
    ${candle(90,50,90,50,90,'#34d399')}
    ${candle(120,70,75,70,75,'#a78bfa')}
    ${candle(150,60,95,60,95,'#f87171')}
    ${label('Evening Star')}
  `);

  const svg3Soldiers = () => frame(320,140, `
    ${axis()}
    ${candle(100,95,75,75,95,'#34d399')}
    ${candle(135,85,60,60,85,'#34d399')}
    ${candle(170,75,50,50,75,'#34d399')}
    ${label('Three White Soldiers')}
  `);

  const svg3Crows = () => frame(320,140, `
    ${axis()}
    ${candle(100,50,70,50,70,'#f87171')}
    ${candle(135,60,85,60,85,'#f87171')}
    ${candle(170,70,100,70,100,'#f87171')}
    ${label('Three Black Crows')}
  `);

  const svgRising3 = () => frame(320,140, `
    ${axis()}
    ${candle(90,90,50,50,90,'#34d399')}
    ${candle(120,60,68,60,68,'#f8fafc')}
    ${candle(145,62,70,62,70,'#f8fafc')}
    ${candle(170,64,72,64,72,'#f8fafc')}
    ${candle(200,70,40,40,70,'#34d399')}
    ${label('Rising Three Methods')}
  `);

  const svgFalling3 = () => frame(320,140, `
    ${axis()}
    ${candle(90,40,90,40,90,'#f87171')}
    ${candle(120,70,62,62,70,'#f8fafc')}
    ${candle(145,68,60,60,68,'#f8fafc')}
    ${candle(170,66,58,58,66,'#f8fafc')}
    ${candle(200,60,100,60,100,'#f87171')}
    ${label('Falling Three Methods')}
  `);

  const svgTasukiBull = () => frame(320,140, `
    ${axis()}
    ${candle(110,90,60,60,90,'#34d399')}
    ${candle(140,60,80,60,80,'#f87171')}
    ${candle(170,85,55,55,85,'#34d399')}
    ${label('Bull Tasuki Gap')}
  `);

  const svgTasukiBear = () => frame(320,140, `
    ${axis()}
    ${candle(110,60,90,60,90,'#f87171')}
    ${candle(140,90,70,70,90,'#34d399')}
    ${candle(170,70,100,70,100,'#f87171')}
    ${label('Bear Tasuki Gap')}
  `);

  const svgSeparatingBull = () => frame(320,140, `
    ${axis()}
    ${candle(120,80,50,50,80,'#34d399')}
    ${candle(150,80,50,50,80,'#34d399')}
    ${label('Bull Separating Lines')}
  `);

  const svgSeparatingBear = () => frame(320,140, `
    ${axis()}
    ${candle(120,60,90,60,90,'#f87171')}
    ${candle(150,60,90,60,90,'#f87171')}
    ${label('Bear Separating Lines')}
  `);

  const svgAbandonedBull = () => frame(320,140, `
    ${axis()}
    ${candle(100,65,95,65,95,'#f87171')}
    ${candle(140,80,78,78,80,'#a78bfa')}
    ${candle(180,90,60,60,90,'#34d399')}
    ${label('Bull Abandoned Baby')}
  `);

  const svgAbandonedBear = () => frame(320,140, `
    ${axis()}
    ${candle(100,60,30,30,60,'#34d399')}
    ${candle(140,40,42,40,42,'#a78bfa')}
    ${candle(180,50,80,50,80,'#f87171')}
    ${label('Bear Abandoned Baby')}
  `);

  // Chart patterns (structure)
  const svgBullFlag = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,110],[90,70],[140,30]])}
    <polygon points="140,30 190,40 190,70 140,60" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Bull Flag')}
  `);

  const svgBearFlag = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,30],[90,70],[140,110]])}
    <polygon points="140,110 190,100 190,70 140,80" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Bear Flag')}
  `);

  const svgPennant = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,110],[120,40]])}
    <path d="M120 40 L180 65 L120 90 Z" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Pennant')}
  `);

  const svgTriAsc = () => frame(320,140, `
    ${axis()}
    <line x1="70" y1="40" x2="220" y2="40" stroke="#93c5fd" stroke-width="2"/>
    <line x1="70" y1="110" x2="220" y2="40" stroke="#93c5fd" stroke-width="2"/>
    ${label('Ascending Triangle')}
  `);

  const svgTriDesc = () => frame(320,140, `
    ${axis()}
    <line x1="70" y1="110" x2="220" y2="110" stroke="#93c5fd" stroke-width="2"/>
    <line x1="70" y1="40" x2="220" y2="110" stroke="#93c5fd" stroke-width="2"/>
    ${label('Descending Triangle')}
  `);

  const svgTriSym = () => frame(320,140, `
    ${axis()}
    <line x1="70" y1="40" x2="220" y2="110" stroke="#93c5fd" stroke-width="2"/>
    <line x1="70" y1="110" x2="220" y2="40" stroke="#93c5fd" stroke-width="2"/>
    ${label('Symmetrical Triangle')}
  `);

  const svgWedgeRise = () => frame(320,140, `
    ${axis()}
    <polyline points="90,110 200,60" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <polyline points="80,90 210,40" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Rising Wedge')}
  `);

  const svgWedgeFall = () => frame(320,140, `
    ${axis()}
    <polyline points="90,40 200,90" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <polyline points="80,60 210,110" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Falling Wedge')}
  `);

  const svgRectangle = () => frame(320,140, `
    ${axis()}
    <rect x="90" y="50" width="120" height="50" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Rectangle / Range')}
  `);

  const svgHnS = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,100],[80,60],[110,100],[150,30],[180,100],[220,60]])}
    <line x1="40" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Head & Shoulders')}
  `);

  const svgInvHnS = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,40],[80,80],[110,40],[150,110],[180,40],[220,80]])}
    <line x1="40" y1="40" x2="220" y2="40" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Inverse H&S')}
  `);

  const svgDoubleTop = () => frame(320,140, `
    ${axis()}
    ${pathLine([[60,110],[110,40],[140,110],[170,40],[210,110]])}
    <line x1="60" y1="110" x2="210" y2="110" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Double Top')}
  `);

  const svgDoubleBottom = () => frame(320,140, `
    ${axis()}
    ${pathLine([[60,40],[110,110],[140,40],[170,110],[210,40]])}
    <line x1="60" y1="40" x2="210" y2="40" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Double Bottom')}
  `);

  const svgTripleTop = () => frame(320,140, `
    ${axis()}
    ${pathLine([[60,110],[95,40],[120,110],[150,40],[175,110],[205,40],[230,110]])}
    <line x1="60" y1="110" x2="230" y2="110" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Triple Top')}
  `);

  const svgTripleBottom = () => frame(320,140, `
    ${axis()}
    ${pathLine([[60,40],[95,110],[120,40],[150,110],[175,40],[205,110],[230,40]])}
    <line x1="60" y1="40" x2="230" y2="40" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${label('Triple Bottom')}
  `);

  const svgCupHandle = () => frame(320,140, `
    ${axis()}
    <path d="M60,60 Q145,130 230,60" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <path d="M230,60 Q260,70 260,80" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Cup & Handle')}
  `);

  const svgInvCup = () => frame(320,140, `
    ${axis()}
    <path d="M60,90 Q145,20 230,90" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <path d="M230,90 Q260,80 260,70" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Inverted Cup & Handle')}
  `);

  const svgRoundingBottom = () => frame(320,140, `
    ${axis()}
    <path d="M60,70 Q145,120 230,70" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Rounding Bottom')}
  `);

  const svgDiamondTop = () => frame(320,140, `
    ${axis()}
    <polygon points="120,70 160,40 200,70 160,100" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Diamond Top')}
  `);

  const svgDiamondBottom = () => frame(320,140, `
    ${axis()}
    <polygon points="120,70 160,100 200,70 160,40" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Diamond Bottom')}
  `);

  const svgMegaphone = () => frame(320,140, `
    ${axis()}
    <polyline points="70,70 220,30" fill="none" stroke="#93c5fd" stroke-width="2"/>
    <polyline points="70,70 220,110" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Broadening / Megaphone')}
  `);

  const svgTrendUp = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,110],[80,90],[120,70],[160,60],[200,40]])}
    ${label('Uptrend: HH/HL')}
  `);

  const svgTrendDown = () => frame(320,140, `
    ${axis()}
    ${pathLine([[40,30],[80,50],[120,70],[160,80],[200,100]])}
    ${label('Downtrend: LH/LL')}
  `);

  const svgConsolidation = () => frame(320,140, `
    ${axis()}
    <rect x="90" y="55" width="120" height="40" fill="none" stroke="#93c5fd" stroke-width="2"/>
    ${label('Consolidation')}
  `);

  const svgBreakoutRetest = () => frame(320,140, `
    ${axis()}
    <rect x="80" y="60" width="140" height="30" fill="none" stroke="rgba(255,255,255,.35)" stroke-dasharray="4 3"/>
    ${pathLine([[40,110],[90,80],[140,50],[190,20]])}
    <circle cx="140" cy="50" r="3" fill="#93c5fd"/>
    ${label('Breakout + Retest')}
  `);

  const svgSRFlip = () => frame(320,140, `
    ${axis()}
    <line x1="50" y1="80" x2="270" y2="80" stroke="rgba(255,255,255,.4)" stroke-dasharray="4 3"/>
    ${pathLine([[40,100],[120,60],[200,100],[260,60]])}
    ${label('S/R Flip')}
  `);

  const svgLiquiditySweep = () => frame(320,140, `
    ${axis()}
    <line x1="60" y1="60" x2="260" y2="60" stroke="rgba(255,255,255,.35)" stroke-dasharray="4 3"/>
    ${pathLine([[40,70],[120,55],[200,90],[260,40]])}
    <circle cx="120" cy="55" r="3" fill="#fbbf24"/>
    ${label('Liquidity Sweep')}
  `);

  const svgText = (t='Term') => frame(320,140, `
    ${axis()}
    <text x="160" y="80" text-anchor="middle" font-size="14" fill="#93c5fd">${t}</text>
  `);

  return {
    svgDoji, svgLongLeggedDoji, svgDragonfly, svgGravestone, svgSpinningTop,
    svgMaruBull, svgMaruBear, svgHammer, svgInvHammer, svgHangingMan, svgShootingStar,
    svgBeltHoldBull, svgBeltHoldBear, svgKickerBull, svgKickerBear,
    svgEngulfBull, svgEngulfBear, svgHaramiBull, svgHaramiBear,
    svgPiercing, svgDarkCloud, svgMorningStar, svgEveningStar,
    svg3Soldiers, svg3Crows, svgRising3, svgFalling3, svgTasukiBull, svgTasukiBear,
    svgSeparatingBull, svgSeparatingBear, svgAbandonedBull, svgAbandonedBear,
    svgBullFlag, svgBearFlag, svgPennant, svgTriAsc, svgTriDesc, svgTriSym,
    svgWedgeRise, svgWedgeFall, svgRectangle, svgHnS, svgInvHnS, svgDoubleTop, svgDoubleBottom,
    svgTripleTop, svgTripleBottom, svgCupHandle, svgInvCup, svgRoundingBottom, svgDiamondTop, svgDiamondBottom, svgMegaphone,
    svgTrendUp, svgTrendDown, svgConsolidation, svgBreakoutRetest, svgSRFlip, svgLiquiditySweep, svgText,
  };
})();

/* -------------------------------------------------------------
   BANK / LEVELS / GLOSSARY — Comprehensive coverage
   To keep file compact, some items are generated programmatically.
----------------------------------------------------------------*/
const BANK = (() => {
  let idc = 0;
  const item = (o)=>({id:`q${++idc}`, ...o});

  // Single-candle
  const candles = [
    ['doji','candle','Neutral doji after rally near resistance','What\'s most likely next?','flat','Standard doji shows indecision; after a rally near resistance, pause or reversal risk increases.','svgDoji'],
    ['doji_ll','candle','Long-legged doji after a sharp drop','What\'s most likely next?','flat','Long wicks = tug-of-war; often pause before direction decides.','svgLongLeggedDoji'],
    ['doji_dragon','candle','Dragonfly doji at support after decline','What\'s most likely next?','up','Long lower shadow shows buying near support; potential reversal.','svgDragonfly'],
    ['doji_grave','candle','Gravestone doji after run-up into supply','What\'s most likely next?','down','Upper shadow shows rejection of highs; bears may take control.','svgGravestone'],
    ['spin','candle','Spinning top mid-range, no clear trend','What\'s most likely next?','flat','Small body and wicks = balance; continue sideways.','svgSpinningTop'],
    ['maru_bull','candle','Bull marubozu pushing from support','What\'s most likely next?','up','Full body close near high shows strong momentum.','svgMaruBull'],
    ['maru_bear','candle','Bear marubozu breaking support','What\'s most likely next?','down','Strong selling pressure; momentum likely continues.','svgMaruBear'],
    ['hammer','candle','Hammer after decline into demand','What\'s most likely next?','up','Long lower wick shows buyers stepped in; reversal hint.','svgHammer'],
    ['inv_hammer','candle','Inverted hammer after decline','What\'s most likely next?','up','Upper wick signals buying attempts; needs follow-through.','svgInvHammer'],
    ['hangman','candle','Hanging man after steady uptrend','What\'s most likely next?','down','Long lower wick at highs warns distribution / profit-taking.','svgHangingMan'],
    ['shoot','candle','Shooting star at resistance','What\'s most likely next?','down','Rejection from highs; possible short-term reversal.','svgShootingStar'],
    ['belt_bull','candle','Bull belt hold open near low, strong close','What\'s most likely next?','up','Open near low and push up signals initiative buyers.','svgBeltHoldBull'],
    ['belt_bear','candle','Bear belt hold open near high, strong drop','What\'s most likely next?','down','Open near high then sell off; initiative sellers.','svgBeltHoldBear'],
    ['kicker_bull','candle','Bullish kicker after down move','What\'s most likely next?','up','Gap/shift in sentiment; strong trend change potential.','svgKickerBull'],
    ['kicker_bear','candle','Bearish kicker after up move','What\'s most likely next?','down','Momentum flip suggests sharp selling ahead.','svgKickerBear'],
  ].map(([k,topic,context,prompt,answer,explain,svg])=>item({mode:'direction',topic,context,prompt,answer,explain,svg}));

  // Multi-candle candlesticks
  const csticks = [
    ['engulf_b','pattern','Downtrend pullback into support','Name this pattern','Bullish Engulfing',
      ['Bullish Engulfing','Bearish Engulfing','Harami','Piercing Line'],
      'Large green body engulfs prior red; momentum shift.','svgEngulfBull'],
    ['engulf_s','pattern','Uptrend exhaustion at resistance','Name this pattern','Bearish Engulfing',
      ['Bearish Engulfing','Bullish Engulfing','Dark Cloud Cover','Harami'],
      'Large red body engulfs prior green; reversal risk.','svgEngulfBear'],
    ['harami_b','pattern','After decline within demand','Name this pattern','Bullish Harami',
      ['Bullish Harami','Bearish Harami','Piercing Line','Morning Star'],
      'Small green inside prior red; selling is stalling.','svgHaramiBull'],
    ['harami_s','pattern','After rally near supply','Name this pattern','Bearish Harami',
      ['Bearish Harami','Bullish Harami','Dark Cloud Cover','Evening Star'],
      'Small red inside prior green; buying is stalling.','svgHaramiBear'],
    ['pierce','pattern','After drop toward support','Name this pattern','Piercing Line',
      ['Piercing Line','Dark Cloud Cover','Morning Star','Abandoned Baby (Bull)'],
      'Gap down then strong close into prior body; reversal hint.','svgPiercing'],
    ['darkcloud','pattern','After rally into resistance','Name this pattern','Dark Cloud Cover',
      ['Dark Cloud Cover','Piercing Line','Evening Star','Harami'],
      'Gap up then close deep into prior candle; bearish tone.','svgDarkCloud'],
    ['mstar','pattern','After downtrend exhaustion','Name this pattern','Morning Star',
      ['Morning Star','Evening Star','Three White Soldiers','Abandoned Baby (Bull)'],
      'Three-candle reversal with middle pause; bullish.','svgMorningStar'],
    ['estar','pattern','After uptrend exhaustion','Name this pattern','Evening Star',
      ['Evening Star','Morning Star','Three Black Crows','Abandoned Baby (Bear)'],
      'Three-candle top with middle pause; bearish.','svgEveningStar'],
    ['soldiers','pattern','From base after decline','Name this pattern','Three White Soldiers',
      ['Three White Soldiers','Three Black Crows','Rising Three Methods','Separating Lines (Bull)'],
      'Three strong green closes; accumulation.','svg3Soldiers'],
    ['crows','pattern','From peak after rally','Name this pattern','Three Black Crows',
      ['Three Black Crows','Three White Soldiers','Falling Three Methods','Separating Lines (Bear)'],
      'Three strong red closes; distribution.','svg3Crows'],
    ['rising3','pattern','In uptrend pullback cluster','What\'s most likely next?','up',null,
      'Brief counter candles within range, then trend resumes.','svgRising3'],
    ['falling3','pattern','In downtrend bounce cluster','What\'s most likely next?','down',null,
      'Brief counter candles within range, then trend resumes.','svgFalling3'],
    ['tasuki_b','pattern','Gap up then brief red pullback','Name this pattern','Bull Tasuki Gap',
      ['Bull Tasuki Gap','Bear Tasuki Gap','Separating Lines (Bull)','Abandoned Baby (Bull)'],
      'Gap continuation where pullback fails to fill.','svgTasukiBull'],
    ['tasuki_s','pattern','Gap down then brief green pullback','Name this pattern','Bear Tasuki Gap',
      ['Bear Tasuki Gap','Bull Tasuki Gap','Separating Lines (Bear)','Abandoned Baby (Bear)'],
      'Gap continuation where pullback fails to fill.','svgTasukiBear'],
    ['sep_b','pattern','Uptrend momentum continuation','Name this pattern','Separating Lines (Bull)',
      ['Separating Lines (Bull)','Separating Lines (Bear)','Piercing Line','Harami'],
      'Similar open continuation; buyers persistent.','svgSeparatingBull'],
    ['sep_s','pattern','Downtrend momentum continuation','Name this pattern','Separating Lines (Bear)',
      ['Separating Lines (Bear)','Separating Lines (Bull)','Dark Cloud Cover','Harami'],
      'Similar open continuation; sellers persistent.','svgSeparatingBear'],
    ['ab_b','pattern','Gap down doji then gap up','Name this pattern','Abandoned Baby (Bull)',
      ['Abandoned Baby (Bull)','Morning Star','Piercing Line','Engulfing'],
      'Isolated middle candle; strong reversal signal.','svgAbandonedBull'],
    ['ab_s','pattern','Gap up doji then gap down','Name this pattern','Abandoned Baby (Bear)',
      ['Abandoned Baby (Bear)','Evening Star','Dark Cloud Cover','Engulfing'],
      'Isolated middle candle; top reversal.','svgAbandonedBear'],
  ].map(([k,topic,context,prompt,answer,options,explain,svg])=>{
    const mode = options ? 'identify' : 'direction';
    return item({mode,topic,context,prompt,answer,options,explain,svg});
  });

  // Chart patterns / structure (mix of direction & identify)
  const patterns = [
    // Flags & Pennants
    ['flag_b','structure','Strong rise then flag','What\'s most likely next?','up',null,'Flags/pennants often continue the prior impulse.','svgBullFlag'],
    ['flag_s','structure','Sharp drop then bear flag','What\'s most likely next?','down',null,'Bear flags continue downtrends after pauses.','svgBearFlag'],
    ['pennant','structure','Impulse then small pennant','What\'s most likely next?','up',null,'Pennants are brief consolidations before resumption.','svgPennant'],
    // Triangles
    ['tri_asc','structure','Flat resistance with higher lows','What\'s most likely next?','up',null,'Ascending triangle biases upward break.','svgTriAsc'],
    ['tri_desc','structure','Flat support with lower highs','What\'s most likely next?','down',null,'Descending triangle biases downward break.','svgTriDesc'],
    ['tri_sym','structure','Squeezing range, equal pressure','What\'s most likely next?','flat',null,'Symmetrical triangles are balanced; wait for break.','svgTriSym'],
    // Wedges
    ['wedge_rise','structure','Rising wedge after up move','What\'s most likely next?','down',null,'Rising wedges often resolve lower.','svgWedgeRise'],
    ['wedge_fall','structure','Falling wedge after down move','What\'s most likely next?','up',null,'Falling wedges often resolve higher.','svgWedgeFall'],
    // Rectangles / Ranges
    ['rect','structure','Sideways rectangle after trend','What\'s most likely next?','flat',null,'Ranges reflect balance; wait for breakout/confirm.','svgRectangle'],
    // Reversal patterns
    ['hns','pattern','After long advance, neckline drawn','What\'s most likely next?','down',null,'Head & Shoulders signals topping risk.','svgHnS'],
    ['ihns','pattern','After decline, inverse neckline','What\'s most likely next?','up',null,'Inverse H&S signals bottoming potential.','svgInvHnS'],
    ['dbl_top','pattern','Double top near prior high','What\'s most likely next?','down',null,'Double tops reject resistance.','svgDoubleTop'],
    ['dbl_bot','pattern','Double bottom near prior low','What\'s most likely next?','up',null,'Double bottoms reject support.','svgDoubleBottom'],
    ['tri_top','pattern','Triple top congestion','What\'s most likely next?','down',null,'Multiple rejections at highs.','svgTripleTop'],
    ['tri_bot','pattern','Triple bottom congestion','What\'s most likely next?','up',null,'Multiple defenses at lows.','svgTripleBottom'],
    ['cup','pattern','Rounded base with handle dip','What\'s most likely next?','up',null,'Cup & handle often breaks upward.','svgCupHandle'],
    ['inv_cup','pattern','Rounded top with handle pop','What\'s most likely next?','down',null,'Inverted cup & handle often breaks down.','svgInvCup'],
    ['round_bot','pattern','Long rounding bottom','What\'s most likely next?','up',null,'Accumulation arc; pressure upward.','svgRoundingBottom'],
    ['diamond_top','pattern','Volatility then contracting shape at high','What\'s most likely next?','down',null,'Diamond tops often resolve down.','svgDiamondTop'],
    ['diamond_bot','pattern','Diamond after selloff','What\'s most likely next?','up',null,'Diamond bottoms may resolve up.','svgDiamondBottom'],
    ['mega','pattern','Broadening megaphone at highs','What\'s most likely next?','down',null,'Expanding swings often precede reversals.','svgMegaphone'],
    // Structure concepts
    ['trend_up','structure','Series of HH/HL','What\'s most likely next?','up',null,'In uptrends, pullbacks often continue up.','svgTrendUp'],
    ['trend_down','structure','Series of LH/LL','What\'s most likely next?','down',null,'Downtrends continue until structure breaks.','svgTrendDown'],
    ['consol','structure','Tight consolidation mid-trend','What\'s most likely next?','flat',null,'Rotate/absorb orders; wait for break.','svgConsolidation'],
    ['break_retest','structure','Breakout then retest of level','What\'s most likely next?','up',null,'Successful retests often resume in breakout direction.','svgBreakoutRetest'],
    ['sr_flip','structure','Support breaks, becomes resistance','What\'s most likely next?','down',null,'Failed support now acts as ceiling.','svgSRFlip'],
    ['liq_sweep','structure','Liquidity sweep below support','What\'s most likely next?','up',null,'Stop hunt below level before reversal.','svgLiquiditySweep'],
  ].map(([k,topic,context,prompt,answer,options,explain,svg])=>{
    const mode = options ? 'identify' : 'direction';
    return item({mode,topic,context,prompt,answer,options,explain,svg});
  });

  return [...candles, ...csticks, ...patterns];
})();

/* -------------------------------------------------------------
   LEVELS — Progressive difficulty
----------------------------------------------------------------*/
const LEVELS = [
  {
    id: 'candles',
    title: 'Single Candles',
    subtitle: 'Basics',
    target: 10,
    deck: BANK.filter(q => q.topic === 'candle')
  },
  {
    id: 'patterns',
    title: 'Candlestick Patterns',
    subtitle: 'Reversals',
    target: 15,
    deck: BANK.filter(q => q.topic === 'pattern')
  },
  {
    id: 'structure',
    title: 'Chart Structure',
    subtitle: 'Trends & Patterns',
    target: 20,
    deck: BANK.filter(q => q.topic === 'structure')
  },
  {
    id: 'advanced',
    title: 'Advanced Patterns',
    subtitle: 'Master Level',
    target: 25,
    deck: BANK // All items
  }
];

/* -------------------------------------------------------------
   GLOSSARY — Trading terms
----------------------------------------------------------------*/
const GLOSSARY = [
  {k: 'Doji', v: 'A candlestick with nearly equal open and close, showing indecision.'},
  {k: 'Marubozu', v: 'A candle with no wicks, showing strong directional conviction.'},
  {k: 'Hammer', v: 'A bullish reversal pattern with a long lower wick after a downtrend.'},
  {k: 'Engulfing', v: 'A two-candle pattern where the second candle completely engulfs the first.'},
  {k: 'Head & Shoulders', v: 'A reversal pattern with three peaks, the middle being the highest.'},
  {k: 'Support', v: 'A price level where buying interest is strong enough to overcome selling pressure.'},
  {k: 'Resistance', v: 'A price level where selling interest overcomes buying pressure.'},
  {k: 'Breakout', v: 'When price moves outside a defined support or resistance level.'},
  {k: 'Trend', v: 'The general direction in which a market or asset price is moving.'},
  {k: 'Consolidation', v: 'A period of indecision where prices move within a confined range.'},
  {k: 'Liquidity', v: 'The degree to which an asset can be bought or sold without affecting its price.'},
  {k: 'Volatility', v: 'The rate at which the price of a security increases or decreases.'},
];

/* -------------------------------------------------------------
   APP LOGIC — Alpine.js data and methods
----------------------------------------------------------------*/
function app() {
  return {
    // State
    route: '#/home',
    state: {
      xp: 0,
      hearts: 3,
      streak: 0,
      progress: 0,
      progressByLevel: {},
      weakItems: [],
      sessionAnswers: {}
    },
    activeLevelIndex: 0,
    deck: [],
    currentIndex: 0,
    answered: false,
    correct: false,
    toast: false,
    glossQuery: '',

    // Computed
    get activeLevel() { return LEVELS[this.activeLevelIndex]; },
    get currentItem() { return this.deck[this.currentIndex] || {}; },

    // Methods
    init() {
      this.loadState();
      this.setupRouter();
      this.selectLevel(this.state.activeLevelId || LEVELS[0].id);
    },

    setupRouter() {
      this.route = window.location.hash || '#/home';
      window.addEventListener('hashchange', () => {
        this.route = window.location.hash;
      });
    },

    navigate(route) {
      window.location.hash = route;
    },

    tabClass(testRoute) {
      return this.route === testRoute 
        ? 'px-3 py-1 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-400/30' 
        : 'px-3 py-1 rounded-xl hover:bg-white/5';
    },

    selectLevel(levelId) {
      const idx = LEVELS.findIndex(l => l.id === levelId);
      if (idx >= 0) {
        this.activeLevelIndex = idx;
        this.state.activeLevelId = levelId;
        this.buildDeck();
        this.saveState();
      }
    },

    buildDeck() {
      // Weight weak items higher (spaced repetition)
      const weakItems = BANK.filter(q => this.state.weakItems.includes(q.id));
      const normalItems = this.activeLevel.deck.filter(q => !this.state.weakItems.includes(q.id));
      
      // Include weak items 2x more frequently
      this.deck = [...weakItems, ...weakItems, ...normalItems];
      this.shuffleDeck();
      this.currentIndex = 0;
      this.answered = false;
    },

    shuffleDeck() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
      this.currentIndex = 0;
      this.answered = false;
    },

    retryWeak() {
      if (this.state.weakItems.length === 0) {
        alert('No weak items to practice yet! Keep playing.');
        return;
      }
      this.deck = BANK.filter(q => this.state.weakItems.includes(q.id));
      this.shuffleDeck();
    },

    renderSVG(svgName) {
      return SVG[svgName] ? SVG[svgName]() : SVG.svgText(svgName);
    },

    submit(answer) {
      if (this.answered) return;
      
      this.answered = true;
      this.correct = answer === this.currentItem.answer;
      
      if (this.correct) {
        this.state.xp += 10;
        this.state.streak += 1;
        this.state.progress += 1;
        
        // Track progress by level
        const levelId = this.activeLevel.id;
        this.state.progressByLevel[levelId] = (this.state.progressByLevel[levelId] || 0) + 1;
        
        // Remove from weak items if correct
        this.state.weakItems = this.state.weakItems.filter(id => id !== this.currentItem.id);
        
        // Check level up
        if (this.state.progress >= this.activeLevel.target) {
          this.levelUp();
        }
      } else {
        this.state.streak = 0;
        this.state.hearts -= 1;
        
        // Add to weak items
        if (!this.state.weakItems.includes(this.currentItem.id)) {
          this.state.weakItems.push(this.currentItem.id);
        }
        
        // Game over check
        if (this.state.hearts <= 0) {
          setTimeout(() => this.gameOver(), 1000);
        }
      }
      
      // Track session answers
      this.state.sessionAnswers[this.currentItem.id] = this.correct;
      
      this.saveState();
    },

    submitIdentify(answer) {
      this.submit(answer);
    },

    levelUp() {
      this.state.progress = 0;
      this.state.hearts = 3; // Refill hearts
      this.toast = true;
      setTimeout(() => this.toast = false, 3000);
    },

    gameOver() {
      if (confirm('Game Over! Reset your progress?')) {
        this.resetProgress();
      }
    },

    resetProgress() {
      this.state = {
        xp: 0,
        hearts: 3,
        streak: 0,
        progress: 0,
        progressByLevel: {},
        weakItems: [],
        sessionAnswers: {}
      };
      this.selectLevel(LEVELS[0].id);
      this.saveState();
    },

    next() {
      if (this.currentIndex < this.deck.length - 1) {
        this.currentIndex++;
        this.answered = false;
      }
    },

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.answered = false;
      }
    },

    heartsDisplay() {
      return '♥'.repeat(this.state.hearts) + '♡'.repeat(3 - this.state.hearts);
    },

    filteredGlossary() {
      const q = this.glossQuery.toLowerCase();
      return GLOSSARY.filter(g => 
        g.k.toLowerCase().includes(q) || g.v.toLowerCase().includes(q)
      );
    },

    handleKeys(e) {
      // If user is typing in an input/textarea/contenteditable, ignore
      if (e.target && (e.target.matches('input, textarea, [contenteditable]'))) return;
    
      if (this.route !== '#/play') return;
    
      const handled = ['1','2','3','ArrowLeft','ArrowRight'];
      if (!handled.includes(e.key)) return;
    
      switch(e.key) {
        case '1': if (!this.answered) this.submit('up'); break;
        case '2': if (!this.answered) this.submit('down'); break;
        case '3': if (!this.answered) this.submit('flat'); break;
        case 'ArrowLeft': this.prev(); break;
        case 'ArrowRight': this.next(); break;
      }
      e.preventDefault(); // only prevent when we actually handle a key
    },

    loadState() {
      try {
        const saved = localStorage.getItem('chartdojo');
        if (saved) {
          this.state = {...this.state, ...JSON.parse(saved)};
        }
      } catch (e) {
        console.warn('Failed to load state', e);
      }
    },

    saveState() {
      try {
        localStorage.setItem('chartdojo', JSON.stringify(this.state));
      } catch (e) {
        console.warn('Failed to save state', e);
      }
    }
  };
}