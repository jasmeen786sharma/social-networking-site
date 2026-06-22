import React, { useState } from 'react';
import { Users, Award, Heart, Calendar, ArrowRight, Check } from 'lucide-react';

export default function DonationHub() {
  // Indian Campaign state
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      title: 'Warm Clothes & Blankets for Delhi Winter',
      organizer: 'Delhi Night Helpers Association',
      description: 'Funding the purchase and distribution of heavy blankets, sleeping bags, and thermal jackets to the homeless population in Delhi and NCR regions.',
      raised: 42000,
      goal: 60000,
      donors: 114,
      daysLeft: 12,
      category: 'clothing'
    },
    {
      id: 2,
      title: 'Sponsor Mid-day Meals for Rural Schools',
      organizer: 'Akshaya Patha Kitchen Partner',
      description: 'Providing freshly cooked, nutritious mid-day meals to 200 primary school children in village schools of Uttar Pradesh and Rajasthan.',
      raised: 125000,
      goal: 150000,
      donors: 342,
      daysLeft: 24,
      category: 'food'
    },
    {
      id: 3,
      title: 'Rural Primary Health Clinic Oxygen & Medical Kits',
      organizer: 'Bharat Care Medical Trust',
      description: 'Equipping rural primary health centers (PHCs) in Bihar with oxygen concentrators, nebulizers, and essential diagnostic checkup kits.',
      raised: 18000,
      goal: 40000,
      donors: 39,
      daysLeft: 8,
      category: 'medical'
    }
  ]);

  // Recent Indian donor wall state
  const [donorWall, setDonorWall] = useState([
    { name: 'Amit Sharma', amount: 1000, message: 'Warm clothes are a basic right. Bless your efforts!', time: '10 mins ago' },
    { name: 'Priya Patel', amount: 2500, message: 'Happy to support nutrition for the school children.', time: '1 hour ago' },
    { name: 'Anonymous', amount: 500, message: 'Doing what I can. Thanks for organizing Langar / Seva.', time: '3 hours ago' }
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form'); // 'form' or 'success'
  
  // Checkout Form State (Rupee tiers)
  const [donationAmount, setDonationAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorMessage, setDonorMessage] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');

  const handlePresetClick = (val) => {
    setDonationAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value;
    setCustomAmount(val);
    setDonationAmount('');
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    const finalAmount = parseFloat(donationAmount || customAmount);
    if (isNaN(finalAmount) || finalAmount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }
    if (!donorName) {
      alert('Please enter your name (or use "Anonymous").');
      return;
    }

    // Update campaign progress
    setCampaigns(campaigns.map(cam => {
      if (cam.id === selectedCampaign.id) {
        return {
          ...cam,
          raised: cam.raised + finalAmount,
          donors: cam.donors + 1
        };
      }
      return cam;
    }));

    // Add to recent donor wall
    const newDonorEntry = {
      name: donorName,
      amount: finalAmount,
      message: donorMessage || 'Supported this campaign!',
      time: 'Just now'
    };
    setDonorWall([newDonorEntry, ...donorWall]);

    // Show success screen
    setPaymentStep('success');
  };

  const closeCheckout = () => {
    setShowCheckout(false);
    setPaymentStep('form');
    setSelectedCampaign(null);
    // Reset form inputs
    setDonorName('');
    setDonorMessage('');
    setCardNum('');
    setCardExp('');
    setCardCvc('');
    setDonationAmount('1000');
    setCustomAmount('');
  };

  const finalDonationValue = parseFloat(donationAmount || customAmount || 0);

  return (
    <div className="animate-fade-in" style={{ padding: '40px 0 80px', fontFamily: 'var(--font-body)' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '12px' }}>Donation Hub</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Fund verified community projects and emergency relief campaigns directly in India. 100% of proceeds go to organizers.
          </p>
        </div>

        {/* Outer grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px'
        }} className="donation-grid">
          
          {/* Active Campaigns Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={22} fill="var(--accent)" style={{ color: 'var(--accent)' }} /> Active Fundraisers
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {campaigns.map(cam => {
                const percentage = Math.min(100, Math.round((cam.raised / cam.goal) * 100));
                
                return (
                  <div 
                    key={cam.id}
                    className="glass-panel" 
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      border: '1px solid var(--glass-border)',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'transform var(--transition-fast)'
                    }}
                    className="campaign-card"
                  >
                    <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', justifycontent: 'space-between', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className={`badge badge-${cam.category}`}>{cam.category}</span>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                          <Calendar size={14} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> {cam.daysLeft} days left
                        </div>
                      </div>
                      
                      <div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '8px' }}>{cam.title}</h3>
                        <span style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600 }}>By {cam.organizer}</span>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', opacity: 0.9, marginTop: '10px' }}>
                          {cam.description}
                        </p>
                      </div>

                      {/* Progress Stats */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                          <div>
                            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>₹{cam.raised.toLocaleString('en-IN')}</span>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}> raised of ₹{cam.goal.toLocaleString('en-IN')}</span>
                          </div>
                          <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent)' }}>{percentage}%</span>
                        </div>
                        <div className="progress-bar-container" style={{ height: '10px' }}>
                          <div 
                            className="progress-bar-fill" 
                            style={{ 
                              width: `${percentage}%`,
                              backgroundColor: 'var(--accent)',
                              background: 'linear-gradient(90deg, var(--accent) 0%, var(--secondary) 100%)'
                            }} 
                          />
                        </div>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '10px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Users size={14} /> {cam.donors} donors
                          </span>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          setSelectedCampaign(cam);
                          setShowCheckout(true);
                        }}
                        className="btn btn-accent" 
                        style={{ width: 'fit-content', padding: '12px 28px', marginTop: '8px' }}
                      >
                        Donate to Campaign
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Donor Wall */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{
              padding: '30px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--glass-border)',
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={20} style={{ color: 'var(--secondary)' }} /> Recent Contributions
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {donorWall.map((donor, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 0',
                    borderBottom: idx < donorWall.length - 1 ? '1px solid var(--border-color)' : 'none'
                  }}>
                    <div className="flex-center" style={{
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-full)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      flexShrink: 0
                    }}>
                      {donor.name === 'Anonymous' ? 'A' : donor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--primary)' }}>{donor.name}</span>
                        <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--success)' }}>+₹{donor.amount.toLocaleString('en-IN')}</span>
                      </div>
                      <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.9, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        "{donor.message}"
                      </p>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>{donor.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CHECKOUT MODAL */}
      {showCheckout && selectedCampaign && (
        <div style={modalOverlayStyle}>
          <div className="glass-panel animate-fade-in" style={modalContentStyle}>
            <div style={modalHeaderStyle}>
              <h2 style={{ color: 'var(--primary)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--success)', fontWeight: 800 }}>₹</span> Support Fundraiser
              </h2>
              <button onClick={closeCheckout} style={modalCloseBtnStyle}>&times;</button>
            </div>

            {paymentStep === 'success' ? (
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
                  width: '68px',
                  height: '68px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 12px rgba(0, 200, 0, 0.15)'
                }}>
                  <Check size={36} />
                </div>
                <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem' }}>Donation Fulfill Success!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '380px' }}>
                  Thank you! Your donation of <strong>₹{finalDonationValue.toLocaleString('en-IN')}</strong> has been credited to <strong>{selectedCampaign.title}</strong>.
                </p>
                
                <div style={{
                  backgroundColor: 'var(--secondary-light)',
                  color: 'hsl(38, 90%, 30%)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '12px',
                  border: '1px solid rgba(220, 160, 0, 0.2)'
                }}>
                  <Award size={18} />
                  <span>+{finalDonationValue} Karma Points Added!</span>
                </div>

                <button onClick={closeCheckout} className="btn btn-primary" style={{ padding: '10px 24px', marginTop: '24px' }}>
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <div>
                <div style={{
                  backgroundColor: 'var(--primary-light)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '20px'
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', fontWeight: 600 }}>Campaign:</span>
                  <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.05rem' }}>{selectedCampaign.title}</span>
                </div>

                <form onSubmit={handleDonateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Select Amount Preset */}
                  <div className="form-group">
                    <label className="form-label">Select Contribution Amount (₹) *</label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '8px'
                    }}>
                      {['500', '1000', '2500', '5000'].map(val => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handlePresetClick(val)}
                          style={{
                            padding: '10px',
                            borderRadius: 'var(--radius-sm)',
                            border: donationAmount === val ? '2px solid var(--accent)' : '1px solid var(--border-color)',
                            backgroundColor: donationAmount === val ? 'var(--accent-light)' : 'white',
                            color: donationAmount === val ? 'var(--accent)' : 'var(--text-main)',
                            fontWeight: 700,
                            cursor: 'pointer',
                            fontSize: '0.95rem'
                          }}
                        >
                          ₹{val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Or Custom Amount (₹)</label>
                    <input 
                      type="number" 
                      placeholder="Enter amount in ₹" 
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="form-input"
                      min="10"
                    />
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px'
                  }}>
                    <div className="form-group">
                      <label className="form-label">Your Name / Org *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Amit Mishra" 
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Encouragement Message</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Keep up the great Seva!" 
                        value={donorMessage}
                        onChange={(e) => setDonorMessage(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Simulated Secure Payment Details */}
                  <div style={{
                    border: '1px solid var(--border-color)',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                      🔒 Simulated Secure Payment (Razorpay/UPI Simulation)
                    </span>
                    
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" style={{ fontSize: '0.75rem' }}>Debit Card / UPI ID *</label>
                      <input 
                        type="text" 
                        placeholder="user@okhdfcbank or card number" 
                        value={cardNum}
                        onChange={(e) => setCardNum(e.target.value)}
                        className="form-input"
                        style={{ fontSize: '0.85rem', padding: '10px' }}
                        required
                      />
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1.2fr 0.8fr',
                      gap: '12px'
                    }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" style={{ fontSize: '0.75rem' }}>Expiry or UPI Verification *</label>
                        <input 
                          type="text" 
                          placeholder="12/28 or verified" 
                          value={cardExp}
                          onChange={(e) => setCardExp(e.target.value)}
                          className="form-input"
                          style={{ fontSize: '0.85rem', padding: '10px' }}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label" style={{ fontSize: '0.75rem' }}>CVC/PIN Code *</label>
                        <input 
                          type="password" 
                          placeholder="***" 
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="form-input"
                          style={{ fontSize: '0.85rem', padding: '10px' }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '12px' }}>
                    <button type="button" onClick={closeCheckout} className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-accent" style={{ padding: '10px 24px', fontWeight: 700 }}>
                      Donate ₹{finalDonationValue.toLocaleString('en-IN')}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .donation-grid {
          grid-template-columns: 1.8fr 1.2fr !important;
        }
        @media (max-width: 991px) {
          .donation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
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
  maxWidth: '520px',
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
  marginBottom: '20px',
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
