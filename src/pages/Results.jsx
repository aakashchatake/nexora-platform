import React, { useState } from 'react';
import { getResultsForCourse } from '../data/results';
import { courses } from '../data/courses';
import './Results.css';

export default function Results() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const [statusFilter, setStatusFilter] = useState('all');

  const courseData = courses.find(c => c.id === selectedCourse);
  const resultsData = getResultsForCourse(selectedCourse);

  // Filter by status
  let filteredResults = resultsData;
  if (statusFilter !== 'all') {
    filteredResults = resultsData.filter(r => r.status === statusFilter);
  }

  // Calculate stats
  const passCount = resultsData.filter(r => r.status === 'pass').length;
  const reviewCount = resultsData.filter(r => r.status === 'review').length;
  const averageScore = resultsData.length > 0
    ? Math.round(resultsData.reduce((sum, r) => sum + (r.score / r.maxScore * 100), 0) / resultsData.length)
    : 0;

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'var(--nx-accent)';
    if (grade.startsWith('B')) return 'var(--nx-primary)';
    if (grade.startsWith('C')) return 'var(--nx-warning)';
    return 'var(--nx-error)';
  };

  return (
    <div className="results-page">
      {/* Page Header */}
      <div className="page-header nx-mb-lg">
        <h1>Assessment Results</h1>
        <p className="nx-text-muted">View and manage student assessment scores</p>
      </div>

      {/* Summary Stats */}
      <div className="nx-grid nx-grid-4 nx-mb-lg">
        <div className="nx-stat-card">
          <div className="nx-stat-label">Total Assessments</div>
          <div className="nx-stat-value">{resultsData.length}</div>
          <div className="nx-stat-description">Recorded</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Pass Rate</div>
          <div className="nx-stat-value" style={{ color: 'var(--nx-accent)' }}>
            {resultsData.length > 0 ? Math.round((passCount / resultsData.length) * 100) : 0}%
          </div>
          <div className="nx-stat-description">{passCount} passed</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Needs Review</div>
          <div className="nx-stat-value" style={{ color: 'var(--nx-warning)' }}>
            {reviewCount}
          </div>
          <div className="nx-stat-description">Below threshold</div>
        </div>

        <div className="nx-stat-card">
          <div className="nx-stat-label">Average Score</div>
          <div className="nx-stat-value">{averageScore}%</div>
          <div className="nx-stat-description">Overall</div>
        </div>
      </div>

      {/* Controls */}
      <div className="nx-card nx-card-body nx-mb-lg">
        <div className="controls-row">
          <div>
            <label className="nx-block nx-text-sm nx-weight-semibold nx-mb-sm">Select Course</label>
            <select
              className="nx-input"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              style={{ maxWidth: '350px' }}
            >
              {courses.map(c => (
                <option key={c.id} value={c.id}>
                  {c.code} - {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <p className="nx-text-sm nx-weight-semibold nx-mb-sm">Filter by Status</p>
            <div className="filter-buttons">
              {['all', 'pass', 'review'].map(status => (
                <button
                  key={status}
                  className={`filter-button ${statusFilter === status ? 'active' : ''}`}
                  onClick={() => setStatusFilter(status)}
                >
                  {status === 'all' ? 'All' : status === 'pass' ? 'Passed' : 'Review'} ({
                    status === 'all'
                      ? resultsData.length
                      : resultsData.filter(r => r.status === status).length
                  })
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="nx-card">
        <div className="nx-card-header">
          <h3>{courseData?.name} - Assessment Results</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          {filteredResults.length > 0 ? (
            <table className="nx-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Assessment</th>
                  <th>Score</th>
                  <th>Grade</th>
                  <th>Percentage</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result) => {
                  const percentage = Math.round((result.score / result.maxScore) * 100);
                  return (
                    <tr key={result.id} className="result-row">
                      <td className="student-name">{result.studentName}</td>
                      <td className="nx-text-sm">{result.assessmentType}</td>
                      <td>
                        <span className="nx-weight-semibold">
                          {result.score}/{result.maxScore}
                        </span>
                      </td>
                      <td>
                        <span className="nx-weight-semibold" style={{ color: getGradeColor(result.grade) }}>
                          {result.grade}
                        </span>
                      </td>
                      <td>
                        <div className="score-bar-container">
                          <div className="score-bar">
                            <div
                              className="score-bar-fill"
                              style={{
                                width: `${percentage}%`,
                                backgroundColor: getGradeColor(result.grade),
                              }}
                            />
                          </div>
                          <span className="score-text">{percentage}%</span>
                        </div>
                      </td>
                      <td>
                        <span className={`nx-badge ${result.status === 'pass' ? 'nx-badge-success' : 'nx-badge-warning'}`}>
                          {result.status === 'pass' ? 'Pass' : 'Review'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="empty-state">
              <p className="nx-text-muted">No assessment results match the current filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="nx-mt-lg">
        <div className="action-buttons">
          <button className="nx-btn nx-btn-primary">Generate Report</button>
          <button className="nx-btn nx-btn-secondary">Export Data</button>
        </div>
      </div>
    </div>
  );
}
