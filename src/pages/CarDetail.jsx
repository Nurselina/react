import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { CarService } from '../services/carService';


export default function CarDetail() {
    let { id } =useParams();

    const [car, setCar] = useState({}) 
    
    useEffect(() => {
      let carService = new CarService()
      carService.getByCarId(id).then(result => setCar(result.data))
    },[])
  
    return (
    <div>
         <Card.Group>
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://png.pngtree.com/png-clipart/20230427/ourlarge/pngtree-cartoon-character-hand-made-animation-model-png-image_6738199.png'
        />
        <Card.Header>{car.id}</Card.Header>
        <Card.Meta>{car.modelName}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    
  </Card.Group>
    </div>
  )
}
