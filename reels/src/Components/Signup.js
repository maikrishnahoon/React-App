import React,{useState,useEffect,useContext} from 'react'
import{AuthContext} from '../Context/AuthProvider'; 
import { storage,database } from '../firebase';
function Signup() {
    const[email,setEmail] = useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[error,setError] = useState('');
    const[loading,setLoading] = useState(false);
    const[file,setFile] = useState(null);
    const{signup} = useContext(AuthContext);  // getting signup object by AuthContext de-structuring
    // console.log(signup);

    const handleSignup =async (e)=>{
        e.preventDefault();     // when page subimitted its reloaded to prevent it from reloading.
        try{
        setLoading(true);   // submit karte time loading on kardi
        let res = await signup(email,password); // creating a user--signup--function in AuthProvider
        let uid = res.user.uid;   // method
        // console.log(uid);
        const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file); // user folder-->uid folder-->uploaded file(profile image)
       
        // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
        // fn1 -> progress tracking
        // fn2 -> error detection
        // fn3->  sucsess detection
        uploadTaskListener.on(`state_changed`,fn1,fn2,fn3); // method contain 3 callback functions
         function fn1(snapshot){  // snapshot is internal function serach above 3 callbacks on google
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');       
         }
         function fn2(error){
             setError(error);
             setTimeout(()=>{   // to clear error after 2 sec
               setError('')  
             },2000)
         }
           async function fn3(){
            let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
            console.log(downloadUrl);
             await database.users.doc(uid).set({      // to add data in firestore(users is exported through firebase.js)--syntax=> await db.collection('cities').doc(uid).set(data);
               // these are key value pair stored in firestore
                email:email,
                 UserId:uid,
                 username:name,
                 createdAt:database.getCurrentTimeStamp(),
                 profileUrl:downloadUrl,
                 postIds:[],
             })
           } 

        setLoading(false);
        console.log('User has Signed up');
        }
        catch(err){
            setError(err)
            setTimeout(()=>setError(''),2000);
            setLoading(false);
        }
    }

    const handleFileSubmit=(e)=>{
        let file = e.target.files[0];      //(method) files is array which contain uploaded image at 0 idx
        // console.log(file);
         if(file != null){
             setFile(file);
         }
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                   <label htmlFor="'profile">Profile image</label> 
                   <input type='file' accept='image/*' onChange={handleFileSubmit}></input> 
                </div>
                <button type='submit' disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default Signup


