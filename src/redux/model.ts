export interface ProductModel {
    name: string,
    price: number,
    category: string,
    description: string,
    avatar: string,
    developerEmail: string,
}

export interface ProductsArray {
    productsArray: ProductModel[],
    particularProduct: ProductModel,
}

export interface FavoriteProducts {
    favoriteProducts: ProductModel[],
}

