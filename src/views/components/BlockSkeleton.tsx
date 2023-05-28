import React from 'react';
import { Skeleton } from 'antd';

export default function BlockSkeleton({
  loading,
  children,
}: {
  loading: boolean;
  children: JSX.Element;
}) {
  return (
    <Skeleton
      className="app_skeleton"
      active
      paragraph={{ rows: 15 }}
      loading={loading}
    >
      {children}
    </Skeleton>
  );
}
