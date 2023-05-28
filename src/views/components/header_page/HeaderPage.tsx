import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import { HeaderPageProps } from '@globalTypes/globalTypes';

import { SCHeaderPage } from './style';

export default function HeaderPage({
  pageName,
  onSearch,
  openModalStore,
}: HeaderPageProps) {
  return (
    <SCHeaderPage>
      <div className="top_page">
        <h1 className="page_name">{pageName}</h1>

        <div className="action_page">
          <Search
            placeholder="Search by category name"
            onSearch={onSearch}
            size="large"
            style={{ width: 350 }}
          />

          <Tooltip placement="left" title="Create a new product category">
            <Button
              htmlType="button"
              type="primary"
              shape="circle"
              size="large"
              icon={<PlusOutlined />}
              onClick={openModalStore}
            />
          </Tooltip>
        </div>
      </div>
    </SCHeaderPage>
  );
}
