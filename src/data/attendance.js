export const attendanceRecords = [
  {
    id: 'ATT001',
    studentId: 'STU001',
    studentName: 'Alice Johnson',
    courseId: 'COURSE001',
    courseName: 'CS101',
    date: '2025-01-23',
    status: 'present',
    timeIn: '08:55',
  },
  {
    id: 'ATT002',
    studentId: 'STU002',
    studentName: 'Bob Chen',
    courseId: 'COURSE001',
    courseName: 'CS101',
    date: '2025-01-23',
    status: 'present',
    timeIn: '09:02',
  },
  {
    id: 'ATT003',
    studentId: 'STU003',
    studentName: 'Clara Martinez',
    courseId: 'COURSE001',
    courseName: 'CS101',
    date: '2025-01-23',
    status: 'late',
    timeIn: '09:15',
  },
  {
    id: 'ATT004',
    studentId: 'STU004',
    studentName: 'David Kumar',
    courseId: 'COURSE001',
    courseName: 'CS101',
    date: '2025-01-23',
    status: 'absent',
  },
  {
    id: 'ATT005',
    studentId: 'STU005',
    studentName: 'Emma Wilson',
    courseId: 'COURSE001',
    courseName: 'CS101',
    date: '2025-01-23',
    status: 'present',
    timeIn: '08:58',
  },
  {
    id: 'ATT006',
    studentId: 'STU001',
    studentName: 'Alice Johnson',
    courseId: 'COURSE002',
    courseName: 'MATH201',
    date: '2025-01-23',
    status: 'present',
    timeIn: '10:05',
  },
  {
    id: 'ATT007',
    studentId: 'STU002',
    studentName: 'Bob Chen',
    courseId: 'COURSE002',
    courseName: 'MATH201',
    date: '2025-01-23',
    status: 'present',
    timeIn: '10:00',
  },
  {
    id: 'ATT008',
    studentId: 'STU003',
    studentName: 'Clara Martinez',
    courseId: 'COURSE002',
    courseName: 'MATH201',
    date: '2025-01-23',
    status: 'present',
    timeIn: '10:03',
  },
  {
    id: 'ATT009',
    studentId: 'STU006',
    studentName: 'Frank Liu',
    courseId: 'COURSE003',
    courseName: 'PHY301',
    date: '2025-01-23',
    status: 'present',
    timeIn: '11:00',
  },
];

export function getAttendanceForCourse(courseId) {
  return attendanceRecords.filter(record => record.courseId === courseId);
}

export function getAttendanceSummary(courseId) {
  const records = getAttendanceForCourse(courseId);
  const present = records.filter(r => r.status === 'present').length;
  const late = records.filter(r => r.status === 'late').length;
  const absent = records.filter(r => r.status === 'absent').length;

  return {
    total: records.length,
    present,
    late,
    absent,
    percentage: records.length > 0 ? Math.round(((present + late) / records.length) * 100) : 0,
  };
}
