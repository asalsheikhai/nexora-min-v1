const arUrl = process.env.NEXT_PUBLIC_AR_URL || "/ar";
const wa = process.env.NEXT_PUBLIC_WHATSAPP || "+989120000000";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="grid">
          <h1 style={{fontSize:'28px',margin:0}}>NEXORA — AR Showroom</h1>
          <p className="small">Launch fast. ENV-driven links for AR + WhatsApp.</p>
          <div className="grid" style={{gridAutoFlow:'column', gridAutoColumns:'max-content'}}>
            <a className="btn" href={arUrl}>🚀 Launch AR</a>
            <a className="btn" href={`https://wa.me/${wa.replace('+','')}`} target="_blank">💬 WhatsApp</a>
          </div>
          <div className="card">
            <div className="small">Env preview</div>
            <div style={{fontSize:'12px',wordBreak:'break-all'}}>
              NEXT_PUBLIC_AR_URL: <b>{arUrl}</b><br/>
              NEXT_PUBLIC_WHATSAPP: <b>{wa}</b>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{height:'260px',width:'100%',display:'grid',placeItems:'center',opacity:.7}}>Hero Placeholder</div>
        </div>
      </section>
    </main>
  );
}
