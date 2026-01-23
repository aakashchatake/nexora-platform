import React, { useState } from 'react';

export default function PlatformGateway() {
  const [formData, setFormData] = useState({
    instituteId: '',
    adminEmail: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulated submit - no backend logic yet
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--nexora-bg-secondary)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'var(--spacing-lg)',
    }}>
      {/* Main Container */}
      <div style={{
        width: '100%',
        maxWidth: '420px',
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--nexora-primary-blue)',
            marginBottom: 'var(--spacing-sm)',
          }}>
            NEXORA
          </div>
          <p style={{
            color: 'var(--nexora-text-muted)',
            fontSize: '0.9rem',
            margin: 0,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontWeight: 'var(--font-weight-semibold)',
          }}>
            Institutional Access Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="card" style={{
          padding: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)',
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: 'var(--spacing-sm)',
            color: 'var(--nexora-primary-blue)',
            fontSize: '1.5rem',
          }}>
            Sign in to your Nexora Platform
          </h2>
          
          <p style={{
            color: 'var(--nexora-text-secondary)',
            fontSize: '0.95rem',
            marginBottom: 'var(--spacing-lg)',
            margin: '0 0 var(--spacing-lg) 0',
          }}>
            For universities, colleges, and institutions
          </p>

          <form onSubmit={handleSubmit}>
            {/* Institute ID / Domain Field */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--nexora-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: '0.9rem',
              }}>
                Institute ID or Domain
              </label>
              <input
                type="text"
                name="instituteId"
                placeholder="e.g., university.nexora.io"
                value={formData.instituteId}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: `1px solid var(--nexora-border)`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  backgroundColor: 'var(--nexora-surface)',
                  color: 'var(--nexora-text-primary)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--nexora-primary-blue)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 138, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--nexora-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Admin Email Field */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--nexora-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: '0.9rem',
              }}>
                Admin Email
              </label>
              <input
                type="email"
                name="adminEmail"
                placeholder="admin@institution.edu"
                value={formData.adminEmail}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: `1px solid var(--nexora-border)`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  backgroundColor: 'var(--nexora-surface)',
                  color: 'var(--nexora-text-primary)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--nexora-primary-blue)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 138, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--nexora-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--nexora-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: '0.9rem',
              }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: `1px solid var(--nexora-border)`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  backgroundColor: 'var(--nexora-surface)',
                  color: 'var(--nexora-text-primary)',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--nexora-primary-blue)';
                  e.target.style.boxShadow = '0 0 0 3px rgba(30, 58, 138, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--nexora-border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Primary Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary"
              style={{
                width: '100%',
                padding: 'var(--spacing-md)',
                fontSize: '1rem',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.7 : 1,
              }}
            >
              {isLoading ? 'Authenticating...' : 'Continue to Nexora'}
            </button>
          </form>
        </div>

        {/* Secondary Link */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <button
            type="button"
            onClick={() => console.log('Student/Faculty login - not yet implemented')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--nexora-text-muted)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'color 0.2s',
              fontFamily: 'inherit',
              padding: 0,
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--nexora-primary-blue)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--nexora-text-muted)'}
          >
            Looking for student or faculty login?
          </button>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-md)',
          borderTop: `1px solid var(--nexora-border)`,
        }}>
          <p style={{
            color: 'var(--nexora-text-muted)',
            fontSize: '0.85rem',
            margin: 0,
            marginBottom: 'var(--spacing-xs)',
          }}>
            Powered by Nexora
          </p>
          <p style={{
            color: 'var(--nexora-text-muted)',
            fontSize: '0.85rem',
            margin: 0,
          }}>
            Secure institutional platform
          </p>
        </div>
      </div>
    </div>
  );
}
