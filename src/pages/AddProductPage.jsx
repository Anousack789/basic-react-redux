import { useState } from 'react';
function AddProductPage() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(parseInt(e.target.value));
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  return (
    <div>
      <div className='w-1/2 my-10 m-auto'>
        <p className='text-center font-bold text-2xl mb-5'>Add Product Form</p>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Title</span>
          </label>
          <input
            type='text'
            className='input input-bordered'
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='number'
            className='input input-bordered'
            value={price}
            onChange={handlePrice}
          />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Description</span>
          </label>
          <input
            type='text'
            className='input input-bordered'
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Category</span>
          </label>
          <input
            type='text'
            className='input input-bordered'
            value={category}
            onChange={handleCategory}
          />
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddProductPage;
