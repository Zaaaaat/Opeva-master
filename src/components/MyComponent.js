import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Utilisez les données récupérées dans votre composant */}
            {data.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
}

export default MyComponent;
