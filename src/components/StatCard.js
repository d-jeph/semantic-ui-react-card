import React from 'react'
import { Card, Statistic,Label,Icon,Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const services = [
   {service_name:'SERVICE 1',total:24,service_details: [{ label:'Online',icon: 'arrow alternate circle up', color: 'green', total: 10 },
                                        { label:'Offline',icon: 'arrow alternate circle down', color: 'red', total: 10 },
                                        { label:'Low Uptime',icon: 'area graph', color: 'yellow', total: 10 },
                                        { label:'Not monitored',icon: 'eye slash outline', color: 'grey', total: 10 }]},

  {service_name:'SERVICE 2',total:32,service_details: [{ label:'Online',icon: 'arrow alternate circle up', color: 'green', total: 10 },
                                        { label:'Offline',icon: 'arrow alternate circle down', color: 'red', total: 10 },
                                        { label:'Low Uptime',icon: 'area graph', color: 'yellow', total: 10 },
                                        { label:'Not monitored',icon: 'eye slash outline', color: 'grey', total: 10 }]},
]

const StatCard = () => (
    <Card.Group>
        { services.map((service)=>(
            <Card as={Link} to='/test' color='green'>
            <Card.Content textAlign='center'>
                <Card.Header>{service.service_name}</Card.Header>
                <Card.Description>
                    <Statistic>
                        <Statistic.Value>{service.total}</Statistic.Value>
                        <Statistic.Label>Services</Statistic.Label>
                    </Statistic>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div>
                    {service.service_details.map((sd) => (
                        <Popup content={sd.label} inverted trigger={
                        <Label color={sd.color} key={sd.color}>
                         <Icon name={sd.icon} /> {sd.total}
                        </Label>
                        } />
                    ))}
                </div>
            </Card.Content>
        </Card>

        ))}
    </Card.Group>
)

export default StatCard