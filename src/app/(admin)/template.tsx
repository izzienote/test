"use client";

import { useEffect } from "react";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    console.log("렌더링 시 실행됩니다.");
  }, []);

  return (
    <>
      <h1>Admin Page</h1>
      {children}
    </>
  );
};

export default AdminLayout;

//2가지 꼭 필요!
// 1. children 받기
// 2. export default 꼭 해주기
