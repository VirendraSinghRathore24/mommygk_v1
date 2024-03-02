import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom";
import InsertCard from "./components/admin/InsertCard";
import FoodPage from "./components/FoodPage";
import BlogPage from "./components/BlogPage"
import InsertBlog from "./components/admin/InsertBlog";
import AboutUS from "./components/AboutUS";
import ClothsPage from "./components/ClothsPage";
import ToysPage from "./components/ToysPage";
import InsertCategoryCard from "./components/admin/InsertCategoryCard";
import Footer from "./components/Footer";
import BlogList from "./components/admin/BlogList";
import UpdateBlog from "./components/admin/UpdateBlog";
import BabyFood from "./components/BabyFood";
import ReactGA from "react-ga";
import Users from "./components/Users";
import Users1 from "./components/Users1";
import Users7Month from "./components/Users7Month";
import Users8Month from "./components/Users8Month";
import BabyFood7Month from "./components/BabyFood7Month";
import BabyFood8Month from "./components/BabyFood8Month";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import ContactUS from "./components/ContactUS";
import PageComponent from './components/PageComponent';
import UsersSpices from "./components/UsersSpices";
import BabyFoodSpices from "./components/BabyFoodSpices";
import FoodReciepesVideo from "./components/FoodReciepesVideo";
import Blogs from "./components/Blogs";
import BabyFood6MonthHindi from "./components/BabyFood6MonthHindi";
import FoodCharts from "./components/FoodCharts";
import FoodChartsHindi from "./components/FoodChartsHindi";
import AdsComponent from "./components/AdsComponent";
import Toys from "./components/Toys";
import NewMomChecklist from "./components/NewMomChecklist";
import FoodPlateChecklist from "./components/FoodPlateChecklist";
import ProofingChecklist from "./components/ProofingChecklist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BabyFood7MonthHindi from "./components/BabyFood7MonthHindi";
import BabyFood9Month from "./components/BabyFood9Month";
import BabyFood10Month from "./components/BabyFood10Month";
import Invoice from "./components/Invoice";
import Subscribers from "./components/admin/Subscribers";
import BananaRecipe from "./components/Blogs/BananaRecipe";
import CarrotRecipe from "./components/Blogs/CarrotRecipe";
import SweetpotatoRecipe from "./components/Blogs/SweetpotatoRecipe";

const TRACKING_ID = "G-VLLGEZ81FC";
ReactGA.initialize(TRACKING_ID);

export default function App() {

  return (
    <div className="w-full h-screen">
      <Header/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/insertcard" element={<InsertCard/>}/>
          <Route path="/insertcategorycard" element={<InsertCategoryCard/>}/>
          <Route path="/insertblog" element={<InsertBlog/>}/>
          <Route path="/food" element={<FoodPage/>}/>
          <Route path="/blogs/:title" element={<BlogPage/>}/>
          <Route path="/aboutus" element={<AboutUS/>}/>
          <Route path="/contactus" element={<ContactUS/>}/>
          <Route path="/cloths" element={<ClothsPage/>}/>
          <Route path="/toys" element={<Toys/>}/>
          <Route path="/admin/blogs" element={<BlogList/>}/>
          <Route path="/admin/blogs/:category" element={<UpdateBlog/>}/>
          <Route path="/foodrecipesvideo" element={<FoodReciepesVideo/>}/>
          <Route path="/babyfoodcharts" element={<FoodCharts/>}/>
          <Route path="/babyfoodchartshindi" element={<FoodChartsHindi/>}/>
          <Route path="/babyfood6month" element={<BabyFood/>}/>
          <Route path="/babyfood6monthhindi" element={<BabyFood6MonthHindi/>}/>
          <Route path="/babyfood7monthhindi" element={<BabyFood7MonthHindi/>}/>
          <Route path="/babyfood7month" element={<BabyFood7Month/>}/>
          <Route path="/babyfoodspices" element={<BabyFoodSpices/>}/>
          <Route path="/foodfor8monthbaby" element={<BabyFood8Month/>}/>
          <Route path="/babyfood9month" element={<BabyFood9Month/>}/>
          <Route path="/babyfood10month" element={<BabyFood10Month/>}/>
          <Route path="/newmomchecklist" element={<NewMomChecklist/>}/>
          <Route path="/foodplatecheklist" element={<FoodPlateChecklist/>}/>
          <Route path="/proofingheklist" element={<ProofingChecklist/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users1" element={<Users1/>}/>
          <Route path="/users6" element={<UsersSpices/>}/>
          <Route path="/users7" element={<Users7Month/>}/>
          <Route path="/users8" element={<Users8Month/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/termsofuse" element={<TermsOfUse/>}/>
          <Route path="/admin/subscibers" element={<Subscribers/>}/>
          <Route path="/blogs/bananarecipefor6monthbaby" element={<BananaRecipe/>}/>
          <Route path="/blogs/carrotrecipefor6monthbaby" element={<CarrotRecipe/>}/>
          <Route path="/blogs/sweetpotatorecipefor6monthbaby" element={<SweetpotatoRecipe/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
      </Routes>
      <Footer/>
      <>      <PageComponent/>
      </>
      <ToastContainer/>

    </div>
  )
}
