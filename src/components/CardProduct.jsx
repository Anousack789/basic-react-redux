import { any } from 'prop-types';
function CardProduct({ item }) {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={item.image} alt='Shoes' />
      </figure>
      <div className='card-body p-4'>
        <h2 className='card-title'>{item.title}</h2>
        <p>{item.description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>{item.category}</button>
        </div>
      </div>
    </div>
  );
}
CardProduct.propTypes = {
  item: any,
};
export default CardProduct;
