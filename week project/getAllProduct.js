export const getAllProduct = async (req, res) => {
    const { search, category, minPrice, maxPrice, page = 1, limit = 10 } = req.query;
    const query = {};

    if (search) {
        query.name = { $regex: search, $options: "i" };
    }
    if (category) {
        query.category = category
    }
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);

    }
    const skip = (page - 1) * limit;

    const products = await Product.find(query)

        .skip(skip)

        .limit(Number(limit));

    const total = await Product.countDocuments(query);
    res.json({
        total,
        page: Number(page),
        totalPages: Math.ceil(total / limit),
        products
    });
}
