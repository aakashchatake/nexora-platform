import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * ProtectedRoute Component
 * Wraps routes that require authentication
 * Redirects to login if not authenticated
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'var(--nexora-bg-secondary)',
      }}>
        <div style={{
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '1rem',
          }}>
            ⏳
          </div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/platform" replace />;
  }

  return children;
}
