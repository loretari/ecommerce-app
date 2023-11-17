import React, {Fragment, useState} from "react";
import ShopList from "../Components/Shop/ShopList";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import MyPagination from "../Components/Pagination/Pagination";
import SearchBar from "../Components/SearchBar/SearchBar";
import {Col} from "react-bootstrap";
import { items } from "../Data/AllData"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Shop () {

const [filterList, setFilterList] = useState(
    items.filter((item) => item.category === "Dresses")
);


    return (
        <Fragment>
    <Banner title={"Shop By "}/>
       <section className= "filter-bar">
           <Container className= "filter-bar-contianer">
               <Row className= "justify-content-center">
            <Col md={8}>
                <SearchBar setFilterList={setFilterList}/>
            </Col>
               </Row>
    <ShopList/>
    <MyPagination />
    <NewsLetter/>
    <Footer/>
           </Container>
       </section>
    </Fragment>
    )
}

export default Shop;