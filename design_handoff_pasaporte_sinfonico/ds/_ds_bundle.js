/* @ds-bundle: {"format":3,"namespace":"PasaporteSinfNicoDesignSystem_fc650e","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"TimelineItem","sourcePath":"components/content/Timeline.jsx"},{"name":"StatGrid","sourcePath":"components/data/Stat.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Quote","sourcePath":"components/feedback/Quote.jsx"},{"name":"TipBox","sourcePath":"components/feedback/TipBox.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6f45cac4bd8a","components/content/Card.jsx":"c14bd1fed6fb","components/content/SectionHeader.jsx":"faecc286f5b0","components/content/Timeline.jsx":"05ab83879d30","components/data/Stat.jsx":"e1c3296fb8ad","components/feedback/Quote.jsx":"fd31d4efe3fe","components/feedback/TipBox.jsx":"d09a0e9201d0","components/labels/Tag.jsx":"d179f8b95e81","covers/image-slot.js":"9309434cb09c","ui_kits/guia-episodio/guide-page.js":"19936cd5e9b5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PasaporteSinfNicoDesignSystem_fc650e = window.PasaporteSinfNicoDesignSystem_fc650e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.6em;
  font-family:var(--f-label); font-weight:600; text-transform:uppercase;
  letter-spacing:var(--ls-label); font-size:var(--fs-label); line-height:1;
  text-decoration:none; cursor:pointer; border:1px solid transparent;
  border-radius:var(--radius-none); padding:.85rem 2rem;
  transition:background var(--dur-fast) var(--ease-out),
             border-color var(--dur-fast) var(--ease-out),
             color var(--dur-fast) var(--ease-out),
             transform var(--dur-fast) var(--ease-out),
             opacity var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color:transparent;
}
.psf-btn:focus-visible{ outline:none; box-shadow:var(--ring); }
.psf-btn svg{ width:1.1em; height:1.1em; }

/* primary — gold fill, near-black ink */
.psf-btn--primary{ background:var(--accent); color:var(--on-accent); }
.psf-btn--primary:hover{ background:var(--accent-bright); transform:translateY(-1px); }
.psf-btn--primary:active{ transform:translateY(0); }

/* ghost — gold hairline + gold text */
.psf-btn--ghost{ background:transparent; border-color:var(--border-accent); color:var(--accent); font-weight:400; }
.psf-btn--ghost:hover{ background:var(--surface-tint); border-color:var(--accent); }

/* quiet — small text link button (the inline .btn in cards) */
.psf-btn--quiet{
  background:transparent; color:var(--accent); border-color:var(--rule);
  padding:.5rem 1rem; font-size:var(--fs-micro); font-weight:600;
}
.psf-btn--quiet:hover{ border-color:var(--border-accent); background:var(--surface-tint); }

