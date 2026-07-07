<style>
  body {
    background: #0d1117; /* Deep Tech Dark */
    color: #c9d1d9;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
  .wrapper { max-width: 950px !important; }

  .about-container {
    background: #161b22;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 229, 255, 0.15); /* Cyan Glow */
    border: 1px solid #30363d;
    border-top: 4px solid #00E5FF; /* Neon Cyan */
    margin-top: 2rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: #00E5FF;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: text-shadow 0.3s;
  }
  .back-link:hover { 
    text-shadow: 0 0 10px #00E5FF; 
  }

  .content-grid {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }

  .profile-img {
    width: 300px;
    border-radius: 8px;
    border: 2px solid #FF007F; /* Neon Magenta/Pink */
    box-shadow: 0 0 30px rgba(255, 0, 127, 0.4); /* Magenta Glow */
  }

  h1 { 
    color: #ffffff; 
    font-size: 2.5em; 
    margin-top: 0; 
    border: none; 
    text-shadow: 0 0 10px rgba(255,255,255,0.2); 
  }
  
  h2 { 
    color: #00E5FF; 
    font-size: 1.5em; 
    margin-top: 2rem; 
    border-bottom: 1px solid #30363d; 
    padding-bottom: 10px; 
    text-transform: uppercase; 
    letter-spacing: 2px;
  }
  
  p { 
    font-size: 1.1em; 
    line-height: 1.7; 
    color: #8b949e; 
    margin-bottom: 1rem; 
  }
  
  strong { 
    color: #00E5FF; 
  }

  /* Tech Badges */
  .lang-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 1rem;
  }
  .lang-badge {
    background: rgba(0, 229, 255, 0.05);
    color: #00E5FF;
    padding: 8px 16px;
    border-radius: 4px; /* Sharp tech edges */
    font-weight: bold;
    font-size: 0.95em;
    border: 1px solid #00E5FF;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    .content-grid { flex-direction: column; align-items: center; text-align: center; }
  }
</style>

<div class="about-container">
  <a href="index.html" class="back-link">&larr; System.Back()</a>
  
  <div class="content-grid">
    <img src="260601-masterstudenter-107.JPG" alt="Laheeq Syed" class="profile-img">
    
    <div class="text-content">
      <h1>About Laheeq Syed</h1>
      <p>I am a Master's candidate in Computer Science at Uppsala University. Previously, I built a strong foundation in enterprise infrastructure as a Systems Engineer at <strong>Tata Consultancy Services</strong> until 2024.</p>
      <p>Whether I am acting as a Lead Java Backend Developer to optimize logistics routes or architecting massive Python data pipelines to parse 39-million-row social graphs, I specialize in systems that require absolute scalability, security, and low latency.</p>
      
      <h2>Language Protocols</h2>
      <div class="lang-grid">
        <span class="lang-badge">English (Fluent)</span>
        <span class="lang-badge">Swedish (Conversational)</span>
        <span class="lang-badge">Hindi (Fluent)</span>
        <span class="lang-badge">Urdu (Fluent)</span>
        <span class="lang-badge">Telugu (Native)</span>
        <span class="lang-badge">Arabic (Read & Write)</span>
      </div>
    </div>
  </div>
</div>
