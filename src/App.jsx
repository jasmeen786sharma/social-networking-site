import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Feed from './components/Feed';
import DonationHub from './components/DonationHub';
import VolunteerPortal from './components/VolunteerPortal';
import ResourceDirectory from './components/ResourceDirectory';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Shared state of Indian help requests (Seva requests)
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Warm Sweaters & Blankets for Delhi Winter Shelter',
      category: 'clothing',
      description: 'Delhi Night Shelters NGO is raising 150 heavy blankets and warm thermal clothing items for daily wage families residing in temporary shelters during winter.',
      urgency: 'urgent',
      needs: '150 wool blankets, 60 warm sweaters',
      location: 'Delhi NCR Region',
      contact: 'intake@delhishelters.org.in',
      postedBy: 'Delhi Shelter Board',
      postedDate: '2026-06-20',
      progress: 63,
      goal: '150 items',
      current: '95 items'
    },
    {
      id: 2,
      title: 'Ration Kits for Daily Wage Workers in Dharavi',
      category: 'food',
      description: 'Weekly dry ration distribution needed for 100 daily-wage families affected by local construction halts in Mumbai slums.',
      urgency: 'high',
      needs: '100 dry grocery kits (rice, pulses, oil)',
      location: 'Dharavi, Mumbai',
      contact: 'rationseva@rhamumbai.org',
      postedBy: 'Robin Hood Army Mumbai',
      postedDate: '2026-06-21',
      progress: 75,
      goal: '100 kits',
      current: '75 kits'
    },
    {
      id: 3,
      title: 'Emergency Medical Support for Rickshaw Puller\'s Child',
      category: 'medical',
      description: 'A low-income rickshaw puller in East Delhi needs urgent financial assistance to cover pediatric surgery medicine and clinical tests for his child.',
      urgency: 'urgent',
      needs: 'Surgery medications and test charges (₹15,000)',
      location: 'East Delhi Slum Care',
      contact: 'arunkumar.social@careseva.org.in',
      postedBy: 'Arun Kumar (Social Worker)',
      postedDate: '2026-06-22',
      progress: 56,
      goal: '₹15,000 surgery cost',
      current: '₹8,500 raised'
    },
    {
      id: 4,
      title: 'Primary School Stationery & School Bags',
      category: 'education',
      description: 'Raising stationery packages (notebooks, geometric boxes, bags) for 50 children in Kolkata slums who are joining the government school next week.',
      urgency: 'normal',
      needs: '50 school bags, 200 notebooks',
      location: 'Kolkata Ward 12 Slums',
      contact: 'contact@brightseva.org',
      postedBy: 'Bright Seva Foundation',
      postedDate: '2026-06-19',
      progress: 84,
      goal: '50 packages',
      current: '42 packages'
    }
  ]);

  // Page Routing Switch
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'feed':
        return <Feed requests={requests} setRequests={setRequests} />;
      case 'donations':
        return <DonationHub />;
      case 'volunteer':
        return <VolunteerPortal />;
      case 'directory':
        return <ResourceDirectory />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="main-wrapper">
      {/* Floating Heritage Mesh Gradient Blobs */}
      <div className="bg-mesh-blob blob-left"></div>
      <div className="bg-mesh-blob blob-right"></div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="content-section" style={{ padding: '0 0 60px 0' }}>
        {renderContent()}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