.psf-btn--sm{ padding:.55rem 1.2rem; font-size:var(--fs-micro); }
.psf-btn--lg{ padding:1rem 2.6rem; font-size:var(--fs-label); }
.psf-btn--block{ width:100%; }
.psf-btn[disabled],.psf-btn[aria-disabled="true"]{ opacity:.4; pointer-events:none; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-btn-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  iconLeft = null,
  iconRight = null,
  href,
  disabled = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-btn', `psf-btn--${variant}`, size !== 'md' ? `psf-btn--${size}` : '', block ? 'psf-btn--block' : '', className].filter(Boolean).join(' ');
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-sechead{ margin-bottom:3rem; }
.psf-sechead__rule{ display:flex; align-items:center; gap:1rem; margin-bottom:1.4rem; }
.psf-sechead__tag{
  font-family:var(--f-label); font-size:var(--fs-micro); font-weight:600;
  letter-spacing:var(--ls-tag); text-transform:uppercase; color:var(--secondary-glow);
  white-space:nowrap;
}
.psf-sechead__line{ flex:1; height:1px; border:0; background:linear-gradient(90deg, var(--border-accent), transparent); }
.psf-sechead--center{ text-align:center; }
.psf-sechead--center .psf-sechead__rule{ justify-content:center; }
.psf-sechead--center .psf-sechead__line{ max-width:80px; }
.psf-sechead--center .psf-sechead__line:first-child{ background:linear-gradient(90deg, transparent, var(--border-accent)); }
.psf-sechead__title{
  font-family:var(--f-display); font-size:var(--fs-title); line-height:var(--lh-title);
  letter-spacing:var(--ls-title); text-transform:uppercase; color:var(--bone); margin:0 0 1.5rem;
}
.psf-sechead__title em{ color:var(--accent); font-style:italic; font-family:var(--f-head); text-transform:none; }
.psf-sechead__lead{
  font-family:var(--f-body); font-size:1rem; line-height:var(--lh-loose);
  color:var(--text-soft); max-width:var(--container-sm); margin:0;
}
.psf-sechead--center .psf-sechead__lead{ margin:0 auto; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-sechead-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-sechead-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function SectionHeader({
  tag,
  title,
  lead,
  align = 'left',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-sechead', align === 'center' ? 'psf-sechead--center' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("header", _extends({
    className: cls
  }, rest), tag ? /*#__PURE__*/React.createElement("div", {
    className: "psf-sechead__rule"
  }, align === 'center' ? /*#__PURE__*/React.createElement("hr", {
    className: "psf-sechead__line"
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "psf-sechead__tag"
  }, tag), /*#__PURE__*/React.createElement("hr", {
    className: "psf-sechead__line"
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    className: "psf-sechead__title",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }) : null, lead ? /*#__PURE__*/React.createElement("p", {
    className: "psf-sechead__lead"
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-timeline{ position:relative; padding-left:2rem; }
.psf-timeline::before{
  content:""; position:absolute; left:0; top:.4rem; bottom:.4rem; width:1px;
  background:linear-gradient(180deg, var(--border-accent), var(--rule));
}
.psf-tlitem{ position:relative; padding:0 0 2.5rem 1.5rem; }
.psf-tlitem:last-child{ padding-bottom:0; }
.psf-tlitem::before{
  content:""; position:absolute; left:-2rem; top:.35rem;
  width:9px; height:9px; border-radius:999px;
  background:var(--accent); transform:translateX(-4px);
  box-shadow:0 0 0 4px var(--base-1), var(--glow-accent);
}
.psf-tlitem--regen::before{ background:var(--positive); }
.psf-tlitem__time{
  font-family:var(--f-label); font-size:var(--fs-2xs); font-weight:600;
  letter-spacing:var(--ls-label); text-transform:uppercase; color:var(--secondary-glow);
  margin:0 0 .3rem;
}
.psf-tlitem__place{ font-family:var(--f-head); font-size:var(--fs-md); font-weight:700; color:var(--bone); line-height:1.3; margin:0 0 .5rem; }
.psf-tlitem__desc{ font-family:var(--f-body); font-size:var(--fs-sm); line-height:1.85; color:var(--text-soft); margin:0; }
.psf-tlitem__links{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:.8rem; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-timeline-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-timeline-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Timeline({
  children,
  className = '',
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['psf-timeline', className].filter(Boolean).join(' ')
  }, rest), children);
}
function TimelineItem({
  time,
  place,
  description,
  regen = false,
  children,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-tlitem', regen ? 'psf-tlitem--regen' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), time ? /*#__PURE__*/React.createElement("p", {
    className: "psf-tlitem__time"
  }, time) : null, place ? /*#__PURE__*/React.createElement("h4", {
    className: "psf-tlitem__place"
  }, place) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "psf-tlitem__desc"
  }, description) : null, children ? /*#__PURE__*/React.createElement("div", {
    className: "psf-tlitem__links"
  }, children) : null);
}
Object.assign(__ds_scope, { Timeline, TimelineItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-stats{ display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); border:1px solid var(--rule); }
.psf-stat{ padding:2rem 1.5rem; text-align:center; border-right:1px solid var(--rule); }
.psf-stat:last-child{ border-right:0; }
.psf-stat__num{ font-family:var(--f-display); font-size:var(--fs-2xl); color:var(--accent); line-height:1; margin:0 0 .4rem; }
.psf-stat__label{
  font-family:var(--f-label); font-size:var(--fs-2xs); font-weight:600;
  letter-spacing:var(--ls-card); text-transform:uppercase; color:var(--smoke); margin:0;
}
.psf-stat__desc{ font-family:var(--f-body); font-size:var(--fs-xs); line-height:1.6; color:var(--text-soft); margin:.5rem 0 0; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-stat-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-stat-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function StatGrid({
  children,
  className = '',
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['psf-stats', className].filter(Boolean).join(' ')
  }, rest), children);
}
function Stat({
  value,
  label,
  description,
  className = '',
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['psf-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "psf-stat__num"
  }, value), label ? /*#__PURE__*/React.createElement("p", {
    className: "psf-stat__label"
  }, label) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "psf-stat__desc"
  }, description) : null);
}
Object.assign(__ds_scope, { StatGrid, Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-quote{
  border-left:var(--bw-quote) solid var(--accent);
  background:var(--surface-tint);
  padding:1.5rem 2rem; margin:2rem 0;
}
.psf-quote__text{
  font-family:var(--f-head); font-size:var(--fs-lg); font-style:italic;
  color:var(--bone); line-height:1.7; margin:0 0 .8rem;
}
.psf-quote__source{
  font-family:var(--f-label); font-size:var(--fs-2xs); font-weight:600;
  letter-spacing:var(--ls-label); text-transform:uppercase; color:var(--accent); margin:0;
}
.psf-quote--secondary{ border-left-color:var(--secondary-glow); }
.psf-quote--secondary .psf-quote__source{ color:var(--secondary-glow); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-quote-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-quote-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Quote({
  children,
  source,
  variant = 'accent',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-quote', variant === 'secondary' ? 'psf-quote--secondary' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "psf-quote__text"
  }, children), source ? /*#__PURE__*/React.createElement("p", {
    className: "psf-quote__source"
  }, source) : null);
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Quote.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TipBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-tip{
  background:var(--surface-tint); border-left:var(--bw-quote) solid var(--accent);
  padding:1.2rem 1.5rem; margin:1.5rem 0;
}
.psf-tip__label{
  font-family:var(--f-label); font-size:var(--fs-2xs); font-weight:700;
  letter-spacing:var(--ls-card); text-transform:uppercase; color:var(--accent);
  margin:0 0 .5rem; display:flex; align-items:center; gap:.5rem;
}
.psf-tip__body{ font-family:var(--f-body); font-size:var(--fs-sm); line-height:1.8; color:var(--text-soft); margin:0; }
.psf-tip--regen{ border-left-color:var(--positive); }
.psf-tip--regen .psf-tip__label{ color:var(--positive); }
.psf-tip--warn{ border-left-color:var(--secondary-glow); }
.psf-tip--warn .psf-tip__label{ color:var(--secondary-glow); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-tip-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-tip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function TipBox({
  label = 'Tip del viajero',
  children,
  icon,
  variant = 'accent',
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-tip', variant !== 'accent' ? `psf-tip--${variant}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("p", {
    className: "psf-tip__label"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon) : null, label), /*#__PURE__*/React.createElement("p", {
    className: "psf-tip__body"
  }, children));
}
Object.assign(__ds_scope, { TipBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TipBox.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-tag{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--f-label); font-weight:600; text-transform:uppercase;
  letter-spacing:var(--ls-card); font-size:var(--fs-micro); line-height:1;
  color:var(--_c, var(--secondary-glow)); white-space:nowrap;
}
.psf-tag--boxed{
  border:1px solid var(--rule); padding:.5rem 1rem;
  color:var(--_c, var(--accent));
}
.psf-tag--solid{
  background:var(--_c, var(--accent)); color:var(--on-accent);
  padding:.5rem 1rem; letter-spacing:var(--ls-label); font-weight:700;
}
.psf-tag__dot{ width:.5em; height:.5em; border-radius:999px; background:currentColor; flex:none; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-tag-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  variant = 'plain',
  color,
  dot = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['psf-tag', variant !== 'plain' ? `psf-tag--${variant}` : '', className].filter(Boolean).join(' ');
  const style = color ? {
    ['--_c']: color
  } : undefined;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "psf-tag__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.psf-card{
  display:flex; flex-direction:column;
  background:var(--surface-card); border:1px solid var(--rule);
  border-radius:var(--radius-none); overflow:hidden;
  transition:border-color var(--dur-base) var(--ease-out),
             transform var(--dur-base) var(--ease-out);
}
.psf-card--link{ text-decoration:none; cursor:pointer; }
.psf-card--link:hover{ border-color:var(--border-accent); transform:translateY(-3px); }
.psf-card--link:focus-visible{ outline:none; box-shadow:var(--ring); }

.psf-card__media{ aspect-ratio:16/10; background:var(--base-2) center/cover no-repeat; position:relative; }
.psf-card__type{
  font-family:var(--f-label); font-size:var(--fs-micro); font-weight:700;
  letter-spacing:var(--ls-card); text-transform:uppercase; color:var(--_tc, var(--accent));
  padding:.65rem 1.3rem; border-bottom:1px solid var(--rule);
}
.psf-card__body{ padding:1.4rem 1.5rem; display:flex; flex-direction:column; gap:.6rem; }
.psf-card__title{ font-family:var(--f-head); font-size:var(--fs-md); font-weight:700; color:var(--bone); line-height:1.3; margin:0; }
.psf-card__meta{ font-family:var(--f-label); font-size:var(--fs-micro); letter-spacing:var(--ls-body); text-transform:uppercase; color:var(--smoke); margin:0; }
.psf-card__desc{ font-family:var(--f-body); font-size:var(--fs-sm); line-height:1.8; color:var(--text-soft); margin:0; }
.psf-card__links{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:.4rem; }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('psf-card-css')) return;
  const s = document.createElement('style');
  s.id = 'psf-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  type,
  typeColor,
  title,
  meta,
  description,
  image,
  links,
  children,
  href,
  className = '',
  ...rest
}) {
  inject();
  const isLink = !!href;
  const cls = ['psf-card', isLink ? 'psf-card--link' : '', className].filter(Boolean).join(' ');
  const Comp = isLink ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls,
    href: href,
    style: typeColor ? {
      ['--_tc']: typeColor
    } : undefined
  }, rest), image ? /*#__PURE__*/React.createElement("div", {
    className: "psf-card__media",
    style: {
      backgroundImage: `url(${image})`
    }
  }) : null, type ? /*#__PURE__*/React.createElement("div", {
    className: "psf-card__type"
  }, type) : null, /*#__PURE__*/React.createElement("div", {
    className: "psf-card__body"
  }, meta ? /*#__PURE__*/React.createElement("p", {
    className: "psf-card__meta"
  }, meta) : null, title ? /*#__PURE__*/React.createElement("h4", {
    className: "psf-card__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "psf-card__desc"
  }, description) : null, children, links && links.length ? /*#__PURE__*/React.createElement("div", {
    className: "psf-card__links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    variant: "boxed",
    color: "var(--accent)"
  }, l))) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// covers/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "covers/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/guia-episodio/guide-page.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* El Pasaporte Sinfónico — Episode Guide UI kit
   A faithful recreation of the production episode-guide microsite
   (Birmingham · Heavy Metal), composed from the design-system
   components. Reads components from the compiled bundle namespace. */

