import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, ZoomIn, ZoomOut, Sparkles } from "lucide-react";

// Define the Color Swatches based on the website's palette
const SWATCHES = {
  sand: { name: "Sand", hex: "#ebcc89" },
  burgundy: { name: "Burgundy", hex: "#6b1d2f" },
  black: { name: "Black", hex: "#121212" },
  charcoal: { name: "Charcoal", hex: "#2a2a2a" },
  cream: { name: "Cream", hex: "#edebe6" },
  ember: { name: "Ember", hex: "#a63a26" },
  gold: { name: "Gold", hex: "#d4b960" },
  rose: { name: "Rose Gold", hex: "#d9a0a0" },
};

const PRESETS = [
  {
    id: "maroon-split",
    name: "Maroon Split",
    description: "Burgundy and sand color-block split with gold piping.",
    colors: {
      top: SWATCHES.sand.hex,
      bottom: SWATCHES.burgundy.hex,
      sleeveTop: SWATCHES.sand.hex,
      sleeveBottom: SWATCHES.burgundy.hex,
      collar: SWATCHES.cream.hex,
      piping: SWATCHES.gold.hex,
    },
  },
  {
    id: "ember-diagonal",
    name: "Ember Diagonal",
    description: "Deep charcoal sweat split by warm ember piping.",
    colors: {
      top: SWATCHES.black.hex,
      bottom: SWATCHES.charcoal.hex,
      sleeveTop: SWATCHES.black.hex,
      sleeveBottom: SWATCHES.charcoal.hex,
      collar: SWATCHES.black.hex,
      piping: SWATCHES.rose.hex,
    },
  },
  {
    id: "sunset-cream",
    name: "Sunset Cream",
    description: "Rich vermillion ember coupled with soft cream cuffs.",
    colors: {
      top: SWATCHES.ember.hex,
      bottom: SWATCHES.cream.hex,
      sleeveTop: SWATCHES.ember.hex,
      sleeveBottom: SWATCHES.cream.hex,
      collar: SWATCHES.ember.hex,
      piping: SWATCHES.gold.hex,
    },
  },
];

