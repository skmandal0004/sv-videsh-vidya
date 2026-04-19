import React, { useEffect, useState, useCallback, useRef } from "react";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const NAVY = "#1A152D";
const PURPLE = "#6B4EFF";
const YELLOW = "#FDE047";

const API_URL = "https://svvideshvidya.com/get-files.php";
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

// ─── Utilities ────────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  let lastErr;
  for (let i = 1; i <= retries; i++) {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return await res.json();
    } catch (e) {
      lastErr = e;
      if (i < retries) await sleep(RETRY_DELAY_MS * i);
    }
  }
  throw lastErr;
}

// ─── System dark-mode hook ────────────────────────────────────────────────────
function useSystemDark() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (e) => setDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return dark;
}

// ─── CSS injected once ────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
  @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
  @keyframes spin    { to{transform:rotate(360deg)} }
  @keyframes fadeUp  { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
  @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.45} }
  @keyframes drawCheck { from{stroke-dashoffset:45} to{stroke-dashoffset:0} }
`;

function injectStyles() {
  if (document.getElementById("tt-global")) return;
  const s = document.createElement("style");
  s.id = "tt-global";
  s.textContent = GLOBAL_CSS;
  document.head.appendChild(s);
}

// ─── Themed token builder ─────────────────────────────────────────────────────
function useTokens(dark) {
  return {
    // page backgrounds
    pageBg: dark ? "#0F0C1D" : "#F5F3FF",
    surfaceBg: dark ? "#16122A" : "#FFFFFF",
    subtleBg: dark ? "#13102A" : "#FAF9FF",
    // borders
    border: dark ? "#2e2a4a" : "#E8E4F8",
    borderHover: dark ? "#6B4EFF" : "#B8AEFF",
    // text
    textHead: dark ? "#FFFFFF" : NAVY,
    textBody: dark ? "#CBD5E1" : "#4B5563",
    textMuted: dark ? "#64748B" : "#9CA3AF",
    // chips / badges
    pdfChipBg: dark ? "#3D1515" : "#FFE8E8",
    pdfChipClr: dark ? "#FCA5A5" : "#C0392B",
    imgChipBg: dark ? "#1E1B3A" : "#EEEBFF",
    imgChipClr: dark ? "#A78BFA" : PURPLE,
    // card header tint
    cardHdrBg: dark ? "rgba(107,78,255,0.07)" : "rgba(26,21,45,0.03)",
    // viewer bg
    viewerBg: dark ? "#0D0A1E" : "#F8F7FF",
    // toolbar
    toolbarBg: dark ? "#1C1830" : "#FFFFFF",
    toolbarBdr: dark ? "#2e2a4a" : "#E8E4F8",
    // shadow
    shadow: dark ? "0 4px 32px rgba(0,0,0,0.5)" : "0 4px 24px rgba(26,21,45,0.08)",
    shadowHov: dark ? "0 8px 48px rgba(107,78,255,0.22)" : "0 8px 40px rgba(107,78,255,0.13)",
    // stats card
    statsBg: dark ? "#1C1830" : "#FFFFFF",
    // skeleton
    skeletonA: dark ? "#1e1a36" : "#EDE8F8",
    skeletonB: dark ? "#2a2545" : "#D9D2F0",
  };
}

// ─── Shimmer skeleton ─────────────────────────────────────────────────────────
function Shimmer({ w = "100%", h = "14px", r = "6px", dark, delay = "0s" }) {
  const tk = useTokens(dark);
  return (
    <div style={{
      width: w, height: h, borderRadius: r, flexShrink: 0,
      background: `linear-gradient(90deg, ${tk.skeletonA} 25%, ${tk.skeletonB} 50%, ${tk.skeletonA} 75%)`,
      backgroundSize: "200% 100%",
      animation: `shimmer 1.6s ${delay} infinite`,
    }} />
  );
}

// ─── PDF Viewer ───────────────────────────────────────────────────────────────
function PDFViewer({ file, filename, dark }) {
  const tk = useTokens(dark);
  const [zoom, setZoom] = useState(100);
  const [fullscreen, setFullscreen] = useState(false);
  const [failed, setFailed] = useState(false);
  const iframeRef = useRef(null);

  const zoomedSrc = `${file}#zoom=${zoom}`;

  if (failed) return <PDFFallback file={file} dark={dark} />;

  return (
    <div style={{
      borderRadius: "14px",
      overflow: "hidden",
      border: `1px solid ${tk.border}`,
      background: tk.viewerBg,
      boxShadow: dark ? "0 2px 20px rgba(0,0,0,0.4)" : "0 2px 16px rgba(107,78,255,0.07)",
    }}>
      {/* ── Toolbar ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "8px",
        padding: "10px 14px",
        background: tk.toolbarBg,
        borderBottom: `1px solid ${tk.toolbarBdr}`,
      }}>
        {/* File info */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
          <div style={{
            width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0,
            background: "linear-gradient(135deg,#FF6B6B,#EE5A24)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="14 2 14 8 20 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="13" x2="8" y2="13" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="16" y1="17" x2="8" y2="17" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="10" y1="9" x2="8" y2="9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: "0.8rem",
            color: tk.textBody, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "180px",
          }}>{filename}</span>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          {/* Zoom controls */}
          <div style={{
            display: "flex", alignItems: "center", gap: "2px",
            background: dark ? "rgba(255,255,255,0.06)" : "rgba(107,78,255,0.06)",
            border: `1px solid ${tk.border}`,
            borderRadius: "8px", padding: "3px 4px",
          }}>
            <ToolBtn onClick={() => setZoom(z => Math.max(50, z - 25))} title="Zoom out" dark={dark}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </ToolBtn>
            <span style={{
              fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "0.72rem",
              color: PURPLE, minWidth: "38px", textAlign: "center", padding: "0 2px",
            }}>{zoom}%</span>
            <ToolBtn onClick={() => setZoom(z => Math.min(200, z + 25))} title="Zoom in" dark={dark}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            </ToolBtn>
          </div>

          {/* Reset zoom */}
          <ToolBtnIcon onClick={() => setZoom(100)} title="Reset zoom" dark={dark} tk={tk}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
            </svg>
          </ToolBtnIcon>

          {/* Open in new tab */}
          <a href={file} target="_blank" rel="noreferrer"
            title="Open in new tab"
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              background: dark ? "rgba(255,255,255,0.07)" : "rgba(107,78,255,0.07)",
              border: `1px solid ${tk.border}`,
              color: tk.textBody,
              padding: "5px 10px", borderRadius: "7px",
              textDecoration: "none", fontSize: "0.72rem", fontWeight: 600,
              fontFamily: "'DM Sans',sans-serif",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = PURPLE + "20"; e.currentTarget.style.color = PURPLE; }}
            onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.07)" : "rgba(107,78,255,0.07)"; e.currentTarget.style.color = tk.textBody; }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open
          </a>

          {/* Download */}
          <a href={file} download target="_blank" rel="noreferrer"
            title="Download PDF"
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              background: "linear-gradient(135deg,#1A152D,#6B4EFF)",
              color: "#fff",
              padding: "5px 12px", borderRadius: "7px",
              textDecoration: "none", fontSize: "0.72rem", fontWeight: 700,
              fontFamily: "'DM Sans',sans-serif",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>

          </a>
        </div>
      </div>

      {/* ── iFrame Viewer ── */}
      <div style={{ position: "relative", background: tk.viewerBg, padding: "0" }}>
        {/* Subtle top shadow line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: `linear-gradient(90deg, transparent, ${PURPLE}40, transparent)`,
          zIndex: 1, pointerEvents: "none",
        }} />
        <iframe
          ref={iframeRef}
          src={zoomedSrc}
          title={filename}
          style={{
            width: "100%",
            height: "680px",
            border: "none",
            display: "block",
            background: tk.viewerBg,
          }}
          onError={() => setFailed(true)}
        />
      </div>

      {/* ── Footer status bar ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "7px 14px",
        background: tk.toolbarBg,
        borderTop: `1px solid ${tk.toolbarBdr}`,
      }}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: tk.textMuted }}>
          PDF Document · {filename}
        </span>
        <span style={{
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'DM Sans',sans-serif", fontSize: "0.68rem", color: tk.textMuted,
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          Loaded
        </span>
      </div>
    </div>
  );
}

// Small toolbar icon button
function ToolBtn({ onClick, title, children, dark }) {
  const tk = useTokens(dark);
  return (
    <button onClick={onClick} title={title} style={{
      width: "26px", height: "26px", border: "none", background: "transparent",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", borderRadius: "6px", color: tk.textBody,
      transition: "background 0.15s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = PURPLE + "20"; e.currentTarget.style.color = PURPLE; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = tk.textBody; }}
    >{children}</button>
  );
}

function ToolBtnIcon({ onClick, title, children, dark, tk }) {
  return (
    <button onClick={onClick} title={title} style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      width: "28px", height: "28px", border: `1px solid ${tk.border}`,
      background: dark ? "rgba(255,255,255,0.06)" : "rgba(107,78,255,0.06)",
      color: tk.textBody,
      borderRadius: "7px", cursor: "pointer", transition: "all 0.15s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background = PURPLE + "20"; e.currentTarget.style.color = PURPLE; }}
      onMouseLeave={e => { e.currentTarget.style.background = dark ? "rgba(255,255,255,0.06)" : "rgba(107,78,255,0.06)"; e.currentTarget.style.color = tk.textBody; }}
    >{children}</button>
  );
}

// ─── PDF Fallback (browser can't render) ─────────────────────────────────────
function PDFFallback({ file, dark }) {
  const tk = useTokens(dark);
  return (
    <div style={{
      padding: "3.5rem 2rem", textAlign: "center",
      border: `2px dashed ${tk.border}`,
      borderRadius: "12px", background: tk.subtleBg,
    }}>
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📄</div>
      <p style={{ fontWeight: 700, color: tk.textHead, marginBottom: "0.4rem", fontFamily: "'Outfit',sans-serif" }}>
        Preview not supported in this browser
      </p>
      <p style={{ color: tk.textMuted, fontSize: "0.85rem", marginBottom: "1.5rem", fontFamily: "'DM Sans',sans-serif" }}>
        Download the PDF to view it in your device's PDF reader.
      </p>
      <a href={file} target="_blank" rel="noreferrer"
        style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", display: "inline-block", fontFamily: "'DM Sans',sans-serif" }}>
        Open PDF →
      </a>
    </div>
  );
}

// ─── Image Fallback ───────────────────────────────────────────────────────────
function ImageFallback({ file, dark }) {
  const tk = useTokens(dark);
  return (
    <div style={{ padding: "3rem 2rem", textAlign: "center", border: `2px dashed ${tk.border}`, borderRadius: "12px", background: tk.subtleBg }}>
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖼️</div>
      <p style={{ fontWeight: 700, color: tk.textHead, marginBottom: "0.4rem", fontFamily: "'Outfit',sans-serif" }}>Image failed to load</p>
      <p style={{ color: tk.textMuted, fontSize: "0.85rem", marginBottom: "1.5rem", fontFamily: "'DM Sans',sans-serif" }}>The file may have moved. Try opening it directly.</p>
      <a href={file} target="_blank" rel="noreferrer"
        style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)", color: "#fff", padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", display: "inline-block", fontFamily: "'DM Sans',sans-serif" }}>
        Open File →
      </a>
    </div>
  );
}

// ─── File Card ────────────────────────────────────────────────────────────────
function FileCard({ file, index, dark }) {
  const tk = useTokens(dark);
  const [expanded, setExpanded] = useState(true);
  const [imgError, setImgError] = useState(false);

  const isPDF = file.toLowerCase().endsWith(".pdf");
  const filename = decodeURIComponent(file.split("/").pop() || `File ${index + 1}`);
  const labelText = isPDF ? "PDF" : "Image";

  return (
    <div style={{
      background: tk.surfaceBg,
      border: `1px solid ${tk.border}`,
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: tk.shadow,
      width: "100%",
      transition: "box-shadow 0.2s, border-color 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = tk.shadowHov; e.currentTarget.style.borderColor = tk.borderHover; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = tk.shadow; e.currentTarget.style.borderColor = tk.border; }}
    >
      {/* ── Card Header ── */}


      {/* ── Card Body ── */}
      {expanded && (
        <div style={{ padding: "1.25rem", background: tk.viewerBg }}>
          {isPDF ? (
            <PDFViewer file={file} filename={filename} dark={dark} />
          ) : imgError ? (
            <ImageFallback file={file} dark={dark} />
          ) : (
            <div style={{ borderRadius: "12px", overflow: "hidden", border: `1px solid ${tk.border}` }}>
              <img
                src={file}
                alt={`Schedule ${index + 1}`}
                style={{ width: "100%", maxHeight: "680px", objectFit: "contain", display: "block", background: tk.subtleBg }}
                onError={() => setImgError(true)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────
function EmptyState({ onRetry, dark }) {
  const tk = useTokens(dark);
  return (
    <div style={{ textAlign: "center", padding: "5rem 2rem", border: `2px dashed ${tk.border}`, borderRadius: "20px", background: tk.subtleBg, maxWidth: "480px", margin: "2rem auto" }}>
      <div style={{ fontSize: "4rem", marginBottom: "1.25rem" }}>📅</div>
      <h3 style={{ fontWeight: 800, color: tk.textHead, fontSize: "1.2rem", marginBottom: "0.5rem", fontFamily: "'Outfit',sans-serif" }}>No Schedule Available</h3>
      <p style={{ color: tk.textMuted, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.75rem", fontFamily: "'DM Sans',sans-serif" }}>
        The training timetable hasn't been uploaded yet. Check back soon.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={onRetry} style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)", color: "#fff", border: "none", padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem", fontFamily: "'DM Sans',sans-serif" }}>Refresh</button>
        <a href="/contact" style={{ border: `2px solid ${tk.border}`, color: PURPLE, padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", fontFamily: "'DM Sans',sans-serif" }}>Contact Us</a>
      </div>
    </div>
  );
}

// ─── Error State ──────────────────────────────────────────────────────────────
function ErrorState({ error, onRetry, retryCount, retrying, countdown, dark }) {
  const tk = useTokens(dark);
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem", border: "2px dashed #FFCDD2", borderRadius: "20px", background: dark ? "#1a0a0a" : "#FFF8F8", maxWidth: "480px", margin: "2rem auto" }}>
      <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>⚠️</div>
      <h3 style={{ fontWeight: 800, color: "#EF4444", fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "'Outfit',sans-serif" }}>Failed to Load Schedule</h3>
      <p style={{ color: tk.textMuted, fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "0.5rem", fontFamily: "'DM Sans',sans-serif" }}>{error || "Something went wrong."}</p>
      {retryCount > 0 && <p style={{ color: tk.textMuted, fontSize: "0.78rem", marginBottom: "1.5rem" }}>Attempted {retryCount} of {MAX_RETRIES} retries</p>}
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={onRetry} disabled={retrying}
          style={{ background: retrying ? "#ccc" : "linear-gradient(135deg,#1A152D,#6B4EFF)", color: "#fff", border: "none", padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, cursor: retrying ? "not-allowed" : "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'DM Sans',sans-serif" }}>
          {retrying ? (
            <><span style={{ width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} />Retrying{countdown > 0 ? ` in ${countdown}s…` : "…"}</>
          ) : "Try Again"}
        </button>
        <a href="/contact" style={{ border: "2px solid #FFCDD2", color: "#EF4444", padding: "0.75rem 1.75rem", borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", fontFamily: "'DM Sans',sans-serif" }}>Contact Us</a>
      </div>
    </div>
  );
}

// ─── Retry Banner ─────────────────────────────────────────────────────────────
function RetryBanner({ attempt, countdown, dark }) {
  const total = 3;
  const pct = ((total - countdown) / total) * 100;
  const tk = useTokens(dark);
  return (
    <div style={{ background: dark ? "#1C1500" : "#FFF8E1", border: `1px solid ${dark ? "#4a3500" : "#FFE082"}`, borderRadius: "10px", padding: "0.85rem 1.25rem", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "12px" }}>
      <span style={{ fontSize: "1.1rem" }}>🔄</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "0.82rem", fontWeight: 600, color: dark ? "#FCD34D" : "#7B5800", marginBottom: "6px", fontFamily: "'DM Sans',sans-serif" }}>
          Attempt {attempt} of {MAX_RETRIES} — retrying in {countdown}s…
        </div>
        <div style={{ height: "4px", borderRadius: "4px", background: dark ? "#4a3500" : "#FFE082", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pct}%`, background: "#F59F00", borderRadius: "4px", transition: "width 1s linear" }} />
        </div>
      </div>
    </div>
  );
}

// ─── Loading Skeleton Cards ───────────────────────────────────────────────────
function SkeletonCard({ dark }) {
  const tk = useTokens(dark);
  return (
    <div style={{ background: tk.surfaceBg, border: `1px solid ${tk.border}`, borderRadius: "20px", overflow: "hidden", padding: "1rem 1.25rem", boxShadow: tk.shadow }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
        <Shimmer w="40px" h="40px" r="11px" dark={dark} />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          <Shimmer w="55%" h="13px" dark={dark} />
          <Shimmer w="25%" h="9px" dark={dark} delay="0.2s" />
        </div>
        <Shimmer w="90px" h="30px" r="8px" dark={dark} />
      </div>
      <Shimmer w="100%" h="580px" r="12px" dark={dark} />
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const TimeTable = () => {
  const dark = useSystemDark();
  const tk = useTokens(dark);

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const [retrying, setRetrying] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [retryAttempt, setRetryAttempt] = useState(0);
  const countdownRef = useRef(null);

  const load = useCallback(async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const data = await fetchWithRetry(API_URL, MAX_RETRIES);
      const fetched = data.files || [];
      setFiles(fetched);
      setTitle(data.textInput ? `${data.textInput} Live Classes Schedule` : "Training Timetable");
      setStatus(fetched.length === 0 ? "empty" : "success");
      setRetryCount(0);
    } catch (e) {
      setStatus("error");
      setErrorMsg(e?.message || "Network error — unable to reach the server.");
      setRetryCount(c => c + 1);
    }
  }, []);

  const handleRetry = useCallback(() => {
    if (retrying) return;
    setRetrying(true);
    setRetryAttempt(a => a + 1);
    const total = 3;
    setCountdown(total);
    let rem = total;
    countdownRef.current = setInterval(() => {
      rem -= 1;
      setCountdown(rem);
      if (rem <= 0) {
        clearInterval(countdownRef.current);
        setRetrying(false);
        setCountdown(0);
        load();
      }
    }, 1000);
  }, [retrying, load]);

  useEffect(() => { injectStyles(); load(); return () => clearInterval(countdownRef.current); }, [load]);

  const pdfCount = files.filter(f => f.toLowerCase().endsWith(".pdf")).length;
  const imgCount = files.length - pdfCount;

  /** Header skeleton */
  function HeaderSkeleton() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginBottom: "2.5rem" }}>
        <div style={{ width: "80px", height: "8px", borderRadius: "4px", background: "#e8e4f8", animation: "shimmer 1.6s infinite", backgroundSize: "200% 100%" }} />
        <div style={{ width: "420px", maxWidth: "90%", height: "32px", borderRadius: "8px", background: "#e8e4f8", animation: "shimmer 1.6s infinite", backgroundSize: "200% 100%" }} />
        <div style={{ width: "260px", height: "14px", borderRadius: "4px", background: "#e8e4f8", animation: "shimmer 1.6s infinite", backgroundSize: "200% 100%", animationDelay: "0.15s" }} />
      </div>
    );
  }


  return (
    <div style={{ minHeight: "100vh", background: tk.pageBg, fontFamily: "'DM Sans',system-ui,sans-serif", color: tk.textHead, transition: "background 0.3s, color 0.3s" }}>

      {/* ── Top accent bar ── */}
      <div style={{ height: 4, background: "linear-gradient(90deg,#1A152D,#6B4EFF)" }} />

      {/* ── Hero header ── */}
      <div
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2D1B69 50%, ${PURPLE} 100%)`, padding: "3.5rem 1.5rem 2.5rem", textAlign: "center", position: "relative", overflow: "hidden", }}
      >
        {/* Decorative ring */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "260px", height: "260px", borderRadius: "50%", border: "60px solid rgba(255,215,0,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "180px", height: "180px", borderRadius: "50%", border: "40px solid rgba(107,78,255,0.12)", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <span
            style={{ display: "inline-block", background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.4)", color: YELLOW, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "20px", marginBottom: "0.85rem", }}
          >
            📅 Class Schedule
          </span>

          {status === "loading" ? (
            <HeaderSkeleton />
          ) : (
            <>
              <h1
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 900,
                  margin: "0 0 0.6rem",
                  lineHeight: 1.15,
                  animation: "fadeUp 0.5s ease both",
                }}
              >
                {title || "Training Timetable"}
              </h1>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", margin: 0, animation: "fadeUp 0.5s 0.1s ease both" }}>
                Download or preview the latest class schedule below
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>

        {/* Retry banner */}
        {retrying && <RetryBanner attempt={retryAttempt} countdown={countdown} dark={dark} />}

        {/* Stats bar */}
        {status === "success" && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem", animation: "fadeUp 0.4s ease both", alignItems: "center" }}>
            {[
              { icon: "📄", val: files.length, sub: `File${files.length !== 1 ? "s" : ""} Available` },
              ...(pdfCount > 0 ? [{ icon: "🔴", val: pdfCount, sub: `PDF${pdfCount !== 1 ? "s" : ""}` }] : []),
              ...(imgCount > 0 ? [{ icon: "🖼️", val: imgCount, sub: `Image${imgCount !== 1 ? "s" : ""}` }] : []),
              { icon: "🕒", val: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }), sub: "Last Updated" },
            ].map((s, i) => (
              <div key={i} style={{ background: tk.statsBg, border: `1px solid ${tk.border}`, borderRadius: "10px", padding: "0.65rem 1.1rem", display: "flex", alignItems: "center", gap: "10px", boxShadow: dark ? "0 2px 8px rgba(0,0,0,0.3)" : "0 2px 8px rgba(107,78,255,0.06)" }}>
                <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.95rem", color: PURPLE, lineHeight: 1, fontFamily: "'Outfit',sans-serif" }}>{s.val}</div>
                  <div style={{ fontSize: "0.68rem", color: tk.textMuted, fontWeight: 600, fontFamily: "'DM Sans',sans-serif" }}>{s.sub}</div>
                </div>
              </div>
            ))}

            {/* Refresh btn */}
            <div style={{ marginLeft: "auto" }}>
              <button onClick={load} style={{ display: "flex", alignItems: "center", gap: "6px", background: "transparent", border: `1.5px solid ${tk.border}`, color: PURPLE, padding: "0.6rem 1.1rem", borderRadius: "8px", fontWeight: 700, cursor: "pointer", fontSize: "0.82rem", transition: "all 0.2s", fontFamily: "'DM Sans',sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = PURPLE + "14"; e.currentTarget.style.borderColor = PURPLE; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = tk.border; }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={PURPLE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        )}

        {/* ── States ── */}
        {status === "loading" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[1, 2].map(n => <SkeletonCard key={n} dark={dark} />)}
          </div>
        )}

        {status === "error" && <ErrorState error={errorMsg} onRetry={handleRetry} retryCount={retryCount} retrying={retrying} countdown={countdown} dark={dark} />}
        {status === "empty" && <EmptyState onRetry={load} dark={dark} />}

        {status === "success" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {files.map((file, i) => (
              <div key={file} style={{ animation: `fadeUp 0.45s ${i * 0.08}s ease both` }}>
                <FileCard file={file} index={i} dark={dark} />
              </div>
            ))}

            {/* Bottom CTA */}
            <div style={{ marginTop: "1rem", background: "linear-gradient(135deg,#1A152D,#6B4EFF)", borderRadius: "18px", padding: "2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem", boxShadow: `0 8px 40px ${PURPLE}33` }}>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", fontFamily: "'Outfit',sans-serif" }}>Have questions about the schedule?</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.83rem", marginTop: "3px", fontFamily: "'DM Sans',sans-serif" }}>Mon–Sat · 10:30 AM – 6:00 PM IST</div>
              </div>
              <a href="/contact" style={{ background: YELLOW, color: NAVY, padding: "0.75rem 1.75rem", borderRadius: "10px", fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", fontFamily: "'DM Sans',sans-serif", whiteSpace: "nowrap", boxShadow: `0 4px 16px ${YELLOW}40` }}>
                Contact Us →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeTable;