
const MONTHS = ["Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez","Jan","Feb","Mär"];

const mttrData = [
  { m: "Apr", mttr: 91, ziel: 4 }, { m: "Mai", mttr: 78, ziel: 4 },
  { m: "Jun", mttr: 62, ziel: 4 }, { m: "Jul", mttr: 48, ziel: 4 },
  { m: "Aug", mttr: 36, ziel: 4 }, { m: "Sep", mttr: 22, ziel: 4 },
  { m: "Okt", mttr: 16, ziel: 4 }, { m: "Nov", mttr: 11, ziel: 4 },
  { m: "Dez", mttr: 8, ziel: 4 },  { m: "Jan", mttr: 6, ziel: 4 },
  { m: "Feb", mttr: 5, ziel: 4 },  { m: "Mär", mttr: 4.2, ziel: 4 },
];

const ffrData = [
  { m: "Apr", ffr: 14, ziel: 70 }, { m: "Mai", ffr: 19, ziel: 70 },
  { m: "Jun", ffr: 27, ziel: 70 }, { m: "Jul", ffr: 34, ziel: 70 },
  { m: "Aug", ffr: 43, ziel: 70 }, { m: "Sep", ffr: 52, ziel: 70 },
  { m: "Okt", ffr: 59, ziel: 70 }, { m: "Nov", ffr: 64, ziel: 70 },
  { m: "Dez", ffr: 70, ziel: 70 }, { m: "Jan", ffr: 74, ziel: 70 },
  { m: "Feb", ffr: 79, ziel: 70 }, { m: "Mär", ffr: 83, ziel: 70 },
];

const volData = [
  { m: "Apr", P1: 8, P2: 14, P3: 32, P4: 61 },
  { m: "Mai", P1: 7, P2: 12, P3: 34, P4: 58 },
  { m: "Jun", P1: 6, P2: 11, P3: 29, P4: 62 },
  { m: "Jul", P1: 5, P2: 9,  P3: 27, P4: 55 },
  { m: "Aug", P1: 4, P2: 8,  P3: 25, P4: 53 },
  { m: "Sep", P1: 3, P2: 7,  P3: 22, P4: 51 },
  { m: "Okt", P1: 3, P2: 6,  P3: 20, P4: 49 },
  { m: "Nov", P1: 2, P2: 5,  P3: 18, P4: 47 },
  { m: "Dez", P1: 2, P2: 5,  P3: 17, P4: 44 },
  { m: "Jan", P1: 2, P2: 4,  P3: 16, P4: 42 },
  { m: "Feb", P1: 1, P2: 4,  P3: 15, P4: 40 },
  { m: "Mär", P1: 1, P2: 3,  P3: 14, P4: 39 },
];

const slaData = [
  { name: "P1", ist: 72, ziel: 95, vor: 65 },
  { name: "P2", ist: 81, ziel: 95, vor: 77 },
  { name: "P3", ist: 88, ziel: 90, vor: 85 },
  { name: "P4", ist: 93, ziel: 90, vor: 91 },
];

const reopenData = [
  { m: "Apr", rate: 14 }, { m: "Mai", rate: 12 }, { m: "Jun", rate: 11 },
  { m: "Jul", rate: 9 },  { m: "Aug", rate: 8 },  { m: "Sep", rate: 7 },
  { m: "Okt", rate: 6 },  { m: "Nov", rate: 5 },  { m: "Dez", rate: 5 },
  { m: "Jan", rate: 4 },  { m: "Feb", rate: 4 },  { m: "Mär", rate: 3 },
];

const KPI_COLORS = { P1: "#c0392b", P2: "#e67e22", P3: "#f1c40f", P4: "#27ae60" };

const THEME = {
  bg: "#0f1923",
  card: "#162030",
  cardBorder: "#1e3048",
  accent: "#2196f3",
  accentGlow: "#1565c0",
  text: "#e8edf2",
  muted: "#7a8fa6",
  green: "#00c896",
  red: "#ff5252",
  yellow: "#ffc107",
};


