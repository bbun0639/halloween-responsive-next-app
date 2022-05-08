import Header from "./Header/Header";
import Category from "./Category/Category";
import About from "./About/About";
import TrickOrTreat from "./TrickOrTreat/TrickOrTreat";
import Discount from "./Discount/Discount";
import NewProduct from "./NewProduct/NewProduct";
import Newsletter from "./Newsletter/Newsletter";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <About></About>
      <TrickOrTreat></TrickOrTreat>
      <Discount></Discount>
      <NewProduct></NewProduct>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default Home;