const NS = window.PasaporteSinfNicoDesignSystem_fc650e;
const {
  Button,
  SectionHeader,
  Card,
  Timeline,
  TimelineItem,
  Quote,
  TipBox,
  StatGrid,
  Stat,
  Tag
} = NS;
const {
  useState,
  useEffect
} = React;
const LOGO = '../../assets/logo-white.png';

/* ---------- Nav ---------- */
function Nav() {
  const links = ['Cómo llegar', 'Movernos', 'Circuito', 'Hoteles', 'Historia', 'Escuchar'];
  return /*#__PURE__*/React.createElement("nav", {
    className: "gk-nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "gk-nav__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "El Pasaporte Sinf\xF3nico"
  }), /*#__PURE__*/React.createElement("span", null, "El Pasaporte Sinf\xF3nico")), /*#__PURE__*/React.createElement("div", {
    className: "gk-nav__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(/\s/g, '')
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#escuchar"
  }, "\u25B6 Escuchar"));
}

/* ---------- Hero ---------- */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "gk-hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-hero__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gk-hero__under"
  }, "El Pasaporte Sinf\xF3nico presenta"), /*#__PURE__*/React.createElement("h1", {
    className: "gk-hero__city"
  }, "Birmingham"), /*#__PURE__*/React.createElement("span", {
    className: "gk-hero__under"
  }, "Inglaterra \xB7 Heavy Metal \xB7 1968 \u2014 Para Siempre"), /*#__PURE__*/React.createElement("p", {
    className: "gk-hero__lead"
  }, "La ciudad que forj\xF3 el acero \u2014 y el heavy metal. Recorremos los pubs, f\xE1bricas y venues donde Black Sabbath invent\xF3 el sonido m\xE1s pesado del planeta, con los locales que lo vivieron."), /*#__PURE__*/React.createElement("div", {
    className: "gk-hero__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "#escuchar"
  }, "Escuchar episodio"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    href: "#circuito"
  }, "Ver circuito"))));
}

