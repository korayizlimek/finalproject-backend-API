const products = [
    {
        name: "Adana Kebap",
        imageUrl:
            "https://cdn.yemek.com/mnresize/940/940/uploads/2019/01/ev-usulu-urfa-kebap-tarifi.jpg",
        species: "Izgara",
        countInStock: 50,
        price: 20,
        description:
            "Acili Adana Kebap - Erkek Kuzu etinden yapilmistir",
    },
    {
        name: "Tavuk şiş",
        imageUrl:
            "https://i12.haber7.net//haber/haber7/photos/2019/27/firinda_tavuk_sis_nasil_yapilir_1561966879_9606.jpg",
        species: "Izgara",
        countInStock: 40,
        price: 15,
        description: "Tavuk iki şiş olarak şişlenir ve servis edilir",
    },
    {
        name: "kuşbaşı şiş",
        imageUrl:
            "https://www.akbulutet.com/Uploads/UrunResimleri/buyuk/kuzu-cop-sis-1-4422.png",
        species: "Izgara",
        countInStock: 35,
        price: 25,
        description:
            "Kuzu etinden yapılmış olup, Ozel baharatlarla servis edilir",
    },
    {
        name: "şalgam",
        imageUrl:
            "data:image/jpeg;base64,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",
        species: "Izgara",
        countInStock: 100,
        price: 4,
        description: "Adanamızın yöresel ve özel içeceğidir",
    },
];

module.exports = products;
