import React from 'react';

export default function DesignSystemDemo() {
  return (
    <div className="nx-container-fluid nx-p-lg">
      {/* Header */}
      <div className="nx-mb-xl">
        <h1 style={{ color: 'var(--nx-primary)', marginBottom: 'var(--nx-space-sm)' }}>
          Nexora Design System
        </h1>
        <p className="nx-text-muted">
          Enterprise-grade UI components extracted from Webflow brand guidelines
        </p>
      </div>

      {/* Typography Section */}
      <section className="nx-card nx-card-body nx-mb-lg">
        <h2 className="nx-mb-md">Typography</h2>
        <div className="nx-flex-col nx-gap-md">
          <div>
            <h1>Heading 1 - 2.25rem</h1>
          </div>
          <div>
            <h2>Heading 2 - 1.5rem</h2>
          </div>
          <div>
            <h3>Heading 3 - 1.125rem</h3>
          </div>
          <div>
            <p>Body text - 0.95rem. This is standard paragraph text with normal line height for readability across all devices and screen sizes.</p>
          </div>
          <div>
            <p className="nx-text-secondary">Secondary text - For supporting information and less critical content.</p>
          </div>
          <div>
            <p className="nx-text-muted nx-text-sm">Muted small text - For subtle hints, labels, and metadata.</p>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="nx-card nx-card-body nx-mb-lg">
        <h2 className="nx-mb-md">Buttons</h2>
        
        <div className="nx-mb-md">
          <h3 className="nx-mb-sm">Primary Buttons</h3>
          <div className="nx-flex nx-gap-sm">
            <button className="nx-btn nx-btn-primary">Primary Button</button>
            <button className="nx-btn nx-btn-primary nx-btn-sm">Small Primary</button>
            <button className="nx-btn nx-btn-primary nx-btn-lg">Large Primary</button>
            <button className="nx-btn nx-btn-primary" disabled>Disabled</button>
          </div>
        </div>

        <div className="nx-mb-md">
          <h3 className="nx-mb-sm">Accent Buttons</h3>
          <div className="nx-flex nx-gap-sm">
            <button className="nx-btn nx-btn-accent">Accent Button</button>
            <button className="nx-btn nx-btn-accent nx-btn-sm">Small Accent</button>
            <button className="nx-btn nx-btn-accent" disabled>Disabled</button>
          </div>
        </div>

        <div className="nx-mb-md">
          <h3 className="nx-mb-sm">Secondary Buttons</h3>
          <div className="nx-flex nx-gap-sm">
            <button className="nx-btn nx-btn-secondary">Secondary Button</button>
            <button className="nx-btn nx-btn-secondary nx-btn-sm">Small Secondary</button>
            <button className="nx-btn nx-btn-secondary" disabled>Disabled</button>
          </div>
        </div>

        <div>
          <h3 className="nx-mb-sm">Danger Buttons</h3>
          <div className="nx-flex nx-gap-sm">
            <button className="nx-btn nx-btn-danger">Danger Button</button>
            <button className="nx-btn nx-btn-danger" disabled>Disabled</button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="nx-mb-lg">
        <h2 className="nx-mb-md">Cards</h2>
        <div className="nx-grid nx-grid-3">
          <div className="nx-card">
            <div className="nx-card-header">
              <h3>Standard Card</h3>
            </div>
            <div className="nx-card-body">
              <p>Card with header and body. Standard padding and borders following Nexora design tokens.</p>
            </div>
            <div className="nx-card-footer">
              <button className="nx-btn nx-btn-primary nx-btn-sm">Action</button>
            </div>
          </div>

          <div className="nx-card nx-card-large">
            <h3 className="nx-mb-sm">Large Card</h3>
            <p className="nx-text-secondary">Increased padding for emphasis. No header or footer, just spacious content area.</p>
          </div>

          <div className="nx-card nx-card-compact">
            <h3 className="nx-mb-sm nx-text-lg">Compact Card</h3>
            <p className="nx-text-sm nx-text-muted">Reduced padding for dense layouts or list items.</p>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="nx-card nx-card-body nx-mb-lg">
        <h2 className="nx-mb-md">Badges</h2>
        <div className="nx-flex nx-gap-sm" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
          <span className="nx-badge nx-badge-success">Success</span>
          <span className="nx-badge nx-badge-warning">Warning</span>
          <span className="nx-badge nx-badge-error">Error</span>
          <span className="nx-badge nx-badge-info">Info</span>
          <span className="nx-badge nx-badge-neutral">Neutral</span>
        </div>
      </section>

      {/* Stats Widgets Section */}
      <section className="nx-mb-lg">
        <h2 className="nx-mb-md">Dashboard Statistics</h2>
        <div className="nx-grid nx-grid-4">
          <div className="nx-stat-card">
            <div className="nx-stat-label">Total Students</div>
            <div className="nx-stat-value">1,248</div>
            <div className="nx-stat-description">Active enrollments</div>
          </div>

          <div className="nx-stat-card">
            <div className="nx-stat-label">Average Attendance</div>
            <div className="nx-stat-value" style={{ color: 'var(--nx-accent)' }}>94%</div>
            <div className="nx-stat-description">Last 30 days</div>
          </div>

          <div className="nx-stat-card">
            <div className="nx-stat-label">Active Courses</div>
            <div className="nx-stat-value">42</div>
            <div className="nx-stat-description">This semester</div>
          </div>

          <div className="nx-stat-card">
            <div className="nx-stat-label">Faculty Members</div>
            <div className="nx-stat-value">87</div>
            <div className="nx-stat-description">Teaching staff</div>
          </div>
        </div>
      </section>

      {/* Tables Section */}
      <section className="nx-mb-lg">
        <h2 className="nx-mb-md">Data Tables</h2>
        
        <div className="nx-card nx-mb-md">
          <div className="nx-card-header">
            <h3>Recent Attendance</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="nx-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Smith</td>
                  <td>Computer Science 101</td>
                  <td>2026-01-23</td>
                  <td><span className="nx-badge nx-badge-success">Present</span></td>
                </tr>
                <tr>
                  <td>Sarah Johnson</td>
                  <td>Mathematics 201</td>
                  <td>2026-01-23</td>
                  <td><span className="nx-badge nx-badge-success">Present</span></td>
                </tr>
                <tr>
                  <td>Mike Davis</td>
                  <td>Physics 301</td>
                  <td>2026-01-23</td>
                  <td><span className="nx-badge nx-badge-warning">Late</span></td>
                </tr>
                <tr>
                  <td>Emily Brown</td>
                  <td>Chemistry 202</td>
                  <td>2026-01-23</td>
                  <td><span className="nx-badge nx-badge-error">Absent</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="nx-card">
          <div className="nx-card-header">
            <h3>Student Results</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="nx-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Course</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice Cooper</td>
                  <td>Data Structures</td>
                  <td>92</td>
                  <td>A-</td>
                  <td><span className="nx-badge nx-badge-success">Pass</span></td>
                </tr>
                <tr>
                  <td>Bob Wilson</td>
                  <td>Algorithms</td>
                  <td>88</td>
                  <td>B+</td>
                  <td><span className="nx-badge nx-badge-success">Pass</span></td>
                </tr>
                <tr>
                  <td>Carol Martinez</td>
                  <td>Database Systems</td>
                  <td>76</td>
                  <td>C+</td>
                  <td><span className="nx-badge nx-badge-warning">Review</span></td>
                </tr>
                <tr>
                  <td>David Lee</td>
                  <td>Web Development</td>
                  <td>95</td>
                  <td>A</td>
                  <td><span className="nx-badge nx-badge-success">Pass</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Form Inputs Section */}
      <section className="nx-card nx-card-body nx-mb-lg">
        <h2 className="nx-mb-md">Form Inputs</h2>
        <div className="nx-flex-col nx-gap-md" style={{ maxWidth: '500px' }}>
          <div>
            <label className="nx-block nx-mb-xs nx-weight-semibold">Text Input</label>
            <input type="text" className="nx-input" placeholder="Enter text..." />
          </div>
          <div>
            <label className="nx-block nx-mb-xs nx-weight-semibold">Email Input</label>
            <input type="email" className="nx-input" placeholder="user@example.com" />
          </div>
          <div>
            <label className="nx-block nx-mb-xs nx-weight-semibold">Disabled Input</label>
            <input type="text" className="nx-input" value="Disabled field" disabled />
          </div>
        </div>
      </section>

      {/* Responsive Grid Section */}
      <section className="nx-mb-lg">
        <h2 className="nx-mb-md">Responsive Grid System</h2>
        <div className="nx-grid nx-grid-auto-fit">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="nx-card nx-card-body nx-text-center">
              <h3>Grid Item {num}</h3>
              <p className="nx-text-muted">Auto-responsive layout</p>
            </div>
          ))}
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="nx-card nx-card-body">
        <h2 className="nx-mb-md">Color Palette</h2>
        <div className="nx-grid nx-grid-4">
          <div>
            <div style={{
              height: '80px',
              backgroundColor: 'var(--nx-primary)',
              borderRadius: 'var(--nx-radius-md)',
              marginBottom: 'var(--nx-space-sm)',
            }}></div>
            <div className="nx-weight-semibold">Primary</div>
            <div className="nx-text-sm nx-text-muted">#1e3a8a</div>
          </div>

          <div>
            <div style={{
              height: '80px',
              backgroundColor: 'var(--nx-accent)',
              borderRadius: 'var(--nx-radius-md)',
              marginBottom: 'var(--nx-space-sm)',
            }}></div>
            <div className="nx-weight-semibold">Accent</div>
            <div className="nx-text-sm nx-text-muted">#10b981</div>
          </div>

          <div>
            <div style={{
              height: '80px',
              backgroundColor: 'var(--nx-text-main)',
              borderRadius: 'var(--nx-radius-md)',
              marginBottom: 'var(--nx-space-sm)',
            }}></div>
            <div className="nx-weight-semibold">Text Main</div>
            <div className="nx-text-sm nx-text-muted">#0f172a</div>
          </div>

          <div>
            <div style={{
              height: '80px',
              backgroundColor: 'var(--nx-bg-muted)',
              border: '1px solid var(--nx-border-light)',
              borderRadius: 'var(--nx-radius-md)',
              marginBottom: 'var(--nx-space-sm)',
            }}></div>
            <div className="nx-weight-semibold">Background Muted</div>
            <div className="nx-text-sm nx-text-muted">#f1f5f9</div>
          </div>
        </div>
      </section>
    </div>
  );
}
