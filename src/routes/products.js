import content from '../data/content.json';

export const loadProductById = ({ params }) => {
    const product = content?.products?.find((item) => String(item?.id) === String(params.productId));
   
    return {product};
};
