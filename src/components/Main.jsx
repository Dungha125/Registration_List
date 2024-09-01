import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Input, Button, Spin, Alert } from 'antd';
import 'antd/dist/reset.css'; // Import CSS của Ant Design

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState('');

  const fetchStudents = async () => {
    try {
      const response = await axios.post(
        `https://lcdkhoacntt1-1-c9938135.deta.app/api/ctv-2024/all?otp=${otp}`
      );
      const dataArray = response.data.data;
  
      if (Array.isArray(dataArray)) {
        setStudents(dataArray);
      } else {
        console.error("Expected 'data' to be an array but received:", dataArray);
        setError("Unexpected data format");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (otp) {
      fetchStudents();
    } else {
      setLoading(false);
    }
  }, [otp]);

  const columns = [
    { title: 'Họ và tên', dataIndex: 'fullname', key: 'fullname' },
    { title: 'Giới tính', dataIndex: 'sex', key: 'sex' },
    { title: 'Ngày sinh', dataIndex: 'birthDate', key: 'birthDate' },
    { title: 'Quê quán', dataIndex: 'placeOfOrigin', key: 'placeOfOrigin' },
    { title: 'Lớp', dataIndex: 'className', key: 'className' },
    { title: 'Mã sinh viên', dataIndex: 'studentCode', key: 'studentCode' },
    { title: 'Ngành', dataIndex: 'major', key: 'major' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Số điện thoại', dataIndex: 'phoneNumber', key: 'phoneNumber' },
    { title: 'Link FB', dataIndex: 'facebook', key: 'facebook' },
    { title: 'Giới thiệu bản thân', dataIndex: 'describeYourself', key: 'describeYourself' },
    { title: 'Điểm mạnh', dataIndex: 'strengthness', key: 'strengthness' },
    { title: 'Điểm yếu', dataIndex: 'weakness', key: 'weakness' },
    { title: 'Bạn biết đến Liên chi qua', dataIndex: 'knowUsThrough', key: 'knowUsThrough' },
    { title: 'Lý do tham gia', dataIndex: 'reason', key: 'reason' },
    { title: 'Nguyện vọng', dataIndex: 'aspiration', key: 'aspiration' },
    { title: 'Câu hỏi', dataIndex: 'question', key: 'question' },
  ];

  if (loading) return <div className="flex justify-center items-center"><Spin size="large" /></div>;
  if (error) return <Alert message="Error" description={error} type="error" />;

  return (
    <div className="container p-4 mx-auto">
  <h1 className="text-center font-bold text-3xl text-gray-900 mb-4">DANH SÁCH ĐĂNG KÝ</h1>
  <div className="flex justify-center mb-4">
    <Input
      type="password"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      placeholder="Nhập OTP"
      className="border border-gray-300 p-2 rounded"
    />
    <Button
      onClick={fetchStudents}
      className="bg-green-600 text-white font-bold ml-2"
    >
      Gửi
    </Button>
  </div>
  <Table 
    columns={columns} 
    dataSource={students} 
    rowKey="studentCode" // Hoặc thuộc tính duy nhất khác nếu có
    pagination={false} 
  />
  <div className="w-full flex justify-center mt-4">
    <Button className="bg-green-600 text-white font-bold w-[6rem] h-[2rem] rounded-md">
      Xuất Excel
    </Button>
  </div>
</div>
  );
};

export default StudentList;
