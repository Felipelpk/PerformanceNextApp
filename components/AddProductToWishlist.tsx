export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({ onAddToWishList, onRequestClose }: AddProductToWishListProps) {
  return (
    <span>
      Desseja adicionar aos favoritos ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}