/* ---------- Section shell ---------- */
function Section({
  id,
  children,
  tint
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: 'gk-section' + (tint ? ' gk-section--tint' : ''),
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "gk-section__inner"
  }, children));
}

/* ---------- Cómo llegar (transport entry cards) ---------- */
function ComoLlegar() {
  const cards = [{
    type: '✈ Desde Norteamérica',
    title: 'Vuelo vía Londres o directo a BHX',
    desc: 'American y British conectan NYC/Miami con Birmingham (BHX) en ~8–9 h con una escala en Heathrow.',
    links: ['Skyscanner', 'BHX']
  }, {
    type: '✈ Desde Latinoamérica',
    title: 'Conexión por Madrid o Londres',
    desc: 'Iberia y British vía MAD/LHR. Desde Bogotá o Buenos Aires, calcula 16–18 h totales.',
    links: ['Skyscanner']
  }, {
    type: '🚆 Desde Londres',
    title: 'Avanti West Coast — 1h 24m',
    desc: 'Tren directo desde Euston a New Street, en el corazón de la ciudad. La forma más bella de llegar.',
    links: ['Trainline', 'Mapa']
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "c\xF3mollegar"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tag: "C\xF3mo llegar",
    title: "C\xF3mo llegar a<br><em>Birmingham</em>",
    lead: "Tres rutas para aterrizar en la cuna del metal, vengas de donde vengas."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Card, _extends({
    key: i
  }, c, {
    description: c.desc,
    href: "#"
  })))));
}

