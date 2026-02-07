import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function StaffDashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const institution = localStorage.getItem('nexora_institution_name') || 'Your Institution';
  const staffName = localStorage.getItem('nexora_full_name') || user?.email?.split('@')[0] || 'Faculty';

  const handleLogout = async () => {
    await logout();
    localStorage.clear();
    navigate('/access');
  };

  const changeRole = () => {
    localStorage.removeItem('nexora_role_context');
    navigate('/platform');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f1428 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", sans-serif',
      color: '#f1f5f9',
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(30, 41, 59, 0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #c084fc 0%, #e879f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            NEXORA
          </h1>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: '#94a3b8' }}>
            {institution}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
            👨‍🏫 {staffName}
          </span>
          <button
            onClick={changeRole}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: '#cbd5e1',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Change Role
          </button>
          <button
            onClick={handleLogout}
            style={{
              background: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '8px',
              padding: '0.5rem 1rem',
              color: '#fca5a5',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '24px',
          padding: '4rem 2rem',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>👨‍🏫</div>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            margin: '0 0 1rem 0',
            background: 'linear-gradient(135deg, #c084fc 0%, #e879f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Staff / Faculty Portal
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#94a3b8',
            marginBottom: '3rem',
            lineHeight: '1.8',
          }}>
            Coming Soon
          </p>

          {/* Feature Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}>
            {[
              { icon: '📚', title: 'My Classes', desc: 'Manage your classes' },
              { icon: '✍️', title: 'Grade Students', desc: 'Enter marks & grades' },
              { icon: '📋', title: 'Attendance', desc: 'Mark attendance' },
              { icon: '📝', title: 'Assignments', desc: 'Create & grade tasks' },
              { icon: '📊', title: 'Analytics', desc: 'View performance insights' },
              { icon: '📢', title: 'Announcements', desc: 'Communicate with students' },
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.4)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#f1f5f9' }}>
                  {feature.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#64748b',
        fontSize: '0.875rem',
      }}>
        <p style={{ margin: 0 }}>© 2026 Chatake Innoworks Pvt. Ltd. | Powered by Nexora</p>
      </footer>
    </div>
  );
}
