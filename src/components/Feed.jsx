import React, { useState } from 'react';
import { Search, Filter, Plus, MapPin, Calendar, Check, Send, AlertCircle, Heart } from 'lucide-react';

export default function Feed({ requests, setRequests }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  
  // Modals state
  const [showPostModal, setShowPostModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  
  // Submit new request state
  const [newRequest, setNewRequest] = useState({
    title: '',
    category: 'food',
    urgency: 'normal',
    description: '',
    needs: '',
    location: '',
    contact: '',
    postedBy: ''
  });
  
  // Submit help pledge state
  const [helpForm, setHelpForm] = useState({
    name: '',
    email: '',
    message: '',
    method: 'delivery'
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [helpSuccess, setHelpSuccess] = useState(false);

  // Categories & Urgencies definitions
  const categories = ['all', 'food', 'clothing', 'medical', 'education', 'shelter', 'other'];
  const urgencies = ['all', 'urgent', 'high', 'moderate', 'normal'];

  // Handle post request submission
  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!newRequest.title || !newRequest.description || !newRequest.location || !newRequest.postedBy) {
      alert('Please fill out all required fields.');
      return;
    }

    const createdRequest = {
      id: Date.now(),
      title: newRequest.title,
      category: newRequest.category,
      urgency: newRequest.urgency,
      description: newRequest.description,
      needs: newRequest.needs,
      location: newRequest.location,
      contact: newRequest.contact || 'Direct contact provided on connect',
      postedBy: newRequest.postedBy,
      postedDate: new Date().toISOString().split('T')[0],
      progress: 0,
      goal: newRequest.needs || '1 unit',
      current: '0 units'
    };

    setRequests([createdRequest, ...requests]);
    setFormSuccess(true);
    setTimeout(() => {
      setShowPostModal(false);
      setFormSuccess(false);
      setNewRequest({
        title: '',
        category: 'food',
        urgency: 'normal',
        description: '',
        needs: '',
        location: '',
        contact: '',
        postedBy: ''
      });
    }, 2000);
  };

  // Handle volunteer support submission
  const handleHelpSubmit = (e) => {
    e.preventDefault();
    if (!helpForm.name || !helpForm.email) {
      alert('Please fill in your name and email.');
      return;
    }
    
    // Simulate updating progress of the request in global state
    setRequests(requests.map(req => {
      if (req.id === selectedRequest.id) {
        return {
          ...req,
          progress: Math.min(100, (req.progress || 0) + 20),
          current: 'Updated just now'
        };
      }
      return req;
    }));

    setHelpSuccess(true);
    setTimeout(() => {
      setShowHelpModal(false);
      setHelpSuccess(false);
      setHelpForm({ name: '', email: '', message: '', method: 'delivery' });
    }, 2500);
  };

  // Filter requests
  const filteredRequests = requests.filter(req => {
    const matchesSearch = req.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          req.postedBy.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || req.category === selectedCategory;
    const matchesUrgency = selectedUrgency === 'all' || req.urgency === selectedUrgency;
    
    return matchesSearch && matchesCategory && matchesUrgency;
  });

  return (
    <div className="animate-fade-in" style={{ padding: '40px 0 80px', fontFamily: 'var(--font-body)' }}>
      <div className="container">
        {/* Header section with Post CTA */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '36px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '8px' }}>Community Help Board</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>Browse local needs, offer direct help, or post a request for support.</p>
          </div>
          <button 
            onClick={() => setShowPostModal(true)} 
            className="btn btn-accent"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              boxShadow: '0 4px 14px rgba(var(--accent-base), 0.25)'
            }}
          >
            <Plus size={20} /> Request Help
          </button>
        </div>

        {/* Filters and Search Bar Panel */}
        <div className="glass-panel" style={{
          padding: '24px',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            {/* Search Input */}
            <div style={{
              flex: '1',
              minWidth: '280px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <Search size={18} style={{
                position: 'absolute',
                left: '16px',
                color: 'var(--text-muted)'
              }} />
              <input 
                type="text" 
                placeholder="Search requests by title, description or name..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
                style={{
                  width: '100%',
                  paddingLeft: '48px',
                  borderRadius: 'var(--radius-full)'
                }}
              />
            </div>

            {/* Category Select */}
            <div style={{ minWidth: '180px' }}>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select"
                style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
              >
                <option value="all">All Categories</option>
                <option value="food">Food Requirements</option>
                <option value="clothing">Clothing & Supplies</option>
                <option value="medical">Medical Assistance</option>
                <option value="education">Schooling & Books</option>
                <option value="shelter">Temporary Shelter</option>
                <option value="other">Other Helpers</option>
              </select>
            </div>

            {/* Urgency Select */}
            <div style={{ minWidth: '180px' }}>
              <select 
                value={selectedUrgency} 
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="form-select"
                style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
              >
                <option value="all">All Urgency Levels</option>
                <option value="urgent">Urgent Need</option>
                <option value="high">High Urgency</option>
                <option value="moderate">Moderate Urgency</option>
                <option value="normal">Normal Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Help Requests Grid */}
        {filteredRequests.length === 0 ? (
          <div className="glass-panel" style={{
            padding: '60px 40px',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px'
          }}>
            <AlertCircle size={48} style={{ color: 'var(--primary-medium)' }} />
            <h3 style={{ color: 'var(--primary)' }}>No requests match your search criteria</h3>
            <p style={{ maxWidth: '400px' }}>Try selecting a different filter combination, or post a request if you know someone who needs help.</p>
            <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setSelectedUrgency('all'); }} className="btn btn-secondary">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid-layout">
            {filteredRequests.map(req => (
              <div 
                key={req.id} 
                className="glass-panel" 
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'relative',
                  border: '1px solid var(--glass-border)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                {/* Category & Urgency Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`badge badge-${req.category}`}>{req.category}</span>
                  <span className={`badge badge-${req.urgency}`}>{req.urgency}</span>
                </div>

                {/* Info */}
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '8px', lineHeight: 1.3 }}>
                    {req.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} /> {req.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={14} /> {req.postedDate}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', opacity: 0.9, marginBottom: '16px' }}>
                    {req.description}
                  </p>
                  
                  {req.needs && (
                    <div style={{
                      backgroundColor: 'var(--bg-secondary)',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.88rem',
                      borderLeft: '4px solid var(--accent)'
                    }}>
                      <strong>Specific Needs:</strong> {req.needs}
                    </div>
                  )}
                </div>

                {/* Progress bar if goal specified */}
                {req.goal && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px', fontWeight: 600 }}>
                      <span style={{ color: 'var(--text-muted)' }}>Progress: {req.current}</span>
                      <span style={{ color: 'var(--primary)' }}>Goal: {req.goal}</span>
                    </div>
                    <div className="progress-bar-container">
                      <div 
                        className="progress-bar-fill" 
                        style={{ 
                          width: `${req.progress || 0}%`, 
                          backgroundColor: req.urgency === 'urgent' ? 'var(--accent)' : 'var(--primary)' 
                        }} 
                      />
                    </div>
                  </div>
                )}

                {/* Card Footer Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-color)'
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    By: <strong>{req.postedBy}</strong>
                  </span>
                  <button 
                    onClick={() => {
                      setSelectedRequest(req);
                      setShowHelpModal(true);
                    }} 
                    className="btn btn-primary"
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  >
                    Offer Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL 1: Post Help Request */}
      {showPostModal && (
        <div style={modalOverlayStyle}>
          <div className="glass-panel animate-fade-in" style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>Request Support</h2>
              <button onClick={() => setShowPostModal(false)} style={modalCloseBtnStyle}>&times;</button>
            </div>
            
            {formSuccess ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div className="flex-center" style={{
                  background: 'var(--success-light)',
                  color: 'var(--success)',
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 12px rgba(0,200,0,0.1)'
                }}>
                  <Check size={32} />
                </div>
                <h3 style={{ color: 'var(--primary)' }}>Request Posted Successfully</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Your request is now live on the community board.</p>
              </div>
            ) : (
              <form onSubmit={handlePostSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Request Title *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ration Kits & Dry Groceries Needed" 
                    value={newRequest.title}
                    onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                    className="form-input"
                    required
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  <div className="form-group">
                    <label className="form-label">Category *</label>
                    <select 
                      value={newRequest.category} 
                      onChange={(e) => setNewRequest({ ...newRequest, category: e.target.value })}
                      className="form-select"
                    >
                      <option value="food">Food</option>
                      <option value="clothing">Clothing</option>
                      <option value="medical">Medical</option>
                      <option value="education">Education</option>
                      <option value="shelter">Shelter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Urgency *</label>
                    <select 
                      value={newRequest.urgency} 
                      onChange={(e) => setNewRequest({ ...newRequest, urgency: e.target.value })}
                      className="form-select"
                    >
                      <option value="normal">Normal</option>
                      <option value="moderate">Moderate</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Describe the Situation *</label>
                  <textarea 
                    placeholder="Provide details about who needs help, what happened, and why this is required..." 
                    value={newRequest.description}
                    onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                    className="form-textarea"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Items/Quantity</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 5 boxes of milk formula, size 2 diapers" 
                    value={newRequest.needs}
                    onChange={(e) => setNewRequest({ ...newRequest, needs: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  <div className="form-group">
                    <label className="form-label">Location (Area/Sub) *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sector 12, RK Puram" 
                      value={newRequest.location}
                      onChange={(e) => setNewRequest({ ...newRequest, location: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Name / Org *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Goonj Welfare Trust" 
                      value={newRequest.postedBy}
                      onChange={(e) => setNewRequest({ ...newRequest, postedBy: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Info (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. phone or email, visible only to helpers" 
                    value={newRequest.contact}
                    onChange={(e) => setNewRequest({ ...newRequest, contact: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                  <button type="button" onClick={() => setShowPostModal(false)} className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-accent" style={{ padding: '10px 24px' }}>
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL 2: Pledge Support / Offer Help */}
      {showHelpModal && selectedRequest && (
        <div style={modalOverlayStyle}>
          <div className="glass-panel animate-fade-in" style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={{ color: 'var(--primary)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Heart size={20} fill="var(--accent)" style={{ color: 'var(--accent)' }} /> Connect to Help
              </h2>
              <button onClick={() => setShowHelpModal(false)} style={modalCloseBtnStyle}>&times;</button>
            </div>

            {helpSuccess ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div className="flex-center animate-pulse-soft" style={{
                  background: 'var(--success-light)',
                  color: 'var(--success)',
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 12px rgba(0,200,0,0.1)'
                }}>
                  <Check size={32} />
                </div>
                <h3 style={{ color: 'var(--primary)' }}>Support Request Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px' }}>
                  Thank you! We've sent your offer to <strong>{selectedRequest.postedBy}</strong>. They will contact you shortly to coordinate details.
                </p>
                <div style={{
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginTop: '8px'
                }}>
                  +20 Karma Points Gained!
                </div>
              </div>
            ) : (
              <div>
                {/* Summary of what they are helping with */}
                <div style={{
                  backgroundColor: 'var(--primary-light)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '20px',
                  border: '1px solid var(--border-color)'
                }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '4px', fontSize: '1rem' }}>
                    You are offering support for:
                  </h4>
                  <p style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '8px' }}>
                    {selectedRequest.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Posted by {selectedRequest.postedBy} • Location: {selectedRequest.location}
                  </p>
                </div>

                <form onSubmit={handleHelpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px'
                  }}>
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Sarah Jenkins" 
                        value={helpForm.name}
                        onChange={(e) => setHelpForm({ ...helpForm, name: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="e.g. sarah@example.com" 
                        value={helpForm.email}
                        onChange={(e) => setHelpForm({ ...helpForm, email: e.target.value })}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">How will you deliver help?</label>
                    <select 
                      value={helpForm.method} 
                      onChange={(e) => setHelpForm({ ...helpForm, method: e.target.value })}
                      className="form-select"
                    >
                      <option value="delivery">I can deliver the items myself</option>
                      <option value="shipping">I will ship the supplies to the center</option>
                      <option value="funding">I can fund purchasing these items</option>
                      <option value="coordinate">I want to discuss and plan delivery options</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Notes (Optional)</label>
                    <textarea 
                      placeholder="Add any specific details (e.g., 'I can bring 10 heavy blankets this Thursday evening.')" 
                      value={helpForm.message}
                      onChange={(e) => setHelpForm({ ...helpForm, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                    <button type="button" onClick={() => setShowHelpModal(false)} className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-accent" style={{ padding: '10px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Send size={16} /> Send Offer
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Inline styles for overlays
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(15, 34, 45, 0.4)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  padding: '20px',
  overflowY: 'auto'
};

const modalContentStyle = {
  width: '100%',
  maxWidth: '560px',
  background: 'white',
  borderRadius: 'var(--radius-lg)',
  padding: '32px',
  boxShadow: 'var(--shadow-lg)',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative'
};

const modalHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '16px'
};

const modalCloseBtnStyle = {
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
  lineHeight: 1,
  color: 'var(--text-muted)',
  cursor: 'pointer',
  padding: '0 8px'
};
