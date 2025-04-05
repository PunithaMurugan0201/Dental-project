import React, { useEffect, useState } from "react";
import axios from "axios";

function StudyMaterials() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getStudyMaterials")
            .then(res => setMaterials(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Study Materials</h2>
            {materials.map((material, index) => (
                <div key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                    <p><strong>{material.subject}</strong> - Uploaded by: {material.uploaded_by}</p>
                    <a href={`http://localhost:5000/uploads/${material.file_name}`} download>{material.file_name}</a>
                </div>
            ))}
        </div>
    );
}

export default StudyMaterials;
