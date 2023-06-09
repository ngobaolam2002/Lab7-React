import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


function RenderCard({ item, isLoading, errMess }) {

      if (isLoading) {
            return (
                  <Loading />
            );
      }
      else if (errMess) {
            return (
                  <h4>{errMess}</h4>
            );
      }
      else
            return (
                  <Card>
                        <CardImg src={baseUrl + item.image} alt={item.name} />
                        <CardBody>
                              <CardTitle>{item.name}</CardTitle>
                              {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                              <CardText>{item.description}</CardText>
                        </CardBody>
                  </Card>
            );


}


const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
            return (
                  <div className="col-12 col-md-5 m-1">
                        <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                  </div>
            );
      });

      return (
            <div className="container">
                  <div className="row">
                        <Breadcrumb>
                              <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                              <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                              <h3>Menu</h3>
                              <hr />
                        </div>
                  </div>
                  <div className="row">
                        {menu}
                  </div>
            </div>
      );
}

export default Menu;