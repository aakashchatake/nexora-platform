import React, { useState } from 'react';

export default function NexoraDesignSystemDemo() {
  const [activeTab, setActiveTab] = useState('typography');

  return (
    <div style={{
      backgroundColor: 'var(--nexora-bg-secondary)',
      minHeight: '100vh',
      padding: 'var(--spacing-lg)',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 style={{
          color: 'var(--nexora-primary-blue)',
          marginBottom: 'var(--spacing-sm)',
          fontSize: '2.5rem',
          fontWeight: 'var(--font-weight-bold)',
        }}>
          Nexora Design System
        </h1>
        <p style={{
          color: 'var(--nexora-text-muted)',
          fontSize: '1rem',
          margin: 0,
        }}>
          Enterprise-grade UI components for academic management
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-sm)',
        marginBottom: 'var(--spacing-lg)',
        flexWrap: 'wrap',
      }}>
        {[
          { id: 'typography', label: 'Typography' },
          { id: 'buttons', label: 'Buttons' },
          { id: 'cards', label: 'Cards & Badges' },
          { id: 'dashboard', label: 'Dashboard' },
          { id: 'tables', label: 'Tables' },
          { id: 'responsive', label: 'Responsive Grid' },
          { id: 'colors', label: 'Color Palette' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: activeTab === tab.id
                ? 'var(--nexora-primary-blue)'
                : 'var(--nexora-surface)',
              color: activeTab === tab.id
                ? 'white'
                : 'var(--nexora-text-primary)',
              border: `2px solid ${activeTab === tab.id
                ? 'var(--nexora-primary-blue)'
                : 'var(--nexora-border)'}`,
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontWeight: 'var(--font-weight-semibold)',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {activeTab === 'typography' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Typography</h2>
          
          <div className="card">
            <h1>Heading 1 - 2rem</h1>
            <h2>Heading 2 - 1.5rem</h2>
            <h3>Heading 3 - 1.25rem</h3>
            <p>Body text - Regular weight (400). This is standard paragraph text with normal line height for readability.</p>
            <p style={{ color: 'var(--nexora-text-secondary)' }}>Secondary text - For less important information or helper text.</p>
            <p style={{ color: 'var(--nexora-text-muted)' }}>Muted text - For subtle UI labels and hints.</p>
          </div>
        </div>
      )}

      {activeTab === 'buttons' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Buttons</h2>
          
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Primary Buttons</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              <button className="btn-primary">Primary Button</button>
              <button className="btn-primary" disabled>Disabled Primary</button>
            </div>

            <h3>Accent Buttons</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              <button className="btn-accent">Accent Button</button>
              <button className="btn-accent" disabled>Disabled Accent</button>
            </div>

            <h3>Secondary Buttons</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              <button className="btn-secondary">Secondary Button</button>
              <button className="btn-secondary" disabled>Disabled Secondary</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cards' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Cards & Badges</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--nexora-primary-blue)' }}>Standard Card</h3>
              <p>Card content with consistent styling and shadows.</p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0, color: 'var(--nexora-accent-green)' }}>Accent Card</h3>
              <p>Card highlighting important information.</p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0 }}>Compact Card</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Smaller, condensed layout for listings.</p>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Badge Examples</h3>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="badge-primary">Primary</span>
              <span className="badge-accent">Accent</span>
              <span className="badge-success">Success</span>
              <span className="badge-warning">Warning</span>
              <span className="badge-error">Error</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Dashboard Mock</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
              <p style={{ color: 'var(--nexora-text-muted)', margin: '0 0 var(--spacing-sm) 0' }}>Total Courses</p>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--nexora-primary-blue)',
                margin: '0 0 var(--spacing-sm) 0',
              }}>8</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--nexora-text-secondary)' }}>Active Enrollment</div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
              <p style={{ color: 'var(--nexora-text-muted)', margin: '0 0 var(--spacing-sm) 0' }}>Average Grade</p>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--nexora-accent-green)',
                margin: '0 0 var(--spacing-sm) 0',
              }}>A-</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--nexora-text-secondary)' }}>Excellent Performance</div>
            </div>

            <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-lg)' }}>
              <p style={{ color: 'var(--nexora-text-muted)', margin: '0 0 var(--spacing-sm) 0' }}>Attendance</p>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--nexora-primary-blue)',
                margin: '0 0 var(--spacing-sm) 0',
              }}>94%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--nexora-text-secondary)' }}>Consistent & Reliable</div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'tables' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Tables</h2>
          
          <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h3 style={{ marginTop: 0 }}>Attendance Table</h3>
            <table className="table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Course</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-15</td>
                  <td>React Advanced</td>
                  <td><span className="badge-success">Present</span></td>
                </tr>
                <tr>
                  <td>2024-01-14</td>
                  <td>Database Design</td>
                  <td><span className="badge-success">Present</span></td>
                </tr>
                <tr>
                  <td>2024-01-12</td>
                  <td>Web Security</td>
                  <td><span className="badge-warning">Late</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Results Table</h3>
            <table className="table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Advanced</td>
                  <td>92</td>
                  <td>A-</td>
                  <td><span className="badge-success">Pass</span></td>
                </tr>
                <tr>
                  <td>Database Design</td>
                  <td>88</td>
                  <td>B+</td>
                  <td><span className="badge-success">Pass</span></td>
                </tr>
                <tr>
                  <td>Web Security</td>
                  <td>78</td>
                  <td>C+</td>
                  <td><span className="badge-warning">Review</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'responsive' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Responsive Grid</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-md)',
          }}>
            {['Grid Item 1', 'Grid Item 2', 'Grid Item 3', 'Grid Item 4', 'Grid Item 5', 'Grid Item 6'].map((item, idx) => (
              <div key={idx} className="card" style={{ aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ textAlign: 'center', margin: 0, color: 'var(--nexora-primary-blue)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 'var(--spacing-lg)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--nexora-surface)',
            borderRadius: 'var(--radius-md)',
            border: `1px solid var(--nexora-border)`,
            color: 'var(--nexora-text-muted)',
            fontSize: '0.9rem',
          }}>
            <strong>Responsive Behavior:</strong> Grid automatically adjusts columns on smaller screens. Desktop: 3-column, Tablet (768px): 2-column, Mobile (480px): 1-column
          </div>
        </div>
      )}

      {activeTab === 'colors' && (
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-md)',
          }}>Color Palette</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)' }}>
            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#1e3a8a',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)' }}>Primary Blue</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#1e3a8a</p>
            </div>

            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#10b981',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)' }}>Accent Green</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#10b981</p>
            </div>

            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#f8fafc',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
                border: '1px solid var(--nexora-border)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)' }}>Background</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#f8fafc</p>
            </div>

            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
                border: '1px solid var(--nexora-border)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)' }}>Surface/Card</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#ffffff</p>
            </div>

            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#0f172a',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)', color: '#ffffff' }}>Text Primary</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#0f172a</p>
            </div>

            <div className="card">
              <div style={{
                height: '100px',
                backgroundColor: '#64748b',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}></div>
              <p style={{ margin: '0 0 var(--spacing-xs) 0', fontWeight: 'var(--font-weight-semibold)', color: '#ffffff' }}>Text Muted</p>
              <p style={{ margin: 0, color: 'var(--nexora-text-muted)', fontSize: '0.9rem' }}>#64748b</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
