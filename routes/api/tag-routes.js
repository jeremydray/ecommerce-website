const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsList = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
      order: [['id', 'ASC']]
    });
    res.status(200).json(tagsList)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagById = await Tag.findByPk(req.params.id,
      {
        include: [{ model: Product, through: ProductTag }]
      })

    if (!tagById) {
      res.status(404).json({ message: 'No tags found with this id!' });
      return;
    }

    res.status(200).json(tagById)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  //req.body will be a reuqest on Insomnia for the body below; id should be generated automatically
  // {
  //   tag_name:
  // }
  try {
    const newTag = await Tag.create(req.body)

    res.status(200).json(newTag)
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(updatedTag)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagById = await Tag.destroy({
      where: { id: req.params.id }
    })
    res.status(200).json(tagById)
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
