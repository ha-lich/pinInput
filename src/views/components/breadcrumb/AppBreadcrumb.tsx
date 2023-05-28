import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { AppBreadcrumbProps } from '@globalTypes/globalTypes';

import './style.scss';

export default function AppBreadcrumb({
  parents,
  pageName,
}: AppBreadcrumbProps) {
  return (
    <>
      <Breadcrumb className="app-breadcrumb" separator=">">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>

        {parents &&
          parents.length > 0 &&
          parents.map(
            b =>
              b.path && (
                <Breadcrumb.Item>
                  <Link to={b.path}>{b.label}</Link>
                </Breadcrumb.Item>
              ),
          )}

        <Breadcrumb.Item>{pageName}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
