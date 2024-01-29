import './App.css'
import Header from '../components/Header'
import FooterComp from '../components/FooterComp'
import SidebarComp from '../components/SidebarComp'

import { useState } from 'react'
import PostListProvider from '../store/Post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  // const [selectedTab, setSelectedTab] = useState("Home")
  return (

    <PostListProvider>
      <div className="appContainer">
        <div className="sidebarContainer">
          <SidebarComp />

        </div>
        <div className="content">
          <Header />
          <Outlet />
          <FooterComp />
        </div>
      </div>
    </PostListProvider>

  )
}

export default App
