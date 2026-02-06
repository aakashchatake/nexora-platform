import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    instituteId: '',
    institutionName: '',
    institutionType: 'college',
    email: '',
    phone: '',
    fullName: '',
    password: '',
    passwordConfirm: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      // Basic validation
      if (!formData.instituteId.trim()) {
        throw new Error('Institute ID is required');
      }
      if (!formData.institutionName.trim()) {
        throw new Error('Institution Name is required');
      }
      if (!formData.fullName.trim()) {
        throw new Error('Full Name is required');
      }
      if (!formData.email.trim()) {
        throw new Error('Email is required');
      }
      if (!formData.password) {
        throw new Error('Password is required');
      }
      if (formData.password !== formData.passwordConfirm) {
        throw new Error('Passwords do not match');
      }
      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Sign up with Supabase Auth
      const { error: signupError } = await supabase.auth.signUp({
        email: formData.email.toLowerCase(),
        password: formData.password,
        options: {
          data: {
            institute_id: formData.instituteId.toLowerCase(),
            institution_name: formData.institutionName,
            institution_type: formData.institutionType,
            full_name: formData.fullName,
            phone: formData.phone,
            address: formData.address,
          },
          emailRedirectTo: `${window.location.origin}/#/dashboard`,
        },
      });

      if (signupError) {
        throw new Error(signupError.message || 'Signup failed');
      }

      // Store institution info in localStorage
      localStorage.setItem('nexora_institution_name', formData.institutionName);
      localStorage.setItem('nexora_full_name', formData.fullName);
      localStorage.setItem('nexora_email', formData.email);
      localStorage.setItem('nexora_institute_id', formData.instituteId);

      setSuccess('Account created! Check your email to verify, then you can login.');
      setTimeout(() => {
        navigate('/platform');
      }, 3000);
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
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
        maxWidth: '520px',
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
            Create Your Institution Account
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            backgroundColor: '#fee',
            border: '1px solid #fcc',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
            color: '#c33',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div style={{
            backgroundColor: '#eef',
            border: '1px solid #ccf',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--spacing-md)',
            marginBottom: 'var(--spacing-md)',
            color: '#003',
            fontSize: '0.9rem',
            textAlign: 'center'
          }}>
            {success}
          </div>
        )}

        {/* Signup Card */}
        <div className="card" style={{
          padding: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)',
          maxHeight: '70vh',
          overflowY: 'auto'
        }}>
          <h2 style={{
            marginTop: 0,
            marginBottom: 'var(--spacing-md)',
            color: 'var(--nexora-primary-blue)',
            fontSize: '1.3rem',
          }}>
            Complete Your Profile
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Two Column Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-md)'
            }}>
              {/* Institute ID */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Institute ID *
                </label>
                <input
                  type="text"
                  name="instituteId"
                  placeholder="e.g., mit-2026"
                  value={formData.instituteId}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Full Name */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Institution Name - Full Width */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--nexora-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: '0.9rem',
              }}>
                Institution Name *
              </label>
              <input
                type="text"
                name="institutionName"
                placeholder="e.g., Massachusetts Institute of Technology"
                value={formData.institutionName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: `1px solid var(--nexora-border)`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  backgroundColor: 'var(--nexora-surface)',
                  color: 'var(--nexora-text-primary)',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Two Column Layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-md)'
            }}>
              {/* Institution Type */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Institution Type
                </label>
                <select
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                  }}
                >
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="school">School</option>
                  <option value="training_center">Training Center</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="admin@institution.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Phone - Full Width */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label style={{
                display: 'block',
                marginBottom: 'var(--spacing-xs)',
                color: 'var(--nexora-text-primary)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: '0.9rem',
              }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  border: `1px solid var(--nexora-border)`,
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  backgroundColor: 'var(--nexora-surface)',
                  color: 'var(--nexora-text-primary)',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Password Fields */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-md)'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Password *
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  color: 'var(--nexora-text-primary)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '0.9rem',
                }}>
                  Confirm Password *
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="passwordConfirm"
                  placeholder="Repeat password"
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-md)',
                    border: `1px solid var(--nexora-border)`,
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--nexora-surface)',
                    color: 'var(--nexora-text-primary)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>

            {/* Show Password Checkbox */}
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--nexora-text-secondary)',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  style={{
                    marginRight: 'var(--spacing-sm)',
                    cursor: 'pointer'
                  }}
                />
                Show password
              </label>
            </div>

            {/* Submit Button */}
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
                marginBottom: 'var(--spacing-md)'
              }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
        </div>

        {/* Login Link */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            color: 'var(--nexora-text-secondary)',
            fontSize: '0.9rem',
            margin: 0,
            marginBottom: 'var(--spacing-sm)'
          }}>
            Already have an account?
          </p>
          <button
            type="button"
            onClick={() => navigate('/platform')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--nexora-primary-blue)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontWeight: 'var(--font-weight-semibold)',
              fontFamily: 'inherit',
              padding: 0,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Sign In Instead
          </button>
        </div>
      </div>
    </div>
  );
}
