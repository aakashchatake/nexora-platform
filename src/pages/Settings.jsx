import React, { useState } from 'react';
import './Settings.css';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailOnAttendance, setEmailOnAttendance] = useState(true);
  const [emailOnResults, setEmailOnResults] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      {/* Page Header */}
      <div className="page-header nx-mb-lg">
        <h1>Settings</h1>
        <p className="nx-text-muted">Manage system preferences and notifications</p>
      </div>

      <div className="settings-container">
        {/* Notification Settings */}
        <div className="nx-card nx-mb-lg">
          <div className="nx-card-header">
            <h3>Notifications</h3>
          </div>
          <div className="nx-card-body">
            <div className="setting-row">
              <div>
                <p className="setting-title">Enable Notifications</p>
                <p className="setting-description">Receive system alerts and updates</p>
              </div>
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                className="toggle-switch"
              />
            </div>

            {notificationsEnabled && (
              <>
                <div className="setting-row">
                  <div>
                    <p className="setting-title">Email on Attendance Changes</p>
                    <p className="setting-description">Get notified when attendance records are updated</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailOnAttendance}
                    onChange={(e) => setEmailOnAttendance(e.target.checked)}
                    className="toggle-switch"
                  />
                </div>

                <div className="setting-row">
                  <div>
                    <p className="setting-title">Email on Results Published</p>
                    <p className="setting-description">Get notified when new grades are posted</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailOnResults}
                    onChange={(e) => setEmailOnResults(e.target.checked)}
                    className="toggle-switch"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Display Settings */}
        <div className="nx-card nx-mb-lg">
          <div className="nx-card-header">
            <h3>Display</h3>
          </div>
          <div className="nx-card-body">
            <div className="setting-field">
              <label className="setting-label">
                <span className="setting-title">Theme</span>
                <select
                  className="nx-input"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </label>
            </div>

            <div className="setting-field">
              <label className="setting-label">
                <span className="setting-title">Language</span>
                <select
                  className="nx-input"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="nx-card nx-mb-lg">
          <div className="nx-card-header">
            <h3>Account</h3>
          </div>
          <div className="nx-card-body">
            <div className="setting-row">
              <div>
                <p className="setting-title">Current Institution</p>
                <p className="setting-value">Spring University</p>
              </div>
            </div>

            <div className="setting-row">
              <div>
                <p className="setting-title">Account Status</p>
                <span className="nx-badge nx-badge-success">Active</span>
              </div>
            </div>

            <div className="setting-row">
              <div>
                <p className="setting-title">Role</p>
                <p className="setting-value">Administrator</p>
              </div>
            </div>

            <div className="setting-row" style={{ borderTop: '1px solid var(--nx-border-light)', paddingTop: 'var(--nx-space-lg)', marginTop: 'var(--nx-space-lg)' }}>
              <button className="nx-btn nx-btn-secondary">Change Password</button>
              <button className="nx-btn nx-btn-secondary">Logout</button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="nx-card nx-mb-lg">
          <div className="nx-card-header">
            <h3>About</h3>
          </div>
          <div className="nx-card-body">
            <div className="about-info">
              <p><strong>NEXORA Platform v1.0</strong></p>
              <p className="nx-text-muted nx-text-sm">Enterprise academic management system</p>
              <p className="nx-text-muted nx-text-sm">Developed by Chatake Innoworks Pvt. Ltd.</p>
              <p className="nx-text-muted nx-text-sm">© 2025 All rights reserved</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="settings-actions">
          <button className="nx-btn nx-btn-primary" onClick={handleSave}>
            Save Settings
          </button>
          <button className="nx-btn nx-btn-secondary">
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
