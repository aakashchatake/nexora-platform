import React, { useState } from 'react';
import { LayoutDashboard, Users, CheckCircle2, BarChart3, Settings, Menu, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import './InstituteLayout.css';

export default function InstituteLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'students', label: 'Students', icon: Users, path: '/students' },
    { id: 'attendance', label: 'Attendance', icon: CheckCircle2, path: '/attendance' },
    { id: 'results', label: 'Results', icon: BarChart3, path: '/results' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  // Determine active item from current path
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/dashboard';
  const activeItem = navigationItems.find(item => item.path === currentPath)?.id || 'dashboard';

  const handleNavClick = (item) => {
    window.location.pathname = item.path;
    setMobileMenuOpen(false);
  };

  return (
    <div className="institute-layout">
      {/* Top Header with context awareness */}
      <header className="institute-header">
        <div className="header-left">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
          <div className="institute-brand">
            <span className="brand-logo">NEXORA</span>
          </div>
          <div className="institute-name">
            <span className="institute-name-text">Spring University</span>
          </div>
        </div>

        <div className="header-right">
          <div className="header-context">
            <span className="context-label">Active User</span>
            <span className="context-value">Administrator</span>
          </div>
          <button className="user-menu-trigger">
            <span className="user-avatar">A</span>
            <span className="user-name">Admin</span>
            <ChevronDown size={16} strokeWidth={1.5} className="dropdown-arrow" />
          </button>
        </div>
      </header>

      {/* Sidebar Navigation with active state feedback */}
      <aside className={`institute-sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <nav className="sidebar-nav">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={`nx-nav-link ${activeItem === item.id ? 'nx-nav-link-active' : ''}`}
                onClick={() => handleNavClick(item)}
                title={item.label}
              >
                <IconComponent size={18} strokeWidth={1.5} className="nav-icon" />
                {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <button
          className="sidebar-toggle"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight size={18} strokeWidth={1.5} /> : <ChevronLeft size={18} strokeWidth={1.5} />}
        </button>
      </aside>

      {/* Main Content Area */}
      <main className={`institute-main ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {children}
      </main>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
