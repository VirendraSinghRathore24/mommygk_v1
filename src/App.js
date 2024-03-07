import Header from "./components/Header"
import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom";
import InsertCard from "./components/admin/InsertCard";
import FoodPage from "./components/FoodPage";
import BlogPage from "./components/BlogPage"
import InsertBlog from "./components/admin/InsertBlog";
import AboutUS from "./components/AboutUS";
import ClothsPage from "./components/ClothsPage";
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
import RecipeCard from "./components/Blogs/RecipePage";
import RecipePage from "./components/Blogs/RecipePage";
import PageNotFound from "./components/PageNotFound";
import BabyFood8MonthHindi from "./components/BabyFood8MonthHindi";

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
          <Route path="/baby-food-recipes-video" element={<FoodReciepesVideo/>}/>
          <Route path="/babyfoodcharts" element={<FoodCharts/>}/>
          <Route path="/babyfoodchartshindi" element={<FoodChartsHindi/>}/>
          <Route path="/babyfoodcharts/6-month-baby-food-chart" element={<BabyFood/>}/>
          <Route path="/babyfoodcharts/6-month-baby-food-chart-hindi" element={<BabyFood6MonthHindi/>}/>
          <Route path="/babyfoodcharts/7-month-baby-food-chart-hindi" element={<BabyFood7MonthHindi/>}/>
          <Route path="/babyfoodcharts/8-month-baby-food-chart-hindi" element={<BabyFood8MonthHindi/>}/>
          <Route path="/babyfoodcharts/7-month-baby-food-chart" element={<BabyFood7Month/>}/>
          <Route path="/babyfoodspices" element={<BabyFoodSpices/>}/>
          <Route path="/babyfoodcharts/8-month-baby-food-chart" element={<BabyFood8Month/>}/>
          <Route path="/babyfoodcharts/9-month-baby-food-chart" element={<BabyFood9Month/>}/>
          <Route path="/babyfoodcharts/10-month-baby-food-chart" element={<BabyFood10Month/>}/>
          <Route path="/newmomchecklist" element={<NewMomChecklist/>}/>
          <Route path="/foodplatecheklist" element={<FoodPlateChecklist/>}/>
          <Route path="/proofingheklist" element={<ProofingChecklist/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users1" element={<Users1/>}/>
          <Route path="/users6" element={<UsersSpices/>}/>
          <Route path="/users7" element={<Users7Month/>}/>
          <Route path="/users8" element={<Users8Month/>}/>
          <Route path="/baby-food-recipes" element={<Blogs/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/termsofuse" element={<TermsOfUse/>}/>
          <Route path="/admin/subscribers" element={<Subscribers/>}/>
          <Route path="/baby-food-recipes/:month/:recipe" element={<RecipePage/>}/>
          <Route path="/recipe" element={<RecipeCard/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
      <>      <PageComponent/>
      </>
      <ToastContainer/>

    </div>
  )
}
