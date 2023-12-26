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
import BabyFood7Month from "./components/BabyFood7Month";
import BabyFood8Month from "./components/BabyFoodSpices";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import ContactUS from "./components/ContactUS";
import PageComponent from './components/PageComponent';
import UsersSpices from "./components/UsersSpices";
import BabyFoodSpices from "./components/BabyFoodSpices";
import FoodReciepesVideo from "./components/FoodReciepesVideo";
import Blogs from "./components/Blogs";

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
          <Route path="/toys" element={<ToysPage/>}/>
          <Route path="/admin/blogs" element={<BlogList/>}/>
          <Route path="/admin/blogs/:category" element={<UpdateBlog/>}/>
          <Route path="/foodrecipesvideo" element={<FoodReciepesVideo/>}/>
          <Route path="/babyfood6month" element={<BabyFood/>}/>
          <Route path="/babyfood7month" element={<BabyFood7Month/>}/>
          <Route path="/babyfoodspices" element={<BabyFoodSpices/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/users1" element={<Users1/>}/>
          <Route path="/users6" element={<UsersSpices/>}/>
          <Route path="/users7" element={<Users7Month/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/termsofuse" element={<TermsOfUse/>}/>
      </Routes>
      <Footer/>
      <>      <PageComponent/>
      </>

    </div>
  )
}
