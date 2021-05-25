import { memo, useState } from 'react'
// import { AddProductToWishlist } from './AddProductToWishlist'
import { AddProductToWishListProps } from './AddProductToWishlist'

import dynamic from 'next/dynamic'

const AddProductToWishlist  = dynamic<AddProductToWishListProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, )


interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({product, onAddToWishList}: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)} >Adicionar aos favoritos</button>
      {isAddingToWishlist && (
        <AddProductToWishlist 
        onAddToWishList={() => onAddToWishList(product.id)}
        onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
})