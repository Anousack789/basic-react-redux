import { useGetAllProductQuery } from '../redux/features/productApi';
import CardProduct from '../components/CardProduct';
function ProductPage() {
  const { data } = useGetAllProductQuery({});
  return (
    <div className='container m-auto p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5'>
      {data &&
        data.map((d, i) => {
          return (
            <div key={i}>
              <CardProduct item={d} />
            </div>
          );
        })}
    </div>
  );
}

export default ProductPage;
