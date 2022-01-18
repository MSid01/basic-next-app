import Link from "next/link";

const Products = () => {
  const pids = ['id1', 'id2', 'id3']
  return (
    <div>
      <h1>Products paGE</h1>
      <ul>
        {pids.map(function(pid, index) {
        return (<li key={index}><Link href={`/product/${pid}`} as={`/product/${pid}`}><a>product {pid}</a></Link></li>)
        })}
      </ul>
    </div>
  );
};
export default Products;
