import indoor from "./Indoor.jpg"
import outDooringImg from "./outDoorImg.jpg"
import staff from "./staff.jpg"
import variety from "./variety.jpg"
const siteDetails={
    title: "Ritu's Cake Shop 🎂🍰",
    description: "Ritu's Cake Shop is famous for Various tasty and healthy cake shop😋",
    contactDetails:"Deolali Camp, , Pune , Maharashtra , India",
    showFeatures: true,
}
const features=[
    {
        title: "Well-design Indoor shop to sit and enjoy Pastree with someoneSpecial❤️😸",
        img:indoor,
    },
    {
        title: "A beautiful cake shop🏬🦋",
        img:outDooringImg,
    },
    {
        title: "Well-Trained staf to make delicious cake....!!!👩‍🍳👨‍🍳🤩",
        img:staff,
    },
    {
        title: "Delicious VAriety cof cakes that you needed...😍😘",
        img:variety,
    }
]
const theme={
    primaryColor:"#809fff",
    secondaryColor:" #809fff",
    text:"#004d4d"
}

export {siteDetails,features,theme}