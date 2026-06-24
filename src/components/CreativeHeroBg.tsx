import { useEffect, useRef } from "react";
import logoImg from "@/assets/logo.svg";
import piece1 from "@/assets/design-green.jpg";
import piece2 from "@/assets/design-burgundy.jpg";
import piece3 from "@/assets/design-yellow.jpg";

export default function CreativeHeroBg() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let renderer: any = null;
    let scene: any = null;
    let animationFrameId: number;
    let handleResize: () => void;
    let handleMouseMove: (e: MouseEvent) => void;

    import("three").then((THREE) => {
      if (!active || !mountRef.current) return;

      try {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // 1. Clean Cinematic Scene
        scene = new THREE.Scene();
        scene.background = null;

        // Camera
        const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
        camera.position.set(0, 0, 10);

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(w, h);
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.pointerEvents = "none";
        
        mountRef.current.appendChild(renderer.domElement);

        // 2. High-end Cinematic Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        scene.add(ambientLight);

        // Soft white backfill
        const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
        backLight.position.set(0, 5, -5);
        scene.add(backLight);

        // Deep Gold Spotlight
        const goldLight = new THREE.PointLight(0xd4b960, 4, 20);
        goldLight.position.set(-5, 3, 5);
        scene.add(goldLight);

        // Subtle Ember Spotlight
        const emberLight = new THREE.PointLight(0xa63a26, 3, 20);
        emberLight.position.set(5, -3, 5);
        scene.add(emberLight);

        // 3. Floating Glass Cards & Logos
        const floaters: any[] = [];
        const textureLoader = new THREE.TextureLoader();
        
        const logoTex = textureLoader.load(logoImg);
        const p1Tex = textureLoader.load(piece1);
        const p2Tex = textureLoader.load(piece2);
        const p3Tex = textureLoader.load(piece3);

        const addFloater = (tex: any, isLogo: boolean, zOffset: number) => {
          const aspect = isLogo ? 1 : 0.75; 
          // Huge scale for the logo to make it premium and immersive
          const scale = isLogo ? 14 : 1.8;
          const geo = new THREE.PlaneGeometry(scale, scale / aspect);
          
          // Premium Glass/Metallic Material
          const mat = new THREE.MeshStandardMaterial({ 
            map: tex, 
            transparent: true, 
            opacity: isLogo ? 0.95 : 0.6,
            blending: THREE.NormalBlending,
            side: THREE.DoubleSide,
            roughness: 0.1,
            metalness: 0.8,
            envMapIntensity: 1.0,
            depthWrite: false
          });
          const mesh = new THREE.Mesh(geo, mat);
          
          if (isLogo) {
            // Center the massive logo, push it deep into the background
            mesh.position.set(0, 0, zOffset);
            mesh.rotation.set(0, 0, 0);
          } else {
            // Soft distribution for costumes
            mesh.position.set(
              (Math.random() - 0.5) * 16,
              (Math.random() - 0.5) * 12,
              zOffset + (Math.random() - 0.5) * 4
            );
            mesh.rotation.set(
              (Math.random() - 0.5) * 0.4,
              (Math.random() - 0.5) * 0.4,
              (Math.random() - 0.5) * 0.1
            );
          }
          
          scene.add(mesh);
          floaters.push({
            mesh,
            isLogo,
            baseY: mesh.position.y,
            timeOffset: Math.random() * Math.PI * 2,
            rotSpeedX: isLogo ? 0 : (Math.random() - 0.5) * 0.001,
            rotSpeedY: isLogo ? 0 : (Math.random() - 0.5) * 0.002,
            rotSpeedZ: isLogo ? 0 : (Math.random() - 0.5) * 0.0005,
            moveSpeedY: isLogo ? 0 : Math.random() * 0.002 + 0.001,
            moveSpeedX: isLogo ? 0 : (Math.random() - 0.5) * 0.001
          });
        };

        // One massive, elegant logo spinning gently in the deep background
        addFloater(logoTex, true, -10);
        
        // Sparse costume placement
        addFloater(p1Tex, false, -4);
        addFloater(p2Tex, false, -6);
        addFloater(p3Tex, false, -3);

        // 4. Subtle Floating Dust/Stars (Very Minimal)
        const particleCount = 150;
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 20;
          positions[i + 1] = (Math.random() - 0.5) * 15;
          positions[i + 2] = (Math.random() - 0.5) * 10;

          velocities[i] = (Math.random() - 0.5) * 0.001;
          velocities[i + 1] = Math.random() * 0.002 + 0.001;
          velocities[i + 2] = (Math.random() - 0.5) * 0.001;
        }

        particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
          size: 0.05,
          color: 0xd4b960,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });

        const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particleSystem);

        // 5. Smooth Parallax Camera
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        handleMouseMove = (e: MouseEvent) => {
          targetX = (e.clientX / window.innerWidth - 0.5) * 2.5;
          targetY = (e.clientY / window.innerHeight - 0.5) * 2.5;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // 6. Resize Handler
        handleResize = () => {
          if (!mountRef.current) return;
          const wVal = window.innerWidth;
          const hVal = window.innerHeight;
          camera.aspect = wVal / hVal;
          camera.updateProjectionMatrix();
          renderer.setSize(wVal, hVal);
        };
        window.addEventListener("resize", handleResize);

        // 7. Animation loop
        const startTime = performance.now();

        const animate = () => {
          if (!active) return;
          animationFrameId = requestAnimationFrame(animate);
          const elapsedTime = (performance.now() - startTime) * 0.001;

          // Cinematic camera smoothing
          currentX += (targetX - currentX) * 0.015;
          currentY += (targetY - currentY) * 0.015;

          camera.position.x = currentX;
          camera.position.y = -currentY;
          camera.lookAt(0, 0, 0);

          // Moving Lights for dynamic reflections
          goldLight.position.x = Math.sin(elapsedTime * 0.2) * 6;
          goldLight.position.z = Math.cos(elapsedTime * 0.3) * 5 + 5;

          emberLight.position.x = Math.cos(elapsedTime * 0.25) * 6;
          emberLight.position.y = Math.sin(elapsedTime * 0.2) * 5;

          // Animate floating assets
          floaters.forEach(floater => {
            floater.mesh.rotation.x += floater.rotSpeedX;
            floater.mesh.rotation.y += floater.rotSpeedY;
            floater.mesh.rotation.z += floater.rotSpeedZ;
            
            if (floater.isLogo) {
              // Gentle hover and scale pulsing for the massive logo
              floater.mesh.position.y = floater.baseY + Math.sin(elapsedTime * 0.5 + floater.timeOffset) * 0.4;
              const scale = 1 + Math.sin(elapsedTime * 0.3 + floater.timeOffset) * 0.05;
              floater.mesh.scale.set(scale, scale, scale);
            } else {
              floater.mesh.position.y += floater.moveSpeedY;
              floater.mesh.position.x += floater.moveSpeedX;
              
              if (floater.mesh.position.y > 8) {
                floater.mesh.position.y = -8;
                floater.mesh.position.x = (Math.random() - 0.5) * 16;
              }
            }
          });

          // Drift particles
          const positionsAttr = particleGeometry.attributes.position;
          const positionsArray = positionsAttr.array as Float32Array;

          for (let i = 0; i < particleCount * 3; i += 3) {
            positionsArray[i] += velocities[i];
            positionsArray[i + 1] += velocities[i + 1];
            positionsArray[i + 2] += velocities[i + 2];

            if (positionsArray[i + 1] > 7.5) {
              positionsArray[i + 1] = -7.5;
              positionsArray[i] = (Math.random() - 0.5) * 20;
            }
          }
          positionsAttr.needsUpdate = true;

          renderer.render(scene, camera);
        };
        animate();
      } catch (error) {
        console.error("Three.js WebGL initialization failed:", error);
      }
    });

    return () => {
      active = false;
      if (handleMouseMove) window.removeEventListener("mousemove", handleMouseMove);
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      if (renderer) {
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      if (scene) {
        scene.clear();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* 3D WebGL Canvas mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none select-none mix-blend-screen opacity-90" />
      
      {/* Cinematic Edge Shadows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, transparent 30%, rgba(5,5,5,0.85) 100%)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/90 pointer-events-none" />
    </div>
  );
}
