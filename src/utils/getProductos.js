import productos from "../components/mock/productos";

const getProductos =() => {

    return new Promise((resolve,reject)=>{
            const ok= true;
            setTimeout(() => {
                if(ok) {
                    resolve(productos);
                } else{
                    reject('error');
                }
            
            }, 4000);
        })
        

    }

export default getProductos;

        
