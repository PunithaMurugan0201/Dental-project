import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import './FollowupCard.css';

const FollowupCard = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [followups, setFollowups] = useState([]);
  const [newFollowup, setNewFollowup] = useState({
    date: '',
    workDone: '',
    nextAppointment: ''
  });

  useEffect(() => {
    const fetchPatientAndFollowups = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = localStorage.getItem('token');

        const patientRes = await axios.get(`http://localhost:5000/api/patients/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const followupRes = await axios.get(`http://localhost:5000/api/followups/${patientId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPatientData(patientRes.data);
        setFollowups(followupRes.data.followups || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchPatientAndFollowups();
    } else {
      setError('No patient ID provided');
      setLoading(false);
    }
  }, [patientId]);

  const handleFollowupChange = (e) => {
    const { name, value } = e.target;
    setNewFollowup(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddFollowup = async (e) => {
    e.preventDefault();

    if (!newFollowup.date) {
      alert("Please select a date before submitting.");
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(
        `http://localhost:5000/api/followups`,
        {
          ...newFollowup,
          patientId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
      );

      setFollowups(prev => [...prev, response.data.followup]);
      setNewFollowup({
        date: '',
        workDone: '',
        nextAppointment: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to add followup');
    }
  };

  if (loading) return <div className="loading-container">Loading...</div>;
  if (error) return <div className="error-container">{error}</div>;

  return (
    <div className="followup-container">
      <div className="patient-header">
        <h2>{patientData.name}</h2>
        <div className="patient-meta">
          <span>Ortho No: {patientData.orthoNo}</span>
          <span>OP No: {patientData.opNo}</span>
          <span>Age: {patientData.age}</span>
          <span>Sex: {patientData.sex}</span>
          <span>Phone: {patientData.telephone}</span>
        </div>
      </div>

      <div className="followup-section">
        <div className="followup-form">
          <h3>Add New Followup</h3>
          <form onSubmit={handleAddFollowup}>
            <div className="form-group">
              <label>Date:</label>
              <input type="date" name="date" value={newFollowup.date} onChange={handleFollowupChange} required />
            </div>

            <div className="form-group">
              <label>Work Done:</label>
              <input type="text" name="workDone" value={newFollowup.workDone} onChange={handleFollowupChange} required />
            </div>

            <div className="form-group">
              <label>Next Appointment:</label>
              <input type="date" name="nextAppointment" value={newFollowup.nextAppointment} onChange={handleFollowupChange} />
            </div>

            <button type="submit" className="add-followup-btn">Add Followup</button>
          </form>
        </div>

        <h3>Treatment Records</h3>
        {followups.length > 0 ? (
          <table className="followup-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Work Done</th>
                <th>Next Appointment</th>
              </tr>
            </thead>
            <tbody>
              {followups.map(f => (
                <tr key={f._id}>
                  <td>{format(new Date(f.date), 'PPP')}</td>
                  <td>{f.workDone}</td>
                  <td>{f.nextAppointment ? format(new Date(f.nextAppointment), 'PPP') : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-records">No follow-up records found.</p>
        )}
      </div>
    </div>
  );
};

export default FollowupCard;
