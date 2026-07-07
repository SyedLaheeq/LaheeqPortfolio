<style>
  /* 1. Base Background */
  body {
    background: #0d1117 !important;
    color: #c9d1d9 !important;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }
  
  /* 2. Override Jekyll Theme Defaults for Readability */
  h1, h2, h3, h4, h5, h6 { color: #00E5FF !important; }
  p, li { color: #c9d1d9 !important; }
  hr { border-color: #30363d !important; }
  
  /* Make the dropdown text visible and neon */
  summary {
    color: #00E5FF !important;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
  }
  summary code {
    color: #FF007F !important;
    background: rgba(255, 0, 127, 0.1) !important;
    border: 1px solid #FF007F;
  }
  details p, details a { color: #c9d1d9 !important; }
  details a:hover { color: #00E5FF !important; }

  .wrapper { 
    max-width: 950px !important; 
  }
  
  /* 3. Hero Header Styling */
  .hero-header {
    background: #161b22;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 229, 255, 0.15);
    text-align: center;
    border: 1px solid #30363d;
    border-top: 4px solid #00E5FF;
    margin-bottom: 3rem;
  }
  
  .btn-primary {
    display: inline-block;
    background: transparent;
    color: #00E5FF !important;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    border: 1px solid #00E5FF;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1.5rem;
    transition: all 0.3s;
    box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .btn-primary:hover { 
    background: #00E5FF; 
    color: #0d1117 !important;
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.6);
  }

  .btn-secondary {
    display: inline-block;
    background: transparent;
    color: #FF007F !important;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    border: 1px solid #FF007F;
    text-decoration: none;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-left: 10px;
    transition: all 0.3s;
    box-shadow: 0 0 10px rgba(255, 0, 127, 0.2);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-secondary:hover {
    background: #FF007F; 
    color: #ffffff !important;
    box-shadow: 0 0 20px rgba(255, 0, 127, 0.6);
  }
</style>

<div class="hero-header">
  <h1 style="border:none; margin:0; font-size:3.5em; color:#ffffff; text-shadow: 0 0 10px rgba(255,255,255,0.2);">Laheeq Syed</h1>
  <h2 style="color:#00E5FF; border:none; font-weight:600; text-transform: uppercase; letter-spacing: 2px; margin-top: 10px;">Software & Data Engineer</h2>
  <p style="font-size:1.1em; color:#8b949e; max-width:600px; margin:1rem auto;">Architecting high-performance enterprise backend systems and scalable machine learning data pipelines.</p>
  
  <div>
    <a href="about.html" class="btn-primary">Initialize Profile</a>
    <a href="https://github.com/SyedLaheeq" target="_blank" class="btn-secondary">Access GitHub</a>
  </div>
</div>



## Technical Arsenal

* **Backend & APIs:** Java, Spring Boot, Python, FastAPI, GraphQL, REST APIs
* **Data & ML:** Pandas, TensorFlow, Scikit-learn, SQL, Vector Databases (RAG)
* **Infrastructure & Platforms:** Apache Kafka, Docker, Kubernetes, CI/CD, Elasticsearch Concepts

---

## Project Archive
*(Click on any project to view details)*

<details>
  <summary><strong>Big Data: Social Graph Processing (FriendFeed)</strong> • <code>Python</code> <code>Pandas</code> <code>SQL</code></summary>
  <br>
  Engineered data pipelines to process and analyze a massive Facebook network dataset containing over 39 million relationship rows, classifying and mapping complex structural topologies to establish relationships among users.
  <br><br>
  <a href="https://github.com/SyedLaheeq/FriendFeed">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Secure Containerized Infrastructure (Secure-Computer-Systems)</strong> • <code>Docker</code> <code>Linux</code> <code>Security</code></summary>
  <br>
  Architected a Docker-based project focused on implementing strict application security measures and isolating backend systems, mitigating system vulnerabilities for secure deployment.
  <br><br>
  <a href="https://github.com/SyedLaheeq/Secure-Computer-Systems">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Master's Thesis Research (MasterThesis_LORA)</strong> • <code>Python</code> <code>MLOps</code></summary>
  <br>
  Efficient and robust fine-tuning for Distributed Machine Learning Models. Engineered automated MLOps pipelines to parse, clean, and process massive data batches across distributed Linux clusters.
  <br><br>
  <a href="https://github.com/SyedLaheeq/MasterThesis_LORA">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Real-Time Telemetry & Interactive Digital Twin (xr-industrial-portfolio)</strong> • <code>JavaScript</code> <code>Unity</code> <code>XR</code></summary>
  <br>
  Consolidated portfolio for an industrial XR project. Architected a real-time data ingestion pipeline to capture live hardware telemetry and stream it directly to an interactive Extended Reality (XR) environment, creating a dynamic digital twin.
  <br><br>
  <a href="https://github.com/SyedLaheeq/xr-industrial-portfolio">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Interactive Paint Application</strong> • <code>Python</code></summary>
  <br>
  An interactive paint application allowing users to create and edit visual content with customizable tools like brushes, colors, and shapes. Engineered to support real-time collaboration and advanced layer management.
  <br><br>
  <a href="https://github.com/SyedLaheeq/InteractivePaint">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Real-Time Sign Language Detection</strong> • <code>Python</code> <code>TensorFlow</code> <code>Jupyter Notebook</code></summary>
  <br>
  Developed a live computer vision model utilizing TensorFlow to detect and translate sign language in real-time via video feed.
  <br><br>
  <a href="https://github.com/SyedLaheeq/RealTime-Sign-language-Detection">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>Washington D.C. Bike Usage Analytics</strong> • <code>Python</code> <code>Jupyter Notebook</code></summary>
  <br>
  A data analytics project providing deep insights into the use cases, traffic patterns, and operational flow of public bikes in Washington D.C.
  <br><br>
  <a href="https://github.com/SyedLaheeq/BikeUsage">View Repository &rarr;</a>
</details>
<hr>

<details>
  <summary><strong>ADEM Final Version</strong> • <code>Python</code></summary>
  <br>
  Advanced Python implementation and data modeling project (Updated Jan 2025).
  <br><br>
  <a href="https://github.com/SyedLaheeq/ADEM_-Final_ver-">View Repository &rarr;</a>
</details>

<br>

*© 2026 Laheeq Syed. Engineered for Scalability.*
