
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