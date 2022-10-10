import { createContext } from "react";

export const AppContext = createContext()
export let allfoods = {
    breakfast: [
        {
            id: 1,
            name: 'Burger',
            region: 'American',
            price: 200,
            img: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mtgq0q3omb6geywcpucb'
        },
        {
            id: 2,
            name: 'Idli',
            region: 'South-Indian',
            price: 300,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7351/16381790937_c66e43bcf8_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 3,
            name: 'Mendu Vada',
            region: 'South-Indian',
            price: 280,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7667/17097712982_719bb3704d_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 4,
            name: 'Rava Kichadi',
            region: 'South-Indian',
            price: 570,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm9.staticflickr.com/8710/16913029449_680bdf51df_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 5,
            name: 'Rava Idli',
            region: 'South-Indian',
            price: 450,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm9.staticflickr.com/8759/16476830814_4cac5c5547_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 6,
            name: 'Rava Dosa',
            region: 'South-Indian',
            price: 200,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7648/17097745792_34eff01907_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 7,
            name: 'Onion Uttapam',
            region: 'South-Indian',
            price: 250,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm9.staticflickr.com/8708/17098602481_90ba759de1_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 8,
            name: 'Ven Pongal',
            region: 'South-Indian',
            price: 850,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7722/16912925309_3ed9255357_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 9,
            name: 'Adai',
            region: 'South-Indian',
            price: 450,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7704/16913017579_25d13723a8_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
        {
            id: 10,
            name: 'Appam',
            region: 'South-Indian',
            price: 650,
            img: 'https://www.chitrasfoodbook.com/ezoimgfmt/farm8.staticflickr.com/7624/17099203825_e07f65c41c_q.jpg?ezimgfmt=rs:150x150/rscb1/ng:webp/ngcb1'
        },
    ],
    lunch: [
        {
            id: 1,
            name: 'Moong daal',
            region: 'Indian',
            price: 200,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/moong_dal_spinach-300x225.jpg'
        },
        {
            id: 2,
            name: 'Bhindi masala',
            region: 'Indian',
            price: 400,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/bhindi_masala_spicy_okra-300x225.jpg'
        },
        {
            id: 3,
            name: 'Cabbage with peas',
            region: 'Indian',
            price: 800,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/cabbage_peas-300x225.jpg'
        },
        {
            id: 4,
            name: 'Plain rice',
            region: 'Indian',
            price: 300,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/rice_white_plain-300x225.jpg'
        },
        {
            id: 5,
            name: 'Roti',
            region: 'Indian',
            price: 80,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/roti_chapati-300x225.jpg'
        },
        {
            id: 6,
            name: 'Pav bhaji',
            region: 'Indian',
            price: 380,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/pav_bhaji-300x225.jpg'
        },
        {
            id: 7,
            name: 'Lentil vegetable soup',
            region: 'Indian',
            price: 300,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/lentil_vegetable_soup-300x225.jpg'
        },
        {
            id: 8,
            name: 'Aloo paratha',
            region: 'Indian',
            price: 30,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/aloo_paratha1-300x225.jpg'
        },
        {
            id: 9,
            name: 'Plain yogurt',
            region: 'Indian',
            price: 230,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/how_to_make_yogurt-300x200.jpg'
        },
        {
            id: 10,
            name: 'Tomato chutney',
            region: 'Indian',
            price: 300,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/tomato_chutney-300x225.jpg'
        },
    ],
    dinner: [
        {
            id: 1,
            name: 'Aloo paratha',
            region: 'Indian',
            price: 30,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/aloo_paratha1-300x225.jpg'
        },
        {
            id: 2,
            name: 'Lentil vegetable soup',
            region: 'Indian',
            price: 300,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/lentil_vegetable_soup-300x225.jpg'
        },
        {
            id: 3,
            name: 'Plain rice',
            region: 'Indian',
            price: 300,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/rice_white_plain-300x225.jpg'
        },
        {
            id: 4,
            name: 'Roti',
            region: 'Indian',
            price: 80,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/roti_chapati-300x225.jpg'
        },
        {
            id: 5,
            name: 'Pav bhaji',
            region: 'Indian',
            price: 380,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/pav_bhaji-300x225.jpg'
        },
        {
            id: 6,
            name: 'Moong daal',
            region: 'Indian',
            price: 200,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/moong_dal_spinach-300x225.jpg'
        },
        {
            id: 7,
            name: 'Bhindi masala',
            region: 'Indian',
            price: 400,
            img: 'https://www.manjulaskitchen.com/wp-content/uploads/bhindi_masala_spicy_okra-300x225.jpg'
        },
    ],
    desserts: [
        {
            id: 1,
            name: 'Peach custard tart',
            region: 'Indian',
            price: 300,
            img: 'https://realfood.tesco.com/media/images/RFO-472x310-Peach-tart-affd7f4f-d14d-4fdd-94d6-0c4691533921-0-472x310.jpg'

        },
        {
            id: 2,
            name: 'Chocolate and honeycomb ice cream terrine',
            region: 'Indian',
            price: 800,
            img: 'https://realfood.tesco.com/media/images/RFO-ChocolateHoneycombTerrine-472x310-v1-mini-edad8366-23fb-4e83-ac7a-10e855ad82c5-0-472x310.jpg'

        },
        {
            id: 3,
            name: 'Slow cooker bread pudding with caramel',
            region: 'Indian',
            price: 800,
            img: 'https://realfood.tesco.com/media/images/RFO-MainHero-472x310-Pudding-mini-132f9240-8cd0-48af-a8fe-4a04d0c0416c-0-472x310.jpg'

        },
        {
            id: 4,
            name: 'Warm orange cake with roasted rhubarb',
            region: 'Indian',
            price: 100,
            img: 'https://realfood.tesco.com/media/images/RFO-472X310PX-Rhubarb-cake-3a744067-99df-4eab-b89f-fc769b044bfb-0-472x310.jpg'

        },
        {
            id: 5,
            name: 'Classic chocolate mousse',
            region: 'Indian',
            price: 1800,
            img: 'https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg'

        },
        {
            id: 6,
            name: 'Sheet Pan Shrimp Scampi',
            region: 'Indian',
            price: 1100,
            img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/8/28/0/FN_SHEET-PAN-SHRIMP-SCAMPI-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1503928474275.jpeg'

        },
        {
            id: 7,
            name: 'Rosemary-Garlic Pork Chops with Chickpeas',
            region: 'Indian',
            price: 1300,
            img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/7/25/0/FNM_090117-Rosted-Garlic-Pork-Chops-with-Chickpeas_s4x3.jpg.rend.hgtvcom.966.725.suffix/1501041517192.jpeg'

        },
    ]
}