/* ---------- Movernos (transport tabs) ---------- */
function Movernos() {
  const modes = {
    'Metro': {
      name: '🚊 West Midlands Metro',
      desc: 'Tranvía que une New Street con el Jewellery Quarter. Una línea, fácil y barato (£1.80 el viaje).'
    },
    'Bus': {
      name: '🚌 National Express WM',
      desc: 'Cobertura total de la ciudad. App "Swift" para pagar sin efectivo; ideal para llegar a los venues.'
    },
    'Bici': {
      name: '🚲 West Midlands Cycle Hire',
      desc: 'Bicis de alquiler por toda la ciudad. La red de canales hace el pedaleo plano y precioso.'
    },
    'Canal': {
      name: '⛵ Narrowboat Tours',
      desc: 'Birmingham tiene más canales que Venecia. Un paseo en barca estrecha es turismo lento y regenerativo.'
    }
  };
  const [tab, setTab] = useState('Metro');
  return /*#__PURE__*/React.createElement(Section, {
    id: "movernos",
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tag: "C\xF3mo movernos",
    title: "Birmingham<br><em>desde adentro</em>",
    lead: "La ciudad se camina, pero estas son las formas locales de moverse entre paradas."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-tabs"
  }, Object.keys(modes).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: 'gk-tab' + (tab === k ? ' is-active' : ''),
    onClick: () => setTab(k)
  }, k))), /*#__PURE__*/React.createElement("div", {
    className: "gk-tabpanel"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "gk-tabpanel__name"
  }, modes[tab].name), /*#__PURE__*/React.createElement("p", {
    className: "gk-tabpanel__desc"
  }, modes[tab].desc)));
}

