import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { BookOpen, FileText, Settings, Layers, Code, GitBranch, ArrowLeft } from 'lucide-react';
import './index.css';

// Import the README dynamically using Vite's raw import
import rootReadme from '../../README.md?raw';

function App() {
  const [content, setContent] = useState('');
  const [activeTab, setActiveTab] = useState('readme');
  const [currentPath, setCurrentPath] = useState(''); // Empty means root
  const [history, setHistory] = useState([]); // To allow going back

  const loadMarkdown = async (filePath) => {
    try {
      // Use local @fs for dev, and GitHub raw for production hosting
      const baseUrl = import.meta.env.PROD 
        ? 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/'
        : '/@fs/e:/system-design-primer/';
        
      const url = baseUrl + filePath;
      const response = await fetch(url);
      if (response.ok) {
        const text = await response.text();
        setContent(text);
        setCurrentPath(filePath);
        window.scrollTo(0, 0);
      } else {
        console.error("Failed to load:", filePath);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Initial load
    loadMarkdown('README.md');
  }, []);

  const handleLinkClick = (e, href) => {
    if (!href) return;
    
    // External link
    if (href.startsWith('http')) {
      return; 
    }
    
    e.preventDefault();

    // Anchor link on the same page
    if (href.startsWith('#')) {
      // Find element by id or name
      const targetId = href.substring(1);
      const element = document.getElementById(targetId) || document.getElementsByName(targetId)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Local file link
    // Resolve relative path
    let newPath = href;
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
    
    if (href.startsWith('./')) {
      newPath = currentDir + href.substring(2);
    } else if (href.startsWith('../')) {
      // simple handling for ../
      const dirParts = currentDir.split('/').filter(Boolean);
      let hrefParts = href.split('/');
      while (hrefParts[0] === '..') {
        hrefParts.shift();
        dirParts.pop();
      }
      newPath = (dirParts.length > 0 ? dirParts.join('/') + '/' : '') + hrefParts.join('/');
    } else if (!href.startsWith('/')) {
      newPath = currentDir + href;
    } else {
      newPath = href.substring(1); // absolute from root
    }
    
    // Remove query params or hashes for the file path if any
    const hashIndex = newPath.indexOf('#');
    let pathWithoutHash = newPath;
    let hash = '';
    if (hashIndex !== -1) {
      pathWithoutHash = newPath.substring(0, hashIndex);
      hash = newPath.substring(hashIndex);
    }

    if (pathWithoutHash.endsWith('.md') || pathWithoutHash.endsWith('.txt') || pathWithoutHash.indexOf('.') === -1) {
      // Assuming no extension means a folder with README.md or just a markdown file
      let finalPath = pathWithoutHash;
      if (pathWithoutHash.indexOf('.') === -1 && !pathWithoutHash.endsWith('/')) {
         finalPath += '/README.md';
      }
      
      setHistory(prev => [...prev, currentPath]);
      loadMarkdown(finalPath).then(() => {
        if (hash) {
          setTimeout(() => {
            const targetId = hash.substring(1);
            const element = document.getElementById(targetId) || document.getElementsByName(targetId)[0];
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      });
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevPath = history[history.length - 1];
      setHistory(history.slice(0, -1));
      loadMarkdown(prevPath);
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar glass">
        <div className="logo">
          <Layers className="nav-icon" />
          System Design
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, paddingLeft: '1rem', marginBottom: '0.5rem' }}>Navigation</p>
          <button 
            className={`nav-item ${activeTab === 'readme' ? 'active' : ''}`}
            onClick={() => setActiveTab('readme')}
          >
            <BookOpen className="nav-icon" /> Primer (README)
          </button>
          <button 
            className={`nav-item ${activeTab === 'solutions' ? 'active' : ''}`}
            onClick={() => setActiveTab('solutions')}
          >
            <Code className="nav-icon" /> Solutions
          </button>
          <button 
            className={`nav-item ${activeTab === 'contributing' ? 'active' : ''}`}
            onClick={() => setActiveTab('contributing')}
          >
            <GitBranch className="nav-icon" /> Contributing
          </button>
        </div>
        
        <div style={{ marginTop: 'auto' }}>
          <button className="nav-item">
            <Settings className="nav-icon" /> Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="animate-fade-in" style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {history.length > 0 && (
                <button 
                  onClick={handleBack} 
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  title="Go Back"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
              <div>
                <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: '0.25rem' }}>Interactive Documentation</p>
                <h1 style={{ margin: 0, fontSize: '2rem' }}>{currentPath === 'README.md' ? 'The System Design Primer' : currentPath}</h1>
              </div>
            </div>
          </div>
        </header>

        {/* Markdown Renderer */}
        <div className="glass-card animate-fade-in markdown-body">
          {content ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw, rehypeSlug]}
              components={{
                img: ({node, ...props}) => {
                  let src = props.src;
                  if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                    // Resolve relative to current dir
                    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
                    if (src.startsWith('./')) {
                      src = currentDir + src.substring(2);
                    } else if (src.startsWith('../')) {
                      const dirParts = currentDir.split('/').filter(Boolean);
                      let srcParts = src.split('/');
                      while (srcParts[0] === '..') {
                        srcParts.shift();
                        dirParts.pop();
                      }
                      src = (dirParts.length > 0 ? dirParts.join('/') + '/' : '') + srcParts.join('/');
                    } else if (!src.startsWith('/')) {
                      src = currentDir + src;
                    } else {
                      src = src.substring(1);
                    }
                    
                    const baseUrl = import.meta.env.PROD 
                      ? 'https://raw.githubusercontent.com/donnemartin/system-design-primer/master/'
                      : '/@fs/e:/system-design-primer/';
                      
                    src = baseUrl + src;
                  }
                  return <img {...props} src={src} style={{maxWidth: '100%'}} alt={props.alt || ''} />;
                },
                a: ({node, ...props}) => {
                  return <a {...props} onClick={(e) => handleLinkClick(e, props.href)} />;
                }
              }}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <div className="loader-container">
              Loading documentation...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
