import React, {Fragment} from "react";
import ShopList from "../Components/Shop/ShopList";
import Banner from "../Components/Banner/Banner";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import MyPagination from "../Components/Pagination/Pagination";



function Shop () {

// const [filterList, setFilterList] = useState(
//     items.filter((item) => item.category === "Dresses")
//
// );


    return (
        <Fragment>
    <Banner title={"Shop By "}/>
       {/*<section className= "filter-bar">*/}
       {/*    <Container className= "filter-bar-contianer">*/}
       {/*        <Row className= "justify-content-center">*/}
       {/*            <Col md={4}>*/}
       {/*                /!*<FilterSelect setFilterList={setFilterList}/>*!/*/}
       {/*                <FilterSelect/>*/}
       {/*            </Col>*/}
       {/*     <Col md={8}>*/}
       {/*         /!*<SearchBar setFilterList={setFilterList}/>*!/*/}
       {/*         <SearchBar/>*/}
       {/*     </Col>*/}
       {/*        </Row>*/}
       {/*    </Container>*/}
       {/*</section>*/}
    {/*<ShopList items = {filterList}/>*/}
            <ShopList />

            <MyPagination />
    <NewsLetter/>



    </Fragment>
    )
}

export default Shop;