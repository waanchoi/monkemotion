import { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {
    useRecoilState, useResetRecoilState
} from 'recoil';
import { currentLabelRecoil, currentXRecoil, currentYRecoil, currentImageRecoil, dataRecoil } from "../recoil/recoil"
import {initializeApp} from 'firebase/app';
import {getStorage, ref, getDownloadURL} from 'firebase/storage'
import { getFirestore, collection, doc, query, orderBy, getDocs, setDoc, addDoc, limit, where } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAEj4_AMYzb4365skaaP3lxaOjBjD87KOY",
    authDomain: "monkemotion.firebaseapp.com",
    projectId: "monkemotion",
    storageBucket: "monkemotion.appspot.com",
    messagingSenderId: "232300856961",
    appId: "1:232300856961:web:3566607c274ba7f1296f80",
    measurementId: "G-53MQMHVW2G"
  };

  const app = initializeApp(firebaseConfig)
  const storage = getStorage(app);

  const db = getFirestore(app);

function TagCard() {

    const reset = useResetRecoilState(dataRecoil);
    const resetLabel = useResetRecoilState(currentLabelRecoil);

    const imageRef = useRef()
    const [currentImage, setCurrentImage] = useRecoilState(currentImageRecoil)



    const [currentLabel, setCurrentLabel] = useRecoilState(currentLabelRecoil)
    const [currentX, setCurrentX] = useRecoilState(currentXRecoil)
    const [currentY, setCurrentY] = useRecoilState(currentYRecoil)


    const [data, setData] = useRecoilState(dataRecoil)
    const [isDataReady, setIsDataReady] = useState(false)
    const [isDataEdited, setIsDataEdited] = useState(false)


    //data submission
    const [isLoading, setIsLoading] = useState(false)
    const [isImageLoading,setIsImageLoading] = useState(false);

    const [imageNames, setImageNames] = useState([]);

    // const getFirestoreImageNames = async () => {
    //     const namesRef = collection(db, "image_names");
    //     const q = query(namesRef, orderBy("name"));

    //     const querySnapshot = await getDocs(q);
    //     var tempArray = [];
    //     querySnapshot.forEach((doc) => {
    //         var data = doc.data();
    //         tempArray.push(data.name);
    //     });
    //     setImageNames(tempArray);
    //     getFirestoreImages(tempArray);
    // }

    const getFirestoreImages = async(imageArray = null) => {
        const namesRef = collection(db, "image_names");
        const q = query(namesRef, orderBy("id", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        var documentSize;
        querySnapshot.forEach((doc) => {
            var data = doc.data();
            documentSize = data.id;
        })
        console.log(documentSize)
        var random = Math.floor((Math.random() * documentSize));
        console.log(random)
        const q2 = query(namesRef, where('id', '==', random));
        const querySnapshot2 = await getDocs(q2);
        var imageName;
        querySnapshot2.forEach((doc) => {
            var data = doc.data();
            imageName = data.name;
        });
        const storageRef = ref(storage);
        const imageRef = ref(storageRef, imageName.slice(0,3) + "/" + imageName);
        getDownloadURL(imageRef)
        .then((url) => {
            setCurrentImage(url);
            setIsImageLoading(false);
        });
        setIsLoading(false);
    }

    useEffect(()=> {
        setIsImageLoading(true);
        getFirestoreImages();

    },[])

    useEffect(() => {
       
        for (let [key] of Object.entries(data)) {
            if (Number(data[key].x) === 0 && Number(data[key].y) === 0 && data[key].visible === true) {
                setIsDataReady(false)
                return
            }
        }
        setIsDataReady(true);

        
    }, [data])


    useEffect(() => {
        for (let [key] of Object.entries(data)) {
            if (Number(data[key].x) !== 0 || Number(data[key].y) !== 0) {
                setIsDataEdited(true)
                return
            }
        }
        setIsDataEdited(false)
    }, [data])


   async function submitData() {
        setIsLoading(true)

        var firebaseData = {};
        Object.assign(firebaseData, data);
        firebaseData['url'] = currentImage;
        await addDoc(collection(db, "data_collection"), firebaseData);
        // mock sending data to backend api
        //@TODO
        // Handle reseting data, generate new image, etc...
        setIsLoading(false)
        reset()
        resetLabel();
        generateNewImage(true)


    }


    function generateNewImage(afterSubmitting) {
        if (isDataEdited && !afterSubmitting) {
            if (window.confirm("Changes on currently working data will be discarded. Are you sure you want to generate new image?")) {
                setIsLoading(true);
                setIsImageLoading(true);
                // later fetch image from backend
                // setTimeout(() => {
                //     const newImage = `https://picsum.photos/400/${Math.floor(Math.random() * 100 + 400)}`
                //     setCurrentImage(newImage)
                //     reset()
                //     setIsLoading(false)
                // }, 2000);
               reset();
               resetLabel();
                getFirestoreImages();

        
            }

        } else {
            setIsLoading(true);
            setIsImageLoading(true);

            // setTimeout(() => {
            //     const newImage = `https://picsum.photos/400/${Math.floor(Math.random() * 100 + 400)}`
            //     setCurrentImage(newImage)
            //     reset()
            //     setIsLoading(false)
            // }, 2000);
            reset();
            resetLabel();
            getFirestoreImages();
        }

    }


    const imageClick = (e) => {

        if(currentLabel == "")
        {
            alert('Please select a label.');
            return;
    }

        var offset = imageRef.current.getBoundingClientRect();
        var x = Math.floor((e.pageX - offset.left) / offset.width * 10000) / 100;
        var y = Math.floor((e.pageY - offset.top) / offset.height * 10000) / 100;
        console.log(currentLabel, x, y);

        setCurrentX(x)
        setCurrentY(y)

        const updatedCurrentLabel = { x: String(x), y: String(y), visible: true}
        console.log(data)

        setData({ ...data, [currentLabel]: updatedCurrentLabel })

    }

    const changeVisibility = () => {
        if(currentLabel == "")
        {
            alert('Please select a label.');
            return;
    }
        setCurrentX(0)
        setCurrentY(0)

        const updatedCurrentLabel = { x:String(0), y:String(0), visible:false}
        console.log(data)

        setData ({...data, [currentLabel]: updatedCurrentLabel})
    }

    return (

        <Grid item xs={12} md={5}>
            <Card sx={{ height: 425, width: "100%", }}>

                <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant='body1' sx={{ m: 1 }}>Label</Typography>
                    {
                        isImageLoading ?
                            <CircularProgress color="inherit" style={{marginTop:50}} />
                            :
                            <img alt="img" onClick={imageClick} ref={imageRef} src={currentImage} style={{ borderRadius: "10px", cursor: "pointer", maxHeight: 325 }}></img>
                    }
                </CardContent>

            </Card>
            <Box display={"flex"} justifyContent={"flex-end"} sx={{ mr: -1, mt: 1 }}>
                <CardActions>
                    <Button variant='outlined' size="small" onClick={() => {changeVisibility();}}>Not Visible</Button>
                    <Button variant='outlined' size="small" onClick={() => { generateNewImage(false) }}>Generate New Image</Button>
                    <Button variant='outlined' size="small" onClick={() => { submitData() }} disabled={!isDataReady} >Submit Data</Button>
                </CardActions>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isLoading}
            >
                <Typography variant="h4" sx={{ mr: 2 }}>Processing...</Typography>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Grid>

    );
                }

export default TagCard;
