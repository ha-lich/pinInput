import AppBreadcrumb from '@components/breadcrumb/AppBreadcrumb';
import HeaderPage from '@components/header_page/HeaderPage';
import { DataListLayoutType } from '@globalTypes/globalTypes';
import { Pagination } from 'antd';

export default function DataListLayout({
  children,
  pageName,
  parents,
  openModalStore,
  page,
  total,
  onChangePage,
  onSearch,
}: DataListLayoutType) {
  return (
    <section>
      <AppBreadcrumb parents={parents ?? []} pageName={pageName} />
      <HeaderPage
        pageName={pageName}
        openModalStore={openModalStore}
        onSearch={onSearch}
      />

      {children}
      <Pagination
        defaultCurrent={page}
        total={total}
        onChange={onChangePage}
        showSizeChanger
      />
    </section>
  );
}
