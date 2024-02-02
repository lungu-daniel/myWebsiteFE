import React, { useEffect, useRef } from 'react';
import '../style.css';

const Matrix = () => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        const columns = 200;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:",<.>/?`~ ' +
            'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ' +
            'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω' +
            '你好我是谷歌的助手' +
            '中文是一种美丽的语言' +
            '汉字有着悠久的历史' +
            '学习新语言是一种挑战' +
            '祝你学有所成' +
            'こんにちは私はアシスタントです' +
            '日本語は美しい言語です' +
            '新しい言語を学ぶことは挑戦です' +
            '頑張ってください' +
            '안녕하세요 나는 어시스턴트입니다' +
            '한국어는 아름다운 언어입니다' +
            '새로운 언어를 배우는 것은 도전입니다' +
            '힘내세요';


        const charactersArray = characters.split('');
        const fontSize = 12;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.font = `${fontSize}px monospace`;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height);
        }

        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.075)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.textBaseline = 'top';

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
            setTimeout(() => requestAnimationFrame(animate), 70);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animate);
        };
    }, []);

    return <canvas ref={canvasRef} className="matrix-canvas" />;
};

export default Matrix;
