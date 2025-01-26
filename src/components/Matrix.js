import React, { useEffect, useRef } from "react";

const styles = {
    canvas: {
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: -1,
        filter: "brightness(1)",
        backgroundColor: "#000000",
    },
};

const Matrix = () => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:<.>/?`~ " +
            "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ" +
            "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω" +
            "你好我是谷歌的助手" +
            "こんにちは私はアシスタントです" +
            "안녕하세요 나는 어시스턴트입니다";

        const charactersArray = characters.split("");
        const fontSize = 12;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.font = `${fontSize}px monospace`;
            ctx.fillStyle = "black";

            drops.length = Math.floor(canvas.width / fontSize);
            for (let i = 0; i < drops.length; i++) {
                drops[i] = Math.floor(Math.random() * canvas.height);
            }
        };

        const drops = [];
        updateCanvasSize();

        const drawMatrix = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.075)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.textBaseline = "top";

            for (let i = 0; i < drops.length; i++) {
                const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const animate = () => {
            drawMatrix();
            animationFrameRef.current = setTimeout(() => requestAnimationFrame(animate), 50);
        };

        animate();

        window.addEventListener("resize", updateCanvasSize);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            window.removeEventListener("resize", updateCanvasSize);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} style={styles.canvas} />
        </div>
    );
};

export default Matrix;