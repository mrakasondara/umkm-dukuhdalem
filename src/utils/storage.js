import {getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject, uploadBytes} from 'firebase/storage'

import app from './firebase-sdk'

const getImageFromStorage = async (name) => {
    const storage = getStorage()
    const gsRef = ref(storage, `gs://umkm-dukuhdalem-b0d72.appspot.com/produk/${name}`)
    const getUrl = await getDownloadURL(gsRef).then((url)=>{
        return url
    })
    return getUrl
}

const addImageToStorage = async (thumbnail,name) =>{
    const storage = getStorage(app)
    const storageRef = ref(storage, `produk/${name}`)

    uploadBytes(storageRef, thumbnail).then(snapshot=> {
        getDownloadURL(snapshot.ref).then(url=> {})
    })
}

const deleteImageFromStorage = async (name) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, `produk/${name}`);
  
    await deleteObject(storageRef).then((res) => {
      return res;
    });
  };

export {getImageFromStorage, addImageToStorage, deleteImageFromStorage}