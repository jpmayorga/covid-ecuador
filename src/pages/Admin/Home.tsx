import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { withFirebase } from '../../firebase';
import { FirebaseTypes } from '../../firebase/firebase';
import { Dispatch, RootState } from '../../store';
import { setIsLoading } from '../../store/modules/loading';
import { removeUser, setAuthenticated } from '../../store/modules/user';

const { Header, Sider, Content } = Layout;

interface Props {
  firebase: FirebaseTypes;
}

// tslint:disable-next-line: variable-name
const AdminHome = ({ firebase }: Props) => {
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: RootState) => state.user);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [confirmed, setConfirmed] = useState<number>(0);
  const [deaths, setdeaths] = useState<number>(0);
  const [recovered, setRecovered] = useState<number>(0);

  const history = useHistory<typeof useHistory>();

  const logout = async () => {
    setIsCollapsed(true);
    await firebase.auth.signOut();
    history.push('/admin/login');
    dispatch(setIsLoading(false));
    dispatch(setAuthenticated(false));
    dispatch(removeUser());
  };

  return (
    <Layout className='Admin'>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']} style={{ marginTop: '60px' }}>
          <Menu.Item key='1'>
            <UserOutlined />
            <span>Cases</span>
          </Menu.Item>
          <Menu.Item key='4' onClick={logout}>
            <UploadOutlined />
            <span>Sign Out</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='titleBoard'>Dashboard</Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
        </Content>
      </Layout>
    </Layout>
  );
};

const constToExport = withFirebase(AdminHome);
export { constToExport as AdminHome };
