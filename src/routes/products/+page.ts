type Product = {
    src: string;
    title: string;
    description: string;
    block: string[];
}

const items: Record<number, Product> = {
    1: {
        src: 'image1.jpg',
        title: 'candela',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        block: ['free shipping', 'one week', 'express shipping']
    },
    2: {
        src: 'image2.jpg',
        title: 'candela',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        block: ['free shipping', 'one week', 'express shipping']
    },
    3: {
        src: 'image3.jpg',
        title: 'candela',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        block: ['free shipping', 'one week', 'express shipping']
    }
};

export const load = async () => {
    return {
        items
    }
}