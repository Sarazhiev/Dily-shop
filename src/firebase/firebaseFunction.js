import {db, storage} from "./firebase";
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "@firebase/firestore";
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {getAllProducts} from "../redux/reducers/products";

const userCollectionRef = collection(db,'products');


//получение данных из базы
export const getData = (setData) => {
    getDocs(userCollectionRef)
        .then((res) => setData(res.docs.map(el => ({...el.data(), id:el.id}) )))
};


// обновление товара
export const updateProduct = (id, obj) => {
    const productDoc = doc(db, 'users', id);
    updateDoc(productDoc, obj)
};

// удаление товара
export const deleteProduct = (id) => {
    const productDoc = doc(db, 'shoes', id);
    deleteDoc(productDoc)
};

// создание товара
export const createProduct = (image, setProgress, data, dispatch, user) => {
    console.log(image);
    if (!image) return;
    const storageRef = ref(storage, `products/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on("state_changed",
        (snapshot => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog)
        }),
        (err) => console.log(err),
        () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (url)=> {
                       await addDoc(userCollectionRef, {...data, image:url});
                        await getDocs(collection(db, 'products'))
                            .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id:el.id}))})));
                   // await getDocs(collection(db, 'users'))
                   //     .then((res) => {
                   //         updateDoc(doc(db, 'users', res.docs.map(el => ({...el.data(), id:el.id}) ).find(item => item.email === user.email).id), {
                   //             ...user,
                   //             gitl: [...user.gitl, {...data, image:url}]
                   //         })
                   //     } )

                    })
        })
};
