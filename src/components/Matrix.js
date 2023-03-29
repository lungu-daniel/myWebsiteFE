import './matrix.css';
import React, { useState, useEffect } from "react";

const Matrix = () => {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // Create an array of columns with random characters
        const newColumns = [];
        for (let i = 0; i < window.innerWidth / 10; i++) {
            newColumns.push({
                letters: [],
                speed: Math.floor(Math.random() * 10) + 1
            });
        }
        setColumns(newColumns);

        // Update the columns every 100 milliseconds
        let j = 0;
        let timeout = 0.01;
        const intervalId = setInterval(() => {
            j > 300 ? timeout = 100 : j++;
            setColumns(prevColumns => {
                console.log(j);
                const newColumns = [...prevColumns];
                for (let i = 0; i < newColumns.length; i++) {
                    const column = newColumns[i];
                    if (column.letters.length === 0 || Math.random() < 0.1) {
                        column.letters.unshift(String.fromCharCode(Math.floor(Math.random() * 94) + 33));
                    }
                    if (column.letters.length > window.innerHeight / 10) {
                        column.letters.pop();
                    }
                }
                return newColumns;
            });
        }, timeout);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="matrix-background">
            {columns.map((column, index) => (
                <div key={index} className="matrix-column" style={{animationDuration: `${column.speed}s`}}>
                    {column.letters.map((letter, index) => (
                        <div key={index} className="matrix-letter">{letter}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Matrix;
