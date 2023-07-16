import Imageshow from './Imageshow';
import './imagelist.css'
function Imagelist({images}){
    const renderImage=images.map((image)=>{
        return <Imageshow key={image.id} images={image}></Imageshow>
    });
    return <div className='image-list'>{renderImage}</div>
}
export default Imagelist;