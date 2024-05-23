import { useRef, useEffect, memo } from 'react';
import * as THREE from 'three';

const AiVisualizer: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current!;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setClearColor(0x000000, 0); // Set clear color to transparent
        mount.appendChild(renderer.domElement);

        // Add a basic point light
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(5, 5, 5);
        scene.add(light);

        // Create neural network nodes
        const nodes: THREE.Mesh[] = [];
        const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
        const nodeGeometry = new THREE.SphereGeometry(0.1, 32, 32);

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const node = new THREE.Mesh(nodeGeometry, material);
                node.position.set(i - 2, j - 2, 0);
                nodes.push(node);
                scene.add(node);
            }
        }

        // Create connections between nodes
        const connectionMaterial = new THREE.LineBasicMaterial({ color: "#f0f0f0" });
        const connections: THREE.Line[] = [];

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    nodes[i].position,
                    nodes[j].position,
                ]);
                const line = new THREE.Line(geometry, connectionMaterial);
                connections.push(line);
                scene.add(line);
            }
        }

        camera.position.z = 5;

        let time = 0;

        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.01;

            // Animate nodes
            nodes.forEach((node, idx) => {
                node.rotation.x += 0.01;
                node.rotation.y += 0.01;
                node.position.z = Math.sin(time + idx) * 0.5;
            });

            // Rotate the entire scene
            scene.rotation.y = Math.sin(time * 0.5) * 0.5;
            scene.rotation.x = Math.cos(time * 0.3) * 0.1;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className='p-0 md:h-[600px] h-[400px] ' style={{ width: '100%', backgroundColor: 'transparent' }} />;
};

export default   memo(AiVisualizer);
