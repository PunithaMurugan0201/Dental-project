import React, { useEffect, useState } from "react";
import axios from "axios";

function StudyMaterials() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/getStudyMaterials")
            .then(res => setMaterials(res.data))
            .catch(err => console.error("❌ Error fetching materials:", err));
    }, []);

    return (
        <div style={{
            maxWidth: "800px",
            margin: "40px auto",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
        }}>
            <h2 style={{
                textAlign: "center",
                color: "#2c3e50",
                marginBottom: "30px",
                fontSize: "28px"
            }}>📚 Study Materials (MDS)</h2>

            {materials.length === 0 ? (
                <p style={{
                    textAlign: "center",
                    color: "#888",
                    fontStyle: "italic"
                }}>
                    No study materials found for BDS students.
                </p>
            ) : (
                materials.map((material, index) => (
                    <div key={index} style={{
                        marginBottom: "20px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        backgroundColor: "#fff"
                    }}>
                        <h3 style={{ marginBottom: "5px", color: "#34495e" }}>{material.subject}</h3>
                        <p style={{ marginBottom: "10px", color: "#666" }}>
                            <strong>Uploaded by:</strong> {material.uploaded_by}
                        </p>
                        <a
                            href={`http://localhost:5000/uploads/${material.file_name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            style={{
                                textDecoration: "none",
                                color: "#fff",
                                backgroundColor: "#3498db",
                                padding: "8px 16px",
                                borderRadius: "5px",
                                display: "inline-block",
                                transition: "background-color 0.3s ease"
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#2980b9"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#3498db"}
                        >
                            📥 Download {material.file_name}
                        </a>
                    </div>
                ))
            )}
        </div>
    );
}

export default StudyMaterials;
