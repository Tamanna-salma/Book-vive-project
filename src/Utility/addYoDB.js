const getStorBook=()=>{
 const storedBookSTR =localStorage.getItem("readList") ;
 if(storedBookSTR){
    const storedBookData=JSON.parse(storedBookSTR);
    return storedBookData;
 }
 else{
    return[];
 }
}
const addToStoreDB=(id)=>{
    const storedBookData=getStorBook(id);
    if(storedBookData.includes(id)){
        alert('already id exist');
    
    }else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)
    }
    
}

const getwistBook=()=>{
const wistBookSTR=localStorage.getItem("wistList");
    if(wistBookSTR){
        const wistbookData=JSON.parse(wistBookSTR);
        return wistbookData;
    }
    else{
        return [];
    }    
} 
const AddToStoreDB=(id)=>{
    const wistBookData =getwistBook(id);
    if(wistBookData.includes(id)){
        alert("Id already Add");
    }
    else{
        wistBookData.push(id);
        const data =JSON.stringify(wistBookData);
        localStorage.setItem("wistList",data)
    }

}

export {addToStoreDB,AddToStoreDB}
