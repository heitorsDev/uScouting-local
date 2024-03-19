import React, { useState, useEffect } from "react";

export default function Competitions() {
    const [competitionPointers, setCompetitionPointers] = useState(null);

    useEffect(() => {
        const storedValue = localStorage.getItem("competitionPointers");
        if (storedValue) {
            setCompetitionPointers(JSON.parse(storedValue));
        }
    }, []);

    console.log(competitionPointers);

    return (
        <div>
            {competitionPointers && (
                <p>Competition Pointers: {JSON.stringify(competitionPointers)}</p>
            )}
        </div>
    );
}
