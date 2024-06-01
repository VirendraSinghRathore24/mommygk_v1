import React, { useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Spinner from '../../components/Spinner'
//import { useLocation } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import baseUrl from '../../baseUrl';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function InsertBlog() {

    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [month, setMonth] = useState('');
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [docId, setDocId] = useState("");
    const [isSubmit, setIsSubmit] = useState(true);
    const [youtubeLink, setYoutubeLink] = useState('');

    const navigate = useNavigate();

    const [titleFile, setTitleFile] = useState('');
    const [uploadFile, setUploadFile] = useState('');
    const [blogTitle, setBlogTitle] = useState("");
    const [imageUrl, setImageUrl] = useState('');

    const [uploadedBlogs, setUploadedBlogs] = useState([]);
    
    const editor = useRef(null);

    async function submitHandler(e){
        e.preventDefault();
        try{
            setLoading(true);
            e.preventDefault();
    
            addFoodBlog();
    
           // await axios.post(`${baseUrl}/insertblog`, data);
        
            //alert("Blog inserted Successfully!!!");
            navigate(`/recipeblogpreview/${title}`);
        }
        catch(err){
            console.log(err);
        }
        setLoading(false);
    }

  const foodVideosCollectionRef = collection(db, "FoodBlogs");

  const addFoodBlog = async () => 
  {
      try
      {
        await addDoc(foodVideosCollectionRef, {
          titleFile : titleFile, 
          blogTitle : blogTitle, 
          description: description,
          month : month,
          title : title,
          youtubeLink : youtubeLink,
          isPublish : false
        });
      }
      catch(err) 
      {
        console.log(err);
      }
  }


  const getData =  async() => {
    const data = await getDocs(foodVideosCollectionRef);
    const filteredData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
   
    const uploaded = filteredData.filter(x => x.isPublish === true);
    setUploadedBlogs(uploaded);

    setPosts(filteredData);
  }
    const handleTitleFileChange = (e) => {
        setTitleFile(e.target.files[0]);
    }

    const handleUploadFileChange = (e) => {
        setUploadFile(e.target.files[0]);
    }

    const titleFileClick = async(e) => {
        // upload title file using firebase
        try{
            e.preventDefault();

            const imageRef = ref(storage, `blogs/${titleFile.name}`);
            await uploadBytes(imageRef, titleFile);

            const imageUrl1 = await getDownloadURL(imageRef);
            setTitleFile(imageUrl1);

            alert('image uploaded successfully !!!');
        }
        catch(er)
        {
            console.log(er);
        }
    }
    const uploadFileClick = async(e) => {
        // upload title file using firebase
        try{
            e.preventDefault();

            const imageRef = ref(storage, `blogs/${uploadFile.name}`);
            await uploadBytes(imageRef, uploadFile);

            alert('image uploaded successfully !!!');

            const imageUrl1 = await getDownloadURL(imageRef);
            setImageUrl(imageUrl1);
        }
        catch(er)
        {
            console.log(er);
        }
    }

    const updateHandler = async() => {
        try
        {
            setLoading(true);
            const foodDoc = doc(db, "FoodBlogs", docId);
            
            await updateDoc(foodDoc, {title : title, titleFile : titleFile, description: description, month: month, blogTitle:blogTitle, youtubeLink:youtubeLink, isPublish : false });

            //alert("Updated Successfully !!!");
            navigate(`/recipeblogpreview/${title}`);
            getData();
            //clearData();

            setLoading(false);
        }
        catch(e)
        {
            console.log(e);
        }
    }

    const handleEdit = (p) =>{
        setTitle(p.title);
        setTitleFile(p.titleFile);
        setBlogTitle(p.blogTitle);
        setDescription(p.description);
        setMonth(p.month);
        setYoutubeLink(p.youtubeLink);
        
        setDocId(p.id);
        setIsSubmit(false);
    
        window.scroll(0,0);
    }
    const handleDelete = async(id) => {
        var res = window.confirm("Delete the item?");
        if (res) {
        const foodDoc = doc(db, "FoodBlogs", id);
        await deleteDoc(foodDoc);

        getData();
    } else {
      // Do nothing!
      console.log('Not deleted');
    }
    }

    const handlePublish = async(id) => {
        const foodDoc = doc(db, "FoodBlogs", id);
        await updateDoc(foodDoc, {isPublish: true});

        alert('Blog Published Successfully !!!');

        getData();
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className='w-full'>
    {
        loading ? (<div className='mt-80 flex items-center justify-center'>
        <Spinner type={"Inserting, "}/>
        </div>) : (

    
    <div className='flex flex-col mt-[20px] w-full mx-auto p-4  '>
    <div>
        <p className='flex text-2xl justify-center items-center mx-auto font-semibold mb-5'>Food Blog writing...</p>
    </div>
        
{/* 
        <div className='flex gap-x-6 py-3'>
            <p>Sidebar Title: </p>
            <input name="title" value={sidebarTitle} onChange={(e) => {setSidebarTitle(e.target.value)}} type='text' placeholder='Enter sidebar title' className='w-[400px] h-[30px] border-2 border-black '></input>
        </div> */}
        <div className='flex justify-evenly py-3'>
            <p>Title: </p>
            <input name="title1" value={title} onChange={(e) => {setTitle(e.target.value)}} type='text' placeholder='Banana Puree' className='w-8/12 h-[30px] ml-8 border-2 border-black px-1'></input>
        </div>
        <div className='flex justify-evenly py-3'>
            <p>Blog Title: </p>
            <input name="title" value={blogTitle} onChange={(e) => {setBlogTitle(e.target.value)}} type='text' placeholder='Enter blog title' className='w-8/12 h-[30px] border-2 border-black px-1'></input>
        </div>
        <div className='flex justify-evenly py-3'>
            <p>Month: </p>
            <input name="month" value={month} onChange={(e) => {setMonth(e.target.value)}} type='text' placeholder='Enter month' className='w-8/12 h-[30px] ml-6 border-2 border-black px-1'></input>
        </div>
        <div className='flex justify-between w-full md:w-10/12 mx-auto py-3'>
            <p>Title Image: </p>
            <input type='file' onChange={handleTitleFileChange}/>
            <button onClick={titleFileClick} className='bg-green-600 px-2 py-1 rounded-md text-white cursor-pointer'>Upload</button>
        </div>
        <hr className='my-4'></hr>
        <div className='flex justify-evenly py-3'>
            <p>Youtube Link: </p>
            <input name="youtubelink" value={youtubeLink} onChange={(e) => {setYoutubeLink(e.target.value)}} type='text' placeholder='Enter youtube link...' className='w-8/12 h-[30px] border-2 border-black px-1'></input>
        </div>
        <div className='flex justify-between w-full md:w-10/12 mx-auto py-3 '>
            <p>Upload Image: </p>
            <input type='file' onChange={handleUploadFileChange}/>
            <button onClick={uploadFileClick} className='bg-green-600 px-2 py-1 rounded-md text-white cursor-pointer'>Upload</button>
        </div>
        
        <div className='text-blue-600 font-semibold my-2'>
            {imageUrl}
        </div>
        
        <div className='py-3'>
        
        <div className=''>
            <JoditEditor
                ref={editor}
                value={description}
                onChange={newContent => setDescription(newContent)}              
            />
           </div>
        </div>

        <div className='text-center md:text-left py-4'>
          {
            isSubmit ? (<button onClick={submitHandler} className='bg-green-500 h-10 w-[200px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in cursor-pointer '>Save & Preview</button>) 
                     : (<button onClick={updateHandler} className='bg-yellow-500 h-10 w-[200px] font-semibold rounded-md text-richblack-700 hover:scale-110 transition duration-300 ease-in cursor-pointer '>Update & Preview</button>)
          }
            
        </div>
    </div>

   )
    }
    <div className=' w-full mx-auto py-2'>
            
            
            <div className="overflow-hidden mt-10">
   <table className="w-10/12 mx-auto overflow-y-scroll text-left text-sm font-light">
            
            <thead className="font-medium ">
                <tr className='bg-orange-300 border-2 border-black text-blue-800 font-bold text-md md:text-xl '>
                <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                <th scope="col" className="px-1 py-2 border-r-2 text-center">Title</th>
                <th scope="col" className="px-1 py-2  text-center border-r-2" >Edit</th>
                <th scope="col" className="px-1 py-2 border-r-2 text-center" >Delete</th>
                <th scope="col" className="px-1 py-2 border-r-2 border-black text-center text-wrap" >Publish</th>
                </tr>
            </thead>

                <tbody>
            {
                
                posts.map((p, index) => (
                    
                    <tr className="border-2 border-black ">
                        <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                        <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.title}</td>
                        <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center">
                        <button onClick={() => handleEdit(p)} className='bg-blue-600 px-4 py-1 rounded-lg text-white'>Edit</button></td>
                        <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center border-black">
                        <button onClick={() => handleDelete(p.id)} className='bg-red-600 px-4 py-1 rounded-lg text-white'>Delete</button>
                        </td>
                        <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center border-black">
                        <button onClick={() => handlePublish(p.id)} className='bg-blue-600 px-4 py-1 rounded-lg text-white'>Publish</button>
                        </td>
                    </tr>)
        )     
       } 
       </tbody> 
        
       </table>
   </div> 
     
    </div>

    <hr className='my-4'/>
    <div className='p-4 font-bold text-2xl text-center'>Uploaded Blogs:</div>
    <div className=' w-full py-2'>
            
            
            <div className="overflow-hidden mt-10">
   <table className="w-10/12 mx-auto overflow-y-scroll text-left text-sm font-light">
            
            <thead className="font-medium ">
                <tr className='bg-orange-300 border-2 border-black text-blue-800 font-bold text-md md:text-xl '>
                <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                <th scope="col" className="px-1 py-2 border-r-2 border-black text-center">Title</th>
                </tr>
            </thead>

                <tbody>
            {
                
                uploadedBlogs.map((p, index) => (
                    
                    <tr className="border-2 border-black ">
                        <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                        <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 border-black align-baseline text-center text-wrap">{p.title}</td>
                    </tr>)
        )     
       } 
       </tbody> 
        
       </table>
   </div> 
     
    </div>
    </div>
    
  )
}

export default InsertBlog