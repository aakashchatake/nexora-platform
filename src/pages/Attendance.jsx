import React, { useState } from 'react';
import { getAttendanceForCourse, getAttendanceSummary } from '../data/attendance';
import { courses } from '../data/courses';
import './Attendance.css';

export default function Attendance() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');

  const courseData = courses.find(c => c.id === selectedCourse);
  const attendanceData = getAttendanceForCourse(selectedCourse);
  const summary = getAttendanceSummary(selectedCourse);

  // Filter attendance
  let filteredRecords = attendanceData;

  if (statusFilter !== 'all') {
    filteredRecords = filteredRecords.filter(r => r.status === statusFilter);
  }

  // In a real system, date filtering would compare actual dates
  // For this demo, we'll just show all records
  if (dateFilter === 'today') {
    // All records shown (they're all marked as 2025-01-23 in the data)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case 'present':
        return 'nx-badge nx-badge-success';
      case 'late':
        return 'nx-badge nx-badge-warning';
      case 'absent':
        return 'nx-badge nx-badge-error';
      default:
        return 'nx-badge nx-badge-neutral';
    }
  };

  const getStatusLabel = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="attendance-page">
      {/* Page Header */}
      <div className="page-header nx-mb-lg">
        <h1>Attendance</h1>
        <p className="nx-text-muted">Track and manage student attendance records</p>
      </div>

      {/* Summary Stats */}
      <div className="nx-grid nx-grid-4 nx-mb-lg">
        <div className="nx-stat-card">
          <div className="nx-stat-label">Total Marked</div>
          <div className="nx-stat-value">{summary.total}</div>
          <div className="nx-stat-description">Today</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Present</div>
          <div className="nx-stat-value" style={{ color: 'var(--nx-accent)' }}>
            {summary.present}
          </div>
          <div className="nx-stat-description">On time</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Late</div>
          <div className="nx-stat-value" style={{ color: 'var(--nx-warning)' }}>
            {summary.late}
          </div>
          <div className="nx-stat-description">Arrived late</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Attendance %</div>
          <div
            className="nx-stat-value"
            style={{
              color: summary.percentage >= 85 ? 'var(--nx-accent)' : 'var(--nx-warning)',
            }}
          >
            {summary.percentage}%
          </div>
          <div className="nx-stat-description">Rate</div>
        </div>
      </div>

      {/* Controls */}
      <div className="nx-card nx-card-body nx-mb-lg">
        <div className="controls-grid">
          <div>
            <label className="nx-block nx-text-sm nx-weight-semibold nx-mb-sm">Select Course</label>
            <select
              className="nx-input"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {courses.map(c => (
                <option key={c.id} value={c.id}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="nx-block nx-text-sm nx-weight-semibold nx-mb-sm">Date Range</label>
            <select
              className="nx-input"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        {/* Status Filters */}
        <div className="filter-row">
          <p className="nx-text-sm nx-weight-semibold nx-mb-sm">Filter by Status</p>
          <div className="filter-buttons">
            {['all', 'present', 'late', 'absent'].map(status => (
              <button
                key={status}
                className={`filter-button ${statusFilter === status ? 'active' : ''}`}
                onClick={() => setStatusFilter(status)}
              >
                {status === 'all' ? 'All' : getStatusLabel(status)} ({
                  status === 'all'
                    ? attendanceData.length
                    : attendanceData.filter(r => r.status === status).length
                })
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="nx-card">
        <div className="nx-card-header">
          <h3>{courseData?.name} - Attendance Records</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          {filteredRecords.length > 0 ? (
            <table className="nx-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Status</th>
                  <th>Time In</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.map((record) => (
                  <tr key={record.id} className="attendance-row">
                    <td className="student-name">{record.studentName}</td>
                    <td>
                      <span className={getStatusBadge(record.status)}>
                        {getStatusLabel(record.status)}
                      </span>
                    </td>
                    <td>{record.timeIn || '—'}</td>
                    <td className="nx-text-sm nx-text-muted">{record.date}</td>
                    <td>
                      <button className="nx-btn nx-btn-secondary nx-btn-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p className="nx-text-muted">No attendance records match the current filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Export Section */}
      <div className="nx-mt-lg">
        <button className="nx-btn nx-btn-primary">Download Report</button>
      </div>
    </div>
  );
}
