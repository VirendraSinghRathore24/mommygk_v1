import React, { useEffect, useState } from 'react'
import { db, storage } from '../../config/firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';


const AddFoodVideo = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [title, setTitle] = useState('');
  const [instaUrl, setInstaUrl] = useState('');
  const [newFileUpload, setNewFileUpload] = useState(false);

  const [isSubmit, setIsSubmit] = useState(true);
  const [docId, setDocId] = useState('');
  

  const [posts, setPosts] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setNewFileUpload(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `images/${selectedFile.name}`);
    await uploadBytes(imageRef, selectedFile)

    const imageUrl = await getDownloadURL(imageRef);

    addFoodVideo(imageUrl);

    alert("Food Video Uploaded");

    clearData();
    getData();

  }

  const foodVideosCollectionRef = collection(db, "FoodVideos");

  const addFoodVideo = async (imageUrl) => 
  {
      try
      {
        await addDoc(foodVideosCollectionRef, {
          title : title, 
          category : selectedOption, 
          imageUrl: imageUrl, 
          InstaUrl: instaUrl
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
   
    setPosts(filteredData);
  }

  const handleEdit = (p) => {

    setIsSubmit(false);
    setTitle(p.title);
    setSelectedOption(p.category);
    setSelectedFile(p.imageUrl);
    setInstaUrl(p.InstaUrl);
    setDocId(p.id);
  }
  const handleDelete = async(id) => {
    var res = window.confirm("Delete the item?");
    if (res) {
        const foodDoc = doc(db, "FoodVideos", id);
        await deleteDoc(foodDoc);

        getData();
    } else {
      // Do nothing!
      console.log('Not deleted');
    }

     
  }

  const handleUpdate =  async() => {
        const foodDoc = doc(db, "FoodVideos", docId);
        let imageUrl = selectedFile;

        if(newFileUpload)
        {
            const imageRef = ref(storage, `images/${selectedFile.name}`);
            await uploadBytes(imageRef, selectedFile);

            imageUrl = await getDownloadURL(imageRef);
        }
        
        await updateDoc(foodDoc, {title : title, category : selectedOption, imageUrl: imageUrl, InstaUrl: instaUrl });

        alert("Updated Successfully !!!");
        getData();
        clearData();
  }

  const clearData = () => {
    setIsSubmit(true);
    setTitle('');
    setSelectedOption('');
    setSelectedFile('');
    setInstaUrl('');
    setNewFileUpload(false);
  }

   useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className='flex mt-10'>
        <div className='flex flex-col gap-y-10 p-10 w-6/12 mx-auto'>
            <div className='text-2xl font-semibold text-center'>Add Food Video</div>
            <div className='flex gap-x-6'>
              <h2>Title:</h2>
              <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Banana recipe ...' className='border-2 border-black rounded-md px-2' />
            </div>
            <div className='flex gap-x-6'>
            <h2>Category:</h2>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select Category</option>
                <option value="6 to 12 Months">6 to 12 Months</option>
                <option value="12+ Months">12+ Months</option>
              </select>
            </div>
            <div className='flex gap-x-6'>
            <h2>Upload Image:</h2>
              <input type="file" onChange={handleFileChange} />
              
              
            </div>
            <div className='flex gap-x-6'>
              <h2>Instagram Url:</h2> 
              <input type='text' value={instaUrl} onChange={(e) => setInstaUrl(e.target.value)} placeholder='https...' className='border-2 border-black rounded-md px-2'/>
            </div>
            {
              isSubmit ? (<button onClick={handleSubmit} className='bg-green-600 text-white rounded-lg px-4 py-1 text-xl text-center'>Submit</button>) 
              : (<button onClick={handleUpdate} className='bg-yellow-500 text-white rounded-lg px-4 py-1 text-xl text-center'>Update</button>)
            }
            
        </div>
        <div className='w-6/12 '>
            
            
                <div className="overflow-hidden mt-10">
       <table className="w-10/12 mx-auto text-left text-sm font-light">
                
                <thead className="font-medium ">
                    <tr className='bg-orange-300 border-2 border-black text-blue-800 font-bold text-md md:text-xl '>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">#</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center">Title</th>
                    <th scope="col" className="px-1 py-2 border-r-2 text-center ">Category</th>
                    <th scope="col" className="px-1 py-2  text-center border-r-2" >Edit</th>
                    <th scope="col" className="px-1 py-2 border-r-2 border-black text-center text-wrap" >Delete</th>
                    </tr>
                </thead>

                    <tbody>
                {
                    
                    posts.map((p, index) => (
                        
                        <tr className="border-2 border-black ">
                            <td className="whitespace-wrap text-[12px] font-medium px-1 py-2 border-r-2  align-baseline text-center text-wrap">{index+1}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.title}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center text-wrap">{p.category}</td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center break-all text-wrap">
                            <button onClick={() => handleEdit(p)} className='bg-blue-600 px-4 py-1 rounded-lg text-white'>Edit</button></td>
                            <td className="whitespace-wrap text-md font-medium px-1 py-2 border-r-2 align-baseline text-center border-black">
                            <button onClick={() => handleDelete(p.id)} className='bg-red-600 px-4 py-1 rounded-lg text-white'>Delete</button>
                            </td>
                            
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

export default AddFoodVideo