/* ---------- Circuito (timeline) ---------- */
function Circuito() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "circuito"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tag: "El circuito",
    title: "Cinco d\xEDas en<br><em>la cuna del metal</em>",
    lead: "Nuestro itinerario fuera de lo convencional, paso a paso. El orden sigue el del episodio."
  }), /*#__PURE__*/React.createElement(Timeline, null, /*#__PURE__*/React.createElement(TimelineItem, {
    time: "D\xEDa 1 \xB7 Ma\xF1ana",
    place: "Jewellery Quarter",
    description: "Caf\xE9 en el barrio de los orfebres y caminata por las callecitas victorianas donde todo empez\xF3."
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "boxed",
    color: "var(--accent)"
  }, "Mapa")), /*#__PURE__*/React.createElement(TimelineItem, {
    time: "D\xEDa 1 \xB7 Noche",
    place: "The Crown (hist\xF3rico)",
    description: "El pub donde Black Sabbath y Led Zeppelin tocaron antes de ser leyenda."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    time: "D\xEDa 2 \xB7 Tarde",
    place: "Back to Black \u2014 tour de f\xE1bricas",
    description: "El sonido del metal sali\xF3 del acero. Recorremos las naves industriales que lo inspiraron."
  }), /*#__PURE__*/React.createElement(TimelineItem, {
    time: "D\xEDa 3 \xB7 Ma\xF1ana",
    place: "Reforestaci\xF3n del canal",
    regen: true,
    description: "Jornada de turismo regenerativo: plantamos especies nativas junto a una cooperativa local."
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "boxed",
    color: "var(--positive)"
  }, "Reservar"))));
}

/* ---------- Historia: stats + quote + band ---------- */
function Historia() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "historia",
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tag: "La historia",
    title: "El metal que<br><em>naci\xF3 aqu\xED</em>",
    lead: "Por qu\xE9 una ciudad industrial inglesa cambi\xF3 la m\xFAsica para siempre."
  }), /*#__PURE__*/React.createElement(StatGrid, null, /*#__PURE__*/React.createElement(Stat, {
    value: "1968",
    label: "A\xF1o cero",
    description: "Nace Black Sabbath"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "Bandas fundacionales"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Venues en el circuito"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u221E",
    label: "Decibeles"
  })), /*#__PURE__*/React.createElement(Quote, {
    source: "\u2014 Tony Iommi, Black Sabbath"
  }, "El sonido vino de la f\xE1brica. Birmingham era acero, humo y ruido \u2014 y eso es exactamente lo que quer\xEDamos que sonara."));
}

