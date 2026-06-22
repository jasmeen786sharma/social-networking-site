import React from 'react';
import { Heart, Users, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Home({ setActiveTab }) {
  const stats = [
    { icon: <HeartHandshake size={24} />, count: '1,840+', label: 'Needs Fulfilled', color: 'var(--accent)' },
    { icon: <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>₹</span>, count: '6,45,000+', label: 'Funds Raised', color: 'var(--secondary)' },
    { icon: <Users size={24} />, count: '1,250+', label: 'Active Volunteers', color: 'var(--primary-medium)' },
    { icon: <ShieldCheck size={24} />, count: '32+', label: 'Verified NGO Partners', color: 'var(--success)' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Share a Need (Seva Request)',
      desc: 'Post a request for yourself or someone else in need (food, clothing, shelter, health or schooling).',
    },
    {
      num: '02',
      title: 'Community Connect',
      desc: 'Local volunteers and donors view your request, verify the requirements, and coordinate resources.',
    },
    {
      num: '03',
      title: 'Direct Handover',
      desc: 'Help is delivered directly, or funded online. All coordinates are transparently managed.',
    },
  ];

  const featuredRequests = [
    {
      id: 1,
      title: 'Warm Sweaters & Blankets for Delhi Winter Shelter',
      category: 'clothing',
      description: 'Delhi Night Shelters NGO is looking for 150 blankets and warm clothing items for low-income families sleeping on Delhi streets during the winter.',
      urgency: 'urgent',
      progress: 63,
      goal: '150 items',
      current: '95 items',
      postedBy: 'Delhi Shelter Board',
    },
    {
      id: 2,
      title: 'Ration Kits for Daily Wage Workers in Dharavi',
      category: 'food',
      description: 'Daily fresh dry rations needed for 100 daily-wage families affected by temporary construction halts in Mumbai slums.',
      urgency: 'high',
      progress: 75,
      goal: '100 kits',
      current: '75 kits',
      postedBy: 'Robin Hood Army Mumbai',
    }
  ];

  return (
    <div className="animate-fade-in" style={{ fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 0 60px',
        background: 'linear-gradient(180deg, var(--primary-light) 0%, var(--bg-primary) 100%)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Hero Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              width: 'fit-content'
            }}>
              <Heart size={16} fill="var(--accent)" style={{ color: 'var(--accent)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Join the Seva Movement
              </span>
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--primary)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em'
            }}>
              A Simple Hand Can Change a Life
            </h1>
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-main)',
              lineHeight: 1.7,
              opacity: 0.9,
              maxWidth: '540px'
            }}>
              SevaSetu connects local individuals in immediate need with compassionate helpers, donors, and organizations across India. Ask for help or offer a hand today.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button onClick={() => setActiveTab('feed')} className="btn btn-accent" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                Explore Help Board <ArrowRight size={18} />
              </button>
              <button onClick={() => setActiveTab('donations')} className="btn btn-secondary">
                Support Campaigns
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0,
              opacity: 0.6
            }} />
            <img 
              src="/hero_community_hands.png" 
              alt="Community Helping Hands" 
              className="animate-float"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid white',
                zIndex: 1,
                position: 'relative'
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-panel" 
                style={{
                  padding: '30px 24px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'transform var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  background: 'var(--primary-light)',
                  color: stat.color,
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  {stat.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{stat.count}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '4px' }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '16px' }}>How SevaSetu Works</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 48px', fontSize: '1.05rem' }}>
            We've built a simple, transparent channel to connect community needs directly with local volunteers and resources.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {steps.map((step, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'white',
                  padding: '40px 32px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-sm)',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '10px',
                  fontSize: '6rem',
                  fontWeight: 900,
                  color: 'var(--bg-secondary)',
                  opacity: 0.6,
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1
                }}>{step.num}</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary)', marginBottom: '12px', position: 'relative', zIndex: 1 }}>
                  {step.title}
                </h3>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', position: 'relative', zIndex: 1, opacity: 0.9 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Help Requests */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px'
          }} className="section-header-flex">
            <div>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '8px' }}>Urgent Community Needs</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>These requests need immediate attention from local community members.</p>
            </div>
            <button onClick={() => setActiveTab('feed')} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              View All Board <ArrowRight size={16} />
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px'
          }}>
            {featuredRequests.map(req => (
              <div 
                key={req.id} 
                className="glass-panel" 
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'transform var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`badge badge-${req.category}`}>{req.category}</span>
                  <span className={`badge badge-${req.urgency}`}>{req.urgency}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '10px' }}>{req.title}</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', opacity: 0.85, height: '66px', overflow: 'hidden' }}>
                    {req.description}
                  </p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', fontWeight: 600 }}>
                    <span style={{ color: 'var(--text-muted)' }}>Progress: {req.current}</span>
                    <span style={{ color: 'var(--primary)' }}>Goal: {req.goal}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill" 
                      style={{ 
                        width: `${req.progress}%`,
                        backgroundColor: req.urgency === 'urgent' ? 'var(--accent)' : 'var(--secondary)'
                      }} 
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Posted by: <strong>{req.postedBy}</strong></span>
                  <button onClick={() => setActiveTab('feed')} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                    Offer Help
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 40px',
            color: 'white',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h2 style={{ color: 'white', fontSize: '2.4rem', fontWeight: 800 }}>Ready to Make an Impact?</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', fontSize: '1.1rem' }}>
              Whether you need assistance, want to volunteer your time, or can donate supplies - your step counts. Join us in strengthening our local support web.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button onClick={() => setActiveTab('feed')} className="btn btn-accent" style={{ padding: '14px 28px' }}>
                Request Support (Seva)
              </button>
              <button onClick={() => setActiveTab('volunteer')} className="btn" style={{ padding: '14px 28px', backgroundColor: 'transparent', border: '2px solid white', color: 'white' }}>
                Join as Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {styleMarkup}
    </div>
  );
}

const styleMarkup = (
  <style dangerouslySetInnerHTML={{__html: `
    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 48px;
    }
    @media (max-width: 991px) {
      .hero-grid {
        grid-template-columns: 1fr !important;
        text-align: center;
      }
      .hero-grid div {
        align-items: center;
        margin: 0 auto;
      }
    }
    @media (max-width: 768px) {
      .section-header-flex {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 20px;
      }
    }
  `}} />
);
