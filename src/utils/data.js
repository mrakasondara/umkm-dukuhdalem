import {get,child, getDatabase, ref, push, set, remove} from 'firebase/database'
import app from './firebase-sdk'
import { addImageToStorage, getImageFromStorage, deleteImageFromStorage } from './storage'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'


const database = getDatabase(app)
const rootReference = ref(database)

const getAllProduk = async () =>{
    const dbGet = await get(child(rootReference, "produk"))
    const dbGetObject = Object.values(dbGet.val())

    // return dbGetObject
    const thumbnail = dbGetObject.map((db)=>{
        return getImageFromStorage(db.gambar).then(res=>{
            return res
        })
    })

    const getThumb = await Promise.all(thumbnail).then(res=>{
        return res
    })

    const data = dbGetObject.map((produk, index)=>{
        return {...produk, gambar: getThumb[index]}
    })
    return data
}

const getDetailProduk = async (id) =>{
    const dbGet = await get(child(rootReference, `produk/${id}`));
    const dbGetObject = dbGet.val();
    if (!dbGetObject) {
      return false;
    }
    const thumbnail = await getImageFromStorage(
    dbGetObject.gambar
    ).then((res) => {
    return res;
    });

    const detailProduk = { ...dbGetObject, gambar: thumbnail };
    return detailProduk;
}

const pushProduk = async ({data, thumbnail}) =>{
    const dbRef = child(rootReference, "produk")

    const id = push(dbRef).key
    const dbPath = child(rootReference, `produk/${id}`)
    const result = {...data, gambar: id, id}
    const {mimetype} = thumbnail
    const dbSet = await set(dbPath, result)
    const name = id
    await addImageToStorage(thumbnail, name)
    return id
}   

const updateNoImages = async (data,id) =>{
    const dbOld = child(rootReference, `produk/${id}`)
    const dbOldGet = await get(dbOld)
    const dbOldGetObject = dbOldGet.val()
    if(!dbOldGetObject){
        return false
    }else{
        const newData = {
            ...data,
            gambar: dbOldGetObject.gambar,
            id,
        }
        const updateData = await set(dbOld, newData)
    }
}

const updateWithImages = async ({ data, id, gambar }) => {
    await update({ data, id, gambar });

};

const update = async ({data, id, gambar}) =>{
    const dbOld = child(rootReference, `produk/${id}`);
  const dbOldGet = await get(dbOld);
  const dbOldGetObject = dbOldGet.val();
  if (!dbOldGetObject) {
    return false;
  } else {
    const oldThumbnail = dbOldGetObject.gambar;
    const newData = {
      ...data,
      gambar: id,
      id,
    };

    await deleteImageFromStorage(oldThumbnail);

    const dbSet = await set(dbOld, newData);
    const name = `${id}`;
    await addImageToStorage(gambar, name );
    return dbSet;
  }
}

const deleteProduct = async (id) =>{
    const dbPath = child(rootReference, `produk/${id}`)
    const valuedbPath = await get(dbPath)
    const isExist = valuedbPath.val()
    if(!isExist){
        return false
    }else{
        await deleteImageFromStorage(id)
        return remove(dbPath)
    }
}



export {getAllProduk, getDetailProduk, pushProduk, updateNoImages, updateWithImages, update, deleteProduct}