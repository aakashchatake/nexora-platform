import React, { useState } from 'react';
import { students } from '../data/students';
import './Students.css';

export default function Students() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedStudentData = selectedStudent
    ? students.find(s => s.id === selectedStudent)
    : null;

  return (
    <div className="students-page">
      {/* Page Header */}
      <div className="page-header nx-mb-lg">
        <h1>Students</h1>
        <p className="nx-text-muted">Manage student enrollment and records</p>
      </div>

      <div className="students-layout">
        {/* Left: Student List */}
        <div className="students-list-panel">
          <div className="nx-card">
            {/* Search */}
            <div className="nx-card-body" style={{ borderBottom: '1px solid var(--nx-border-light)' }}>
              <input
                type="text"
                className="nx-input"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Student List */}
            <div className="students-list">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <button
                    key={student.id}
                    className={`student-list-item ${selectedStudent === student.id ? 'active' : ''}`}
                    onClick={() => setSelectedStudent(student.id)}
                  >
                    <div className="student-avatar">{student.name.charAt(0)}</div>
                    <div className="student-info">
                      <div className="student-name">{student.name}</div>
                      <div className="student-email">{student.email}</div>
                    </div>
                    <div className="student-status">
                      <span className="nx-badge nx-badge-success">
                        {student.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="empty-state">
                  <p className="nx-text-muted">No students found</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Student Detail Panel */}
        <div className="students-detail-panel">
          {selectedStudentData ? (
            <div className="nx-card">
              <div className="nx-card-header">
                <h3>{selectedStudentData.name}</h3>
              </div>
              <div className="nx-card-body">
                <div className="detail-section">
                  <p className="detail-label">Student ID</p>
                  <p className="detail-value">{selectedStudentData.id}</p>
                </div>

                <div className="detail-section">
                  <p className="detail-label">Email</p>
                  <p className="detail-value">{selectedStudentData.email}</p>
                </div>

                <div className="detail-section">
                  <p className="detail-label">Enrollment Year</p>
                  <p className="detail-value">{selectedStudentData.enrollmentYear}</p>
                </div>

                <div className="detail-section">
                  <p className="detail-label">Status</p>
                  <p>
                    <span className={`nx-badge ${selectedStudentData.status === 'active' ? 'nx-badge-success' : 'nx-badge-error'}`}>
                      {selectedStudentData.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                </div>

                <div className="detail-section">
                  <p className="detail-label">Average Grade</p>
                  <p className="detail-value" style={{ color: 'var(--nx-primary)' }}>
                    {selectedStudentData.averageGrade}%
                  </p>
                </div>

                <div className="detail-actions">
                  <button className="nx-btn nx-btn-primary nx-btn-sm">View Full Profile</button>
                  <button className="nx-btn nx-btn-secondary nx-btn-sm">Contact Student</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="nx-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
              <p className="nx-text-muted">Select a student to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="nx-grid nx-grid-4 nx-mt-lg">
        <div className="nx-stat-card">
          <div className="nx-stat-label">Total Students</div>
          <div className="nx-stat-value">{students.length}</div>
          <div className="nx-stat-description">Enrolled</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Active</div>
          <div className="nx-stat-value" style={{ color: 'var(--nx-accent)' }}>
            {students.filter(s => s.status === 'active').length}
          </div>
          <div className="nx-stat-description">Current</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Avg Grade</div>
          <div className="nx-stat-value">
            {Math.round(students.reduce((sum, s) => sum + s.averageGrade, 0) / students.length)}%
          </div>
          <div className="nx-stat-description">Overall</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Searched</div>
          <div className="nx-stat-value">{filteredStudents.length}</div>
          <div className="nx-stat-description">Matching</div>
        </div>
      </div>
    </div>
  );
}
