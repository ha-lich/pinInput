import { Link } from 'react-router-dom';
import { Layout, Menu, Popconfirm, Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@apps/hooks';
import { logout } from '@apps/slices/authSlice';

const { Sider, Content } = Layout;

interface AppLayoutInterface {
  children: JSX.Element;
}
const menuItems = [
  {
    key: '/',
    label: <Link to="/">Home</Link>,
    item: [],
  },
];
const pathname = menuItems[0].key;

const LeftMenu = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/environment">
          <img
            src="https://news.vmogroup.com/wp-content/uploads/2023/04/VMO_Logo_Positive.png"
            alt="logo"
          />
        </Link>
        {/* <div className="user_name">
          <Link to="/user-profile">
            <UserOutlined /> {user?.name}
          </Link>
        </div> */}
      </div>
      <Menu defaultSelectedKeys={[pathname]} mode="inline" items={menuItems} />
    </div>
  );
};

export default function AppLayout({ children }: AppLayoutInterface) {
  const appDispatch = useAppDispatch();
  const handleLogout = () => {
    appDispatch(logout());
  };

  return (
    <Layout id="app-layout">
      <Sider trigger={null} width={320}>
        <LeftMenu />
        <div className="logout">
          <Popconfirm
            placement="rightTop"
            title="Do you want to sign out?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <Button size="large" ghost>
              <LogoutOutlined />
              Logout
            </Button>
          </Popconfirm>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          <article className="app-content">{children}</article>
        </Content>
      </Layout>
    </Layout>
  );
}
