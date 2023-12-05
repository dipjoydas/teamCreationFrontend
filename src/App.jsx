
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Members from './components/Members/Members'
import CreateTeam from './components/CreateTeam/CreateTeam'
import Teams from './components/Teams/Teams'
import AddMember from './components/AddMember/AddMember'
import UpdateMember from './components/UpdateMember/UpdateMember'

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Members></Members>
        },
        {
          path:'/createteam',
          element:<CreateTeam></CreateTeam>
        },
        {
          path:'/teams',
          element:<Teams></Teams>
        },
        {
          path:'/addmember',
          element:<AddMember></AddMember>
        },
        {
          path:'/updatemember/:id',
          element:<UpdateMember></UpdateMember>
        }
      ]
    }
  ])


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  )
}

export default App
