import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Widget from '../components/widget/Widget'
import Chart from '../components/chart/Chart'
import './Style.css'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
            <Navbar />
            <div className='widgets'>
                <Widget type="monthly" />
                <Widget type="annual" />
                <Widget type="tasks" />
                <Widget type="requests" />
            </div>
            <div className='charts'>
                <Chart />
                <Chart />
            </div>
        </div>
    </div>
  )
}

export default Home