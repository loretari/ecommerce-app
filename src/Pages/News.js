import React from "react";
import Banner from "../Components/Banner/Banner";
import NewsSlider from "../Components/News/NewsSlider";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Customer from "../Components/Customer/Customer";

function News () {


    return (
        <>
            <Banner title={"News In"}/>
            <NewsSlider />
            <Customer/>
          <NewsLetter/>

</>
    )
}

export default News;