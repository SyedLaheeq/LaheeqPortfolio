<style>
  body {
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
    color: #1e293b;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
  .wrapper { max-width: 950px !important; }

  .about-container {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    border-top: 6px solid #4F46E5;
    margin-top: 2rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: #4F46E5;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
  }
  .back-link:hover { text-decoration: underline; }

  .content-grid {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }

  .profile-img {
    width: 300px;
    border-radius: 12px;
    border: 5px solid #4F46E5;
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.4);
  }

  h1 { color: #0f172a; font-size: 2.5em; margin-top: 0; border: none; }
  h2 { color: #4F46E5; font-size: 1.5em; margin-top: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
  
  p { font-size: 1.1em; line-height: 1.7; color: #475569; margin-bottom: 1rem; }

  /* Language Badges */
  .lang-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 1rem;
  }
  .lang-badge {
    background: #EEECFF;
    color: #4F46E5;
    padding: 8px 16px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 0.95em;
    border: 1px solid #C7D2FE;
  }

  @media (max-width: 768px) {
    .content-grid { flex-direction: column; align-items: center; text-align: center; }
  }
</style>

<div class="about-container">
  <a href="index.html" class="back-link">&larr; Back to Portfolio</a>
  
  <div class="content-grid">
    <img src="profile.jpg" alt="Laheeq Syed" class="profile-img">
    
    <div class="text-content">
      <h1>About Laheeq Syed</h1>
      <p>I am a Master's candidate in Computer Science at Uppsala University, currently on a sabbatical from <strong>Tata Consultancy Services</strong>. My professional background is rooted in building high-performance, enterprise-grade backend infrastructure.</p>
      <p>Whether I am acting as a Lead Java Backend Developer to optimize logistics routes or architecting massive Python data pipelines to parse 39-million-row social graphs, I specialize in systems that require absolute scalability, security, and low latency.</p>
      
      <h2>Languages</h2>
      <div class="lang-grid">
        <span class="lang-badge">English (Fluent)</span>
        <span class="lang-badge">Swedish (Conversational)</span>
        <span class="lang-badge">Hindi (Fluent)</span>
        <span class="lang-badge">Urdu (Fluent)</span>
        <span class="lang-badge">Telugu (Native/Fluent)</span>
        <span class="lang-badge">Arabic (Read & Write)</span>
      </div>
    </div>
  </div>
</div>
