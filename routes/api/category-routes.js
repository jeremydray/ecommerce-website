const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesList = await Category.findAll({
      include: [{ model: Product }],
      order: [['id', 'ASC']]
    });
    res.status(200).json(categoriesList)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryById = await Category.findByPk(req.params.id,
      {
        include: [{ model: Product }]
      })

    if (!categoryById) {
      res.status(404).json({ message: 'No categories found with this id!' });
      return;
    }

    res.status(200).json(categoryById)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  //req.body will be a reuqest on Insomnia for the body below; id should be generated automatically
  // {
  //   category_name:
  // }
  try {
    const newCategory = await Category.create(req.body)

    res.status(200).json(newCategory)
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(updatedCategory)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryById = await Category.destroy({
      where: { id: req.params.id }
    })
    res.status(200).json(categoryById)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
