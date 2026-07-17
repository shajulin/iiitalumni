import React, { useState, useEffect } from 'react';
import { Database, Plus, Table as TableIcon, CheckCircle, AlertCircle, Loader, ChevronDown } from 'lucide-react';

// ─── Backend API base URL ───────────────────────────────────────────────────
const API_BASE = 'http://localhost/alumni-portal/backend/api/alumni_data.php';

// ─── Field configs per dataset ─────────────────────────────────────────────
const fieldConfigs = {
  '2016': [
    { name: 'timestamp',         label: 'Timestamp',              type: 'datetime-local' },
    { name: 'username',          label: 'Username / Institute Email' },
    { name: 'first_name',        label: 'First Name',             required: true },
    { name: 'last_name',         label: 'Last Name',              required: true },
    { name: 'dob',               label: 'Date of Birth',          type: 'date' },
    { name: 'roll_no',           label: 'Roll No',                required: true },
    { name: 'mailing_address',   label: 'Mailing Address',        wide: true },
    { name: 'city',              label: 'City' },
    { name: 'state',             label: 'State' },
    { name: 'country',           label: 'Country' },
    { name: 'pincode',           label: 'Pincode' },
    { name: 'gender',            label: 'Gender',                 type: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { name: 'whatsapp_no',       label: 'WhatsApp Mobile Number' },
    { name: 'personal_email',    label: 'Personal Email',         type: 'email' },
    { name: 'permanent_address', label: 'Permanent Address',      wide: true },
    { name: 'present_status',    label: 'Present Status',         type: 'select', options: ['', 'Employed', 'Self-Employed', 'Higher Studies', 'Seeking Job', 'Other'] },
    { name: 'organization',      label: 'Organization / University', wide: true },
    { name: 'remarks',           label: 'Remarks',                wide: true, type: 'textarea' },
  ],
  '2017': [
    { name: 'timestamp',       label: 'Timestamp',              type: 'datetime-local' },
    { name: 'username',        label: 'Username / Institute Email' },
    { name: 'first_name',      label: 'First Name',             required: true },
    { name: 'last_name',       label: 'Last Name',              required: true },
    { name: 'dob',             label: 'Date of Birth',          type: 'date' },
    { name: 'roll_no',         label: 'Roll No',                required: true },
    { name: 'mailing_address', label: 'Mailing Address',        wide: true },
    { name: 'city',            label: 'City' },
    { name: 'state',           label: 'State' },
    { name: 'country',         label: 'Country' },
    { name: 'pincode',         label: 'Pincode' },
    { name: 'gender',          label: 'Gender',                 type: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { name: 'whatsapp_no',     label: 'WhatsApp Mobile Number' },
    { name: 'personal_email',  label: 'Personal Email',         type: 'email' },
    { name: 'present_status',  label: 'Present Status',         type: 'select', options: ['', 'Employed', 'Self-Employed', 'Higher Studies', 'Seeking Job', 'Other'] },
    { name: 'organization',    label: 'Organization / University', wide: true },
    { name: 'remarks',         label: 'Remarks',                wide: true, type: 'textarea' },
  ],
  '2019': [
    { name: 'timestamp',      label: 'Timestamp',              type: 'datetime-local' },
    { name: 'username',       label: 'Username / Institute Email' },
    { name: 'first_name',     label: 'First Name',             required: true },
    { name: 'last_name',      label: 'Last Name',              required: true },
    { name: 'dob',            label: 'Date of Birth',          type: 'date' },
    { name: 'roll_no',        label: 'Roll No',                required: true },
    { name: 'city',           label: 'City' },
    { name: 'state',          label: 'State' },
    { name: 'country',        label: 'Country' },
    { name: 'pincode',        label: 'Pincode' },
    { name: 'gender',         label: 'Gender',                 type: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { name: 'whatsapp_no',    label: 'WhatsApp Mobile Number' },
    { name: 'personal_email', label: 'Personal Email',         type: 'email' },
    { name: 'present_status', label: 'Present Status',         type: 'select', options: ['', 'Employed', 'Self-Employed', 'Higher Studies', 'Seeking Job', 'Other'] },
    { name: 'organization',   label: 'Organization / University', wide: true },
    { name: 'remarks',        label: 'Remarks',                wide: true, type: 'textarea' },
  ],
  '2020': [
    { name: 'timestamp',      label: 'Timestamp',              type: 'datetime-local' },
    { name: 'username',       label: 'Username / Institute Email' },
    { name: 'first_name',     label: 'First Name',             required: true },
    { name: 'last_name',      label: 'Last Name',              required: true },
    { name: 'dob',            label: 'Date of Birth',          type: 'date' },
    { name: 'roll_no',        label: 'Roll No',                required: true },
    { name: 'city',           label: 'City' },
    { name: 'state',          label: 'State' },
    { name: 'country',        label: 'Country' },
    { name: 'pincode',        label: 'Pincode' },
    { name: 'gender',         label: 'Gender',                 type: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { name: 'whatsapp_no',    label: 'WhatsApp Mobile Number' },
    { name: 'personal_email', label: 'Personal Email',         type: 'email' },
    { name: 'present_status', label: 'Present Status',         type: 'select', options: ['', 'Employed', 'Self-Employed', 'Higher Studies', 'Seeking Job', 'Other'] },
    { name: 'organization',   label: 'Organization / University', wide: true },
    { name: 'remarks',        label: 'Remarks',                wide: true, type: 'textarea' },
  ],
  '2021': [
    { name: 'timestamp',      label: 'Timestamp',              type: 'datetime-local' },
    { name: 'username',       label: 'Username / Institute Email' },
    { name: 'first_name',     label: 'First Name',             required: true },
    { name: 'last_name',      label: 'Last Name',              required: true },
    { name: 'dob',            label: 'Date of Birth',          type: 'date' },
    { name: 'roll_no',        label: 'Roll No',                required: true },
    { name: 'city',           label: 'City' },
    { name: 'state',          label: 'State' },
    { name: 'country',        label: 'Country' },
    { name: 'pincode',        label: 'Pincode' },
    { name: 'gender',         label: 'Gender',                 type: 'select', options: ['', 'Male', 'Female', 'Other'] },
    { name: 'whatsapp_no',    label: 'WhatsApp Mobile Number' },
    { name: 'personal_email', label: 'Personal Email',         type: 'email' },
    { name: 'present_status', label: 'Present Status',         type: 'select', options: ['', 'Employed', 'Self-Employed', 'Higher Studies', 'Seeking Job', 'Other'] },
    { name: 'organization',   label: 'Organization / University', wide: true },
    { name: 'remarks',        label: 'Remarks',                wide: true, type: 'textarea' },
  ],
  'higher_studies': [
    { name: 'sl_no',             label: 'Sl.No',                              type: 'number' },
    { name: 'student_name',      label: 'Name of the Student',                required: true, wide: true },
    { name: 'roll_no',           label: 'Roll No',                            required: true },
    { name: 'batch',             label: 'Batch' },
    { name: 'institute_name',    label: 'Name of the institute pursuing Degree', required: true, wide: true },
    { name: 'institute_address', label: 'Address of the institute',           wide: true },
    { name: 'degree_name',       label: 'Name of the degree' },
    { name: 'duration',          label: 'Duration' },
    { name: 'starting_month',    label: 'Starting Month' },
    { name: 'phone_no',          label: 'Phone No' },
],
  'details_2024': [
    { name: 'timestamp',               label: 'Timestamp',                type: 'datetime-local' },
    { name: 'student_name',            label: 'Student Full Name',        required: true, wide: true },
    { name: 'batch',                   label: 'Batch' },
    { name: 'mobile_no',               label: 'Mobile No' },
    { name: 'whatsapp_no',             label: 'WhatsApp No' },
    { name: 'email',                   label: 'Email',                    type: 'email' },
    { name: 'dob',                     label: 'Date of Birth',            type: 'date' },
    { name: 'communication_address',   label: 'Communication Address',    wide: true, type: 'textarea' },
    { name: 'permanent_address',       label: 'Permanent Address',        wide: true, type: 'textarea' },
    { name: 'occupation',              label: 'Occupation' },
    { name: 'country_of_employment',   label: 'Country of Employment' },
    { name: 'nationality',             label: 'Nationality' },
    { name: 'pay_level',               label: 'Pay Level' },
    { name: 'is_govt_job',             label: 'Is Govt Job?',             type: 'select', options: ['', 'Yes', 'No'] },
    { name: 'willingness_to_contribute', label: 'Willing to Contribute?', wide: true, type: 'textarea' },
  ],
};

// ─── Helper: render a single form field ────────────────────────────────────
const FormField = ({ field, value, onChange }) => {
  const baseStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    background: '#f8fafc',
    color: '#1e293b',
    transition: 'border-color .2s, box-shadow .2s',
    boxSizing: 'border-box',
  };

  if (field.type === 'select') {
    return (
      <div style={{ position: 'relative' }}>
        <select
          name={field.name}
          value={value || ''}
          onChange={onChange}
          style={{ ...baseStyle, appearance: 'none', cursor: 'pointer' }}
          required={field.required}
        >
          {field.options.map(opt => (
            <option key={opt} value={opt}>{opt || `-- Select ${field.label} --`}</option>
          ))}
        </select>
        <ChevronDown size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b' }} />
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <textarea
        name={field.name}
        value={value || ''}
        onChange={onChange}
        rows={3}
        style={{ ...baseStyle, resize: 'vertical', minHeight: '80px' }}
        required={field.required}
      />
    );
  }

  return (
    <input
      type={field.type || 'text'}
      name={field.name}
      value={value || ''}
      onChange={onChange}
      style={baseStyle}
      required={field.required}
    />
  );
};

// ─── Main component ─────────────────────────────────────────────────────────
const AlumniDataTab = ({ datasetId, datasetName }) => {
  const [data, setData]               = useState([]);
  const [loading, setLoading]         = useState(true);
  const [submitting, setSubmitting]   = useState(false);
  const [view, setView]               = useState('table'); // 'table' | 'form'
  const [formData, setFormData]       = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const fields = fieldConfigs[datasetId] || [];

  // ── Fetch existing records from backend ──
  const fetchData = async () => {
    setLoading(true);
    try {
      const res    = await fetch(`${API_BASE}?dataset=${datasetId}`);
      const result = await res.json();
      if (result.status === 'success') setData(result.data);
      else setData([]);
    } catch (err) {
      console.error('Fetch error:', err);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    setView('table');
    setFormData({});
    setSubmitStatus(null);
    setSubmitMessage('');
  }, [datasetId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ── POST form data to backend ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    // Auto-fill timestamp if empty
    const payload = { ...formData };
    if (fields.find(f => f.name === 'timestamp') && !payload.timestamp) {
      payload.timestamp = new Date().toLocaleString('en-IN');
    }

    console.log(`[AlumniDataTab] POST → ${API_BASE}?dataset=${datasetId}`);
    console.log('[AlumniDataTab] Payload:', payload);

    try {
      const res     = await fetch(`${API_BASE}?dataset=${datasetId}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      const rawText = await res.text();
      console.log('[AlumniDataTab] Raw server response:', rawText);

      let result;
      try {
        result = JSON.parse(rawText);
      } catch {
        setSubmitStatus('error');
        setSubmitMessage('Server returned invalid response. Check console for details.');
        setSubmitting(false);
        return;
      }

      if (result.status === 'success') {
        setSubmitStatus('success');
        setSubmitMessage(`✅ Data saved successfully to "${datasetName}" table! (ID: ${result.id})`);
        setFormData({});
        fetchData(); // refresh table
        setTimeout(() => { setView('table'); setSubmitStatus(null); }, 2500);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('❌ Error: ' + (result.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('[AlumniDataTab] Network error:', err);
      setSubmitStatus('error');
      setSubmitMessage('❌ Cannot connect to server. Make sure XAMPP Apache is running.');
    }

    setSubmitting(false);
  };

  // ─── Styles ───────────────────────────────────────────────────────────────
  const s = {
    header: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px' },
    btnPrimary: { display:'flex', alignItems:'center', gap:'6px', padding:'9px 18px', background:'#2563eb', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:'600', fontSize:'14px' },
    btnSecondary: { display:'flex', alignItems:'center', gap:'6px', padding:'9px 18px', background:'#f1f5f9', color:'#475569', border:'1px solid #cbd5e1', borderRadius:'8px', cursor:'pointer', fontWeight:'600', fontSize:'14px' },
    card: { background:'#fff', borderRadius:'12px', boxShadow:'0 1px 4px rgba(0,0,0,0.08)', padding:'28px 24px' },
    sectionTitle: { fontSize:'16px', fontWeight:'700', color:'#1e40af', marginBottom:'20px', paddingBottom:'10px', borderBottom:'2px solid #e2e8f0' },
    grid: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px 24px' },
    fieldLabel: { display:'block', marginBottom:'6px', fontWeight:'600', fontSize:'13px', color:'#475569', letterSpacing:'.3px', textTransform:'uppercase' },
    successBox: { display:'flex', alignItems:'center', gap:'10px', padding:'14px 18px', background:'#f0fdf4', border:'1px solid #86efac', borderRadius:'8px', color:'#166534', fontSize:'14px', marginBottom:'20px' },
    errorBox:   { display:'flex', alignItems:'center', gap:'10px', padding:'14px 18px', background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:'8px', color:'#991b1b', fontSize:'14px', marginBottom:'20px' },
    submitBtn:  { gridColumn:'1 / -1', padding:'13px', background:'#2563eb', color:'#fff', border:'none', borderRadius:'8px', fontWeight:'700', fontSize:'15px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', marginTop:'8px' },
  };

  return (
    <div>
      {/* ── Header ── */}
      <div style={s.header}>
        <h3 style={{ margin:0, fontSize:'20px', color:'#1e293b' }}>{datasetName} Data</h3>
        {view === 'form' ? (
          <button style={s.btnSecondary} onClick={() => setView('table')}>
            <TableIcon size={16} /> View Data
          </button>
        ) : (
          <button style={s.btnPrimary} onClick={() => { setFormData({}); setSubmitStatus(null); setView('form'); }}>
            <Plus size={16} /> Add New Record
          </button>
        )}
      </div>

      {/* ══════════════════ FORM VIEW ══════════════════ */}
      {view === 'form' && (
        <div style={s.card}>
          <div style={s.sectionTitle}>📋 Submit New Details → Saves to <code style={{background:'#eff6ff', padding:'2px 6px', borderRadius:'4px', color:'#1d4ed8'}}>{datasetName.toLowerCase().replace(/ /g,'_')}</code> table</div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <div style={s.successBox}>
              <CheckCircle size={20} />
              <span>{submitMessage}</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={s.errorBox}>
              <AlertCircle size={20} />
              <span>{submitMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={s.grid}>
              {fields.map(field => (
                <div
                  key={field.name}
                  style={{ gridColumn: field.wide ? '1 / -1' : 'span 1' }}
                >
                  <label style={s.fieldLabel}>
                    {field.label}
                    {field.required && <span style={{ color:'#ef4444', marginLeft:'3px' }}>*</span>}
                  </label>
                  <FormField
                    field={field}
                    value={formData[field.name] || ''}
                    onChange={handleInputChange}
                  />
                </div>
              ))}

              {/* Submit button */}
              <button type="submit" style={s.submitBtn} disabled={submitting}>
                {submitting
                  ? <><Loader size={18} style={{ animation:'spin 1s linear infinite' }} /> Saving to Database...</>
                  : <><CheckCircle size={18} /> Submit Details</>
                }
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ══════════════════ TABLE VIEW ══════════════════ */}
      {view === 'table' && (
        <div style={{ ...s.card, padding:0, overflowX:'auto' }}>
          {loading ? (
            <div style={{ padding:'40px', textAlign:'center', color:'#64748b', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px' }}>
              <Loader size={20} style={{ animation:'spin 1s linear infinite' }} /> Loading data...
            </div>
          ) : data.length === 0 ? (
            <div style={{ padding:'50px 20px', textAlign:'center', color:'#64748b' }}>
              <Database size={48} style={{ opacity:.2, marginBottom:'12px' }} />
              <p style={{ marginBottom:'16px' }}>No records found in <strong>{datasetName}</strong> table.</p>
              <button style={s.btnPrimary} onClick={() => setView('form')}>
                <Plus size={16} /> Add First Record
              </button>
            </div>
          ) : (
            <table style={{ width:'100%', borderCollapse:'collapse', textAlign:'left', minWidth:'700px' }}>
              <thead>
                <tr style={{ background:'#f8fafc', borderBottom:'2px solid #e2e8f0' }}>
                  {fields.map(f => (
                    <th key={f.name} style={{ padding:'12px 16px', color:'#475569', fontWeight:'700', fontSize:'13px', whiteSpace:'nowrap', textTransform:'uppercase', letterSpacing:'.4px' }}>
                      {f.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i} style={{ borderBottom:'1px solid #f1f5f9', background: i % 2 === 0 ? '#fff' : '#fafbfc' }}>
                    {fields.map(f => (
                      <td key={f.name} style={{ padding:'11px 16px', fontSize:'14px', color:'#334155', whiteSpace:'nowrap', maxWidth:'200px', overflow:'hidden', textOverflow:'ellipsis' }}>
                        {row[f.name] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Spinner keyframe */}
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
};

export default AlumniDataTab;