function StatCard({ label, value, sub, color, trend }) {
  return (
    <div style={{
      background: THEME.card,
      border: `1px solid ${THEME.cardBorder}`,
      borderRadius: 12,
      padding: "20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: color || THEME.accent,
        borderRadius: "12px 12px 0 0"
      }} />
      <span style={{ color: THEME.muted, fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</span>
      <span style={{ color: THEME.text, fontSize: 30, fontWeight: 800, lineHeight: 1.1 }}>{value}</span>
      <span style={{ color: trend === "good" ? THEME.green : trend === "bad" ? THEME.red : THEME.muted, fontSize: 12, fontWeight: 500 }}>{sub}</span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 4, height: 20, background: THEME.accent, borderRadius: 2 }} />
      <span style={{ color: THEME.text, fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

function ChartCard({ title, children, note }) {
  return (
    <div style={{
      background: THEME.card,
      border: `1px solid ${THEME.cardBorder}`,
      borderRadius: 12,
      padding: "20px 20px 12px",
    }}>
      <div style={{ color: THEME.text, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{title}</div>
      {note && <div style={{ color: THEME.muted, fontSize: 11, marginBottom: 14 }}>{note}</div>}
      {children}
    </div>
  );
}

const customTooltipStyle = {
  backgroundColor: "#1a2840",
  border: "1px solid #2a3f5f",
  borderRadius: 8,
  color: THEME.text,
  fontSize: 12,
};


export default function BerichtsEntwurf() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const currentMonth = "März 2025";
  const reportPeriod = "April 2024 – März 2025";

  const tabs = [
    { id: "dashboard", label: "Executive Dashboard" },
    { id: "kpis", label: "KPI-Trends" },
    { id: "sla", label: "SLA & Volumen" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: THEME.bg,
      fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
      color: THEME.text,
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1b2a 0%, #162030 100%)",
        borderBottom: `1px solid ${THEME.cardBorder}`,
        padding: "20px 32px",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <div style={{
                background: THEME.accent, color: "#fff", fontSize: 10, fontWeight: 700,
                padding: "2px 8px", borderRadius: 4, letterSpacing: "0.06em"
              }}>ITIL SERVICE OPERATION</div>
              <div style={{ color: THEME.muted, fontSize: 11 }}>Engineering-X GmbH</div>
            </div>
            <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: THEME.text, letterSpacing: "-0.02em" }}>
              Incident Management — Monatsbericht
            </h1>
            <div style={{ color: THEME.muted, fontSize: 13, marginTop: 4 }}>{currentMonth} · Berichtszeitraum: {reportPeriod}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: THEME.muted, fontSize: 11, marginBottom: 2 }}>Erstellt durch</div>
            <div style={{ color: THEME.text, fontSize: 13, fontWeight: 600 }}>Incident Manager</div>
            <div style={{ color: THEME.muted, fontSize: 11 }}>Projekt Phoenix</div>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              background: activeTab === t.id ? THEME.accent : "transparent",
              color: activeTab === t.id ? "#fff" : THEME.muted,
              border: `1px solid ${activeTab === t.id ? THEME.accent : THEME.cardBorder}`,
              borderRadius: 6, padding: "6px 16px", fontSize: 12, fontWeight: 600,
              cursor: "pointer", transition: "all 0.15s",
            }}>{t.label}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 32px", maxWidth: 1200 }}>

        {/* ── TAB 1: Executive Dashboard ─────────────────────────────────── */}
        {activeTab === "dashboard" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Alert banner */}
            <div style={{
              background: "linear-gradient(90deg, rgba(255,82,82,0.1) 0%, transparent 100%)",
              border: "1px solid rgba(255,82,82,0.3)",
              borderLeft: "4px solid #ff5252",
              borderRadius: 8, padding: "12px 16px",
              display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ fontSize: 16 }}>⚠️</span>
              <div>
                <span style={{ color: "#ff8a80", fontWeight: 600, fontSize: 13 }}>SLA-Unterschreitung P1: </span>
                <span style={{ color: THEME.muted, fontSize: 13 }}>Im aktuellen Monat liegt die SLA-Erfüllung für Priorität 1 bei 72 % (Ziel: 95 %). Eskalationsmaßnahmen wurden eingeleitet.</span>
              </div>
            </div>

            {/* KPI Cards */}
            <div>
              <SectionTitle>Aktuelle Kennzahlen — {currentMonth}</SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                <StatCard label="MTTR (Ø alle Prios)" value="4,2 Std." sub="↓ 95,8 % vs. Ausgangswert (96 Std.)" color={THEME.accent} trend="good" />
                <StatCard label="First-Fix-Rate" value="83 %" sub="↑ +71 Pkt. seit Projektstart (12 %)" color={THEME.green} trend="good" />
                <StatCard label="SLA-Erfüllung (Ø)" sub="Ziel: mind. 90 %" value="83,5 %" color={THEME.yellow} trend="bad" />
                <StatCard label="Incidents gesamt" value="57" sub="↓ −59 vs. Apr 2024 (115)" color="#9c27b0" trend="good" />
                <StatCard label="Wiederöffnungsrate" value="3,0 %" sub="Ziel: < 5 % ✓ erreicht" color={THEME.green} trend="good" />
                <StatCard label="Major Incidents (P1)" value="1" sub="↓ −7 vs. Apr 2024 (8)" color={THEME.red} trend="good" />
              </div>
            </div>

            {/* 12-month sparkline overview */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <ChartCard title="MTTR — 12-Monats-Trend" note="Entstörungszeit in Stunden (alle Prioritäten, Ø pro Monat)">
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={mttrData} margin={{ top: 4, right: 12, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                    <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: THEME.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={customTooltipStyle} formatter={(v, n) => [v + " Std.", n === "mttr" ? "MTTR" : "Ziel"]} />
                    <ReferenceLine y={4} stroke={THEME.green} strokeDasharray="4 4" label={{ value: "Ziel 4h", fill: THEME.green, fontSize: 10, position: "insideTopRight" }} />
                    <Line type="monotone" dataKey="mttr" stroke={THEME.accent} strokeWidth={2.5} dot={{ fill: THEME.accent, r: 3 }} name="mttr" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="First-Fix-Rate — 12-Monats-Trend" note="Anteil der im 1st Level gelösten Incidents (%)">
                <ResponsiveContainer width="100%" height={180}>
                  <LineChart data={ffrData} margin={{ top: 4, right: 12, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                    <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: THEME.muted, fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip contentStyle={customTooltipStyle} formatter={(v, n) => [v + " %", n === "ffr" ? "FFR" : "Ziel"]} />
                    <ReferenceLine y={70} stroke={THEME.green} strokeDasharray="4 4" label={{ value: "Ziel 70%", fill: THEME.green, fontSize: 10, position: "insideTopLeft" }} />
                    <Line type="monotone" dataKey="ffr" stroke="#00c896" strokeWidth={2.5} dot={{ fill: "#00c896", r: 3 }} name="ffr" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            {/* Management commentary */}
            <div style={{
              background: THEME.card, border: `1px solid ${THEME.cardBorder}`,
              borderRadius: 12, padding: "20px 24px",
            }}>
              <SectionTitle>Management-Kommentar</SectionTitle>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                {[
                  { icon: "📉", title: "MTTR: Deutliche Verbesserung", text: "Die durchschnittliche Entstörungszeit sank von 91 Std. (Apr) auf 4,2 Std. (Mär). Dies entspricht einer Reduktion um 95 %. Der Zielwert von 4 Std. (P1–P2) ist nahezu erreicht." },
                  { icon: "📚", title: "Knowledge Base wirkt", text: "Der Anstieg der FFR von 14 % auf 83 % belegt, dass die aufgebaute Wissensdatenbank den 1st-Level-Support deutlich entlastet. Der Zielwert von 70 % wurde in Monat 9 überschritten." },
                  { icon: "🎯", title: "SLA P1: Handlungsbedarf", text: "Die SLA-Erfüllung für P1-Incidents liegt mit 72 % deutlich unter dem Zielwert von 95 %. Eine Analyse der Eskalationspfade und Reaktionszeiten wird für den Folgemonat eingeplant." },
                ].map(({ icon, title, text }) => (
                  <div key={title} style={{ background: "#0f1923", borderRadius: 8, padding: "14px 16px" }}>
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                    <div style={{ color: THEME.text, fontWeight: 700, fontSize: 12, marginBottom: 6 }}>{title}</div>
                    <div style={{ color: THEME.muted, fontSize: 12, lineHeight: 1.6 }}>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: KPI-Trends ──────────────────────────────────────────── */}
        {activeTab === "kpis" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <ChartCard
              title="Mean Time to Repair (MTTR) — 12-Monats-Verlauf"
              note="MTTR = Summe aller Entstörungszeiten / Anzahl gelöster Incidents. Externe Wartezeiten (Status: Ausstehend extern) sind herausgerechnet."
            >
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={mttrData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                  <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} label={{ value: "Stunden", angle: -90, position: "insideLeft", fill: THEME.muted, fontSize: 11 }} />
                  <Tooltip contentStyle={customTooltipStyle} formatter={(v) => [v + " Std."]} />
                  <Legend wrapperStyle={{ color: THEME.muted, fontSize: 12 }} />
                  <ReferenceLine y={4} stroke={THEME.green} strokeDasharray="5 5" label={{ value: "P1/P2 Ziel: 4 Std.", fill: THEME.green, fontSize: 11 }} />
                  <ReferenceLine y={8} stroke={THEME.yellow} strokeDasharray="5 5" label={{ value: "P3/P4 Ziel: 8 Std.", fill: THEME.yellow, fontSize: 11 }} />
                  <Line type="monotone" dataKey="mttr" stroke={THEME.accent} strokeWidth={3} dot={{ fill: THEME.accent, r: 4 }} name="MTTR (Stunden)" />
                </LineChart>
              </ResponsiveContainer>
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#0f1923", borderRadius: 8, color: THEME.muted, fontSize: 12, lineHeight: 1.7 }}>
                <strong style={{ color: THEME.text }}>Auswertung:</strong> Die MTTR hat sich im Beobachtungszeitraum von 91 Std. auf 4,2 Std. reduziert (−95,4 %). Der Großteil der Verbesserung ist auf die höhere FFR zurückzuführen, da kürzere 1st-Level-Lösungen die Gesamtdurchschnittszeit stark senken. Der Zielwert für P1/P2 (4 Std.) wird seit Feb. 2025 annähernd erreicht.
              </div>
            </ChartCard>

            <ChartCard
              title="First-Fix-Rate (FFR) — 12-Monats-Verlauf"
              note="FFR = (Incidents gelöst im First-Level / Gesamtanzahl Incidents) × 100. Zielwert: ≥ 70 %."
            >
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={ffrData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                  <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} label={{ value: "%", angle: -90, position: "insideLeft", fill: THEME.muted, fontSize: 11 }} />
                  <Tooltip contentStyle={customTooltipStyle} formatter={(v) => [v + " %"]} />
                  <Legend wrapperStyle={{ color: THEME.muted, fontSize: 12 }} />
                  <ReferenceLine y={70} stroke={THEME.green} strokeDasharray="5 5" label={{ value: "Ziel: 70 %", fill: THEME.green, fontSize: 11 }} />
                  <Line type="monotone" dataKey="ffr" stroke="#00c896" strokeWidth={3} dot={{ fill: "#00c896", r: 4 }} name="First-Fix-Rate (%)" />
                </LineChart>
              </ResponsiveContainer>
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#0f1923", borderRadius: 8, color: THEME.muted, fontSize: 12, lineHeight: 1.7 }}>
                <strong style={{ color: THEME.text }}>Auswertung:</strong> Die FFR stieg von 14 % (Apr) auf 83 % (Mär). Der Zielwert von 70 % wurde im Dezember erstmals erreicht und danach kontinuierlich übertroffen. Treiber ist der systematische Aufbau der Knowledge Base (KEDB), die dem Service Desk strukturierte Lösungsanleitungen bereitstellt.
              </div>
            </ChartCard>

            <ChartCard
              title="Wiederöffnungsrate — 12-Monats-Verlauf"
              note="Anteil der Incidents, die nach Schließung erneut geöffnet wurden. Zielwert: < 5 %."
            >
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={reopenData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                  <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 20]} />
                  <Tooltip contentStyle={customTooltipStyle} formatter={(v) => [v + " %"]} />
                  <ReferenceLine y={5} stroke={THEME.green} strokeDasharray="5 5" label={{ value: "Ziel: 5 %", fill: THEME.green, fontSize: 11 }} />
                  <Bar dataKey="rate" name="Wiederöffnungsrate (%)" radius={[4, 4, 0, 0]}>
                    {reopenData.map((entry, i) => (
                      <Cell key={i} fill={entry.rate > 5 ? THEME.red : THEME.green} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        )}

        {/* ── TAB 3: SLA & Volumen ───────────────────────────────────────── */}
        {activeTab === "sla" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <ChartCard
              title="Incident-Volumen nach Priorität — 12-Monats-Verlauf"
              note="Gesamtanzahl Incidents pro Monat, segmentiert nach Prioritätsstufe P1–P4."
            >
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={volData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e3048" />
                  <XAxis dataKey="m" tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: THEME.muted, fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={customTooltipStyle} />
                  <Legend wrapperStyle={{ color: THEME.muted, fontSize: 12 }} />
                  <Bar dataKey="P4" stackId="a" fill={KPI_COLORS.P4} name="P4 (niedrig)" radius={[0,0,0,0]} />
                  <Bar dataKey="P3" stackId="a" fill={KPI_COLORS.P3} name="P3 (mittel)" />
                  <Bar dataKey="P2" stackId="a" fill={KPI_COLORS.P2} name="P2 (hoch)" />
                  <Bar dataKey="P1" stackId="a" fill={KPI_COLORS.P1} name="P1 (kritisch)" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#0f1923", borderRadius: 8, color: THEME.muted, fontSize: 12, lineHeight: 1.7 }}>
                <strong style={{ color: THEME.text }}>Auswertung:</strong> Das Gesamtvolumen sank von 115 Incidents (Apr) auf 57 (Mär), was einem Rückgang von 50 % entspricht. Der Anteil kritischer P1-Incidents reduzierte sich von 8 auf 1 pro Monat. Ein stabiles P4-Volumen deutet auf persistente, niedrigpriore Standardstörungen hin, die im Problem Management analysiert werden sollten.
              </div>
            </ChartCard>

            {/* SLA Bullet Charts */}
            <ChartCard
              title="SLA-Erfüllungsquote nach Priorität — Aktueller Monat"
              note="SLA-Erfüllungsquote = (Incidents innerhalb SLA-Zeit / Gesamtanzahl) × 100. Vergleich: Istwert, Zielwert, Vormonat."
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "8px 0" }}>
                {slaData.map(({ name, ist, ziel, vor }) => {
                  const color = name === "P1" ? KPI_COLORS.P1 : name === "P2" ? KPI_COLORS.P2 : name === "P3" ? KPI_COLORS.P3 : KPI_COLORS.P4;
                  const ok = ist >= ziel;
                  return (
                    <div key={name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
                          <span style={{ color: THEME.text, fontSize: 13, fontWeight: 600 }}>{name} — SLA-Erfüllung</span>
                        </div>
                        <div style={{ display: "flex", gap: 16, fontSize: 12 }}>
                          <span style={{ color: THEME.muted }}>Vormonat: <strong style={{ color: THEME.text }}>{vor} %</strong></span>
                          <span style={{ color: THEME.muted }}>Ziel: <strong style={{ color: THEME.green }}>{ziel} %</strong></span>
                          <span style={{ color: ok ? THEME.green : THEME.red, fontWeight: 700 }}>Ist: {ist} % {ok ? "✓" : "✗"}</span>
                        </div>
                      </div>
                      <div style={{ position: "relative", height: 20, background: "#0f1923", borderRadius: 4, overflow: "hidden" }}>
                        {/* background range */}
                        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100%", background: "rgba(255,255,255,0.03)" }} />
                        {/* ziel marker */}
                        <div style={{ position: "absolute", left: `${ziel}%`, top: 0, bottom: 0, width: 2, background: THEME.green, zIndex: 2 }} />
                        {/* vormonat */}
                        <div style={{ position: "absolute", left: 0, top: 4, bottom: 4, width: `${vor}%`, background: "rgba(255,255,255,0.12)", borderRadius: 3 }} />
                        {/* ist */}
                        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${ist}%`, background: color, borderRadius: 4, opacity: 0.9, transition: "width 0.5s ease" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: 16, padding: "10px 14px", background: "#0f1923", borderRadius: 8, color: THEME.muted, fontSize: 12, lineHeight: 1.7 }}>
                <strong style={{ color: THEME.text }}>Auswertung:</strong> P3 und P4 erfüllen den SLA-Zielwert. Handlungsbedarf besteht bei P1 (72 % vs. Ziel 95 %) und P2 (81 % vs. Ziel 95 %). Als Ursache werden die noch unzureichenden Eskalationsreaktionszeiten im First-Level-Support identifiziert. Gegenmaßnahmen: Einführung automatisierter SLA-Warnungen 30 Minuten vor Fristablauf.
              </div>
            </ChartCard>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 32, paddingTop: 16, borderTop: `1px solid ${THEME.cardBorder}`, display: "flex", justifyContent: "space-between", color: THEME.muted, fontSize: 11 }}>
          <span>Projekt Phoenix · Engineering-X GmbH · IT-Abteilung</span>
          <span>Datenquelle: Ticketsystem (automatisiert) · Nächster Bericht: April 2025</span>
        </div>
      </div>
    </div>
  );
}