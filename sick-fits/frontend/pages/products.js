import {  useQuery } from '@apollo/client'
import gql from 'graphql-tag'


const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function products() {
    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)
    console.log(error,data,loading)
    if (loading) {
       return <div><p>Loading</p></div>
    }
    if (error) {
        return <div><p>Error Loading Products</p></div>
    }
    return (
        <div> {data.allProducts.map((product) => <p>{product.name}</p>)}</div>
    )
}
