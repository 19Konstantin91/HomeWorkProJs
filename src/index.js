import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import './style/main.scss'

const productList = getProductList(20);

renderGoodsList(productList);