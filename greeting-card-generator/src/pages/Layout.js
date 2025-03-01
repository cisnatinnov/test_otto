import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faImage, faChevronRight, faChevronLeft, faTable } from '@fortawesome/free-solid-svg-icons'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidbarMenu = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <>
      <div className="flex h-screen overflow-y-hidden bg-white">
        {/* sidebar */}
        <aside
          className={isSidebarOpen ?
            'fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-non' :
            'fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-non -translate-x-full lg:translate-x-0 lg:w-20'
          }
        >
          {/* sidebar header */}
          <div className={isSidebarOpen ?
            "flex items-center justify-between flex-shrink-0 p-2" :
            "flex items-center justify-between flex-shrink-0 p-2 lg:justify-center"
          }>
            <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
              K<span className={isSidebarOpen ? ""
                : "lg:hidden"
              }>-WD</span>
            </span>
          </div>
          {/* Sidebar links */}
          <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
            <ul className="p-2 overflow-hidden">          
              <li>
                <a href="/"
                className={isSidebarOpen ?
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100" :
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 justify-center"
                }>
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span className={isSidebarOpen ? "" : "lg:hidden"}>Home</span></a>
              </li>
              <li>
              <a href="/greeting_card"
                className={isSidebarOpen ?
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100" :
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 justify-center"
                }>
                  <span>
                    <FontAwesomeIcon icon={faImage} />
                  </span>
                  <span className={isSidebarOpen ? "" : "lg:hidden"}>Greeting Card Generator</span></a>
              </li>
              <li>
              <a href="/brands"
                className={isSidebarOpen ?
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100" :
                  "flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 justify-center"
                }>
                  <span>
                    <FontAwesomeIcon icon={faTable} />
                  </span>
                  <span className={isSidebarOpen ? "" : "lg:hidden"}>Brands</span></a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="flex flex-col flex-1 h-full overflow-hidden">          
          {/* Navbar */}
          <header className="flex-shrink-0 border-b">
            <div className="flex items-center justify-between p-2">
              <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
              {/* Navbar left */}
              <div className="flex items-center space-x-3">
                {/* Toggle sidebar button */}
                <button
                  onClick={toggleSidbarMenu}
                  className="p-2 rounded-md focus:outline-none focus:ring"
                >
                  {isSidebarOpen ? <FontAwesomeIcon icon={faChevronLeft}/> : <FontAwesomeIcon icon={faChevronRight}/>}
                </button>
              </div>
            </div>
          </header>
          {/* Main content */}
          <main className="flex-1 max-h-full p-5 overflow-y-scroll">
            {/* Start Content */}
            <div className="mt-2">
              <Outlet />
            </div>
          </main>
          {/* Main footer */}
          <footer className="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14">
            <div>K-WD &copy; 2025</div>
            <div class="text-sm">
              Made by&nbsp;
              <a
                class="text-blue-400 underline"
                href="https://github.com/cisnatinnov"
                target="_blank"
                rel="noopener noreferrer"
                >Mohamad Cendikia Isnatinnov Hairy</a>
            </div>
            <div>
              {/* Github svg */}
              <a
                href="https://github.com/cisnatinnov/test_otto"
                class="flex items-center space-x-1"
              >
                <svg class="w-6 h-6 text-gray-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <span class="hidden text-sm md:block">View on Github</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
};

export default Layout;