/* ---------- Hoteles ---------- */
function Hoteles() {
  const cards = [{
    type: 'Hotel · Boutique',
    title: 'Hotel du Vin & Bistro',
    meta: 'Jewellery Quarter',
    desc: 'Antiguo hospital victoriano reconvertido; a pasos de los pubs donde nació el metal.',
    links: ['Web', 'Mapa']
  }, {
    type: 'Hostal · Económico',
    title: 'Selina Birmingham',
    meta: 'Centro',
    desc: 'Cama, cowork y café para viajeros sinfónicos con presupuesto ajustado.',
    links: ['Web', 'Reservar']
  }, {
    type: 'Apartamento',
    title: 'Canalside Lofts',
    meta: 'Brindleyplace',
    desc: 'Lofts sobre los canales, perfectos para quedarse y salir a pie a cada venue.',
    links: ['Airbnb']
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "hoteles"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tag: "D\xF3nde alojarnos",
    title: "Hoteles en<br><em>Birmingham</em>",
    lead: "Tres bases para el circuito, de boutique a mochilero."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-grid"
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(Card, _extends({
    key: i
  }, c, {
    description: c.desc,
    href: "#"
  })))), /*#__PURE__*/React.createElement(TipBox, {
    variant: "regen",
    icon: "\uD83C\uDF31",
    label: "Turismo regenerativo",
    style: {
      marginTop: '2rem'
    }
  }, "Reserva la jornada de reforestaci\xF3n del canal con al menos una semana. El cupo es peque\xF1o y el dinero va directo a la cooperativa que mantiene la v\xEDa fluvial."));
}

/* ---------- Escuchar (CTA + fake player) ---------- */
function Escuchar() {
  const [playing, setPlaying] = useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "escuchar",
    tint: true
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    tag: "Dale play",
    title: "Escucha el<br><em>episodio completo</em>",
    lead: "57 minutos por la cuna del metal, con voces locales y la m\xFAsica que lo empez\xF3 todo."
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-player"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gk-player__cover"
  }), /*#__PURE__*/React.createElement("div", {
    className: "gk-player__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gk-player__ep"
  }, "EP. 07 \xB7 TEMPORADA 04"), /*#__PURE__*/React.createElement("h4", {
    className: "gk-player__title"
  }, "Birmingham \u2014 La cuna del Heavy Metal"), /*#__PURE__*/React.createElement("div", {
    className: "gk-player__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: playing ? '38%' : '0%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "gk-player__time"
  }, /*#__PURE__*/React.createElement("span", null, playing ? '21:40' : '0:00'), /*#__PURE__*/React.createElement("span", null, "57:00"))), /*#__PURE__*/React.createElement("button", {
    className: "gk-player__play",
    onClick: () => setPlaying(p => !p),
    "aria-label": "Reproducir"
  }, playing ? '❚❚' : '▶')), /*#__PURE__*/React.createElement("div", {
    className: "gk-platforms"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#"
  }, "Spotify"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#"
  }, "Apple Podcasts"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#"
  }, "iVoox"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#"
  }, "YouTube")));
}

/* ---------- Footer ---------- */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "gk-footer"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "El Pasaporte Sinf\xF3nico"
  }), /*#__PURE__*/React.createElement("p", {
    className: "gk-footer__tag"
  }, "El podcast donde la m\xFAsica viaja"), /*#__PURE__*/React.createElement("p", {
    className: "gk-footer__legal"
  }, "\xA9 2026 El Pasaporte Sinf\xF3nico \xB7 Turismo sonoro y regenerativo"));
}
function GuidePage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ComoLlegar, null), /*#__PURE__*/React.createElement(Movernos, null), /*#__PURE__*/React.createElement(Circuito, null), /*#__PURE__*/React.createElement(Historia, null), /*#__PURE__*/React.createElement(Hoteles, null), /*#__PURE__*/React.createElement(Escuchar, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(GuidePage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/guia-episodio/guide-page.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.TimelineItem = __ds_scope.TimelineItem;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.TipBox = __ds_scope.TipBox;

__ds_ns.Tag = __ds_scope.Tag;

})();
