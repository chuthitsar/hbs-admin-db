// import { useEffect } from 'react';
import { Space, Typography, Spin} from 'antd';
import styles from './dashboard.module.css';
import { DashboardCard,PieChart,BarChart } from '../../components';
import { useNewReserveQuery } from '../../features/reservation/reserveApiSlice';
import { useGetAvailableCountQuery,useGetOccupationCountQuery } from '../../features/room/roomApiSlice';

const Dashboard = () => {
  const { data: newReserveCount, isLoading, error } = useNewReserveQuery();
  const { data: availableCount} = useGetAvailableCountQuery();
  const { data: occupationCount} = useGetOccupationCountQuery();

  if (isLoading) {
    return (
      <div className="spin-container" size="large">
        <Spin />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.container}>
      <Typography.Title level={2} style={{marginTop: 0}}>Overview</Typography.Title>
      <Space size={'large'} direction='horizontal'>
        <DashboardCard title="New Reservation" value={newReserveCount}/>
        <DashboardCard title="Occupied Rooms" value={availableCount}/>
        <DashboardCard title="Available Rooms" value={occupationCount} />
      </Space>
      <PieChart/>
      <BarChart/>
    </div>
  )
}

export default Dashboard