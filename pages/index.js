export const config = { runtime: "edge" };
export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Snowhitextiles</h1>
      <p>Select your language:</p>

      <a href="/en">English</a><br/>
      <a href="/de">Deutsch</a><br/>
      <a href="/fr">Français</a><br/>
      <a href="/es">Español</a><br/>
      <a href="/it">Italiano</a><br/>
      <a href="/pl">Polski</a>
    </div>
  );
}
