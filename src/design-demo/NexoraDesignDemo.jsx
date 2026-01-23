import React from 'react';

/**
 * NexoraDesignDemo
 * 
 * Isolated demo component showcasing the Nexora design system.
 * This component demonstrates typography, cards, buttons, grid layout, and tables.
 * 
 * NOTE: This is a visual demo only - no backend integration, routing, or authentication.
 * Can be safely removed without affecting production code.
 */
const NexoraDesignDemo = () => {
  // Sample student data for demo tables
  const attendanceData = [
    { id: 1, date: '2024-01-22', status: 'Present', course: 'Mathematics 101' },
    { id: 2, date: '2024-01-21', status: 'Present', course: 'Physics 201' },
    { id: 3, date: '2024-01-20', status: 'Absent', course: 'Chemistry 101' },
    { id: 4, date: '2024-01-19', status: 'Present', course: 'English 150' },
  ];

  const resultsData = [
    { id: 1, subject: 'Mathematics', score: 92, grade: 'A', status: 'Excellent' },
    { id: 2, subject: 'Physics', score: 88, grade: 'A', status: 'Excellent' },
    { id: 3, subject: 'Chemistry', score: 75, grade: 'B', status: 'Good' },
    { id: 4, subject: 'English', score: 85, grade: 'A', status: 'Excellent' },
  ];

  return (
    <div className="page-container">
      {/* HEADER SECTION */}
      <section className="section-header">
        <h1 className="heading-1">Nexora Design System</h1>
        <p className="section-subtitle text-secondary">
          Visual showcase of the Nexora enterprise design language
        </p>
      </section>

      {/* TYPOGRAPHY SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Typography</h2>
        <div className="grid grid-2 gap-md">
          <div className="card">
            <h3 className="heading-3">Heading 1</h3>
            <p className="text-small text-muted">
              Main page title - bold and impactful
            </p>
          </div>
          <div className="card">
            <h4 className="heading-4">Heading 2</h4>
            <p className="text-small text-muted">
              Section heading - clear hierarchy
            </p>
          </div>
          <div className="card">
            <p className="text-body">Body text — regular paragraph content</p>
            <p className="text-small text-muted">
              This is smaller supporting text with muted color
            </p>
          </div>
          <div className="card">
            <p className="text-secondary">Secondary text color</p>
            <p className="text-light">Light text color for minimal importance</p>
          </div>
        </div>
      </section>

      {/* BUTTONS SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Buttons</h2>
        <div className="card">
          <div className="flex flex-gap-md flex-col">
            <div className="flex flex-gap-md">
              <button className="btn btn-primary">Primary Action</button>
              <button className="btn btn-accent">Accent Action</button>
              <button className="btn btn-secondary">Secondary</button>
            </div>
            <div className="flex flex-gap-md">
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-primary btn-small">Small Primary</button>
              <button className="btn btn-primary btn-large">Large Primary</button>
            </div>
            <div className="flex flex-gap-md">
              <button className="btn btn-primary" disabled>
                Disabled Primary
              </button>
              <button className="btn btn-secondary" disabled>
                Disabled Secondary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Card Components</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3 className="heading-4">Standard Card</h3>
            <p className="text-small text-secondary mt-md">
              This is a standard card with default padding and shadow.
            </p>
          </div>
          <div className="card card-large">
            <h3 className="heading-4">Large Card</h3>
            <p className="text-small text-secondary mt-md">
              This card has increased padding for prominent content.
            </p>
          </div>
          <div className="card card-compact">
            <h3 className="heading-4">Compact</h3>
            <p className="text-small text-secondary mt-md">
              Dense layout with reduced padding.
            </p>
          </div>
        </div>
      </section>

      {/* BADGES SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Badges & Labels</h2>
        <div className="card">
          <div className="flex flex-gap-md flex-col">
            <div className="flex flex-gap-md">
              <span className="badge badge-primary">Primary Badge</span>
              <span className="badge badge-accent">Accent Badge</span>
              <span className="badge badge-success">Success</span>
            </div>
            <div className="flex flex-gap-md">
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-error">Error</span>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD GRID SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Student Dashboard Layout</h2>
        <div className="grid grid-3">
          <div className="card">
            <div className="card-header">
              <h4 className="heading-4">Total Courses</h4>
            </div>
            <div className="flex flex-center">
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--nexora-primary-blue)' }}>
                8
              </span>
            </div>
            <p className="text-small text-muted mt-md text-center">Currently Enrolled</p>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="heading-4">Average Grade</h4>
            </div>
            <div className="flex flex-center">
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--nexora-accent-green)' }}>
                A-
              </span>
            </div>
            <p className="text-small text-muted mt-md text-center">85% Performance</p>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="heading-4">Attendance</h4>
            </div>
            <div className="flex flex-center">
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--nexora-primary-blue)' }}>
                94%
              </span>
            </div>
            <p className="text-small text-muted mt-md text-center">Present This Month</p>
          </div>
        </div>
      </section>

      {/* ATTENDANCE TABLE */}
      <section className="mb-xl">
        <h2 className="heading-2">Attendance Record</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record) => (
                <tr key={record.id}>
                  <td>{record.date}</td>
                  <td>{record.course}</td>
                  <td>
                    <span
                      className={`badge ${
                        record.status === 'Present' ? 'badge-success' : 'badge-error'
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* RESULTS TABLE */}
      <section className="mb-xl">
        <h2 className="heading-2">Academic Results</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {resultsData.map((result) => (
                <tr key={result.id}>
                  <td className="text-body">{result.subject}</td>
                  <td className="text-body">{result.score}/100</td>
                  <td>
                    <span
                      className={`badge ${
                        result.grade === 'A'
                          ? 'badge-success'
                          : result.grade === 'B'
                          ? 'badge-primary'
                          : 'badge-warning'
                      }`}
                    >
                      {result.grade}
                    </span>
                  </td>
                  <td className="text-secondary">{result.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COLOR PALETTE SECTION */}
      <section className="mb-xl">
        <h2 className="heading-2">Color Palette</h2>
        <div className="grid grid-4">
          <div className="card">
            <div
              style={{
                width: '100%',
                height: '60px',
                backgroundColor: 'var(--nexora-primary-blue)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}
            />
            <p className="text-small text-muted">Primary Blue</p>
            <p className="text-body font-weight-medium">#1e3a8a</p>
          </div>
          <div className="card">
            <div
              style={{
                width: '100%',
                height: '60px',
                backgroundColor: 'var(--nexora-accent-green)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}
            />
            <p className="text-small text-muted">Accent Green</p>
            <p className="text-body font-weight-medium">#10b981</p>
          </div>
          <div className="card">
            <div
              style={{
                width: '100%',
                height: '60px',
                backgroundColor: 'var(--nexora-bg-secondary)',
                border: '1px solid rgba(15, 23, 42, 0.1)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}
            />
            <p className="text-small text-muted">Background</p>
            <p className="text-body font-weight-medium">#f8fafc</p>
          </div>
          <div className="card">
            <div
              style={{
                width: '100%',
                height: '60px',
                backgroundColor: 'var(--nexora-success)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
              }}
            />
            <p className="text-small text-muted">Success Green</p>
            <p className="text-body font-weight-medium">#10b981</p>
          </div>
        </div>
      </section>

      {/* SPACING & GRID DEMO */}
      <section className="mb-xl">
        <h2 className="heading-2">Responsive Grid Demo</h2>
        <div className="grid grid-2">
          <div className="card">
            <h4 className="heading-4">2-Column Grid</h4>
            <p className="text-small text-secondary">
              This grid automatically adjusts to 1 column on mobile devices.
            </p>
          </div>
          <div className="card">
            <h4 className="heading-4">Flexible Layout</h4>
            <p className="text-small text-secondary">
              Uses modern CSS Grid with auto-fit for responsive behavior.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER INFO */}
      <section>
        <div className="card" style={{ backgroundColor: 'var(--nexora-bg-secondary)' }}>
          <div className="flex flex-between">
            <div>
              <h4 className="heading-4">Design System Complete</h4>
              <p className="text-small text-secondary">
                This demo showcases the Nexora design language with enterprise-grade quality.
              </p>
            </div>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexoraDesignDemo;
