import Script from "next/script";
export const dynamic = "force-static";
export default function ARPage() {
  const glb = "https://modelviewer.dev/shared-assets/models/Astronaut.glb";
  const usdz = "https://modelviewer.dev/shared-assets/models/Astronaut.usdz";
  return (
    <main className="container">
      <h1 style={{fontSize:'22px'}}>Quick AR Preview</h1>
      <p className="small">Tap the AR button. iOS uses Quick Look; Android uses Scene Viewer/WebXR.</p>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      {/* @ts-ignore */}
      <model-viewer
        src={glb}
        ios-src={usdz}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", maxWidth: "520px", height: "70vh", background: "#111", borderRadius: "16px", border: "1px solid #222" }}
        exposure="0.9"
        shadow-intensity="1"
        alt="NEXORA AR demo"
      />
      <p className="small" style={{marginTop:8}}>Later, replace GLB/USDZ URLs with your own model files.</p>
    </main>
  );
}