export default function SweatshirtCustomizer() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState("maroon-split");
  const [colors, setColors] = useState(PRESETS[0].colors);
  
  // Three.js object references for dynamic color updates
  const torsoTopMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const torsoBottomMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const sleeveTopMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const sleeveBottomMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const collarMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const pipingMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const sweatshirtGroupRef = useRef<THREE.Group | null>(null);

  const handlePresetSelect = (presetId: string) => {
    setActivePreset(presetId);
    const preset = PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setColors(preset.colors);
    }
  };

  const handleColorChange = (key: keyof typeof colors, hex: string) => {
    setActivePreset("custom");
    setColors((prev) => ({ ...prev, [key]: hex }));
  };

  // Update materials when state changes
  useEffect(() => {
    if (torsoTopMatRef.current) torsoTopMatRef.current.color.set(colors.top);
    if (torsoBottomMatRef.current) torsoBottomMatRef.current.color.set(colors.bottom);
    if (sleeveTopMatRef.current) sleeveTopMatRef.current.color.set(colors.sleeveTop);
    if (sleeveBottomMatRef.current) sleeveBottomMatRef.current.color.set(colors.sleeveBottom);
    if (collarMatRef.current) collarMatRef.current.color.set(colors.collar);
    if (pipingMatRef.current) {
      pipingMatRef.current.color.set(colors.piping);
      // Give piping metallic thread look
      pipingMatRef.current.metalness = 0.85;
      pipingMatRef.current.roughness = 0.15;
    }
  }, [colors]);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = null; // transparent background so it flows into website's bg

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.3, 5.5);

    // 2. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.7);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffecd2, 0.3); // warm light from side
    fillLight.position.set(-3, 1, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xbb7e44, 0.55); // amber backlight
    rimLight.position.set(0, 2, -4);
    scene.add(rimLight);

    // 4. Procedural Weave Fabric Texture
    const createFabricTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.fillStyle = "#808080";
      ctx.fillRect(0, 0, 128, 128);

      const imgData = ctx.getImageData(0, 0, 128, 128);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % 128;
        const y = Math.floor(i / 4 / 128);

        // Standard weave pattern with tiny noise
        const weaveX = Math.sin(x * 1.6) * 5;
        const weaveY = Math.sin(y * 1.6) * 5;
        const noise = (Math.random() - 0.5) * 8;

        const val = 128 + weaveX + weaveY + noise;
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
      }
      ctx.putImageData(imgData, 0, 0);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(12, 15);
      return texture;
    };

    const fabricBumpMap = createFabricTexture();

    // 5. Materials definition
    const createFabricMat = (hexColor: string) => {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(hexColor),
        roughness: 0.85,
        metalness: 0.05,
        bumpMap: fabricBumpMap || undefined,
        bumpScale: 0.008,
      });
    };

    // Instantiate Materials
    const torsoTopMat = createFabricMat(colors.top);
    const torsoBottomMat = createFabricMat(colors.bottom);
    const sleeveTopMat = createFabricMat(colors.sleeveTop);
    const sleeveBottomMat = createFabricMat(colors.sleeveBottom);
    const collarMat = createFabricMat(colors.collar);
    const pipingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(colors.piping),
      roughness: 0.15,
      metalness: 0.85,
    });

    // Save references to update dynamically
    torsoTopMatRef.current = torsoTopMat;
    torsoBottomMatRef.current = torsoBottomMat;
    sleeveTopMatRef.current = sleeveTopMat;
    sleeveBottomMatRef.current = sleeveBottomMat;
    collarMatRef.current = collarMat;
    pipingMatRef.current = pipingMat;

    // 6. Modeling the Sweatshirt
    const sweatshirtGroup = new THREE.Group();
    sweatshirtGroupRef.current = sweatshirtGroup;

    // A. Torso Segment Upper (tapered cylinder)
    const upperTorsoGeom = new THREE.CylinderGeometry(0.72, 0.76, 0.65, 32, 1, true);
    const upperTorso = new THREE.Mesh(upperTorsoGeom, torsoTopMat);
    upperTorso.position.y = 0.325;
    sweatshirtGroup.add(upperTorso);

    // B. Torso Segment Lower
    const lowerTorsoGeom = new THREE.CylinderGeometry(0.76, 0.72, 0.8, 32, 1, true);
    const lowerTorso = new THREE.Mesh(lowerTorsoGeom, torsoBottomMat);
    lowerTorso.position.y = -0.4;
    sweatshirtGroup.add(lowerTorso);

    // C. Gold Piping Torso Seam (Torus)
    const torsoSeamGeom = new THREE.TorusGeometry(0.76, 0.015, 8, 32);
    torsoSeamGeom.rotateX(Math.PI / 2);
    const torsoSeam = new THREE.Mesh(torsoSeamGeom, pipingMat);
    torsoSeam.position.y = 0.0;
    sweatshirtGroup.add(torsoSeam);

    // D. Bottom Hem (Ribbing)
    const hemGeom = new THREE.CylinderGeometry(0.72, 0.68, 0.15, 32);
    const hem = new THREE.Mesh(hemGeom, torsoBottomMat);
    hem.position.y = -0.875;
    sweatshirtGroup.add(hem);

    // E. Neck Collar Ribbing
    const collarGeom = new THREE.TorusGeometry(0.38, 0.05, 12, 32);
    collarGeom.rotateX(Math.PI / 2);
    const collar = new THREE.Mesh(collarGeom, collarMat);
    collar.position.y = 0.65;
    sweatshirtGroup.add(collar);

    // F. Sleeves Assembly helper function
    const buildSleeve = (isLeft: boolean) => {
      const sideSign = isLeft ? -1 : 1;
      const sleeveGroup = new THREE.Group();
      sleeveGroup.position.set(sideSign * 0.65, 0.35, 0);

      // Upper sleeve
      const upperSleeveGeom = new THREE.CylinderGeometry(0.28, 0.23, 0.6, 16, 1, true);
      const upperSleeve = new THREE.Mesh(upperSleeveGeom, sleeveTopMat);
      upperSleeve.position.y = -0.3;
      sleeveGroup.add(upperSleeve);

      // Piping seam
      const sleeveSeamGeom = new THREE.TorusGeometry(0.23, 0.012, 8, 16);
      sleeveSeamGeom.rotateX(Math.PI / 2);
      const sleeveSeam = new THREE.Mesh(sleeveSeamGeom, pipingMat);
      sleeveSeam.position.y = -0.6;
      sleeveGroup.add(sleeveSeam);

      // Lower sleeve
      const lowerSleeveGeom = new THREE.CylinderGeometry(0.23, 0.18, 0.5, 16, 1, true);
      const lowerSleeve = new THREE.Mesh(lowerSleeveGeom, sleeveBottomMat);
      lowerSleeve.position.y = -0.85;
      sleeveGroup.add(lowerSleeve);

      // Sleeve Cuff (ribbing)
      const cuffGeom = new THREE.CylinderGeometry(0.18, 0.16, 0.12, 16);
      const cuff = new THREE.Mesh(cuffGeom, sleeveBottomMat);
      cuff.position.y = -1.16;
      sleeveGroup.add(cuff);

      // Angle sleeves slightly down and out
      sleeveGroup.rotation.z = sideSign * -0.65;
      sleeveGroup.rotation.y = sideSign * 0.15; // slightly forward

      return sleeveGroup;
    };

    const leftSleeve = buildSleeve(true);
    const rightSleeve = buildSleeve(false);
    sweatshirtGroup.add(leftSleeve);
    sweatshirtGroup.add(rightSleeve);

    scene.add(sweatshirtGroup);

    // 7. Interactive dragging rotation controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      if (sweatshirtGroup) {
        sweatshirtGroup.rotation.y += deltaMove.x * 0.007;
        sweatshirtGroup.rotation.x += deltaMove.y * 0.007;
        
        // Clamp vertical rotation
        sweatshirtGroup.rotation.x = Math.max(-0.6, Math.min(0.6, sweatshirtGroup.rotation.x));
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y,
      };

      if (sweatshirtGroup) {
        sweatshirtGroup.rotation.y += deltaMove.x * 0.009;
        sweatshirtGroup.rotation.x += deltaMove.y * 0.009;
        sweatshirtGroup.rotation.x = Math.max(-0.6, Math.min(0.6, sweatshirtGroup.rotation.x));
      }

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const container = mountRef.current;
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleMouseUp);

    // 8. Animation/Render Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto-rotation when not dragging
      if (!isDragging && sweatshirtGroup) {
        sweatshirtGroup.rotation.y += 0.004;
        
        // Gentle bobbing effect
        sweatshirtGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.04;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleMouseUp);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  // UI helpers for camera zoom-in/out
  const handleZoom = (amount: number) => {
    if (sweatshirtGroupRef.current) {
      // Zoom via scaling the mesh group
      const scale = sweatshirtGroupRef.current.scale;
      const newScale = Math.max(0.6, Math.min(1.5, scale.x + amount));
      sweatshirtGroupRef.current.scale.set(newScale, newScale, newScale);
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-12 items-center bg-ink/40 border border-gold/10 p-6 rounded-2xl backdrop-blur-md">
      {/* 3D Canvas Viewport */}
      <div className="md:col-span-7 relative group aspect-square md:aspect-auto md:h-[450px] w-full flex items-center justify-center rounded-xl bg-ink/75 border border-gold/5 overflow-hidden">
        {/* Help tooltip */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] tracking-widest text-gold-soft/50 uppercase select-none pointer-events-none">
          <RotateCw className="h-3 w-3 animate-spin-slow" />
          Drag to rotate 3D view
        </div>

        {/* 3D Container */}
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Control overlay */}
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <button
            onClick={() => handleZoom(0.1)}
            className="p-2 rounded-full border border-gold/20 bg-ink/65 hover:bg-gold/10 text-gold-soft hover:text-gold transition-colors backdrop-blur-sm"
            title="Zoom In"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleZoom(-0.1)}
            className="p-2 rounded-full border border-gold/20 bg-ink/65 hover:bg-gold/10 text-gold-soft hover:text-gold transition-colors backdrop-blur-sm"
            title="Zoom Out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Control Panel / Customizer */}
      <div className="md:col-span-5 flex flex-col gap-6">
        <div>
          <span className="text-[10px] tracking-[0.4em] text-gold">— 3D INTERACTIVE STUDIO</span>
          <h3 className="brush mt-2 text-4xl text-bone">Tailor Your Sweatshirt.</h3>
          <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
            Customize our signature color-block sweatshirt in 3D. Switch between our classic editions or blend your own colors.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="space-y-3">
          <label className="text-[9px] tracking-[0.35em] text-gold-deep font-semibold uppercase block">
            Select Edition Presets
          </label>
          <div className="flex flex-col gap-2">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePresetSelect(p.id)}
                className={`flex flex-col items-start gap-1 p-3.5 border rounded-xl transition-all text-left ${
                  activePreset === p.id
                    ? "bg-gold/10 border-gold text-gold"
                    : "border-gold/10 bg-ink/20 hover:border-gold/30 text-bone/70 hover:text-bone"
                }`}
              >
                <span className="font-serif text-base font-medium tracking-wide flex items-center gap-1.5">
                  {p.name}
                  {activePreset === p.id && <Sparkles className="h-3 w-3 text-gold" />}
                </span>
                <span className="text-[11px] opacity-70 leading-normal">{p.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Individual Color Swatches Customization */}
        <div className="space-y-4 pt-2 border-t border-gold/10">
          <label className="text-[9px] tracking-[0.35em] text-gold-deep font-semibold uppercase block">
            Panel Customizer
          </label>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Top Torso Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Upper Torso</span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(SWATCHES).slice(0, 6).map((s) => (
                  <button
                    key={s.hex}
                    onClick={() => handleColorChange("top", s.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.top === s.hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: s.hex }}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Torso Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Lower Torso</span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(SWATCHES).slice(0, 6).map((s) => (
                  <button
                    key={s.hex}
                    onClick={() => handleColorChange("bottom", s.hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.bottom === s.hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: s.hex }}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            {/* Sleeves Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Upper Sleeves</span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(SWATCHES).slice(0, 6).map((s) => (
                  <button
                    key={s.hex}
                    onClick={() => {
                      handleColorChange("sleeveTop", s.hex);
                    }}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.sleeveTop === s.hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: s.hex }}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            {/* Lower Sleeves Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Lower Sleeves</span>
              <div className="flex flex-wrap gap-1.5">
                {Object.values(SWATCHES).slice(0, 6).map((s) => (
                  <button
                    key={s.hex}
                    onClick={() => {
                      handleColorChange("sleeveBottom", s.hex);
                    }}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.sleeveBottom === s.hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: s.hex }}
                    title={s.name}
                  />
                ))}
              </div>
            </div>

            {/* Piping / Thread Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Gold Seam Piping</span>
              <div className="flex flex-wrap gap-1.5">
                {[SWATCHES.gold.hex, SWATCHES.rose.hex, SWATCHES.ember.hex].map((hex) => (
                  <button
                    key={hex}
                    onClick={() => handleColorChange("piping", hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.piping === hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: hex }}
                    title={hex === SWATCHES.gold.hex ? "Gold Thread" : hex === SWATCHES.rose.hex ? "Rose Thread" : "Ember Thread"}
                  />
                ))}
              </div>
            </div>

            {/* Collar Color */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-wider text-bone/75 font-medium block">Collar Ribbing</span>
              <div className="flex flex-wrap gap-1.5">
                {[SWATCHES.cream.hex, SWATCHES.sand.hex, SWATCHES.black.hex, SWATCHES.ember.hex].map((hex) => (
                  <button
                    key={hex}
                    onClick={() => handleColorChange("collar", hex)}
                    className={`w-6 h-6 rounded-full border transition-transform ${
                      colors.collar === hex ? "scale-110 border-gold" : "border-gold/20"
                    }`}
                    style={{ backgroundColor: hex }}
                    title={hex === SWATCHES.cream.hex ? "Bone Collar" : "Collar Color"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Small badge to denote premium customizer */}
        <div className="flex items-center gap-2.5 border border-gold/15 bg-gold/5 px-4 py-2.5 rounded-lg text-xs leading-normal text-gold-soft">
          <span className="font-serif italic font-medium">✦ 3D interactive model custom-rendered in real-time.</span>
        </div>
      </div>
    </div>
  );
}
