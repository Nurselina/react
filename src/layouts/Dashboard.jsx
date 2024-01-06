import React from 'react'
import Categories from './Categories'
import CarList from '../pages/CarList'
import Navi from './Navi'
import { Grid} from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import CarDetail from '../pages/CarDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import CarAdd from '../pages/CarAdd'


export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
          <Routes>
            <Route exact path="/"Component={CarList}/>
            <Route exact path="/cars/getAll"Component={CarList}/>
            <Route path="/cars/:id"Component={CarDetail}/> 
            <Route path="/cart"Component={CartDetail}/>
            <Route path="/car/add"Component={CarAdd}/>
          </Routes>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </div>
  )
}
