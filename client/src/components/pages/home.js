import React, { useEffect, useState } from "react";
import {
  listAllProducts,
  listOrderedProducts,
} from "../../functions/productCRUD";
import { getCategoryLists } from "../../functions/categoryCRUD";

import TypewriterComponent from "../reusable-Components/TypewriterComponent";
import { NewestArrivals } from "./HomePageSections/NewestArrivals";
import { BestSellers } from "./HomePageSections/BestSellers";
import CategoryLists from "./HomePageSections/CategoryLists";
import SubCategoriesList from "./HomePageSections/SubCategoriesList";
import { getSubcategoryList } from "../../functions/subCategoryCrud";

export const Home = () => {
  const [allcategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCategoryLists().then((res) => {
      setAllCategories(res.data);
      console.log(JSON.stringify(res.data));
    });
  }, []);
  return (
    <>
      <div className="jumbotron text-center h1 font-wright-bold">
        <h1>HirEasy</h1>
        <figcaption>
          <TypewriterComponent text={["One-Stop Recruitment Platform"]} />
        </figcaption>
      </div>
      <hr />
      <h3 className="display-4  text-center mt-1 mb-1 jumotron-sm">
        Latest Jobs
      </h3>
      <NewestArrivals />
      <br />
      <br />
      <h3 className="display-3  text-center mt-1 mb-1 jumotron-sm">Remote</h3>
      <BestSellers />
      <h3 className=" text-center mt-1 mb-1 display-4  jumotron-sm">
        Categories
      </h3>
      <CategoryLists />
      <h3 className="text-center mt-1 mb-1 display-4  jumotron-sm">
        Categories
      </h3>
      <SubCategoriesList />
    </>
  );
};
