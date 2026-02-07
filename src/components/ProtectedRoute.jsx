import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * ProtectedRoute Component
 * Wraps routes that require authentication
 * Guards:
 * 1. If not authenticated -> redirect to /platform
 * 2. If authenticated but no institute -> redirect to /access
 * 3. InstituteLayout will handle loading states (no redirect loop)
 */
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loader while auth is being checked
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

  // Guard: No auth token -> redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/platform" replace />;
  }

  // Guard: Auth exists but no institute context -> redirect to access gateway
  const instituteId = localStorage.getItem('nexora_institute_id');
  if (!instituteId) {
    console.warn('Authenticated but no institute context, redirecting to /access');
    return <Navigate to="/access" replace />;
  }

  // All guards passed, render protected content
  // InstituteLayout will handle institute loading states
  return children;
}
