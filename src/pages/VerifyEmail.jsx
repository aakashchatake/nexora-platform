import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setError('No verification token provided');
      setLoading(false);
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/auth/verify-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Verification failed');
        }

        setVerified(true);
        setLoading(false);

        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/platform');
        }, 3000);
      } catch (err) {
        setError(err.message || 'An error occurred during verification');
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--nexora-bg-secondary)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'var(--spacing-lg)',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '3rem',
        textAlign: 'center',
        maxWidth: '500px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}>
        {loading && (
          <>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>
              ⏳
            </div>
            <h2 style={{ color: 'var(--nexora-primary-blue)', marginBottom: '0.5rem' }}>
              Verifying Your Email
            </h2>
            <p style={{ color: 'var(--nexora-text-muted)', marginBottom: '1.5rem' }}>
              Please wait while we verify your email address...
            </p>
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #e0e0e0',
              borderTop: '3px solid var(--nexora-primary-blue)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto',
            }} />
          </>
        )}

        {verified && !loading && (
          <>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>
              ✅
            </div>
            <h2 style={{ color: 'var(--nexora-success-green)', marginBottom: '0.5rem' }}>
              Email Verified!
            </h2>
            <p style={{ color: 'var(--nexora-text-muted)', marginBottom: '1.5rem' }}>
              Your email has been successfully verified. Redirecting to login...
            </p>
          </>
        )}

        {error && !loading && (
          <>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>
              ❌
            </div>
            <h2 style={{ color: '#d32f2f', marginBottom: '0.5rem' }}>
              Verification Failed
            </h2>
            <p style={{ color: '#d32f2f', marginBottom: '1rem' }}>
              {error}
            </p>
            <button
              onClick={() => navigate('/platform')}
              style={{
                backgroundColor: 'var(--nexora-primary-blue)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Back to Login
            </button>
          </>
        )}
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
