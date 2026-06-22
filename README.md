# SevaSetu - Indian Social Helping & Community Support Network

**SevaSetu** (Bridge of Service) is a premium, highly aesthetic, multi-page web application designed for social service in India. The platform bridges the gap between individuals needing immediate support (food, clothing, healthcare, education, shelter) and local Indian donors, volunteers, and NGOs.

---

## 🎨 Theme & Design System

The portal utilizes an organic, traditional Indian artisan color system inspired by heritage block prints (such as Ajrakh) and handloomed textiles, combined with modern glassmorphism panels:
- **Royal Indigo Blue** (`hsl(225, 60%, 20%)`): Stability, trust, and professional community service.
- **Accenting Madder Red** (`hsl(355, 65%, 42%)`): Traditional crimson representing compassion, charity, and energy.
- **Marigold Gold** (`hsl(42, 85%, 55%)`): Vibrant gold accents representing hope and community action.
- **Warm Ivory Background** (`hsl(40, 20%, 97%)`): A soft, organic texture resembling hand-loomed Khadi cotton.

### Key Stylish Visuals
- **Linear-Gradient Headers**: Typographic headings styled with modern gradient fills for an editorial feel.
- **Backdrop Blur Mesh Blobs**: Floating colorful mesh blur spheres placed sitewide to create visual depth.
- **Hover Micro-interactions**: Smooth card translation transitions (`transform: translateY(-8px) scale(1.01)`) with soft shadows on interaction.

---

## 🚀 Key Modules & Features

1. **Dashboard (Home)**: Inspiring landing screen displaying custom vector illustration banners, community impact metrics (Needs fulfilled, ₹ funds raised, active volunteers, NGOs), and step-by-step guidance on how the community portal operates.
2. **Help Board (Feed)**: Searchable list of active help requests (Seva requests) in Indian cities. Includes category filters and options to post a new request or volunteer support.
3. **Donation Hub**: Crowdfunding campaigns (winter blankets, mid-day school meals, primary medical clinics) with dynamic progress bars, recent contribution feeds, and a simulated secure UPI/Razorpay payment modal.
4. **Volunteer Portal**: Community drive listings (ration packing, weekend tutoring) with spot trackers and a private volunteer calendar tracking earned Karma points.
5. **Resource Directory**: Searchable directory of emergency services (112, 1098 child helpline) and walk-in facilities (Rain Baseras, free Mohalla clinics) with simulated street navigation route guides.

---

## 🛠️ Technology Stack

- **Frontend Core**: React.js, JavaScript, HTML5, Vanilla CSS
- **Scaffolding / Bundler**: Vite (Fast HMR compilation)
- **Icons**: Lucide React

---

## 💻 Startup & Installation Instructions

To run the application locally on your machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jasmeen786sharma/social-networking-site.git
   cd social-networking-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port specified in the console).

4. **Verify / Build production bundle**:
   ```bash
   npm run build
   ```
