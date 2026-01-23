export const resultRecords = [
  {
    id: 'RES001',
    studentId: 'STU001',
    studentName: 'Alice Johnson',
    courseId: 'COURSE001',
    courseName: 'CS101',
    assessmentType: 'Midterm Exam',
    score: 92,
    grade: 'A-',
    maxScore: 100,
    date: '2025-01-15',
    status: 'pass',
  },
  {
    id: 'RES002',
    studentId: 'STU002',
    studentName: 'Bob Chen',
    courseId: 'COURSE001',
    courseName: 'CS101',
    assessmentType: 'Midterm Exam',
    score: 88,
    grade: 'B+',
    maxScore: 100,
    date: '2025-01-15',
    status: 'pass',
  },
  {
    id: 'RES003',
    studentId: 'STU003',
    studentName: 'Clara Martinez',
    courseId: 'COURSE001',
    courseName: 'CS101',
    assessmentType: 'Midterm Exam',
    score: 76,
    grade: 'C+',
    maxScore: 100,
    date: '2025-01-15',
    status: 'pass',
  },
  {
    id: 'RES004',
    studentId: 'STU004',
    studentName: 'David Kumar',
    courseId: 'COURSE001',
    courseName: 'CS101',
    assessmentType: 'Midterm Exam',
    score: 64,
    grade: 'D',
    maxScore: 100,
    date: '2025-01-15',
    status: 'review',
  },
  {
    id: 'RES005',
    studentId: 'STU005',
    studentName: 'Emma Wilson',
    courseId: 'COURSE001',
    courseName: 'CS101',
    assessmentType: 'Midterm Exam',
    score: 95,
    grade: 'A',
    maxScore: 100,
    date: '2025-01-15',
    status: 'pass',
  },
  {
    id: 'RES006',
    studentId: 'STU001',
    studentName: 'Alice Johnson',
    courseId: 'COURSE002',
    courseName: 'MATH201',
    assessmentType: 'Quiz 1',
    score: 18,
    grade: 'A-',
    maxScore: 20,
    date: '2025-01-10',
    status: 'pass',
  },
  {
    id: 'RES007',
    studentId: 'STU002',
    studentName: 'Bob Chen',
    courseId: 'COURSE002',
    courseName: 'MATH201',
    assessmentType: 'Quiz 1',
    score: 16,
    grade: 'B',
    maxScore: 20,
    date: '2025-01-10',
    status: 'pass',
  },
];

export function getResultsForCourse(courseId) {
  return resultRecords.filter(record => record.courseId === courseId);
}

export function getStudentCourseGrade(studentId, courseId) {
  const records = resultRecords.filter(
    r => r.studentId === studentId && r.courseId === courseId
  );
  
  if (records.length === 0) return null;
  
  const totalScore = records.reduce((sum, r) => sum + r.score, 0);
  const totalMax = records.reduce((sum, r) => sum + r.maxScore, 0);
  const percentage = Math.round((totalScore / totalMax) * 100);
  
  let grade = 'F';
  if (percentage >= 90) grade = 'A';
  else if (percentage >= 80) grade = 'B';
  else if (percentage >= 70) grade = 'C';
  else if (percentage >= 60) grade = 'D';
  
  return { grade, percentage, records };
}
